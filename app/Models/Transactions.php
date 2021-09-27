<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{
    use HasFactory;
    protected $table='service';

    protected $guarded=[];
    protected $hidden=['code'];

    public function client()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public function drivers()
    {
        return $this->belongsToMany(Tricycle::class,'driver_service','transaction_id','driver_id');
    }
    public function loc1()
    {
        return $this->belongsTo(Locations::class,'pickup');
    }
    public function loc2()
    {
        return $this->belongsTo(Locations::class,'destination');
    }
    public static function getnextdriver($counter){
        $count=$counter/2;
        if($counter%2!=0) $count++;
        $lastid=Tricycle::where('status','active')->orderBy('id','desc')->first()->id;
        $lasttrans=Transactions::orderBy('id','desc')->first()->id??0;
        if($lasttrans==0)
            return Tricycle::where('status','active')->take($count)->get()->pluck('id')->toArray();
        $trans=Transactions::orderBy('service.id','desc')->join('driver_service','service.id','driver_service.transaction_id')->where('driver_service.transaction_id',$lasttrans)->get()->pluck('driver_id')->toArray();
        
        if(!$trans)
            return Tricycle::where('status','active')->take($count)->get()->pluck('id')->toArray();
        if(sizeof($trans)==0)
            return Tricycle::where('status','active')->take($count)->get()->pluck('id')->toArray();
        else{
            $max=max($trans);
            if($lastid==$max)
                return Tricycle::where('status','active')->orderBy('id','asc')->take($count)->get()->pluck('id')->toArray();
            $ids=Tricycle::where('id','>',$max)->where('status','active')->orderBy('id','asc')->take($count)->get()->pluck('id')->toArray();
            $ctr=sizeof($ids);
            if($ctr<$count){
                $ids=array_merge($ids,Tricycle::where('status','active')->orderBy('id','asc')->take($count-$ctr)->get()->pluck('id')->toArray());
            }
            return $ids;
        }
    }
    
    protected $with=["drivers",'client','loc1','loc2'];
}
