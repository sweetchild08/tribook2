<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Profile;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);
        $user = User::where("username", $request->username)->first();
        if(!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'username' => ['The provided credentials are incorrect.'],
            ]);
        }
        if($user->status!='verified'){
            return \response([
                'status'=>'failed',
                'msg'=> 'Account was not verified yet'
            ],403);
        }
        return response()->json(['user' => $user, 'token' => $user->createToken($user->username)->plainTextToken]);
    }

    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users',
            'cpnum' => 'required|string|max:255',
            // 'email' => 'required|email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
                'username' => $validatedData['username'],
                'cpnum' => $validatedData['cpnum'],
                // 'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
                'code' => Str::random(4),
            ]);
            if($user)
                Profile::create([
                    'name' => $validatedData['name'],
                    'user_id' => $user->id,
                ]);
        $ms="Tribook: your code is ".$user->code;
        $this->itexmo($user->cpnum,$ms);

        $token = $user->createToken('auth_token')->plainTextToken;


        // return response()->json([
        //             'access_token' => $token,
        //             'token_type' => 'Bearer',
        // ]);
        return response()->json([
            'status' => 'success',
            'msg' => 'Please Confirm with Verification code',
        ]);
    }
    public function logout()
    {
        $request->user()->currentAccessToken()->delete();
        return \response(['status'=>'successful','msg'=>'Log out successful']);
    }
    public function myAccount()
    {
        if(auth('sanctum')->user()->acctype=='driver')
            return \response([
                'status'=>'successful',
                'user'=> auth('sanctum')->user(),
                'profile'=> auth('sanctum')->user()->driver
            ]);
        else
            return \response([
                'status'=>'successful',
                'user'=> auth('sanctum')->user(),
                'profile'=> auth('sanctum')->user()->profile
            ]);
    }
    public function verify(Request $request)
    {
        $validatedData = $request->validate([
            'code' => 'required',
        ]);
        $user=User::where('code',$request->input('code'))->first();
        if(!$user){
            return \response([
                'status'=>'failed',
                'msg'=> 'Code was not valid'
            ],403);
        }
        $user->status='verified';
        $user->save();
        return \response([
            'status'=>'success',
            'msg'=> 'The account was verified successfully'
        ]);
    }
    public function update(Request $request)
    {
        $user=auth('sanctum')->user();
        $data=[
            'username'=>$request->input('username'),
            'cpnum'=>$request->input('cpnum'),
            // 'email'=>$request->input('email'),
        ];
        if($request->input('password'))
            $data['password']=Hash::make($request->input('password'));
        $user->update($data);
        if($user->acctype=='driver')
            $user->driver->first()->update(['name'=>$request->input('name')]);
        else
            $user->profile->first()->update(['name'=>$request->input('name')]);
        return \response([
            'status'=>'successful',
            'msg'=> "Profile Updated Successfully",
        ]);
    }
    
    //##########################################################################
    // ITEXMO SEND SMS API - PHP - CURL-LESS METHOD
    // Visit www.itexmo.com/developers.php for more info about this API
    //##########################################################################
    function itexmo($number,$message){
        $apicode=config('app.apiCode');
        $passwd=config('app.apiPass');
        $url = 'https://www.itexmo.com/php_api/api.php';
        $itexmo = array(
            '1' => $number, 
            '2' => $message.'
', 
            '3' => $apicode, 
            'passwd' => $passwd);
        $param = array(
            'http' => array(
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($itexmo),
            ),
        );
        $context  = stream_context_create($param);
        return file_get_contents($url, false, $context);
    }
    public function gencode(Request $request)
    {
        $user=User::where('cpnum',$request->input('cpnum'))->first();
        if(!$user){
            return \response([
                'status'=>'failed',
                'msg'=> 'number not registered'
            ],404);
        }
        $user->code=Str::random(4);
        $user->save();
        $ms="Tribook: your code is ".$user->code;
        $this->itexmo($user->cpnum,$ms);
        return \response([
            'status'=>'success',
            'msg'=> 'code was sent'
        ]);
    }
    public function verifycode(Request $request)
    {
        $validatedData = $request->validate([
            'cpnum' => 'required',
            'code' => 'required',
        ]);
        $user=User::where('cpnum',$request->input('cpnum'))->first();
        if($user->code!=$validatedData['code']){
            return \response([
                'status'=>'failed',
                'msg'=> 'Code was not valid'
            ],403);
        }
        return \response([
            'status'=>'success',
            'msg'=> 'The code was verified'
        ]);
    }
    public function changepass(Request $request)
    {
        $validatedData = $request->validate([
            'cpnum' => 'required',
            'code' => 'required',
            'password' => 'required|string|min:8|confirmed',
        ]);
        $user=User::where('cpnum',$request->input('cpnum'))->where('cpnum',$request->input('cpnum'))->first();
        $user->password=Hash::make($validatedData['password']);
        $user->save();
        return \response([
            'status'=>'success',
            'msg'=> 'password was updated successfully'
        ]);
    }
}
