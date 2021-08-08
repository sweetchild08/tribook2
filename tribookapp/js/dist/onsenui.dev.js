"use strict";function _typeof2(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof2=function _typeof2(obj){return typeof obj;};}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof2(obj);}/* onsenui v2.11.2 - 2021-01-12 */(function(global,factory){(typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.ons=factory();})(void 0,function(){'use strict';var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return _typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};var classCallCheck=function classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};var createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var defineProperty=function defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;};var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var inherits=function inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+_typeof2(superClass));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;};var objectWithoutProperties=function objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;};var possibleConstructorReturn=function possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(_typeof2(call)==="object"||typeof call==="function")?call:self;};var toConsumableArray=function toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}};/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ // Save HTMLElement object before Custom Elements polyfill patch global HTMLElement.
var NativeHTMLElement=window.HTMLElement;/**
 * @object ons.platform
 * @category util
 * @description
 *   [en]Utility methods to detect current platform.[/en]
 *   [ja]現在実行されているプラットフォームを検知するためのユーティリティメソッドを収めたオブジェクトです。[/ja]
 */var Platform=function(){/**
   * All elements will be rendered as if the app was running on this platform.
   * @type {String}
   */function Platform(){classCallCheck(this,Platform);this._selectedPlatform=null;this._ignorePlatformSelect=false;}/**
   * @method select
   * @signature select(platform)
   * @param  {string} platform Name of the platform.
   *   [en]Possible values are: "opera", "firefox", "safari", "chrome", "ie", "android", "blackberry", "ios" or "wp".[/en]
   *   [ja]"opera", "firefox", "safari", "chrome", "ie", "android", "blackberry", "ios", "wp"のいずれかを指定します。[/ja]
   * @description
   *   [en]Sets the platform used to render the elements. Useful for testing.[/en]
   *   [ja]要素を描画するために利用するプラットフォーム名を設定します。テストに便利です。[/ja]
   */createClass(Platform,[{key:'select',value:function select(platform){if(typeof platform==='string'){this._selectedPlatform=platform.trim().toLowerCase();}}},{key:'_getSelectedPlatform',value:function _getSelectedPlatform(){return this._ignorePlatformSelect?null:this._selectedPlatform;}},{key:'_runOnActualPlatform',value:function _runOnActualPlatform(fn){this._ignorePlatformSelect=true;var result=fn();this._ignorePlatformSelect=false;return result;}//----------------
// General
//----------------
/**
     * @method isWebView
     * @signature isWebView()
     * @description
     *   [en]Returns whether app is running in Cordova.[/en]
     *   [ja]Cordova内で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isWebView',value:function isWebView(){if(document.readyState==='loading'||document.readyState=='uninitialized'){throw new Error('isWebView() method is available after dom contents loaded.');}return!!(window.cordova||window.phonegap||window.PhoneGap);}//----------------
// iOS devices
//----------------
/**
     * @method isIPhone
     * @signature isIPhone()
     * @description
     *   [en]Returns whether the device is iPhone.[/en]
     *   [ja]iPhone上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isIPhone',value:function isIPhone(){return /iPhone/i.test(navigator.userAgent);}/**
     * @method isIPhoneX
     * @signature isIPhoneX()
     * @description
     *   [en]Returns whether the device is iPhone X, XS, XS Max, XR, 11, 11 Pro, 11 Pro Max, 12 Mini, 12, 12 Pro or 12 Pro Max.[/en]
     *   [ja]iPhone X や XS、XS Max、XR、11、11 Pro、11 Pro Max、12 Mini、12、12 Pro、または12 Pro Max上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isIPhoneX',value:function isIPhoneX(){// iOS WebViews on the same iOS version have the same user agent.
// We cannot avoid using window.screen.
// We also cannot use cordova-plugin-device since its behavior is different between simulators and real devices.
// This works well both in iOS Safari and (UI|WK)WebView of iPhone X.
return this.isIPhone()&&(// X, XS, 11 Pro, 12 Mini
window.screen.width===375&&window.screen.height===812||// portrait
window.screen.width===812&&window.screen.height===375||// landscape
// XS Max, XR, 11, 11 Pro Max
window.screen.width===414&&window.screen.height===896||// portrait
window.screen.width===896&&window.screen.height===414||// landscape
// 12, 12 Pro
window.screen.width===390&&window.screen.height===844||// portrait
window.screen.width===844&&window.screen.height===390||// landscape
// 12 Pro Max
window.screen.width===428&&window.screen.height===926||// portrait
window.screen.width===926&&window.screen.height===428// landscape
);}/**
     * @method isIPad
     * @signature isIPad()
     * @description
     *   [en]Returns whether the device is iPad.[/en]
     *   [ja]iPad上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isIPad',value:function isIPad(){return /iPad/i.test(navigator.userAgent)||this.isIPadOS();}/**
     * @return {Boolean}
     */},{key:'isIPod',value:function isIPod(){return /iPod/i.test(navigator.userAgent);}//----------------
// iOS versions
//----------------
/**
     * @method isIOS
     * @signature isIOS([forceActualPlatform])
     * @param {Boolean} forceActualPlatform
     *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Returns whether the OS is iOS. By default will return manually selected platform if it is set.[/en]
     *   [ja]iOS上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isIOS',value:function isIOS(forceActualPlatform){if(!forceActualPlatform&&this._getSelectedPlatform()){return this._getSelectedPlatform()==='ios';}if((typeof device==='undefined'?'undefined':_typeof(device))==='object'&&!/browser/i.test(device.platform)){return /iOS/i.test(device.platform);}else{return /iPhone|iPad|iPod/i.test(navigator.userAgent)||this.isIPadOS();}}/**
     * @method isIOS7above
     * @signature isIOS7above()
     * @description
     *   [en]Returns whether the iOS version is 7 or above.[/en]
     *   [ja]iOS7以上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isIOS7above',value:function isIOS7above(){if((typeof device==='undefined'?'undefined':_typeof(device))==='object'&&!/browser/i.test(device.platform)){return /iOS/i.test(device.platform)&&parseInt(device.version.split('.')[0])>=7;}else if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){var ver=(navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[''])[0].replace(/_/g,'.');return parseInt(ver.split('.')[0])>=7;}return false;}/**
     * @method isIPadOS
     * @signature isIPadOS()
     * @description
     *   [en]Returns whether the OS is iPadOS.[/en]
     *   [ja][/ja]
     * @return {Boolean}
     */},{key:'isIPadOS',value:function isIPadOS(){// The iPadOS User Agent string is the same as MacOS so as a
// workaround we test the max touch points, which is 5 for
// iPads and 0 for desktop browsers.
return!!(/Macintosh/i.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints===5);}//----------------
// iOS browsers
//----------------
/**
     * @method isIOSSafari
     * @signature isIOSSafari()
     * @description
     *   [en]Returns whether app is running in iOS Safari.[/en]
     *   [ja]iOS Safariで実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isIOSSafari',value:function isIOSSafari(){var navigator=window.navigator;var ua=navigator.userAgent;return!!(this.isIOS()&&ua.indexOf('Safari')!==-1&&ua.indexOf('Version')!==-1&&!navigator.standalone);}/**
     * @method isWKWebView
     * @signature isWKWebView()
     * @description
     *   [en]Returns whether app is running in WKWebView.[/en]
     *   [ja]WKWebViewで実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isWKWebView',value:function isWKWebView(){var lte9=/constructor/i.test(NativeHTMLElement);return!!(this.isIOS()&&window.webkit&&window.webkit.messageHandlers&&window.indexedDB&&!lte9);}//----------------
// Android devices
//----------------
/**
     * @method isAndroidPhone
     * @signature isAndroidPhone()
     * @description
     *   [en]Returns whether the device is Android phone.[/en]
     *   [ja]Android携帯上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isAndroidPhone',value:function isAndroidPhone(){return /Android/i.test(navigator.userAgent)&&/Mobile/i.test(navigator.userAgent);}/**
     * @method isAndroidTablet
     * @signature isAndroidTablet()
     * @description
     *   [en]Returns whether the device is Android tablet.[/en]
     *   [ja]Androidタブレット上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isAndroidTablet',value:function isAndroidTablet(){return /Android/i.test(navigator.userAgent)&&!/Mobile/i.test(navigator.userAgent);}//----------------
// Android versions
//----------------
/**
     * @method isAndroid
     * @signature isAndroid([forceActualPlatform])
     * @param {Boolean} forceActualPlatform
     *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Returns whether the OS is Android. By default will return manually selected platform if it is set.[/en]
     *   [ja]Android上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isAndroid',value:function isAndroid(forceActualPlatform){if(!forceActualPlatform&&this._getSelectedPlatform()){return this._getSelectedPlatform()==='android';}if((typeof device==='undefined'?'undefined':_typeof(device))==='object'&&!/browser/i.test(device.platform)){return /Android/i.test(device.platform);}else{return /Android/i.test(navigator.userAgent);}}//----------------
// Other devices
//----------------
/**
     * @method isWP
     * @signature isWP([forceActualPlatform])
     * @param {Boolean} forceActualPlatform
     *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Returns whether the OS is Windows phone. By default will return manually selected platform if it is set.[/en]
     *   [ja][/ja]
     * @return {Boolean}
     */},{key:'isWP',value:function isWP(forceActualPlatform){if(!forceActualPlatform&&this._getSelectedPlatform()){return this._getSelectedPlatform()==='wp';}if((typeof device==='undefined'?'undefined':_typeof(device))==='object'&&!/browser/i.test(device.platform)){return /Win32NT|WinCE/i.test(device.platform);}else{return /Windows Phone|IEMobile|WPDesktop/i.test(navigator.userAgent);}}/**
     * @method isBlackBerry
     * @signature isBlackBerry([forceActualPlatform])
     * @param {Boolean} forceActualPlatform
     *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Returns whether the device is BlackBerry. By default will return manually selected platform if it is set.[/en]
     *   [ja]BlackBerry上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isBlackBerry',value:function isBlackBerry(forceActualPlatform){if(!forceActualPlatform&&this._getSelectedPlatform()){return this._getSelectedPlatform()==='blackberry';}if((typeof device==='undefined'?'undefined':_typeof(device))==='object'&&!/browser/i.test(device.platform)){return /BlackBerry/i.test(device.platform);}else{return /BlackBerry|RIM Tablet OS|BB10/i.test(navigator.userAgent);}}//----------------
// Other browsers
//----------------
/**
     * @method isOpera
     * @signature isOpera([forceActualPlatform])
     * @param {Boolean} forceActualPlatform
     *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Returns whether the browser is Opera. By default will return manually selected platform if it is set.[/en]
     *   [ja]Opera上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isOpera',value:function isOpera(forceActualPlatform){if(!forceActualPlatform&&this._getSelectedPlatform()){return this._getSelectedPlatform()==='opera';}return!!window.opera||navigator.userAgent.indexOf(' OPR/')>=0;}/**
     * @method isFirefox
     * @signature isFirefox([forceActualPlatform])
     * @param {Boolean} forceActualPlatform
     *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Returns whether the browser is Firefox. By default will return manually selected platform if it is set.[/en]
     *   [ja]Firefox上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isFirefox',value:function isFirefox(forceActualPlatform){if(!forceActualPlatform&&this._getSelectedPlatform()){return this._getSelectedPlatform()==='firefox';}return typeof InstallTrigger!=='undefined';}/**
     * @method isSafari
     * @signature isSafari([forceActualPlatform])
     * @param {Boolean} forceActualPlatform
     *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Returns whether the browser is Safari. By default will return manually selected platform if it is set.[/en]
     *   [ja]Safari上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isSafari',value:function isSafari(forceActualPlatform){if(!forceActualPlatform&&this._getSelectedPlatform()){return this._getSelectedPlatform()==='safari';}return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0||function(p){return p.toString()==='[object SafariRemoteNotification]';}(!window['safari']||safari.pushNotification);}/**
     * @method isChrome
     * @signature isChrome([forceActualPlatform])
     * @param {Boolean} forceActualPlatform
     *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Returns whether the browser is Chrome. By default will return manually selected platform if it is set.[/en]
     *   [ja]Chrome上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isChrome',value:function isChrome(forceActualPlatform){if(!forceActualPlatform&&this._getSelectedPlatform()){return this._getSelectedPlatform()==='chrome';}return!!window.chrome&&!(!!window.opera||navigator.userAgent.indexOf(' OPR/')>=0)&&!(navigator.userAgent.indexOf(' Edge/')>=0);}/**
     * @method isIE
     * @signature isIE([forceActualPlatform])
     * @param {Boolean} forceActualPlatform
     *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Returns whether the browser is Internet Explorer. By default will return manually selected platform if it is set.[/en]
     *   [ja]Internet Explorer上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isIE',value:function isIE(forceActualPlatform){if(!forceActualPlatform&&this._getSelectedPlatform()){return this._getSelectedPlatform()==='ie';}return false||!!document.documentMode;}/**
     * @method isEdge
     * @signature isEdge([forceActualPlatform])
     * @param {Boolean} forceActualPlatform
     *   [en]If true, selected platform is ignored and the actual platform is returned.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Returns whether the browser is Edge. By default will return manually selected platform if it is set.[/en]
     *   [ja]Edge上で実行されているかどうかを返します。[/ja]
     * @return {Boolean}
     */},{key:'isEdge',value:function isEdge(forceActualPlatform){if(!forceActualPlatform&&this._getSelectedPlatform()){return this._getSelectedPlatform()==='edge';}return navigator.userAgent.indexOf(' Edge/')>=0;}//----------------
// Utility functions
//----------------
/**
     * @return {String}
     */},{key:'getMobileOS',value:function getMobileOS(){if(this.isAndroid()){return'android';}else if(this.isIOS()){return'ios';}else if(this.isWP()){return'wp';}else{return'other';}}/**
     * @return {String}
     */},{key:'getIOSDevice',value:function getIOSDevice(){if(this.isIPhone()){return'iphone';}else if(this.isIPad()){return'ipad';}else if(this.isIPod()){return'ipod';}else{return'na';}}}]);return Platform;}();var platform=new Platform();// For @onsenui/custom-elements
if(window.customElements){// even if native CE1 impl exists, use polyfill
window.customElements.forcePolyfill=true;}function createCommonjsModule(fn,module){return module={exports:{}},fn(module,module.exports),module.exports;}var _global=createCommonjsModule(function(module){// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports=typeof window!='undefined'&&window.Math==Math?window:typeof self!='undefined'&&self.Math==Math?self// eslint-disable-next-line no-new-func
:Function('return this')();if(typeof __g=='number')__g=global;// eslint-disable-line no-undef
});var _core=createCommonjsModule(function(module){var core=module.exports={version:'2.6.12'};if(typeof __e=='number')__e=core;// eslint-disable-line no-undef
});var _core_1=_core.version;var _isObject=function _isObject(it){return(typeof it==='undefined'?'undefined':_typeof(it))==='object'?it!==null:typeof it==='function';};var _anObject=function _anObject(it){if(!_isObject(it))throw TypeError(it+' is not an object!');return it;};var _fails=function _fails(exec){try{return!!exec();}catch(e){return true;}};// Thank's IE8 for his funny defineProperty
var _descriptors=!_fails(function(){return Object.defineProperty({},'a',{get:function get(){return 7;}}).a!=7;});var document$1=_global.document;// typeof document.createElement is 'object' in old IE
var is=_isObject(document$1)&&_isObject(document$1.createElement);var _domCreate=function _domCreate(it){return is?document$1.createElement(it):{};};var _ie8DomDefine=!_descriptors&&!_fails(function(){return Object.defineProperty(_domCreate('div'),'a',{get:function get(){return 7;}}).a!=7;});// 7.1.1 ToPrimitive(input [, PreferredType])
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive=function _toPrimitive(it,S){if(!_isObject(it))return it;var fn,val;if(S&&typeof(fn=it.toString)=='function'&&!_isObject(val=fn.call(it)))return val;if(typeof(fn=it.valueOf)=='function'&&!_isObject(val=fn.call(it)))return val;if(!S&&typeof(fn=it.toString)=='function'&&!_isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value");};var dP=Object.defineProperty;var f=_descriptors?Object.defineProperty:function defineProperty(O,P,Attributes){_anObject(O);P=_toPrimitive(P,true);_anObject(Attributes);if(_ie8DomDefine)try{return dP(O,P,Attributes);}catch(e){/* empty */}if('get'in Attributes||'set'in Attributes)throw TypeError('Accessors not supported!');if('value'in Attributes)O[P]=Attributes.value;return O;};var _objectDp={f:f};var _propertyDesc=function _propertyDesc(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value};};var _hide=_descriptors?function(object,key,value){return _objectDp.f(object,key,_propertyDesc(1,value));}:function(object,key,value){object[key]=value;return object;};var hasOwnProperty={}.hasOwnProperty;var _has=function _has(it,key){return hasOwnProperty.call(it,key);};var id=0;var px=Math.random();var _uid=function _uid(key){return'Symbol('.concat(key===undefined?'':key,')_',(++id+px).toString(36));};var _library=false;var _shared=createCommonjsModule(function(module){var SHARED='__core-js_shared__';var store=_global[SHARED]||(_global[SHARED]={});(module.exports=function(key,value){return store[key]||(store[key]=value!==undefined?value:{});})('versions',[]).push({version:_core.version,mode:_library?'pure':'global',copyright:'© 2020 Denis Pushkarev (zloirock.ru)'});});var _functionToString=_shared('native-function-to-string',Function.toString);var _redefine=createCommonjsModule(function(module){var SRC=_uid('src');var TO_STRING='toString';var TPL=(''+_functionToString).split(TO_STRING);_core.inspectSource=function(it){return _functionToString.call(it);};(module.exports=function(O,key,val,safe){var isFunction=typeof val=='function';if(isFunction)_has(val,'name')||_hide(val,'name',key);if(O[key]===val)return;if(isFunction)_has(val,SRC)||_hide(val,SRC,O[key]?''+O[key]:TPL.join(String(key)));if(O===_global){O[key]=val;}else if(!safe){delete O[key];_hide(O,key,val);}else if(O[key]){O[key]=val;}else{_hide(O,key,val);}// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype,TO_STRING,function toString(){return typeof this=='function'&&this[SRC]||_functionToString.call(this);});});var _aFunction=function _aFunction(it){if(typeof it!='function')throw TypeError(it+' is not a function!');return it;};// optional / simple context binding
var _ctx=function _ctx(fn,that,length){_aFunction(fn);if(that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a);};case 2:return function(a,b){return fn.call(that,a,b);};case 3:return function(a,b,c){return fn.call(that,a,b,c);};}return function()/* ...args */{return fn.apply(that,arguments);};};var PROTOTYPE='prototype';var $export=function $export(type,name,source){var IS_FORCED=type&$export.F;var IS_GLOBAL=type&$export.G;var IS_STATIC=type&$export.S;var IS_PROTO=type&$export.P;var IS_BIND=type&$export.B;var target=IS_GLOBAL?_global:IS_STATIC?_global[name]||(_global[name]={}):(_global[name]||{})[PROTOTYPE];var exports=IS_GLOBAL?_core:_core[name]||(_core[name]={});var expProto=exports[PROTOTYPE]||(exports[PROTOTYPE]={});var key,own,out,exp;if(IS_GLOBAL)source=name;for(key in source){// contains in native
own=!IS_FORCED&&target&&target[key]!==undefined;// export native or passed
out=(own?target:source)[key];// bind timers to global for call from export context
exp=IS_BIND&&own?_ctx(out,_global):IS_PROTO&&typeof out=='function'?_ctx(Function.call,out):out;// extend global
if(target)_redefine(target,key,out,type&$export.U);// export
if(exports[key]!=out)_hide(exports,key,exp);if(IS_PROTO&&expProto[key]!=out)expProto[key]=out;}};_global.core=_core;// type bitmap
$export.F=1;// forced
$export.G=2;// global
$export.S=4;// static
$export.P=8;// proto
$export.B=16;// bind
$export.W=32;// wrap
$export.U=64;// safe
$export.R=128;// real proto method for `library`
var _export=$export;var f$2={}.propertyIsEnumerable;var _objectPie={f:f$2};var toString={}.toString;var _cof=function _cof(it){return toString.call(it).slice(8,-1);};// fallback for non-array-like ES3 and non-enumerable old V8 strings
// eslint-disable-next-line no-prototype-builtins
var _iobject=Object('z').propertyIsEnumerable(0)?Object:function(it){return _cof(it)=='String'?it.split(''):Object(it);};// 7.2.1 RequireObjectCoercible(argument)
var _defined=function _defined(it){if(it==undefined)throw TypeError("Can't call method on  "+it);return it;};// to indexed object, toObject with fallback for non-array-like ES3 strings
var _toIobject=function _toIobject(it){return _iobject(_defined(it));};var gOPD=Object.getOwnPropertyDescriptor;var f$1=_descriptors?gOPD:function getOwnPropertyDescriptor(O,P){O=_toIobject(O);P=_toPrimitive(P,true);if(_ie8DomDefine)try{return gOPD(O,P);}catch(e){/* empty */}if(_has(O,P))return _propertyDesc(!_objectPie.f.call(O,P),O[P]);};var _objectGopd={f:f$1};// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */var check=function check(O,proto){_anObject(O);if(!_isObject(proto)&&proto!==null)throw TypeError(proto+": can't set as prototype!");};var _setProto={set:Object.setPrototypeOf||('__proto__'in{}?// eslint-disable-line
function(test,buggy,set){try{set=_ctx(Function.call,_objectGopd.f(Object.prototype,'__proto__').set,2);set(test,[]);buggy=!(test instanceof Array);}catch(e){buggy=true;}return function setPrototypeOf(O,proto){check(O,proto);if(buggy)O.__proto__=proto;else set(O,proto);return O;};}({},false):undefined),check:check};// 19.1.3.19 Object.setPrototypeOf(O, proto)
_export(_export.S,'Object',{setPrototypeOf:_setProto.set});var setPrototypeOf=_core.Object.setPrototypeOf;var _wks=createCommonjsModule(function(module){var store=_shared('wks');var _Symbol=_global.Symbol;var USE_SYMBOL=typeof _Symbol=='function';var $exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&_Symbol[name]||(USE_SYMBOL?_Symbol:_uid)('Symbol.'+name));};$exports.store=store;});// getting tag from 19.1.3.6 Object.prototype.toString()
var TAG=_wks('toStringTag');// ES3 wrong here
var ARG=_cof(function(){return arguments;}())=='Arguments';// fallback for IE11 Script Access Denied error
var tryGet=function tryGet(it,key){try{return it[key];}catch(e){/* empty */}};var _classof=function _classof(it){var O,T,B;return it===undefined?'Undefined':it===null?'Null'// @@toStringTag case
:typeof(T=tryGet(O=Object(it),TAG))=='string'?T// builtinTag case
:ARG?_cof(O)// ES3 arguments fallback
:(B=_cof(O))=='Object'&&typeof O.callee=='function'?'Arguments':B;};// 19.1.3.6 Object.prototype.toString()
var test={};test[_wks('toStringTag')]='z';if(test+''!='[object z]'){_redefine(Object.prototype,'toString',function toString(){return'[object '+_classof(this)+']';},true);}// 7.1.4 ToInteger
var ceil=Math.ceil;var floor=Math.floor;var _toInteger=function _toInteger(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it);};// true  -> String#at
// false -> String#codePointAt
var _stringAt=function _stringAt(TO_STRING){return function(that,pos){var s=String(_defined(that));var i=_toInteger(pos);var l=s.length;var a,b;if(i<0||i>=l)return TO_STRING?'':undefined;a=s.charCodeAt(i);return a<0xd800||a>0xdbff||i+1===l||(b=s.charCodeAt(i+1))<0xdc00||b>0xdfff?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-0xd800<<10)+(b-0xdc00)+0x10000;};};var _iterators={};// 7.1.15 ToLength
var min=Math.min;var _toLength=function _toLength(it){return it>0?min(_toInteger(it),0x1fffffffffffff):0;// pow(2, 53) - 1 == 9007199254740991
};var max=Math.max;var min$1=Math.min;var _toAbsoluteIndex=function _toAbsoluteIndex(index,length){index=_toInteger(index);return index<0?max(index+length,0):min$1(index,length);};// false -> Array#indexOf
// true  -> Array#includes
var _arrayIncludes=function _arrayIncludes(IS_INCLUDES){return function($this,el,fromIndex){var O=_toIobject($this);var length=_toLength(O.length);var index=_toAbsoluteIndex(fromIndex,length);var value;// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];// eslint-disable-next-line no-self-compare
if(value!=value)return true;// Array#indexOf ignores holes, Array#includes - not
}else for(;length>index;index++){if(IS_INCLUDES||index in O){if(O[index]===el)return IS_INCLUDES||index||0;}}return!IS_INCLUDES&&-1;};};var shared=_shared('keys');var _sharedKey=function _sharedKey(key){return shared[key]||(shared[key]=_uid(key));};var arrayIndexOf=_arrayIncludes(false);var IE_PROTO$1=_sharedKey('IE_PROTO');var _objectKeysInternal=function _objectKeysInternal(object,names){var O=_toIobject(object);var i=0;var result=[];var key;for(key in O){if(key!=IE_PROTO$1)_has(O,key)&&result.push(key);}// Don't enum bug & hidden keys
while(names.length>i){if(_has(O,key=names[i++])){~arrayIndexOf(result,key)||result.push(key);}}return result;};// IE 8- don't enum bug keys
var _enumBugKeys='constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var _objectKeys=Object.keys||function keys(O){return _objectKeysInternal(O,_enumBugKeys);};var _objectDps=_descriptors?Object.defineProperties:function defineProperties(O,Properties){_anObject(O);var keys=_objectKeys(Properties);var length=keys.length;var i=0;var P;while(length>i){_objectDp.f(O,P=keys[i++],Properties[P]);}return O;};var document$2=_global.document;var _html=document$2&&document$2.documentElement;// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var IE_PROTO=_sharedKey('IE_PROTO');var Empty=function Empty(){/* empty */};var PROTOTYPE$1='prototype';// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict=function createDict(){// Thrash, waste and sodomy: IE GC bug
var iframe=_domCreate('iframe');var i=_enumBugKeys.length;var lt='<';var gt='>';var iframeDocument;iframe.style.display='none';_html.appendChild(iframe);iframe.src='javascript:';// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
iframeDocument=iframe.contentWindow.document;iframeDocument.open();iframeDocument.write(lt+'script'+gt+'document.F=Object'+lt+'/script'+gt);iframeDocument.close();_createDict=iframeDocument.F;while(i--){delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];}return _createDict();};var _objectCreate=Object.create||function create(O,Properties){var result;if(O!==null){Empty[PROTOTYPE$1]=_anObject(O);result=new Empty();Empty[PROTOTYPE$1]=null;// add "__proto__" for Object.getPrototypeOf polyfill
result[IE_PROTO]=O;}else result=_createDict();return Properties===undefined?result:_objectDps(result,Properties);};var def=_objectDp.f;var TAG$1=_wks('toStringTag');var _setToStringTag=function _setToStringTag(it,tag,stat){if(it&&!_has(it=stat?it:it.prototype,TAG$1))def(it,TAG$1,{configurable:true,value:tag});};var IteratorPrototype={};// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype,_wks('iterator'),function(){return this;});var _iterCreate=function _iterCreate(Constructor,NAME,next){Constructor.prototype=_objectCreate(IteratorPrototype,{next:_propertyDesc(1,next)});_setToStringTag(Constructor,NAME+' Iterator');};// 7.1.13 ToObject(argument)
var _toObject=function _toObject(it){return Object(_defined(it));};// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var IE_PROTO$2=_sharedKey('IE_PROTO');var ObjectProto=Object.prototype;var _objectGpo=Object.getPrototypeOf||function(O){O=_toObject(O);if(_has(O,IE_PROTO$2))return O[IE_PROTO$2];if(typeof O.constructor=='function'&&O instanceof O.constructor){return O.constructor.prototype;}return O instanceof Object?ObjectProto:null;};var ITERATOR=_wks('iterator');var BUGGY=!([].keys&&'next'in[].keys());// Safari has buggy iterators w/o `next`
var FF_ITERATOR='@@iterator';var KEYS='keys';var VALUES='values';var returnThis=function returnThis(){return this;};var _iterDefine=function _iterDefine(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){_iterCreate(Constructor,NAME,next);var getMethod=function getMethod(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function keys(){return new Constructor(this,kind);};case VALUES:return function values(){return new Constructor(this,kind);};}return function entries(){return new Constructor(this,kind);};};var TAG=NAME+' Iterator';var DEF_VALUES=DEFAULT==VALUES;var VALUES_BUG=false;var proto=Base.prototype;var $native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT];var $default=$native||getMethod(DEFAULT);var $entries=DEFAULT?!DEF_VALUES?$default:getMethod('entries'):undefined;var $anyNative=NAME=='Array'?proto.entries||$native:$native;var methods,key,IteratorPrototype;// Fix native
if($anyNative){IteratorPrototype=_objectGpo($anyNative.call(new Base()));if(IteratorPrototype!==Object.prototype&&IteratorPrototype.next){// Set @@toStringTag to native iterators
_setToStringTag(IteratorPrototype,TAG,true);// fix for some old engines
if(!_library&&typeof IteratorPrototype[ITERATOR]!='function')_hide(IteratorPrototype,ITERATOR,returnThis);}}// fix Array#{values, @@iterator}.name in V8 / FF
if(DEF_VALUES&&$native&&$native.name!==VALUES){VALUES_BUG=true;$default=function values(){return $native.call(this);};}// Define iterator
if((!_library||FORCED)&&(BUGGY||VALUES_BUG||!proto[ITERATOR])){_hide(proto,ITERATOR,$default);}// Plug for library
_iterators[NAME]=$default;_iterators[TAG]=returnThis;if(DEFAULT){methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries};if(FORCED)for(key in methods){if(!(key in proto))_redefine(proto,key,methods[key]);}else _export(_export.P+_export.F*(BUGGY||VALUES_BUG),NAME,methods);}return methods;};var $at=_stringAt(true);// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String,'String',function(iterated){this._t=String(iterated);// target
this._i=0;// next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
},function(){var O=this._t;var index=this._i;var point;if(index>=O.length)return{value:undefined,done:true};point=$at(O,index);this._i+=point.length;return{value:point,done:false};});// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES=_wks('unscopables');var ArrayProto=Array.prototype;if(ArrayProto[UNSCOPABLES]==undefined)_hide(ArrayProto,UNSCOPABLES,{});var _addToUnscopables=function _addToUnscopables(key){ArrayProto[UNSCOPABLES][key]=true;};var _iterStep=function _iterStep(done,value){return{value:value,done:!!done};};// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator=_iterDefine(Array,'Array',function(iterated,kind){this._t=_toIobject(iterated);// target
this._i=0;// next index
this._k=kind;// kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
},function(){var O=this._t;var kind=this._k;var index=this._i++;if(!O||index>=O.length){this._t=undefined;return _iterStep(1);}if(kind=='keys')return _iterStep(0,index);if(kind=='values')return _iterStep(0,O[index]);return _iterStep(0,[index,O[index]]);},'values');// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments=_iterators.Array;_addToUnscopables('keys');_addToUnscopables('values');_addToUnscopables('entries');var ITERATOR$1=_wks('iterator');var TO_STRING_TAG=_wks('toStringTag');var ArrayValues=_iterators.Array;var DOMIterables={CSSRuleList:true,// TODO: Not spec compliant, should be false.
CSSStyleDeclaration:false,CSSValueList:false,ClientRectList:false,DOMRectList:false,DOMStringList:false,DOMTokenList:true,DataTransferItemList:false,FileList:false,HTMLAllCollection:false,HTMLCollection:false,HTMLFormElement:false,HTMLSelectElement:false,MediaList:true,// TODO: Not spec compliant, should be false.
MimeTypeArray:false,NamedNodeMap:false,NodeList:true,PaintRequestList:false,Plugin:false,PluginArray:false,SVGLengthList:false,SVGNumberList:false,SVGPathSegList:false,SVGPointList:false,SVGStringList:false,SVGTransformList:false,SourceBufferList:false,StyleSheetList:true,// TODO: Not spec compliant, should be false.
TextTrackCueList:false,TextTrackList:false,TouchList:false};for(var collections=_objectKeys(DOMIterables),i=0;i<collections.length;i++){var NAME=collections[i];var explicit=DOMIterables[NAME];var Collection=_global[NAME];var proto=Collection&&Collection.prototype;var key;if(proto){if(!proto[ITERATOR$1])_hide(proto,ITERATOR$1,ArrayValues);if(!proto[TO_STRING_TAG])_hide(proto,TO_STRING_TAG,NAME);_iterators[NAME]=ArrayValues;if(explicit)for(key in es6_array_iterator){if(!proto[key])_redefine(proto,key,es6_array_iterator[key],true);}}}var _redefineAll=function _redefineAll(target,src,safe){for(var key in src){_redefine(target,key,src[key],safe);}return target;};var _anInstance=function _anInstance(it,Constructor,name,forbiddenField){if(!(it instanceof Constructor)||forbiddenField!==undefined&&forbiddenField in it){throw TypeError(name+': incorrect invocation!');}return it;};// call something on iterator step with safe closing on error
var _iterCall=function _iterCall(iterator,fn,value,entries){try{return entries?fn(_anObject(value)[0],value[1]):fn(value);// 7.4.6 IteratorClose(iterator, completion)
}catch(e){var ret=iterator['return'];if(ret!==undefined)_anObject(ret.call(iterator));throw e;}};// check on default Array iterator
var ITERATOR$2=_wks('iterator');var ArrayProto$1=Array.prototype;var _isArrayIter=function _isArrayIter(it){return it!==undefined&&(_iterators.Array===it||ArrayProto$1[ITERATOR$2]===it);};var ITERATOR$3=_wks('iterator');var core_getIteratorMethod=_core.getIteratorMethod=function(it){if(it!=undefined)return it[ITERATOR$3]||it['@@iterator']||_iterators[_classof(it)];};var _forOf=createCommonjsModule(function(module){var BREAK={};var RETURN={};var exports=module.exports=function(iterable,entries,fn,that,ITERATOR){var iterFn=ITERATOR?function(){return iterable;}:core_getIteratorMethod(iterable);var f=_ctx(fn,that,entries?2:1);var index=0;var length,step,iterator,result;if(typeof iterFn!='function')throw TypeError(iterable+' is not iterable!');// fast case for arrays with default iterator
if(_isArrayIter(iterFn))for(length=_toLength(iterable.length);length>index;index++){result=entries?f(_anObject(step=iterable[index])[0],step[1]):f(iterable[index]);if(result===BREAK||result===RETURN)return result;}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;){result=_iterCall(iterator,f,step.value,entries);if(result===BREAK||result===RETURN)return result;}};exports.BREAK=BREAK;exports.RETURN=RETURN;});var SPECIES=_wks('species');var _setSpecies=function _setSpecies(KEY){var C=_global[KEY];if(_descriptors&&C&&!C[SPECIES])_objectDp.f(C,SPECIES,{configurable:true,get:function get(){return this;}});};var _meta=createCommonjsModule(function(module){var META=_uid('meta');var setDesc=_objectDp.f;var id=0;var isExtensible=Object.isExtensible||function(){return true;};var FREEZE=!_fails(function(){return isExtensible(Object.preventExtensions({}));});var setMeta=function setMeta(it){setDesc(it,META,{value:{i:'O'+ ++id,// object ID
w:{}// weak collections IDs
}});};var fastKey=function fastKey(it,create){// return primitive with prefix
if(!_isObject(it))return(typeof it==='undefined'?'undefined':_typeof(it))=='symbol'?it:(typeof it=='string'?'S':'P')+it;if(!_has(it,META)){// can't set metadata to uncaught frozen object
if(!isExtensible(it))return'F';// not necessary to add metadata
if(!create)return'E';// add missing metadata
setMeta(it);// return object ID
}return it[META].i;};var getWeak=function getWeak(it,create){if(!_has(it,META)){// can't set metadata to uncaught frozen object
if(!isExtensible(it))return true;// not necessary to add metadata
if(!create)return false;// add missing metadata
setMeta(it);// return hash weak collections IDs
}return it[META].w;};// add metadata on freeze-family methods calling
var onFreeze=function onFreeze(it){if(FREEZE&&meta.NEED&&isExtensible(it)&&!_has(it,META))setMeta(it);return it;};var meta=module.exports={KEY:META,NEED:false,fastKey:fastKey,getWeak:getWeak,onFreeze:onFreeze};});var _meta_1=_meta.KEY;var _meta_2=_meta.NEED;var _meta_3=_meta.fastKey;var _meta_4=_meta.getWeak;var _meta_5=_meta.onFreeze;var _validateCollection=function _validateCollection(it,TYPE){if(!_isObject(it)||it._t!==TYPE)throw TypeError('Incompatible receiver, '+TYPE+' required!');return it;};var dP$1=_objectDp.f;var fastKey=_meta.fastKey;var SIZE=_descriptors?'_s':'size';var getEntry=function getEntry(that,key){// fast case
var index=fastKey(key);var entry;if(index!=='F')return that._i[index];// frozen object case
for(entry=that._f;entry;entry=entry.n){if(entry.k==key)return entry;}};var _collectionStrong={getConstructor:function getConstructor(wrapper,NAME,IS_MAP,ADDER){var C=wrapper(function(that,iterable){_anInstance(that,C,NAME,'_i');that._t=NAME;// collection type
that._i=_objectCreate(null);// index
that._f=undefined;// first entry
that._l=undefined;// last entry
that[SIZE]=0;// size
if(iterable!=undefined)_forOf(iterable,IS_MAP,that[ADDER],that);});_redefineAll(C.prototype,{// 23.1.3.1 Map.prototype.clear()
// 23.2.3.2 Set.prototype.clear()
clear:function clear(){for(var that=_validateCollection(this,NAME),data=that._i,entry=that._f;entry;entry=entry.n){entry.r=true;if(entry.p)entry.p=entry.p.n=undefined;delete data[entry.i];}that._f=that._l=undefined;that[SIZE]=0;},// 23.1.3.3 Map.prototype.delete(key)
// 23.2.3.4 Set.prototype.delete(value)
'delete':function _delete(key){var that=_validateCollection(this,NAME);var entry=getEntry(that,key);if(entry){var next=entry.n;var prev=entry.p;delete that._i[entry.i];entry.r=true;if(prev)prev.n=next;if(next)next.p=prev;if(that._f==entry)that._f=next;if(that._l==entry)that._l=prev;that[SIZE]--;}return!!entry;},// 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
// 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
forEach:function forEach(callbackfn/* , that = undefined */){_validateCollection(this,NAME);var f=_ctx(callbackfn,arguments.length>1?arguments[1]:undefined,3);var entry;while(entry=entry?entry.n:this._f){f(entry.v,entry.k,this);// revert to the last existing entry
while(entry&&entry.r){entry=entry.p;}}},// 23.1.3.7 Map.prototype.has(key)
// 23.2.3.7 Set.prototype.has(value)
has:function has(key){return!!getEntry(_validateCollection(this,NAME),key);}});if(_descriptors)dP$1(C.prototype,'size',{get:function get(){return _validateCollection(this,NAME)[SIZE];}});return C;},def:function def(that,key,value){var entry=getEntry(that,key);var prev,index;// change existing entry
if(entry){entry.v=value;// create new entry
}else{that._l=entry={i:index=fastKey(key,true),// <- index
k:key,// <- key
v:value,// <- value
p:prev=that._l,// <- previous entry
n:undefined,// <- next entry
r:false// <- removed
};if(!that._f)that._f=entry;if(prev)prev.n=entry;that[SIZE]++;// add to index
if(index!=='F')that._i[index]=entry;}return that;},getEntry:getEntry,setStrong:function setStrong(C,NAME,IS_MAP){// add .keys, .values, .entries, [@@iterator]
// 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
_iterDefine(C,NAME,function(iterated,kind){this._t=_validateCollection(iterated,NAME);// target
this._k=kind;// kind
this._l=undefined;// previous
},function(){var that=this;var kind=that._k;var entry=that._l;// revert to the last existing entry
while(entry&&entry.r){entry=entry.p;}// get next entry
if(!that._t||!(that._l=entry=entry?entry.n:that._t._f)){// or finish the iteration
that._t=undefined;return _iterStep(1);}// return step by kind
if(kind=='keys')return _iterStep(0,entry.k);if(kind=='values')return _iterStep(0,entry.v);return _iterStep(0,[entry.k,entry.v]);},IS_MAP?'entries':'values',!IS_MAP,true);// add [@@species], 23.1.2.2, 23.2.2.2
_setSpecies(NAME);}};var ITERATOR$4=_wks('iterator');var SAFE_CLOSING=false;try{var riter=[7][ITERATOR$4]();riter['return']=function(){SAFE_CLOSING=true;};// eslint-disable-next-line no-throw-literal
}catch(e){/* empty */}var _iterDetect=function _iterDetect(exec,skipClosing){if(!skipClosing&&!SAFE_CLOSING)return false;var safe=false;try{var arr=[7];var iter=arr[ITERATOR$4]();iter.next=function(){return{done:safe=true};};arr[ITERATOR$4]=function(){return iter;};exec(arr);}catch(e){/* empty */}return safe;};var setPrototypeOf$2=_setProto.set;var _inheritIfRequired=function _inheritIfRequired(that,target,C){var S=target.constructor;var P;if(S!==C&&typeof S=='function'&&(P=S.prototype)!==C.prototype&&_isObject(P)&&setPrototypeOf$2){setPrototypeOf$2(that,P);}return that;};var _collection=function _collection(NAME,wrapper,methods,common,IS_MAP,IS_WEAK){var Base=_global[NAME];var C=Base;var ADDER=IS_MAP?'set':'add';var proto=C&&C.prototype;var O={};var fixMethod=function fixMethod(KEY){var fn=proto[KEY];_redefine(proto,KEY,KEY=='delete'?function(a){return IS_WEAK&&!_isObject(a)?false:fn.call(this,a===0?0:a);}:KEY=='has'?function has(a){return IS_WEAK&&!_isObject(a)?false:fn.call(this,a===0?0:a);}:KEY=='get'?function get(a){return IS_WEAK&&!_isObject(a)?undefined:fn.call(this,a===0?0:a);}:KEY=='add'?function add(a){fn.call(this,a===0?0:a);return this;}:function set(a,b){fn.call(this,a===0?0:a,b);return this;});};if(typeof C!='function'||!(IS_WEAK||proto.forEach&&!_fails(function(){new C().entries().next();}))){// create collection constructor
C=common.getConstructor(wrapper,NAME,IS_MAP,ADDER);_redefineAll(C.prototype,methods);_meta.NEED=true;}else{var instance=new C();// early implementations not supports chaining
var HASNT_CHAINING=instance[ADDER](IS_WEAK?{}:-0,1)!=instance;// V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
var THROWS_ON_PRIMITIVES=_fails(function(){instance.has(1);});// most early implementations doesn't supports iterables, most modern - not close it correctly
var ACCEPT_ITERABLES=_iterDetect(function(iter){new C(iter);});// eslint-disable-line no-new
// for early implementations -0 and +0 not the same
var BUGGY_ZERO=!IS_WEAK&&_fails(function(){// V8 ~ Chromium 42- fails only with 5+ elements
var $instance=new C();var index=5;while(index--){$instance[ADDER](index,index);}return!$instance.has(-0);});if(!ACCEPT_ITERABLES){C=wrapper(function(target,iterable){_anInstance(target,C,NAME);var that=_inheritIfRequired(new Base(),target,C);if(iterable!=undefined)_forOf(iterable,IS_MAP,that[ADDER],that);return that;});C.prototype=proto;proto.constructor=C;}if(THROWS_ON_PRIMITIVES||BUGGY_ZERO){fixMethod('delete');fixMethod('has');IS_MAP&&fixMethod('get');}if(BUGGY_ZERO||HASNT_CHAINING)fixMethod(ADDER);// weak collections should not contains .clear method
if(IS_WEAK&&proto.clear)delete proto.clear;}_setToStringTag(C,NAME);O[NAME]=C;_export(_export.G+_export.W+_export.F*(C!=Base),O);if(!IS_WEAK)common.setStrong(C,NAME,IS_MAP);return C;};var SET='Set';// 23.2 Set Objects
var es6_set=_collection(SET,function(get){return function Set(){return get(this,arguments.length>0?arguments[0]:undefined);};},{// 23.2.3.1 Set.prototype.add(value)
add:function add(value){return _collectionStrong.def(_validateCollection(this,SET),value=value===0?0:value,value);}},_collectionStrong);var _arrayFromIterable=function _arrayFromIterable(iter,ITERATOR){var result=[];_forOf(iter,false,result.push,result,ITERATOR);return result;};// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var _collectionToJson=function _collectionToJson(NAME){return function toJSON(){if(_classof(this)!=NAME)throw TypeError(NAME+"#toJSON isn't generic");return _arrayFromIterable(this);};};// https://github.com/DavidBruant/Map-Set.prototype.toJSON
_export(_export.P+_export.R,'Set',{toJSON:_collectionToJson('Set')});// https://tc39.github.io/proposal-setmap-offrom/
var _setCollectionOf=function _setCollectionOf(COLLECTION){_export(_export.S,COLLECTION,{of:function of(){var length=arguments.length;var A=new Array(length);while(length--){A[length]=arguments[length];}return new this(A);}});};// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
_setCollectionOf('Set');// https://tc39.github.io/proposal-setmap-offrom/
var _setCollectionFrom=function _setCollectionFrom(COLLECTION){_export(_export.S,COLLECTION,{from:function from(source/* , mapFn, thisArg */){var mapFn=arguments[1];var mapping,A,n,cb;_aFunction(this);mapping=mapFn!==undefined;if(mapping)_aFunction(mapFn);if(source==undefined)return new this();A=[];if(mapping){n=0;cb=_ctx(mapFn,arguments[2],2);_forOf(source,false,function(nextItem){A.push(cb(nextItem,n++));});}else{_forOf(source,false,A.push,A);}return new this(A);}});};// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
_setCollectionFrom('Set');var set$1=_core.Set;var MAP='Map';// 23.1 Map Objects
var es6_map=_collection(MAP,function(get){return function Map(){return get(this,arguments.length>0?arguments[0]:undefined);};},{// 23.1.3.6 Map.prototype.get(key)
get:function get(key){var entry=_collectionStrong.getEntry(_validateCollection(this,MAP),key);return entry&&entry.v;},// 23.1.3.9 Map.prototype.set(key, value)
set:function set(key,value){return _collectionStrong.def(_validateCollection(this,MAP),key===0?0:key,value);}},_collectionStrong,true);// https://github.com/DavidBruant/Map-Set.prototype.toJSON
_export(_export.P+_export.R,'Map',{toJSON:_collectionToJson('Map')});// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
_setCollectionOf('Map');// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
_setCollectionFrom('Map');var map=_core.Map;// 7.2.2 IsArray(argument)
var _isArray=Array.isArray||function isArray(arg){return _cof(arg)=='Array';};var SPECIES$1=_wks('species');var _arraySpeciesConstructor=function _arraySpeciesConstructor(original){var C;if(_isArray(original)){C=original.constructor;// cross-realm fallback
if(typeof C=='function'&&(C===Array||_isArray(C.prototype)))C=undefined;if(_isObject(C)){C=C[SPECIES$1];if(C===null)C=undefined;}}return C===undefined?Array:C;};// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var _arraySpeciesCreate=function _arraySpeciesCreate(original,length){return new(_arraySpeciesConstructor(original))(length);};// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var _arrayMethods=function _arrayMethods(TYPE,$create){var IS_MAP=TYPE==1;var IS_FILTER=TYPE==2;var IS_SOME=TYPE==3;var IS_EVERY=TYPE==4;var IS_FIND_INDEX=TYPE==6;var NO_HOLES=TYPE==5||IS_FIND_INDEX;var create=$create||_arraySpeciesCreate;return function($this,callbackfn,that){var O=_toObject($this);var self=_iobject(O);var f=_ctx(callbackfn,that,3);var length=_toLength(self.length);var index=0;var result=IS_MAP?create($this,length):IS_FILTER?create($this,0):undefined;var val,res;for(;length>index;index++){if(NO_HOLES||index in self){val=self[index];res=f(val,index,O);if(TYPE){if(IS_MAP)result[index]=res;// map
else if(res)switch(TYPE){case 3:return true;// some
case 5:return val;// find
case 6:return index;// findIndex
case 2:result.push(val);// filter
}else if(IS_EVERY)return false;// every
}}}return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:result;};};var f$3=Object.getOwnPropertySymbols;var _objectGops={f:f$3};// 19.1.2.1 Object.assign(target, source, ...)
var $assign=Object.assign;// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign=!$assign||_fails(function(){var A={};var B={};// eslint-disable-next-line no-undef
var S=Symbol();var K='abcdefghijklmnopqrst';A[S]=7;K.split('').forEach(function(k){B[k]=k;});return $assign({},A)[S]!=7||Object.keys($assign({},B)).join('')!=K;})?function assign(target,source){// eslint-disable-line no-unused-vars
var T=_toObject(target);var aLen=arguments.length;var index=1;var getSymbols=_objectGops.f;var isEnum=_objectPie.f;while(aLen>index){var S=_iobject(arguments[index++]);var keys=getSymbols?_objectKeys(S).concat(getSymbols(S)):_objectKeys(S);var length=keys.length;var j=0;var key;while(length>j){key=keys[j++];if(!_descriptors||isEnum.call(S,key))T[key]=S[key];}}return T;}:$assign;var getWeak=_meta.getWeak;var arrayFind=_arrayMethods(5);var arrayFindIndex=_arrayMethods(6);var id$1=0;// fallback for uncaught frozen keys
var uncaughtFrozenStore=function uncaughtFrozenStore(that){return that._l||(that._l=new UncaughtFrozenStore());};var UncaughtFrozenStore=function UncaughtFrozenStore(){this.a=[];};var findUncaughtFrozen=function findUncaughtFrozen(store,key){return arrayFind(store.a,function(it){return it[0]===key;});};UncaughtFrozenStore.prototype={get:function get(key){var entry=findUncaughtFrozen(this,key);if(entry)return entry[1];},has:function has(key){return!!findUncaughtFrozen(this,key);},set:function set(key,value){var entry=findUncaughtFrozen(this,key);if(entry)entry[1]=value;else this.a.push([key,value]);},'delete':function _delete(key){var index=arrayFindIndex(this.a,function(it){return it[0]===key;});if(~index)this.a.splice(index,1);return!!~index;}};var _collectionWeak={getConstructor:function getConstructor(wrapper,NAME,IS_MAP,ADDER){var C=wrapper(function(that,iterable){_anInstance(that,C,NAME,'_i');that._t=NAME;// collection type
that._i=id$1++;// collection id
that._l=undefined;// leak store for uncaught frozen objects
if(iterable!=undefined)_forOf(iterable,IS_MAP,that[ADDER],that);});_redefineAll(C.prototype,{// 23.3.3.2 WeakMap.prototype.delete(key)
// 23.4.3.3 WeakSet.prototype.delete(value)
'delete':function _delete(key){if(!_isObject(key))return false;var data=getWeak(key);if(data===true)return uncaughtFrozenStore(_validateCollection(this,NAME))['delete'](key);return data&&_has(data,this._i)&&delete data[this._i];},// 23.3.3.4 WeakMap.prototype.has(key)
// 23.4.3.4 WeakSet.prototype.has(value)
has:function has(key){if(!_isObject(key))return false;var data=getWeak(key);if(data===true)return uncaughtFrozenStore(_validateCollection(this,NAME)).has(key);return data&&_has(data,this._i);}});return C;},def:function def(that,key,value){var data=getWeak(_anObject(key),true);if(data===true)uncaughtFrozenStore(that).set(key,value);else data[that._i]=value;return that;},ufstore:uncaughtFrozenStore};var es6_weakMap=createCommonjsModule(function(module){var each=_arrayMethods(0);var NATIVE_WEAK_MAP=_validateCollection;var IS_IE11=!_global.ActiveXObject&&'ActiveXObject'in _global;var WEAK_MAP='WeakMap';var getWeak=_meta.getWeak;var isExtensible=Object.isExtensible;var uncaughtFrozenStore=_collectionWeak.ufstore;var InternalMap;var wrapper=function wrapper(get){return function WeakMap(){return get(this,arguments.length>0?arguments[0]:undefined);};};var methods={// 23.3.3.3 WeakMap.prototype.get(key)
get:function get(key){if(_isObject(key)){var data=getWeak(key);if(data===true)return uncaughtFrozenStore(_validateCollection(this,WEAK_MAP)).get(key);return data?data[this._i]:undefined;}},// 23.3.3.5 WeakMap.prototype.set(key, value)
set:function set(key,value){return _collectionWeak.def(_validateCollection(this,WEAK_MAP),key,value);}};// 23.3 WeakMap Objects
var $WeakMap=module.exports=_collection(WEAK_MAP,wrapper,methods,_collectionWeak,true,true);// IE11 WeakMap frozen keys fix
if(NATIVE_WEAK_MAP&&IS_IE11){InternalMap=_collectionWeak.getConstructor(wrapper,WEAK_MAP);_objectAssign(InternalMap.prototype,methods);_meta.NEED=true;each(['delete','has','get','set'],function(key){var proto=$WeakMap.prototype;var method=proto[key];_redefine(proto,key,function(a,b){// store frozen objects on internal weakmap shim
if(_isObject(a)&&!isExtensible(a)){if(!this._f)this._f=new InternalMap();var result=this._f[key](a,b);return key=='set'?this:result;// store all the rest on native weakmap
}return method.call(this,a,b);});});}});// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
_setCollectionOf('WeakMap');// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
_setCollectionFrom('WeakMap');var weakMap=_core.WeakMap;var _createProperty=function _createProperty(object,index,value){if(index in object)_objectDp.f(object,index,_propertyDesc(0,value));else object[index]=value;};_export(_export.S+_export.F*!_iterDetect(function(iter){}),'Array',{// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function from(arrayLike/* , mapfn = undefined, thisArg = undefined */){var O=_toObject(arrayLike);var C=typeof this=='function'?this:Array;var aLen=arguments.length;var mapfn=aLen>1?arguments[1]:undefined;var mapping=mapfn!==undefined;var index=0;var iterFn=core_getIteratorMethod(O);var length,result,step,iterator;if(mapping)mapfn=_ctx(mapfn,aLen>2?arguments[2]:undefined,2);// if object isn't iterable or it's array with default iterator - use simple case
if(iterFn!=undefined&&!(C==Array&&_isArrayIter(iterFn))){for(iterator=iterFn.call(O),result=new C();!(step=iterator.next()).done;index++){_createProperty(result,index,mapping?_iterCall(iterator,mapfn,[step.value,index],true):step.value);}}else{length=_toLength(O.length);for(result=new C(length);length>index;index++){_createProperty(result,index,mapping?mapfn(O[index],index):O[index]);}}result.length=index;return result;}});var from$1=_core.Array.from;var reservedTagList=new Set(['annotation-xml','color-profile','font-face','font-face-src','font-face-uri','font-face-format','font-face-name','missing-glyph']);/**
 * @param {string} localName
 * @returns {boolean}
 */function isValidCustomElementName(localName){var reserved=reservedTagList.has(localName);var validForm=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(localName);return!reserved&&validForm;}/**
 * @private
 * @param {!Node} node
 * @return {boolean}
 */function isConnected(node){// Use `Node#isConnected`, if defined.
var nativeValue=node.isConnected;if(nativeValue!==undefined){return nativeValue;}/** @type {?Node|undefined} */var current=node;while(current&&!(current.__CE_isImportDocument||current instanceof Document)){current=current.parentNode||(window.ShadowRoot&&current instanceof ShadowRoot?current.host:undefined);}return!!(current&&(current.__CE_isImportDocument||current instanceof Document));}/**
 * @param {!Node} root
 * @param {!Node} start
 * @return {?Node}
 */function nextSiblingOrAncestorSibling(root,start){var node=start;while(node&&node!==root&&!node.nextSibling){node=node.parentNode;}return!node||node===root?null:node.nextSibling;}/**
 * @param {!Node} root
 * @param {!Node} start
 * @return {?Node}
 */function nextNode(root,start){return start.firstChild?start.firstChild:nextSiblingOrAncestorSibling(root,start);}/**
 * @param {!Node} root
 * @param {!function(!Element)} callback
 * @param {!Set<Node>=} visitedImports
 */function walkDeepDescendantElements(root,callback){var visitedImports=arguments.length>2&&arguments[2]!==undefined?arguments[2]:new Set();var node=root;while(node){if(node.nodeType===Node.ELEMENT_NODE){var element=/** @type {!Element} */node;callback(element);var localName=element.localName;if(localName==='link'&&element.getAttribute('rel')==='import'){// If this import (polyfilled or not) has it's root node available,
// walk it.
var importNode=/** @type {!Node} */element["import"];if(importNode instanceof Node&&!visitedImports.has(importNode)){// Prevent multiple walks of the same import root.
visitedImports.add(importNode);for(var child=importNode.firstChild;child;child=child.nextSibling){walkDeepDescendantElements(child,callback,visitedImports);}}// Ignore descendants of import links to prevent attempting to walk the
// elements created by the HTML Imports polyfill that we just walked
// above.
node=nextSiblingOrAncestorSibling(root,element);continue;}else if(localName==='template'){// Ignore descendants of templates. There shouldn't be any descendants
// because they will be moved into `.content` during construction in
// browsers that support template but, in case they exist and are still
// waiting to be moved by a polyfill, they will be ignored.
node=nextSiblingOrAncestorSibling(root,element);continue;}// Walk shadow roots.
var shadowRoot=element.__CE_shadowRoot;if(shadowRoot){for(var _child=shadowRoot.firstChild;_child;_child=_child.nextSibling){walkDeepDescendantElements(_child,callback,visitedImports);}}}node=nextNode(root,node);}}/**
 * Used to suppress Closure's "Modifying the prototype is only allowed if the
 * constructor is in the same scope" warning without using
 * `@suppress {newCheckTypes, duplicate}` because `newCheckTypes` is too broad.
 *
 * @param {!Object} destination
 * @param {string} name
 * @param {*} value
 */function setPropertyUnchecked(destination,name,value){destination[name]=value;}/**
 * @enum {number}
 */var CustomElementState={custom:1,failed:2};var CustomElementInternals=function(){function CustomElementInternals(){classCallCheck(this,CustomElementInternals);/** @type {!Map<string, !CustomElementDefinition>} */this._localNameToDefinition=new Map();/** @type {!Map<!Function, !CustomElementDefinition>} */this._constructorToDefinition=new Map();/** @type {!Array<!function(!Node)>} */this._patches=[];/** @type {boolean} */this._hasPatches=false;}/**
   * @param {string} localName
   * @param {!CustomElementDefinition} definition
   */createClass(CustomElementInternals,[{key:'setDefinition',value:function setDefinition(localName,definition){this._localNameToDefinition.set(localName,definition);this._constructorToDefinition.set(definition.constructor,definition);}/**
     * @param {string} localName
     * @return {!CustomElementDefinition|undefined}
     */},{key:'localNameToDefinition',value:function localNameToDefinition(localName){return this._localNameToDefinition.get(localName);}/**
     * @param {!Function} constructor
     * @return {!CustomElementDefinition|undefined}
     */},{key:'constructorToDefinition',value:function constructorToDefinition(constructor){return this._constructorToDefinition.get(constructor);}/**
     * @param {!function(!Node)} listener
     */},{key:'addPatch',value:function addPatch(listener){this._hasPatches=true;this._patches.push(listener);}/**
     * @param {!Node} node
     */},{key:'patchTree',value:function patchTree(node){var _this=this;if(!this._hasPatches)return;walkDeepDescendantElements(node,function(element){return _this.patch(element);});}/**
     * @param {!Node} node
     */},{key:'patch',value:function patch(node){if(!this._hasPatches)return;if(node.__CE_patched)return;node.__CE_patched=true;for(var i=0;i<this._patches.length;i++){this._patches[i](node);}}/**
     * @param {!Node} root
     */},{key:'connectTree',value:function connectTree(root){var elements=[];walkDeepDescendantElements(root,function(element){return elements.push(element);});for(var i=0;i<elements.length;i++){var element=elements[i];if(element.__CE_state===CustomElementState.custom){if(isConnected(element)){this.connectedCallback(element);}}else{this.upgradeElement(element);}}}/**
     * @param {!Node} root
     */},{key:'disconnectTree',value:function disconnectTree(root){var elements=[];walkDeepDescendantElements(root,function(element){return elements.push(element);});for(var i=0;i<elements.length;i++){var element=elements[i];if(element.__CE_state===CustomElementState.custom){this.disconnectedCallback(element);}}}/**
     * Upgrades all uncustomized custom elements at and below a root node for
     * which there is a definition. When custom element reaction callbacks are
     * assumed to be called synchronously (which, by the current DOM / HTML spec
     * definitions, they are *not*), callbacks for both elements customized
     * synchronously by the parser and elements being upgraded occur in the same
     * relative order.
     *
     * NOTE: This function, when used to simulate the construction of a tree that
     * is already created but not customized (i.e. by the parser), does *not*
     * prevent the element from reading the 'final' (true) state of the tree. For
     * example, the element, during truly synchronous parsing / construction would
     * see that it contains no children as they have not yet been inserted.
     * However, this function does not modify the tree, the element will
     * (incorrectly) have children. Additionally, self-modification restrictions
     * for custom element constructors imposed by the DOM spec are *not* enforced.
     *
     *
     * The following nested list shows the steps extending down from the HTML
     * spec's parsing section that cause elements to be synchronously created and
     * upgraded:
     *
     * The "in body" insertion mode:
     * https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
     * - Switch on token:
     *   .. other cases ..
     *   -> Any other start tag
     *      - [Insert an HTML element](below) for the token.
     *
     * Insert an HTML element:
     * https://html.spec.whatwg.org/multipage/syntax.html#insert-an-html-element
     * - Insert a foreign element for the token in the HTML namespace:
     *   https://html.spec.whatwg.org/multipage/syntax.html#insert-a-foreign-element
     *   - Create an element for a token:
     *     https://html.spec.whatwg.org/multipage/syntax.html#create-an-element-for-the-token
     *     - Will execute script flag is true?
     *       - (Element queue pushed to the custom element reactions stack.)
     *     - Create an element:
     *       https://dom.spec.whatwg.org/#concept-create-element
     *       - Sync CE flag is true?
     *         - Constructor called.
     *         - Self-modification restrictions enforced.
     *       - Sync CE flag is false?
     *         - (Upgrade reaction enqueued.)
     *     - Attributes appended to element.
     *       (`attributeChangedCallback` reactions enqueued.)
     *     - Will execute script flag is true?
     *       - (Element queue popped from the custom element reactions stack.
     *         Reactions in the popped stack are invoked.)
     *   - (Element queue pushed to the custom element reactions stack.)
     *   - Insert the element:
     *     https://dom.spec.whatwg.org/#concept-node-insert
     *     - Shadow-including descendants are connected. During parsing
     *       construction, there are no shadow-*excluding* descendants.
     *       However, the constructor may have validly attached a shadow
     *       tree to itself and added descendants to that shadow tree.
     *       (`connectedCallback` reactions enqueued.)
     *   - (Element queue popped from the custom element reactions stack.
     *     Reactions in the popped stack are invoked.)
     *
     * @param {!Node} root
     * @param {!Set<Node>=} visitedImports
     */},{key:'patchAndUpgradeTree',value:function patchAndUpgradeTree(root){var _this2=this;var visitedImports=arguments.length>1&&arguments[1]!==undefined?arguments[1]:new Set();var elements=[];var gatherElements=function gatherElements(element){if(element.localName==='link'&&element.getAttribute('rel')==='import'){// The HTML Imports polyfill sets a descendant element of the link to
// the `import` property, specifically this is *not* a Document.
var importNode=/** @type {?Node} */element["import"];if(importNode instanceof Node&&importNode.readyState==='complete'){importNode.__CE_isImportDocument=true;// Connected links are associated with the registry.
importNode.__CE_hasRegistry=true;}else{// If this link's import root is not available, its contents can't be
// walked. Wait for 'load' and walk it when it's ready.
element.addEventListener('load',function(){var importNode=/** @type {!Node} */element["import"];if(importNode.__CE_documentLoadHandled)return;importNode.__CE_documentLoadHandled=true;importNode.__CE_isImportDocument=true;// Connected links are associated with the registry.
importNode.__CE_hasRegistry=true;// Clone the `visitedImports` set that was populated sync during
// the `patchAndUpgradeTree` call that caused this 'load' handler to
// be added. Then, remove *this* link's import node so that we can
// walk that import again, even if it was partially walked later
// during the same `patchAndUpgradeTree` call.
visitedImports["delete"](importNode);_this2.patchAndUpgradeTree(importNode,visitedImports);});}}else{elements.push(element);}};// `walkDeepDescendantElements` populates (and internally checks against)
// `visitedImports` when traversing a loaded import.
walkDeepDescendantElements(root,gatherElements,visitedImports);if(this._hasPatches){for(var i=0;i<elements.length;i++){this.patch(elements[i]);}}for(var _i=0;_i<elements.length;_i++){this.upgradeElement(elements[_i]);}}/**
     * @param {!Element} element
     */},{key:'upgradeElement',value:function upgradeElement(element){var currentState=element.__CE_state;if(currentState!==undefined)return;var definition=this.localNameToDefinition(element.localName);if(!definition)return;definition.constructionStack.push(element);var constructor=definition.constructor;try{try{var result=new constructor();if(result!==element){throw new Error('The custom element constructor did not produce the element being upgraded.');}}finally{definition.constructionStack.pop();}}catch(e){element.__CE_state=CustomElementState.failed;throw e;}element.__CE_state=CustomElementState.custom;element.__CE_definition=definition;if(definition.attributeChangedCallback){var observedAttributes=definition.observedAttributes;for(var i=0;i<observedAttributes.length;i++){var name=observedAttributes[i];var value=element.getAttribute(name);if(value!==null){this.attributeChangedCallback(element,name,null,value,null);}}}if(isConnected(element)){this.connectedCallback(element);}}/**
     * @param {!Element} element
     */},{key:'connectedCallback',value:function connectedCallback(element){var definition=element.__CE_definition;if(definition.connectedCallback){definition.connectedCallback.call(element);}element.__CE_isConnectedCallbackCalled=true;}/**
     * @param {!Element} element
     */},{key:'disconnectedCallback',value:function disconnectedCallback(element){if(!element.__CE_isConnectedCallbackCalled){this.connectedCallback(element);}var definition=element.__CE_definition;if(definition.disconnectedCallback){definition.disconnectedCallback.call(element);}element.__CE_isConnectedCallbackCalled=undefined;}/**
     * @param {!Element} element
     * @param {string} name
     * @param {?string} oldValue
     * @param {?string} newValue
     * @param {?string} namespace
     */},{key:'attributeChangedCallback',value:function attributeChangedCallback(element,name,oldValue,newValue,namespace){var definition=element.__CE_definition;if(definition.attributeChangedCallback&&definition.observedAttributes.indexOf(name)>-1){definition.attributeChangedCallback.call(element,name,oldValue,newValue,namespace);}}}]);return CustomElementInternals;}();var DocumentConstructionObserver=function(){function DocumentConstructionObserver(internals,doc){classCallCheck(this,DocumentConstructionObserver);/**
     * @type {!CustomElementInternals}
     */this._internals=internals;/**
     * @type {!Document}
     */this._document=doc;/**
     * @type {MutationObserver|undefined}
     */this._observer=undefined;// Simulate tree construction for all currently accessible nodes in the
// document.
this._internals.patchAndUpgradeTree(this._document);if(this._document.readyState==='loading'){this._observer=new MutationObserver(this._handleMutations.bind(this));// Nodes created by the parser are given to the observer *before* the next
// task runs. Inline scripts are run in a new task. This means that the
// observer will be able to handle the newly parsed nodes before the inline
// script is run.
this._observer.observe(this._document,{childList:true,subtree:true});}}createClass(DocumentConstructionObserver,[{key:'disconnect',value:function disconnect(){if(this._observer){this._observer.disconnect();}}/**
     * @param {!Array<!MutationRecord>} mutations
     */},{key:'_handleMutations',value:function _handleMutations(mutations){// Once the document's `readyState` is 'interactive' or 'complete', all new
// nodes created within that document will be the result of script and
// should be handled by patching.
var readyState=this._document.readyState;if(readyState==='interactive'||readyState==='complete'){this.disconnect();}for(var i=0;i<mutations.length;i++){var addedNodes=mutations[i].addedNodes;for(var j=0;j<addedNodes.length;j++){var node=addedNodes[j];this._internals.patchAndUpgradeTree(node);}}}}]);return DocumentConstructionObserver;}();/**
 * @template T
 */var Deferred=function(){function Deferred(){var _this=this;classCallCheck(this,Deferred);/**
     * @private
     * @type {T|undefined}
     */this._value=undefined;/**
     * @private
     * @type {Function|undefined}
     */this._resolve=undefined;/**
     * @private
     * @type {!Promise<T>}
     */this._promise=new Promise(function(resolve){_this._resolve=resolve;if(_this._value){resolve(_this._value);}});}/**
   * @param {T} value
   */createClass(Deferred,[{key:'resolve',value:function resolve(value){if(this._value){throw new Error('Already resolved.');}this._value=value;if(this._resolve){this._resolve(value);}}/**
     * @return {!Promise<T>}
     */},{key:'toPromise',value:function toPromise(){return this._promise;}}]);return Deferred;}();/**
 * @unrestricted
 */var CustomElementRegistry=function(){/**
   * @param {!CustomElementInternals} internals
   */function CustomElementRegistry(internals){classCallCheck(this,CustomElementRegistry);/**
     * @private
     * @type {boolean}
     */this._elementDefinitionIsRunning=false;/**
     * @private
     * @type {!CustomElementInternals}
     */this._internals=internals;/**
     * @private
     * @type {!Map<string, !Deferred<undefined>>}
     */this._whenDefinedDeferred=new Map();/**
     * The default flush callback triggers the document walk synchronously.
     * @private
     * @type {!Function}
     */this._flushCallback=function(fn){return fn();};/**
     * @private
     * @type {boolean}
     */this._flushPending=false;/**
     * @private
     * @type {!Array<string>}
     */this._unflushedLocalNames=[];/**
     * @private
     * @type {!DocumentConstructionObserver}
     */this._documentConstructionObserver=new DocumentConstructionObserver(internals,document);}/**
   * @param {string} localName
   * @param {!Function} constructor
   */createClass(CustomElementRegistry,[{key:'define',value:function define(localName,constructor){var _this=this;if(!(constructor instanceof Function)){throw new TypeError('Custom element constructors must be functions.');}if(!isValidCustomElementName(localName)){throw new SyntaxError('The element name \''+localName+'\' is not valid.');}if(this._internals.localNameToDefinition(localName)){throw new Error('A custom element with name \''+localName+'\' has already been defined.');}if(this._elementDefinitionIsRunning){throw new Error('A custom element is already being defined.');}this._elementDefinitionIsRunning=true;var connectedCallback=void 0;var disconnectedCallback=void 0;var adoptedCallback=void 0;var attributeChangedCallback=void 0;var observedAttributes=void 0;try{var getCallback=function getCallback(name){var callbackValue=prototype[name];if(callbackValue!==undefined&&!(callbackValue instanceof Function)){throw new Error('The \''+name+'\' callback must be a function.');}return callbackValue;};/** @type {!Object} */var prototype=constructor.prototype;if(!(prototype instanceof Object)){throw new TypeError('The custom element constructor\'s prototype is not an object.');}connectedCallback=getCallback('connectedCallback');disconnectedCallback=getCallback('disconnectedCallback');adoptedCallback=getCallback('adoptedCallback');attributeChangedCallback=getCallback('attributeChangedCallback');observedAttributes=constructor['observedAttributes']||[];}catch(e){return;}finally{this._elementDefinitionIsRunning=false;}var definition={localName:localName,constructor:constructor,connectedCallback:connectedCallback,disconnectedCallback:disconnectedCallback,adoptedCallback:adoptedCallback,attributeChangedCallback:attributeChangedCallback,observedAttributes:observedAttributes,constructionStack:[]};this._internals.setDefinition(localName,definition);this._unflushedLocalNames.push(localName);// If we've already called the flush callback and it hasn't called back yet,
// don't call it again.
if(!this._flushPending){this._flushPending=true;this._flushCallback(function(){return _this._flush();});}}},{key:'_flush',value:function _flush(){// If no new definitions were defined, don't attempt to flush. This could
// happen if a flush callback keeps the function it is given and calls it
// multiple times.
if(this._flushPending===false)return;this._flushPending=false;this._internals.patchAndUpgradeTree(document);while(this._unflushedLocalNames.length>0){var localName=this._unflushedLocalNames.shift();var deferred=this._whenDefinedDeferred.get(localName);if(deferred){deferred.resolve(undefined);}}}/**
     * @param {string} localName
     * @return {Function|undefined}
     */},{key:'get',value:function get$$1(localName){var definition=this._internals.localNameToDefinition(localName);if(definition){return definition.constructor;}return undefined;}/**
     * @param {string} localName
     * @return {!Promise<undefined>}
     */},{key:'whenDefined',value:function whenDefined(localName){if(!isValidCustomElementName(localName)){return Promise.reject(new SyntaxError('\''+localName+'\' is not a valid custom element name.'));}var prior=this._whenDefinedDeferred.get(localName);if(prior){return prior.toPromise();}var deferred=new Deferred();this._whenDefinedDeferred.set(localName,deferred);var definition=this._internals.localNameToDefinition(localName);// Resolve immediately only if the given local name has a definition *and*
// the full document walk to upgrade elements with that local name has
// already happened.
if(definition&&this._unflushedLocalNames.indexOf(localName)===-1){deferred.resolve(undefined);}return deferred.toPromise();}},{key:'polyfillWrapFlushCallback',value:function polyfillWrapFlushCallback(outer){this._documentConstructionObserver.disconnect();var inner=this._flushCallback;this._flushCallback=function(flush){return outer(function(){return inner(flush);});};}}]);return CustomElementRegistry;}();window['CustomElementRegistry']=CustomElementRegistry;CustomElementRegistry.prototype['define']=CustomElementRegistry.prototype.define;CustomElementRegistry.prototype['get']=CustomElementRegistry.prototype.get;CustomElementRegistry.prototype['whenDefined']=CustomElementRegistry.prototype.whenDefined;CustomElementRegistry.prototype['polyfillWrapFlushCallback']=CustomElementRegistry.prototype.polyfillWrapFlushCallback;var Native={Document_createElement:window.Document.prototype.createElement,Document_createElementNS:window.Document.prototype.createElementNS,Document_importNode:window.Document.prototype.importNode,Document_prepend:window.Document.prototype['prepend'],Document_append:window.Document.prototype['append'],Node_cloneNode:window.Node.prototype.cloneNode,Node_appendChild:window.Node.prototype.appendChild,Node_insertBefore:window.Node.prototype.insertBefore,Node_removeChild:window.Node.prototype.removeChild,Node_replaceChild:window.Node.prototype.replaceChild,Node_textContent:Object.getOwnPropertyDescriptor(window.Node.prototype,'textContent'),Element_attachShadow:window.Element.prototype['attachShadow'],Element_innerHTML:Object.getOwnPropertyDescriptor(window.Element.prototype,'innerHTML'),Element_getAttribute:window.Element.prototype.getAttribute,Element_setAttribute:window.Element.prototype.setAttribute,Element_removeAttribute:window.Element.prototype.removeAttribute,Element_getAttributeNS:window.Element.prototype.getAttributeNS,Element_setAttributeNS:window.Element.prototype.setAttributeNS,Element_removeAttributeNS:window.Element.prototype.removeAttributeNS,Element_insertAdjacentElement:window.Element.prototype['insertAdjacentElement'],Element_prepend:window.Element.prototype['prepend'],Element_append:window.Element.prototype['append'],Element_before:window.Element.prototype['before'],Element_after:window.Element.prototype['after'],Element_replaceWith:window.Element.prototype['replaceWith'],Element_remove:window.Element.prototype['remove'],HTMLElement:window.HTMLElement,HTMLElement_innerHTML:Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,'innerHTML'),HTMLElement_insertAdjacentElement:window.HTMLElement.prototype['insertAdjacentElement']};/**
 * This class exists only to work around Closure's lack of a way to describe
 * singletons. It represents the 'already constructed marker' used in custom
 * element construction stacks.
 *
 * https://html.spec.whatwg.org/#concept-already-constructed-marker
 */var AlreadyConstructedMarker=function AlreadyConstructedMarker(){classCallCheck(this,AlreadyConstructedMarker);};var AlreadyConstructedMarker$1=new AlreadyConstructedMarker();/**
 * @param {!CustomElementInternals} internals
 */var PatchHTMLElement=function PatchHTMLElement(internals){window['HTMLElement']=function(){/**
     * @type {function(new: HTMLElement): !HTMLElement}
     */function HTMLElement(){// This should really be `new.target` but `new.target` can't be emulated
// in ES5. Assuming the user keeps the default value of the constructor's
// prototype's `constructor` property, this is equivalent.
/** @type {!Function} */var constructor=this.constructor;var definition=internals.constructorToDefinition(constructor);if(!definition){throw new Error('The custom element being constructed was not registered with `customElements`.');}var constructionStack=definition.constructionStack;if(constructionStack.length===0){var _element=Native.Document_createElement.call(document,definition.localName);Object.setPrototypeOf(_element,constructor.prototype);_element.__CE_state=CustomElementState.custom;_element.__CE_definition=definition;internals.patch(_element);return _element;}var lastIndex=constructionStack.length-1;var element=constructionStack[lastIndex];if(element===AlreadyConstructedMarker$1){throw new Error('The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.');}constructionStack[lastIndex]=AlreadyConstructedMarker$1;Object.setPrototypeOf(element,constructor.prototype);internals.patch(/** @type {!HTMLElement} */element);return element;}HTMLElement.prototype=Native.HTMLElement.prototype;return HTMLElement;}();};/**
 * @param {!CustomElementInternals} internals
 * @param {!Object} destination
 * @param {!ParentNodeNativeMethods} builtIn
 */var PatchParentNode=function PatchParentNode(internals,destination,builtIn){/**
   * @param {...(!Node|string)} nodes
   */destination['prepend']=function(){for(var _len=arguments.length,nodes=Array(_len),_key=0;_key<_len;_key++){nodes[_key]=arguments[_key];}// TODO: Fix this for when one of `nodes` is a DocumentFragment!
var connectedBefore=/** @type {!Array<!Node>} */nodes.filter(function(node){// DocumentFragments are not connected and will not be added to the list.
return node instanceof Node&&isConnected(node);});builtIn.prepend.apply(this,nodes);for(var i=0;i<connectedBefore.length;i++){internals.disconnectTree(connectedBefore[i]);}if(isConnected(this)){for(var _i=0;_i<nodes.length;_i++){var node=nodes[_i];if(node instanceof Element){internals.connectTree(node);}}}};/**
   * @param {...(!Node|string)} nodes
   */destination['append']=function(){for(var _len2=arguments.length,nodes=Array(_len2),_key2=0;_key2<_len2;_key2++){nodes[_key2]=arguments[_key2];}// TODO: Fix this for when one of `nodes` is a DocumentFragment!
var connectedBefore=/** @type {!Array<!Node>} */nodes.filter(function(node){// DocumentFragments are not connected and will not be added to the list.
return node instanceof Node&&isConnected(node);});builtIn.append.apply(this,nodes);for(var i=0;i<connectedBefore.length;i++){internals.disconnectTree(connectedBefore[i]);}if(isConnected(this)){for(var _i2=0;_i2<nodes.length;_i2++){var node=nodes[_i2];if(node instanceof Element){internals.connectTree(node);}}}};};/**
 * @param {!CustomElementInternals} internals
 */var PatchDocument=function PatchDocument(internals){setPropertyUnchecked(Document.prototype,'createElement',/**
   * @this {Document}
   * @param {string} localName
   * @return {!Element}
   */function(localName){// Only create custom elements if this document is associated with the registry.
if(this.__CE_hasRegistry){var definition=internals.localNameToDefinition(localName);if(definition){return new definition.constructor();}}var result=/** @type {!Element} */Native.Document_createElement.call(this,localName);internals.patch(result);return result;});setPropertyUnchecked(Document.prototype,'importNode',/**
   * @this {Document}
   * @param {!Node} node
   * @param {boolean=} deep
   * @return {!Node}
   */function(node,deep){var clone=Native.Document_importNode.call(this,node,deep);// Only create custom elements if this document is associated with the registry.
if(!this.__CE_hasRegistry){internals.patchTree(clone);}else{internals.patchAndUpgradeTree(clone);}return clone;});var NS_HTML="http://www.w3.org/1999/xhtml";setPropertyUnchecked(Document.prototype,'createElementNS',/**
   * @this {Document}
   * @param {?string} namespace
   * @param {string} localName
   * @return {!Element}
   */function(namespace,localName){// Only create custom elements if this document is associated with the registry.
if(this.__CE_hasRegistry&&(namespace===null||namespace===NS_HTML)){var definition=internals.localNameToDefinition(localName);if(definition){return new definition.constructor();}}var result=/** @type {!Element} */Native.Document_createElementNS.call(this,namespace,localName);internals.patch(result);return result;});PatchParentNode(internals,Document.prototype,{prepend:Native.Document_prepend,append:Native.Document_append});};/**
 * @param {!CustomElementInternals} internals
 */var PatchNode=function PatchNode(internals){// `Node#nodeValue` is implemented on `Attr`.
// `Node#textContent` is implemented on `Attr`, `Element`.
setPropertyUnchecked(Node.prototype,'insertBefore',/**
   * @this {Node}
   * @param {!Node} node
   * @param {?Node} refNode
   * @return {!Node}
   */function(node,refNode){if(node instanceof DocumentFragment){var insertedNodes=Array.prototype.slice.apply(node.childNodes);var _nativeResult=Native.Node_insertBefore.call(this,node,refNode);// DocumentFragments can't be connected, so `disconnectTree` will never
// need to be called on a DocumentFragment's children after inserting it.
if(isConnected(this)){for(var i=0;i<insertedNodes.length;i++){internals.connectTree(insertedNodes[i]);}}return _nativeResult;}var nodeWasConnected=isConnected(node);var nativeResult=Native.Node_insertBefore.call(this,node,refNode);if(nodeWasConnected){internals.disconnectTree(node);}if(isConnected(this)){internals.connectTree(node);}return nativeResult;});setPropertyUnchecked(Node.prototype,'appendChild',/**
   * @this {Node}
   * @param {!Node} node
   * @return {!Node}
   */function(node){if(node instanceof DocumentFragment){var insertedNodes=Array.prototype.slice.apply(node.childNodes);var _nativeResult2=Native.Node_appendChild.call(this,node);// DocumentFragments can't be connected, so `disconnectTree` will never
// need to be called on a DocumentFragment's children after inserting it.
if(isConnected(this)){for(var i=0;i<insertedNodes.length;i++){internals.connectTree(insertedNodes[i]);}}return _nativeResult2;}var nodeWasConnected=isConnected(node);var nativeResult=Native.Node_appendChild.call(this,node);if(nodeWasConnected){internals.disconnectTree(node);}if(isConnected(this)){internals.connectTree(node);}return nativeResult;});setPropertyUnchecked(Node.prototype,'cloneNode',/**
   * @this {Node}
   * @param {boolean=} deep
   * @return {!Node}
   */function(deep){var clone=Native.Node_cloneNode.call(this,deep);// Only create custom elements if this element's owner document is
// associated with the registry.
if(!this.ownerDocument.__CE_hasRegistry){internals.patchTree(clone);}else{internals.patchAndUpgradeTree(clone);}return clone;});setPropertyUnchecked(Node.prototype,'removeChild',/**
   * @this {Node}
   * @param {!Node} node
   * @return {!Node}
   */function(node){var nodeWasConnected=isConnected(node);var nativeResult=Native.Node_removeChild.call(this,node);if(nodeWasConnected){internals.disconnectTree(node);}return nativeResult;});setPropertyUnchecked(Node.prototype,'replaceChild',/**
   * @this {Node}
   * @param {!Node} nodeToInsert
   * @param {!Node} nodeToRemove
   * @return {!Node}
   */function(nodeToInsert,nodeToRemove){if(nodeToInsert instanceof DocumentFragment){var insertedNodes=Array.prototype.slice.apply(nodeToInsert.childNodes);var _nativeResult3=Native.Node_replaceChild.call(this,nodeToInsert,nodeToRemove);// DocumentFragments can't be connected, so `disconnectTree` will never
// need to be called on a DocumentFragment's children after inserting it.
if(isConnected(this)){internals.disconnectTree(nodeToRemove);for(var i=0;i<insertedNodes.length;i++){internals.connectTree(insertedNodes[i]);}}return _nativeResult3;}var nodeToInsertWasConnected=isConnected(nodeToInsert);var nativeResult=Native.Node_replaceChild.call(this,nodeToInsert,nodeToRemove);var thisIsConnected=isConnected(this);if(thisIsConnected){internals.disconnectTree(nodeToRemove);}if(nodeToInsertWasConnected){internals.disconnectTree(nodeToInsert);}if(thisIsConnected){internals.connectTree(nodeToInsert);}return nativeResult;});function patch_textContent(destination,baseDescriptor){Object.defineProperty(destination,'textContent',{enumerable:baseDescriptor.enumerable,configurable:true,get:baseDescriptor.get,set:/** @this {Node} */function set(assignedValue){// If this is a text node then there are no nodes to disconnect.
if(this.nodeType===Node.TEXT_NODE){baseDescriptor.set.call(this,assignedValue);return;}var removedNodes=undefined;// Checking for `firstChild` is faster than reading `childNodes.length`
// to compare with 0.
if(this.firstChild){// Using `childNodes` is faster than `children`, even though we only
// care about elements.
var childNodes=this.childNodes;var childNodesLength=childNodes.length;if(childNodesLength>0&&isConnected(this)){// Copying an array by iterating is faster than using slice.
removedNodes=new Array(childNodesLength);for(var i=0;i<childNodesLength;i++){removedNodes[i]=childNodes[i];}}}baseDescriptor.set.call(this,assignedValue);if(removedNodes){for(var _i=0;_i<removedNodes.length;_i++){internals.disconnectTree(removedNodes[_i]);}}}});}if(Native.Node_textContent&&Native.Node_textContent.get){patch_textContent(Node.prototype,Native.Node_textContent);}else{internals.addPatch(function(element){patch_textContent(element,{enumerable:true,configurable:true,// NOTE: This implementation of the `textContent` getter assumes that
// text nodes' `textContent` getter will not be patched.
get:/** @this {Node} */function get(){/** @type {!Array<string>} */var parts=[];for(var i=0;i<this.childNodes.length;i++){parts.push(this.childNodes[i].textContent);}return parts.join('');},set:/** @this {Node} */function set(assignedValue){while(this.firstChild){Native.Node_removeChild.call(this,this.firstChild);}Native.Node_appendChild.call(this,document.createTextNode(assignedValue));}});});}};/**
 * @param {!CustomElementInternals} internals
 * @param {!Object} destination
 * @param {!ChildNodeNativeMethods} builtIn
 */var PatchChildNode=function PatchChildNode(internals,destination,builtIn){/**
   * @param {...(!Node|string)} nodes
   */destination['before']=function(){for(var _len=arguments.length,nodes=Array(_len),_key=0;_key<_len;_key++){nodes[_key]=arguments[_key];}// TODO: Fix this for when one of `nodes` is a DocumentFragment!
var connectedBefore=/** @type {!Array<!Node>} */nodes.filter(function(node){// DocumentFragments are not connected and will not be added to the list.
return node instanceof Node&&isConnected(node);});builtIn.before.apply(this,nodes);for(var i=0;i<connectedBefore.length;i++){internals.disconnectTree(connectedBefore[i]);}if(isConnected(this)){for(var _i=0;_i<nodes.length;_i++){var node=nodes[_i];if(node instanceof Element){internals.connectTree(node);}}}};/**
   * @param {...(!Node|string)} nodes
   */destination['after']=function(){for(var _len2=arguments.length,nodes=Array(_len2),_key2=0;_key2<_len2;_key2++){nodes[_key2]=arguments[_key2];}// TODO: Fix this for when one of `nodes` is a DocumentFragment!
var connectedBefore=/** @type {!Array<!Node>} */nodes.filter(function(node){// DocumentFragments are not connected and will not be added to the list.
return node instanceof Node&&isConnected(node);});builtIn.after.apply(this,nodes);for(var i=0;i<connectedBefore.length;i++){internals.disconnectTree(connectedBefore[i]);}if(isConnected(this)){for(var _i2=0;_i2<nodes.length;_i2++){var node=nodes[_i2];if(node instanceof Element){internals.connectTree(node);}}}};/**
   * @param {...(!Node|string)} nodes
   */destination['replaceWith']=function(){for(var _len3=arguments.length,nodes=Array(_len3),_key3=0;_key3<_len3;_key3++){nodes[_key3]=arguments[_key3];}// TODO: Fix this for when one of `nodes` is a DocumentFragment!
var connectedBefore=/** @type {!Array<!Node>} */nodes.filter(function(node){// DocumentFragments are not connected and will not be added to the list.
return node instanceof Node&&isConnected(node);});var wasConnected=isConnected(this);builtIn.replaceWith.apply(this,nodes);for(var i=0;i<connectedBefore.length;i++){internals.disconnectTree(connectedBefore[i]);}if(wasConnected){internals.disconnectTree(this);for(var _i3=0;_i3<nodes.length;_i3++){var node=nodes[_i3];if(node instanceof Element){internals.connectTree(node);}}}};destination['remove']=function(){var wasConnected=isConnected(this);builtIn.remove.call(this);if(wasConnected){internals.disconnectTree(this);}};};/**
 * @param {!CustomElementInternals} internals
 */var PatchElement=function PatchElement(internals){if(Native.Element_attachShadow){setPropertyUnchecked(Element.prototype,'attachShadow',/**
     * @this {Element}
     * @param {!{mode: string}} init
     * @return {ShadowRoot}
     */function(init){var shadowRoot=Native.Element_attachShadow.call(this,init);this.__CE_shadowRoot=shadowRoot;return shadowRoot;});}else{console.warn('Custom Elements: `Element#attachShadow` was not patched.');}function patch_innerHTML(destination,baseDescriptor){Object.defineProperty(destination,'innerHTML',{enumerable:baseDescriptor.enumerable,configurable:true,get:baseDescriptor.get,set:/** @this {Element} */function set(htmlString){var _this=this;var isConnected$$1=isConnected(this);// NOTE: In IE11, when using the native `innerHTML` setter, all nodes
// that were previously descendants of the context element have all of
// their children removed as part of the set - the entire subtree is
// 'disassembled'. This work around walks the subtree *before* using the
// native setter.
/** @type {!Array<!Element>|undefined} */var removedElements=undefined;if(isConnected$$1){removedElements=[];walkDeepDescendantElements(this,function(element){if(element!==_this){removedElements.push(element);}});}baseDescriptor.set.call(this,htmlString);if(removedElements){for(var i=0;i<removedElements.length;i++){var element=removedElements[i];if(element.__CE_state===CustomElementState.custom){internals.disconnectedCallback(element);}}}// Only create custom elements if this element's owner document is
// associated with the registry.
if(!this.ownerDocument.__CE_hasRegistry){internals.patchTree(this);}else{internals.patchAndUpgradeTree(this);}return htmlString;}});}if(Native.Element_innerHTML&&Native.Element_innerHTML.get){patch_innerHTML(Element.prototype,Native.Element_innerHTML);}else if(Native.HTMLElement_innerHTML&&Native.HTMLElement_innerHTML.get){patch_innerHTML(HTMLElement.prototype,Native.HTMLElement_innerHTML);}else{/** @type {HTMLDivElement} */var rawDiv=Native.Document_createElement.call(document,'div');internals.addPatch(function(element){patch_innerHTML(element,{enumerable:true,configurable:true,// Implements getting `innerHTML` by performing an unpatched `cloneNode`
// of the element and returning the resulting element's `innerHTML`.
// TODO: Is this too expensive?
get:/** @this {Element} */function get(){return Native.Node_cloneNode.call(this,true).innerHTML;},// Implements setting `innerHTML` by creating an unpatched element,
// setting `innerHTML` of that element and replacing the target
// element's children with those of the unpatched element.
set:/** @this {Element} */function set(assignedValue){// NOTE: re-route to `content` for `template` elements.
// We need to do this because `template.appendChild` does not
// route into `template.content`.
/** @type {!Node} */var content=this.localName==='template'?/** @type {!HTMLTemplateElement} */this.content:this;rawDiv.innerHTML=assignedValue;while(content.childNodes.length>0){Native.Node_removeChild.call(content,content.childNodes[0]);}while(rawDiv.childNodes.length>0){Native.Node_appendChild.call(content,rawDiv.childNodes[0]);}}});});}setPropertyUnchecked(Element.prototype,'setAttribute',/**
   * @this {Element}
   * @param {string} name
   * @param {string} newValue
   */function(name,newValue){// Fast path for non-custom elements.
if(this.__CE_state!==CustomElementState.custom){return Native.Element_setAttribute.call(this,name,newValue);}var oldValue=Native.Element_getAttribute.call(this,name);Native.Element_setAttribute.call(this,name,newValue);newValue=Native.Element_getAttribute.call(this,name);internals.attributeChangedCallback(this,name,oldValue,newValue,null);});setPropertyUnchecked(Element.prototype,'setAttributeNS',/**
   * @this {Element}
   * @param {?string} namespace
   * @param {string} name
   * @param {string} newValue
   */function(namespace,name,newValue){// Fast path for non-custom elements.
if(this.__CE_state!==CustomElementState.custom){return Native.Element_setAttributeNS.call(this,namespace,name,newValue);}var oldValue=Native.Element_getAttributeNS.call(this,namespace,name);Native.Element_setAttributeNS.call(this,namespace,name,newValue);newValue=Native.Element_getAttributeNS.call(this,namespace,name);internals.attributeChangedCallback(this,name,oldValue,newValue,namespace);});setPropertyUnchecked(Element.prototype,'removeAttribute',/**
   * @this {Element}
   * @param {string} name
   */function(name){// Fast path for non-custom elements.
if(this.__CE_state!==CustomElementState.custom){return Native.Element_removeAttribute.call(this,name);}var oldValue=Native.Element_getAttribute.call(this,name);Native.Element_removeAttribute.call(this,name);if(oldValue!==null){internals.attributeChangedCallback(this,name,oldValue,null,null);}});setPropertyUnchecked(Element.prototype,'removeAttributeNS',/**
   * @this {Element}
   * @param {?string} namespace
   * @param {string} name
   */function(namespace,name){// Fast path for non-custom elements.
if(this.__CE_state!==CustomElementState.custom){return Native.Element_removeAttributeNS.call(this,namespace,name);}var oldValue=Native.Element_getAttributeNS.call(this,namespace,name);Native.Element_removeAttributeNS.call(this,namespace,name);// In older browsers, `Element#getAttributeNS` may return the empty string
// instead of null if the attribute does not exist. For details, see;
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNS#Notes
var newValue=Native.Element_getAttributeNS.call(this,namespace,name);if(oldValue!==newValue){internals.attributeChangedCallback(this,name,oldValue,newValue,namespace);}});function patch_insertAdjacentElement(destination,baseMethod){setPropertyUnchecked(destination,'insertAdjacentElement',/**
     * @this {Element}
     * @param {string} where
     * @param {!Element} element
     * @return {?Element}
     */function(where,element){var wasConnected=isConnected(element);var insertedElement=/** @type {!Element} */baseMethod.call(this,where,element);if(wasConnected){internals.disconnectTree(element);}if(isConnected(insertedElement)){internals.connectTree(element);}return insertedElement;});}if(Native.HTMLElement_insertAdjacentElement){patch_insertAdjacentElement(HTMLElement.prototype,Native.HTMLElement_insertAdjacentElement);}else if(Native.Element_insertAdjacentElement){patch_insertAdjacentElement(Element.prototype,Native.Element_insertAdjacentElement);}else{console.warn('Custom Elements: `Element#insertAdjacentElement` was not patched.');}PatchParentNode(internals,Element.prototype,{prepend:Native.Element_prepend,append:Native.Element_append});PatchChildNode(internals,Element.prototype,{before:Native.Element_before,after:Native.Element_after,replaceWith:Native.Element_replaceWith,remove:Native.Element_remove});};/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */var priorCustomElements=window['customElements'];if(!priorCustomElements||priorCustomElements['forcePolyfill']||typeof priorCustomElements['define']!='function'||typeof priorCustomElements['get']!='function'){/** @type {!CustomElementInternals} */var internals=new CustomElementInternals();PatchHTMLElement(internals);PatchDocument(internals);PatchNode(internals);PatchElement(internals);// The main document is always associated with the registry.
document.__CE_hasRegistry=true;/** @type {!CustomElementRegistry} */var customElements$1=new CustomElementRegistry(internals);Object.defineProperty(window,'customElements',{configurable:true,enumerable:true,value:customElements$1});}/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */ // @version 0.7.22
(function(global){if(global.JsMutationObserver){return;}var registrationsTable=new WeakMap();var setImmediate;if(/Trident|Edge/.test(navigator.userAgent)){setImmediate=setTimeout;}else if(window.setImmediate){setImmediate=window.setImmediate;}else{var setImmediateQueue=[];var sentinel=String(Math.random());window.addEventListener("message",function(e){if(e.data===sentinel){var queue=setImmediateQueue;setImmediateQueue=[];queue.forEach(function(func){func();});}});setImmediate=function setImmediate(func){setImmediateQueue.push(func);window.postMessage(sentinel,"*");};}var isScheduled=false;var scheduledObservers=[];function scheduleCallback(observer){scheduledObservers.push(observer);if(!isScheduled){isScheduled=true;setImmediate(dispatchCallbacks);}}function wrapIfNeeded(node){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(node)||node;}function dispatchCallbacks(){isScheduled=false;var observers=scheduledObservers;scheduledObservers=[];observers.sort(function(o1,o2){return o1.uid_-o2.uid_;});var anyNonEmpty=false;observers.forEach(function(observer){var queue=observer.takeRecords();removeTransientObserversFor(observer);if(queue.length){observer.callback_(queue,observer);anyNonEmpty=true;}});if(anyNonEmpty)dispatchCallbacks();}function removeTransientObserversFor(observer){observer.nodes_.forEach(function(node){var registrations=registrationsTable.get(node);if(!registrations)return;registrations.forEach(function(registration){if(registration.observer===observer)registration.removeTransientObservers();});});}function forEachAncestorAndObserverEnqueueRecord(target,callback){for(var node=target;node;node=node.parentNode){var registrations=registrationsTable.get(node);if(registrations){for(var j=0;j<registrations.length;j++){var registration=registrations[j];var options=registration.options;if(node!==target&&!options.subtree)continue;var record=callback(options);if(record)registration.enqueue(record);}}}}var uidCounter=0;function JsMutationObserver(callback){this.callback_=callback;this.nodes_=[];this.records_=[];this.uid_=++uidCounter;}JsMutationObserver.prototype={observe:function observe(target,options){target=wrapIfNeeded(target);if(!options.childList&&!options.attributes&&!options.characterData||options.attributeOldValue&&!options.attributes||options.attributeFilter&&options.attributeFilter.length&&!options.attributes||options.characterDataOldValue&&!options.characterData){throw new SyntaxError();}var registrations=registrationsTable.get(target);if(!registrations)registrationsTable.set(target,registrations=[]);var registration;for(var i=0;i<registrations.length;i++){if(registrations[i].observer===this){registration=registrations[i];registration.removeListeners();registration.options=options;break;}}if(!registration){registration=new Registration(this,target,options);registrations.push(registration);this.nodes_.push(target);}registration.addListeners();},disconnect:function disconnect(){this.nodes_.forEach(function(node){var registrations=registrationsTable.get(node);for(var i=0;i<registrations.length;i++){var registration=registrations[i];if(registration.observer===this){registration.removeListeners();registrations.splice(i,1);break;}}},this);this.records_=[];},takeRecords:function takeRecords(){var copyOfRecords=this.records_;this.records_=[];return copyOfRecords;}};function MutationRecord(type,target){this.type=type;this.target=target;this.addedNodes=[];this.removedNodes=[];this.previousSibling=null;this.nextSibling=null;this.attributeName=null;this.attributeNamespace=null;this.oldValue=null;}function copyMutationRecord(original){var record=new MutationRecord(original.type,original.target);record.addedNodes=original.addedNodes.slice();record.removedNodes=original.removedNodes.slice();record.previousSibling=original.previousSibling;record.nextSibling=original.nextSibling;record.attributeName=original.attributeName;record.attributeNamespace=original.attributeNamespace;record.oldValue=original.oldValue;return record;}var currentRecord,recordWithOldValue;function getRecord(type,target){return currentRecord=new MutationRecord(type,target);}function getRecordWithOldValue(oldValue){if(recordWithOldValue)return recordWithOldValue;recordWithOldValue=copyMutationRecord(currentRecord);recordWithOldValue.oldValue=oldValue;return recordWithOldValue;}function clearRecords(){currentRecord=recordWithOldValue=undefined;}function recordRepresentsCurrentMutation(record){return record===recordWithOldValue||record===currentRecord;}function selectRecord(lastRecord,newRecord){if(lastRecord===newRecord)return lastRecord;if(recordWithOldValue&&recordRepresentsCurrentMutation(lastRecord))return recordWithOldValue;return null;}function Registration(observer,target,options){this.observer=observer;this.target=target;this.options=options;this.transientObservedNodes=[];}Registration.prototype={enqueue:function enqueue(record){var records=this.observer.records_;var length=records.length;if(records.length>0){var lastRecord=records[length-1];var recordToReplaceLast=selectRecord(lastRecord,record);if(recordToReplaceLast){records[length-1]=recordToReplaceLast;return;}}else{scheduleCallback(this.observer);}records[length]=record;},addListeners:function addListeners(){this.addListeners_(this.target);},addListeners_:function addListeners_(node){var options=this.options;if(options.attributes)node.addEventListener("DOMAttrModified",this,true);if(options.characterData)node.addEventListener("DOMCharacterDataModified",this,true);if(options.childList)node.addEventListener("DOMNodeInserted",this,true);if(options.childList||options.subtree)node.addEventListener("DOMNodeRemoved",this,true);},removeListeners:function removeListeners(){this.removeListeners_(this.target);},removeListeners_:function removeListeners_(node){var options=this.options;if(options.attributes)node.removeEventListener("DOMAttrModified",this,true);if(options.characterData)node.removeEventListener("DOMCharacterDataModified",this,true);if(options.childList)node.removeEventListener("DOMNodeInserted",this,true);if(options.childList||options.subtree)node.removeEventListener("DOMNodeRemoved",this,true);},addTransientObserver:function addTransientObserver(node){if(node===this.target)return;this.addListeners_(node);this.transientObservedNodes.push(node);var registrations=registrationsTable.get(node);if(!registrations)registrationsTable.set(node,registrations=[]);registrations.push(this);},removeTransientObservers:function removeTransientObservers(){var transientObservedNodes=this.transientObservedNodes;this.transientObservedNodes=[];transientObservedNodes.forEach(function(node){this.removeListeners_(node);var registrations=registrationsTable.get(node);for(var i=0;i<registrations.length;i++){if(registrations[i]===this){registrations.splice(i,1);break;}}},this);},handleEvent:function handleEvent(e){e.stopImmediatePropagation();switch(e.type){case"DOMAttrModified":var name=e.attrName;var namespace=e.relatedNode.namespaceURI;var target=e.target;var record=new getRecord("attributes",target);record.attributeName=name;record.attributeNamespace=namespace;var oldValue=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;forEachAncestorAndObserverEnqueueRecord(target,function(options){if(!options.attributes)return;if(options.attributeFilter&&options.attributeFilter.length&&options.attributeFilter.indexOf(name)===-1&&options.attributeFilter.indexOf(namespace)===-1){return;}if(options.attributeOldValue)return getRecordWithOldValue(oldValue);return record;});break;case"DOMCharacterDataModified":var target=e.target;var record=getRecord("characterData",target);var oldValue=e.prevValue;forEachAncestorAndObserverEnqueueRecord(target,function(options){if(!options.characterData)return;if(options.characterDataOldValue)return getRecordWithOldValue(oldValue);return record;});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var changedNode=e.target;var addedNodes,removedNodes;if(e.type==="DOMNodeInserted"){addedNodes=[changedNode];removedNodes=[];}else{addedNodes=[];removedNodes=[changedNode];}var previousSibling=changedNode.previousSibling;var nextSibling=changedNode.nextSibling;var record=getRecord("childList",e.target.parentNode);record.addedNodes=addedNodes;record.removedNodes=removedNodes;record.previousSibling=previousSibling;record.nextSibling=nextSibling;forEachAncestorAndObserverEnqueueRecord(e.relatedNode,function(options){if(!options.childList)return;return record;});}clearRecords();}};global.JsMutationObserver=JsMutationObserver;if(!global.MutationObserver){global.MutationObserver=JsMutationObserver;JsMutationObserver._isPolyfilled=true;}})(self);/*
Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic Denicola

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/(function(global,undefined){if(global.setImmediate){return;}var nextHandle=1;// Spec says greater than zero
var tasksByHandle={};var currentlyRunningATask=false;var doc=global.document;var setImmediate;function addFromSetImmediateArguments(args){tasksByHandle[nextHandle]=partiallyApplied.apply(undefined,args);return nextHandle++;}// This function accepts the same arguments as setImmediate, but
// returns a function that requires no arguments.
function partiallyApplied(handler){var args=[].slice.call(arguments,1);return function(){if(typeof handler==="function"){handler.apply(undefined,args);}else{new Function(""+handler)();}};}function runIfPresent(handle){// From the spec: "Wait until any invocations of this algorithm started before this one have completed."
// So if we're currently running a task, we'll need to delay this invocation.
if(currentlyRunningATask){// Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
// "too much recursion" error.
setTimeout(partiallyApplied(runIfPresent,handle),0);}else{var task=tasksByHandle[handle];if(task){currentlyRunningATask=true;try{task();}finally{clearImmediate(handle);currentlyRunningATask=false;}}}}function clearImmediate(handle){delete tasksByHandle[handle];}function installNextTickImplementation(){setImmediate=function setImmediate(){var handle=addFromSetImmediateArguments(arguments);process.nextTick(partiallyApplied(runIfPresent,handle));return handle;};}function canUsePostMessage(){// The test against `importScripts` prevents this implementation from being installed inside a web worker,
// where `global.postMessage` means something completely different and can't be used for this purpose.
if(global.postMessage&&!global.importScripts){var postMessageIsAsynchronous=true;var oldOnMessage=global.onmessage;global.onmessage=function(){postMessageIsAsynchronous=false;};global.postMessage("","*");global.onmessage=oldOnMessage;return postMessageIsAsynchronous;}}function installPostMessageImplementation(){// Installs an event handler on `global` for the `message` event: see
// * https://developer.mozilla.org/en/DOM/window.postMessage
// * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
var messagePrefix="setImmediate$"+Math.random()+"$";var onGlobalMessage=function onGlobalMessage(event){if(event.source===global&&typeof event.data==="string"&&event.data.indexOf(messagePrefix)===0){runIfPresent(+event.data.slice(messagePrefix.length));}};if(global.addEventListener){global.addEventListener("message",onGlobalMessage,false);}else{global.attachEvent("onmessage",onGlobalMessage);}setImmediate=function setImmediate(){var handle=addFromSetImmediateArguments(arguments);global.postMessage(messagePrefix+handle,"*");return handle;};}function installMessageChannelImplementation(){var channel=new MessageChannel();channel.port1.onmessage=function(event){var handle=event.data;runIfPresent(handle);};setImmediate=function setImmediate(){var handle=addFromSetImmediateArguments(arguments);channel.port2.postMessage(handle);return handle;};}function installReadyStateChangeImplementation(){var html=doc.documentElement;setImmediate=function setImmediate(){var handle=addFromSetImmediateArguments(arguments);// Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
// into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
var script=doc.createElement("script");script.onreadystatechange=function(){runIfPresent(handle);script.onreadystatechange=null;html.removeChild(script);script=null;};html.appendChild(script);return handle;};}function installSetTimeoutImplementation(){setImmediate=function setImmediate(){var handle=addFromSetImmediateArguments(arguments);setTimeout(partiallyApplied(runIfPresent,handle),0);return handle;};}// If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
var attachTo=Object.getPrototypeOf&&Object.getPrototypeOf(global);attachTo=attachTo&&attachTo.setTimeout?attachTo:global;// Don't get fooled by e.g. browserify environments.
if({}.toString.call(global.process)==="[object process]"){// For Node.js before 0.9
installNextTickImplementation();}else if(canUsePostMessage()){// For non-IE10 modern browsers
installPostMessageImplementation();}else if(global.MessageChannel){// For web workers, where supported
installMessageChannelImplementation();}else if(doc&&"onreadystatechange"in doc.createElement("script")){// For IE 6–8
installReadyStateChangeImplementation();}else{// For older browsers
installSetTimeoutImplementation();}attachTo.setImmediate=setImmediate;attachTo.clearImmediate=clearImmediate;})(self);// Caution:
// Do not replace this import statement with codes.
//
// If you replace this import statement with codes,
// the codes will be executed after the following polyfills are imported
// because import statements are hoisted during compilation.
// Polyfill ECMAScript standard features with global namespace pollution
// Polyfill Custom Elements v1 with global namespace pollution
// Polyfill MutationObserver with global namespace pollution
// Polyfill setImmediate with global namespace pollution
(function(){var DEFAULT_VIEWPORT='width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no';var Viewport={ensureViewportElement:function ensureViewportElement(){var viewportElement=document.querySelector('meta[name=viewport]');if(!viewportElement){viewportElement=document.createElement('meta');viewportElement.name='viewport';document.head.appendChild(viewportElement);}return viewportElement;},setup:function setup(){var viewportElement=Viewport.ensureViewportElement();if(!viewportElement){return;}if(!viewportElement.hasAttribute('content')){viewportElement.setAttribute('content',DEFAULT_VIEWPORT);}}};window.Viewport=Viewport;})();/**
 * MicroEvent - to make any js object an event emitter (server or browser)
 *
 * - pure javascript - server compatible, browser compatible
 * - dont rely on the browser doms
 * - super simple - you get it immediately, no mystery, no magic involved
 *
 * - create a MicroEventDebug with goodies to debug
 *   - make it safer to use
*/ /** NOTE: This library is customized for Onsen UI. */var MicroEvent=function MicroEvent(){};MicroEvent.prototype={on:function on(event,fct){this._events=this._events||{};this._events[event]=this._events[event]||[];this._events[event].push(fct);},once:function once(event,fct){var self=this;var wrapper=function wrapper(){self.off(event,wrapper);return fct.apply(null,arguments);};this.on(event,wrapper);},off:function off(event,fct){this._events=this._events||{};if(event in this._events===false){return;}this._events[event]=this._events[event].filter(function(_fct){if(fct){return fct!==_fct;}else{return false;}});},emit:function emit(event/* , args... */){this._events=this._events||{};if(event in this._events===false){return;}for(var i=0;i<this._events[event].length;i++){this._events[event][i].apply(this,Array.prototype.slice.call(arguments,1));}}};/**
 * mixin will delegate all MicroEvent.js function in the destination object
 *
 * - require('MicroEvent').mixin(Foobar) will make Foobar able to use MicroEvent
 *
 * @param {Object} the object which will support MicroEvent
*/MicroEvent.mixin=function(destObject){var props=['on','once','off','emit'];for(var i=0;i<props.length;i++){if(typeof destObject==='function'){destObject.prototype[props[i]]=MicroEvent.prototype[props[i]];}else{destObject[props[i]]=MicroEvent.prototype[props[i]];}}};window.MicroEvent=MicroEvent;var onsElements={};/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * Add vendor prefix.
 *
 * @param {String} name
 * @return {String}
 */var prefix=function(){var styles=window.getComputedStyle(document.documentElement,'');var prefix=(Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/)||styles.OLink===''&&['','o'])[1];return function(name){return'-'+prefix+'-'+util$1.hyphenate(name);};}();/**
 * Minimal utility library for manipulating element's style.
 * Set element's style.
 *
 * @param {Element} element
 * @param {Object} styles
 * @return {Element}
 */var styler=function styler(element,style){Object.keys(style).forEach(function(key){if(key in element.style){element.style[key]=style[key];}else if(prefix(key)in element.style){element.style[prefix(key)]=style[key];}else{util$1.warn('No such style property: '+key);}});return element;};/**
 * @param {Element} element
 * @param {String} styles Space-separated CSS properties to remove
 */styler.clear=function(element){var styles=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var clearlist=styles.split(/\s+/).reduce(function(r,s){return r.concat([util$1.hyphenate(s),prefix(s)]);},[]),keys=[];var _loop=function _loop(i){var key=element.style[i];if(clearlist.length===0||clearlist.some(function(s){return key.indexOf(s)===0;})){keys.push(key);// Store the key to fix Safari style indexes
}};for(var i=element.style.length-1;i>=0;i--){_loop(i);}keys.forEach(function(key){return element.style[key]='';});element.getAttribute('style')===''&&element.removeAttribute('style');};/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var autoStyleEnabled=true;// Modifiers
var modifiersMap={'quiet':'material--flat','light':'material--flat','outline':'material--flat','cta':'','large--quiet':'material--flat large','large--cta':'large','noborder':'','tappable':''};var platforms={};platforms.android=function(element){var elementName=element.tagName.toLowerCase();if(!util$1.hasModifier(element,'material')){var oldModifier=element.getAttribute('modifier')||'';var newModifier=oldModifier.trim().split(/\s+/).map(function(e){return modifiersMap.hasOwnProperty(e)?modifiersMap[e]:e;});newModifier.unshift('material');element.setAttribute('modifier',newModifier.join(' ').trim());}var elements=['ons-alert-dialog-button','ons-toolbar-button','ons-back-button','ons-button','ons-list-item','ons-fab','ons-speed-dial','ons-speed-dial-item','ons-tab'];// Effects
if(elements.indexOf(elementName)!==-1&&!element.hasAttribute('ripple')&&!element.querySelector('ons-ripple')){if(elementName==='ons-list-item'){if(element.hasAttribute('tappable')){element.setAttribute('ripple','');element.removeAttribute('tappable');}}else{element.setAttribute('ripple','');}}};platforms.ios=function(element){// Modifiers
if(util$1.removeModifier(element,'material')){if(util$1.removeModifier(element,'material--flat')){util$1.addModifier(element,util$1.removeModifier(element,'large')?'large--quiet':'quiet');}if(!element.getAttribute('modifier')){element.removeAttribute('modifier');}}// Effects
if(element.hasAttribute('ripple')){if(element.tagName.toLowerCase()==='ons-list-item'){element.setAttribute('tappable','');}element.removeAttribute('ripple');}};var unlocked={android:true};var getPlatform=function getPlatform(element,force){if(autoStyleEnabled&&!element.hasAttribute('disable-auto-styling')){var mobileOS=platform.getMobileOS();if(platforms.hasOwnProperty(mobileOS)&&(unlocked.hasOwnProperty(mobileOS)||force)){return mobileOS;}}return null;};var prepare=function prepare(element,force){var p=getPlatform(element,force);p&&platforms[p](element);};var mapModifier=function mapModifier(modifier,element,force){if(getPlatform(element,force)){return modifier.split(/\s+/).map(function(m){return modifiersMap.hasOwnProperty(m)?modifiersMap[m]:m;}).join(' ');}return modifier;};var restoreModifier=function restoreModifier(element){if(getPlatform(element)==='android'){var modifier=element.getAttribute('modifier')||'';var newModifier=mapModifier(modifier,element);if(!/(^|\s+)material($|\s+)/i.test(modifier)){newModifier='material '+newModifier;}if(newModifier!==modifier){element.setAttribute('modifier',newModifier.trim());return true;}}return false;};var autoStyle={isEnabled:function isEnabled(){return autoStyleEnabled;},enable:function enable(){return autoStyleEnabled=true;},disable:function disable(){return autoStyleEnabled=false;},prepare:prepare,mapModifier:mapModifier,getPlatform:getPlatform,restoreModifier:restoreModifier};/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var ModifierUtil=function(){function ModifierUtil(){classCallCheck(this,ModifierUtil);}createClass(ModifierUtil,null,[{key:'diff',/**
     * @param {String} last
     * @param {String} current
     */value:function diff(last,current){last=makeDict((''+last).trim());current=makeDict((''+current).trim());var removed=Object.keys(last).reduce(function(result,token){if(!current[token]){result.push(token);}return result;},[]);var added=Object.keys(current).reduce(function(result,token){if(!last[token]){result.push(token);}return result;},[]);return{added:added,removed:removed};function makeDict(modifier){var dict={};ModifierUtil.split(modifier).forEach(function(token){return dict[token]=token;});return dict;}}/**
     * @param {Object} diff
     * @param {Array} diff.removed
     * @param {Array} diff.added
     * @param {Object} classList
     * @param {String} template
     */},{key:'applyDiffToClassList',value:function applyDiffToClassList(diff,classList,template){diff.added.map(function(modifier){return template.replace(/\*/g,modifier);}).forEach(function(klass){return klass.split(/\s+/).forEach(function(k){return classList.add(k);});});diff.removed.map(function(modifier){return template.replace(/\*/g,modifier);}).forEach(function(klass){return klass.split(/\s+/).forEach(function(k){return classList.remove(k);});});}/**
     * @param {Object} diff
     * @param {Array} diff.removed
     * @param {Array} diff.added
     * @param {HTMLElement} element
     * @param {Object} scheme
     */},{key:'applyDiffToElement',value:function applyDiffToElement(diff,element,scheme){Object.keys(scheme).forEach(function(selector){var targetElements=!selector||util$1.match(element,selector)?[element]:Array.prototype.filter.call(element.querySelectorAll(selector),function(targetElement){return!util$1.findParent(targetElement,element.tagName,function(parent){return parent===element;});});for(var i=0;i<targetElements.length;i++){ModifierUtil.applyDiffToClassList(diff,targetElements[i].classList,scheme[selector]);}});}/**
     * @param {String} last
     * @param {String} current
     * @param {HTMLElement} element
     * @param {Object} scheme
     */},{key:'onModifierChanged',value:function onModifierChanged(last,current,element,scheme){ModifierUtil.applyDiffToElement(ModifierUtil.diff(last,current),element,scheme);autoStyle.restoreModifier(element);}},{key:'refresh',value:function refresh(element,scheme){ModifierUtil.applyDiffToElement(ModifierUtil.diff('',element.getAttribute('modifier')||''),element,scheme);}/**
     * @param {HTMLElement} element
     * @param {Object} scheme
     */},{key:'initModifier',value:function initModifier(element,scheme){var modifier=element.getAttribute('modifier');if(typeof modifier!=='string'){return;}ModifierUtil.applyDiffToElement({removed:[],added:ModifierUtil.split(modifier)},element,scheme);}},{key:'split',value:function split(modifier){if(typeof modifier!=='string'){return[];}return modifier.trim().split(/ +/).filter(function(token){return token!=='';});}/**
     * Add modifier token to an element.
     */},{key:'addModifier',value:function addModifier(element,modifierToken){if(!element.hasAttribute('modifier')){element.setAttribute('modifier',modifierToken);}else{var tokens=ModifierUtil.split(element.getAttribute('modifier'));if(tokens.indexOf(modifierToken)==-1){tokens.push(modifierToken);element.setAttribute('modifier',tokens.join(' '));}}}/**
     * Remove modifier token from an element.
     */},{key:'removeModifier',value:function removeModifier(element,modifierToken){if(element.hasAttribute('modifier')){var tokens=ModifierUtil.split(element.getAttribute('modifier'));var index=tokens.indexOf(modifierToken);if(index!==-1){tokens.splice(index,1);element.setAttribute('modifier',tokens.join(' '));}}}}]);return ModifierUtil;}();/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var startsWith=function startsWith(s,c){return s.substr(0,c.length)===c;};var endsWith=function endsWith(s,c){return s.substr(s.length-c.length,c.length)===c;};var unwrap=function unwrap(s){return s.slice(1,-1);};var isObjectString=function isObjectString(s){return startsWith(s,'{')&&endsWith(s,'}');};var isArrayString=function isArrayString(s){return startsWith(s,'[')&&endsWith(s,']');};var isQuotedString=function isQuotedString(s){return startsWith(s,'\'')&&endsWith(s,'\'')||startsWith(s,'"')&&endsWith(s,'"');};var error=function error(token,string,originalString){throw new Error('Unexpected token \''+token+'\' at position '+(originalString.length-string.length-1)+' in string: \''+originalString+'\'');};var processToken=function processToken(token,string,originalString){if(token==='true'||token==='false'){return token==='true';}else if(isQuotedString(token)){return unwrap(token);}else if(!isNaN(token)){return+token;}else if(isObjectString(token)){return parseObject(unwrap(token));}else if(isArrayString(token)){return parseArray(unwrap(token));}else{error(token,string,originalString);}};var nextToken=function nextToken(string){string=string.trim();var limit=string.length;if(string[0]===':'||string[0]===','){limit=1;}else if(string[0]==='{'||string[0]==='['){var c=string.charCodeAt(0);var nestedObject=1;for(var i=1;i<string.length;i++){if(string.charCodeAt(i)===c){nestedObject++;}else if(string.charCodeAt(i)===c+2){nestedObject--;if(nestedObject===0){limit=i+1;break;}}}}else if(string[0]==='\''||string[0]==='"'){for(var _i=1;_i<string.length;_i++){if(string[_i]===string[0]){limit=_i+1;break;}}}else{for(var _i2=1;_i2<string.length;_i2++){if([' ',',',':'].indexOf(string[_i2])!==-1){limit=_i2;break;}}}return string.slice(0,limit);};var parseObject=function parseObject(string){var isValidKey=function isValidKey(key){return /^[A-Z_$][A-Z0-9_$]*$/i.test(key);};string=string.trim();var originalString=string;var object={};var readingKey=true,key=void 0,previousToken=void 0,token=void 0;while(string.length>0){previousToken=token;token=nextToken(string);string=string.slice(token.length,string.length).trim();if(token===':'&&(!readingKey||!previousToken||previousToken===',')||token===','&&readingKey||token!==':'&&token!==','&&previousToken&&previousToken!==','&&previousToken!==':'){error(token,string,originalString);}else if(token===':'&&readingKey&&previousToken){previousToken=isQuotedString(previousToken)?unwrap(previousToken):previousToken;if(isValidKey(previousToken)){key=previousToken;readingKey=false;}else{throw new Error('Invalid key token \''+previousToken+'\' at position 0 in string: \''+originalString+'\'');}}else if(token===','&&!readingKey&&previousToken){object[key]=processToken(previousToken,string,originalString);readingKey=true;}}if(token){object[key]=processToken(token,string,originalString);}return object;};var parseArray=function parseArray(string){string=string.trim();var originalString=string;var array=[];var previousToken=void 0,token=void 0;while(string.length>0){previousToken=token;token=nextToken(string);string=string.slice(token.length,string.length).trim();if(token===','&&(!previousToken||previousToken===',')){error(token,string,originalString);}else if(token===','){array.push(processToken(previousToken,string,originalString));}}if(token){if(token!==','){array.push(processToken(token,string,originalString));}else{error(token,string,originalString);}}return array;};var parse=function parse(string){string=string.trim();if(isObjectString(string)){return parseObject(unwrap(string));}else if(isArrayString(string)){return parseArray(unwrap(string));}else{throw new Error('Provided string must be object or array like: '+string);}};/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var util$1={};var errorPrefix='[Onsen UI]';util$1.globals={fabOffset:0,errorPrefix:errorPrefix,supportsPassive:false};platform._runOnActualPlatform(function(){util$1.globals.actualMobileOS=platform.getMobileOS();util$1.globals.isWKWebView=platform.isWKWebView();});try{var opts=Object.defineProperty({},'passive',{get:function get$$1(){util$1.globals.supportsPassive=true;}});window.addEventListener('testPassive',null,opts);window.removeEventListener('testPassive',null,opts);}catch(e){}/**
 * @param {Element} el Target
 * @param {String} name Event name
 * @param {Function} handler Event handler
 * @param {Object} [opt] Event options (passive, capture...)
 * @param {Boolean} [isGD] If comes from GestureDetector. Just for testing.
 */util$1.addEventListener=function(el,name,handler,opt,isGD){el.addEventListener(name,handler,util$1.globals.supportsPassive?opt:(opt||{}).capture);};util$1.removeEventListener=function(el,name,handler,opt,isGD){el.removeEventListener(name,handler,util$1.globals.supportsPassive?opt:(opt||{}).capture);};/**
 * @param {String/Function} query dot class name or node name or matcher function.
 * @return {Function}
 */util$1.prepareQuery=function(query){return query instanceof Function?query:function(element){return util$1.match(element,query);};};/**
 * @param {Element} e
 * @param {String/Function} s CSS Selector.
 * @return {Boolean}
 */util$1.match=function(e,s){return(e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector).call(e,s);};/**
 * @param {Element} element
 * @param {String/Function} query dot class name or node name or matcher function.
 * @return {HTMLElement/null}
 */util$1.findChild=function(element,query){var match=util$1.prepareQuery(query);// Caution: `element.children` is `undefined` in some environments if `element` is `svg`
for(var i=0;i<element.childNodes.length;i++){var node=element.childNodes[i];if(node.nodeType!==Node.ELEMENT_NODE){// process only element nodes
continue;}if(match(node)){return node;}}return null;};/**
 * @param {Element} element
 * @param {String/Function} query dot class name or node name or matcher function.
 * @return {HTMLElement/null}
 */util$1.findParent=function(element,query,until){var match=util$1.prepareQuery(query);var parent=element.parentNode;for(;;){if(!parent||parent===document||parent instanceof DocumentFragment||until&&until(parent)){return null;}else if(match(parent)){return parent;}parent=parent.parentNode;}};/**
 * @param {Element} element
 * @return {boolean}
 */util$1.isAttached=function(element){return document.body.contains(element);};/**
 * @param {Element} element
 * @return {boolean}
 */util$1.hasAnyComponentAsParent=function(element){while(element&&document.documentElement!==element){element=element.parentNode;if(element&&element.nodeName.toLowerCase().match(/(ons-navigator|ons-tabbar|ons-modal)/)){return true;}}return false;};/**
 * @param {Object} element
 * @return {Array}
 */util$1.getAllChildNodes=function(element){var _ref;return(_ref=[element]).concat.apply(_ref,toConsumableArray(Array.from(element.children).map(function(childEl){return util$1.getAllChildNodes(childEl);})));};/**
 * @param {Element} element
 * @return {boolean}
 */util$1.isPageControl=function(element){return element.nodeName.match(/^ons-(navigator|splitter|tabbar|page)$/i);};/**
 * @param {Element} element
 * @param {String} action to propagate
 */util$1.propagateAction=function(element,action){for(var i=0;i<element.childNodes.length;i++){var child=element.childNodes[i];if(child[action]instanceof Function){child[action]();}else{util$1.propagateAction(child,action);}}};/**
 * @param {String} string - string to be camelized
 * @return {String} Camelized string
 */util$1.camelize=function(string){return string.toLowerCase().replace(/-([a-z])/g,function(m,l){return l.toUpperCase();});};/**
 * @param {String} string - string to be hyphenated
 * @return {String} Hyphenated string
 */util$1.hyphenate=function(string){return string.replace(/([a-zA-Z])([A-Z])/g,'$1-$2').toLowerCase();};/**
 * @param {String} selector - tag and class only
 * @param {Object} style
 * @param {Element}
 */util$1.create=function(){var selector=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var style=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var classList=selector.split('.');var element=document.createElement(classList.shift()||'div');if(classList.length){element.className=classList.join(' ');}styler(element,style);return element;};/**
 * @param {String} html
 * @return {Element}
 */util$1.createElement=function(html){var wrapper=document.createElement('div');if(html instanceof DocumentFragment){wrapper.appendChild(document.importNode(html,true));}else{wrapper.innerHTML=html.trim();}if(wrapper.children.length>1){util$1["throw"]('HTML template must contain a single root element');}var element=wrapper.children[0];wrapper.children[0].remove();return element;};/**
 * @param {String} html
 * @return {HTMLFragment}
 */util$1.createFragment=function(html){var template=document.createElement('template');template.innerHTML=html;return document.importNode(template.content,true);};/*
 * @param {Object} dst Destination object.
 * @param {...Object} src Source object(s).
 * @returns {Object} Reference to `dst`.
 */util$1.extend=function(dst){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}for(var i=0;i<args.length;i++){if(args[i]){var keys=Object.keys(args[i]);for(var j=0;j<keys.length;j++){var key=keys[j];dst[key]=args[i][key];}}}return dst;};/**
 * @param {Object} arrayLike
 * @return {Array}
 */util$1.arrayFrom=function(arrayLike){return Array.prototype.slice.apply(arrayLike);};/**
 * @param {String} jsonString
 * @param {Object} [failSafe]
 * @return {Object}
 */util$1.parseJSONObjectSafely=function(jsonString){var failSafe=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};try{var result=JSON.parse(''+jsonString);if((typeof result==='undefined'?'undefined':_typeof(result))==='object'&&result!==null){return result;}}catch(e){return failSafe;}return failSafe;};/**
 * @param {String} path - path such as 'myApp.controllers.data.loadData'
 * @return {Any} - whatever is located at that path
 */util$1.findFromPath=function(path){path=path.split('.');var el=window,key;while(key=path.shift()){// eslint-disable-line no-cond-assign
el=el[key];}return el;};/**
 * @param {HTMLElement} container - Page or page-container that implements 'topPage'
 * @return {HTMLElement|null} - Visible page element or null if not found.
 */util$1.getTopPage=function(container){return container&&(container.tagName.toLowerCase()==='ons-page'?container:container.topPage)||null;};/**
 * @param {HTMLElement} container - Element where the search begins
 * @return {HTMLElement|null} - Page element that contains the visible toolbar or null.
 */util$1.findToolbarPage=function(container){var page=util$1.getTopPage(container);if(page){if(page._canAnimateToolbar()){return page;}for(var i=0;i<page._contentElement.children.length;i++){var nextPage=util$1.getTopPage(page._contentElement.children[i]);if(nextPage&&!/ons-tabbar/i.test(page._contentElement.children[i].tagName)){return util$1.findToolbarPage(nextPage);}}}return null;};/**
 * @param {Element} element
 * @param {String} eventName
 * @param {Object} [detail]
 * @return {CustomEvent}
 */util$1.triggerElementEvent=function(target,eventName){var detail=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var event=new CustomEvent(eventName,{bubbles:true,cancelable:true,detail:detail});Object.keys(detail).forEach(function(key){event[key]=detail[key];});target.dispatchEvent(event);return event;};/**
 * @param {Element} target
 * @param {String} modifierName
 * @return {Boolean}
 */util$1.hasModifier=function(target,modifierName){if(!target.hasAttribute('modifier')){return false;}return RegExp('(^|\\s+)'+modifierName+'($|\\s+)','i').test(target.getAttribute('modifier'));};/**
 * @param {Element} target
 * @param {String} modifierName
 * @param {Object} options.autoStyle Maps the modifierName to the corresponding styled modifier.
 * @param {Object} options.forceAutoStyle Ignores platform limitation.
 * @return {Boolean} Whether it was added or not.
 */util$1.addModifier=function(target,modifierName){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if(options.autoStyle){modifierName=autoStyle.mapModifier(modifierName,target,options.forceAutoStyle);}if(util$1.hasModifier(target,modifierName)){return false;}target.setAttribute('modifier',((target.getAttribute('modifier')||'')+' '+modifierName).trim());return true;};/**
 * @param {Element} target
 * @param {String} modifierName
 * @param {Object} options.autoStyle Maps the modifierName to the corresponding styled modifier.
 * @param {Object} options.forceAutoStyle Ignores platform limitation.
 * @return {Boolean} Whether it was found or not.
 */util$1.removeModifier=function(target,modifierName){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if(options.autoStyle){modifierName=autoStyle.mapModifier(modifierName,target,options.forceAutoStyle);}if(!target.getAttribute('modifier')||!util$1.hasModifier(target,modifierName)){return false;}var newModifiers=target.getAttribute('modifier').split(/\s+/).filter(function(m){return m&&m!==modifierName;});newModifiers.length?target.setAttribute('modifier',newModifiers.join(' ')):target.removeAttribute('modifier');return true;};/**
 * @param {Element} target
 * @param {String} modifierName
 * @param {Boolean} options.force Forces modifier to be added or removed.
 * @param {Object} options.autoStyle Maps the modifierName to the corresponding styled modifier.
 * @param {Boolean} options.forceAutoStyle Ignores platform limitation.
 * @return {Boolean} Whether it was found or not.
 */util$1.toggleModifier=function(){var options=arguments.length>2?arguments.length<=2?undefined:arguments[2]:{};var force=typeof options==='boolean'?options:options.force;var toggle=typeof force==='boolean'?force:!util$1.hasModifier.apply(util$1,arguments);toggle?util$1.addModifier.apply(util$1,arguments):util$1.removeModifier.apply(util$1,arguments);};/**
 * @param {Element} el
 * @param {String} defaultClass
 * @param {Object} scheme
 */util$1.restoreClass=function(el,defaultClass,scheme){defaultClass.split(/\s+/).forEach(function(c){return c!==''&&!el.classList.contains(c)&&el.classList.add(c);});el.hasAttribute('modifier')&&ModifierUtil.refresh(el,scheme);};// TODO: FIX
util$1.updateParentPosition=function(el){if(!el._parentUpdated&&el.parentElement){if(window.getComputedStyle(el.parentElement).getPropertyValue('position')==='static'){el.parentElement.style.position='relative';}el._parentUpdated=true;}};util$1.toggleAttribute=function(element,name,value){if(value){element.setAttribute(name,typeof value==='boolean'?'':value);}else{element.removeAttribute(name);}};util$1.bindListeners=function(element,listenerNames){listenerNames.forEach(function(name){var boundName=name.replace(/^_[a-z]/,'_bound'+name[1].toUpperCase());element[boundName]=element[boundName]||element[name].bind(element);});};util$1.each=function(obj,f){return Object.keys(obj).forEach(function(key){return f(key,obj[key]);});};/**
 * @param {Element} target
 * @param {boolean} hasRipple
 * @param {Object} attrs
 */util$1.updateRipple=function(target,hasRipple){var attrs=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if(hasRipple===undefined){hasRipple=target.hasAttribute('ripple');}var rippleElement=util$1.findChild(target,'ons-ripple');if(hasRipple){if(!rippleElement){var element=document.createElement('ons-ripple');Object.keys(attrs).forEach(function(key){return element.setAttribute(key,attrs[key]);});target.insertBefore(element,target.firstChild);}}else if(rippleElement){rippleElement.remove();}};/**
 * @param {String}
 * @return {Object}
 */util$1.animationOptionsParse=parse;/**
 * @param {*} value
 */util$1.isInteger=function(value){return typeof value==='number'&&isFinite(value)&&Math.floor(value)===value;};/**
 * @return {Object} Deferred promise.
 */util$1.defer=function(){var deferred={};deferred.promise=new Promise(function(resolve,reject){deferred.resolve=resolve;deferred.reject=reject;});return deferred;};/**
 * Show warnings when they are enabled.
 *
 * @param {*} arguments to console.warn
 */util$1.warn=function(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}if(!internal$1.config.warningsDisabled){var _console;(_console=console).warn.apply(_console,[errorPrefix].concat(args));}};util$1["throw"]=function(message){throw new Error(errorPrefix+' '+message);};util$1.throwAbstract=function(){return util$1["throw"]('Cannot instantiate abstract class');};util$1.throwMember=function(){return util$1["throw"]('Class member must be implemented');};util$1.throwPageLoader=function(){return util$1["throw"]('First parameter should be an instance of PageLoader');};util$1.throwAnimator=function(el){return util$1["throw"]('"Animator" param must inherit '+el+'Animator');};var prevent=function prevent(e){return e.cancelable&&e.preventDefault();};/**
 * Prevent scrolling while draging horizontally on iOS.
 *
 * @param {gd} GestureDetector instance
 */util$1.iosPreventScroll=function(gd){if(util$1.globals.actualMobileOS==='ios'){var clean=function clean(e){gd.off('touchmove',prevent);gd.off('dragend',clean);};gd.on('touchmove',prevent);gd.on('dragend',clean);}};/**
 * Prevents scroll in underlying pages on iOS. See #2220 #2274 #1949
 *
 * @param {el} HTMLElement that prevents the events
 * @param {add} Boolean Add or remove event listeners
 */util$1.iosPageScrollFix=function(add){// Full fix - May cause issues with UIWebView's momentum scroll
if(util$1.globals.actualMobileOS==='ios'){document.body.classList.toggle('ons-ios-scroll',add);// Allows custom and localized fixes (#2274)
document.body.classList.toggle('ons-ios-scroll-fix',add);}};/**
 * Distance and deltaTime filter some weird dragstart events that are not fired immediately.
 *
 * @param {event}
 */util$1.isValidGesture=function(event){return event.gesture!==undefined&&(event.gesture.distance<=15||event.gesture.deltaTime<=100);};util$1.checkMissingImport=function(){for(var _len3=arguments.length,elementNames=Array(_len3),_key3=0;_key3<_len3;_key3++){elementNames[_key3]=arguments[_key3];}elementNames.forEach(function(name){if(!onsElements[name]){util$1["throw"]('Ons'+name+' is required but was not imported (Custom Elements)');}});};/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var error$1=function error(message){return util$1["throw"]('In PageAttributeExpression: '+message);};var pageAttributeExpression={_variables:{},/**
   * Define a variable.
   *
   * @param {String} name Name of the variable
   * @param {String|Function} value Value of the variable. Can be a string or a function. The function must return a string.
   * @param {Boolean} overwrite If this value is false, an error will be thrown when trying to define a variable that has already been defined.
   */defineVariable:function defineVariable(name,value){var overwrite=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(typeof name!=='string'){error$1('Variable name must be a string');}else if(typeof value!=='string'&&typeof value!=='function'){error$1('Variable value must be a string or a function');}else if(this._variables.hasOwnProperty(name)&&!overwrite){error$1('"'+name+'" is already defined');}this._variables[name]=value;},/**
   * Get a variable.
   *
   * @param {String} name Name of the variable.
   * @return {String|Function|null}
   */getVariable:function getVariable(name){if(!this._variables.hasOwnProperty(name)){return null;}return this._variables[name];},/**
   * Remove a variable.
   *
   * @param {String} name Name of the varaible.
   */removeVariable:function removeVariable(name){delete this._variables[name];},/**
   * Get all variables.
   *
   * @return {Object}
   */getAllVariables:function getAllVariables(){return this._variables;},_parsePart:function _parsePart(part){var c=void 0,inInterpolation=false,currentIndex=0;var tokens=[];if(part.length===0){error$1('Unable to parse empty string');}for(var i=0;i<part.length;i++){c=part.charAt(i);if(c==='$'&&part.charAt(i+1)==='{'){if(inInterpolation){error$1('Nested interpolation not supported');}var token=part.substring(currentIndex,i);if(token.length>0){tokens.push(part.substring(currentIndex,i));}currentIndex=i;inInterpolation=true;}else if(c==='}'){if(!inInterpolation){error$1('} must be preceeded by ${');}var _token=part.substring(currentIndex,i+1);if(_token.length>0){tokens.push(part.substring(currentIndex,i+1));}currentIndex=i+1;inInterpolation=false;}}if(inInterpolation){error$1('Unterminated interpolation');}tokens.push(part.substring(currentIndex,part.length));return tokens;},_replaceToken:function _replaceToken(token){var re=/^\${(.*?)}$/,match=token.match(re);if(match){var name=match[1].trim();var variable=this.getVariable(name);if(variable===null){error$1('Variable "'+name+'" does not exist');}else if(typeof variable==='string'){return variable;}else{var rv=variable();if(typeof rv!=='string'){error$1('Must return a string');}return rv;}}else{return token;}},_replaceTokens:function _replaceTokens(tokens){return tokens.map(this._replaceToken.bind(this));},_parseExpression:function _parseExpression(expression){return expression.split(',').map(function(part){return part.trim();}).map(this._parsePart.bind(this)).map(this._replaceTokens.bind(this)).map(function(part){return part.join('');});},/**
   * Evaluate an expression.
   *
   * @param {String} expression An page attribute expression.
   * @return {Array}
   */evaluate:function evaluate(expression){if(!expression){return[];}return this._parseExpression(expression);}};// Define default variables.
pageAttributeExpression.defineVariable('mobileOS',platform.getMobileOS());pageAttributeExpression.defineVariable('iOSDevice',platform.getIOSDevice());pageAttributeExpression.defineVariable('runtime',function(){return platform.isWebView()?'cordova':'browser';});/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var internal$1={};internal$1.config={autoStatusBarFill:true,animationsDisabled:false,warningsDisabled:false};internal$1.nullElement=window.document.createElement('div');/**
 * @return {Boolean}
 */internal$1.isEnabledAutoStatusBarFill=function(){return!!internal$1.config.autoStatusBarFill;};/**
 * @param {String} html
 * @return {String}
 */internal$1.normalizePageHTML=function(html){return(''+html).trim();};internal$1.waitDOMContentLoaded=function(callback){if(window.document.readyState==='loading'||window.document.readyState=='uninitialized'){var wrappedCallback=function wrappedCallback(){callback();window.document.removeEventListener('DOMContentLoaded',wrappedCallback);};window.document.addEventListener('DOMContentLoaded',wrappedCallback);}else{setImmediate(callback);}};internal$1.autoStatusBarFill=function(action){var onReady=function onReady(){if(internal$1.shouldFillStatusBar()){action();}document.removeEventListener('deviceready',onReady);};if((typeof device==='undefined'?'undefined':_typeof(device))==='object'){document.addEventListener('deviceready',onReady);}else if(['complete','interactive'].indexOf(document.readyState)===-1){internal$1.waitDOMContentLoaded(onReady);}else{onReady();}};internal$1.shouldFillStatusBar=function(){return internal$1.isEnabledAutoStatusBarFill()&&(platform.isWebView()&&(platform.isIOS7above()||platform.isIPadOS())&&!platform.isIPhoneX()||document.body.querySelector('.ons-status-bar-mock.ios'));};internal$1.templateStore={_storage:{},/**
   * @param {String} key
   * @return {String/null} template
   */get:function get$$1(key){return internal$1.templateStore._storage[key]||null;},/**
   * @param {String} key
   * @param {String} template
   */set:function set$$1(key,template){internal$1.templateStore._storage[key]=template;}};window.document.addEventListener('_templateloaded',function(e){if(e.target.nodeName.toLowerCase()==='ons-template'){internal$1.templateStore.set(e.templateId,e.template);}},false);/**
 * @param {String} page
 * @return {Promise}
 */internal$1.getTemplateHTMLAsync=function(page){return new Promise(function(resolve,reject){internal$1.waitDOMContentLoaded(function(){var cache=internal$1.templateStore.get(page);if(cache){if(cache instanceof DocumentFragment){return resolve(cache);}var html=typeof cache==='string'?cache:cache[1];return resolve(internal$1.normalizePageHTML(html));}var local=window.document.getElementById(page);if(local){var _html=local.textContent||local.content;return resolve(_html);}var xhr=new XMLHttpRequest();xhr.open('GET',page,true);xhr.onload=function(){var html=xhr.responseText;if(xhr.status>=400&&xhr.status<600){reject(html);}else{// Refresh script tags
var fragment=util$1.createFragment(html);util$1.arrayFrom(fragment.querySelectorAll('script')).forEach(function(el){var script=document.createElement('script');script.type=el.type||'text/javascript';script.appendChild(document.createTextNode(el.text||el.textContent||el.innerHTML));el.parentNode.replaceChild(script,el);});internal$1.templateStore.set(page,fragment);resolve(fragment);}};xhr.onerror=function(){util$1["throw"]('Page template not found: '+page);};xhr.send(null);});});};/**
 * @param {String} page
 * @return {Promise}
 */internal$1.getPageHTMLAsync=function(page){var pages=pageAttributeExpression.evaluate(page);var getPage=function getPage(page){if(typeof page!=='string'){return Promise.reject('Must specify a page.');}return internal$1.getTemplateHTMLAsync(page)["catch"](function(error){if(pages.length===0){return Promise.reject(error);}return getPage(pages.shift());});};return getPage(pages.shift());};/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var AnimatorFactory=function(){/**
   * @param {Object} opts
   * @param {Object} opts.animators The dictionary for animator classes
   * @param {Function} opts.baseClass The base class of animators
   * @param {String} [opts.baseClassName] The name of the base class of animators
   * @param {String} [opts.defaultAnimation] The default animation name
   * @param {Object} [opts.defaultAnimationOptions] The default animation options
   */function AnimatorFactory(opts){classCallCheck(this,AnimatorFactory);this._animators=opts.animators;this._baseClass=opts.baseClass;this._baseClassName=opts.baseClassName||opts.baseClass.name;this._animation=opts.defaultAnimation||'default';this._animationOptions=opts.defaultAnimationOptions||{};if(!this._animators[this._animation]){util$1["throw"]('No such animation: '+this._animation);}}/**
   * @param {String} jsonString
   * @return {Object/null}
   */createClass(AnimatorFactory,[{key:'setAnimationOptions',/**
     * @param {Object} options
     */value:function setAnimationOptions(options){this._animationOptions=options;}/**
     * @param {Object} options
     * @param {String} [options.animation] The animation name
     * @param {Object} [options.animationOptions] The animation options
     * @param {Object} defaultAnimator The default animator instance
     * @return {Object} An animator instance
     */},{key:'newAnimator',value:function newAnimator(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var defaultAnimator=arguments[1];var animator=null;if(options.animation instanceof this._baseClass){return options.animation;}var Animator=null;if(typeof options.animation==='string'){Animator=this._animators[options.animation];}if(!Animator&&defaultAnimator){animator=defaultAnimator;}else{Animator=Animator||this._animators[this._animation];var animationOpts=util$1.extend({},this._animationOptions,options.animationOptions||{},internal$1.config.animationsDisabled?{duration:0,delay:0}:{});animator=new Animator(animationOpts);if(typeof animator==='function'){animator=new animator(animationOpts);// eslint-disable-line new-cap
}}if(!(animator instanceof this._baseClass)){util$1["throw"]('"animator" is not an instance of '+this._baseClassName);}return animator;}}],[{key:'parseAnimationOptionsString',value:function parseAnimationOptionsString(jsonString){try{if(typeof jsonString==='string'){var result=util$1.animationOptionsParse(jsonString);if((typeof result==='undefined'?'undefined':_typeof(result))==='object'&&result!==null){return result;}else{console.error('"animation-options" attribute must be a JSON object string: '+jsonString);}}return{};}catch(e){console.error('"animation-options" attribute must be a JSON object string: '+jsonString);return{};}}}]);return AnimatorFactory;}();/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var util$3={_ready:false,_domContentLoaded:false,_onDOMContentLoaded:function _onDOMContentLoaded(){util$3._domContentLoaded=true;if(platform.isWebView()){window.document.addEventListener('deviceready',function(){util$3._ready=true;},false);}else{util$3._ready=true;}},addBackButtonListener:function addBackButtonListener(fn){if(!this._domContentLoaded){throw new Error('This method is available after DOMContentLoaded');}if(this._ready){window.document.addEventListener('backbutton',fn,false);}else{window.document.addEventListener('deviceready',function(){window.document.addEventListener('backbutton',fn,false);});}},removeBackButtonListener:function removeBackButtonListener(fn){if(!this._domContentLoaded){throw new Error('This method is available after DOMContentLoaded');}if(this._ready){window.document.removeEventListener('backbutton',fn,false);}else{window.document.addEventListener('deviceready',function(){window.document.removeEventListener('backbutton',fn,false);});}}};window.addEventListener('DOMContentLoaded',function(){return util$3._onDOMContentLoaded();},false);var HandlerRepository={_store:{},_genId:function(){var i=0;return function(){return i++;};}(),set:function set$$1(element,handler){if(element.dataset.deviceBackButtonHandlerId){this.remove(element);}var id=element.dataset.deviceBackButtonHandlerId=HandlerRepository._genId();this._store[id]=handler;},remove:function remove(element){if(element.dataset.deviceBackButtonHandlerId){delete this._store[element.dataset.deviceBackButtonHandlerId];delete element.dataset.deviceBackButtonHandlerId;}},get:function get$$1(element){if(!element.dataset.deviceBackButtonHandlerId){return undefined;}var id=element.dataset.deviceBackButtonHandlerId;if(!this._store[id]){throw new Error();}return this._store[id];},has:function has(element){if(!element.dataset){return false;}var id=element.dataset.deviceBackButtonHandlerId;return!!this._store[id];}};var DeviceBackButtonDispatcher=function(){function DeviceBackButtonDispatcher(){classCallCheck(this,DeviceBackButtonDispatcher);this._isEnabled=false;this._boundCallback=this._callback.bind(this);}/**
   * Enable to handle 'backbutton' events.
   */createClass(DeviceBackButtonDispatcher,[{key:'enable',value:function enable(){if(!this._isEnabled){util$3.addBackButtonListener(this._boundCallback);this._isEnabled=true;}}/**
     * Disable to handle 'backbutton' events.
     */},{key:'disable',value:function disable(){if(this._isEnabled){util$3.removeBackButtonListener(this._boundCallback);this._isEnabled=false;}}/**
     * Fire a 'backbutton' event manually.
     */},{key:'fireDeviceBackButtonEvent',value:function fireDeviceBackButtonEvent(){var event=document.createEvent('Event');event.initEvent('backbutton',true,true);document.dispatchEvent(event);}},{key:'_callback',value:function _callback(){this._dispatchDeviceBackButtonEvent();}/**
     * @param {HTMLElement} element
     * @param {Function} callback
     */},{key:'createHandler',value:function createHandler(element,callback){if(!(element instanceof HTMLElement)){throw new Error('element must be an instance of HTMLElement');}if(!(callback instanceof Function)){throw new Error('callback must be an instance of Function');}var handler={_callback:callback,_element:element,disable:function disable(){HandlerRepository.remove(element);},setListener:function setListener(callback){this._callback=callback;},enable:function enable(){HandlerRepository.set(element,this);},isEnabled:function isEnabled(){return HandlerRepository.get(element)===this;},destroy:function destroy(){HandlerRepository.remove(element);this._callback=this._element=null;}};handler.enable();return handler;}},{key:'_dispatchDeviceBackButtonEvent',value:function _dispatchDeviceBackButtonEvent(){var tree=this._captureTree();var element=this._findHandlerLeafElement(tree);var handler=HandlerRepository.get(element);handler._callback(createEvent(element));function createEvent(element){return{_element:element,callParentHandler:function callParentHandler(){var parent=this._element.parentNode;while(parent){handler=HandlerRepository.get(parent);if(handler){return handler._callback(createEvent(parent));}parent=parent.parentNode;}}};}}/**
     * @return {Object}
     */},{key:'_captureTree',value:function _captureTree(){return createTree(document.body);function createTree(element){var tree={element:element,children:Array.prototype.concat.apply([],arrayOf(element.children).map(function(childElement){if(childElement.style.display==='none'||childElement._isShown===false){return[];}if(childElement.children.length===0&&!HandlerRepository.has(childElement)){return[];}var result=createTree(childElement);if(result.children.length===0&&!HandlerRepository.has(result.element)){return[];}return[result];}))};if(!HandlerRepository.has(tree.element)){for(var i=0;i<tree.children.length;i++){var subTree=tree.children[i];if(HandlerRepository.has(subTree.element)){return subTree;}}}return tree;}function arrayOf(target){var result=[];for(var i=0;i<target.length;i++){result.push(target[i]);}return result;}}/**
     * @param {Object} tree
     * @return {HTMLElement}
     */},{key:'_findHandlerLeafElement',value:function _findHandlerLeafElement(tree){return find(tree);function find(node){if(node.children.length===0){return node.element;}if(node.children.length===1){return find(node.children[0]);}return node.children.map(function(childNode){return childNode.element;}).reduce(function(left,right){if(!left){return right;}var leftZ=parseInt(window.getComputedStyle(left,'').zIndex,10);var rightZ=parseInt(window.getComputedStyle(right,'').zIndex,10);if(!isNaN(leftZ)&&!isNaN(rightZ)){return leftZ>rightZ?left:right;}throw new Error('Capturing backbutton-handler is failure.');},null);}}}]);return DeviceBackButtonDispatcher;}();var deviceBackButtonDispatcher=new DeviceBackButtonDispatcher();/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/internal$1.AnimatorFactory=AnimatorFactory;internal$1.ModifierUtil=ModifierUtil;internal$1.dbbDispatcher=deviceBackButtonDispatcher;function setup(ons){internal$1.waitDOMContentLoaded(function(){register('script[type="text/ons-template"]');register('script[type="text/template"]');register('script[type="text/ng-template"]');register('template');function register(query){var templates=window.document.querySelectorAll(query);for(var i=0;i<templates.length;i++){internal$1.templateStore.set(templates[i].getAttribute('id'),templates[i].textContent||templates[i].content);}}});if(window._onsLoaded){ons._util.warn('Onsen UI is loaded more than once.');}window._onsLoaded=true;ons.ready(function(){ons.enableDeviceBackButtonHandler();ons._defaultDeviceBackButtonHandler=ons._internal.dbbDispatcher.createHandler(window.document.body,function(){if(Object.hasOwnProperty.call(navigator,'app')){navigator.app.exitApp();}else{console.warn('Could not close the app. Is \'cordova.js\' included?\nError: \'window.navigator.app\' is undefined.');}});document.body._gestureDetector=new ons.GestureDetector(document.body,{passive:true});// Simulate Device Back Button on ESC press
if(!ons.platform.isWebView()){document.body.addEventListener('keydown',function(event){if(event.keyCode===27){ons.fireDeviceBackButtonEvent();}});}// setup loading placeholder
ons._setupLoadingPlaceHolders();});// viewport.js
Viewport.setup();}/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * Minimal animation library for managing css transition on mobile browsers.
 */var TIMEOUT_RATIO=1.4;var util$4={};// capitalize string
util$4.capitalize=function(str){return str.charAt(0).toUpperCase()+str.slice(1);};/**
 * @param {Object} params
 * @param {String} params.property
 * @param {Float} params.duration
 * @param {String} params.timing
 */util$4.buildTransitionValue=function(params){params.property=params.property||'all';params.duration=params.duration||0.4;params.timing=params.timing||'linear';var props=params.property.split(/ +/);return props.map(function(prop){return prop+' '+params.duration+'s '+params.timing;}).join(', ');};/**
 * Add an event handler on "transitionend" event.
 */util$4.onceOnTransitionEnd=function(element,callback){if(!element){return function(){};}var fn=function fn(event){if(element==event.target){event.stopPropagation();removeListeners();callback();}};var removeListeners=function removeListeners(){util$4._transitionEndEvents.forEach(function(eventName){element.removeEventListener(eventName,fn,false);});};util$4._transitionEndEvents.forEach(function(eventName){element.addEventListener(eventName,fn,false);});return removeListeners;};util$4._transitionEndEvents=function(){if('ontransitionend'in window){return['transitionend'];}if('onwebkittransitionend'in window){return['webkitTransitionEnd'];}if(util$4.vendorPrefix==='webkit'||util$4.vendorPrefix==='o'||util$4.vendorPrefix==='moz'||util$4.vendorPrefix==='ms'){return[util$4.vendorPrefix+'TransitionEnd','transitionend'];}return[];}();util$4._cssPropertyDict=function(){var styles=window.getComputedStyle(document.documentElement,'');var dict={};var a='A'.charCodeAt(0);var z='z'.charCodeAt(0);var upper=function upper(s){return s.substr(1).toUpperCase();};for(var i=0;i<styles.length;i++){var key=styles[i].replace(/^[-]+/,'').replace(/[-][a-z]/g,upper).replace(/^moz/,'Moz');if(a<=key.charCodeAt(0)&&z>=key.charCodeAt(0)){if(key!=='cssText'&&key!=='parentText'){dict[key]=true;}}}return dict;}();util$4.hasCssProperty=function(name){return name in util$4._cssPropertyDict;};/**
 * Vendor prefix for css property.
 */util$4.vendorPrefix=function(){var styles=window.getComputedStyle(document.documentElement,''),pre=(Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/)||styles.OLink===''&&['','o'])[1];return pre;}();util$4.forceLayoutAtOnce=function(elements,callback){this.batchImmediate(function(){elements.forEach(function(element){// force layout
element.offsetHeight;});callback();});};util$4.batchImmediate=function(){var callbacks=[];return function(callback){if(callbacks.length===0){setImmediate(function(){var concreateCallbacks=callbacks.slice(0);callbacks=[];concreateCallbacks.forEach(function(callback){callback();});});}callbacks.push(callback);};}();util$4.batchAnimationFrame=function(){var callbacks=[];var raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){setTimeout(callback,1000/60);};return function(callback){if(callbacks.length===0){raf(function(){var concreateCallbacks=callbacks.slice(0);callbacks=[];concreateCallbacks.forEach(function(callback){callback();});});}callbacks.push(callback);};}();util$4.transitionPropertyName=function(){if(util$4.hasCssProperty('transitionDuration')){return'transition';}if(util$4.hasCssProperty(util$4.vendorPrefix+'TransitionDuration')){return util$4.vendorPrefix+'Transition';}throw new Error('Invalid state');}();/**
 * @param {HTMLElement} element
 */var Animit=function Animit(element,defaults){if(!(this instanceof Animit)){return new Animit(element,defaults);}if(element instanceof HTMLElement){this.elements=[element];}else if(Object.prototype.toString.call(element)==='[object Array]'){this.elements=element;}else{throw new Error('First argument must be an array or an instance of HTMLElement.');}this.defaults=defaults;this.transitionQueue=[];this.lastStyleAttributeDict=[];};Animit.prototype={/**
   * @property {Array}
   */transitionQueue:undefined,/**
   * @property {Array}
   */elements:undefined,/**
   * @property {Object}
   */defaults:undefined,/**
   * Start animation sequence with passed animations.
   *
   * @param {Function} callback
   */play:function play(callback){if(typeof callback==='function'){this.transitionQueue.push(function(done){callback();done();});}this.startAnimation();return this;},/**
   * Most of the animations follow this default process.
   *
   * @param {from} css or options object containing css
   * @param {to} css or options object containing css
   * @param {delay} delay to wait
   */"default":function _default(from,to,delay){function step(params,duration,timing){if(params.duration!==undefined){duration=params.duration;}if(params.timing!==undefined){timing=params.timing;}return{css:params.css||params,duration:duration,timing:timing};}return this.saveStyle().queue(step(from,0,this.defaults.timing)).wait(delay===undefined?this.defaults.delay:delay).queue(step(to,this.defaults.duration,this.defaults.timing)).restoreStyle();},/**
   * Queue transition animations or other function.
   *
   * e.g. animit(elt).queue({color: 'red'})
   * e.g. animit(elt).queue({color: 'red'}, {duration: 0.4})
   * e.g. animit(elt).queue({css: {color: 'red'}, duration: 0.2})
   *
   * @param {Object|Animit.Transition|Function} transition
   * @param {Object} [options]
   */queue:function queue(transition,options){var queue=this.transitionQueue;if(transition&&options){options.css=transition;transition=new Animit.Transition(options);}if(!(transition instanceof Function||transition instanceof Animit.Transition)){if(transition.css){transition=new Animit.Transition(transition);}else{transition=new Animit.Transition({css:transition});}}if(transition instanceof Function){queue.push(transition);}else if(transition instanceof Animit.Transition){queue.push(transition.build());}else{throw new Error('Invalid arguments');}return this;},/**
   * Queue transition animations.
   *
   * @param {Float} seconds
   */wait:function wait(seconds){if(seconds>0){this.transitionQueue.push(function(done){setTimeout(done,1000*seconds);});}return this;},saveStyle:function saveStyle(){this.transitionQueue.push(function(done){this.elements.forEach(function(element,index){var css=this.lastStyleAttributeDict[index]={};for(var i=0;i<element.style.length;i++){css[element.style[i]]=element.style[element.style[i]];}}.bind(this));done();}.bind(this));return this;},/**
   * Restore element's style.
   *
   * @param {Object} [options]
   * @param {Float} [options.duration]
   * @param {String} [options.timing]
   * @param {String} [options.transition]
   */restoreStyle:function restoreStyle(options){options=options||{};var self=this;if(options.transition&&!options.duration){throw new Error('"options.duration" is required when "options.transition" is enabled.');}var transitionName=util$4.transitionPropertyName;if(options.transition||options.duration&&options.duration>0){var transitionValue=options.transition||'all '+options.duration+'s '+(options.timing||'linear');this.transitionQueue.push(function(done){var elements=this.elements;var timeoutId;var clearTransition=function clearTransition(){elements.forEach(function(element){element.style[transitionName]='';});};// add "transitionend" event handler
var removeListeners=util$4.onceOnTransitionEnd(elements[0],function(){clearTimeout(timeoutId);clearTransition();done();});// for fail safe.
timeoutId=setTimeout(function(){removeListeners();clearTransition();done();},options.duration*1000*TIMEOUT_RATIO);// transition and style settings
elements.forEach(function(element,index){var css=self.lastStyleAttributeDict[index];if(!css){throw new Error('restoreStyle(): The style is not saved. Invoke saveStyle() before.');}self.lastStyleAttributeDict[index]=undefined;var name;for(var i=0,len=element.style.length;i<len;i++){name=element.style[i];if(css[name]===undefined){css[name]='';}}element.style[transitionName]=transitionValue;Object.keys(css).forEach(function(key){if(key!==transitionName){element.style[key]=css[key];}});element.style[transitionName]=transitionValue;});});}else{this.transitionQueue.push(function(done){reset();done();});}return this;function reset(){// Clear transition animation settings.
self.elements.forEach(function(element,index){element.style[transitionName]='none';var css=self.lastStyleAttributeDict[index];if(!css){throw new Error('restoreStyle(): The style is not saved. Invoke saveStyle() before.');}self.lastStyleAttributeDict[index]=undefined;for(var i=0,name='';i<element.style.length;i++){name=element.style[i];if(typeof css[element.style[i]]==='undefined'){css[element.style[i]]='';}}Object.keys(css).forEach(function(key){element.style[key]=css[key];});});}},/**
   * Start animation sequence.
   */startAnimation:function startAnimation(){this._dequeueTransition();return this;},_dequeueTransition:function _dequeueTransition(){var transition=this.transitionQueue.shift();if(this._currentTransition){throw new Error('Current transition exists.');}this._currentTransition=transition;var self=this;var called=false;var done=function done(){if(!called){called=true;self._currentTransition=undefined;self._dequeueTransition();}else{throw new Error('Invalid state: This callback is called twice.');}};if(transition){transition.call(this,done);}}};/**
 * @param {Animit} arguments
 */Animit.runAll=function()/* arguments... */{for(var i=0;i<arguments.length;i++){arguments[i].play();}};/**
 * @param {Object} options
 * @param {Float} [options.duration]
 * @param {String} [options.property]
 * @param {String} [options.timing]
 */Animit.Transition=function(options){this.options=options||{};this.options.duration=this.options.duration||0;this.options.timing=this.options.timing||'linear';this.options.css=this.options.css||{};this.options.property=this.options.property||'all';};Animit.Transition.prototype={/**
   * @param {HTMLElement} element
   * @return {Function}
   */build:function build(){if(Object.keys(this.options.css).length===0){throw new Error('options.css is required.');}var css=createActualCssProps(this.options.css);if(this.options.duration>0){var transitionValue=util$4.buildTransitionValue(this.options);var self=this;return function(callback){var elements=this.elements;var timeout=self.options.duration*1000*TIMEOUT_RATIO;var timeoutId;var removeListeners=util$4.onceOnTransitionEnd(elements[0],function(){clearTimeout(timeoutId);callback();});timeoutId=setTimeout(function(){removeListeners();callback();},timeout);elements.forEach(function(element){element.style[util$4.transitionPropertyName]=transitionValue;Object.keys(css).forEach(function(name){element.style[name]=css[name];});});};}if(this.options.duration<=0){return function(callback){var elements=this.elements;elements.forEach(function(element){element.style[util$4.transitionPropertyName]='';Object.keys(css).forEach(function(name){element.style[name]=css[name];});});if(elements.length>0){util$4.forceLayoutAtOnce(elements,function(){util$4.batchAnimationFrame(callback);});}else{util$4.batchAnimationFrame(callback);}};}function createActualCssProps(css){var result={};Object.keys(css).forEach(function(name){var value=css[name];if(util$4.hasCssProperty(name)){result[name]=value;return;}var prefixed=util$4.vendorPrefix+util$4.capitalize(name);if(util$4.hasCssProperty(prefixed)){result[prefixed]=value;}else{result[prefixed]=value;result[name]=value;}});return result;}}};/*
 * Gesture detector library that forked from github.com/EightMedia/hammer.js.
 */var Event$1;var Utils;var Detection;var PointerEvent;/**
 * @object ons.GestureDetector
 * @category gesture
 * @description
 *   [en]Utility class for gesture detection.[/en]
 *   [ja]ジェスチャを検知するためのユーティリティクラスです。[/ja]
 */ /**
 * @method constructor
 * @signature constructor(element[, options])
 * @description
 *  [en]Create a new GestureDetector instance.[/en]
 *  [ja]GestureDetectorのインスタンスを生成します。[/ja]
 * @param {Element} element
 *   [en]Name of the event.[/en]
 *   [ja]ジェスチャを検知するDOM要素を指定します。[/ja]
 * @param {Object} [options]
 *   [en]Options object.[/en]
 *   [ja]オプションを指定します。[/ja]
 * @return {ons.GestureDetector.Instance}
 */var GestureDetector=function GestureDetector(element,options){return new GestureDetector.Instance(element,options||{});};/**
 * default settings.
 * more settings are defined per gesture at `/gestures`. Each gesture can be disabled/enabled
 * by setting it's name (like `swipe`) to false.
 * You can set the defaults for all instances by changing this object before creating an instance.
 * @example
 * ````
 *  GestureDetector.defaults.drag = false;
 *  GestureDetector.defaults.behavior.touchAction = 'pan-y';
 *  delete GestureDetector.defaults.behavior.userSelect;
 * ````
 * @property defaults
 * @type {Object}
 */GestureDetector.defaults={behavior:{// userSelect: 'none', // Also disables selection in `input` children
touchAction:'pan-y',touchCallout:'none',contentZooming:'none',userDrag:'none',tapHighlightColor:'rgba(0,0,0,0)'}};/**
 * GestureDetector document where the base events are added at
 * @property DOCUMENT
 * @type {HTMLElement}
 * @default window.document
 */GestureDetector.DOCUMENT=document;/**
 * detect support for pointer events
 * @property HAS_POINTEREVENTS
 * @type {Boolean}
 */GestureDetector.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled;/**
 * detect support for touch events
 * @property HAS_TOUCHEVENTS
 * @type {Boolean}
 */GestureDetector.HAS_TOUCHEVENTS='ontouchstart'in window;/**
 * detect mobile browsers
 * @property IS_MOBILE
 * @type {Boolean}
 */GestureDetector.IS_MOBILE=/mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent);/**
 * detect if we want to support mouseevents at all
 * @property NO_MOUSEEVENTS
 * @type {Boolean}
 */GestureDetector.NO_MOUSEEVENTS=GestureDetector.HAS_TOUCHEVENTS&&GestureDetector.IS_MOBILE||GestureDetector.HAS_POINTEREVENTS;/**
 * interval in which GestureDetector recalculates current velocity/direction/angle in ms
 * @property CALCULATE_INTERVAL
 * @type {Number}
 * @default 25
 */GestureDetector.CALCULATE_INTERVAL=25;/**
 * eventtypes per touchevent (start, move, end) are filled by `Event.determineEventTypes` on `setup`
 * the object contains the DOM event names per type (`EVENT_START`, `EVENT_MOVE`, `EVENT_END`)
 * @property EVENT_TYPES
 * @private
 * @writeOnce
 * @type {Object}
 */var EVENT_TYPES={};/**
 * direction strings, for safe comparisons
 * @property DIRECTION_DOWN|LEFT|UP|RIGHT
 * @final
 * @type {String}
 * @default 'down' 'left' 'up' 'right'
 */var DIRECTION_DOWN=GestureDetector.DIRECTION_DOWN='down';var DIRECTION_LEFT=GestureDetector.DIRECTION_LEFT='left';var DIRECTION_UP=GestureDetector.DIRECTION_UP='up';var DIRECTION_RIGHT=GestureDetector.DIRECTION_RIGHT='right';/**
 * pointertype strings, for safe comparisons
 * @property POINTER_MOUSE|TOUCH|PEN
 * @final
 * @type {String}
 * @default 'mouse' 'touch' 'pen'
 */var POINTER_MOUSE=GestureDetector.POINTER_MOUSE='mouse';var POINTER_TOUCH=GestureDetector.POINTER_TOUCH='touch';var POINTER_PEN=GestureDetector.POINTER_PEN='pen';/**
 * eventtypes
 * @property EVENT_START|MOVE|END|RELEASE|TOUCH
 * @final
 * @type {String}
 * @default 'start' 'change' 'move' 'end' 'release' 'touch'
 */var EVENT_START=GestureDetector.EVENT_START='start';var EVENT_MOVE=GestureDetector.EVENT_MOVE='move';var EVENT_END=GestureDetector.EVENT_END='end';var EVENT_RELEASE=GestureDetector.EVENT_RELEASE='release';var EVENT_TOUCH=GestureDetector.EVENT_TOUCH='touch';/**
 * if the window events are set...
 * @property READY
 * @writeOnce
 * @type {Boolean}
 * @default false
 */GestureDetector.READY=false;/**
 * plugins namespace
 * @property plugins
 * @type {Object}
 */GestureDetector.plugins=GestureDetector.plugins||{};/**
 * gestures namespace
 * see `/gestures` for the definitions
 * @property gestures
 * @type {Object}
 */GestureDetector.gestures=GestureDetector.gestures||{};/**
 * setup events to detect gestures on the document
 * this function is called when creating an new instance
 * @private
 */function setup$1(opts){if(GestureDetector.READY){return;}// find what eventtypes we add listeners to
Event$1.determineEventTypes();// Register all gestures inside GestureDetector.gestures
Utils.each(GestureDetector.gestures,function(gesture){Detection.register(gesture);});// Add touch events on the document
Event$1.onTouch(GestureDetector.DOCUMENT,EVENT_MOVE,Detection.detect,opts);Event$1.onTouch(GestureDetector.DOCUMENT,EVENT_END,Detection.detect,opts);// GestureDetector is ready...!
GestureDetector.READY=true;}/**
 * @module GestureDetector
 *
 * @class Utils
 * @static
 */Utils=GestureDetector.utils={/**
   * extend method, could also be used for cloning when `dest` is an empty object.
   * changes the dest object
   * @param {Object} dest
   * @param {Object} src
   * @param {Boolean} [merge=false]  do a merge
   * @return {Object} dest
   */extend:function extend(dest,src,merge){for(var key in src){if(src.hasOwnProperty(key)&&(dest[key]===undefined||!merge)){dest[key]=src[key];}}return dest;},/**
   * simple addEventListener wrapper
   * @param {HTMLElement} element
   * @param {String} type
   * @param {Function} handler
   */on:function on(element,type,handler,opt){util$1.addEventListener(element,type,handler,opt,true);},/**
   * simple removeEventListener wrapper
   * @param {HTMLElement} element
   * @param {String} type
   * @param {Function} handler
   */off:function off(element,type,handler,opt){util$1.removeEventListener(element,type,handler,opt,true);},/**
   * forEach over arrays and objects
   * @param {Object|Array} obj
   * @param {Function} iterator
   * @param {any} iterator.item
   * @param {Number} iterator.index
   * @param {Object|Array} iterator.obj the source object
   * @param {Object} context value to use as `this` in the iterator
   */each:function each(obj,iterator,context){var i,len;// native forEach on arrays
if('forEach'in obj){obj.forEach(iterator,context);// arrays
}else if(obj.length!==undefined){for(i=0,len=obj.length;i<len;i++){if(iterator.call(context,obj[i],i,obj)===false){return;}}// objects
}else{for(i in obj){if(obj.hasOwnProperty(i)&&iterator.call(context,obj[i],i,obj)===false){return;}}}},/**
   * find if a string contains the string using indexOf
   * @param {String} src
   * @param {String} find
   * @return {Boolean} found
   */inStr:function inStr(src,find){return src.indexOf(find)>-1;},/**
   * find if a array contains the object using indexOf or a simple polyfill
   * @param {String} src
   * @param {String} find
   * @return {Boolean|Number} false when not found, or the index
   */inArray:function inArray(src,find,deep){if(deep){for(var i=0,len=src.length;i<len;i++){// Array.findIndex
if(Object.keys(find).every(function(key){return src[i][key]===find[key];})){return i;}}return-1;}if(src.indexOf){return src.indexOf(find);}else{for(var i=0,len=src.length;i<len;i++){if(src[i]===find){return i;}}return-1;}},/**
   * convert an array-like object (`arguments`, `touchlist`) to an array
   * @param {Object} obj
   * @return {Array}
   */toArray:function toArray(obj){return Array.prototype.slice.call(obj,0);},/**
   * find if a node is in the given parent
   * @param {HTMLElement} node
   * @param {HTMLElement} parent
   * @return {Boolean} found
   */hasParent:function hasParent(node,parent){while(node){if(node==parent){return true;}node=node.parentNode;}return false;},/**
   * get the center of all the touches
   * @param {Array} touches
   * @return {Object} center contains `pageX`, `pageY`, `clientX` and `clientY` properties
   */getCenter:function getCenter(touches){var pageX=[],pageY=[],clientX=[],clientY=[],min=Math.min,max=Math.max;// no need to loop when only one touch
if(touches.length===1){return{pageX:touches[0].pageX,pageY:touches[0].pageY,clientX:touches[0].clientX,clientY:touches[0].clientY};}Utils.each(touches,function(touch){pageX.push(touch.pageX);pageY.push(touch.pageY);clientX.push(touch.clientX);clientY.push(touch.clientY);});return{pageX:(min.apply(Math,pageX)+max.apply(Math,pageX))/2,pageY:(min.apply(Math,pageY)+max.apply(Math,pageY))/2,clientX:(min.apply(Math,clientX)+max.apply(Math,clientX))/2,clientY:(min.apply(Math,clientY)+max.apply(Math,clientY))/2};},/**
   * calculate the velocity between two points. unit is in px per ms.
   * @param {Number} deltaTime
   * @param {Number} deltaX
   * @param {Number} deltaY
   * @return {Object} velocity `x` and `y`
   */getVelocity:function getVelocity(deltaTime,deltaX,deltaY){return{x:Math.abs(deltaX/deltaTime)||0,y:Math.abs(deltaY/deltaTime)||0};},/**
   * calculate the angle between two coordinates
   * @param {Touch} touch1
   * @param {Touch} touch2
   * @return {Number} angle
   */getAngle:function getAngle(touch1,touch2){var x=touch2.clientX-touch1.clientX,y=touch2.clientY-touch1.clientY;return Math.atan2(y,x)*180/Math.PI;},/**
   * do a small comparison to get the direction between two touches.
   * @param {Touch} touch1
   * @param {Touch} touch2
   * @return {String} direction matches `DIRECTION_LEFT|RIGHT|UP|DOWN`
   */getDirection:function getDirection(touch1,touch2){var x=Math.abs(touch1.clientX-touch2.clientX),y=Math.abs(touch1.clientY-touch2.clientY);if(x>=y){return touch1.clientX-touch2.clientX>0?DIRECTION_LEFT:DIRECTION_RIGHT;}return touch1.clientY-touch2.clientY>0?DIRECTION_UP:DIRECTION_DOWN;},/**
   * calculate the distance between two touches
   * @param {Touch}touch1
   * @param {Touch} touch2
   * @return {Number} distance
   */getDistance:function getDistance(touch1,touch2){var x=touch2.clientX-touch1.clientX,y=touch2.clientY-touch1.clientY;return Math.sqrt(x*x+y*y);},/**
   * calculate the scale factor between two touchLists
   * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
   * @param {Array} start array of touches
   * @param {Array} end array of touches
   * @return {Number} scale
   */getScale:function getScale(start,end){// need two fingers...
if(start.length>=2&&end.length>=2){return this.getDistance(end[0],end[1])/this.getDistance(start[0],start[1]);}return 1;},/**
   * calculate the rotation degrees between two touchLists
   * @param {Array} start array of touches
   * @param {Array} end array of touches
   * @return {Number} rotation
   */getRotation:function getRotation(start,end){// need two fingers
if(start.length>=2&&end.length>=2){return this.getAngle(end[1],end[0])-this.getAngle(start[1],start[0]);}return 0;},/**
   * find out if the direction is vertical   *
   * @param {String} direction matches `DIRECTION_UP|DOWN`
   * @return {Boolean} is_vertical
   */isVertical:function isVertical(direction){return direction==DIRECTION_UP||direction==DIRECTION_DOWN;},/**
   * set css properties with their prefixes
   * @param {HTMLElement} element
   * @param {String} prop
   * @param {String} value
   * @param {Boolean} [toggle=true]
   * @return {Boolean}
   */setPrefixedCss:function setPrefixedCss(element,prop,value,toggle){var prefixes=['','Webkit','Moz','O','ms'];prop=Utils.toCamelCase(prop);for(var i=0;i<prefixes.length;i++){var p=prop;// prefixes
if(prefixes[i]){p=prefixes[i]+p.slice(0,1).toUpperCase()+p.slice(1);}// test the style
if(p in element.style){element.style[p]=(toggle===null||toggle)&&value||'';break;}}},/**
   * toggle browser default behavior by setting css properties.
   * `userSelect='none'` also sets `element.onselectstart` to false
   * `userDrag='none'` also sets `element.ondragstart` to false
   *
   * @param {HtmlElement} element
   * @param {Object} props
   * @param {Boolean} [toggle=true]
   */toggleBehavior:function toggleBehavior(element,props,toggle){if(!props||!element||!element.style){return;}// set the css properties
Utils.each(props,function(value,prop){Utils.setPrefixedCss(element,prop,value,toggle);});var falseFn=toggle&&function(){return false;};// also the disable onselectstart
if(props.userSelect=='none'){element.onselectstart=falseFn;}// and disable ondragstart
if(props.userDrag=='none'){element.ondragstart=falseFn;}},/**
   * convert a string with underscores to camelCase
   * so prevent_default becomes preventDefault
   * @param {String} str
   * @return {String} camelCaseStr
   */toCamelCase:function toCamelCase(str){return str.replace(/[_-]([a-z])/g,function(s){return s[1].toUpperCase();});}};/**
 * @module GestureDetector
 */ /**
 * @class Event
 * @static
 */Event$1=GestureDetector.event={/**
   * when touch events have been fired, this is true
   * this is used to stop mouse events
   * @property prevent_mouseevents
   * @private
   * @type {Boolean}
   */preventMouseEvents:false,/**
   * if EVENT_START has been fired
   * @property started
   * @private
   * @type {Boolean}
   */started:false,/**
   * when the mouse is hold down, this is true
   * @property should_detect
   * @private
   * @type {Boolean}
   */shouldDetect:false,/**
   * simple event binder with a hook and support for multiple types
   * @param {HTMLElement} element
   * @param {String} type
   * @param {Function} handler
   * @param {Object} [opt]
   * @param {Function} [hook]
   * @param {Object} hook.type
   */on:function on(element,type,handler,opt,hook){var types=type.split(' ');Utils.each(types,function(type){Utils.on(element,type,handler,opt);hook&&hook(type);});},/**
   * simple event unbinder with a hook and support for multiple types
   * @param {HTMLElement} element
   * @param {String} type
   * @param {Function} handler
   * @param {Object} [opt]
   * @param {Function} [hook]
   * @param {Object} hook.type
   */off:function off(element,type,handler,opt,hook){var types=type.split(' ');Utils.each(types,function(type){Utils.off(element,type,handler,opt);hook&&hook(type);});},/**
   * the core touch event handler.
   * this finds out if we should to detect gestures
   * @param {HTMLElement} element
   * @param {String} eventType matches `EVENT_START|MOVE|END`
   * @param {Function} handler
   * @return onTouchHandler {Function} the core event handler
   */onTouch:function onTouch(element,eventType,handler,opt){var self=this;var onTouchHandler=function onTouchHandler(ev){var srcType=ev.type.toLowerCase(),isPointer=GestureDetector.HAS_POINTEREVENTS,isMouse=Utils.inStr(srcType,'mouse'),triggerType;// if we are in a mouseevent, but there has been a touchevent triggered in this session
// we want to do nothing. simply break out of the event.
if(isMouse&&self.preventMouseEvents){return;// mousebutton must be down
}else if(isMouse&&eventType==EVENT_START&&ev.button===0){self.preventMouseEvents=false;self.shouldDetect=true;}else if(isPointer&&eventType==EVENT_START){self.shouldDetect=ev.buttons===1||PointerEvent.matchType(POINTER_TOUCH,ev);// just a valid start event, but no mouse
}else if(!isMouse&&eventType==EVENT_START){self.preventMouseEvents=true;self.shouldDetect=true;}// update the pointer event before entering the detection
if(isPointer&&eventType!=EVENT_END){PointerEvent.updatePointer(eventType,ev);}// we are in a touch/down state, so allowed detection of gestures
if(self.shouldDetect){triggerType=self.doDetect.call(self,ev,eventType,element,handler);}// ...and we are done with the detection
// so reset everything to start each detection totally fresh
if(triggerType==EVENT_END){self.preventMouseEvents=false;self.shouldDetect=false;PointerEvent.reset();// update the pointerevent object after the detection
}if(isPointer&&eventType==EVENT_END){PointerEvent.updatePointer(eventType,ev);}};this.on(element,EVENT_TYPES[eventType],onTouchHandler,opt);return onTouchHandler;},/**
   * the core detection method
   * this finds out what GestureDetector-touch-events to trigger
   * @param {Object} ev
   * @param {String} eventType matches `EVENT_START|MOVE|END`
   * @param {HTMLElement} element
   * @param {Function} handler
   * @return {String} triggerType matches `EVENT_START|MOVE|END`
   */doDetect:function doDetect(ev,eventType,element,handler){var touchList=this.getTouchList(ev,eventType);var touchListLength=touchList.length;var triggerType=eventType;var triggerChange=touchList.trigger;// used by fakeMultitouch plugin
var changedLength=touchListLength;// at each touchstart-like event we want also want to trigger a TOUCH event...
if(eventType==EVENT_START){triggerChange=EVENT_TOUCH;// ...the same for a touchend-like event
}else if(eventType==EVENT_END){triggerChange=EVENT_RELEASE;// keep track of how many touches have been removed
changedLength=touchList.length-(ev.changedTouches?ev.changedTouches.length:1);}// after there are still touches on the screen,
// we just want to trigger a MOVE event. so change the START or END to a MOVE
// but only after detection has been started, the first time we actually want a START
if(changedLength>0&&this.started){triggerType=EVENT_MOVE;}// detection has been started, we keep track of this, see above
this.started=true;// generate some event data, some basic information
var evData=this.collectEventData(element,triggerType,touchList,ev);// trigger the triggerType event before the change (TOUCH, RELEASE) events
// but the END event should be at last
if(eventType!=EVENT_END){handler.call(Detection,evData);}// trigger a change (TOUCH, RELEASE) event, this means the length of the touches changed
if(triggerChange){evData.changedLength=changedLength;evData.eventType=triggerChange;handler.call(Detection,evData);evData.eventType=triggerType;delete evData.changedLength;}// trigger the END event
if(triggerType==EVENT_END){handler.call(Detection,evData);// ...and we are done with the detection
// so reset everything to start each detection totally fresh
this.started=false;}return triggerType;},/**
   * we have different events for each device/browser
   * determine what we need and set them in the EVENT_TYPES constant
   * the `onTouch` method is bind to these properties.
   * @return {Object} events
   */determineEventTypes:function determineEventTypes(){var types;if(GestureDetector.HAS_POINTEREVENTS){if(window.PointerEvent){types=['pointerdown','pointermove','pointerup pointercancel lostpointercapture'];}else{types=['MSPointerDown','MSPointerMove','MSPointerUp MSPointerCancel MSLostPointerCapture'];}}else if(GestureDetector.NO_MOUSEEVENTS){types=['touchstart','touchmove','touchend touchcancel'];}else{types=['touchstart mousedown','touchmove mousemove','touchend touchcancel mouseup'];}EVENT_TYPES[EVENT_START]=types[0];EVENT_TYPES[EVENT_MOVE]=types[1];EVENT_TYPES[EVENT_END]=types[2];return EVENT_TYPES;},/**
   * create touchList depending on the event
   * @param {Object} ev
   * @param {String} eventType
   * @return {Array} touches
   */getTouchList:function getTouchList(ev,eventType){// get the fake pointerEvent touchlist
if(GestureDetector.HAS_POINTEREVENTS){return PointerEvent.getTouchList();}// get the touchlist
if(ev.touches){if(eventType==EVENT_MOVE){return ev.touches;}var identifiers=[];var concat=[].concat(Utils.toArray(ev.touches),Utils.toArray(ev.changedTouches));var touchList=[];Utils.each(concat,function(touch){if(Utils.inArray(identifiers,touch.identifier)===-1){touchList.push(touch);}identifiers.push(touch.identifier);});return touchList;}// make fake touchList from mouse position
ev.identifier=1;return[ev];},/**
   * collect basic event data
   * @param {HTMLElement} element
   * @param {String} eventType matches `EVENT_START|MOVE|END`
   * @param {Array} touches
   * @param {Object} ev
   * @return {Object} ev
   */collectEventData:function collectEventData(element,eventType,touches,ev){// find out pointerType
var pointerType=POINTER_TOUCH;if(Utils.inStr(ev.type,'mouse')||PointerEvent.matchType(POINTER_MOUSE,ev)){pointerType=POINTER_MOUSE;}else if(PointerEvent.matchType(POINTER_PEN,ev)){pointerType=POINTER_PEN;}return{center:Utils.getCenter(touches),timeStamp:Date.now(),target:ev.target,touches:touches,eventType:eventType,pointerType:pointerType,srcEvent:ev,/**
       * prevent the browser default actions
       * mostly used to disable scrolling of the browser
       */preventDefault:function preventDefault(){var srcEvent=this.srcEvent;srcEvent.preventManipulation&&srcEvent.preventManipulation();srcEvent.preventDefault&&srcEvent.preventDefault();},/**
       * stop bubbling the event up to its parents
       */stopPropagation:function stopPropagation(){this.srcEvent.stopPropagation();},/**
       * immediately stop gesture detection
       * might be useful after a swipe was detected
       * @return {*}
       */stopDetect:function stopDetect(){return Detection.stopDetect();}};}};/**
 * @module GestureDetector
 *
 * @class PointerEvent
 * @static
 */PointerEvent=GestureDetector.PointerEvent={/**
   * holds all pointers, by `identifier`
   * @property pointers
   * @type {Object}
   */pointers:{},/**
   * get the pointers as an array
   * @return {Array} touchlist
   */getTouchList:function getTouchList(){var touchlist=[];// we can use forEach since pointerEvents only is in IE10
Utils.each(this.pointers,function(pointer){touchlist.push(pointer);});return touchlist;},/**
   * update the position of a pointer
   * @param {String} eventType matches `EVENT_START|MOVE|END`
   * @param {Object} pointerEvent
   */updatePointer:function updatePointer(eventType,pointerEvent){if(eventType==EVENT_END||eventType!=EVENT_END&&pointerEvent.buttons!==1){delete this.pointers[pointerEvent.pointerId];}else{pointerEvent.identifier=pointerEvent.pointerId;this.pointers[pointerEvent.pointerId]=pointerEvent;}},/**
   * check if ev matches pointertype
   * @param {String} pointerType matches `POINTER_MOUSE|TOUCH|PEN`
   * @param {PointerEvent} ev
   */matchType:function matchType(pointerType,ev){if(!ev.pointerType){return false;}var pt=ev.pointerType,types={};types[POINTER_MOUSE]=pt===(ev.MSPOINTER_TYPE_MOUSE||POINTER_MOUSE);types[POINTER_TOUCH]=pt===(ev.MSPOINTER_TYPE_TOUCH||POINTER_TOUCH);types[POINTER_PEN]=pt===(ev.MSPOINTER_TYPE_PEN||POINTER_PEN);return types[pointerType];},/**
   * reset the stored pointers
   */reset:function resetList(){this.pointers={};}};/**
 * @module GestureDetector
 *
 * @class Detection
 * @static
 */Detection=GestureDetector.detection={// contains all registered GestureDetector.gestures in the correct order
gestures:[],// data of the current GestureDetector.gesture detection session
current:null,// the previous GestureDetector.gesture session data
// is a full clone of the previous gesture.current object
previous:null,// when this becomes true, no gestures are fired
stopped:false,/**
   * start GestureDetector.gesture detection
   * @param {GestureDetector.Instance} inst
   * @param {Object} eventData
   */startDetect:function startDetect(inst,eventData){// already busy with a GestureDetector.gesture detection on an element
if(this.current){return;}this.stopped=false;// holds current session
this.current={inst:inst,// reference to GestureDetectorInstance we're working for
startEvent:Utils.extend({},eventData),// start eventData for distances, timing etc
lastEvent:false,// last eventData
lastCalcEvent:false,// last eventData for calculations.
futureCalcEvent:false,// last eventData for calculations.
lastCalcData:{},// last lastCalcData
name:''// current gesture we're in/detected, can be 'tap', 'hold' etc
};this.detect(eventData);},/**
   * GestureDetector.gesture detection
   * @param {Object} eventData
   * @return {any}
   */detect:function detect(eventData){if(!this.current||this.stopped){return;}// extend event data with calculations about scale, distance etc
eventData=this.extendEventData(eventData);// GestureDetector instance and instance options
var inst=this.current.inst,instOptions=inst.options;// call GestureDetector.gesture handlers
Utils.each(this.gestures,function triggerGesture(gesture){// only when the instance options have enabled this gesture
if(!this.stopped&&inst.enabled&&instOptions[gesture.name]){gesture.handler.call(gesture,eventData,inst);}},this);// store as previous event event
if(this.current){this.current.lastEvent=eventData;}if(eventData.eventType==EVENT_END){this.stopDetect();}return eventData;// eslint-disable-line consistent-return
},/**
   * clear the GestureDetector.gesture vars
   * this is called on endDetect, but can also be used when a final GestureDetector.gesture has been detected
   * to stop other GestureDetector.gestures from being fired
   */stopDetect:function stopDetect(){// clone current data to the store as the previous gesture
// used for the double tap gesture, since this is an other gesture detect session
this.previous=Utils.extend({},this.current);// reset the current
this.current=null;this.stopped=true;},/**
   * calculate velocity, angle and direction
   * @param {Object} ev
   * @param {Object} center
   * @param {Number} deltaTime
   * @param {Number} deltaX
   * @param {Number} deltaY
   */getCalculatedData:function getCalculatedData(ev,center,deltaTime,deltaX,deltaY){var cur=this.current,recalc=false,calcEv=cur.lastCalcEvent,calcData=cur.lastCalcData;if(calcEv&&ev.timeStamp-calcEv.timeStamp>GestureDetector.CALCULATE_INTERVAL){center=calcEv.center;deltaTime=ev.timeStamp-calcEv.timeStamp;deltaX=ev.center.clientX-calcEv.center.clientX;deltaY=ev.center.clientY-calcEv.center.clientY;recalc=true;}if(ev.eventType==EVENT_TOUCH||ev.eventType==EVENT_RELEASE){cur.futureCalcEvent=ev;}if(!cur.lastCalcEvent||recalc){calcData.velocity=Utils.getVelocity(deltaTime,deltaX,deltaY);calcData.angle=Utils.getAngle(center,ev.center);calcData.direction=Utils.getDirection(center,ev.center);cur.lastCalcEvent=cur.futureCalcEvent||ev;cur.futureCalcEvent=ev;}ev.velocityX=calcData.velocity.x;ev.velocityY=calcData.velocity.y;ev.interimAngle=calcData.angle;ev.interimDirection=calcData.direction;},/**
   * extend eventData for GestureDetector.gestures
   * @param {Object} ev
   * @return {Object} ev
   */extendEventData:function extendEventData(ev){var cur=this.current,startEv=cur.startEvent,lastEv=cur.lastEvent||startEv;// update the start touchlist to calculate the scale/rotation
if(ev.eventType==EVENT_TOUCH||ev.eventType==EVENT_RELEASE){startEv.touches=[];Utils.each(ev.touches,function(touch){startEv.touches.push({clientX:touch.clientX,clientY:touch.clientY});});}var deltaTime=ev.timeStamp-startEv.timeStamp,deltaX=ev.center.clientX-startEv.center.clientX,deltaY=ev.center.clientY-startEv.center.clientY;this.getCalculatedData(ev,lastEv.center,deltaTime,deltaX,deltaY);Utils.extend(ev,{startEvent:startEv,deltaTime:deltaTime,deltaX:deltaX,deltaY:deltaY,distance:Utils.getDistance(startEv.center,ev.center),angle:Utils.getAngle(startEv.center,ev.center),direction:Utils.getDirection(startEv.center,ev.center),scale:Utils.getScale(startEv.touches,ev.touches),rotation:Utils.getRotation(startEv.touches,ev.touches)});return ev;},/**
   * register new gesture
   * @param {Object} gesture object, see `gestures/` for documentation
   * @return {Array} gestures
   */register:function register(gesture){// add an enable gesture options if there is no given
var options=gesture.defaults||{};if(options[gesture.name]===undefined){options[gesture.name]=true;}// extend GestureDetector default options with the GestureDetector.gesture options
Utils.extend(GestureDetector.defaults,options,true);// set its index
gesture.index=gesture.index||1000;// add GestureDetector.gesture to the list
this.gestures.push(gesture);// sort the list by index
this.gestures.sort(function(a,b){if(a.index<b.index){return-1;}if(a.index>b.index){return 1;}return 0;});return this.gestures;}};/**
 * @module GestureDetector
 */ /**
 * create new GestureDetector instance
 * all methods should return the instance itself, so it is chainable.
 *
 * @class Instance
 * @constructor
 * @param {HTMLElement} element
 * @param {Object} [options={}] options are merged with `GestureDetector.defaults`
 * @return {GestureDetector.Instance}
 */GestureDetector.Instance=function(element,options){var self=this;var listenerOptions=options&&options.passive?{passive:true}:undefined;// setup GestureDetectorJS window events and register all gestures
// this also sets up the default options
setup$1(listenerOptions);/**
   * @property element
   * @type {HTMLElement}
   */this.element=element;/**
   * @property enabled
   * @type {Boolean}
   * @protected
   */this.enabled=true;/**
   * options, merged with the defaults
   * options with an _ are converted to camelCase
   * @property options
   * @type {Object}
   */Utils.each(options,function(value,name){delete options[name];options[Utils.toCamelCase(name)]=value;});this.options=Utils.extend(Utils.extend({},GestureDetector.defaults),options||{});this.options.listenerOptions=listenerOptions;// add some css to the element to prevent the browser from doing its native behavior
if(this.options.behavior){Utils.toggleBehavior(this.element,this.options.behavior,true);}/**
   * event start handler on the element to start the detection
   * @property eventStartHandler
   * @type {Object}
   */this.eventStartHandler=Event$1.onTouch(element,EVENT_START,function(ev){if(self.enabled&&ev.eventType==EVENT_START){Detection.startDetect(self,ev);}else if(ev.eventType==EVENT_TOUCH){Detection.detect(ev);}},listenerOptions);/**
   * keep a list of user event handlers which needs to be removed when calling 'dispose'
   * @property eventHandlers
   * @type {Array}
   */this.eventHandlers=[];};GestureDetector.Instance.prototype={/**
   * @method on
   * @signature on(gestures, handler)
   * @description
   *  [en]Adds an event handler for a gesture. Available gestures are: drag, dragleft, dragright, dragup, dragdown, hold, release, swipe, swipeleft, swiperight, swipeup, swipedown, tap, doubletap, touch, transform, pinch, pinchin, pinchout and rotate. [/en]
   *  [ja]ジェスチャに対するイベントハンドラを追加します。指定できるジェスチャ名は、drag dragleft dragright dragup dragdown hold release swipe swipeleft swiperight swipeup swipedown tap doubletap touch transform pinch pinchin pinchout rotate です。[/ja]
   * @param {String} gestures
   *   [en]A space separated list of gestures.[/en]
   *   [ja]検知するジェスチャ名を指定します。スペースで複数指定することができます。[/ja]
   * @param {Function} handler
   *   [en]An event handling function.[/en]
   *   [ja]イベントハンドラとなる関数オブジェクトを指定します。[/ja]
   */on:function onEvent(gestures,handler,opt){var self=this;Event$1.on(self.element,gestures,handler,util$1.extend({},self.options.listenerOptions,opt),function(type){self.eventHandlers.push({gesture:type,handler:handler});});return self;},/**
   * @method off
   * @signature off(gestures, handler)
   * @description
   *  [en]Remove an event listener.[/en]
   *  [ja]イベントリスナーを削除します。[/ja]
   * @param {String} gestures
   *   [en]A space separated list of gestures.[/en]
   *   [ja]ジェスチャ名を指定します。スペースで複数指定することができます。[/ja]
   * @param {Function} handler
   *   [en]An event handling function.[/en]
   *   [ja]イベントハンドラとなる関数オブジェクトを指定します。[/ja]
   */off:function offEvent(gestures,handler,opt){var self=this;Event$1.off(self.element,gestures,handler,util$1.extend({},self.options.listenerOptions,opt),function(type){var index=Utils.inArray(self.eventHandlers,{gesture:type,handler:handler},true);if(index>=0){self.eventHandlers.splice(index,1);}});return self;},/**
   * trigger gesture event
   * @method trigger
   * @signature trigger(gesture, eventData)
   * @param {String} gesture
   * @param {Object} [eventData]
   */trigger:function triggerEvent(gesture,eventData){// optional
if(!eventData){eventData={};}// create DOM event
var event=GestureDetector.DOCUMENT.createEvent('Event');event.initEvent(gesture,true,true);event.gesture=eventData;// trigger on the target if it is in the instance element,
// this is for event delegation tricks
var element=this.element;if(Utils.hasParent(eventData.target,element)){element=eventData.target;}element.dispatchEvent(event);return this;},/**
   * @method enable
   * @signature enable(state)
   * @description
   *  [en]Enable or disable gesture detection.[/en]
   *  [ja]ジェスチャ検知を有効化/無効化します。[/ja]
   * @param {Boolean} state
   *   [en]Specify if it should be enabled or not.[/en]
   *   [ja]有効にするかどうかを指定します。[/ja]
   */enable:function enable(state){this.enabled=state;return this;},/**
   * @method dispose
   * @signature dispose()
   * @description
   *  [en]Remove and destroy all event handlers for this instance.[/en]
   *  [ja]このインスタンスでのジェスチャの検知や、イベントハンドラを全て解除して廃棄します。[/ja]
   */dispose:function dispose(){var i,eh;// undo all changes made by stop_browser_behavior
Utils.toggleBehavior(this.element,this.options.behavior,false);// unbind all custom event handlers
for(i=-1;eh=this.eventHandlers[++i];){// eslint-disable-line no-cond-assign
Utils.off(this.element,eh.gesture,eh.handler);}this.eventHandlers=[];// unbind the start event listener
Event$1.off(this.element,EVENT_TYPES[EVENT_START],this.eventStartHandler);return null;}};/**
 * @module gestures
 */ /**
 * Move with x fingers (default 1) around on the page.
 * Preventing the default browser behavior is a good way to improve feel and working.
 * ````
 *  GestureDetectortime.on("drag", function(ev) {
 *    console.log(ev);
 *    ev.gesture.preventDefault();
 *  });
 * ````
 *
 * @class Drag
 * @static
 */ /**
 * @event drag
 * @param {Object} ev
 */ /**
 * @event dragstart
 * @param {Object} ev
 */ /**
 * @event dragend
 * @param {Object} ev
 */ /**
 * @event drapleft
 * @param {Object} ev
 */ /**
 * @event dragright
 * @param {Object} ev
 */ /**
 * @event dragup
 * @param {Object} ev
 */ /**
 * @event dragdown
 * @param {Object} ev
 */ /**
 * @param {String} name
 */(function(name){var triggered=false;function dragGesture(ev,inst){var cur=Detection.current;// max touches
if(inst.options.dragMaxTouches>0&&ev.touches.length>inst.options.dragMaxTouches){return;}switch(ev.eventType){case EVENT_START:triggered=false;break;case EVENT_MOVE:// when the distance we moved is too small we skip this gesture
// or we can be already in dragging
if(ev.distance<inst.options.dragMinDistance&&cur.name!=name){return;}var startCenter=cur.startEvent.center;// we are dragging!
if(cur.name!=name){cur.name=name;if(inst.options.dragDistanceCorrection&&ev.distance>0){// When a drag is triggered, set the event center to dragMinDistance pixels from the original event center.
// Without this correction, the dragged distance would jumpstart at dragMinDistance pixels instead of at 0.
// It might be useful to save the original start point somewhere
var factor=Math.abs(inst.options.dragMinDistance/ev.distance);startCenter.pageX+=ev.deltaX*factor;startCenter.pageY+=ev.deltaY*factor;startCenter.clientX+=ev.deltaX*factor;startCenter.clientY+=ev.deltaY*factor;// recalculate event data using new start point
ev=Detection.extendEventData(ev);}}// lock drag to axis?
if(cur.lastEvent.dragLockToAxis||inst.options.dragLockToAxis&&inst.options.dragLockMinDistance<=ev.distance){ev.dragLockToAxis=true;}// keep direction on the axis that the drag gesture started on
var lastDirection=cur.lastEvent.direction;if(ev.dragLockToAxis&&lastDirection!==ev.direction){if(Utils.isVertical(lastDirection)){ev.direction=ev.deltaY<0?DIRECTION_UP:DIRECTION_DOWN;}else{ev.direction=ev.deltaX<0?DIRECTION_LEFT:DIRECTION_RIGHT;}}// first time, trigger dragstart event
if(!triggered){inst.trigger(name+'start',ev);triggered=true;}// trigger events
inst.trigger(name,ev);inst.trigger(name+ev.direction,ev);var isVertical=Utils.isVertical(ev.direction);// block the browser events
if(inst.options.dragBlockVertical&&isVertical||inst.options.dragBlockHorizontal&&!isVertical){ev.preventDefault();}break;case EVENT_RELEASE:if(triggered&&ev.changedLength<=inst.options.dragMaxTouches){inst.trigger(name+'end',ev);triggered=false;}break;case EVENT_END:triggered=false;break;}}GestureDetector.gestures.Drag={name:name,index:50,handler:dragGesture,defaults:{/**
       * minimal movement that have to be made before the drag event gets triggered
       * @property dragMinDistance
       * @type {Number}
       * @default 10
       */dragMinDistance:10,/**
       * Set dragDistanceCorrection to true to make the starting point of the drag
       * be calculated from where the drag was triggered, not from where the touch started.
       * Useful to avoid a jerk-starting drag, which can make fine-adjustments
       * through dragging difficult, and be visually unappealing.
       * @property dragDistanceCorrection
       * @type {Boolean}
       * @default true
       */dragDistanceCorrection:true,/**
       * set 0 for unlimited, but this can conflict with transform
       * @property dragMaxTouches
       * @type {Number}
       * @default 1
       */dragMaxTouches:1,/**
       * prevent default browser behavior when dragging occurs
       * be careful with it, it makes the element a blocking element
       * when you are using the drag gesture, it is a good practice to set this true
       * @property dragBlockHorizontal
       * @type {Boolean}
       * @default false
       */dragBlockHorizontal:false,/**
       * same as `dragBlockHorizontal`, but for vertical movement
       * @property dragBlockVertical
       * @type {Boolean}
       * @default false
       */dragBlockVertical:false,/**
       * dragLockToAxis keeps the drag gesture on the axis that it started on,
       * It disallows vertical directions if the initial direction was horizontal, and vice versa.
       * @property dragLockToAxis
       * @type {Boolean}
       * @default false
       */dragLockToAxis:false,/**
       * drag lock only kicks in when distance > dragLockMinDistance
       * This way, locking occurs only when the distance has become large enough to reliably determine the direction
       * @property dragLockMinDistance
       * @type {Number}
       * @default 25
       */dragLockMinDistance:25}};})('drag');/**
 * @module gestures
 */ /**
 * trigger a simple gesture event, so you can do anything in your handler.
 * only usable if you know what your doing...
 *
 * @class Gesture
 * @static
 */ /**
 * @event gesture
 * @param {Object} ev
 */GestureDetector.gestures.Gesture={name:'gesture',index:1337,handler:function releaseGesture(ev,inst){inst.trigger(this.name,ev);}};/**
 * @module gestures
 */ /**
 * Touch stays at the same place for x time
 *
 * @class Hold
 * @static
 */ /**
 * @event hold
 * @param {Object} ev
 */ /**
 * @param {String} name
 */(function(name){var timer;function holdGesture(ev,inst){var options=inst.options,current=Detection.current;switch(ev.eventType){case EVENT_START:clearTimeout(timer);// set the gesture so we can check in the timeout if it still is
current.name=name;// set timer and if after the timeout it still is hold,
// we trigger the hold event
timer=setTimeout(function(){if(current&&current.name==name){inst.trigger(name,ev);}},options.holdTimeout);break;case EVENT_MOVE:if(ev.distance>options.holdThreshold){clearTimeout(timer);}break;case EVENT_RELEASE:clearTimeout(timer);break;}}GestureDetector.gestures.Hold={name:name,index:10,defaults:{/**
       * @property holdTimeout
       * @type {Number}
       * @default 500
       */holdTimeout:500,/**
       * movement allowed while holding
       * @property holdThreshold
       * @type {Number}
       * @default 2
       */holdThreshold:2},handler:holdGesture};})('hold');/**
 * @module gestures
 */ /**
 * when a touch is being released from the page
 *
 * @class Release
 * @static
 */ /**
 * @event release
 * @param {Object} ev
 */GestureDetector.gestures.Release={name:'release',index:Infinity,handler:function releaseGesture(ev,inst){if(ev.eventType==EVENT_RELEASE){inst.trigger(this.name,ev);}}};/**
 * @module gestures
 */ /**
 * triggers swipe events when the end velocity is above the threshold
 * for best usage, set `preventDefault` (on the drag gesture) to `true`
 * ````
 *  GestureDetectortime.on("dragleft swipeleft", function(ev) {
 *    console.log(ev);
 *    ev.gesture.preventDefault();
 *  });
 * ````
 *
 * @class Swipe
 * @static
 */ /**
 * @event swipe
 * @param {Object} ev
 */ /**
 * @event swipeleft
 * @param {Object} ev
 */ /**
 * @event swiperight
 * @param {Object} ev
 */ /**
 * @event swipeup
 * @param {Object} ev
 */ /**
 * @event swipedown
 * @param {Object} ev
 */GestureDetector.gestures.Swipe={name:'swipe',index:40,defaults:{/**
     * @property swipeMinTouches
     * @type {Number}
     * @default 1
     */swipeMinTouches:1,/**
     * @property swipeMaxTouches
     * @type {Number}
     * @default 1
     */swipeMaxTouches:1,/**
     * horizontal swipe velocity
     * @property swipeVelocityX
     * @type {Number}
     * @default 0.6
     */swipeVelocityX:0.6,/**
     * vertical swipe velocity
     * @property swipeVelocityY
     * @type {Number}
     * @default 0.6
     */swipeVelocityY:0.6},handler:function swipeGesture(ev,inst){if(ev.eventType==EVENT_RELEASE){var touches=ev.touches.length,options=inst.options;// max touches
if(touches<options.swipeMinTouches||touches>options.swipeMaxTouches){return;}// when the distance we moved is too small we skip this gesture
// or we can be already in dragging
if(ev.velocityX>options.swipeVelocityX||ev.velocityY>options.swipeVelocityY){// trigger swipe events
inst.trigger(this.name,ev);inst.trigger(this.name+ev.direction,ev);}}}};/**
 * @module gestures
 */ /**
 * Single tap and a double tap on a place
 *
 * @class Tap
 * @static
 */ /**
 * @event tap
 * @param {Object} ev
 */ /**
 * @event doubletap
 * @param {Object} ev
 */ /**
 * @param {String} name
 */(function(name){var hasMoved=false;function tapGesture(ev,inst){var options=inst.options,current=Detection.current,prev=Detection.previous,sincePrev,didDoubleTap;switch(ev.eventType){case EVENT_START:hasMoved=false;break;case EVENT_MOVE:hasMoved=hasMoved||ev.distance>options.tapMaxDistance;break;case EVENT_END:if(!Utils.inStr(ev.srcEvent.type,'cancel')&&ev.deltaTime<options.tapMaxTime&&!hasMoved){// previous gesture, for the double tap since these are two different gesture detections
sincePrev=prev&&prev.lastEvent&&ev.timeStamp-prev.lastEvent.timeStamp;didDoubleTap=false;// check if double tap
if(prev&&prev.name==name&&sincePrev&&sincePrev<options.doubleTapInterval&&ev.distance<options.doubleTapDistance){inst.trigger('doubletap',ev);didDoubleTap=true;}// do a single tap
if(!didDoubleTap||options.tapAlways){current.name=name;inst.trigger(current.name,ev);}}break;}}GestureDetector.gestures.Tap={name:name,index:100,handler:tapGesture,defaults:{/**
       * max time of a tap, this is for the slow tappers
       * @property tapMaxTime
       * @type {Number}
       * @default 250
       */tapMaxTime:250,/**
       * max distance of movement of a tap, this is for the slow tappers
       * @property tapMaxDistance
       * @type {Number}
       * @default 10
       */tapMaxDistance:10,/**
       * always trigger the `tap` event, even while double-tapping
       * @property tapAlways
       * @type {Boolean}
       * @default true
       */tapAlways:true,/**
       * max distance between two taps
       * @property doubleTapDistance
       * @type {Number}
       * @default 20
       */doubleTapDistance:20,/**
       * max time between two taps
       * @property doubleTapInterval
       * @type {Number}
       * @default 300
       */doubleTapInterval:300}};})('tap');/**
 * @module gestures
 */ /**
 * when a touch is being touched at the page
 *
 * @class Touch
 * @static
 */ /**
 * @event touch
 * @param {Object} ev
 */GestureDetector.gestures.Touch={name:'touch',index:-Infinity,defaults:{/**
     * call preventDefault at touchstart, and makes the element blocking by disabling the scrolling of the page,
     * but it improves gestures like transforming and dragging.
     * be careful with using this, it can be very annoying for users to be stuck on the page
     * @property preventDefault
     * @type {Boolean}
     * @default false
     */preventDefault:false,/**
     * disable mouse events, so only touch (or pen!) input triggers events
     * @property preventMouse
     * @type {Boolean}
     * @default false
     */preventMouse:false},handler:function touchGesture(ev,inst){if(inst.options.preventMouse&&ev.pointerType==POINTER_MOUSE){ev.stopDetect();return;}if(inst.options.preventDefault){ev.preventDefault();}if(ev.eventType==EVENT_TOUCH){inst.trigger('touch',ev);}}};/**
 * @module gestures
 */ /**
 * User want to scale or rotate with 2 fingers
 * Preventing the default browser behavior is a good way to improve feel and working. This can be done with the
 * `preventDefault` option.
 *
 * @class Transform
 * @static
 */ /**
 * @event transform
 * @param {Object} ev
 */ /**
 * @event transformstart
 * @param {Object} ev
 */ /**
 * @event transformend
 * @param {Object} ev
 */ /**
 * @event pinchin
 * @param {Object} ev
 */ /**
 * @event pinchout
 * @param {Object} ev
 */ /**
 * @event rotate
 * @param {Object} ev
 */ /**
 * @param {String} name
 */(function(name){var triggered=false;function transformGesture(ev,inst){switch(ev.eventType){case EVENT_START:triggered=false;break;case EVENT_MOVE:// at least multitouch
if(ev.touches.length<2){return;}var scaleThreshold=Math.abs(1-ev.scale);var rotationThreshold=Math.abs(ev.rotation);// when the distance we moved is too small we skip this gesture
// or we can be already in dragging
if(scaleThreshold<inst.options.transformMinScale&&rotationThreshold<inst.options.transformMinRotation){return;}// we are transforming!
Detection.current.name=name;// first time, trigger dragstart event
if(!triggered){inst.trigger(name+'start',ev);triggered=true;}inst.trigger(name,ev);// basic transform event
// trigger rotate event
if(rotationThreshold>inst.options.transformMinRotation){inst.trigger('rotate',ev);}// trigger pinch event
if(scaleThreshold>inst.options.transformMinScale){inst.trigger('pinch',ev);inst.trigger('pinch'+(ev.scale<1?'in':'out'),ev);}break;case EVENT_RELEASE:if(triggered&&ev.changedLength<2){inst.trigger(name+'end',ev);triggered=false;}break;}}GestureDetector.gestures.Transform={name:name,index:45,defaults:{/**
       * minimal scale factor, no scale is 1, zoomin is to 0 and zoomout until higher then 1
       * @property transformMinScale
       * @type {Number}
       * @default 0.01
       */transformMinScale:0.01,/**
       * rotation in degrees
       * @property transformMinRotation
       * @type {Number}
       * @default 1
       */transformMinRotation:1},handler:transformGesture};})('transform');/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var readyMap=void 0;var queueMap=void 0;function isContentReady(element){if(element.childNodes.length>0){setContentReady(element);}return readyMap.has(element);}function setContentReady(element){readyMap.set(element,true);}function addCallback(element,fn){if(!queueMap.has(element)){queueMap.set(element,[]);}queueMap.get(element).push(fn);}function consumeQueue(element){var callbacks=queueMap.get(element,[])||[];queueMap["delete"](element);callbacks.forEach(function(callback){return callback();});}function contentReady(element){var fn=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){};if(readyMap===undefined){readyMap=new WeakMap();queueMap=new WeakMap();}addCallback(element,fn);if(isContentReady(element)){consumeQueue(element);return;}var observer=new MutationObserver(function(changes){setContentReady(element);consumeQueue(element);});observer.observe(element,{childList:true,characterData:true});// failback for elements has empty content.
setImmediate(function(){setContentReady(element);consumeQueue(element);});}/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var ToastQueue=function(){function ToastQueue(){classCallCheck(this,ToastQueue);this.queue=[];}createClass(ToastQueue,[{key:"add",value:function add(fn,promise){var _this=this;this.queue.push(fn);if(this.queue.length===1){setImmediate(this.queue[0]);}promise.then(function(){_this.queue.shift();if(_this.queue.length>0){setTimeout(_this.queue[0],1000/30);// Apply some visual delay
}});}}]);return ToastQueue;}();var ToastQueue$1=new ToastQueue();/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var _setAttributes=function _setAttributes(element,options){['id','class','animation'].forEach(function(a){return options.hasOwnProperty(a)&&element.setAttribute(a,options[a]);});if(options.modifier){util$1.addModifier(element,options.modifier);}};var _normalizeArguments=function _normalizeArguments(message){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var defaults$$1=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};options=_extends({},options);typeof message==='string'?options.message=message:options=message;if(!options||!options.message&&!options.messageHTML){util$1["throw"]('Notifications must contain a message');}if(options.hasOwnProperty('buttonLabels')||options.hasOwnProperty('buttonLabel')){options.buttonLabels=options.buttonLabels||options.buttonLabel;if(!Array.isArray(options.buttonLabels)){options.buttonLabels=[options.buttonLabels||''];}}return util$1.extend({compile:function compile(param){return param;},callback:function callback(param){return param;},animation:'default',cancelable:false,primaryButtonIndex:(options.buttonLabels||defaults$$1.buttonLabels||[]).length-1},defaults$$1,options);};/**
 * @object ons.notification
 * @category dialog
 * @tutorial vanilla/Reference/notification
 * @description
 *   [en]
 *     Utility methods to create different kinds of notifications. There are three methods available:
 *
 *     * `ons.notification.alert()`
 *     * `ons.notification.confirm()`
 *     * `ons.notification.prompt()`
 *     * `ons.notification.toast()`
 *
 *     It will automatically display a Material Design dialog on Android devices.
 *   [/en]
 *   [ja]いくつかの種類のアラートダイアログを作成するためのユーティリティメソッドを収めたオブジェクトです。[/ja]
 * @example
 * ons.notification.alert('Hello, world!');
 *
 * ons.notification.confirm('Are you ready?')
 *   .then(
 *     function(answer) {
 *       if (answer === 1) {
 *         ons.notification.alert('Let\'s go!');
 *       }
 *     }
 *   );
 *
 * ons.notification.prompt('How old are ?')
 *   .then(
 *     function(age) {
 *       ons.notification.alert('You are ' + age + ' years old.');
 *     }
 *   );
 */var notification={};notification._createAlertDialog=function(){for(var _len=arguments.length,params=Array(_len),_key=0;_key<_len;_key++){params[_key]=arguments[_key];}return new Promise(function(resolve){var options=_normalizeArguments.apply(undefined,params);util$1.checkMissingImport('AlertDialog','AlertDialogButton');// Prompt input string
var inputString='';if(options.isPrompt){inputString='\n      <input\n        class="text-input text-input--underbar"\n        type="'+(options.inputType||'text')+'"\n        placeholder="'+(options.placeholder||'')+'"\n        value="'+(options.defaultValue||'')+'"\n        style="width: 100%; margin-top: 10px;"\n      />\n    ';}// Buttons string
var buttons='';options.buttonLabels.forEach(function(label,index){buttons+='\n      <ons-alert-dialog-button\n        class="\n          '+(index===options.primaryButtonIndex?' alert-dialog-button--primal':'')+'\n          '+(options.buttonLabels.length<=2?' alert-dialog-button--rowfooter':'')+'\n        "\n        style="position: relative;">\n        '+label+'\n      </ons-alert-dialog-button>\n    ';});// Dialog Element
var el={};var _destroyDialog=function _destroyDialog(){if(el.dialog.onDialogCancel){el.dialog.removeEventListener('dialog-cancel',el.dialog.onDialogCancel);}Object.keys(el).forEach(function(key){return delete el[key];});el=null;if(options.destroy instanceof Function){options.destroy();}};el.dialog=document.createElement('ons-alert-dialog');el.dialog.innerHTML='\n    <div class="alert-dialog-mask"\n      style="\n        '+(options.maskColor?'background-color: '+options.maskColor:'')+'\n      "></div>\n    <div class="alert-dialog">\n      <div class="alert-dialog-container">\n        <div class="alert-dialog-title">\n          '+(options.title||'')+'\n        </div>\n        <div class="alert-dialog-content">\n          '+(options.message||options.messageHTML)+'\n          '+inputString+'\n        </div>\n        <div class="\n          alert-dialog-footer\n          '+(options.buttonLabels.length<=2?' alert-dialog-footer--rowfooter':'')+'\n        ">\n          '+buttons+'\n        </div>\n      </div>\n    </div>\n  ';contentReady(el.dialog);// Set attributes
_setAttributes(el.dialog,options);// Prompt events
if(options.isPrompt){el.input=el.dialog.querySelector('.text-input');if(options.submitOnEnter){el.input.onkeypress=function(event){if(event.keyCode===13){el.dialog.hide().then(function(){if(el){var resolveValue=el.input.value;_destroyDialog();options.callback(resolveValue);resolve(resolveValue);}});}};}}// Button events
el.footer=el.dialog.querySelector('.alert-dialog-footer');util$1.arrayFrom(el.dialog.querySelectorAll('.alert-dialog-button')).forEach(function(buttonElement,index){buttonElement.onclick=function(){el.dialog.hide().then(function(){if(el){var resolveValue=index;if(options.isPrompt){resolveValue=index===options.primaryButtonIndex?el.input.value:null;}el.dialog.remove();_destroyDialog();options.callback(resolveValue);resolve(resolveValue);}});};el.footer.appendChild(buttonElement);});// Cancel events
if(options.cancelable){el.dialog.cancelable=true;el.dialog.onDialogCancel=function(){setImmediate(function(){el.dialog.remove();_destroyDialog();});var resolveValue=options.isPrompt?null:-1;options.callback(resolveValue);resolve(resolveValue);};el.dialog.addEventListener('dialog-cancel',el.dialog.onDialogCancel,false);}// Show dialog
document.body.appendChild(el.dialog);options.compile(el.dialog);setImmediate(function(){el.dialog.show().then(function(){if(el.input&&options.isPrompt&&options.autofocus){var strLength=el.input.value.length;el.input.focus();if(el.input.type&&['text','search','url','tel','password'].includes(el.input.type)){el.input.setSelectionRange(strLength,strLength);}}});});});};/**
 * @method alert
 * @signature alert(message [, options] | options)
 * @return {Promise}
 *   [en]Will resolve to the index of the button that was pressed or `-1` when canceled.[/en]
 *   [ja][/ja]
 * @param {String} message
 *   [en]Notification message. This argument is optional but if it's not defined either `options.message` or `options.messageHTML` must be defined instead.[/en]
 *   [ja][/ja]
 * @param {Object} options
 *   [en]Parameter object.[/en]
 *   [ja]オプションを指定するオブジェクトです。[/ja]
 * @param {String} [options.message]
 *   [en]Notification message.[/en]
 *   [ja]アラートダイアログに表示する文字列を指定します。[/ja]
 * @param {String} [options.messageHTML]
 *   [en]Notification message in HTML.[/en]
 *   [ja]アラートダイアログに表示するHTMLを指定します。[/ja]
 * @param {String | Array} [options.buttonLabels]
 *   [en]Labels for the buttons. Default is `"OK"`.[/en]
 *   [ja]確認ボタンのラベルを指定します。"OK"がデフォルトです。[/ja]
 * @param {Number} [options.primaryButtonIndex]
 *   [en]Index of primary button. Default is the last one.[/en]
 *   [ja]プライマリボタンのインデックスを指定します。デフォルトは 0 です。[/ja]
 * @param {Boolean} [options.cancelable]
 *   [en]Whether the dialog is cancelable or not. Default is `false`. If the dialog is cancelable it can be closed by clicking the background or pressing the Android back button.[/en]
 *   [ja]ダイアログがキャンセル可能かどうかを指定します。[/ja]
 * @param {String} [options.animation]
 *   [en]Animation name. Available animations are `none` and `fade`. Default is `fade`.[/en]
 *   [ja]アラートダイアログを表示する際のアニメーション名を指定します。"none", "fade"のいずれかを指定できます。[/ja]
 * @param {String} [options.id]
 *   [en]The `<ons-alert-dialog>` element's ID.[/en]
 *   [ja]ons-alert-dialog要素のID。[/ja]
 * @param {String} [options.class]
 *   [en]The `<ons-alert-dialog>` element's class.[/en]
 *   [ja]ons-alert-dialog要素のclass。[/ja]
 * @param {String} [options.title]
 *   [en]Dialog title. Default is `"Alert"`.[/en]
 *   [ja]アラートダイアログの上部に表示するタイトルを指定します。"Alert"がデフォルトです。[/ja]
 * @param {String} [options.modifier]
 *   [en]Modifier for the dialog.[/en]
 *   [ja]アラートダイアログのmodifier属性の値を指定します。[/ja]
 * @param {String} [options.maskColor]
 *   [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)" ("rgba(0, 0, 0, 0.3)" for Material).[/en]
 *   [ja]背景のマスクの色を指定します。"rgba(0, 0, 0, 0.2)"がデフォルト値です。[/ja]
 * @param {Function} [options.callback]
 *   [en]Function that executes after dialog has been closed.[/en]
 *   [ja]アラートダイアログが閉じられた時に呼び出される関数オブジェクトを指定します。[/ja]
 * @description
 *   [en]
 *     Display an alert dialog to show the user a message.
 *
 *     The content of the message can be either simple text or HTML.
 *
 *     It can be called in the following ways:
 *
 *     ```
 *     ons.notification.alert(message, options);
 *     ons.notification.alert(options);
 *     ```
 *
 *     Must specify either `message` or `messageHTML`.
 *   [/en]
 *   [ja]
 *     ユーザーへメッセージを見せるためのアラートダイアログを表示します。
 *     表示するメッセージは、テキストかもしくはHTMLを指定できます。
 *     このメソッドの引数には、options.messageもしくはoptions.messageHTMLのどちらかを必ず指定する必要があります。
 *   [/ja]
 */notification.alert=function(message,options){return notification._createAlertDialog(message,options,{buttonLabels:['OK'],title:'Alert'});};/**
 * @method confirm
 * @signature confirm(message [, options] | options)
 * @return {Promise}
 *   [en]Will resolve to the index of the button that was pressed or `-1` when canceled.[/en]
 *   [ja][/ja]
 * @param {String} message
 *   [en]Notification message. This argument is optional but if it's not defined either `options.message` or `options.messageHTML` must be defined instead.[/en]
 *   [ja][/ja]
 * @param {Object} options
 *   [en]Parameter object.[/en]
 * @param {Array} [options.buttonLabels]
 *   [en]Labels for the buttons. Default is `["Cancel", "OK"]`.[/en]
 *   [ja]ボタンのラベルの配列を指定します。["Cancel", "OK"]がデフォルトです。[/ja]
 * @param {Number} [options.primaryButtonIndex]
 *   [en]Index of primary button. Default is the last one.[/en]
 *   [ja]プライマリボタンのインデックスを指定します。デフォルトは 1 です。[/ja]
 * @description
 *   [en]
 *     Display a dialog to ask the user for confirmation. Extends `alert()` parameters.
 *     The default button labels are `"Cancel"` and `"OK"` but they can be customized.
 *
 *     It can be called in the following ways:
 *
 *     ```
 *     ons.notification.confirm(message, options);
 *     ons.notification.confirm(options);
 *     ```
 *
 *     Must specify either `message` or `messageHTML`.
 *   [/en]
 *   [ja]
 *     ユーザに確認を促すダイアログを表示します。
 *     デオルとのボタンラベルは、"Cancel"と"OK"ですが、これはこのメソッドの引数でカスタマイズできます。
 *     このメソッドの引数には、options.messageもしくはoptions.messageHTMLのどちらかを必ず指定する必要があります。
 *   [/ja]
 */notification.confirm=function(message,options){return notification._createAlertDialog(message,options,{buttonLabels:['Cancel','OK'],title:'Confirm'});};/**
 * @method prompt
 * @signature prompt(message [, options] | options)
 * @param {String} message
 *   [en]Notification message. This argument is optional but if it's not defined either `options.message` or `options.messageHTML` must be defined instead.[/en]
 *   [ja][/ja]
 * @return {Promise}
 *   [en]Will resolve to the input value when the dialog is closed or `null` when canceled.[/en]
 *   [ja][/ja]
 * @param {Object} options
 *   [en]Parameter object.[/en]
 *   [ja]オプションを指定するオブジェクトです。[/ja]
 * @param {String | Array} [options.buttonLabels]
 *   [en]Labels for the buttons. Default is `"OK"`.[/en]
 *   [ja]確認ボタンのラベルを指定します。"OK"がデフォルトです。[/ja]
 * @param {Number} [options.primaryButtonIndex]
 *   [en]Index of primary button. Default is the last one.[/en]
 *   [ja]プライマリボタンのインデックスを指定します。デフォルトは 0 です。[/ja]
 * @param {String} [options.placeholder]
 *   [en]Placeholder for the text input.[/en]
 *   [ja]テキスト欄のプレースホルダに表示するテキストを指定します。[/ja]
 * @param {String} [options.defaultValue]
 *   [en]Default value for the text input.[/en]
 *   [ja]テキスト欄のデフォルトの値を指定します。[/ja]
 * @param {String} [options.inputType]
 *   [en]Type of the input element (`password`, `date`...). Default is `text`.[/en]
 *   [ja][/ja]
 * @param {Boolean} [options.autofocus]
 *   [en]Autofocus the input element. Default is `true`. In Cordova, `KeyboardDisplayRequiresUserAction` in `config.xml` must be `false` to activate this feature.[/en]
 *   [ja]input要素に自動的にフォーカスするかどうかを指定します。デフォルトはtrueです。Cordova環境では、この機能を有効にするためには `config.xml` で `KeyboardDisplayRequiresUserAction` を `false` に設定する必要があります。[/ja]
 * @param {Boolean} [options.submitOnEnter]
 *   [en]Submit automatically when enter is pressed. Default is `true`.[/en]
 *   [ja]Enterが押された際にそのformをsubmitするかどうかを指定します。デフォルトはtrueです。[/ja]
 * @description
 *   [en]
 *     Display a dialog with a prompt to ask the user a question. Extends `alert()` parameters.
 *
 *     It can be called in the following ways:
 *
 *     ```
 *     ons.notification.prompt(message, options);
 *     ons.notification.prompt(options);
 *     ```
 *
 *     Must specify either `message` or `messageHTML`.
 *   [/en]
 *   [ja]
 *     ユーザーに入力を促すダイアログを表示します。
 *     このメソッドの引数には、options.messageもしくはoptions.messageHTMLのどちらかを必ず指定する必要があります。
 *   [/ja]
 */notification.prompt=function(message,options){return notification._createAlertDialog(message,options,{buttonLabels:['OK'],title:'Alert',isPrompt:true,autofocus:true,submitOnEnter:true});};/**
 * @method toast
 * @signature toast(message [, options] | options)
 * @return {Promise}
 *   [en]Will resolve when the toast is hidden.[/en]
 *   [ja][/ja]
 * @param {String} message
 *   [en]Toast message. This argument is optional but if it's not defined then `options.message` must be defined instead.[/en]
 *   [ja][/ja]
 * @param {Object} options
 *   [en]Parameter object.[/en]
 *   [ja]オプションを指定するオブジェクトです。[/ja]
 * @param {String} [options.message]
 *   [en]Notification message.[/en]
 *   [ja]トーストに表示する文字列を指定します。[/ja]
 * @param {String} [options.buttonLabel]
 *   [en]Label for the button.[/en]
 *   [ja]確認ボタンのラベルを指定します。[/ja]
 * @param {String} [options.animation]
 *   [en]Animation name. Available animations are `none`, `fade`, `ascend`, `lift` and `fall`. Default is `ascend` for Android and `lift` for iOS.[/en]
 *   [ja]トーストを表示する際のアニメーション名を指定します。"none", "fade", "ascend", "lift", "fall"のいずれかを指定できます。[/ja]
 * @param {Number} [options.timeout]
 *   [en]Number of miliseconds where the toast is visible before hiding automatically.[/en]
 *   [ja][/ja]
 * @param {Boolean} [options.force]
 *   [en]If `true`, the toast skips the notification queue and is shown immediately. Defaults to `false`.[/en]
 *   [ja][/ja]
 * @param {String} [options.id]
 *   [en]The `<ons-toast>` element's ID.[/en]
 *   [ja]ons-toast要素のID。[/ja]
 * @param {String} [options.class]
 *   [en]The `<ons-toast>` element's class.[/en]
 *   [ja]ons-toast要素のclass。[/ja]
 * @param {String} [options.modifier]
 *   [en]Modifier for the element.[/en]
 *   [ja]トーストのmodifier属性の値を指定します。[/ja]
 * @param {Function} [options.callback]
 *   [en]Function that executes after toast has been hidden.[/en]
 *   [ja]トーストが閉じられた時に呼び出される関数オブジェクトを指定します。[/ja]
 * @description
 *   [en]
 *     Display a simple notification toast with an optional button that can be used for simple actions.
 *
 *     It can be called in the following ways:
 *
 *     ```
 *     ons.notification.toast(message, options);
 *     ons.notification.toast(options);
 *     ```
 *   [/en]
 *   [ja][/ja]
 */notification.toast=function(message,options){var promise=new Promise(function(resolve){util$1.checkMissingImport('Toast');// Throws error, must be inside promise
options=_normalizeArguments(message,options,{timeout:0,force:false});var toast=util$1.createElement('\n      <ons-toast>\n        '+options.message+'\n        '+(options.buttonLabels?'<button>'+options.buttonLabels[0]+'</button>':'')+'\n      </ons-toast>\n    ');_setAttributes(toast,options);var originalHide=toast.hide.bind(toast);var finish=function finish(value){if(toast){originalHide().then(function(){if(toast){toast.remove();toast=null;options.callback(value);resolve(value);}});}};if(options.buttonLabels){util$1.findChild(toast._toast,'button').onclick=function(){return finish(0);};}// overwrite so that ons.notification.hide resolves when toast.hide is called
toast.hide=function(){return finish(-1);};document.body.appendChild(toast);options.compile(toast);var show=function show(){toast.parentElement&&toast.show(options).then(function(){if(options.timeout){setTimeout(function(){return finish(-1);},options.timeout);}});};setImmediate(function(){return options.force?show():ToastQueue$1.add(show,promise);});});return promise;};/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ // Validate parameters
var checkOptions=function checkOptions(options){var err=function err(prop){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'Function';return util$1["throw"]('"options.'+prop+'" must be an instance of '+type);};var hasOwnProperty=function hasOwnProperty(prop){return Object.hasOwnProperty.call(options,prop);};var instanceOf=function instanceOf(prop){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:Function;return options[prop]instanceof type;};var b='buttons',cb='callback',c='compile',d='destroy';(!hasOwnProperty(b)||!instanceOf(b,Array))&&err(b,'Array');hasOwnProperty(cb)&&!instanceOf(cb)&&err(cb);hasOwnProperty(c)&&!instanceOf(c)&&err(c);hasOwnProperty(d)&&!instanceOf(d)&&err(d);};// Action Sheet
var actionSheet=function actionSheet(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return new Promise(function(resolve){util$1.checkMissingImport('ActionSheet');checkOptions(options);// Main component
var actionSheet=util$1.createElement('\n    <ons-action-sheet\n      '+(options.title?'title="'+options.title+'"':'')+'\n      '+(options.cancelable?'cancelable':'')+'\n      '+(options.modifier?'modifier="'+options.modifier+'"':'')+'\n      '+(options.maskColor?'mask-color="'+options.maskColor+'"':'')+'\n      '+(options.id?'id="'+options.id+'"':'')+'\n      '+(options["class"]?'class="'+options["class"]+'"':'')+'\n    >\n      <div class="action-sheet"></div>\n    </ons-action-sheet>\n  ');// Resolve action and clean up
var finish=function finish(event){var index=arguments.length>1&&arguments[1]!==undefined?arguments[1]:-1;if(actionSheet){options.destroy&&options.destroy(actionSheet);actionSheet.removeEventListener('dialog-cancel',finish,false);actionSheet.remove();actionSheet=null;options.callback&&options.callback(index);resolve(index);}};// Link cancel handler
actionSheet.addEventListener('dialog-cancel',finish,false);// Create buttons and link action handler
var buttons=document.createDocumentFragment();options.buttons.forEach(function(item,index){var buttonOptions=typeof item==='string'?{label:item}:_extends({},item);if(options.destructive===index){buttonOptions.modifier=(buttonOptions.modifier||'')+' destructive';}var button=util$1.createElement('\n      <ons-action-sheet-button\n        '+(buttonOptions.icon?'icon="'+buttonOptions.icon+'"':'')+'\n        '+(buttonOptions.modifier?'modifier="'+buttonOptions.modifier+'"':'')+'\n      >\n        '+buttonOptions.label+'\n      </ons-action-sheet-button>\n    ');button.onclick=function(event){return actionSheet.hide().then(function(){return finish(event,index);});};buttons.appendChild(button);});// Finish component and attach
util$1.findChild(actionSheet,'.action-sheet').appendChild(buttons);document.body.appendChild(actionSheet);options.compile&&options.compile(el.dialog);// Show
setImmediate(function(){return actionSheet.show({animation:options.animation,animationOptions:options.animationOptions});});});};/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var create$1=function create(){/**
   * @object ons.orientation
   * @category util
   * @description
   *   [en]Utility methods for orientation detection.[/en]
   *   [ja]画面のオリエンテーション検知のためのユーティリティメソッドを収めているオブジェクトです。[/ja]
   */var obj={/**
     * @event change
     * @description
     *   [en]Fired when the device orientation changes.[/en]
     *   [ja]デバイスのオリエンテーションが変化した際に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクトです。[/ja]
     * @param {Boolean} event.isPortrait
     *   [en]Will be true if the current orientation is portrait mode.[/en]
     *   [ja]現在のオリエンテーションがportraitの場合にtrueを返します。[/ja]
     */ /**
     * @method on
     * @signature on(eventName, listener)
     * @description
     *   [en]Add an event listener.[/en]
     *   [ja]イベントリスナーを追加します。[/ja]
     * @param {String} eventName
     *   [en]Name of the event.[/en]
     *   [ja]イベント名を指定します。[/ja]
     * @param {Function} listener
     *   [en]Function to execute when the event is triggered.[/en]
     *   [ja]このイベントが発火された際に呼び出される関数オブジェクトを指定します。[/ja]
     */ /**
     * @method once
     * @signature once(eventName, listener)
     * @description
     *  [en]Add an event listener that's only triggered once.[/en]
     *  [ja]一度だけ呼び出されるイベントリスナーを追加します。[/ja]
     * @param {String} eventName
     *   [en]Name of the event.[/en]
     *   [ja]イベント名を指定します。[/ja]
     * @param {Function} listener
     *   [en]Function to execute when the event is triggered.[/en]
     *   [ja]イベントが発火した際に呼び出される関数オブジェクトを指定します。[/ja]
     */ /**
     * @method off
     * @signature off(eventName, [listener])
     * @description
     *  [en]Remove an event listener. If the listener is not specified all listeners for the event type will be removed.[/en]
     *  [ja]イベントリスナーを削除します。もしイベントリスナーを指定しなかった場合には、そのイベントに紐づく全てのイベントリスナーが削除されます。[/ja]
     * @param {String} eventName
     *   [en]Name of the event.[/en]
     *   [ja]イベント名を指定します。[/ja]
     * @param {Function} listener
     *   [en]Function to execute when the event is triggered.[/en]
     *   [ja]削除するイベントリスナーを指定します。[/ja]
     */ // actual implementation to detect if whether current screen is portrait or not
_isPortrait:false,/**
     * @method isPortrait
     * @signature isPortrait()
     * @return {Boolean}
     *   [en]Will be true if the current orientation is portrait mode.[/en]
     *   [ja]オリエンテーションがportraitモードの場合にtrueになります。[/ja]
     * @description
     *   [en]Returns whether the current screen orientation is portrait or not.[/en]
     *   [ja]オリエンテーションがportraitモードかどうかを返します。[/ja]
     */isPortrait:function isPortrait(){return this._isPortrait();},/**
     * @method isLandscape
     * @signature isLandscape()
     * @return {Boolean}
     *   [en]Will be true if the current orientation is landscape mode.[/en]
     *   [ja]オリエンテーションがlandscapeモードの場合にtrueになります。[/ja]
     * @description
     *   [en]Returns whether the current screen orientation is landscape or not.[/en]
     *   [ja]オリエンテーションがlandscapeモードかどうかを返します。[/ja]
     */isLandscape:function isLandscape(){return!this.isPortrait();},_init:function _init(){document.addEventListener('DOMContentLoaded',this._onDOMContentLoaded.bind(this),false);if('orientation'in window){window.addEventListener('orientationchange',this._onOrientationChange.bind(this),false);}else{window.addEventListener('resize',this._onResize.bind(this),false);}this._isPortrait=function(){return window.innerHeight>window.innerWidth;};return this;},_onDOMContentLoaded:function _onDOMContentLoaded(){this._installIsPortraitImplementation();this.emit('change',{isPortrait:this.isPortrait()});},_installIsPortraitImplementation:function _installIsPortraitImplementation(){var isPortrait=window.innerWidth<window.innerHeight;if(!('orientation'in window)){this._isPortrait=function(){return window.innerHeight>window.innerWidth;};}else if(window.orientation%180===0){this._isPortrait=function(){return Math.abs(window.orientation%180)===0?isPortrait:!isPortrait;};}else{this._isPortrait=function(){return Math.abs(window.orientation%180)===90?isPortrait:!isPortrait;};}},_onOrientationChange:function _onOrientationChange(){var _this=this;var isPortrait=this._isPortrait();// Wait for the dimensions to change because
// of Android inconsistency.
var nIter=0;var interval=setInterval(function(){nIter++;var w=window.innerWidth;var h=window.innerHeight;if(isPortrait&&w<=h||!isPortrait&&w>=h){_this.emit('change',{isPortrait:isPortrait});clearInterval(interval);}else if(nIter===50){_this.emit('change',{isPortrait:isPortrait});clearInterval(interval);}},20);},// Run on not mobile browser.
_onResize:function _onResize(){this.emit('change',{isPortrait:this.isPortrait()});}};MicroEvent.mixin(obj);return obj;};var orientation=create$1()._init();/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @object ons.modifier
 * @category visual
 * @description
 *   [en]
 *     Utility methods to change modifier attributes of Onsen UI elements..
 *   [/en]
 *   [ja][/ja]
 * @example
 * ons.modifier.add(myOnsInputElement, 'underbar');
 * ons.modifier.toggle(myOnsToastElement, 'custom-modifier');
 *
 */var modifier={/**
   * @method add
   * @signature add(element, modifier [, modifier])
   * @description
   *   [en]Add the specified modifiers to the element if they are not already included.[/en]
   *   [ja][/ja]
   * @param {HTMLElement} element
   *   [en]Target element.[/en]
   *   [ja][/ja]
   * @param {String} modifier
   *   [en]Name of the modifier.[/en]
   *   [ja][/ja]
   */add:function add(element){for(var _len=arguments.length,modifiers=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){modifiers[_key-1]=arguments[_key];}return modifiers.forEach(function(modifier){return util$1.addModifier(element,modifier);});},/**
   * @method remove
   * @signature remove(element, modifier [, modifier])
   * @description
   *   [en]Remove the specified modifiers from the element if they are included.[/en]
   *   [ja][/ja]
   * @param {HTMLElement} element
   *   [en]Target element.[/en]
   *   [ja][/ja]
   * @param {String} modifier
   *   [en]Name of the modifier.[/en]
   *   [ja][/ja]
   */remove:function remove(element){for(var _len2=arguments.length,modifiers=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){modifiers[_key2-1]=arguments[_key2];}return modifiers.forEach(function(modifier){return util$1.removeModifier(element,modifier);});},/**
   * @method contains
   * @signature contains(element, modifier)
   * @description
   *   [en]Check whether the specified modifier is included in the element.[/en]
   *   [ja][/ja]
   * @param {HTMLElement} element
   *   [en]Target element.[/en]
   *   [ja][/ja]
   * @param {String} modifier
   *   [en]Name of the modifier.[/en]
   *   [ja][/ja]
   * @return {Boolean}
   *   [en]`true` when the specified modifier is found in the element's `modifier` attribute. `false` otherwise.[/en]
   *   [ja][/ja]
   */contains:util$1.hasModifier,/**
   * @method toggle
   * @signature toggle(element, modifier [, force])
   * @description
   *   [en]Toggle the specified modifier.[/en]
   *   [ja][/ja]
   * @param {HTMLElement} element
   *   [en]Target element.[/en]
   *   [ja][/ja]
   * @param {String} modifier
   *   [en]Name of the modifier.[/en]
   *   [ja][/ja]
   * @param {String} force
   *   [en]If it evaluates to true, add specified modifier value, and if it evaluates to false, remove it.[/en]
   *   [ja][/ja]
   */toggle:util$1.toggleModifier};/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var softwareKeyboard=new MicroEvent();softwareKeyboard._visible=false;var onShow=function onShow(){softwareKeyboard._visible=true;softwareKeyboard.emit('show');};var onHide=function onHide(){softwareKeyboard._visible=false;softwareKeyboard.emit('hide');};var bindEvents=function bindEvents(){if(typeof Keyboard!=='undefined'){// https://github.com/martinmose/cordova-keyboard/blob/95f3da3a38d8f8e1fa41fbf40145352c13535a00/README.md
Keyboard.onshow=onShow;Keyboard.onhide=onHide;softwareKeyboard.emit('init',{visible:Keyboard.isVisible});return true;}else if(typeof cordova.plugins!=='undefined'&&typeof cordova.plugins.Keyboard!=='undefined'){// https://github.com/driftyco/ionic-plugins-keyboard/blob/ca27ecf/README.md
window.addEventListener('native.keyboardshow',onShow);window.addEventListener('native.keyboardhide',onHide);softwareKeyboard.emit('init',{visible:cordova.plugins.Keyboard.isVisible});return true;}return false;};var noPluginError=function noPluginError(){util$1.warn('ons-keyboard: Cordova Keyboard plugin is not present.');};document.addEventListener('deviceready',function(){if(!bindEvents()){if(document.querySelector('[ons-keyboard-active]')||document.querySelector('[ons-keyboard-inactive]')){noPluginError();}softwareKeyboard.on=noPluginError;}});/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var generateId=function(){var i=0;return function(){return i++;};}();/**
 * Door locking system.
 *
 * @param {Object} [options]
 * @param {Function} [options.log]
 */var DoorLock=function(){function DoorLock(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};classCallCheck(this,DoorLock);this._lockList=[];this._waitList=[];this._log=options.log||function(){};}/**
   * Register a lock.
   *
   * @return {Function} Callback for unlocking.
   */createClass(DoorLock,[{key:'lock',value:function lock(){var _this=this;var unlock=function unlock(){_this._unlock(unlock);};unlock.id=generateId();this._lockList.push(unlock);this._log('lock: '+unlock.id);return unlock;}},{key:'_unlock',value:function _unlock(fn){var index=this._lockList.indexOf(fn);if(index===-1){throw new Error('This function is not registered in the lock list.');}this._lockList.splice(index,1);this._log('unlock: '+fn.id);this._tryToFreeWaitList();}},{key:'_tryToFreeWaitList',value:function _tryToFreeWaitList(){while(!this.isLocked()&&this._waitList.length>0){this._waitList.shift()();}}/**
     * Register a callback for waiting unlocked door.
     *
     * @params {Function} callback Callback on unlocking the door completely.
     */},{key:'waitUnlock',value:function waitUnlock(callback){if(!(callback instanceof Function)){throw new Error('The callback param must be a function.');}if(this.isLocked()){this._waitList.push(callback);}else{callback();}}/**
     * @return {Boolean}
     */},{key:'isLocked',value:function isLocked(){return this._lockList.length>0;}}]);return DoorLock;}();/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ // Default implementation for global PageLoader.
function loadPage(_ref,done,error){var page=_ref.page,parent=_ref.parent,_ref$params=_ref.params;internal$1.getPageHTMLAsync(page).then(function(html){var pageElement=util$1.createElement(html);parent.appendChild(pageElement);done(pageElement);})["catch"](function(e){return error(e);});}function unloadPage(element){if(element._destroy instanceof Function){element._destroy();}else{element.remove();}}var PageLoader=function(){/**
   * @param {Function} [fn] Returns an object that has "element" property and "unload" function.
   */function PageLoader(loader,unloader){classCallCheck(this,PageLoader);this._loader=loader instanceof Function?loader:loadPage;this._unloader=unloader instanceof Function?unloader:unloadPage;}/**
   * Set internal loader implementation.
   */createClass(PageLoader,[{key:'load',/**
     * @param {any} options.page
     * @param {Element} options.parent A location to load page.
     * @param {Object} [options.params] Extra parameters for ons-page.
     * @param {Function} done Take an object that has "element" property and "unload" function.
     * @param {Function} error Function called when there is an error.
     */value:function load(_ref2,done,error){var page=_ref2.page,parent=_ref2.parent,_ref2$params=_ref2.params,params=_ref2$params===undefined?{}:_ref2$params;this._loader({page:page,parent:parent,params:params},function(pageElement){if(!(pageElement instanceof Element)){throw Error('pageElement must be an instance of Element.');}done(pageElement);},error);}},{key:'unload',value:function unload(pageElement){if(!(pageElement instanceof Element)){throw Error('pageElement must be an instance of Element.');}this._unloader(pageElement);}},{key:'internalLoader',set:function set$$1(fn){if(!(fn instanceof Function)){throw Error('First parameter must be an instance of Function');}this._loader=fn;},get:function get$$1(){return this._loader;}}]);return PageLoader;}();var defaultPageLoader=new PageLoader();var instantPageLoader=new PageLoader(function(_ref3,done){var page=_ref3.page,parent=_ref3.parent,_ref3$params=_ref3.params;var element=util$1.createElement(page.trim());parent.appendChild(element);done(element);},unloadPage);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @object ons
 * @category util
 * @description
 *   [ja]Onsen UIで利用できるグローバルなオブジェクトです。[/ja]
 *   [en]A global object that's used in Onsen UI. [/en]
 */var ons$1={animit:Animit,defaultPageLoader:defaultPageLoader,elements:onsElements,GestureDetector:GestureDetector,modifier:modifier,notification:notification,orientation:orientation,pageAttributeExpression:pageAttributeExpression,PageLoader:PageLoader,platform:platform,softwareKeyboard:softwareKeyboard,_autoStyle:autoStyle,_internal:internal$1,_readyLock:new DoorLock(),_util:util$1};ons$1.platform.select((window.location.search.match(/platform=([\w-]+)/)||[])[1]);waitDeviceReady();var readyError=function readyError(after){return util$1["throw"]('This method must be called '+(after?'after':'before')+' ons.isReady() is true');};/**
 * @method isReady
 * @signature isReady()
 * @return {Boolean}
 *   [en]Will be true if Onsen UI is initialized.[/en]
 *   [ja]初期化されているかどうかを返します。[/ja]
 * @description
 *   [en]Returns true if Onsen UI is initialized.[/en]
 *   [ja]Onsen UIがすでに初期化されているかどうかを返すメソッドです。[/ja]
 */ons$1.isReady=function(){return!ons$1._readyLock.isLocked();};/**
 * @method isWebView
 * @signature isWebView()
 * @return {Boolean}
 *   [en]Will be true if the app is running in Cordova.[/en]
 *   [ja]Cordovaで実行されている場合にtrueになります。[/ja]
 * @description
 *   [en]Returns true if running inside Cordova.[/en]
 *   [ja]Cordovaで実行されているかどうかを返すメソッドです。[/ja]
 */ons$1.isWebView=ons$1.platform.isWebView;/**
 * @method ready
 * @signature ready(callback)
 * @description
 *   [ja]アプリの初期化に利用するメソッドです。渡された関数は、Onsen UIの初期化が終了している時点で必ず呼ばれます。[/ja]
 *   [en]Method used to wait for app initialization. Waits for `DOMContentLoaded` and `deviceready`, when necessary, before executing the callback.[/en]
 * @param {Function} callback
 *   [en]Function that executes after Onsen UI has been initialized.[/en]
 *   [ja]Onsen UIが初期化が完了した後に呼び出される関数オブジェクトを指定します。[/ja]
 */ons$1.ready=function(callback){if(ons$1.isReady()){callback();}else{ons$1._readyLock.waitUnlock(callback);}};/**
 * @method setDefaultDeviceBackButtonListener
 * @signature setDefaultDeviceBackButtonListener(listener)
 * @param {Function} listener
 *   [en]Function that executes when device back button is pressed. Must be called on `ons.ready`.[/en]
 *   [ja]デバイスのバックボタンが押された時に実行される関数オブジェクトを指定します。[/ja]
 * @description
 *   [en]Set default handler for device back button.[/en]
 *   [ja]デバイスのバックボタンのためのデフォルトのハンドラを設定します。[/ja]
 */ons$1.setDefaultDeviceBackButtonListener=function(listener){if(!ons$1.isReady()){readyError(true);}ons$1._defaultDeviceBackButtonHandler.setListener(listener);};/**
 * @method disableDeviceBackButtonHandler
 * @signature disableDeviceBackButtonHandler()
 * @description
 * [en]Disable device back button event handler. Must be called on `ons.ready`.[/en]
 * [ja]デバイスのバックボタンのイベントを受け付けないようにします。[/ja]
 */ons$1.disableDeviceBackButtonHandler=function(){if(!ons$1.isReady()){readyError(true);}internal$1.dbbDispatcher.disable();};/**
 * @method enableDeviceBackButtonHandler
 * @signature enableDeviceBackButtonHandler()
 * @description
 * [en]Enable device back button event handler. Must be called on `ons.ready`.[/en]
 * [ja]デバイスのバックボタンのイベントを受け付けるようにします。[/ja]
 */ons$1.enableDeviceBackButtonHandler=function(){if(!ons$1.isReady()){readyError(true);}internal$1.dbbDispatcher.enable();};ons$1.fireDeviceBackButtonEvent=function(){internal$1.dbbDispatcher.fireDeviceBackButtonEvent();};/**
 * @method enableAutoStatusBarFill
 * @signature enableAutoStatusBarFill()
 * @description
 *   [en]Enable status bar fill feature on iOS7 and above (except for iPhone X). Must be called before `ons.ready`.[/en]
 *   [ja]iOS7以上（iPhone Xは除く）で、ステータスバー部分の高さを自動的に埋める処理を有効にします。[/ja]
 */ons$1.enableAutoStatusBarFill=function(){if(ons$1.isReady()){readyError(false);}internal$1.config.autoStatusBarFill=true;};/**
 * @method disableAutoStatusBarFill
 * @signature disableAutoStatusBarFill()
 * @description
 *   [en]Disable status bar fill feature on iOS7 and above (except for iPhone X). Must be called before `ons.ready`.[/en]
 *   [ja]iOS7以上（iPhone Xは除く）で、ステータスバー部分の高さを自動的に埋める処理を無効にします。[/ja]
 */ons$1.disableAutoStatusBarFill=function(){if(ons$1.isReady()){readyError(false);}internal$1.config.autoStatusBarFill=false;};/**
 * @method mockStatusBar
 * @signature mockStatusBar()
 * @description
 *   [en]Creates a static element similar to iOS status bar. Only useful for browser testing. Must be called before `ons.ready`.[/en]
 *   [ja][/ja]
 */ons$1.mockStatusBar=function(){if(ons$1.isReady()){readyError(false);}var mock=function mock(){if(!document.body.children[0]||!document.body.children[0].classList.contains('ons-status-bar-mock')){var android=platform.isAndroid(),i=function i(_i){return'<i class="'+_i.split('-')[0]+' '+_i+'"></i>';};var left=android?i('zmdi-twitter')+' '+i('zmdi-google-play'):'No SIM '+i('fa-wifi'),center=android?'':'12:28 PM',right=android?i('zmdi-network')+' '+i('zmdi-wifi')+' '+i('zmdi-battery')+' 12:28 PM':'80% '+i('fa-battery-three-quarters');document.body.insertBefore(util$1.createElement('<div class="ons-status-bar-mock '+(android?'android':'ios')+'">'+('<div>'+left+'</div><div>'+center+'</div><div>'+right+'</div>')+'</div>'),document.body.firstChild);}};document.body?mock():internal$1.waitDOMContentLoaded(mock);};/**
 * @method disableAnimations
 * @signature disableAnimations()
 * @description
 *   [en]Disable all animations. Could be handy for testing and older devices.[/en]
 *   [ja]アニメーションを全て無効にします。テストの際に便利です。[/ja]
 */ons$1.disableAnimations=function(){internal$1.config.animationsDisabled=true;};/**
 * @method enableAnimations
 * @signature enableAnimations()
 * @description
 *   [en]Enable animations (default).[/en]
 *   [ja]アニメーションを有効にします。[/ja]
 */ons$1.enableAnimations=function(){internal$1.config.animationsDisabled=false;};ons$1._disableWarnings=function(){internal$1.config.warningsDisabled=true;};ons$1._enableWarnings=function(){internal$1.config.warningsDisabled=false;};/**
 * @method disableAutoStyling
 * @signature disableAutoStyling()
 * @description
 *   [en]Disable automatic styling.[/en]
 *   [ja][/ja]
 */ons$1.disableAutoStyling=autoStyle.disable;/**
 * @method enableAutoStyling
 * @signature enableAutoStyling()
 * @description
 *   [en]Enable automatic styling based on OS (default).[/en]
 *   [ja][/ja]
 */ons$1.enableAutoStyling=autoStyle.enable;/**
 * @method disableIconAutoPrefix
 * @signature disableIconAutoPrefix()
 * @description
 *   [en]Disable adding `fa-` prefix automatically to `ons-icon` classes. Useful when including custom icon packs.[/en]
 *   [ja][/ja]
 */ons$1.disableIconAutoPrefix=function(){util$1.checkMissingImport('Icon');onsElements.Icon.setAutoPrefix(false);};/**
 * @method forcePlatformStyling
 * @signature forcePlatformStyling(platform)
 * @description
 *   [en]Refresh styling for the given platform. Only useful for demos. Use `ons.platform.select(...)` instead for development and production.[/en]
 *   [ja][/ja]
 * @param {string} platform New platform to style the elements.
 */ons$1.forcePlatformStyling=function(newPlatform){ons$1.enableAutoStyling();ons$1.platform.select(newPlatform||'ios');ons$1._util.arrayFrom(document.querySelectorAll('*')).forEach(function(element){if(element.tagName.toLowerCase()==='ons-if'){element._platformUpdate();}else if(element.tagName.match(/^ons-/i)){autoStyle.prepare(element,true);if(element.tagName.toLowerCase()==='ons-tabbar'){element._updatePosition();}}});};/**
 * @method preload
 * @signature preload(templatePaths)
 * @param {String|Array} templatePaths
 *   [en]Set of HTML file paths containing 'ons-page' elements.[/en]
 *   [ja][/ja]
 * @return {Promise}
 *   [en]Promise that resolves when all the templates are cached.[/en]
 *   [ja][/ja]
 * @description
 *   [en]Separated files need to be requested on demand and this can slightly delay pushing new pages. This method requests and caches templates for later use.[/en]
 *   [ja][/ja]
 */ons$1.preload=function(){var templates=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];return Promise.all((templates instanceof Array?templates:[templates]).map(function(template){if(typeof template!=='string'){util$1["throw"]('Expected string arguments but got '+(typeof template==='undefined'?'undefined':_typeof(template)));}return internal$1.getTemplateHTMLAsync(template);}));};/**
 * @method createElement
 * @signature createElement(template, options)
 * @param {String} template
 *   [en]Either an HTML file path, a `<template>` id or an HTML string such as `'<div id="foo">hoge</div>'`.[/en]
 *   [ja][/ja]
 * @param {Object} [options]
 *   [en]Parameter object.[/en]
 *   [ja]オプションを指定するオブジェクト。[/ja]
 * @param {Boolean|HTMLElement} [options.append]
 *   [en]Whether or not the element should be automatically appended to the DOM.  Defaults to `false`. If `true` value is given, `document.body` will be used as the target.[/en]
 *   [ja][/ja]
 * @param {HTMLElement} [options.insertBefore]
 *   [en]Reference node that becomes the next sibling of the new node (`options.append` element).[/en]
 *   [ja][/ja]
 * @return {HTMLElement|Promise}
 *   [en]If the provided template was an inline HTML string, it returns the new element. Otherwise, it returns a promise that resolves to the new element.[/en]
 *   [ja][/ja]
 * @description
 *   [en]Create a new element from a template. Both inline HTML and external files are supported although the return value differs.[/en]
 *   [ja][/ja]
 */ons$1.createElement=function(template){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};template=template.trim();var create=function create(html){var element=ons$1._util.createElement(html);element.remove();if(options.append){var target=options.append instanceof HTMLElement?options.append:document.body;target.insertBefore(element,options.insertBefore||null);options.link instanceof Function&&options.link(element);}return element;};return template.charAt(0)==='<'?create(template):internal$1.getPageHTMLAsync(template).then(create);};/**
 * @method createPopover
 * @signature createPopover(page, [options])
 * @param {String} page
 *   [en]Page name. Can be either an HTML file or a <template> containing a <ons-dialog> component.[/en]
 *   [ja]pageのURLか、もしくは`<template>`で宣言したテンプレートのid属性の値を指定できます。[/ja]
 * @param {Object} [options]
 *   [en]Parameter object.[/en]
 *   [ja]オプションを指定するオブジェクト。[/ja]
 * @param {Object} [options.parentScope]
 *   [en]Parent scope of the dialog. Used to bind models and access scope methods from the dialog.[/en]
 *   [ja]ダイアログ内で利用する親スコープを指定します。ダイアログからモデルやスコープのメソッドにアクセスするのに使います。このパラメータはAngularJSバインディングでのみ利用できます。[/ja]
 * @return {Promise}
 *   [en]Promise object that resolves to the popover component object.[/en]
 *   [ja]ポップオーバーのコンポーネントオブジェクトを解決するPromiseオブジェクトを返します。[/ja]
 * @description
 *   [en]Create a popover instance from a template.[/en]
 *   [ja]テンプレートからポップオーバーのインスタンスを生成します。[/ja]
 */ /**
 * @method createDialog
 * @signature createDialog(page, [options])
 * @param {String} page
 *   [en]Page name. Can be either an HTML file or an `<template>` containing a <ons-dialog> component.[/en]
 *   [ja]pageのURLか、もしくは`<template>`で宣言したテンプレートのid属性の値を指定できます。[/ja]
 * @param {Object} [options]
 *   [en]Parameter object.[/en]
 *   [ja]オプションを指定するオブジェクト。[/ja]
 * @return {Promise}
 *   [en]Promise object that resolves to the dialog component object.[/en]
 *   [ja]ダイアログのコンポーネントオブジェクトを解決するPromiseオブジェクトを返します。[/ja]
 * @description
 *   [en]Create a dialog instance from a template.[/en]
 *   [ja]テンプレートからダイアログのインスタンスを生成します。[/ja]
 */ /**
 * @method createAlertDialog
 * @signature createAlertDialog(page, [options])
 * @param {String} page
 *   [en]Page name. Can be either an HTML file or an `<template>` containing a <ons-alert-dialog> component.[/en]
 *   [ja]pageのURLか、もしくは`<template>`で宣言したテンプレートのid属性の値を指定できます。[/ja]
 * @param {Object} [options]
 *   [en]Parameter object.[/en]
 *   [ja]オプションを指定するオブジェクト。[/ja]
 * @return {Promise}
 *   [en]Promise object that resolves to the alert dialog component object.[/en]
 *   [ja]ダイアログのコンポーネントオブジェクトを解決するPromiseオブジェクトを返します。[/ja]
 * @description
 *   [en]Create a alert dialog instance from a template.[/en]
 *   [ja]テンプレートからアラートダイアログのインスタンスを生成します。[/ja]
 */ons$1.createPopover=ons$1.createDialog=ons$1.createAlertDialog=function(template){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return ons$1.createElement(template,_extends({append:true},options));};/**
 * @method openActionSheet
 * @signature openActionSheet(options)
 * @description
 *   [en]Shows an instant Action Sheet and lets the user choose an action.[/en]
 *   [ja][/ja]
 * @param {Object} [options]
 *   [en]Parameter object.[/en]
 *   [ja]オプションを指定するオブジェクト。[/ja]
 * @param {Array} [options.buttons]
 *   [en]Represent each button of the action sheet following the specified order. Every item can be either a string label or an object containing `label`, `icon` and `modifier` properties.[/en]
 *   [ja][/ja]
 * @param {String} [options.title]
 *   [en]Optional title for the action sheet.[/en]
 *   [ja][/ja]
 * @param {Number} [options.destructive]
 *   [en]Optional index of the "destructive" button (only for iOS). It can be specified in the button array as well.[/en]
 *   [ja][/ja]
 * @param {Boolean} [options.cancelable]
 *   [en]Whether the action sheet can be canceled by tapping on the background mask or not.[/en]
 *   [ja][/ja]
 * @param {String} [options.modifier]
 *   [en]Modifier attribute of the action sheet. E.g. `'destructive'`.[/en]
 *   [ja][/ja]
 * @param {String} [options.maskColor]
 *   [en]Optionally change the background mask color.[/en]
 *   [ja][/ja]
 * @param {String} [options.id]
 *   [en]The element's id attribute.[/en]
 *   [ja][/ja]
 * @param {String} [options.class]
 *   [en]The element's class attribute.[/en]
 *   [ja][/ja]
 * @return {Promise}
 *   [en]Will resolve when the action sheet is closed. The resolve value is either the index of the tapped button or -1 when canceled.[/en]
 *   [ja][/ja]
 */ons$1.openActionSheet=actionSheet;/**
 * @method resolveLoadingPlaceholder
 * @signature resolveLoadingPlaceholder(page)
 * @param {String} page
 *   [en]Page name. Can be either an HTML file or a `<template>` id.[/en]
 *   [ja]pageのURLか、もしくは`<template>`で宣言したテンプレートのid属性の値を指定できます。[/ja]
 * @description
 *   [en]If no page is defined for the `ons-loading-placeholder` attribute it will wait for this method being called before loading the page.[/en]
 *   [ja]ons-loading-placeholderの属性値としてページが指定されていない場合は、ページロード前に呼ばれるons.resolveLoadingPlaceholder処理が行われるまで表示されません。[/ja]
 */ons$1.resolveLoadingPlaceholder=function(page,link){var elements=ons$1._util.arrayFrom(window.document.querySelectorAll('[ons-loading-placeholder]'));if(elements.length===0){util$1["throw"]('No ons-loading-placeholder exists');}elements.filter(function(element){return!element.getAttribute('page');}).forEach(function(element){element.setAttribute('ons-loading-placeholder',page);ons$1._resolveLoadingPlaceholder(element,page,link);});};ons$1._setupLoadingPlaceHolders=function(){ons$1.ready(function(){var elements=ons$1._util.arrayFrom(window.document.querySelectorAll('[ons-loading-placeholder]'));elements.forEach(function(element){var page=element.getAttribute('ons-loading-placeholder');if(typeof page==='string'){ons$1._resolveLoadingPlaceholder(element,page);}});});};ons$1._resolveLoadingPlaceholder=function(parent,page){var link=arguments.length>2&&arguments[2]!==undefined?arguments[2]:function(el,done){return done();};page&&ons$1.createElement(page).then(function(element){element.style.display='none';parent.appendChild(element);link(element,function(){while(parent.firstChild&&parent.firstChild!==element){parent.removeChild(parent.firstChild);}element.style.display='';});})["catch"](function(error){return Promise.reject('Unabled to resolve placeholder: '+error);});};function waitDeviceReady(){var unlockDeviceReady=ons$1._readyLock.lock();window.addEventListener('DOMContentLoaded',function(){if(ons$1.isWebView()){window.document.addEventListener('deviceready',unlockDeviceReady,false);}else{unlockDeviceReady();}},false);}/**
 * @method getScriptPage
 * @signature getScriptPage()
 * @description
 *   [en]Access the last created page from the current `script` scope. Only works inside `<script></script>` tags that are direct children of `ons-page` element. Use this to add lifecycle hooks to a page.[/en]
 *   [ja][/ja]
 * @return {HTMLElement}
 *   [en]Returns the corresponding page element.[/en]
 *   [ja][/ja]
 */var getCS='currentScript'in document?function(){return document.currentScript;}:function(){return document.scripts[document.scripts.length-1];};ons$1.getScriptPage=function(){return getCS()&&/ons-page/i.test(getCS().parentElement.tagName)&&getCS().parentElement||null;};/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/function getElementClass(){if(typeof HTMLElement!=='function'){// case of Safari
var _BaseElement=function _BaseElement(){};_BaseElement.prototype=document.createElement('div');return _BaseElement;}else{return HTMLElement;}}var BaseElement=function(_getElementClass){inherits(BaseElement,_getElementClass);function BaseElement(){classCallCheck(this,BaseElement);return possibleConstructorReturn(this,(BaseElement.__proto__||Object.getPrototypeOf(BaseElement)).call(this));}return BaseElement;}(getElementClass());/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @element ons-template
 * @category util
 * @description
 *   [en]
 *     Define a separate HTML fragment and use as a template. These templates can be loaded as pages in `<ons-navigator>`, `<ons-tabbar>` and `<ons-splitter>`. They can also be used to generate dialogs. Since Onsen UI 2.4.0, the native `<template>` element can be used instead of `<ons-template>` for better performance and features. `<ons-template>` is still supported for backward compatibility.
 *   [/en]
 *   [ja]テンプレートとして使用するためのHTMLフラグメントを定義します。この要素でHTMLを宣言すると、id属性に指定した名前をpageのURLとしてons-navigatorなどのコンポーネントから参照できます。[/ja]
 * @seealso ons-navigator
 *   [en]The `<ons-navigator>` component enables stack based navigation.[/en]
 *   [ja][/ja]
 * @seealso ons-tabbar
 *   [en]The `<ons-tabbar>` component is used to add tab navigation.[/en]
 *   [ja][/ja]
 * @seealso ons-splitter
 *   [en]The `<ons-splitter>` component can be used to create a draggable menu or column based layout.[/en]
 *   [ja][/ja]
 * @example
 * <ons-template id="foobar.html">
 *   <ons-page>
 *     Page content
 *   </ons-page>
 * </ons-template>
 *
 * <ons-navigator page="foobar.html"></ons-navigator>
 */var TemplateElement=function(_BaseElement){inherits(TemplateElement,_BaseElement);/**
   * @property template
   * @type {String}
   * @description
   *  [en]Template content. This property can not be used with AngularJS bindings.[/en]
   *  [ja][/ja]
   */function TemplateElement(){classCallCheck(this,TemplateElement);var _this=possibleConstructorReturn(this,(TemplateElement.__proto__||Object.getPrototypeOf(TemplateElement)).call(this));_this.template=_this.innerHTML;while(_this.firstChild){_this.removeChild(_this.firstChild);}return _this;}createClass(TemplateElement,[{key:'connectedCallback',value:function connectedCallback(){if(this.parentNode){// Note: this.parentNode is not set in some CE0/CE1 polyfills.
// Show warning when the ons-template is not located just under document.body
if(this.parentNode!==document.body){// if the parent is not document.body
util$1.warn('ons-template (id = '+this.getAttribute('id')+') must be located just under document.body'+(this.parentNode.outerHTML?':\n\n'+this.parentNode.outerHTML:'.'));}}var event=new CustomEvent('_templateloaded',{bubbles:true,cancelable:true});event.template=this.template;event.templateId=this.getAttribute('id');this.dispatchEvent(event);}}]);return TemplateElement;}(BaseElement);onsElements.Template=TemplateElement;customElements.define('ons-template',TemplateElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @element ons-if
 * @category conditional
 * @tutorial vanilla/Reference/if
 * @description
 *   [en]
 *     Conditionally display content depending on the platform, device orientation or both.
 *
 *     Sometimes it is useful to conditionally hide or show certain components based on platform. When running on iOS the `<ons-if>` element can be used to hide the `<ons-fab>` element.
 *   [/en]
 *   [ja][/ja]
 * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
 * @example
 * <ons-page>
 *   <ons-if orientation="landscape">
 *     Landscape view!
 *   </ons-if>
 *   <ons-if platform="android">
 *     This is Android.
 *   </ons-if>
 *   <ons-if platform="ios other">
 *     This is not Android.
 *   </ons-if>
 * </ons-page>
 */var IfElement=function(_BaseElement){inherits(IfElement,_BaseElement);/**
   * @attribute platform
   * @initonly
   * @type {string}
   * @description
   *  [en]Space-separated platform names. Possible values are `"ios"`, `"android"`, `"windows"` and `"other"`.[/en]
   *  [ja][/ja]
   */ /**
   * @attribute orientation
   * @type {string}
   * @description
   *  [en]Either `"portrait"` or `"landscape"`.[/en]
   *  [ja]portraitもしくはlandscapeを指定します[/ja]
   */function IfElement(){classCallCheck(this,IfElement);var _this=possibleConstructorReturn(this,(IfElement.__proto__||Object.getPrototypeOf(IfElement)).call(this));contentReady(_this,function(){if(platform._getSelectedPlatform()!==null){_this._platformUpdate();}else if(!_this._isAllowedPlatform()){while(_this.childNodes[0]){_this.childNodes[0].remove();}_this._platformUpdate();}});_this._onOrientationChange();return _this;}createClass(IfElement,[{key:'connectedCallback',value:function connectedCallback(){orientation.on('change',this._onOrientationChange.bind(this));}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name){if(name==='orientation'){this._onOrientationChange();}}},{key:'disconnectedCallback',value:function disconnectedCallback(){orientation.off('change',this._onOrientationChange);}},{key:'_platformUpdate',value:function _platformUpdate(){this.style.display=this._isAllowedPlatform()?'':'none';}},{key:'_isAllowedPlatform',value:function _isAllowedPlatform(){return!this.getAttribute('platform')||this.getAttribute('platform').split(/\s+/).indexOf(platform.getMobileOS())>=0;}},{key:'_onOrientationChange',value:function _onOrientationChange(){if(this.hasAttribute('orientation')&&this._isAllowedPlatform()){var conditionalOrientation=this.getAttribute('orientation').toLowerCase();var currentOrientation=orientation.isPortrait()?'portrait':'landscape';this.style.display=conditionalOrientation===currentOrientation?'':'none';}}}],[{key:'observedAttributes',get:function get$$1(){return['orientation'];}}]);return IfElement;}(BaseElement);onsElements.If=IfElement;customElements.define('ons-if',IfElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var BaseAnimator=function(){/**
   * @param {Object} options
   * @param {String} options.timing
   * @param {Number} options.duration
   * @param {Number} options.delay
   */function BaseAnimator(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};classCallCheck(this,BaseAnimator);this.timing=options.timing||'linear';this.duration=options.duration||0;this.delay=options.delay||0;this.def={timing:this.timing,duration:this.duration,delay:this.delay};}createClass(BaseAnimator,null,[{key:'extend',value:function extend(){var properties=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var extendedAnimator=this;var newAnimator=function newAnimator(){extendedAnimator.apply(this,arguments);util$1.extend(this,properties);};newAnimator.prototype=this.prototype;return newAnimator;}}]);return BaseAnimator;}();/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ // This object should not be exposed to users. Please keep this private.
var iPhoneXPatch={};iPhoneXPatch.isIPhoneXPortraitPatchActive=function(){return document.documentElement.getAttribute('onsflag-iphonex-portrait')!=null&&window.innerWidth<window.innerHeight;};iPhoneXPatch.isIPhoneXLandscapePatchActive=function(){// If width === height, treat it as landscape
return document.documentElement.getAttribute('onsflag-iphonex-landscape')!=null&&window.innerWidth>=window.innerHeight;};/**
 * Returns the safe area lengths based on the current state of the safe areas.
 */iPhoneXPatch.getSafeAreaLengths=function(){var safeAreaLengths=void 0;if(iPhoneXPatch.isIPhoneXPortraitPatchActive()){safeAreaLengths={top:44,right:0,bottom:34,left:0};}else if(iPhoneXPatch.isIPhoneXLandscapePatchActive()){safeAreaLengths={top:0,right:44,bottom:21,left:44};}else{safeAreaLengths={top:0,right:0,bottom:0,left:0};}return safeAreaLengths;};/**
 * Returns the safe area rect based on the current state of the safe areas.
 */iPhoneXPatch.getSafeAreaDOMRect=function(){var safeAreaRect=void 0;if(iPhoneXPatch.isIPhoneXPortraitPatchActive()){safeAreaRect={x:0,y:44,/* 0 + 44 (top safe area) */width:window.innerWidth,height:window.innerHeight-78/* height - 44 (top safe area) - 34 (bottom safe area) */};}else if(iPhoneXPatch.isIPhoneXLandscapePatchActive()){safeAreaRect={x:44,/* 0 + 44 (left safe area) */y:0,width:window.innerWidth-88,/* width - 44 (left safe area) - 34 (right safe area) */height:window.innerHeight-21/* height - 21 (bottom safe area) */};}else{safeAreaRect={x:0,y:0,width:window.innerWidth,height:window.innerHeight};}return _extends({},safeAreaRect,{left:safeAreaRect.x,top:safeAreaRect.y,right:safeAreaRect.x+safeAreaRect.width,bottom:safeAreaRect.y+safeAreaRect.height});};/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var ActionSheetAnimator=function(_BaseAnimator){inherits(ActionSheetAnimator,_BaseAnimator);function ActionSheetAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'linear':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.2:_ref$duration;classCallCheck(this,ActionSheetAnimator);return possibleConstructorReturn(this,(ActionSheetAnimator.__proto__||Object.getPrototypeOf(ActionSheetAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));}/**
   * @param {HTMLElement} dialog
   * @param {Function} done
   */createClass(ActionSheetAnimator,[{key:'show',value:function show(dialog,done){done();}/**
     * @param {HTMLElement} dialog
     * @param {Function} done
     */},{key:'hide',value:function hide(dialog,done){done();}}]);return ActionSheetAnimator;}(BaseAnimator);/**
 * Android style animator for Action Sheet.
 */var MDActionSheetAnimator=function(_ActionSheetAnimator){inherits(MDActionSheetAnimator,_ActionSheetAnimator);function MDActionSheetAnimator(){var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref2$timing=_ref2.timing,timing=_ref2$timing===undefined?'ease':_ref2$timing,_ref2$delay=_ref2.delay,delay=_ref2$delay===undefined?0:_ref2$delay,_ref2$duration=_ref2.duration,duration=_ref2$duration===undefined?0.4:_ref2$duration;classCallCheck(this,MDActionSheetAnimator);var _this2=possibleConstructorReturn(this,(MDActionSheetAnimator.__proto__||Object.getPrototypeOf(MDActionSheetAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));_this2.maskTiming='linear';_this2.maskDuration=0.2;return _this2;}/**
   * @param {Object} dialog
   * @param {Function} callback
   */createClass(MDActionSheetAnimator,[{key:'show',value:function show(dialog,callback){Animit.runAll(Animit(dialog._mask).queue({opacity:0}).wait(this.delay).queue({opacity:1.0},{duration:this.maskDuration,timing:this.maskTiming}),Animit(dialog._sheet,this.def)["default"]({transform:'translate3d(0, 80%, 0)',opacity:0},{transform:'translate3d(0, 0, 0)',opacity:1}).queue(function(done){callback&&callback();done();}));}/**
     * @param {Object} dialog
     * @param {Function} callback
     */},{key:'hide',value:function hide(dialog,callback){Animit.runAll(Animit(dialog._mask).queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.maskDuration,timing:this.maskTiming}),Animit(dialog._sheet,this.def)["default"]({transform:'translate3d(0, 0, 0)',opacity:1},{transform:'translate3d(0, 80%, 0)',opacity:0}).queue(function(done){callback&&callback();done();}));}}]);return MDActionSheetAnimator;}(ActionSheetAnimator);/**
 * iOS style animator for dialog.
 */var IOSActionSheetAnimator=function(_ActionSheetAnimator2){inherits(IOSActionSheetAnimator,_ActionSheetAnimator2);function IOSActionSheetAnimator(){var _ref3=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref3$timing=_ref3.timing,timing=_ref3$timing===undefined?'ease':_ref3$timing,_ref3$delay=_ref3.delay,delay=_ref3$delay===undefined?0:_ref3$delay,_ref3$duration=_ref3.duration,duration=_ref3$duration===undefined?0.3:_ref3$duration;classCallCheck(this,IOSActionSheetAnimator);var _this3=possibleConstructorReturn(this,(IOSActionSheetAnimator.__proto__||Object.getPrototypeOf(IOSActionSheetAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));_this3.maskTiming='linear';_this3.maskDuration=0.2;if(iPhoneXPatch.isIPhoneXPortraitPatchActive()){_this3.liftAmount='calc(100% + 48px)';}else if(iPhoneXPatch.isIPhoneXLandscapePatchActive()){_this3.liftAmount='calc(100% + 33px)';}else{_this3.liftAmount=document.body.clientHeight/2.0-1+'px';// avoid Forced Synchronous Layout
}return _this3;}/**
   * @param {Object} dialog
   * @param {Function} callback
   */createClass(IOSActionSheetAnimator,[{key:'show',value:function show(dialog,callback){Animit.runAll(Animit(dialog._mask).queue({opacity:0}).wait(this.delay).queue({opacity:1},{duration:this.maskDuration,timing:this.maskTiming}),Animit(dialog._sheet,this.def)["default"]({transform:'translate3d(0, '+this.liftAmount+', 0)'},{transform:'translate3d(0, 0, 0)'}).queue(function(done){callback&&callback();done();}));}/**
     * @param {Object} dialog
     * @param {Function} callback
     */},{key:'hide',value:function hide(dialog,callback){Animit.runAll(Animit(dialog._mask).queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.maskDuration,timing:this.maskTiming}),Animit(dialog._sheet,this.def)["default"]({transform:'translate3d(0, 0, 0)'},{transform:'translate3d(0, '+this.liftAmount+', 0)'}).queue(function(done){callback&&callback();done();}));}}]);return IOSActionSheetAnimator;}(ActionSheetAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var BaseDialogElement=function(_BaseElement){inherits(BaseDialogElement,_BaseElement);createClass(BaseDialogElement,[{key:'_updateAnimatorFactory',value:function _updateAnimatorFactory(){util$1.throwMember();}},{key:'_toggleStyle',value:function _toggleStyle(shouldShow){this.style.display=shouldShow?'block':'none';}},{key:'_scheme',get:function get$$1(){util$1.throwMember();}}]);function BaseDialogElement(){classCallCheck(this,BaseDialogElement);var _this=possibleConstructorReturn(this,(BaseDialogElement.__proto__||Object.getPrototypeOf(BaseDialogElement)).call(this));if(_this.constructor===BaseDialogElement){util$1.throwAbstract();}_this._visible=false;_this._doorLock=new DoorLock();_this._cancel=_this._cancel.bind(_this);_this._selfCamelName=util$1.camelize(_this.tagName.slice(4));_this._defaultDBB=function(e){return _this.cancelable?_this._cancel():e.callParentHandler();};_this._animatorFactory=_this._updateAnimatorFactory();return _this;}createClass(BaseDialogElement,[{key:'_cancel',value:function _cancel(){var _this2=this;if(this.cancelable&&!this._running){this._running=true;this.hide().then(function(){_this2._running=false;util$1.triggerElementEvent(_this2,'dialog-cancel');},function(){return _this2._running=false;});}}},{key:'show',value:function show(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return this._setVisible.apply(this,[true].concat(args));}},{key:'hide',value:function hide(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return this._setVisible.apply(this,[false].concat(args));}},{key:'toggle',value:function toggle(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}return this._setVisible.apply(this,[!this.visible].concat(args));}},{key:'_setVisible',value:function _setVisible(shouldShow){var _util$triggerElementE,_this3=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var action=shouldShow?'show':'hide';options=_extends({},options);options.animationOptions=util$1.extend(options.animationOptions||{},AnimatorFactory.parseAnimationOptionsString(this.getAttribute('animation-options')));var canceled=false;util$1.triggerElementEvent(this,'pre'+action,(_util$triggerElementE={},defineProperty(_util$triggerElementE,this._selfCamelName,this),defineProperty(_util$triggerElementE,'cancel',function cancel(){return canceled=true;}),_util$triggerElementE));if(canceled){return Promise.reject('Canceled in pre'+action+' event.');}return new Promise(function(resolve){_this3._doorLock.waitUnlock(function(){var unlock=_this3._doorLock.lock();var animator=_this3._animatorFactory.newAnimator(options);shouldShow&&_this3._toggleStyle(true,options);_this3._visible=shouldShow;util$1.iosPageScrollFix(shouldShow);contentReady(_this3,function(){animator[action](_this3,function(){!shouldShow&&_this3._toggleStyle(false,options);unlock();util$1.propagateAction(_this3,'_'+action);util$1.triggerElementEvent(_this3,'post'+action,defineProperty({},_this3._selfCamelName,_this3));// postshow posthide
if(options.callback instanceof Function){options.callback(_this3);}resolve(_this3);});});});});}},{key:'_updateMask',value:function _updateMask(){var _this4=this;contentReady(this,function(){if(_this4._mask&&_this4.getAttribute('mask-color')){_this4._mask.style.backgroundColor=_this4.getAttribute('mask-color');}});}},{key:'connectedCallback',value:function connectedCallback(){var _this5=this;if(typeof this._defaultDBB==='function'){this.onDeviceBackButton=this._defaultDBB.bind(this);}contentReady(this,function(){if(_this5._mask){_this5._mask.addEventListener('click',_this5._cancel,false);}});}},{key:'disconnectedCallback',value:function disconnectedCallback(){if(this._backButtonHandler){this._backButtonHandler.destroy();this._backButtonHandler=null;}if(this._mask){this._mask.removeEventListener('click',this._cancel,false);}}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'modifier':ModifierUtil.onModifierChanged(last,current,this,this._scheme);break;case'animation':this._animatorFactory=this._updateAnimatorFactory();break;case'mask-color':this._updateMask();break;}}},{key:'onDeviceBackButton',get:function get$$1(){return this._backButtonHandler;},set:function set$$1(callback){if(this._backButtonHandler){this._backButtonHandler.destroy();}this._backButtonHandler=deviceBackButtonDispatcher.createHandler(this,callback);}},{key:'visible',get:function get$$1(){return this._visible;}},{key:'disabled',set:function set$$1(value){return util$1.toggleAttribute(this,'disabled',value);},get:function get$$1(){return this.hasAttribute('disabled');}},{key:'cancelable',set:function set$$1(value){return util$1.toggleAttribute(this,'cancelable',value);},get:function get$$1(){return this.hasAttribute('cancelable');}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','animation','mask-color'];}},{key:'events',get:function get$$1(){return['preshow','postshow','prehide','posthide','dialog-cancel'];}}]);return BaseDialogElement;}(BaseElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var scheme={'.action-sheet':'action-sheet--*','.action-sheet-mask':'action-sheet-mask--*','.action-sheet-title':'action-sheet-title--*'};var _animatorDict={'default':function _default(){return platform.isAndroid()?MDActionSheetAnimator:IOSActionSheetAnimator;},'none':ActionSheetAnimator};/**
 * @element ons-action-sheet
 * @category dialog
 * @description
 *   [en]
 *     Action/bottom sheet that is displayed on top of current screen.
 *
 *     This element can either be attached directly to the `<body>` or dynamically created from a template using the `ons.createElement(template, { append: true })` utility function and the `<template>` tag.
 *
 *     The action sheet is useful for displaying a list of options and asking the user to make a decision. A `ons-action-sheet-button` is provided for this purpose, although it can contain any type of content.
 *
 *     It will automatically be displayed as Material Design (bottom sheet) when running on an Android device.
 *   [/en]
 *   [ja]
 *     アクションシート、もしくはボトムシートを現在のスクリーン上に表示します。
 *
 *     この要素は、`<body>`要素に直接アタッチされるか、もしくは`ons.createElement(template, { append: true })`と`<template>`タグを使ってテンプレートから動的に生成されます。
 *
 *     アクションシートは、選択肢のリストを表示してユーザーに尋ねるのに便利です。`ons-action-sheet-button`は、この要素の中に置くために提供されていますが、それ以外にも他のどのような要素を含むことができます。
 *
 *     Androidデバイスで実行されるときには、自動的にマテリアルデザイン(ボトムシート)として表示されます。
 *   [/ja]
 * @modifier material
 *   [en]Display a Material Design bottom sheet.[/en]
 *   [ja]マテリアルデザインのボトムシートを表示します。[/ja]
 * @tutorial vanilla/reference/action-sheet
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @seealso ons-popover
 *   [en]`<ons-popover>` component[/en]
 *   [ja]ons-popoverコンポーネント[/ja]
 * @seealso ons-modal
 *   [en]`<ons-modal>` component[/en]
 *   [ja]ons-modalコンポーネント[/ja]
 * @example
 * <ons-action-sheet id="sheet">
 *   <ons-action-sheet-button>Label</ons-action-sheet-button>
 *   <ons-action-sheet-button>Label</ons-action-sheet-button>
 * </ons-action-sheet>
 *
 * <script>
 *   document.getElementById('sheet').show();
 * </script>
 */var ActionSheetElement=function(_BaseDialogElement){inherits(ActionSheetElement,_BaseDialogElement);/**
   * @event preshow
   * @description
   * [en]Fired just before the action sheet is displayed.[/en]
   * [ja]ダイアログが表示される直前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.actionSheet
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Execute this function to stop the action sheet from being shown.[/en]
   *   [ja]この関数を実行すると、ダイアログの表示がキャンセルされます。[/ja]
   */ /**
   * @event postshow
   * @description
   * [en]Fired just after the action sheet is displayed.[/en]
   * [ja]ダイアログが表示された直後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.actionSheet
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */ /**
   * @event prehide
   * @description
   * [en]Fired just before the action sheet is hidden.[/en]
   * [ja]ダイアログが隠れる直前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.actionSheet
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Execute this function to stop the action sheet from being hidden.[/en]
   *   [ja]この関数を実行すると、ダイアログの非表示がキャンセルされます。[/ja]
   */ /**
   * @event posthide
   * @description
   * [en]Fired just after the action sheet is hidden.[/en]
   * [ja]ダイアログが隠れた後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.actionSheet
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */ /**
   * @attribute title
   * @type {String}
   * @description
   *  [en]Optional title of the action sheet. A new element will be created containing this string.[/en]
   *  [ja]アクションシートのタイトルを指定します。ここで指定した文字列を含む新しい要素が作成されます。[/ja]
   */ /**
   * @attribute modifier
   * @type {String}
   * @description
   *  [en]The appearance of the action sheet.[/en]
   *  [ja]ダイアログの表現を指定します。[/ja]
   */ /**
   * @attribute cancelable
   * @description
   *  [en]If this attribute is set the action sheet can be closed by tapping the background or by pressing the back button on Android devices.[/en]
   *  [ja]この属性が設定されると、アクションシートの背景やAndroidデバイスのバックボタンを推すことでアクションシートが閉じるようになります。[/ja]
   */ /**
   * @attribute disabled
   * @description
   *  [en]If this attribute is set the action sheet is disabled.[/en]
   *  [ja]この属性がある時、ダイアログはdisabled状態になります。[/ja]
   */ /**
   * @attribute animation
   * @type {String}
   * @default default
   * @description
   *  [en]The animation used when showing and hiding the action sheet. Can be either `"none"` or `"default"`.[/en]
   *  [ja]ダイアログを表示する際のアニメーション名を指定します。"none"もしくは"default"を指定できます。[/ja]
   */ /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`[/ja]
   */ /**
   * @attribute mask-color
   * @type {String}
   * @default rgba(0, 0, 0, 0.2)
   * @description
   *  [en]Color of the background mask. Default is `"rgba(0, 0, 0, 0.2)"`.[/en]
   *  [ja]背景のマスクの色を指定します。"rgba(0, 0, 0, 0.2)"がデフォルト値です。[/ja]
   */function ActionSheetElement(){classCallCheck(this,ActionSheetElement);var _this=possibleConstructorReturn(this,(ActionSheetElement.__proto__||Object.getPrototypeOf(ActionSheetElement)).call(this));contentReady(_this,function(){return _this._compile();});return _this;}createClass(ActionSheetElement,[{key:'_updateAnimatorFactory',value:function _updateAnimatorFactory(){return new AnimatorFactory({animators:_animatorDict,baseClass:ActionSheetAnimator,baseClassName:'ActionSheetAnimator',defaultAnimation:this.getAttribute('animation')});}},{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.style.display='none';this.style.zIndex=10001;/* Expected result:
       *   <ons-action-sheet>
       *     <div class="action-sheet-mask"></div>
       *     <div class="action-sheet">
       *       <div class="action-sheet-title></div>
       *       ...
       *     </div>
       *   </ons-action-sheet>
       */if(!this._sheet){var sheet=document.createElement('div');sheet.classList.add('action-sheet');while(this.firstChild){sheet.appendChild(this.firstChild);}this.appendChild(sheet);}if(!this._title&&this.hasAttribute('title')){var title=document.createElement('div');title.innerHTML=this.getAttribute('title');title.classList.add('action-sheet-title');this._sheet.insertBefore(title,this._sheet.firstChild);}if(!this._mask){var mask=document.createElement('div');mask.classList.add('action-sheet-mask');this.insertBefore(mask,this.firstChild);}this._sheet.style.zIndex=20001;this._mask.style.zIndex=20000;ModifierUtil.initModifier(this,this._scheme);}},{key:'_updateTitle',value:function _updateTitle(){if(this._title){this._title.innerHTML=this.getAttribute('title');}}/**
     * @property onDeviceBackButton
     * @type {Object}
     * @description
     *   [en]Back-button handler.[/en]
     *   [ja]バックボタンハンドラ。[/ja]
     */ /**
     * @method show
     * @signature show([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"none"` and `"slide"`.[/en]
     *   [ja]アニメーション名を指定します。"none", "slide"のいずれかを指定します。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}` [/ja]
     * @param {Function} [options.callback]
     *   [en]This function is called after the action sheet has been revealed.[/en]
     *   [ja]ダイアログが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *  [en]Show the action sheet.[/en]
     *  [ja]ダイアログを開きます。[/ja]
     * @return {Promise} Resolves to the displayed element.
     */ /**
     * @method hide
     * @signature hide([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"none"` and `"slide"`.[/en]
     *   [ja]アニメーション名を指定します。"none", "slide"のいずれかを指定できます。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`[/ja]
     * @param {Function} [options.callback]
     *   [en]This functions is called after the action sheet has been hidden.[/en]
     *   [ja]ダイアログが隠れた後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Hide the action sheet.[/en]
     *   [ja]ダイアログを閉じます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the hidden element[/en]
     *   [ja]隠れた要素を解決します。[/ja]
     */ /**
     * @property visible
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the action sheet is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */ /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the action sheet is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */ /**
     * @property cancelable
     * @type {Boolean}
     * @description
     *   [en]Whether the action sheet is cancelable or not. A cancelable action sheet can be closed by tapping the background or by pressing the back button on Android devices.[/en]
     *   [ja]アクションシートがキャンセル可能かどうかを設定します。キャンセル可能なアクションシートは、背景をタップしたりAndroidデバイスのバックボタンを推すことで閉じるようになります。[/ja]
     */},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){if(name==='title'){this._updateTitle();}else{get(ActionSheetElement.prototype.__proto__||Object.getPrototypeOf(ActionSheetElement.prototype),'attributeChangedCallback',this).call(this,name,last,current);}}/**
     * @param {String} name
     * @param {ActionSheetAnimator} Animator
     */},{key:'_scheme',get:function get$$1(){return scheme;}},{key:'_mask',get:function get$$1(){return util$1.findChild(this,'.action-sheet-mask');}},{key:'_sheet',get:function get$$1(){return util$1.findChild(this,'.action-sheet');}},{key:'_title',get:function get$$1(){return this.querySelector('.action-sheet-title');}}],[{key:'registerAnimator',value:function registerAnimator(name,Animator){if(!(Animator.prototype instanceof ActionSheetAnimator)){util$1.throwAnimator('ActionSheet');}_animatorDict[name]=Animator;}},{key:'observedAttributes',get:function get$$1(){return[].concat(toConsumableArray(get(ActionSheetElement.__proto__||Object.getPrototypeOf(ActionSheetElement),'observedAttributes',this)),['title']);}},{key:'animators',get:function get$$1(){return _animatorDict;}},{key:'ActionSheetAnimator',get:function get$$1(){return ActionSheetAnimator;}}]);return ActionSheetElement;}(BaseDialogElement);onsElements.ActionSheet=ActionSheetElement;customElements.define('ons-action-sheet',ActionSheetElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var BaseButtonElement=function(_BaseElement){inherits(BaseButtonElement,_BaseElement);createClass(BaseButtonElement,[{key:'_scheme',get:function get$$1(){util$1.throwMember();}},{key:'_defaultClassName',get:function get$$1(){util$1.throwMember();}},{key:'_rippleOpt',get:function get$$1(){return[this];}}]);function BaseButtonElement(){classCallCheck(this,BaseButtonElement);var _this=possibleConstructorReturn(this,(BaseButtonElement.__proto__||Object.getPrototypeOf(BaseButtonElement)).call(this));if(_this.constructor===BaseButtonElement){util$1.throwAbstract();}contentReady(_this,function(){return _this._compile();});return _this;}createClass(BaseButtonElement,[{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.classList.add(this._defaultClassName);if(!this._icon&&this.hasAttribute('icon')){util$1.checkMissingImport('Icon');var icon=util$1.createElement('<ons-icon icon="'+this.getAttribute('icon')+'"></ons-icon>');icon.classList.add(this._defaultClassName.replace('button','icon'));this.insertBefore(icon,this.firstChild);}this._updateRipple();ModifierUtil.initModifier(this,this._scheme);}},{key:'_updateIcon',value:function _updateIcon(){if(this._icon){this._icon.setAttribute('icon',this.getAttribute('icon'));}}},{key:'_updateRipple',value:function _updateRipple(){this._rippleOpt&&util$1.updateRipple.apply(util$1,toConsumableArray(this._rippleOpt));}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'class':util$1.restoreClass(this,this._defaultClassName,this._scheme);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,this._scheme);break;case'icon':this._updateIcon();break;case'ripple':this.classList.contains(this._defaultClassName)&&this._updateRipple();break;}}},{key:'disabled',set:function set$$1(value){return util$1.toggleAttribute(this,'disabled',value);},get:function get$$1(){return this.hasAttribute('disabled');}},{key:'_icon',get:function get$$1(){return util$1.findChild(this,'ons-icon');}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','class','icon','ripple'];}}]);return BaseButtonElement;}(BaseElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @element ons-action-sheet-button
 * @category dialog
 * @modifier destructive
 *   [en]Shows a "destructive" button (only for iOS).[/en]
 *   [ja]"destructive"なボタンを表示します(iOSでのみ有効)。[/ja]
 * @description
 *   [en]Component that represent each button of the action sheet.[/en]
 *   [ja]アクションシートに表示される各ボタンを表現するコンポーネントです。[/ja]
 * @seealso ons-action-sheet
 *   [en]The `<ons-action-sheet>` component[/en]
 *   [ja]ons-action-sheetコンポーネント[/ja]
 * @seealso ons-list-item
 *   [en]The `<ons-list-item>` component[/en]
 *   [ja]ons-list-itemコンポーネント[/ja]
 * @seealso ons-icon
 *   [en]The `<ons-icon>` component[/en]
 *   [ja]ons-iconコンポーネント[/ja]
 * @tutorial vanilla/Reference/action-sheet
 * @guide appsize.html#removing-icon-packs [en]Removing icon packs.[/en][ja][/ja]
 * @guide faq.html#how-can-i-use-custom-icon-packs [en]Adding custom icon packs.[/en][ja][/ja]
 * @modifier material
 *   [en]Display a Material Design action sheet button.[/en]
 *   [ja]マテリアルデザインのアクションシート用のボタンを表示します。[/ja]
 * @example
 * <ons-action-sheet id="sheet">
 *   <ons-action-sheet-button>Label</ons-action-sheet-button>
 *   <ons-action-sheet-button>Label</ons-action-sheet-button>
 * </ons-action-sheet>
 *
 * <script>
 *   document.getElementById('sheet').show();
 * </script>
 */var ActionSheetButtonElement=function(_BaseButtonElement){inherits(ActionSheetButtonElement,_BaseButtonElement);function ActionSheetButtonElement(){classCallCheck(this,ActionSheetButtonElement);return possibleConstructorReturn(this,(ActionSheetButtonElement.__proto__||Object.getPrototypeOf(ActionSheetButtonElement)).apply(this,arguments));}createClass(ActionSheetButtonElement,[{key:'_scheme',/**
     * @attribute icon
     * @type {String}
     * @description
     *  [en]Creates an `ons-icon` component with this string. Only visible on Android. Check [See also](#seealso) section for more information.[/en]
     *  [ja]`ons-icon`コンポーネントを悪性します。Androidでのみ表示されます。[/ja]
     */ /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the action sheet button.[/en]
     *   [ja]アクションシートボタンの見た目を設定します。[/ja]
     */get:function get$$1(){return{'':'action-sheet-button--*','.action-sheet-icon':'action-sheet-icon--*'};}},{key:'_defaultClassName',get:function get$$1(){return'action-sheet-button';}},{key:'_rippleOpt',get:function get$$1(){return undefined;}}]);return ActionSheetButtonElement;}(BaseButtonElement);onsElements.ActionSheetButton=ActionSheetButtonElement;customElements.define('ons-action-sheet-button',ActionSheetButtonElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var AlertDialogAnimator=function(_BaseAnimator){inherits(AlertDialogAnimator,_BaseAnimator);function AlertDialogAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'linear':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.2:_ref$duration;classCallCheck(this,AlertDialogAnimator);return possibleConstructorReturn(this,(AlertDialogAnimator.__proto__||Object.getPrototypeOf(AlertDialogAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));}/**
   * @param {HTMLElement} dialog
   * @param {Function} done
   */createClass(AlertDialogAnimator,[{key:'show',value:function show(dialog,done){done();}/**
     * @param {HTMLElement} dialog
     * @param {Function} done
     */},{key:'hide',value:function hide(dialog,done){done();}}]);return AlertDialogAnimator;}(BaseAnimator);/**
 * Android style animator for alert dialog.
 */var AndroidAlertDialogAnimator=function(_AlertDialogAnimator){inherits(AndroidAlertDialogAnimator,_AlertDialogAnimator);function AndroidAlertDialogAnimator(){var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref2$timing=_ref2.timing,timing=_ref2$timing===undefined?'cubic-bezier(.1, .7, .4, 1)':_ref2$timing,_ref2$duration=_ref2.duration,duration=_ref2$duration===undefined?0.2:_ref2$duration,_ref2$delay=_ref2.delay,delay=_ref2$delay===undefined?0:_ref2$delay;classCallCheck(this,AndroidAlertDialogAnimator);return possibleConstructorReturn(this,(AndroidAlertDialogAnimator.__proto__||Object.getPrototypeOf(AndroidAlertDialogAnimator)).call(this,{duration:duration,timing:timing,delay:delay}));}/**
   * @param {Object} dialog
   * @param {Function} callback
   */createClass(AndroidAlertDialogAnimator,[{key:'show',value:function show(dialog,callback){callback=callback?callback:function(){};Animit.runAll(Animit(dialog._mask,this.def)["default"]({opacity:0},{opacity:1}),Animit(dialog._dialog,this.def)["default"]({transform:'translate3d(-50%, -50%, 0) scale3d(.9, .9, 1)',opacity:0},{transform:'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',opacity:1}).queue(function(done){callback();done();}));}/**
     * @param {Object} dialog
     * @param {Function} callback
     */},{key:'hide',value:function hide(dialog,callback){callback=callback?callback:function(){};Animit.runAll(Animit(dialog._mask,this.def)["default"]({opacity:1},{opacity:0}),Animit(dialog._dialog,this.def)["default"]({transform:'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',opacity:1},{transform:'translate3d(-50%, -50%, 0) scale3d(.9, .9, 1)',opacity:0}).queue(function(done){callback();done();}));}}]);return AndroidAlertDialogAnimator;}(AlertDialogAnimator);/**
 * iOS style animator for alert dialog.
 */var IOSAlertDialogAnimator=function(_AlertDialogAnimator2){inherits(IOSAlertDialogAnimator,_AlertDialogAnimator2);function IOSAlertDialogAnimator(){var _ref3=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref3$timing=_ref3.timing,timing=_ref3$timing===undefined?'cubic-bezier(.1, .7, .4, 1)':_ref3$timing,_ref3$duration=_ref3.duration,duration=_ref3$duration===undefined?0.2:_ref3$duration,_ref3$delay=_ref3.delay,delay=_ref3$delay===undefined?0:_ref3$delay;classCallCheck(this,IOSAlertDialogAnimator);return possibleConstructorReturn(this,(IOSAlertDialogAnimator.__proto__||Object.getPrototypeOf(IOSAlertDialogAnimator)).call(this,{duration:duration,timing:timing,delay:delay}));}/*
   * @param {Object} dialog
   * @param {Function} callback
   */createClass(IOSAlertDialogAnimator,[{key:'show',value:function show(dialog,callback){callback=callback?callback:function(){};Animit.runAll(Animit(dialog._mask,this.def)["default"]({opacity:0},{opacity:1}),Animit(dialog._dialog,this.def)["default"]({transform:'translate3d(-50%, -50%, 0) scale3d(1.3, 1.3, 1)',opacity:0},{transform:'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',opacity:1}).queue(function(done){callback();done();}));}/**
     * @param {Object} dialog
     * @param {Function} callback
     */},{key:'hide',value:function hide(dialog,callback){callback=callback?callback:function(){};Animit.runAll(Animit(dialog._mask,this.def)["default"]({opacity:1},{opacity:0}),Animit(dialog._dialog,this.def)["default"]({opacity:1},{opacity:0}).queue(function(done){callback();done();}));}}]);return IOSAlertDialogAnimator;}(AlertDialogAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var scheme$1={'.alert-dialog':'alert-dialog--*','.alert-dialog-container':'alert-dialog-container--*','.alert-dialog-title':'alert-dialog-title--*','.alert-dialog-content':'alert-dialog-content--*','.alert-dialog-footer':'alert-dialog-footer--*','.alert-dialog-footer--rowfooter':'alert-dialog-footer--rowfooter--*','.alert-dialog-button--rowfooter':'alert-dialog-button--rowfooter--*','.alert-dialog-button--primal':'alert-dialog-button--primal--*','.alert-dialog-button':'alert-dialog-button--*','ons-alert-dialog-button':'alert-dialog-button--*','.alert-dialog-mask':'alert-dialog-mask--*','.text-input':'text-input--*'};var _animatorDict$1={'none':AlertDialogAnimator,'default':function _default(){return platform.isAndroid()?AndroidAlertDialogAnimator:IOSAlertDialogAnimator;},'fade':function fade(){return platform.isAndroid()?AndroidAlertDialogAnimator:IOSAlertDialogAnimator;}};/**
 * @element ons-alert-dialog
 * @category dialog
 * @description
 *   [en]
 *     Alert dialog that is displayed on top of the current screen. Useful for displaying questions, warnings or error messages to the user. The title, content and buttons can be easily customized and it will automatically switch style based on the platform.
 *
 *     To use the element it can either be attached directly to the `<body>` element or dynamically created from a template using the `ons.createAlertDialog(template)` utility function and the `<template>` tag.
 *   [/en]
 *   [ja]
 *     現在のスクリーンの上に表示するアラートダイアログです。ユーザに対する問いかけ、警告、エラーメッセージを表示するのに利用できます。タイトルやコンテンツやボタンは簡単にカスタマイズでき、実行しているプラットフォームに併せてスタイルが自動的に切り替わります。
 *   [/ja]
 * @codepen Qwwxyp
 * @tutorial vanilla/Reference/alert-dialog
 * @modifier material
 *   [en]Material Design style[/en]
 *   [ja]マテリアルデザインのスタイル[/ja]
 * @modifier rowfooter
 *   [en]Horizontally aligns the footer buttons.[/en]
 *   [ja]フッターの複数のボタンを水平に配置[/ja]
 * @seealso ons-dialog
 *   [en]ons-dialog component[/en]
 *   [ja]ons-dialogコンポーネント[/ja]
 * @seealso ons-popover
 *   [en]ons-popover component[/en]
 *   [ja]ons-dialogコンポーネント[/ja]
 * @seealso ons.notification
 *   [en]Using ons.notification utility functions.[/en]
 *   [ja]アラートダイアログを表示するには、ons.notificationオブジェクトのメソッドを使うこともできます。[/ja]
 * @example
 * <ons-alert-dialog id="alert-dialog">
 *   <div class="alert-dialog-title">Warning!</div>
 *   <div class="alert-dialog-content">
 *     An error has occurred!
 *   </div>
 *   <div class="alert-dialog-footer">
 *     <button id="alert-dialog-button" class="alert-dialog-button">OK</button>
 *   </div>
 * </ons-alert-dialog>
 * <script>
 *   document.getElementById('alert-dialog').show();
 * </script>
 */var AlertDialogElement=function(_BaseDialogElement){inherits(AlertDialogElement,_BaseDialogElement);/**
   * @event preshow
   * @description
   *   [en]Fired just before the alert dialog is displayed.[/en]
   *   [ja]アラートダイアログが表示される直前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.alertDialog
   *   [en]Alert dialog object.[/en]
   *   [ja]アラートダイアログのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Execute to stop the dialog from showing.[/en]
   *   [ja]この関数を実行すると、アラートダイアログの表示を止めます。[/ja]
   */ /**
   * @event postshow
   * @description
   *   [en]Fired just after the alert dialog is displayed.[/en]
   *   [ja]アラートダイアログが表示された直後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.alertDialog
   *   [en]Alert dialog object.[/en]
   *   [ja]アラートダイアログのオブジェクト。[/ja]
   */ /**
   * @event prehide
   * @description
   *   [en]Fired just before the alert dialog is hidden.[/en]
   *   [ja]アラートダイアログが隠れる直前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.alertDialog
   *   [en]Alert dialog object.[/en]
   *   [ja]アラートダイアログのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Execute to stop the dialog from hiding.[/en]
   *   [ja]この関数を実行すると、アラートダイアログが閉じようとするのを止めます。[/ja]
   */ /**
   * @event posthide
   * @description
   * [en]Fired just after the alert dialog is hidden.[/en]
   * [ja]アラートダイアログが隠れた後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.alertDialog
   *   [en]Alert dialog object.[/en]
   *   [ja]アラートダイアログのオブジェクト。[/ja]
   */ /**
   * @attribute modifier
   * @type {String}
   * @description
   *  [en]The appearance of the dialog.[/en]
   *  [ja]ダイアログの見た目を指定します。[/ja]
   */ /**
   * @attribute cancelable
   * @description
   *  [en]If this attribute is set the dialog can be closed by tapping the background or by pressing the back button on Android devices.[/en]
   *  [ja]この属性を設定すると、ダイアログの背景をタップしたりAndroidデバイスのバックボタンを押すとダイアログが閉じるようになります。[/ja]
   */ /**
   * @attribute disabled
   * @description
   *  [en]If this attribute is set the dialog is disabled.[/en]
   *  [ja]この属性がある時、アラートダイアログはdisabled状態になります。[/ja]
   */ /**
   * @attribute animation
   * @type {String}
   * @default default
   * @description
   *  [en]The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.[/en]
   *  [ja]ダイアログを表示する際のアニメーション名を指定します。デフォルトでは"none"か"default"が指定できます。[/ja]
   */ /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。例：{duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
   */ /**
   * @attribute mask-color
   * @type {String}
   * @default rgba(0, 0, 0, 0.2)
   * @description
   *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)".[/en]
   *  [ja]背景のマスクの色を指定します。"rgba(0, 0, 0, 0.2)"がデフォルト値です。[/ja]
   */function AlertDialogElement(){classCallCheck(this,AlertDialogElement);var _this=possibleConstructorReturn(this,(AlertDialogElement.__proto__||Object.getPrototypeOf(AlertDialogElement)).call(this));contentReady(_this,function(){return _this._compile();});return _this;}createClass(AlertDialogElement,[{key:'_updateAnimatorFactory',value:function _updateAnimatorFactory(){return new AnimatorFactory({animators:_animatorDict$1,baseClass:AlertDialogAnimator,baseClassName:'AlertDialogAnimator',defaultAnimation:this.getAttribute('animation')});}},{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.style.display='none';this.style.zIndex=10001;/**
       * Expected result after compile:
       *
       * <ons-alert-dialog style="none">
       *   <div class="alert-dialog-mask"></div>
       *   <div class="alert-dialog">
       *     <div class="alert-dialog-container">...</div>
       *   </div>
       * </ons-alert-dialog>
       */var content=document.createDocumentFragment();if(!this._mask&&!this._dialog){while(this.firstChild){content.appendChild(this.firstChild);}}if(!this._mask){var mask=document.createElement('div');mask.classList.add('alert-dialog-mask');this.insertBefore(mask,this.children[0]);}if(!this._dialog){var dialog=document.createElement('div');dialog.classList.add('alert-dialog');this.insertBefore(dialog,null);}if(!util$1.findChild(this._dialog,'.alert-dialog-container')){var container=document.createElement('div');container.classList.add('alert-dialog-container');this._dialog.appendChild(container);}this._dialog.children[0].appendChild(content);this._dialog.style.zIndex=20001;this._mask.style.zIndex=20000;ModifierUtil.initModifier(this,this._scheme);}/**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */ /**
     * @property cancelable
     * @type {Boolean}
     * @description
     *   [en]Whether the dialog is cancelable or not. A cancelable dialog can be closed by tapping the background or by pressing the back button on Android devices.[/en]
     *   [ja]そのダイアログがキャンセル可能かどうかを表します。キャンセル可能なダイアログは、背景をタップするかAndroidデバイスのバックボタンを押すことで閉じることが出来るようになります。[/ja]
     */ /**
     * @method show
     * @signature show([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクトです。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"fade"` and `"none"`.[/en]
     *   [ja]アニメーション名を指定します。指定できるのは、"fade", "none"のいずれかです。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. <code>{duration: 0.2, delay: 0.4, timing: 'ease-in'}</code> [/ja]
     * @param {Function} [options.callback]
     *   [en]Function to execute after the dialog has been revealed.[/en]
     *   [ja]ダイアログが表示され終わった時に呼び出されるコールバックを指定します。[/ja]
     * @description
     *   [en]Show the alert dialog.[/en]
     *   [ja]ダイアログを表示します。[/ja]
     * @return {Promise}
     *   [en]A `Promise` object that resolves to the displayed element.[/en]
     *   [ja]表示される要素を解決する`Promise`オブジェクトを返します。[/ja]
     */ /**
     * @method hide
     * @signature hide([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"fade"` and `"none"`.[/en]
     *   [ja]アニメーション名を指定します。"fade", "none"のいずれかを指定します。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g.  <code>{duration: 0.2, delay: 0.4, timing: 'ease-in'}</code>[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. <code>{duration: 0.2, delay: 0.4, timing: 'ease-in'}</code> [/ja]
     * @param {Function} [options.callback]
     *   [en]Function to execute after the dialog has been hidden.[/en]
     *   [ja]このダイアログが閉じた時に呼び出されるコールバックを指定します。[/ja]
     * @description
     *   [en]Hide the alert dialog.[/en]
     *   [ja]ダイアログを閉じます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the hidden element[/en]
     *   [ja]隠れた要素を解決する`Promise`オブジェクトを返します。[/ja]
     */ /**
     * @property visible
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the dialog is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */ /**
     * @property onDeviceBackButton
     * @type {Object}
     * @description
     *   [en]Back-button handler.[/en]
     *   [ja]バックボタンハンドラ。[/ja]
     */ /**
     * @param {String} name
     * @param {DialogAnimator} Animator
     */},{key:'_scheme',get:function get$$1(){return scheme$1;}/**
     * @return {Element}
     */},{key:'_mask',get:function get$$1(){return util$1.findChild(this,'.alert-dialog-mask');}/**
     * @return {Element}
     */},{key:'_dialog',get:function get$$1(){return util$1.findChild(this,'.alert-dialog');}/**
     * @return {Element}
     */},{key:'_titleElement',get:function get$$1(){return util$1.findChild(this._dialog.children[0],'.alert-dialog-title');}/**
     * @return {Element}
     */},{key:'_contentElement',get:function get$$1(){return util$1.findChild(this._dialog.children[0],'.alert-dialog-content');}}],[{key:'registerAnimator',value:function registerAnimator(name,Animator){if(!(Animator.prototype instanceof AlertDialogAnimator)){util$1.throwAnimator('AlertDialog');}_animatorDict$1[name]=Animator;}},{key:'animators',get:function get$$1(){return _animatorDict$1;}},{key:'AlertDialogAnimator',get:function get$$1(){return AlertDialogAnimator;}}]);return AlertDialogElement;}(BaseDialogElement);onsElements.AlertDialog=AlertDialogElement;customElements.define('ons-alert-dialog',AlertDialogElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @element ons-alert-dialog-button
 * @modifier material
 *   [en]Material Design alert-dialog button.[/en]
 *   [ja]マテリアルデザインのボタンを表示します。[/ja]
 * @description
 *   [en][/en]
 *   [ja][/ja]
 * @seealso ons-alert-dialog
 *   [en]The `<ons-alert-dialog>` component displays a alert dialog.[/en]
 *   [ja]ons-alert-dialogコンポーネント[/ja]
 * @example
 *  <ons-alert-dialog>
 *    <div class="alert-dialog-title">Warning!</div>
 *    <div class="alert-dialog-content">
 *      An error has occurred!
 *    </div>
 *    <div class="alert-dialog-footer">
 *      <alert-dialog-button onclick="app.close()">Cancel</alert-dialog-button>
 *      <alert-dialog-button class="alert-dialog-button" onclick="app.close()">OK</alert-dialog-button>
 *    </div>
 *  </ons-alert-dialog>
 */var AlertDialogButtonElement=function(_BaseButtonElement){inherits(AlertDialogButtonElement,_BaseButtonElement);function AlertDialogButtonElement(){classCallCheck(this,AlertDialogButtonElement);return possibleConstructorReturn(this,(AlertDialogButtonElement.__proto__||Object.getPrototypeOf(AlertDialogButtonElement)).apply(this,arguments));}createClass(AlertDialogButtonElement,[{key:'_scheme',/**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the button.[/en]
     *   [ja]ボタンの表現を指定します。[/ja]
     */ /**
     * @attribute disabled
     * @description
     *   [en]Specify if button should be disabled.[/en]
     *   [ja]ボタンを無効化する場合は指定してください。[/ja]
     */ /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */get:function get$$1(){return{'':'alert-dialog-button--*'};}},{key:'_defaultClassName',get:function get$$1(){return'alert-dialog-button';}},{key:'_rippleOpt',get:function get$$1(){return[this,undefined,{'modifier':'light-gray'}];}}]);return AlertDialogButtonElement;}(BaseButtonElement);onsElements.AlertDialogButton=AlertDialogButtonElement;customElements.define('ons-alert-dialog-button',AlertDialogButtonElement);var iosBackButtonIcon="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"13px\" height=\"21px\" viewBox=\"0 0 13 21\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <title>ios-back-button-icon</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"toolbar-back-button\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\">\n        <g id=\"ios\" transform=\"translate(-34.000000, -30.000000)\">\n            <polygon id=\"ios-back-button-icon\" points=\"34 40.5 44.5 30 46.5 32 38 40.5 46.5 49 44.5 51\"></polygon>\n        </g>\n    </g>\n</svg>\n";var mdBackButtonIcon="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <title>md-back-button-icon</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"toolbar-back-button\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\">\n        <g id=\"android\" transform=\"translate(-32.000000, -32.000000)\" fill-rule=\"nonzero\">\n            <polygon id=\"md-back-button-icon\" points=\"48 39 35.83 39 41.42 33.41 40 32 32 40 40 48 41.41 46.59 35.83 41 48 41\"></polygon>\n        </g>\n    </g>\n</svg>\n";/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var defaultClassName='back-button';var scheme$2={'':'back-button--*','.back-button__icon':'back-button--*__icon','.back-button__label':'back-button--*__label'};/**
 * @element ons-back-button
 * @category navigation
 * @description
 *   [en]
 *     Back button component for `<ons-toolbar>`. Put it in the left part of the `<ons-toolbar>`.
 *
 *     It will find the parent `<ons-navigator>` element and pop a page when clicked. This behavior can be overriden by specifying the `onClick` property.
 *   [/en]
 *   [ja][/ja]
 * @codepen aHmGL
 * @tutorial vanilla/Reference/back-button
 * @modifier material
 *   [en]Material Design style[/en]
 *   [ja][/ja]
 * @seealso ons-toolbar
 *   [en]ons-toolbar component[/en]
 *   [ja]ons-toolbarコンポーネント[/ja]
 * @seealso ons-navigator
 *   [en]ons-navigator component[/en]
 *   [ja]ons-navigatorコンポーネント[/ja]
 * @example
 * <ons-toolbar>
 *   <div class="left">
 *     <ons-back-button>Back</ons-back-button>
 *   </div>
 *   <div class="center">
 *     Title
 *   <div>
 * </ons-toolbar>
 */var BackButtonElement=function(_BaseElement){inherits(BackButtonElement,_BaseElement);/**
   * @attribute modifier
   * @type {String}
   * @description
   *  [en]The appearance of the back button.[/en]
   *  [ja]バックボタンの見た目を指定します。[/ja]
   */function BackButtonElement(){classCallCheck(this,BackButtonElement);var _this=possibleConstructorReturn(this,(BackButtonElement.__proto__||Object.getPrototypeOf(BackButtonElement)).call(this));contentReady(_this,function(){_this._compile();});_this._options={};_this._boundOnClick=_this._onClick.bind(_this);return _this;}createClass(BackButtonElement,[{key:'_updateIcon',value:function _updateIcon(){var icon=arguments.length>0&&arguments[0]!==undefined?arguments[0]:util$1.findChild(this,'.back-button__icon');icon.innerHTML=autoStyle.getPlatform(this)==='android'||util$1.hasModifier(this,'material')?mdBackButtonIcon:iosBackButtonIcon;}},{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.classList.add(defaultClassName);if(!util$1.findChild(this,'.back-button__label')){var label=util$1.create('span.back-button__label');while(this.childNodes[0]){label.appendChild(this.childNodes[0]);}this.appendChild(label);}if(!util$1.findChild(this,'.back-button__icon')){var icon=util$1.create('span.back-button__icon');this._updateIcon(icon);this.insertBefore(icon,this.children[0]);}util$1.updateRipple(this,undefined,{center:'','size':'contain','background':'transparent'});ModifierUtil.initModifier(this,scheme$2);}/**
     * @property options
     * @type {Object}
     * @description
     *   [en]Options object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     */ /**
     * @property options.animation
     * @type {String}
     * @description
     *   [en]Animation name. Available animations are "slide", "lift", "fade" and "none".
     *     These are platform based animations. For fixed animations, add "-ios" or "-md"
     *     suffix to the animation name. E.g. "lift-ios", "lift-md". Defaults values are "slide-ios" and "fade-md".
     *   [/en]
     *   [ja][/ja]
     */ /**
     * @property options.animationOptions
     * @type {String}
     * @description
     *   [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}` [/ja]
     */ /**
     * @property options.callback
     * @type {String}
     * @description
     *   [en]Function that is called when the transition has ended.[/en]
     *   [ja]このメソッドによる画面遷移が終了した際に呼び出される関数オブジェクトを指定します。[/ja]
     */},{key:'_onClick',/**
     * @property onClick
     * @type {Function}
     * @description
     *   [en]Used to override the default back button behavior.[/en]
     *   [ja][/ja]
     */value:function _onClick(){if(this.onClick){this.onClick.apply(this);}else{var navigator=util$1.findParent(this,'ons-navigator');if(navigator){navigator.popPage(this.options);}}}},{key:'connectedCallback',value:function connectedCallback(){this.addEventListener('click',this._boundOnClick,false);}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'class':util$1.restoreClass(this,defaultClassName,scheme$2);break;case'modifier':{ModifierUtil.onModifierChanged(last,current,this,scheme$2)&&this._updateIcon();break;}}}},{key:'disconnectedCallback',value:function disconnectedCallback(){this.removeEventListener('click',this._boundOnClick,false);}},{key:'show',value:function show(){this.style.display='inline-block';}},{key:'hide',value:function hide(){this.style.display='none';}},{key:'options',get:function get$$1(){return this._options;},set:function set$$1(object){this._options=object;}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','class'];}}]);return BackButtonElement;}(BaseElement);onsElements.BackButton=BackButtonElement;customElements.define('ons-back-button',BackButtonElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var defaultClassName$1='bottom-bar';var scheme$3={'':'bottom-bar--*'};/**
 * @element ons-bottom-toolbar
 * @category page
 * @description
 *   [en]Toolbar component that is positioned at the bottom of the page. Since bottom toolbars are very versatile elements, `ons-bottom-toolbar` does not provide any specific layout syntax for its children. Modifiers or custom CSS must be used.[/en]
 *   [ja]ページ下部に配置されるツールバー用コンポーネントです。[/ja]
 * @modifier transparent
 *   [en]Make the toolbar transparent.[/en]
 *   [ja]ツールバーの背景を透明にして表示します。[/ja]
 * @modifier aligned
 *   [en]Vertically aligns its children and applies flexbox for block elements. `justify-content` CSS rule can be used to change horizontal align.[/en]
 *   [ja]ツールバーの背景を透明にして表示します。[/ja]
 * @seealso ons-toolbar [en]ons-toolbar component[/en][ja]ons-toolbarコンポーネント[/ja]
 * @example
 * <ons-bottom-toolbar>
 *   Content
 * </ons-bottom-toolbar>
 */var BottomToolbarElement=function(_BaseElement){inherits(BottomToolbarElement,_BaseElement);/**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the toolbar.[/en]
   *   [ja]ツールバーの見た目の表現を指定します。[/ja]
   */function BottomToolbarElement(){classCallCheck(this,BottomToolbarElement);var _this=possibleConstructorReturn(this,(BottomToolbarElement.__proto__||Object.getPrototypeOf(BottomToolbarElement)).call(this));_this.classList.add(defaultClassName$1);ModifierUtil.initModifier(_this,scheme$3);return _this;}createClass(BottomToolbarElement,[{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'class':util$1.restoreClass(this,defaultClassName$1,scheme$3);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$3);break;}}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','class'];}}]);return BottomToolbarElement;}(BaseElement);onsElements.BottomToolbar=BottomToolbarElement;customElements.define('ons-bottom-toolbar',BottomToolbarElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @element ons-button
 * @category form
 * @modifier outline
 *   [en]Button with outline and transparent background[/en]
 *   [ja]アウトラインを持ったボタンを表示します。[/ja]
 * @modifier light
 *   [en]Button that doesn't stand out.[/en]
 *   [ja]目立たないボタンを表示します。[/ja]
 * @modifier quiet
 *   [en]Button with no outline and or background..[/en]
 *   [ja]枠線や背景が無い文字だけのボタンを表示します。[/ja]
 * @modifier cta
 *   [en]Button that really stands out.[/en]
 *   [ja]目立つボタンを表示します。[/ja]
 * @modifier large
 *   [en]Large button that covers the width of the screen.[/en]
 *   [ja]横いっぱいに広がる大きなボタンを表示します。[/ja]
 * @modifier large--quiet
 *   [en]Large quiet button.[/en]
 *   [ja]横いっぱいに広がるquietボタンを表示します。[/ja]
 * @modifier large--cta
 *   [en]Large call to action button.[/en]
 *   [ja]横いっぱいに広がるctaボタンを表示します。[/ja]
 * @modifier material
 *   [en]Material Design button[/en]
 *   [ja]マテリアルデザインのボタン[/ja]
 * @modifier material--flat
 *   [en]Material Design flat button[/en]
 *   [ja]マテリアルデザインのフラットボタン[/ja]
 * @description
 *   [en]
 *     Button component. If you want to place a button in a toolbar, use `<ons-toolbar-button>` or `<ons-back-button>` instead.
 *
 *     Will automatically display as a Material Design button with a ripple effect on Android.
 *   [/en]
 *   [ja]ボタン用コンポーネント。ツールバーにボタンを設置する場合は、ons-toolbar-buttonもしくはons-back-buttonコンポーネントを使用します。[/ja]
 * @codepen hLayx
 * @tutorial vanilla/Reference/button
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
 * @example
 * <ons-button modifier="large--cta">
 *   Tap Me
 * </ons-button>
 */var ButtonElement=function(_BaseButtonElement){inherits(ButtonElement,_BaseButtonElement);function ButtonElement(){classCallCheck(this,ButtonElement);return possibleConstructorReturn(this,(ButtonElement.__proto__||Object.getPrototypeOf(ButtonElement)).apply(this,arguments));}createClass(ButtonElement,[{key:'_scheme',/**
     * @attribute modifier
     * @type {String}
     * @description
     *  [en]The appearance of the button.[/en]
     *  [ja]ボタンの表現を指定します。[/ja]
     */ /**
     * @attribute ripple
     * @description
     *  [en]If this attribute is defined, the button will have a ripple effect.[/en]
     *  [ja][/ja]
     */ /**
     * @attribute disabled
     * @description
     *   [en]Specify if button should be disabled.[/en]
     *   [ja]ボタンを無効化する場合は指定します。[/ja]
     */ /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the button is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */get:function get$$1(){return{'':'button--*'};}},{key:'_defaultClassName',get:function get$$1(){return'button';}}]);return ButtonElement;}(BaseButtonElement);onsElements.Button=ButtonElement;customElements.define('ons-button',ButtonElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var defaultClassName$2='card';var scheme$4={'':'card--*','.card__title':'card--*__title','.card__content':'card--*__content'};/**
 * @element ons-card
 * @category visual
 * @modifier material
 *   [en]A card with material design.[/en]
 *   [ja]リストの上下のボーダーが無いリストを表示します。[/ja]
 * @description
 *   [en]
 *    Component to create a card that displays some information.
 *
 *    The card may be composed by divs with specially prepared classes `title` and/or `content`. You can also add your own content as you please.[/en]
 *   [ja][/ja]
 * @tutorial vanilla/Reference/card
 * @example
 * <ons-card>
 *   <p>Some content</p>
 * </ons-card>
 */var CardElement=function(_BaseElement){inherits(CardElement,_BaseElement);/**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the card.[/en]
   *   [ja]リストの表現を指定します。[/ja]
   */function CardElement(){classCallCheck(this,CardElement);var _this=possibleConstructorReturn(this,(CardElement.__proto__||Object.getPrototypeOf(CardElement)).call(this));contentReady(_this,function(){_this._compile();});return _this;}createClass(CardElement,[{key:'_compile',value:function _compile(){for(var i=0;i<this.children.length;i++){var el=this.children[i];if(el.classList.contains('title')){el.classList.add('card__title');}else if(el.classList.contains('content')){el.classList.add('card__content');}}autoStyle.prepare(this);this.classList.add(defaultClassName$2);ModifierUtil.initModifier(this,scheme$4);}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'class':util$1.restoreClass(this,defaultClassName$2,scheme$4);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$4);break;}}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','class'];}}]);return CardElement;}(BaseElement);onsElements.Card=CardElement;customElements.define('ons-card',CardElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var scheme$5={'':'carousel-item--*'};/**
 * @element ons-carousel-item
 * @category carousel
 * @description
 *   [en]
 *     Carousel item component. Used as a child of the `<ons-carousel>` element.
 *   [/en]
 *   [ja][/ja]
 * @codepen xbbzOQ
 * @tutorial vanilla/Reference/carousel
 * @seealso ons-carousel
 *   [en]`<ons-carousel>` components[/en]
 *   [ja]<ons-carousel>コンポーネント[/ja]
 * @example
 * <ons-carousel style="width: 100%; height: 200px">
 *   <ons-carousel-item>
 *    ...
 *   </ons-carousel-item>
 *   <ons-carousel-item>
 *    ...
 *   </ons-carousel-item>
 * </ons-carousel>
 */var CarouselItemElement=function(_BaseElement){inherits(CarouselItemElement,_BaseElement);function CarouselItemElement(){classCallCheck(this,CarouselItemElement);var _this=possibleConstructorReturn(this,(CarouselItemElement.__proto__||Object.getPrototypeOf(CarouselItemElement)).call(this));_this.style.width='100%';ModifierUtil.initModifier(_this,scheme$5);return _this;}createClass(CarouselItemElement,[{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){if(name==='modifier'){return ModifierUtil.onModifierChanged(last,current,this,scheme$5);}}}],[{key:'observedAttributes',get:function get$$1(){return['modifier'];}}]);return CarouselItemElement;}(BaseElement);onsElements.CarouselItem=CarouselItemElement;customElements.define('ons-carousel-item',CarouselItemElement);var directionMap={vertical:{axis:'Y',size:'Height',dir:['up','down'],t3d:['0px, ','px, 0px']},horizontal:{axis:'X',size:'Width',dir:['left','right'],t3d:['','px, 0px, 0px']}};var Swiper=function(){function Swiper(params){var _this=this;classCallCheck(this,Swiper);// Parameters
var FALSE=function FALSE(){return false;};'getInitialIndex getBubbleWidth isVertical isOverScrollable isCentered\n    isAutoScrollable refreshHook preChangeHook postChangeHook overScrollHook'.split(/\s+/).forEach(function(key){return _this[key]=params[key]||FALSE;});this.getElement=params.getElement;// Required
this.scrollHook=params.scrollHook;// Optional
this.itemSize=params.itemSize||'100%';this.getAutoScrollRatio=function(){var ratio=params.getAutoScrollRatio&&params.getAutoScrollRatio.apply(params,arguments);ratio=typeof ratio==='number'&&ratio===ratio?ratio:.5;if(ratio<0.0||ratio>1.0){util$1["throw"]('Invalid auto-scroll-ratio '+ratio+'. Must be between 0 and 1');}return ratio;};// Prevent clicks only on desktop
this.shouldBlock=util$1.globals.actualMobileOS==='other';// Bind handlers
this.onDragStart=this.onDragStart.bind(this);this.onDrag=this.onDrag.bind(this);this.onDragEnd=this.onDragEnd.bind(this);this.onResize=this.onResize.bind(this);this._shouldFixScroll=util$1.globals.actualMobileOS==='ios';}createClass(Swiper,[{key:'init',value:function init(){var _this2=this;var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},swipeable=_ref.swipeable,autoRefresh=_ref.autoRefresh;this.initialized=true;this.target=this.getElement().children[0];this.blocker=this.getElement().children[1];if(!this.target||!this.blocker){util$1["throw"]('Expected "target" and "blocker" elements to exist before initializing Swiper');}if(!this.shouldBlock){this.blocker.style.display='none';}// Add classes
this.getElement().classList.add('ons-swiper');this.target.classList.add('ons-swiper-target');this.blocker.classList.add('ons-swiper-blocker');// Setup listeners
this._gestureDetector=new GestureDetector(this.getElement(),{dragMinDistance:1,dragLockToAxis:true,passive:!this._shouldFixScroll});this._mutationObserver=new MutationObserver(function(){return _this2.refresh();});this.updateSwipeable(swipeable);this.updateAutoRefresh(autoRefresh);// Setup initial layout
this._scroll=this._offset=this._lastActiveIndex=0;this._updateLayout();this._setupInitialIndex();setImmediate(function(){return _this2.initialized&&_this2._setupInitialIndex();});// Fix rendering glitch on Android 4.1
// Fix for iframes where the width is inconsistent at the beginning
if(window!==window.parent||this.offsetHeight===0){window.requestAnimationFrame(function(){return _this2.initialized&&_this2.onResize();});}}},{key:'dispose',value:function dispose(){this.initialized=false;this.updateSwipeable(false);this.updateAutoRefresh(false);this._gestureDetector&&this._gestureDetector.dispose();this.target=this.blocker=this._gestureDetector=this._mutationObserver=null;this.setupResize(false);}},{key:'onResize',value:function onResize(){var i=this._scroll/this.itemNumSize;this._reset();this.setActiveIndex(i);this.refresh();}},{key:'_calculateItemSize',value:function _calculateItemSize(){var matches=this.itemSize.match(/^(\d+)(px|%)/);if(!matches){util$1["throw"]('Invalid state: swiper\'s size unit must be \'%\' or \'px\'');}var value=parseInt(matches[1],10);return matches[2]==='%'?Math.round(value/100*this.targetSize):value;}},{key:'_setupInitialIndex',value:function _setupInitialIndex(){this._reset();this._lastActiveIndex=Math.max(Math.min(Number(this.getInitialIndex()),this.itemCount),0);this._scroll=this._offset+this.itemNumSize*this._lastActiveIndex;this._scrollTo(this._scroll);}},{key:'_setSwiping',value:function _setSwiping(toggle){this.target.classList.toggle('swiping',toggle);// Hides everything except shown pages
}},{key:'setActiveIndex',value:function setActiveIndex(index){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this._setSwiping(true);index=Math.max(0,Math.min(index,this.itemCount-1));var scroll=Math.max(0,Math.min(this.maxScroll,this._offset+this.itemNumSize*index));return this._changeTo(scroll,options);}},{key:'getActiveIndex',value:function getActiveIndex(){var scroll=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._scroll;scroll-=this._offset;var count=this.itemCount,size=this.itemNumSize;if(this.itemNumSize===0||!util$1.isInteger(scroll)){return this._lastActiveIndex;}if(scroll<=0){return 0;}for(var i=0;i<count;i++){if(size*i<=scroll&&size*(i+1)>scroll){return i;}}return count-1;}},{key:'setupResize',value:function setupResize(add){window[(add?'add':'remove')+'EventListener']('resize',this.onResize,true);}},{key:'show',value:function show(){var _this3=this;this.setupResize(true);this.onResize();setTimeout(function(){return _this3.target&&_this3.target.classList.add('active');},1000/60);// Hide elements after animations
}},{key:'hide',value:function hide(){this.setupResize(false);this.target.classList.remove('active');// Show elements before animations
}},{key:'updateSwipeable',value:function updateSwipeable(shouldUpdate){if(this._gestureDetector){var action=shouldUpdate?'on':'off';this._gestureDetector[action]('drag',this.onDrag);this._gestureDetector[action]('dragstart',this.onDragStart);this._gestureDetector[action]('dragend',this.onDragEnd);}}},{key:'updateAutoRefresh',value:function updateAutoRefresh(shouldWatch){if(this._mutationObserver){shouldWatch?this._mutationObserver.observe(this.target,{childList:true}):this._mutationObserver.disconnect();}}},{key:'updateItemSize',value:function updateItemSize(newSize){this.itemSize=newSize||'100%';this.refresh();}},{key:'toggleBlocker',value:function toggleBlocker(block){this.blocker.style.pointerEvents=block?'auto':'none';}},{key:'_canConsumeGesture',value:function _canConsumeGesture(gesture){var d=gesture.direction;var isFirst=this._scroll===0&&!this.isOverScrollable();var isLast=this._scroll===this.maxScroll&&!this.isOverScrollable();return this.isVertical()?d==='down'&&!isFirst||d==='up'&&!isLast:d==='right'&&!isFirst||d==='left'&&!isLast;}},{key:'onDragStart',value:function onDragStart(event){var _this4=this;this._ignoreDrag=event.consumed||!util$1.isValidGesture(event);if(!this._ignoreDrag){var consume=event.consume;event.consume=function(){consume&&consume();_this4._ignoreDrag=true;};if(this._canConsumeGesture(event.gesture)){var startX=event.gesture.center&&event.gesture.center.clientX||0,distFromEdge=this.getBubbleWidth()||0,start=function start(){consume&&consume();event.consumed=true;_this4._started=true;// Avoid starting drag from outside
_this4.shouldBlock&&_this4.toggleBlocker(true);_this4._setSwiping(true);util$1.iosPreventScroll(_this4._gestureDetector);};// Let parent elements consume the gesture or consume it right away
startX<distFromEdge||startX>this.targetSize-distFromEdge?setImmediate(function(){return!_this4._ignoreDrag&&start();}):start();}}}},{key:'onDrag',value:function onDrag(event){if(!event.gesture||this._ignoreDrag||!this._started){return;}this._continued=true;// Fix for random 'dragend' without 'drag'
event.stopPropagation();this._scrollTo(this._scroll-this._getDelta(event),{throttle:true});}},{key:'onDragEnd',value:function onDragEnd(event){this._started=false;if(!event.gesture||this._ignoreDrag||!this._continued){this._ignoreDrag=true;// onDragEnd might fire before onDragStart's setImmediate
return;}this._continued=false;event.stopPropagation();var scroll=this._scroll-this._getDelta(event);var normalizedScroll=this._normalizeScroll(scroll);scroll===normalizedScroll?this._startMomentumScroll(scroll,event):this._killOverScroll(normalizedScroll);this.shouldBlock&&this.toggleBlocker(false);}},{key:'_startMomentumScroll',value:function _startMomentumScroll(scroll,event){var velocity=this._getVelocity(event),matchesDirection=event.gesture.interimDirection===this.dM.dir[this._getDelta(event)<0?0:1];var nextScroll=this._getAutoScroll(scroll,velocity,matchesDirection);var duration=Math.abs(nextScroll-scroll)/(velocity+0.01)/1000;duration=Math.min(.25,Math.max(.1,duration));this._changeTo(nextScroll,{swipe:true,animationOptions:{duration:duration,timing:'cubic-bezier(.4, .7, .5, 1)'}});}},{key:'_killOverScroll',value:function _killOverScroll(scroll){var _this5=this;this._scroll=scroll;var direction=this.dM.dir[Number(scroll>0)];var killOverScroll=function killOverScroll(){return _this5._changeTo(scroll,{animationOptions:{duration:.4,timing:'cubic-bezier(.1, .4, .1, 1)'}});};this.overScrollHook({direction:direction,killOverScroll:killOverScroll})||killOverScroll();}},{key:'_changeTo',value:function _changeTo(scroll){var _this6=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var e={activeIndex:this.getActiveIndex(scroll),lastActiveIndex:this._lastActiveIndex,swipe:options.swipe||false};var change=e.activeIndex!==e.lastActiveIndex;var canceled=change?this.preChangeHook(e):false;this._scroll=canceled?this._offset+e.lastActiveIndex*this.itemNumSize:scroll;this._lastActiveIndex=canceled?e.lastActiveIndex:e.activeIndex;return this._scrollTo(this._scroll,options).then(function(){if(scroll===_this6._scroll&&!canceled){_this6._setSwiping(false);change&&_this6.postChangeHook(e);}else if(options.reject){_this6._setSwiping(false);return Promise.reject('Canceled');}});}},{key:'_scrollTo',value:function _scrollTo(scroll){var _this7=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(options.throttle){var ratio=0.35;if(scroll<0){scroll=this.isOverScrollable()?Math.round(scroll*ratio):0;}else{var maxScroll=this.maxScroll;if(maxScroll<scroll){scroll=this.isOverScrollable()?maxScroll+Math.round((scroll-maxScroll)*ratio):maxScroll;}}}var opt=options.animation==='none'?{}:options.animationOptions;this.scrollHook&&this.itemNumSize>0&&this.scrollHook((scroll/this.itemNumSize).toFixed(2),options.animationOptions||{});return new Promise(function(resolve){return Animit(_this7.target).queue({transform:_this7._getTransform(scroll)},opt).play(resolve);});}},{key:'_getAutoScroll',value:function _getAutoScroll(scroll,velocity,matchesDirection){var max=this.maxScroll,offset=this._offset,size=this.itemNumSize;if(!this.isAutoScrollable()){return Math.max(0,Math.min(max,scroll));}var arr=[];for(var s=offset;s<max;s+=size){arr.push(s);}arr.push(max);arr=arr.sort(function(left,right){return Math.abs(left-scroll)-Math.abs(right-scroll);}).filter(function(item,pos){return!pos||item!==arr[pos-1];});var result=arr[0];var lastScroll=this._lastActiveIndex*size+offset;var scrollRatio=Math.abs(scroll-lastScroll)/size;if(scrollRatio<=this.getAutoScrollRatio(matchesDirection,velocity,size)){result=lastScroll;}else{if(scrollRatio<1.0&&arr[0]===lastScroll&&arr.length>1){result=arr[1];}}return Math.max(0,Math.min(max,result));}},{key:'_reset',value:function _reset(){this._targetSize=this._itemNumSize=undefined;}},{key:'_normalizeScroll',value:function _normalizeScroll(scroll){return Math.max(Math.min(scroll,this.maxScroll),0);}},{key:'refresh',value:function refresh(){this._reset();this._updateLayout();if(util$1.isInteger(this._scroll)){var scroll=this._normalizeScroll(this._scroll);scroll!==this._scroll?this._killOverScroll(scroll):this._changeTo(scroll);}else{this._setupInitialIndex();}this.refreshHook();}},{key:'_getDelta',value:function _getDelta(event){return event.gesture['delta'+this.dM.axis];}},{key:'_getVelocity',value:function _getVelocity(event){return event.gesture['velocity'+this.dM.axis];}},{key:'_getTransform',value:function _getTransform(scroll){return'translate3d('+this.dM.t3d[0]+-scroll+this.dM.t3d[1]+')';}},{key:'_updateLayout',value:function _updateLayout(){this.dM=directionMap[this.isVertical()?'vertical':'horizontal'];this.target.classList.toggle('ons-swiper-target--vertical',this.isVertical());for(var c=this.target.children[0];c;c=c.nextElementSibling){c.style[this.dM.size.toLowerCase()]=this.itemSize;}if(this.isCentered()){this._offset=(this.targetSize-this.itemNumSize)/-2||0;}}},{key:'itemCount',get:function get$$1(){return this.target.children.length;}},{key:'itemNumSize',get:function get$$1(){if(typeof this._itemNumSize!=='number'||this._itemNumSize!==this._itemNumSize){this._itemNumSize=this._calculateItemSize();}return this._itemNumSize;}},{key:'maxScroll',get:function get$$1(){var max=this.itemCount*this.itemNumSize-this.targetSize;return Math.ceil(max<0?0:max);// Need to return an integer value.
}},{key:'targetSize',get:function get$$1(){if(!this._targetSize){this._targetSize=this.target['offset'+this.dM.size];}return this._targetSize;}}]);return Swiper;}();/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @element ons-carousel
 * @category carousel
 * @description
 *   [en]
 *     Carousel component. A carousel can be used to display several items in the same space.
 *
 *     The component supports displaying content both horizontally and vertically. The user can scroll through the items by dragging and it can also be controller programmatically.
 *   [/en]
 *   [ja][/ja]
 * @codepen xbbzOQ
 * @tutorial vanilla/Reference/carousel
 * @seealso ons-carousel-item
 *   [en]`<ons-carousel-item>` component[/en]
 *   [ja]ons-carousel-itemコンポーネント[/ja]
 * @example
 * <ons-carousel style="width: 100%; height: 200px">
 *   <ons-carousel-item>
 *    ...
 *   </ons-carousel-item>
 *   <ons-carousel-item>
 *    ...
 *   </ons-carousel-item>
 * </ons-carousel>
 */var CarouselElement=function(_BaseElement){inherits(CarouselElement,_BaseElement);/**
   * @event postchange
   * @description
   *   [en]Fired just after the current carousel item has changed.[/en]
   *   [ja]現在表示しているカルーセルの要素が変わった時に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Object} event.carousel
   *   [en]Carousel object.[/en]
   *   [ja]イベントが発火したCarouselオブジェクトです。[/ja]
   * @param {Number} event.activeIndex
   *   [en]Current active index.[/en]
   *   [ja]現在アクティブになっている要素のインデックス。[/ja]
   * @param {Number} event.lastActiveIndex
   *   [en]Previous active index.[/en]
   *   [ja]以前アクティブだった要素のインデックス。[/ja]
   */ /**
   * @event refresh
   * @description
   *   [en]Fired when the carousel has been refreshed.[/en]
   *   [ja]カルーセルが更新された時に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Object} event.carousel
   *   [en]Carousel object.[/en]
   *   [ja]イベントが発火したCarouselオブジェクトです。[/ja]
   */ /**
   * @event overscroll
   * @description
   *   [en]Fired when the carousel has been overscrolled.[/en]
   *   [ja]カルーセルがオーバースクロールした時に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Object} event.carousel
   *   [en]Fired when the carousel has been refreshed.[/en]
   *   [ja]カルーセルが更新された時に発火します。[/ja]
   * @param {Number} event.activeIndex
   *   [en]Current active index.[/en]
   *   [ja]現在アクティブになっている要素のインデックス。[/ja]
   * @param {String} event.direction
   *   [en]Can be one of either "up", "down", "left" or "right".[/en]
   *   [ja]オーバースクロールされた方向が得られます。"up", "down", "left", "right"のいずれかの方向が渡されます。[/ja]
   * @param {Function} event.waitToReturn
   *   [en]Takes a <code>Promise</code> object as an argument. The carousel will not scroll back until the promise has been resolved or rejected.[/en]
   *   [ja]この関数はPromiseオブジェクトを引数として受け取ります。渡したPromiseオブジェクトがresolveされるかrejectされるまで、カルーセルはスクロールバックしません。[/ja]
   */ /**
   * @attribute direction
   * @type {String}
   * @description
   *   [en]The direction of the carousel. Can be either "horizontal" or "vertical". Default is "horizontal".[/en]
   *   [ja]カルーセルの方向を指定します。"horizontal"か"vertical"を指定できます。"horizontal"がデフォルト値です。[/ja]
   */ /**
   * @attribute fullscreen
   * @description
   *   [en]If this attribute is set the carousel will cover the whole screen.[/en]
   *   [ja]この属性があると、absoluteポジションを使ってカルーセルが自動的に画面いっぱいに広がります。[/ja]
   */ /**
   * @attribute overscrollable
   * @description
   *   [en]If this attribute is set the carousel will be scrollable over the edge. It will bounce back when released.[/en]
   *   [ja]この属性がある時、タッチやドラッグで端までスクロールした時に、バウンドするような効果が当たります。[/ja]
   */ /**
   * @attribute centered
   * @description
   *   [en]If this attribute is set the carousel then the selected item will be in the center of the carousel instead of the beginning. Useful only when the items are smaller than the carousel. [/en]
   *   [ja]この属性がある時、選んでいるons-carousel-itemはカルーセルの真ん中へ行きます。項目がカルーセルよりも小さい場合にのみ、これは便利です。[/ja]
   */ /**
   * @attribute item-width
   * @type {String}
   * @description
   *    [en]ons-carousel-item's width. Only works when the direction is set to "horizontal".[/en]
   *    [ja]ons-carousel-itemの幅を指定します。この属性は、direction属性に"horizontal"を指定した時のみ有効になります。[/ja]
   */ /**
   * @attribute item-height
   * @type {String}
   * @description
   *   [en]ons-carousel-item's height. Only works when the direction is set to "vertical".[/en]
   *   [ja]ons-carousel-itemの高さを指定します。この属性は、direction属性に"vertical"を指定した時のみ有効になります。[/ja]
   */ /**
   * @attribute auto-scroll
   * @description
   *   [en]If this attribute is set the carousel will be automatically scrolled to the closest item border when released.[/en]
   *   [ja]この属性がある時、一番近いcarousel-itemの境界まで自動的にスクロールするようになります。[/ja]
   */ /**
   * @attribute auto-scroll-ratio
   * @type {Number}
   * @description
   *    [en]A number between 0.0 and 1.0 that specifies how much the user must drag the carousel in order for it to auto scroll to the next item.[/en]
   *    [ja]0.0から1.0までの値を指定します。カルーセルの要素をどれぐらいの割合までドラッグすると次の要素に自動的にスクロールするかを指定します。[/ja]
   */ /**
   * @attribute swipeable
   * @description
   *   [en]If this attribute is set the carousel can be scrolled by drag or swipe.[/en]
   *   [ja]この属性がある時、カルーセルをスワイプやドラッグで移動できるようになります。[/ja]
   */ /**
   * @attribute disabled
   * @description
   *   [en]If this attribute is set the carousel is disabled.[/en]
   *   [ja]この属性がある時、dragやtouchやswipeを受け付けなくなります。[/ja]
   */ /**
   * @attribute initial-index
   * @initonly
   * @default 0
   * @type {Number}
   * @description
   *   [en]Specify the index of the ons-carousel-item to show initially. Default is 0.[/en]
   *   [ja]最初に表示するons-carousel-itemを0始まりのインデックスで指定します。デフォルト値は 0 です。[/ja]
   */ /**
   * @attribute auto-refresh
   * @description
   *   [en]When this attribute is set the carousel will automatically refresh when the number of child nodes change.[/en]
   *   [ja]この属性がある時、子要素の数が変わるとカルーセルは自動的に更新されるようになります。[/ja]
   */ /**
   * @attribute animation
   * @type {String}
   * @description
   *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
   *   [ja][/ja]
   */ /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *   [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *   [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。例：{duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
   */function CarouselElement(){classCallCheck(this,CarouselElement);var _this=possibleConstructorReturn(this,(CarouselElement.__proto__||Object.getPrototypeOf(CarouselElement)).call(this));contentReady(_this,function(){return _this._compile();});return _this;}createClass(CarouselElement,[{key:'_compile',value:function _compile(){var target=this.children[0]&&this.children[0].tagName!=='ONS-CAROUSEL-ITEM'&&this.children[0]||document.createElement('div');if(!target.parentNode){while(this.firstChild){target.appendChild(this.firstChild);}this.appendChild(target);}!this.children[1]&&this.appendChild(document.createElement('div'));this.appendChild=this.appendChild.bind(target);this.insertBefore=this.insertBefore.bind(target);}},{key:'connectedCallback',value:function connectedCallback(){var _this2=this;if(!this._swiper){this._swiper=new Swiper({getElement:function getElement(){return _this2;},getInitialIndex:function getInitialIndex(){return _this2.getAttribute('initial-index');},getAutoScrollRatio:function getAutoScrollRatio(){return _this2.autoScrollRatio;},isVertical:function isVertical(){return _this2.vertical;},isOverScrollable:function isOverScrollable(){return _this2.overscrollable;},isCentered:function isCentered(){return _this2.centered;},isAutoScrollable:function isAutoScrollable(){return _this2.autoScroll;},itemSize:this.itemSize,overScrollHook:this._onOverScroll.bind(this),preChangeHook:this._onChange.bind(this,'prechange'),postChangeHook:this._onChange.bind(this,'postchange'),refreshHook:this._onRefresh.bind(this),scrollHook:function scrollHook(){return _this2._onSwipe&&_this2._onSwipe.apply(_this2,arguments);}});contentReady(this,function(){return _this2._swiper.init({swipeable:_this2.hasAttribute('swipeable'),autoRefresh:_this2.hasAttribute('auto-refresh')});});}}},{key:'disconnectedCallback',value:function disconnectedCallback(){if(this._swiper&&this._swiper.initialized){this._swiper.dispose();this._swiper=null;}}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){if(!this._swiper){return;}switch(name){case'swipeable':this._swiper.updateSwipeable(this.hasAttribute('swipeable'));break;case'auto-refresh':this._swiper.updateAutoRefresh(this.hasAttribute('auto-refresh'));break;case'item-height':this.vertical&&this._swiper.updateItemSize(this.itemSize);break;case'item-width':this.vertical||this._swiper.updateItemSize(this.itemSize);break;case'direction':this._swiper.refresh();}}},{key:'_show',value:function _show(){this._swiper.show();}},{key:'_hide',value:function _hide(){this._swiper.hide();}},{key:'_onOverScroll',value:function _onOverScroll(_ref){var direction=_ref.direction,killOverScroll=_ref.killOverScroll;var waitForAction=false;util$1.triggerElementEvent(this,'overscroll',{carousel:this,activeIndex:this.getActiveIndex(),direction:direction,waitToReturn:function waitToReturn(promise){waitForAction=true;promise.then(killOverScroll);}});return waitForAction;}},{key:'_onChange',value:function _onChange(eventName,_ref2){var activeIndex=_ref2.activeIndex,lastActiveIndex=_ref2.lastActiveIndex;util$1.triggerElementEvent(this,eventName,{carousel:this,activeIndex:activeIndex,lastActiveIndex:lastActiveIndex});}},{key:'_onRefresh',value:function _onRefresh(){util$1.triggerElementEvent(this,'refresh',{carousel:this});}/**
     * @method setActiveIndex
     * @signature setActiveIndex(index, [options])
     * @param {Number} index
     *   [en]The index that the carousel should be set to.[/en]
     *   [ja]carousel要素のインデックスを指定します。[/ja]
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja][/ja]
     * @param {Function} [options.callback]
     *   [en]A function that will be called after the animation is finished.[/en]
     *   [ja][/ja]
     * @param {String} [options.animation]
     *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
     *   [ja][/ja]
     * @param {Object} [options.animationOptions]
     *   [en]An object that can be used to specify duration, delay and timing function of the animation.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Specify the index of the `<ons-carousel-item>` to show.[/en]
     *   [ja]表示するons-carousel-itemをindexで指定します。[/ja]
     * @return {Promise}
     *   [en]Resolves to the carousel element.[/en]
     *   [ja][/ja]
     */},{key:'setActiveIndex',value:function setActiveIndex(index){var _this3=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};options=_extends({animation:this.getAttribute('animation'),animationOptions:this.hasAttribute('animation-options')?util$1.animationOptionsParse(this.getAttribute('animation-options')):{duration:.3,timing:'cubic-bezier(.4, .7, .5, 1)'}},options);return this._swiper.setActiveIndex(index,options).then(function(){options.callback instanceof Function&&options.callback(_this3);return Promise.resolve(_this3);});}/**
     * @method getActiveIndex
     * @signature getActiveIndex()
     * @return {Number}
     *   [en]The current carousel item index.[/en]
     *   [ja]現在表示しているカルーセル要素のインデックスが返されます。[/ja]
     * @description
     *   [en]Returns the index of the currently visible `<ons-carousel-item>`.[/en]
     *   [ja]現在表示されているons-carousel-item要素のインデックスを返します。[/ja]
     */},{key:'getActiveIndex',value:function getActiveIndex(){return this._swiper.getActiveIndex();}/**
     * @method next
     * @signature next([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja][/ja]
     * @param {Function} [options.callback]
     *   [en]A function that will be executed after the animation has finished.[/en]
     *   [ja][/ja]
     * @param {String} [options.animation]
     *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
     *   [ja][/ja]
     * @param {Object} [options.animationOptions]
     *   [en]An object that can be used to specify the duration, delay and timing function of the animation.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the carousel element[/en]
     *   [ja][/ja]
     * @description
     *   [en]Show next `<ons-carousel-item>`.[/en]
     *   [ja]次のons-carousel-itemを表示します。[/ja]
     */},{key:'next',value:function next(options){return this.setActiveIndex(this.getActiveIndex()+1,options);}/**
     * @method prev
     * @signature prev([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja][/ja]
     * @param {Function} [options.callback]
     *   [en]A function that will be executed after the animation has finished.[/en]
     *   [ja][/ja]
     * @param {String} [options.animation]
     *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
     *   [ja][/ja]
     * @param {Object} [options.animationOptions]
     *   [en]An object that can be used to specify the duration, delay and timing function of the animation.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the carousel element[/en]
     *   [ja][/ja]
     * @description
     *   [en]Show previous `<ons-carousel-item>`.[/en]
     *   [ja]前のons-carousel-itemを表示します。[/ja]
     */},{key:'prev',value:function prev(options){return this.setActiveIndex(this.getActiveIndex()-1,options);}/**
     * @method first
     * @signature first()
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja][/ja]
     * @param {Function} [options.callback]
     *   [en]A function that will be executed after the animation has finished.[/en]
     *   [ja][/ja]
     * @param {String} [options.animation]
     *   [en]If this is set to `"none"`, the transitions will not be animated.[/en]
     *   [ja][/ja]
     * @param {Object} [options.animationOptions]
     *   [en]An object that can be used to specify the duration, delay and timing function of the animation.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the carousel element[/en]
     *   [ja][/ja]
     * @description
     *   [en]Show first `<ons-carousel-item>`.[/en]
     *   [ja]最初のons-carousel-itemを表示します。[/ja]
     */},{key:'first',value:function first(options){return this.setActiveIndex(0,options);}/**
     * @method last
     * @signature last()
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja][/ja]
     * @param {Function} [options.callback]
     *   [en]A function that will be executed after the animation has finished.[/en]
     *   [ja][/ja]
     * @param {String} [options.animation]
     *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
     *   [ja][/ja]
     * @param {Object} [options.animationOptions]
     *   [en]An object that can be used to specify the duration, delay and timing function of the animation.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the carousel element[/en]
     *   [ja]Resolves to the carousel element[/ja]
     * @description
     *   [en]Show last ons-carousel item.[/en]
     *   [ja]最後のons-carousel-itemを表示します。[/ja]
     */},{key:'last',value:function last(options){this.setActiveIndex(Math.max(this.itemCount-1,0),options);}/**
     * @method refresh
     * @signature refresh()
     * @description
     *   [en]Update the layout of the carousel. Used when adding `<ons-carousel-items>` dynamically or to automatically adjust the size.[/en]
     *   [ja]レイアウトや内部の状態を最新のものに更新します。ons-carousel-itemを動的に増やしたり、ons-carouselの大きさを動的に変える際に利用します。[/ja]
     */},{key:'refresh',value:function refresh(){this._swiper.refresh();}/**
     * @property itemCount
     * @readonly
     * @type {Number}
     * @description
     *   [en]The number of carousel items.[/en]
     *   [ja]カルーセル要素の数です。[/ja]
     */},{key:'itemCount',get:function get$$1(){return this._swiper.itemCount;}/**
     * @property swipeable
     * @type {Boolean}
     * @description
     *   [en]true if the carousel is swipeable.[/en]
     *   [ja]swipeableであればtrueを返します。[/ja]
     */},{key:'swipeable',get:function get$$1(){return this.hasAttribute('swipeable');},set:function set$$1(value){return util$1.toggleAttribute(this,'swipeable',value);}/**
     * @property onSwipe
     * @type {Function}
     * @description
     *   [en]Hook called whenever the user slides the carousel. It gets a decimal index and an animationOptions object as arguments.[/en]
     *   [ja][/ja]
     */},{key:'onSwipe',get:function get$$1(){return this._onSwipe;},set:function set$$1(value){if(value&&!(value instanceof Function)){util$1["throw"]('"onSwipe" must be a function');}this._onSwipe=value;}/**
     * @property autoScroll
     * @type {Boolean}
     * @description
     *   [en]true if auto scroll is enabled.[/en]
     *   [ja]オートスクロールが有効であればtrueを返します。[/ja]
     */},{key:'autoScroll',get:function get$$1(){return this.hasAttribute('auto-scroll');},set:function set$$1(value){return util$1.toggleAttribute(this,'auto-scroll',value);}},{key:'vertical',get:function get$$1(){return this.getAttribute('direction')==='vertical';}},{key:'itemSize',get:function get$$1(){var itemSizeAttr=(this.getAttribute('item-'+(this.vertical?'height':'width'))||'').trim();return itemSizeAttr.match(/^\d+(px|%)$/)?itemSizeAttr:'100%';}/**
     * @property autoScrollRatio
     * @type {Number}
     * @description
     *   [en]The current auto scroll ratio. [/en]
     *   [ja]現在のオートスクロールのratio値。[/ja]
     */},{key:'autoScrollRatio',get:function get$$1(){return parseFloat(this.getAttribute('auto-scroll-ratio'));},set:function set$$1(ratio){this.setAttribute('auto-scroll-ratio',ratio);}/**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the carousel is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */},{key:'disabled',get:function get$$1(){return this.hasAttribute('disabled');},set:function set$$1(value){return util$1.toggleAttribute(this,'disabled',value);}/**
     * @property overscrollable
     * @type {Boolean}
     * @description
     *   [en]Whether the carousel is overscrollable or not.[/en]
     *   [ja]overscrollできればtrueを返します。[/ja]
     */},{key:'overscrollable',get:function get$$1(){return this.hasAttribute('overscrollable');},set:function set$$1(value){return util$1.toggleAttribute(this,'overscrollable',value);}/**
     * @property centered
     * @type {Boolean}
     * @description
     *   [en]Whether the carousel is centered or not.[/en]
     *   [ja]centered状態になっていればtrueを返します。[/ja]
     */},{key:'centered',get:function get$$1(){return this.hasAttribute('centered');},set:function set$$1(value){return util$1.toggleAttribute(this,'centered',value);}}],[{key:'observedAttributes',get:function get$$1(){return['swipeable','auto-refresh','direction','item-height','item-width'];}},{key:'events',get:function get$$1(){return['postchange','refresh','overscroll'];}}]);return CarouselElement;}(BaseElement);onsElements.Carousel=CarouselElement;customElements.define('ons-carousel',CarouselElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @element ons-col
 * @category grid
 * @description
 *   [en]Represents a column in the grid system. Use with `<ons-row>` to layout components.[/en]
 *   [ja]グリッドシステムにて列を定義します。ons-rowとともに使用し、コンポーネントのレイアウトに利用します。[/ja]
 * @note
 *   [en]For Android 4.3 and earlier, and iOS6 and earlier, when using mixed alignment with ons-row and ons-column, they may not be displayed correctly. You can use only one alignment.[/en]
 *   [ja]Android 4.3以前、もしくはiOS 6以前のOSの場合、ons-rowとons-columnを組み合わせた場合に描画が崩れる場合があります。[/ja]
 * @codepen GgujC {wide}
 * @guide theming.html [en]Layouting guide[/en][ja]レイアウト機能[/ja]
 * @seealso ons-row
 *   [en]The `<ons-row>` component is the parent of `<ons-col>`.[/en]
 *   [ja]ons-rowコンポーネント[/ja]
 * @example
 * <ons-row>
 *   <ons-col width="50px"><ons-icon icon="fa-twitter"></ons-icon></ons-col>
 *   <ons-col>Text</ons-col>
 * </ons-row>
 */ /**
 * @attribute vertical-align
 * @type {String}
 * @description
 *   [en]Vertical alignment of the column. Valid values are "top", "center", and "bottom".[/en]
 *   [ja]縦の配置を指定する。"top", "center", "bottom"のいずれかを指定します。[/ja]
 */ /**
 * @attribute width
 * @type {String}
 * @description
 *   [en]The width of the column. Valid values are css width values ("10%", "50px").[/en]
 *   [ja]カラムの横幅を指定する。パーセントもしくはピクセルで指定します（10%や50px）。[/ja]
 */var ColElement=function(_BaseElement){inherits(ColElement,_BaseElement);function ColElement(){classCallCheck(this,ColElement);var _this=possibleConstructorReturn(this,(ColElement.__proto__||Object.getPrototypeOf(ColElement)).call(this));if(_this.getAttribute('width')){_this._updateWidth();}return _this;}createClass(ColElement,[{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){if(name==='width'){this._updateWidth();}}},{key:'_updateWidth',value:function _updateWidth(){var width=this.getAttribute('width');if(!width){styler.clear(this,'flex maxWidth');}else{width=width.trim().match(/^\d+$/)?width+'%':width;styler(this,{flex:'0 0 '+width,maxWidth:width});}}}],[{key:'observedAttributes',get:function get$$1(){return['width'];}}]);return ColElement;}(BaseElement);onsElements.Col=ColElement;customElements.define('ons-col',ColElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var DialogAnimator=function(_BaseAnimator){inherits(DialogAnimator,_BaseAnimator);function DialogAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'linear':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.2:_ref$duration;classCallCheck(this,DialogAnimator);return possibleConstructorReturn(this,(DialogAnimator.__proto__||Object.getPrototypeOf(DialogAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));}/**
   * @param {HTMLElement} dialog
   * @param {Function} done
   */createClass(DialogAnimator,[{key:'show',value:function show(dialog,done){done();}/**
     * @param {HTMLElement} dialog
     * @param {Function} done
     */},{key:'hide',value:function hide(dialog,done){done();}}]);return DialogAnimator;}(BaseAnimator);/**
 * Android style animator for dialog.
 */var AndroidDialogAnimator=function(_DialogAnimator){inherits(AndroidDialogAnimator,_DialogAnimator);function AndroidDialogAnimator(){var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref2$timing=_ref2.timing,timing=_ref2$timing===undefined?'ease-in-out':_ref2$timing,_ref2$delay=_ref2.delay,delay=_ref2$delay===undefined?0:_ref2$delay,_ref2$duration=_ref2.duration,duration=_ref2$duration===undefined?0.3:_ref2$duration;classCallCheck(this,AndroidDialogAnimator);return possibleConstructorReturn(this,(AndroidDialogAnimator.__proto__||Object.getPrototypeOf(AndroidDialogAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));}/**
   * @param {Object} dialog
   * @param {Function} callback
   */createClass(AndroidDialogAnimator,[{key:'show',value:function show(dialog,callback){callback=callback?callback:function(){};Animit.runAll(Animit(dialog._mask,this.def)["default"]({opacity:0},{opacity:1}),Animit(dialog._dialog,this.def)["default"]({transform:'translate3d(-50%, -60%, 0)',opacity:0},{transform:'translate3d(-50%, -50%, 0)',opacity:1}).queue(function(done){callback();done();}));}/**
     * @param {Object} dialog
     * @param {Function} callback
     */},{key:'hide',value:function hide(dialog,callback){callback=callback?callback:function(){};Animit.runAll(Animit(dialog._mask,this.def)["default"]({opacity:1},{opacity:0}),Animit(dialog._dialog,this.def)["default"]({transform:'translate3d(-50%, -50%, 0)',opacity:1},{transform:'translate3d(-50%, -60%, 0)',opacity:0}).queue(function(done){callback();done();}));}}]);return AndroidDialogAnimator;}(DialogAnimator);/**
 * iOS style animator for dialog.
 */var IOSDialogAnimator=function(_DialogAnimator2){inherits(IOSDialogAnimator,_DialogAnimator2);function IOSDialogAnimator(){var _ref3=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref3$timing=_ref3.timing,timing=_ref3$timing===undefined?'ease-in-out':_ref3$timing,_ref3$delay=_ref3.delay,delay=_ref3$delay===undefined?0:_ref3$delay,_ref3$duration=_ref3.duration,duration=_ref3$duration===undefined?0.2:_ref3$duration;classCallCheck(this,IOSDialogAnimator);var _this3=possibleConstructorReturn(this,(IOSDialogAnimator.__proto__||Object.getPrototypeOf(IOSDialogAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));_this3.bodyHeight=document.body.clientHeight;// avoid Forced Synchronous Layout
return _this3;}/**
   * @param {Object} dialog
   * @param {Function} callback
   */createClass(IOSDialogAnimator,[{key:'show',value:function show(dialog,callback){callback=callback?callback:function(){};Animit.runAll(Animit(dialog._mask,this.def)["default"]({opacity:0},{opacity:1}),Animit(dialog._dialog,this.def)["default"]({transform:'translate3d(-50%, '+(this.bodyHeight/2.0-1)+'px, 0)'},{transform:'translate3d(-50%, -50%, 0)'}).queue(function(done){callback();done();}));}/**
     * @param {Object} dialog
     * @param {Function} callback
     */},{key:'hide',value:function hide(dialog,callback){callback=callback?callback:function(){};Animit.runAll(Animit(dialog._mask,this.def)["default"]({opacity:1},{opacity:0}),Animit(dialog._dialog,this.def)["default"]({transform:'translate3d(-50%, -50%, 0)'},{transform:'translate3d(-50%, '+(this.bodyHeight/2.0-1)+'px, 0)'}).queue(function(done){callback();done();}));}}]);return IOSDialogAnimator;}(DialogAnimator);/**
 * Slide animator for dialog.
 */var SlideDialogAnimator=function(_DialogAnimator3){inherits(SlideDialogAnimator,_DialogAnimator3);function SlideDialogAnimator(){var _ref4=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref4$timing=_ref4.timing,timing=_ref4$timing===undefined?'cubic-bezier(.1, .7, .4, 1)':_ref4$timing,_ref4$delay=_ref4.delay,delay=_ref4$delay===undefined?0:_ref4$delay,_ref4$duration=_ref4.duration,duration=_ref4$duration===undefined?0.2:_ref4$duration;classCallCheck(this,SlideDialogAnimator);var _this4=possibleConstructorReturn(this,(SlideDialogAnimator.__proto__||Object.getPrototypeOf(SlideDialogAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));_this4.bodyHeight=document.body.clientHeight;// avoid Forced Synchronous Layout
return _this4;}/**
   * @param {Object} dialog
   * @param {Function} callback
   */createClass(SlideDialogAnimator,[{key:'show',value:function show(dialog,callback){callback=callback?callback:function(){};Animit.runAll(Animit(dialog._mask,this.def)["default"]({opacity:0},{opacity:1}),Animit(dialog._dialog,this.def)["default"](// FIXME: This should avoid Forced Synchronous Layout. Otherwise, fade animation of mask will be broken.
{transform:'translate3d(-50%, '+(-(this.bodyHeight/2.0)+1-dialog._dialog.clientHeight)+'px, 0)'},{transform:'translate3d(-50%, -50%, 0)'}).queue(function(done){callback();done();}));}/**
     * @param {Object} dialog
     * @param {Function} callback
     */},{key:'hide',value:function hide(dialog,callback){callback=callback?callback:function(){};Animit.runAll(Animit(dialog._mask,this.def)["default"]({opacity:1},{opacity:0}),Animit(dialog._dialog,this.def)["default"]({transform:'translate3d(-50%, -50%, 0)'},// FIXME: This should avoid Forced Synchronous Layout. Otherwise, fade animation of mask will be broken.
{transform:'translate3d(-50%, '+(-(this.bodyHeight/2.0)+1-dialog._dialog.clientHeight)+'px, 0)'}).queue(function(done){callback();done();}));}}]);return SlideDialogAnimator;}(DialogAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var scheme$6={'.dialog':'dialog--*','.dialog-container':'dialog-container--*','.dialog-mask':'dialog-mask--*'};var _animatorDict$2={'default':function _default(){return platform.isAndroid()?AndroidDialogAnimator:IOSDialogAnimator;},'slide':SlideDialogAnimator,'none':DialogAnimator};/**
 * @element ons-dialog
 * @category dialog
 * @description
 *   [en]
 *     Dialog that is displayed on top of current screen. As opposed to the `<ons-alert-dialog>` element, this component can contain any kind of content.
 *
 *     To use the element it can either be attached directly to the `<body>` element or dynamically created from a template using the `ons.createDialog(template)` utility function and the `<template>` tag.
 *
 *     The dialog is useful for displaying menus, additional information or to ask the user to make a decision.
 *
 *     It will automatically be displayed as Material Design when running on an Android device.
 *   [/en]
 *   [ja][/ja]
 * @modifier material
 *   [en]Display a Material Design dialog.[/en]
 *   [ja]マテリアルデザインのダイアログを表示します。[/ja]
 * @codepen zxxaGa
 * @tutorial vanilla/Reference/dialog
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @seealso ons-alert-dialog
 *   [en]`<ons-alert-dialog>` component[/en]
 *   [ja]ons-alert-dialogコンポーネント[/ja]
 * @seealso ons-popover
 *   [en]`<ons-popover>` component[/en]
 *   [ja]ons-popoverコンポーネント[/ja]
 * @seealso ons-modal
 *   [en]`<ons-modal>` component[/en]
 *   [ja]ons-modalコンポーネント[/ja]
 * @example
 * <ons-dialog id="dialog">
 *   <p>This is a dialog!</p>
 * </ons-dialog>
 *
 * <script>
 *   document.getElementById('dialog').show();
 * </script>
 */var DialogElement=function(_BaseDialogElement){inherits(DialogElement,_BaseDialogElement);/**
   * @event preshow
   * @description
   * [en]Fired just before the dialog is displayed.[/en]
   * [ja]ダイアログが表示される直前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.dialog
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Execute this function to stop the dialog from being shown.[/en]
   *   [ja]この関数を実行すると、ダイアログの表示がキャンセルされます。[/ja]
   */ /**
   * @event postshow
   * @description
   * [en]Fired just after the dialog is displayed.[/en]
   * [ja]ダイアログが表示された直後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.dialog
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */ /**
   * @event prehide
   * @description
   * [en]Fired just before the dialog is hidden.[/en]
   * [ja]ダイアログが隠れる直前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.dialog
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Execute this function to stop the dialog from being hidden.[/en]
   *   [ja]この関数を実行すると、ダイアログの非表示がキャンセルされます。[/ja]
   */ /**
   * @event posthide
   * @description
   * [en]Fired just after the dialog is hidden.[/en]
   * [ja]ダイアログが隠れた後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.dialog
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */ /**
   * @attribute modifier
   * @type {String}
   * @description
   *  [en]The appearance of the dialog.[/en]
   *  [ja]ダイアログの表現を指定します。[/ja]
   */ /**
   * @attribute cancelable
   * @description
   *  [en]If this attribute is set the dialog can be closed by tapping the background or by pressing the back button on Android devices.[/en]
   *  [ja][/ja]
   */ /**
   * @attribute disabled
   * @description
   *  [en]If this attribute is set the dialog is disabled.[/en]
   *  [ja]この属性がある時、ダイアログはdisabled状態になります。[/ja]
   */ /**
   * @attribute animation
   * @type {String}
   * @default default
   * @description
   *  [en]The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.[/en]
   *  [ja]ダイアログを表示する際のアニメーション名を指定します。"none"もしくは"default"を指定できます。[/ja]
   */ /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`[/ja]
   */ /**
   * @attribute mask-color
   * @type {String}
   * @default rgba(0, 0, 0, 0.2)
   * @description
   *  [en]Color of the background mask. Default is `"rgba(0, 0, 0, 0.2)"`.[/en]
   *  [ja]背景のマスクの色を指定します。"rgba(0, 0, 0, 0.2)"がデフォルト値です。[/ja]
   */function DialogElement(){classCallCheck(this,DialogElement);var _this=possibleConstructorReturn(this,(DialogElement.__proto__||Object.getPrototypeOf(DialogElement)).call(this));contentReady(_this,function(){return _this._compile();});return _this;}createClass(DialogElement,[{key:'_updateAnimatorFactory',value:function _updateAnimatorFactory(){return new AnimatorFactory({animators:_animatorDict$2,baseClass:DialogAnimator,baseClassName:'DialogAnimator',defaultAnimation:this.getAttribute('animation')});}},{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.style.display='none';this.style.zIndex=10001;/* Expected result:
       *   <ons-dialog>
       *     <div class="dialog-mask"></div>
       *     <div class="dialog">
       *       <div class="dialog-container">...</div>
       *     </div>
       *   </ons-dialog>
       */if(!this._dialog){var dialog=document.createElement('div');dialog.classList.add('dialog');var container=document.createElement('div');container.classList.add('dialog-container');while(this.firstChild){container.appendChild(this.firstChild);}dialog.appendChild(container);this.appendChild(dialog);}if(!this._mask){var mask=document.createElement('div');mask.classList.add('dialog-mask');this.insertBefore(mask,this.firstChild);}this._dialog.style.zIndex=20001;this._mask.style.zIndex=20000;this.setAttribute('status-bar-fill','');ModifierUtil.initModifier(this,this._scheme);}/**
     * @property onDeviceBackButton
     * @type {Object}
     * @description
     *   [en]Back-button handler.[/en]
     *   [ja]バックボタンハンドラ。[/ja]
     */ /**
     * @method show
     * @signature show([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"none"` and `"slide"`.[/en]
     *   [ja]アニメーション名を指定します。"none", "slide"のいずれかを指定します。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}` [/ja]
     * @param {Function} [options.callback]
     *   [en]This function is called after the dialog has been revealed.[/en]
     *   [ja]ダイアログが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *  [en]Show the dialog.[/en]
     *  [ja]ダイアログを開きます。[/ja]
     * @return {Promise} Resolves to the displayed element.
     */ /**
     * @method hide
     * @signature hide([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"none"` and `"slide"`.[/en]
     *   [ja]アニメーション名を指定します。"none", "slide"のいずれかを指定できます。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`[/ja]
     * @param {Function} [options.callback]
     *   [en]This functions is called after the dialog has been hidden.[/en]
     *   [ja]ダイアログが隠れた後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Hide the dialog.[/en]
     *   [ja]ダイアログを閉じます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the hidden element[/en]
     *   [ja][/ja]
     */ /**
     * @property visible
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the dialog is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */ /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the dialog is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */ /**
     * @property cancelable
     * @type {Boolean}
     * @description
     *   [en]Whether the dialog is cancelable or not. A cancelable dialog can be closed by tapping the background or by pressing the back button on Android devices.[/en]
     *   [ja][/ja]
     */ /**
     * @param {String} name
     * @param {DialogAnimator} Animator
     */},{key:'_scheme',get:function get$$1(){return scheme$6;}},{key:'_mask',get:function get$$1(){return util$1.findChild(this,'.dialog-mask');}},{key:'_dialog',get:function get$$1(){return util$1.findChild(this,'.dialog');}}],[{key:'registerAnimator',value:function registerAnimator(name,Animator){if(!(Animator.prototype instanceof DialogAnimator)){util$1.throwAnimator('Dialog');}_animatorDict$2[name]=Animator;}},{key:'animators',get:function get$$1(){return _animatorDict$2;}},{key:'DialogAnimator',get:function get$$1(){return DialogAnimator;}}]);return DialogElement;}(BaseDialogElement);onsElements.Dialog=DialogElement;customElements.define('ons-dialog',DialogElement);/*
Copyright 2013-2015 ASIAL CORPORATION
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/var defaultClassName$3='fab';var scheme$7={'':'fab--*','.fab__icon':'fab--*__icon'};/**
 * @element ons-fab
 * @category form
 * @description
 *   [en]
 *     The Floating action button is a circular button defined in the [Material Design specification](https://www.google.com/design/spec/components/buttons-floating-action-button.html). They are often used to promote the primary action of the app.
 *
 *     It can be displayed either as an inline element or in one of the corners. Normally it will be positioned in the lower right corner of the screen.
 *   [/en]
 *   [ja][/ja]
 * @tutorial vanilla/Reference/fab
 * @modifier mini
 *   [en]Makes the `ons-fab` smaller.[/en]
 *   [ja][/ja]
 * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
 * @seealso ons-speed-dial
 *   [en]The `<ons-speed-dial>` component is a Floating action button that displays a menu when tapped.[/en]
 *   [ja][/ja]
 */var FabElement=function(_BaseElement){inherits(FabElement,_BaseElement);/**
   * @attribute modifier
   * @type {String}
   * @description
   *  [en]The appearance of the button.[/en]
   *  [ja]ボタンの表現を指定します。[/ja]
   */ /**
   * @attribute ripple
   * @description
   *  [en]If this attribute is defined, the button will have a ripple effect when tapped.[/en]
   *  [ja][/ja]
   */ /**
   * @attribute position
   * @type {String}
   * @description
   *  [en]The position of the button. Should be a string like `"bottom right"` or `"top left"`. If this attribute is not defined it will be displayed as an inline element.[/en]
   *  [ja][/ja]
   */ /**
   * @attribute disabled
   * @description
   *   [en]Specify if button should be disabled.[/en]
   *   [ja]ボタンを無効化する場合は指定します。[/ja]
   */function FabElement(){classCallCheck(this,FabElement);// The following statements can be executed before contentReady
// since these do not access the children
var _this=possibleConstructorReturn(this,(FabElement.__proto__||Object.getPrototypeOf(FabElement)).call(this));_this._hide();_this.classList.add(defaultClassName$3);contentReady(_this,function(){_this._compile();});return _this;}createClass(FabElement,[{key:'_compile',value:function _compile(){autoStyle.prepare(this);if(!util$1.findChild(this,'.fab__icon')){var content=document.createElement('span');content.classList.add('fab__icon');util$1.arrayFrom(this.childNodes).forEach(function(element){if(!element.tagName||element.tagName.toLowerCase()!=='ons-ripple'){content.appendChild(element);}});this.appendChild(content);}this._updateRipple();ModifierUtil.initModifier(this,scheme$7);this._updatePosition();}},{key:'connectedCallback',value:function connectedCallback(){var _this2=this;setImmediate(function(){return _this2._show();});}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'class':util$1.restoreClass(this,defaultClassName$3,scheme$7);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$7);break;case'ripple':this._updateRipple();break;case'position':this._updatePosition();break;}}},{key:'_show',value:function _show(){if(!this._manuallyHidden){// if user has not called ons-fab.hide()
this._toggle(true);}}},{key:'_hide',value:function _hide(){var _this3=this;setImmediate(function(){return _this3._toggle(false);});}},{key:'_updateRipple',value:function _updateRipple(){util$1.updateRipple(this);}},{key:'_updatePosition',value:function _updatePosition(){var position=this.getAttribute('position');this.classList.remove('fab--top__left','fab--bottom__right','fab--bottom__left','fab--top__right','fab--top__center','fab--bottom__center');switch(position){case'top right':case'right top':this.classList.add('fab--top__right');break;case'top left':case'left top':this.classList.add('fab--top__left');break;case'bottom right':case'right bottom':this.classList.add('fab--bottom__right');break;case'bottom left':case'left bottom':this.classList.add('fab--bottom__left');break;case'center top':case'top center':this.classList.add('fab--top__center');break;case'center bottom':case'bottom center':this.classList.add('fab--bottom__center');break;default:break;}}/**
     * @method show
     * @signature show()
     * @description
     *  [en]Show the floating action button.[/en]
     *  [ja][/ja]
     */},{key:'show',value:function show(){this.toggle(true);}/**
     * @method hide
     * @signature hide()
     * @description
     *  [en]Hide the floating action button.[/en]
     *  [ja][/ja]
     */},{key:'hide',value:function hide(){this.toggle(false);}/**
     * @method toggle
     * @signature toggle()
     * @description
     *   [en]Toggle the visibility of the button.[/en]
     *   [ja][/ja]
     */},{key:'toggle',value:function toggle(){var action=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!this.visible;this._manuallyHidden=!action;this._toggle(action);}},{key:'_toggle',value:function _toggle(){var action=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!this.visible;var isBottom=(this.getAttribute('position')||'').indexOf('bottom')>=0;var translate=isBottom?'translate3d(0px, -'+(util$1.globals.fabOffset||0)+'px, 0px)':'';styler(this,{transform:translate+' scale('+Number(action)+')'});}/**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */},{key:'disabled',set:function set$$1(value){return util$1.toggleAttribute(this,'disabled',value);},get:function get$$1(){return this.hasAttribute('disabled');}/**
     * @property visible
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the element is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */},{key:'visible',get:function get$$1(){return this.style.transform.indexOf('scale(0)')===-1&&this.style.display!=='none';}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','ripple','position','class'];}}]);return FabElement;}(BaseElement);onsElements.Fab=FabElement;customElements.define('ons-fab',FabElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @element ons-gesture-detector
 * @category gesture
 * @description
 *   [en]
 *     Component to detect finger gestures within the wrapped element. Following gestures are supported:
 *     - Drag gestures: `drag`, `dragleft`, `dragright`, `dragup`, `dragdown`
 *     - Hold gestures: `hold`, `release`
 *     - Swipe gestures: `swipe`, `swipeleft`, `swiperight`, `swipeup`, `swipedown`
 *     - Tap gestures: `tap`, `doubletap`
 *     - Pinch gestures: `pinch`, `pinchin`, `pinchout`
 *     - Other gestures: `touch`, `transform`, `rotate`
 *   [/en]
 *   [ja]要素内のジェスチャー操作を検知します。詳しくはガイドを参照してください。[/ja]
 * @guide features.html#gesture-detection
 *   [en]Detecting finger gestures[/en]
 *   [ja]ジェスチャー操作の検知[/ja]
 * @example
 * <ons-gesture-detector>
 *   <div id="detect-area" style="width: 100px; height: 100px;">
 *     Swipe Here
 *   </div>
 * </ons-gesture-detector>
 *
 * <script>
 *   document.addEventListener('swipeleft', function(event) {
 *     if (event.target.matches('#detect-area')) {
 *       console.log('Swipe left is detected.');
 *     }
 *   });
 * </script>
 */var GestureDetectorElement=function(_BaseElement){inherits(GestureDetectorElement,_BaseElement);function GestureDetectorElement(){classCallCheck(this,GestureDetectorElement);var _this=possibleConstructorReturn(this,(GestureDetectorElement.__proto__||Object.getPrototypeOf(GestureDetectorElement)).call(this));_this._gestureDetector=new GestureDetector(_this,{passive:true});return _this;}return GestureDetectorElement;}(BaseElement);onsElements.GestureDetector=GestureDetectorElement;customElements.define('ons-gesture-detector',GestureDetectorElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var autoPrefix='fa';// FIXME: To be removed in v3
/**
 * @element ons-icon
 * @category visual
 * @description
 *   [en]
 *     Displays an icon. The following icon suites are available:
 *
 *     * [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
 *     * [Ionicons](http://ionicons.com/)
 *     * [Material Design Iconic Font](http://zavoloklom.github.io/material-design-iconic-font/)
 *   [/en]
 *   [ja][/ja]
 * @codepen xAhvg
 * @tutorial vanilla/Reference/icon
 * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja][/ja]
 * @guide appsize.html#removing-icon-packs [en]Removing icon packs.[/en][ja][/ja]
 * @guide faq.html#how-can-i-use-custom-icon-packs [en]Adding custom icon packs.[/en][ja][/ja]
 * @example
 * <ons-icon
 *   icon="md-car"
 *   size="20px"
 *   style="color: red">
 * </ons-icon>
 *
 * <ons-button>
 *   <ons-icon icon="md-car"></ons-icon>
 *   Car
 * </ons-button>
 */var IconElement=function(_BaseElement){inherits(IconElement,_BaseElement);/**
   * @attribute icon
   * @type {String}
   * @description
   *   [en]
   *     The icon name. `"md-"` prefix for Material Icons, `"fa-"` for Font Awesome and `"ion-"` prefix for Ionicons.
   *
   *     See all available icons on the element description (at the top).
   *
   *     Icons can also be styled based on modifier presence. Add comma-separated icons with `"modifierName:"` prefix.
   *
   *     The code `<ons-icon icon="ion-edit, material:md-edit"></ons-icon>` will display `"md-edit"` for Material Design and `"ion-edit"` as the default icon.
   *
   *     `fa-` prefix is added automatically if none is provided. Check [See also](#seealso) section for more information.
   *   [/en]
   *   [ja][/ja]
   */ /**
   * @attribute size
   * @type {String}
   * @description
   *   [en]
   *     The sizes of the icon. Valid values are lg, 2x, 3x, 4x, 5x, or in the size in pixels.
   *     Icons can also be styled based on modifier presence. Add comma-separated icons with `"modifierName:"` prefix.
   *
   *     The code:
   *
   *     ```
   *     <ons-icon
   *       icon="ion-edit"
   *       size="32px, material:24px">
   *     </ons-icon>
   *     ```
   *
   *     will render as a `24px` icon if the `"material"` modifier is present and `32px` otherwise.
   *   [/en]
   *   [ja][/ja]
   */ /**
   * @attribute rotate
   * @type {Number}
   * @description
   *   [en]Number of degrees to rotate the icon. Valid values are 90, 180 and 270.[/en]
   *   [ja]アイコンを回転して表示します。90, 180, 270から指定できます。[/ja]
   */ /**
   * @attribute fixed-width
   * @type {Boolean}
   * @default false
   * @description
   *  [en]When used in a list, you want the icons to have the same width so that they align vertically by defining this attribute.[/en]
   *  [ja][/ja]
   */ /**
   * @attribute spin
   * @description
   *   [en]Specify whether the icon should be spinning.[/en]
   *   [ja]アイコンを回転するかどうかを指定します。[/ja]
   */function IconElement(){classCallCheck(this,IconElement);var _this=possibleConstructorReturn(this,(IconElement.__proto__||Object.getPrototypeOf(IconElement)).call(this));contentReady(_this,function(){_this._compile();});return _this;}createClass(IconElement,[{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){this._cleanClassAttribute(name==='icon'?last:this.getAttribute('icon'),name==='modifier'?last:undefined);this._update();}},{key:'_compile',value:function _compile(){autoStyle.prepare(this);this._update();}},{key:'_update',value:function _update(){var _this2=this;var _buildClassAndStyle2=this._buildClassAndStyle(this._parseAttr('icon'),this._parseAttr('size')),classList=_buildClassAndStyle2.classList,style=_buildClassAndStyle2.style;util$1.extend(this.style,style);classList.forEach(function(className){return _this2.classList.add(className);});}},{key:'_parseAttr',value:function _parseAttr(attrName){var modifier=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.getAttribute('modifier')||'';var attr=this.getAttribute(attrName)||attrName||'';var parts=attr.split(/\s*,\s*/);var def=parts[0];var md=parts[1];md=(md||'').split(/\s*:\s*/);return(modifier&&RegExp('(^|\\s+)'+md[0]+'($|\\s+)','i').test(modifier)?md[1]:def)||'';}/**
     * Remove unneeded class value.
     */},{key:'_cleanClassAttribute',value:function _cleanClassAttribute(lastIcon,lastModifier){var _this3=this;var _prefixIcon2=this._prefixIcon(this._parseAttr(lastIcon,lastModifier)),className=_prefixIcon2.className,prefix=_prefixIcon2.prefix;var customPrefixRE=className!==prefix?'|'+prefix+'$|'+prefix+'-':'|'+className+'$'||'';var re=new RegExp('^(fa$|fa-|ion-|zmdi$|zmdi-|ons-icon--'+customPrefixRE+')');util$1.arrayFrom(this.classList).filter(function(className){return re.test(className);}).forEach(function(className){return _this3.classList.remove(className);});}},{key:'_prefixIcon',value:function _prefixIcon(iconName){var className=autoPrefix+(autoPrefix?'-':'')+iconName;return{className:className,prefix:className.split('-')[0]};}},{key:'_buildClassAndStyle',value:function _buildClassAndStyle(iconName,size){var classList=['ons-icon'];var style={};// Icon
if(iconName.indexOf('ion-')===0){classList.push(iconName);classList.push('ons-icon--ion');}else if(iconName.indexOf('fa-')===0){classList.push(iconName);// default icon style to Font Awesome Solid if icon style is not specified already
if(!(this.classList.contains('far')||this.classList.contains('fab')||this.classList.contains('fal'))){classList.push('fa');}}else if(iconName.indexOf('md-')===0){classList.push('zmdi');classList.push('zmdi-'+iconName.split(/-(.+)?/)[1]);}else{var _prefixIcon3=this._prefixIcon(iconName),className=_prefixIcon3.className,prefix=_prefixIcon3.prefix;prefix&&classList.push(prefix);className&&classList.push(className);}// Size
if(size.match(/^[1-5]x|lg$/)){classList.push('ons-icon--'+size);this.style.removeProperty('font-size');}else{style.fontSize=size;}return{classList:classList,style:style};}}],[{key:'setAutoPrefix',value:function setAutoPrefix(prefix){autoPrefix=prefix?typeof prefix==='string'&&prefix||'fa':'';}},{key:'observedAttributes',get:function get$$1(){return['icon','size','modifier','class'];}}]);return IconElement;}(BaseElement);onsElements.Icon=IconElement;customElements.define('ons-icon',IconElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var LazyRepeatDelegate=function(){function LazyRepeatDelegate(userDelegate){var templateElement=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;classCallCheck(this,LazyRepeatDelegate);if((typeof userDelegate==='undefined'?'undefined':_typeof(userDelegate))!=='object'||userDelegate===null){util$1["throw"]('"delegate" parameter must be an object');}this._userDelegate=userDelegate;if(!(templateElement instanceof Element)&&templateElement!==null){util$1["throw"]('"templateElement" parameter must be an instance of Element or null');}this._templateElement=templateElement;}createClass(LazyRepeatDelegate,[{key:'hasRenderFunction',/**
     * @return {Boolean}
     */value:function hasRenderFunction(){return this._userDelegate._render instanceof Function;}/**
     * @return {void}
     */},{key:'_render',value:function _render(){this._userDelegate._render.apply(this._userDelegate,arguments);}/**
     * @param {Number} index
     * @param {Function} done A function that take item object as parameter.
     */},{key:'loadItemElement',value:function loadItemElement(index,done){if(this._userDelegate.loadItemElement instanceof Function){this._userDelegate.loadItemElement(index,done);}else{var element=this._userDelegate.createItemContent(index,this._templateElement);if(!(element instanceof Element)){util$1["throw"]('"createItemContent" must return an instance of Element');}done({element:element});}}/**
     * @return {Number}
     */},{key:'countItems',value:function countItems(){var count=this._userDelegate.countItems();if(typeof count!=='number'){util$1["throw"]('"countItems" must return a number');}return count;}/**
     * @param {Number} index
     * @param {Object} item
     * @param {Element} item.element
     */},{key:'updateItem',value:function updateItem(index,item){if(this._userDelegate.updateItemContent instanceof Function){this._userDelegate.updateItemContent(index,item);}}/**
     * @return {Number}
     */},{key:'calculateItemHeight',value:function calculateItemHeight(index){if(this._userDelegate.calculateItemHeight instanceof Function){var height=this._userDelegate.calculateItemHeight(index);if(typeof height!=='number'){util$1["throw"]('"calculateItemHeight" must return a number');}return height;}return 0;}/**
     * @param {Number} index
     * @param {Object} item
     */},{key:'destroyItem',value:function destroyItem(index,item){if(this._userDelegate.destroyItem instanceof Function){this._userDelegate.destroyItem(index,item);}}/**
     * @return {void}
     */},{key:'destroy',value:function destroy(){if(this._userDelegate.destroy instanceof Function){this._userDelegate.destroy();}this._userDelegate=this._templateElement=null;}},{key:'itemHeight',get:function get$$1(){return this._userDelegate.itemHeight;}}]);return LazyRepeatDelegate;}();/**
 * This class provide core functions for ons-lazy-repeat.
 */var LazyRepeatProvider=function(){/**
   * @param {Element} wrapperElement
   * @param {LazyRepeatDelegate} delegate
   */function LazyRepeatProvider(wrapperElement,delegate){classCallCheck(this,LazyRepeatProvider);if(!(delegate instanceof LazyRepeatDelegate)){util$1["throw"]('"delegate" parameter must be an instance of LazyRepeatDelegate');}this._wrapperElement=wrapperElement;this._delegate=delegate;this._insertIndex=this._wrapperElement.children[0]&&this._wrapperElement.children[0].tagName==='ONS-LAZY-REPEAT'?1:0;if(wrapperElement.tagName.toLowerCase()==='ons-list'){wrapperElement.classList.add('lazy-list');}this._pageContent=this._findPageContentElement(wrapperElement);if(!this._pageContent){util$1["throw"]('LazyRepeat must be descendant of a Page element');}this.lastScrollTop=this._pageContent.scrollTop;this.padding=0;this._topPositions=[0];this._renderedItems={};if(!this._delegate.itemHeight&&!this._delegate.calculateItemHeight(0)){this._unknownItemHeight=true;}this._addEventListeners();this._onChange();}createClass(LazyRepeatProvider,[{key:'_findPageContentElement',value:function _findPageContentElement(wrapperElement){var pageContent=util$1.findParent(wrapperElement,'.page__content');if(pageContent){return pageContent;}var page=util$1.findParent(wrapperElement,'ons-page');if(page){var content=util$1.findChild(page,'.content');if(content){return content;}}return null;}},{key:'_checkItemHeight',value:function _checkItemHeight(callback){var _this=this;this._delegate.loadItemElement(0,function(item){if(!_this._unknownItemHeight){util$1["throw"]('Invalid state');}_this._wrapperElement.appendChild(item.element);var done=function done(){_this._delegate.destroyItem(0,item);item.element&&item.element.remove();delete _this._unknownItemHeight;callback();};_this._itemHeight=item.element.offsetHeight;if(_this._itemHeight>0){done();return;}// retry to measure offset height
// dirty fix for angular2 directive
_this._wrapperElement.style.visibility='hidden';item.element.style.visibility='hidden';setImmediate(function(){_this._itemHeight=item.element.offsetHeight;if(_this._itemHeight==0){util$1["throw"]('Invalid state: "itemHeight" must be greater than zero');}_this._wrapperElement.style.visibility='';done();});});}},{key:'_countItems',value:function _countItems(){return this._delegate.countItems();}},{key:'_getItemHeight',value:function _getItemHeight(i){// Item is rendered
if(this._renderedItems.hasOwnProperty(i)){if(!this._renderedItems[i].hasOwnProperty('height')){this._renderedItems[i].height=this._renderedItems[i].element.offsetHeight;}return this._renderedItems[i].height;}// Item is not rendered, scroll up
if(this._topPositions[i+1]&&this._topPositions[i]){return this._topPositions[i+1]-this._topPositions[i];}// Item is not rendered, scroll down
return this.staticItemHeight||this._delegate.calculateItemHeight(i);}},{key:'_calculateRenderedHeight',value:function _calculateRenderedHeight(){var _this2=this;return Object.keys(this._renderedItems).reduce(function(a,b){return a+_this2._getItemHeight(+b);},0);}},{key:'_onChange',value:function _onChange(){this._render();}},{key:'_lastItemRendered',value:function _lastItemRendered(){return Math.max.apply(Math,toConsumableArray(Object.keys(this._renderedItems)));}},{key:'_firstItemRendered',value:function _firstItemRendered(){return Math.min.apply(Math,toConsumableArray(Object.keys(this._renderedItems)));}},{key:'refresh',value:function refresh(){var forceRender={forceScrollDown:true};var firstItemIndex=this._firstItemRendered();if(util$1.isInteger(firstItemIndex)){this._wrapperElement.style.height=this._topPositions[firstItemIndex]+this._calculateRenderedHeight()+'px';this.padding=this._topPositions[firstItemIndex];forceRender.forceFirstIndex=firstItemIndex;}this._removeAllElements();this._render(forceRender);this._wrapperElement.style.height='inherit';}},{key:'_render',value:function _render(){var _this3=this;var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$forceScrollDown=_ref.forceScrollDown,forceScrollDown=_ref$forceScrollDown===undefined?false:_ref$forceScrollDown,forceFirstIndex=_ref.forceFirstIndex,forceLastIndex=_ref.forceLastIndex;if(this._unknownItemHeight){return this._checkItemHeight(this._render.bind(this,arguments[0]));}var isScrollUp=!forceScrollDown&&this.lastScrollTop>this._pageContent.scrollTop;this.lastScrollTop=this._pageContent.scrollTop;var keep={};var offset=this._wrapperElement.getBoundingClientRect().top;var limit=4*window.innerHeight-offset;var count=this._countItems();var start=forceFirstIndex||Math.max(0,this._calculateStartIndex(offset)-30);// Recalculate for 0 or undefined
var i=start;for(var top=this._topPositions[i];i<count&&top<limit;i++){if(i>=this._topPositions.length){// perf optimization
this._topPositions.length+=100;}this._topPositions[i]=top;top+=this._getItemHeight(i);}if(this._delegate.hasRenderFunction&&this._delegate.hasRenderFunction()){return this._delegate._render(start,i,function(){_this3.padding=_this3._topPositions[start];});}if(isScrollUp){for(var j=i-1;j>=start;j--){keep[j]=true;this._renderElement(j,isScrollUp);}}else{var lastIndex=forceLastIndex||Math.max.apply(Math,[i-1].concat(toConsumableArray(Object.keys(this._renderedItems))));// Recalculate for 0 or undefined
for(var _j=start;_j<=lastIndex;_j++){keep[_j]=true;this._renderElement(_j,isScrollUp);}}Object.keys(this._renderedItems).forEach(function(key){return keep[key]||_this3._removeElement(key,isScrollUp);});}/**
     * @param {Number} index
     * @param {Boolean} isScrollUp
     */},{key:'_renderElement',value:function _renderElement(index,isScrollUp){var _this4=this;var item=this._renderedItems[index];if(item){this._delegate.updateItem(index,item);// update if it exists
return;}this._delegate.loadItemElement(index,function(item){if(isScrollUp){_this4._wrapperElement.insertBefore(item.element,_this4._wrapperElement.children[_this4._insertIndex]);_this4.padding=_this4._topPositions[index];item.height=_this4._topPositions[index+1]-_this4._topPositions[index];}else{_this4._wrapperElement.appendChild(item.element);}_this4._renderedItems[index]=item;});}/**
     * @param {Number} index
     * @param {Boolean} isScrollUp
     */},{key:'_removeElement',value:function _removeElement(index){var isScrollUp=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;index=+index;var item=this._renderedItems[index];this._delegate.destroyItem(index,item);if(isScrollUp){this._topPositions[index+1]=undefined;}else{this.padding=this.padding+this._getItemHeight(index);}if(item.element.parentElement){item.element.parentElement.removeChild(item.element);}delete this._renderedItems[index];}},{key:'_removeAllElements',value:function _removeAllElements(){var _this5=this;Object.keys(this._renderedItems).forEach(function(key){return _this5._removeElement(key);});}},{key:'_recalculateTopPositions',value:function _recalculateTopPositions(start,end){for(var i=start;i<=end;i++){this._topPositions[i+1]=this._topPositions[i]+this._getItemHeight(i);}}},{key:'_calculateStartIndex',value:function _calculateStartIndex(current){var firstItemIndex=this._firstItemRendered();var lastItemIndex=this._lastItemRendered();// Fix for Safari scroll and Angular 2
this._recalculateTopPositions(firstItemIndex,lastItemIndex);var start=0;var end=this._countItems()-1;// Binary search for index at top of screen so we can speed up rendering.
for(;;){var middle=Math.floor((start+end)/2);var value=current+this._topPositions[middle];if(end<start){return 0;}else if(value<=0&&value+this._getItemHeight(middle)>0){return middle;}else if(isNaN(value)||value>=0){end=middle-1;}else{start=middle+1;}}}},{key:'_debounce',value:function _debounce(func,wait,immediate){var timeout=void 0;return function(){var _this6=this,_arguments=arguments;var callNow=immediate&&!timeout;clearTimeout(timeout);if(callNow){func.apply(this,arguments);}else{timeout=setTimeout(function(){timeout=null;func.apply(_this6,_arguments);},wait);}};}},{key:'_doubleFireOnTouchend',value:function _doubleFireOnTouchend(){this._render();this._debounce(this._render.bind(this),100);}},{key:'_addEventListeners',value:function _addEventListeners(){util$1.bindListeners(this,['_onChange','_doubleFireOnTouchend']);if(platform.isIOS()){this._boundOnChange=this._debounce(this._boundOnChange,30);}this._pageContent.addEventListener('scroll',this._boundOnChange,true);if(platform.isIOS()){util$1.addEventListener(this._pageContent,'touchmove',this._boundOnChange,{capture:true,passive:true});this._pageContent.addEventListener('touchend',this._boundDoubleFireOnTouchend,true);}window.document.addEventListener('resize',this._boundOnChange,true);}},{key:'_removeEventListeners',value:function _removeEventListeners(){this._pageContent.removeEventListener('scroll',this._boundOnChange,true);if(platform.isIOS()){util$1.removeEventListener(this._pageContent,'touchmove',this._boundOnChange,{capture:true,passive:true});this._pageContent.removeEventListener('touchend',this._boundDoubleFireOnTouchend,true);}window.document.removeEventListener('resize',this._boundOnChange,true);}},{key:'destroy',value:function destroy(){this._removeAllElements();this._delegate.destroy();this._parentElement=this._delegate=this._renderedItems=null;this._removeEventListeners();}},{key:'padding',get:function get$$1(){return parseInt(this._wrapperElement.style.paddingTop,10);},set:function set$$1(newValue){this._wrapperElement.style.paddingTop=newValue+'px';}},{key:'staticItemHeight',get:function get$$1(){return this._delegate.itemHeight||this._itemHeight;}}]);return LazyRepeatProvider;}();/*
Copyright 2013-2015 ASIAL CORPORATION
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ /**
 * @element ons-lazy-repeat
 * @category list
 * @description
 *   [en]
 *     Using this component a list with millions of items can be rendered without a drop in performance.
 *     It does that by "lazily" loading elements into the DOM when they come into view and
 *     removing items from the DOM when they are not visible.
 *   [/en]
 *   [ja]
 *     このコンポーネント内で描画されるアイテムのDOM要素の読み込みは、画面に見えそうになった時まで自動的に遅延され、
 *     画面から見えなくなった場合にはその要素は動的にアンロードされます。
 *     このコンポーネントを使うことで、パフォーマンスを劣化させること無しに巨大な数の要素を描画できます。
 *   [/ja]
 * @codepen QwrGBm
 * @tutorial vanilla/Reference/lazy-repeat
 * @seealso ons-list
 *   [en]The `<ons-list>` element is used to render a list.[/en]
 *   [ja]`<ons-list>`要素はリストを描画するのに使われます。[/ja]
 * @example
 * <script>
 *   window.addEventListener('load', function() {
 *     var lazyRepeat = document.querySelector('#list');
 *     lazyRepeat.delegate = {
 *      createItemContent: function(i, template) {
 *        var dom = template.cloneNode(true);
 *        dom.innerText = i;
 *
 *        return dom;
 *      },
 *      countItems: function() {
 *        return 10000000;
 *      },
 *      destroyItem: function(index, item) {
 *        console.log('Destroyed item with index: ' + index);
 *      }
 *     };
 *   });
 * </script>
 *
 * <ons-list id="list">
 *   <ons-lazy-repeat>
 *     <ons-list-item></ons-list-item>
 *   </ons-lazy-repeat>
 * </ons-list>
 */var LazyRepeatElement=function(_BaseElement){inherits(LazyRepeatElement,_BaseElement);function LazyRepeatElement(){classCallCheck(this,LazyRepeatElement);return possibleConstructorReturn(this,(LazyRepeatElement.__proto__||Object.getPrototypeOf(LazyRepeatElement)).apply(this,arguments));}createClass(LazyRepeatElement,[{key:'connectedCallback',value:function connectedCallback(){// not very good idea and also not documented
if(this.hasAttribute('delegate')){this.delegate=window[this.getAttribute('delegate')];}}/**
     * @property delegate
     * @type {Object}
     * @description
     *  [en]Specify a delegate object to load and unload item elements.[/en]
     *  [ja]要素のロード、アンロードなどの処理を委譲するオブジェクトを指定します。[/ja]
     */ /**
     * @property delegate.createItemContent
     * @type {Function}
     * @description
     *   [en]
     *     This function should return a `HTMLElement`.
     *
     *     To help rendering the element, the current index and a template is supplied as arguments. The template is the initial content of the `<ons-lazy-repeat>` element.
     *   [/en]
     *   [ja]
     *     この関数は`HTMLElement`を返してください。
     *     要素を生成しやすくするために、現在のアイテムのインデックスとテンプレートが引数に渡されます。
     *     このテンプレートは、`<ons-lazy-repeat>`要素のコンテンツが渡されます。
     *   [/ja]
     */ /**
     * @property delegate.countItems
     * @type {Function}
     * @description
     *   [en]Should return the number of items in the list.[/en]
     *   [ja]リスト内のアイテム数を返してください。[/ja]
     */ /**
     * @property delegate.calculateItemHeight
     * @type {Function}
     * @description
     *   [en]
     *     Should return the height of an item. The index is provided as an argument.
     *
     *     This is important when rendering lists where the items have different height.
     *
     *     The function is optional and if it isn't present the height of the first item will be automatically calculated and used for all other items.
     *   [/en]
     *   [ja]
     *     アイテムの高さ(ピクセル)を返してください。アイテムのインデックス値は引数で渡されます。
     *     この関数は、それぞれのアイムが違った高さを持つリストをレンダリングする際に重要です。
     *     この関数はオプショナルです。もしこの関数が無い場合には、
     *     最初のアイテムの高さが他のすべてのアイテムの高さとして利用されます。
     *   [/ja]
     */ /**
     * @property delegate.destroyItem
     * @type {Function}
     * @description
     *   [en]
     *     This function is used called when an item is removed from the DOM. The index and DOM element is provided as arguments.
     *
     *     The function is optional but may be important in order to avoid memory leaks.
     *   [/en]
     *   [ja]
     *     この関数は、あるアイテムがDOMツリーから除かれた時に呼び出されます。
     *     アイテムのインデックス値とDOM要素が引数として渡されます。
     *     この関数はオプショナルですが、各アイテムの後処理が必要な場合にはメモリーリークを避けるために重要です。
     *   [/ja]
     */},{key:'refresh',/**
     * @method refresh
     * @signature refresh()
     * @description
     *   [en]Refresh the list. Use this method when the data has changed.[/en]
     *   [ja]リストを更新します。もしデータが変わった場合にはこのメソッドを使ってください。[/ja]
     */value:function refresh(){this._lazyRepeatProvider&&this._lazyRepeatProvider.refresh();}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){}},{key:'disconnectedCallback',value:function disconnectedCallback(){if(this._lazyRepeatProvider){this._lazyRepeatProvider.destroy();this._lazyRepeatProvider=null;}}},{key:'delegate',set:function set$$1(userDelegate){this._lazyRepeatProvider&&this._lazyRepeatProvider.destroy();if(!this._templateElement&&this.children[0]){this._templateElement=this.removeChild(this.children[0]);}var delegate=new LazyRepeatDelegate(userDelegate,this._templateElement||null);this._lazyRepeatProvider=new LazyRepeatProvider(this.parentElement,delegate);},get:function get$$1(){util$1["throw"]('No delegate getter');}}]);return LazyRepeatElement;}(BaseElement);internal$1.LazyRepeatDelegate=LazyRepeatDelegate;internal$1.LazyRepeatProvider=LazyRepeatProvider;onsElements.LazyRepeat=LazyRepeatElement;customElements.define('ons-lazy-repeat',LazyRepeatElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var defaultClassName$4='list-header';var scheme$8={'':'list-header--*'};/**
 * @element ons-list-header
 * @category list
 * @description
 *   [en]Header element for list items. Must be put inside the `<ons-list>` component.[/en]
 *   [ja]リスト要素に使用するヘッダー用コンポーネント。ons-listと共に使用します。[/ja]
 * @seealso ons-list
 *   [en]The `<ons-list>` component[/en]
 *   [ja]ons-listコンポーネント[/ja]
 * @seealso ons-list-item
 *   [en]The `<ons-list-item>` component[/en]
 *   [ja]ons-list-itemコンポーネント[/ja]
 * @codepen yxcCt
 * @tutorial vanilla/Reference/list
 * @modifier material
 *   [en]Display a Material Design list header.[/en]
 *   [ja][/ja]
 * @example
 * <ons-list>
 *   <ons-list-header>Header Text</ons-list-header>
 *   <ons-list-item>Item</ons-list-item>
 *   <ons-list-item>Item</ons-list-item>
 * </ons-list>
 */var ListHeaderElement=function(_BaseElement){inherits(ListHeaderElement,_BaseElement);/**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the list header.[/en]
   *   [ja]ヘッダーの表現を指定します。[/ja]
   */function ListHeaderElement(){classCallCheck(this,ListHeaderElement);var _this=possibleConstructorReturn(this,(ListHeaderElement.__proto__||Object.getPrototypeOf(ListHeaderElement)).call(this));_this._compile();return _this;}createClass(ListHeaderElement,[{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.classList.add(defaultClassName$4);ModifierUtil.initModifier(this,scheme$8);}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'class':util$1.restoreClass(this,defaultClassName$4,scheme$8);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$8);break;}}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','class'];}}]);return ListHeaderElement;}(BaseElement);onsElements.ListHeader=ListHeaderElement;customElements.define('ons-list-header',ListHeaderElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var defaultClassName$5='list-title';var scheme$9={'':'list-title--*'};/**
 * @element ons-list-title
 * @category list
 * @description
 *   [en]Represents a list title.[/en]
 *   [ja]リストのタイトルを表現します。[/ja]
 * @example
 * <ons-list-title>List Title</ons-list-title>
 * <ons-list>
 *   <ons-list-item>Item</ons-list-item>
 * </ons-list>
 * @modifier material
 *   [en]Display a Material Design list title.[/en]
 *   [ja][/ja]
 */var ListTitleElement=function(_BaseElement){inherits(ListTitleElement,_BaseElement);function ListTitleElement(){classCallCheck(this,ListTitleElement);var _this=possibleConstructorReturn(this,(ListTitleElement.__proto__||Object.getPrototypeOf(ListTitleElement)).call(this));_this._compile();return _this;}createClass(ListTitleElement,[{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.classList.add(defaultClassName$5);ModifierUtil.initModifier(this,scheme$9);}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'class':util$1.restoreClass(this,defaultClassName$5,scheme$9);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$9);break;}}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','class'];}}]);return ListTitleElement;}(BaseElement);onsElements.ListTitle=ListTitleElement;customElements.define('ons-list-title',ListTitleElement);/*
Copyright 2013-2018 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/var ListItemAnimator=function(_BaseAnimator){inherits(ListItemAnimator,_BaseAnimator);function ListItemAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'linear':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.2:_ref$duration;classCallCheck(this,ListItemAnimator);return possibleConstructorReturn(this,(ListItemAnimator.__proto__||Object.getPrototypeOf(ListItemAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));}createClass(ListItemAnimator,[{key:'showExpansion',value:function showExpansion(listItem,callback){callback();}},{key:'hideExpansion',value:function hideExpansion(listItem,callback){callback();}}]);return ListItemAnimator;}(BaseAnimator);var SlideListItemAnimator=function(_ListItemAnimator){inherits(SlideListItemAnimator,_ListItemAnimator);function SlideListItemAnimator(){classCallCheck(this,SlideListItemAnimator);return possibleConstructorReturn(this,(SlideListItemAnimator.__proto__||Object.getPrototypeOf(SlideListItemAnimator)).apply(this,arguments));}createClass(SlideListItemAnimator,[{key:'showExpansion',value:function showExpansion(listItem,callback){this._animateExpansion(listItem,true,callback);}},{key:'hideExpansion',value:function hideExpansion(listItem,callback){this._animateExpansion(listItem,false,callback);}},{key:'_animateExpansion',value:function _animateExpansion(listItem,shouldOpen,callback){var _animit;// To animate the opening of the expansion panel correctly, we need to know its
// height. To calculate this, we set its height to auto, and then get the computed
// height and padding. Once this is done, we set the height back to its original value.
var oldHeight=listItem.expandableContent.style.height;var oldDisplay=listItem.expandableContent.style.display;listItem.expandableContent.style.height='auto';listItem.expandableContent.style.display='block';var computedStyle=window.getComputedStyle(listItem.expandableContent);var expansionOpenTransition=[{height:0,paddingTop:0,paddingBottom:0},{height:computedStyle.height,paddingTop:computedStyle.paddingTop,paddingBottom:computedStyle.paddingBottom}];var iconOpenTransition=[{transform:'rotate(45deg)'},{transform:'rotate(225deg)'}];// Now that we have the values we need, reset the height back to its original state
listItem.expandableContent.style.height=oldHeight;(_animit=Animit(listItem.expandableContent,{duration:this.duration,property:'height padding-top padding-bottom'}))["default"].apply(_animit,toConsumableArray(shouldOpen?expansionOpenTransition:expansionOpenTransition.reverse())).play(function(){listItem.expandableContent.style.display=oldDisplay;callback&&callback();});if(listItem.expandChevron){var _animit2;(_animit2=Animit(listItem.expandChevron,{duration:this.duration,property:'transform'}))["default"].apply(_animit2,toConsumableArray(shouldOpen?iconOpenTransition:iconOpenTransition.reverse())).play();}}}]);return SlideListItemAnimator;}(ListItemAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var defaultClassName$6='list-item';var scheme$10={'.list-item':'list-item--*','.list-item__left':'list-item--*__left','.list-item__center':'list-item--*__center','.list-item__right':'list-item--*__right','.list-item__label':'list-item--*__label','.list-item__title':'list-item--*__title','.list-item__subtitle':'list-item--*__subtitle','.list-item__thumbnail':'list-item--*__thumbnail','.list-item__icon':'list-item--*__icon'};var _animatorDict$3={'default':SlideListItemAnimator,'none':ListItemAnimator};/**
 * @element ons-list-item
 * @category list
 * @modifier tappable
 *   [en]Make the list item change appearance when it's tapped. On iOS it is better to use the "tappable" and "tap-background-color" attribute for better behavior when scrolling.[/en]
 *   [ja]タップやクリックした時に効果が表示されるようになります。[/ja]
 * @modifier chevron
 *   [en]Display a chevron at the right end of the list item and make it change appearance when tapped.[/en]
 *   [ja][/ja]
 * @modifier longdivider
 *   [en]Displays a long horizontal divider between items.[/en]
 *   [ja][/ja]
 * @modifier nodivider
 *   [en]Removes the divider between list items.[/en]
 *   [ja][/ja]
 * @modifier material
 *   [en]Display a Material Design list item.[/en]
 *   [ja][/ja]
 * @description
 *   [en]
 *     Component that represents each item in a list. The list item is composed of four parts that are represented with the `left`, `center`, `right` and `expandable-content` classes. These classes can be used to ensure that the content of the list items is properly aligned.
 *
 *     ```
 *     <ons-list-item>
 *       <div class="left">Left</div>
 *       <div class="center">Center</div>
 *       <div class="right">Right</div>
 *       <div class="expandable-content">Expandable content</div>
 *     </ons-list-item>
 *     ```
 *
 *     There are also a number of classes (prefixed with `list-item__*`) that help when putting things like icons and thumbnails into the list items.
 *   [/en]
 *   [ja][/ja]
 * @seealso ons-list
 *   [en]ons-list component[/en]
 *   [ja]ons-listコンポーネント[/ja]
 * @seealso ons-list-header
 *   [en]ons-list-header component[/en]
 *   [ja]ons-list-headerコンポーネント[/ja]
 * @codepen yxcCt
 * @tutorial vanilla/Reference/list
 * @example
 * <ons-list-item>
 *   <div class="left">
 *     <ons-icon icon="md-face" class="list-item__icon"></ons-icon>
 *   </div>
 *   <div class="center">
 *     <div class="list-item__title">Title</div>
 *     <div class="list-item__subtitle">Subtitle</div>
 *   </div>
 *   <div class="right">
 *     <ons-switch></ons-switch>
 *   </div>
 * </ons-list-item>
 */var ListItemElement=function(_BaseElement){inherits(ListItemElement,_BaseElement);/**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the list item.[/en]
   *   [ja]各要素の表現を指定します。[/ja]
   */ /**
   * @attribute lock-on-drag
   * @type {String}
   * @description
   *   [en]Prevent vertical scrolling when the user drags horizontally.[/en]
   *   [ja]この属性があると、ユーザーがこの要素を横方向にドラッグしている時に、縦方向のスクロールが起きないようになります。[/ja]
   */ /**
   * @attribute tappable
   * @type {Boolean}
   * @description
   *   [en]Makes the element react to taps. `prevent-tap` attribute can be added to child elements like buttons or inputs to prevent this effect. `ons-*` elements are ignored by default.[/en]
   *   [ja][/ja]
   */ /**
   * @attribute tap-background-color
   * @type {Color}
   * @description
   *   [en] Changes the background color when tapped. For this to work, the attribute "tappable" needs to be set. The default color is "#d9d9d9". It will display as a ripple effect on Android.[/en]
   *   [ja][/ja]
   */ /**
   * @attribute expandable
   * @type {Boolean}
   * @description
   *   [en]Makes the element able to be expanded to reveal extra content. For this to work, the expandable content must be defined in `div.expandable-content`.[/en]
   *   [ja][/ja]
   */ /**
   * @attribute animation
   * @type {String}
   * @default default
   * @description
   *  [en]The animation used when showing and hiding the expandable content. Can be either `"default"` or `"none"`.[/en]
   *  [ja][/ja]
   */function ListItemElement(){classCallCheck(this,ListItemElement);var _this=possibleConstructorReturn(this,(ListItemElement.__proto__||Object.getPrototypeOf(ListItemElement)).call(this));_this._animatorFactory=_this._updateAnimatorFactory();_this.toggleExpansion=_this.toggleExpansion.bind(_this);// Elements ignored when tapping
var re=/^ons-(?!col$|row$|if$)/i;_this._shouldIgnoreTap=function(e){return e.hasAttribute('prevent-tap')||re.test(e.tagName);};// show and hide functions for Vue hidable mixin
_this.show=_this.showExpansion;_this.hide=_this.hideExpansion;contentReady(_this,function(){_this._compile();});return _this;}/**
   * Compiles the list item.
   *
   * Various elements are allowed in the body of a list item:
   *
   *  - div.left, div.right, and div.center are allowed as direct children
   *  - if div.center is not defined, anything that isn't div.left, div.right or div.expandable-content will be put in a div.center
   *  - if div.center is defined, anything that isn't div.left, div.right or div.expandable-content will be ignored
   *  - if list item has expandable attribute:
   *      - div.expandable-content is allowed as a direct child
   *      - div.top is allowed as direct child
   *      - if div.top is defined, anything that isn't div.expandable-content should be inside div.top - anything else will be ignored
   *      - if div.right is not defined, a div.right will be created with a drop-down chevron
   *
   * See the tests for examples.
   */createClass(ListItemElement,[{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.classList.add(defaultClassName$6);var top=void 0,expandableContent=void 0;var topContent=[];Array.from(this.childNodes).forEach(function(node){if(node.nodeType!==Node.ELEMENT_NODE){topContent.push(node);}else if(node.classList.contains('top')){top=node;}else if(node.classList.contains('expandable-content')){expandableContent=node;}else{topContent.push(node);}if(node.nodeName!=='ONS-RIPPLE'){node.remove();}});topContent=top?Array.from(top.childNodes):topContent;var left=void 0,right=void 0,center=void 0;var centerContent=[];topContent.forEach(function(node){if(node.nodeType!==Node.ELEMENT_NODE){centerContent.push(node);}else if(node.classList.contains('left')){left=node;}else if(node.classList.contains('right')){right=node;}else if(node.classList.contains('center')){center=node;}else{centerContent.push(node);}});if(this.hasAttribute('expandable')){this.classList.add('list-item--expandable');if(!top){top=document.createElement('div');top.classList.add('top');}top.classList.add('list-item__top');this.appendChild(top);this._top=top;if(expandableContent){expandableContent.classList.add('list-item__expandable-content');this.appendChild(expandableContent);}if(!right){right=document.createElement('div');right.classList.add('list-item__right','right');// We cannot use a pseudo-element for this chevron, as we cannot animate it using
// JS. So, we make a chevron span instead.
var chevron=document.createElement('span');chevron.classList.add('list-item__expand-chevron');right.appendChild(chevron);}}else{top=this;}if(!center){center=document.createElement('div');center.classList.add('center');centerContent.forEach(function(node){return center.appendChild(node);});}center.classList.add('list-item__center');top.appendChild(center);if(left){left.classList.add('list-item__left');top.appendChild(left);}if(right){right.classList.add('list-item__right');top.appendChild(right);}util$1.updateRipple(this);ModifierUtil.initModifier(this,scheme$10);}/**
     * @method showExpansion
     * @signature showExpansion()
     * @description
     *   [en]Show the expandable content if the element is expandable.[/en]
     *   [ja][/ja]
     */},{key:'showExpansion',value:function showExpansion(){var _this2=this;if(this.hasAttribute('expandable')&&!this._expanding){this.expanded=true;this._expanding=true;var animator=this._animatorFactory.newAnimator();animator.showExpansion(this,function(){_this2.classList.add('expanded');_this2._expanding=false;});}}/**
     * @method hideExpansion
     * @signature hideExpansion()
     * @description
     *   [en]Hide the expandable content if the element expandable.[/en]
     *   [ja][/ja]
     */},{key:'hideExpansion',value:function hideExpansion(){var _this3=this;if(this.hasAttribute('expandable')&&!this._expanding){this.expanded=false;this._expanding=true;var animator=this._animatorFactory.newAnimator();animator.hideExpansion(this,function(){_this3.classList.remove('expanded');_this3._expanding=false;});}}},{key:'toggleExpansion',value:function toggleExpansion(){this.classList.contains('expanded')?this.hideExpansion():this.showExpansion();this.dispatchEvent(new Event('expansion'));}},{key:'_updateAnimatorFactory',value:function _updateAnimatorFactory(){return new AnimatorFactory({animators:_animatorDict$3,baseClass:ListItemAnimator,baseClassName:'ListItemAnimator',defaultAnimation:this.getAttribute('animation')||'default'});}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'class':util$1.restoreClass(this,defaultClassName$6,scheme$10);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$10);break;case'ripple':util$1.updateRipple(this);break;case'animation':this._animatorFactory=this._updateAnimatorFactory();break;}}},{key:'connectedCallback',value:function connectedCallback(){var _this4=this;contentReady(this,function(){_this4._setupListeners(true);_this4._originalBackgroundColor=_this4.style.backgroundColor;_this4.tapped=false;});}},{key:'disconnectedCallback',value:function disconnectedCallback(){this._setupListeners(false);}},{key:'_setupListeners',value:function _setupListeners(add){var action=(add?'add':'remove')+'EventListener';util$1[action](this,'touchstart',this._onTouch,{passive:true});util$1[action](this,'touchmove',this._onRelease,{passive:true});this[action]('touchcancel',this._onRelease);this[action]('touchend',this._onRelease);this[action]('touchleave',this._onRelease);this[action]('drag',this._onDrag);this[action]('mousedown',this._onTouch);this[action]('mouseup',this._onRelease);this[action]('mouseout',this._onRelease);if(this._top){this._top[action]('click',this.toggleExpansion);}}},{key:'_onDrag',value:function _onDrag(event){var gesture=event.gesture;// Prevent vertical scrolling if the users pans left or right.
if(this.hasAttribute('lock-on-drag')&&['left','right'].indexOf(gesture.direction)>-1){gesture.preventDefault();}}},{key:'_onTouch',value:function _onTouch(e){var _this5=this;if(this.tapped||this!==e.target&&(this._shouldIgnoreTap(e.target)||util$1.findParent(e.target,this._shouldIgnoreTap,function(p){return p===_this5;}))){return;// Ignore tap
}this.tapped=true;var touchStyle={transition:'background-color 0.0s linear 0.02s, box-shadow 0.0s linear 0.02s'};if(this.hasAttribute('tappable')){if(this.style.backgroundColor){this._originalBackgroundColor=this.style.backgroundColor;}touchStyle.backgroundColor=this.getAttribute('tap-background-color')||'#d9d9d9';touchStyle.boxShadow='0px -1px 0px 0px '+touchStyle.backgroundColor;}styler(this,touchStyle);}},{key:'_onRelease',value:function _onRelease(){this.tapped=false;this.style.backgroundColor=this._originalBackgroundColor||'';styler.clear(this,'transition boxShadow');}},{key:'expandableContent',get:function get$$1(){return this.querySelector('.list-item__expandable-content');}},{key:'expandChevron',get:function get$$1(){return this.querySelector('.list-item__expand-chevron');}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','class','ripple','animation'];}}]);return ListItemElement;}(BaseElement);onsElements.ListItem=ListItemElement;customElements.define('ons-list-item',ListItemElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var defaultClassName$7='list';var scheme$11={'':'list--*'};/**
 * @element ons-list
 * @category list
 * @modifier inset
 *   [en]Inset list that doesn't cover the whole width of the parent.[/en]
 *   [ja]親要素の画面いっぱいに広がらないリストを表示します。[/ja]
 * @modifier noborder
 *   [en]A list with no borders at the top and bottom.[/en]
 *   [ja]リストの上下のボーダーが無いリストを表示します。[/ja]
 * @description
 *   [en]Component to define a list, and the container for ons-list-item(s).[/en]
 *   [ja]リストを表現するためのコンポーネント。ons-list-itemのコンテナとして使用します。[/ja]
 * @seealso ons-list-item
 *   [en]ons-list-item component[/en]
 *   [ja]ons-list-itemコンポーネント[/ja]
 * @seealso ons-list-header
 *   [en]ons-list-header component[/en]
 *   [ja]ons-list-headerコンポーネント[/ja]
 * @seealso ons-lazy-repeat
 *   [en]ons-lazy-repeat component[/en]
 *   [ja]ons-lazy-repeatコンポーネント[/ja]
 * @codepen yxcCt
 * @tutorial vanilla/Reference/list
 * @example
 * <ons-list>
 *   <ons-list-header>Header Text</ons-list-header>
 *   <ons-list-item>Item</ons-list-item>
 *   <ons-list-item>Item</ons-list-item>
 * </ons-list>
 */var ListElement=function(_BaseElement){inherits(ListElement,_BaseElement);/**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the list.[/en]
   *   [ja]リストの表現を指定します。[/ja]
   */function ListElement(){classCallCheck(this,ListElement);var _this=possibleConstructorReturn(this,(ListElement.__proto__||Object.getPrototypeOf(ListElement)).call(this));_this._compile();return _this;}createClass(ListElement,[{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.classList.add(defaultClassName$7);ModifierUtil.initModifier(this,scheme$11);}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'class':util$1.restoreClass(this,defaultClassName$7,scheme$11);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$11);break;}}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','class'];}}]);return ListElement;}(BaseElement);onsElements.List=ListElement;customElements.define('ons-list',ListElement);/*
Copyright 2013-2015 ASIAL CORPORATION
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/var INPUT_ATTRIBUTES=['autocapitalize','autocomplete','autocorrect','autofocus','disabled','inputmode','max','maxlength','min','minlength','name','pattern','placeholder','readonly','required','size','spellcheck','step','validator','value'];var BaseInputElement=function(_BaseElement){inherits(BaseInputElement,_BaseElement);createClass(BaseInputElement,[{key:'_update',value:function _update(){}// Optionally implemented
},{key:'_scheme',get:function get$$1(){util$1.throwMember();}},{key:'_template',get:function get$$1(){util$1.throwMember();}},{key:'type',get:function get$$1(){util$1.throwMember();}}]);function BaseInputElement(){classCallCheck(this,BaseInputElement);var _this=possibleConstructorReturn(this,(BaseInputElement.__proto__||Object.getPrototypeOf(BaseInputElement)).call(this));if(_this.constructor===BaseInputElement){util$1.throwAbstract();}contentReady(_this,function(){return _this._compile();});_this._boundDelegateEvent=_this._delegateEvent.bind(_this);return _this;}createClass(BaseInputElement,[{key:'_compile',value:function _compile(){autoStyle.prepare(this);this._defaultClassName&&this.classList.add(this._defaultClassName);if(this.children.length!==0){return;}this.appendChild(util$1.createFragment(this._template));this._setInputId();this._updateBoundAttributes();ModifierUtil.initModifier(this,this._scheme);}},{key:'_updateBoundAttributes',value:function _updateBoundAttributes(){var _this2=this;INPUT_ATTRIBUTES.forEach(function(attr){if(_this2.hasAttribute(attr)){_this2._input.setAttribute(attr,_this2.getAttribute(attr));}else{_this2._input.removeAttribute(attr);}});this._update();}},{key:'_delegateEvent',value:function _delegateEvent(event){var e=new CustomEvent(event.type,{bubbles:false,cancelable:true});return this.dispatchEvent(e);}},{key:'_setInputId',value:function _setInputId(){if(this.hasAttribute('input-id')){this._input.id=this.getAttribute('input-id');}}},{key:'connectedCallback',value:function connectedCallback(){var _this3=this;contentReady(this,function(){_this3._input.addEventListener('focus',_this3._boundDelegateEvent);_this3._input.addEventListener('blur',_this3._boundDelegateEvent);});}},{key:'disconnectedCallback',value:function disconnectedCallback(){var _this4=this;contentReady(this,function(){_this4._input.removeEventListener('focus',_this4._boundDelegateEvent);_this4._input.removeEventListener('blur',_this4._boundDelegateEvent);});}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){var _this5=this;switch(name){case'modifier':contentReady(this,function(){return ModifierUtil.onModifierChanged(last,current,_this5,_this5._scheme);});break;case'input-id':contentReady(this,function(){return _this5._setInputId();});break;case'class':util$1.restoreClass(this,this._defaultClassName,this._scheme);break;}if(INPUT_ATTRIBUTES.indexOf(name)>=0){contentReady(this,function(){return _this5._updateBoundAttributes();});}}},{key:'blur',value:function blur(){this._input.blur();}},{key:'focus',value:function focus(){this._input.focus();}},{key:'_defaultClassName',get:function get$$1(){return'';}},{key:'_input',get:function get$$1(){return this.querySelector('input');}},{key:'value',get:function get$$1(){return this._input===null?this.getAttribute('value'):this._input.value;},set:function set$$1(val){var _this6=this;contentReady(this,function(){if(val instanceof Date){val=val.toISOString().substring(0,10);}_this6._input.value=val;_this6._update();});}},{key:'disabled',set:function set$$1(value){return util$1.toggleAttribute(this,'disabled',value);},get:function get$$1(){return this.hasAttribute('disabled');}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','input-id','class'].concat(INPUT_ATTRIBUTES);}}]);return BaseInputElement;}(BaseElement);/*
Copyright 2013-2015 ASIAL CORPORATION
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/var scheme$12={'.text-input':'text-input--*','.text-input__label':'text-input--*__label'};/**
 * @element ons-input
 * @category form
 * @modifier material
 *  [en]Displays a Material Design input.[/en]
 *  [ja][/ja]
 * @modifier underbar
 *  [en]Displays a horizontal line underneath a text input.[/en]
 *  [ja][/ja]
 * @modifier transparent
 *  [en]Displays a transparent input. Works for Material Design.[/en]
 *  [ja][/ja]
 * @description
 *  [en]
 *    An input element. The `type` attribute can be used to change the input type. All text input types are supported.
 *
 *    The component will automatically render as a Material Design input on Android devices.
 *
 *    Most attributes that can be used for a normal `<input>` element can also be used on the `<ons-input>` element.
 *  [/en]
 *  [ja][/ja]
 * @tutorial vanilla/Reference/input
 * @seealso ons-checkbox
 *   [en]The `<ons-checkbox>` element is used to display a checkbox.[/en]
 *   [ja][/ja]
 * @seealso ons-radio
 *   [en]The `<ons-radio>` element is used to display a radio button.[/en]
 *   [ja][/ja]
 * @seealso ons-range
 *   [en]The `<ons-range>` element is used to display a range slider.[/en]
 *   [ja][/ja]
 * @seealso ons-switch
 *   [en]The `<ons-switch>` element is used to display a draggable toggle switch.[/en]
 *   [ja][/ja]
 * @seealso ons-select
 *   [en]The `<ons-select>` element is used to display a select box.[/en]
 *   [ja][/ja]
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @example
 * <ons-input placeholder="Username" float></ons-input>
 */var InputElement=function(_BaseInputElement){inherits(InputElement,_BaseInputElement);function InputElement(){classCallCheck(this,InputElement);var _this=possibleConstructorReturn(this,(InputElement.__proto__||Object.getPrototypeOf(InputElement)).call(this));_this._boundOnInput=_this._update.bind(_this);_this._boundOnFocusin=_this._update.bind(_this);return _this;}/* Inherited props */createClass(InputElement,[{key:'_update',value:function _update(){this._updateLabel();this._updateLabelClass();}},{key:'_updateLabel',/* Own props */value:function _updateLabel(){var label=this.getAttribute('placeholder')||'';if(typeof this._helper.textContent!=='undefined'){this._helper.textContent=label;}else{this._helper.innerText=label;}}},{key:'_updateLabelClass',value:function _updateLabelClass(){if(this.value===''){this._helper.classList.remove('text-input--material__label--active');}else{this._helper.classList.add('text-input--material__label--active');}}},{key:'connectedCallback',value:function connectedCallback(){var _this2=this;get(InputElement.prototype.__proto__||Object.getPrototypeOf(InputElement.prototype),'connectedCallback',this).call(this);contentReady(this,function(){_this2._input.addEventListener('input',_this2._boundOnInput);_this2._input.addEventListener('focusin',_this2._boundOnFocusin);});var type=this.getAttribute('type');if(['checkbox','radio'].indexOf(type)>=0){util$1.warn('Warn: <ons-input type="'+type+'"> is deprecated since v2.4.0. Use <ons-'+type+'> instead.');}}},{key:'disconnectedCallback',value:function disconnectedCallback(){var _this3=this;get(InputElement.prototype.__proto__||Object.getPrototypeOf(InputElement.prototype),'disconnectedCallback',this).call(this);contentReady(this,function(){_this3._input.removeEventListener('input',_this3._boundOnInput);_this3._input.removeEventListener('focusin',_this3._boundOnFocusin);});}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){var _this4=this;switch(name){case'type':contentReady(this,function(){return _this4._input.setAttribute('type',_this4.type);});break;default:get(InputElement.prototype.__proto__||Object.getPrototypeOf(InputElement.prototype),'attributeChangedCallback',this).call(this,name,last,current);}}/**
     * @attribute placeholder
     * @type {String}
     * @description
     *   [en]Placeholder text. In Material Design, this placeholder will be a floating label.[/en]
     *   [ja][/ja]
     */ /**
     * @attribute float
     * @description
     *  [en]If this attribute is present, the placeholder will be animated in Material Design.[/en]
     *  [ja]この属性が設定された時、ラベルはアニメーションするようになります。[/ja]
     */ /**
     * @attribute type
     * @type {String}
     * @description
     *  [en]
     *    Specify the input type. This is the same as the "type" attribute for normal inputs. It expects strict text types such as `text`, `password`, etc. For checkbox, radio button, select or range, please have a look at the corresponding elements.
     *
     *    Please take a look at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) for an exhaustive list of possible values. Depending on the platform and browser version some of these might not work.
     *  [/en]
     *  [ja][/ja]
     */ /**
     * @attribute input-id
     * @type {String}
     * @description
     *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
     *  [ja][/ja]
     */ /**
     * @property value
     * @type {String}
     * @description
     *   [en]The current value of the input.[/en]
     *   [ja][/ja]
     */ /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the input is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */ /**
     * @method focus
     * @signature focus()
     * @description
     *   [en]Focuses the input.[/en]
     *   [ja][/ja]
     */ /**
     * @method blur
     * @signature blur()
     * @description
     *   [en]Removes focus from the input.[/en]
     *   [ja][/ja]
     */},{key:'_scheme',get:function get$$1(){return scheme$12;}},{key:'_template',get:function get$$1(){return'\n      <input type="'+this.type+'" class="text-input">\n      <span class="text-input__label"></span>\n    ';}},{key:'type',get:function get$$1(){var type=this.getAttribute('type');return['checkbox','radio'].indexOf(type)<0&&type||'text';}},{key:'_helper',get:function get$$1(){return this.querySelector('span');}}],[{key:'observedAttributes',get:function get$$1(){return[].concat(toConsumableArray(get(InputElement.__proto__||Object.getPrototypeOf(InputElement),'observedAttributes',this)),['type']);}}]);return InputElement;}(BaseInputElement);onsElements.Input=InputElement;customElements.define('ons-input',InputElement);/*
Copyright 2013-2015 ASIAL CORPORATION
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/var BaseCheckboxElement=function(_BaseInputElement){inherits(BaseCheckboxElement,_BaseInputElement);function BaseCheckboxElement(){classCallCheck(this,BaseCheckboxElement);var _this=possibleConstructorReturn(this,(BaseCheckboxElement.__proto__||Object.getPrototypeOf(BaseCheckboxElement)).call(this));if(_this.constructor===BaseCheckboxElement){util.throwAbstract();}contentReady(_this,function(){_this.attributeChangedCallback('checked',null,_this.getAttribute('checked'));});return _this;}/* Inherited props */createClass(BaseCheckboxElement,[{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'checked':this.checked=current!==null;break;default:get(BaseCheckboxElement.prototype.__proto__||Object.getPrototypeOf(BaseCheckboxElement.prototype),'attributeChangedCallback',this).call(this,name,last,current);}}},{key:'_template',get:function get$$1(){return'\n      <input type="'+this.type+'" class="'+this._defaultClassName+'__input">\n      <span class="'+this._defaultClassName+'__checkmark"></span>\n    ';}/* Own props */},{key:'_helper',get:function get$$1(){return this.querySelector('span');}},{key:'checked',get:function get$$1(){return this._input.checked;},set:function set$$1(val){var _this2=this;contentReady(this,function(){_this2._input.checked=val;});}}],[{key:'observedAttributes',get:function get$$1(){return[].concat(toConsumableArray(get(BaseCheckboxElement.__proto__||Object.getPrototypeOf(BaseCheckboxElement),'observedAttributes',this)),['checked']);}}]);return BaseCheckboxElement;}(BaseInputElement);/*
Copyright 2013-2015 ASIAL CORPORATION
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/var scheme$13={'.checkbox':'checkbox--*','.checkbox__input':'checkbox--*__input','.checkbox__checkmark':'checkbox--*__checkmark'};/**
 * @element ons-checkbox
 * @category form
 * @modifier material
 *  [en]Displays a Material Design checkbox.[/en]
 *  [ja][/ja]
 * @modifier noborder
 *  [en]iOS borderless checkbox.[/en]
 *  [ja][/ja]
 * @description
 *  [en]
 *    A checkbox element. The component will automatically render as a Material Design checkbox on Android devices.
 *
 *    Most attributes that can be used for a normal `<input type="checkbox">` element can also be used on the `<ons-checkbox>` element.
 *  [/en]
 *  [ja][/ja]
 * @tutorial vanilla/Reference/checkbox
 * @seealso ons-switch
 *   [en]The `<ons-switch>` element is used to display a draggable toggle switch.[/en]
 *   [ja][/ja]
 * @seealso ons-radio
 *   [en]The `<ons-radio>` element is used to display a radio button.[/en]
 *   [ja][/ja]
 * @seealso ons-input
 *   [en]The `<ons-input>` element is used to display a text input.[/en]
 *   [ja][/ja]
 * @seealso ons-search-input
 *   [en]The `<ons-search-input>` element is used to display a search input.[/en]
 *   [ja][/ja]
 * @seealso ons-range
 *   [en]The `<ons-range>` element is used to display a range slider.[/en]
 *   [ja][/ja]
 * @seealso ons-select
 *   [en]The `<ons-select>` element is used to display a select box.[/en]
 *   [ja][/ja]
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @example
 * <ons-checkbox checked></ons-checkbox>
 */var CheckboxElement=function(_BaseCheckboxElement){inherits(CheckboxElement,_BaseCheckboxElement);function CheckboxElement(){classCallCheck(this,CheckboxElement);return possibleConstructorReturn(this,(CheckboxElement.__proto__||Object.getPrototypeOf(CheckboxElement)).apply(this,arguments));}createClass(CheckboxElement,[{key:'_scheme',get:function get$$1(){return scheme$13;}},{key:'_defaultClassName',get:function get$$1(){return'checkbox';}},{key:'type',get:function get$$1(){return'checkbox';}/**
     * @attribute input-id
     * @type {String}
     * @description
     *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
     *  [ja][/ja]
     */ /**
     * @property value
     * @type {String}
     * @description
     *   [en]The current value of the checkbox.[/en]
     *   [ja][/ja]
     */ /**
     * @property checked
     * @type {Boolean}
     * @description
     *   [en]Whether the checkbox is checked or not.[/en]
     *   [ja][/ja]
     */ /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the checkbox is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */ /**
     * @method focus
     * @signature focus()
     * @description
     *   [en]Focuses the checkbox.[/en]
     *   [ja][/ja]
     */ /**
     * @method blur
     * @signature blur()
     * @description
     *   [en]Removes focus from the checkbox.[/en]
     *   [ja][/ja]
     */}]);return CheckboxElement;}(BaseCheckboxElement);onsElements.Checkbox=CheckboxElement;customElements.define('ons-checkbox',CheckboxElement);/*
Copyright 2013-2015 ASIAL CORPORATION
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/var scheme$14={'.radio-button':'radio-button--*','.radio-button__input':'radio-button--*__input','.radio-button__checkmark':'radio-button--*__checkmark'};/**
 * @element ons-radio
 * @category form
 * @modifier material
 *  [en]Displays a Material Design radio button.[/en]
 *  [ja][/ja]
 * @description
 *  [en]
 *    A radio button element. The component will automatically render as a Material Design radio button on Android devices.
 *
 *    Most attributes that can be used for a normal `<input type="radio">` element can also be used on the `<ons-radio>` element.
 *  [/en]
 *  [ja][/ja]
 * @tutorial vanilla/Reference/radio
 * @seealso ons-select
 *   [en]The `<ons-select>` element is used to display a select box.[/en]
 *   [ja][/ja]
 * @seealso ons-checkbox
 *   [en]The `<ons-checkbox>` element is used to display a checkbox.[/en]
 *   [ja][/ja]
 * @seealso ons-switch
 *   [en]The `<ons-switch>` element is used to display a draggable toggle switch.[/en]
 *   [ja][/ja]
 * @seealso ons-input
 *   [en]The `<ons-input>` element is used to display a text input.[/en]
 *   [ja][/ja]
 * @seealso ons-search-input
 *   [en]The `<ons-search-input>` element is used to display a search input.[/en]
 *   [ja][/ja]
 * @seealso ons-range
 *   [en]The `<ons-range>` element is used to display a range slider.[/en]
 *   [ja][/ja]
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @example
 * <ons-radio checked></ons-radio>
 */var RadioElement=function(_BaseCheckboxElement){inherits(RadioElement,_BaseCheckboxElement);function RadioElement(){classCallCheck(this,RadioElement);return possibleConstructorReturn(this,(RadioElement.__proto__||Object.getPrototypeOf(RadioElement)).apply(this,arguments));}createClass(RadioElement,[{key:'_scheme',get:function get$$1(){return scheme$14;}},{key:'_defaultClassName',get:function get$$1(){return'radio-button';}},{key:'type',get:function get$$1(){return'radio';}/**
     * @attribute input-id
     * @type {String}
     * @description
     *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
     *  [ja][/ja]
     */ /**
     * @property value
     * @type {String}
     * @description
     *   [en]The current value of the radio button.[/en]
     *   [ja][/ja]
     */ /**
     * @property checked
     * @type {Boolean}
     * @description
     *   [en]Whether the radio button is checked or not.[/en]
     *   [ja][/ja]
     */ /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the radio button is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */ /**
     * @method focus
     * @signature focus()
     * @description
     *   [en]Focuses the radio button.[/en]
     *   [ja][/ja]
     */ /**
     * @method blur
     * @signature blur()
     * @description
     *   [en]Removes focus from the radio button.[/en]
     *   [ja][/ja]
     */}]);return RadioElement;}(BaseCheckboxElement);onsElements.Radio=RadioElement;customElements.define('ons-radio',RadioElement);/*
Copyright 2013-2015 ASIAL CORPORATION
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/var scheme$15={'.search-input':'search-input--*'};/**
 * @element ons-search-input
 * @category form
 * @modifier material
 *  [en]Displays a Material Design search input.[/en]
 *  [ja][/ja]
 * @description
 *  [en]
 *    A search input element. The component will automatically render as a Material Design search input on Android devices.
 *
 *    Most attributes that can be used for a normal `<input>` element can also be used on the `<ons-search-input>` element.
 *  [/en]
 *  [ja][/ja]
 * @tutorial vanilla/Reference/search-input
 * @seealso ons-input
 *   [en]The `<ons-input>` element is used to display a text input.[/en]
 *   [ja][/ja]
 * @seealso ons-range
 *   [en]The `<ons-range>` element is used to display a range slider.[/en]
 *   [ja][/ja]
 * @seealso ons-switch
 *   [en]The `<ons-switch>` element is used to display a draggable toggle switch.[/en]
 *   [ja][/ja]
 * @seealso ons-select
 *   [en]The `<ons-select>` element is used to display a select box.[/en]
 *   [ja][/ja]
 * @seealso ons-checkbox
 *   [en]The `<ons-checkbox>` element is used to display a checkbox.[/en]
 *   [ja][/ja]
 * @seealso ons-radio
 *   [en]The `<ons-radio>` element is used to display a radio button.[/en]
 *   [ja][/ja]
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @example
 * <ons-search-input placeholder="Search"></ons-search-input>
 */var SearchInputElement=function(_BaseInputElement){inherits(SearchInputElement,_BaseInputElement);function SearchInputElement(){classCallCheck(this,SearchInputElement);return possibleConstructorReturn(this,(SearchInputElement.__proto__||Object.getPrototypeOf(SearchInputElement)).apply(this,arguments));}createClass(SearchInputElement,[{key:'_scheme',get:function get$$1(){return scheme$15;}},{key:'_template',get:function get$$1(){return'\n      <input type="'+this.type+'" class="search-input">\n    ';}},{key:'type',get:function get$$1(){return'search';}/**
     * @attribute input-id
     * @type {String}
     * @description
     *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
     *  [ja][/ja]
     */ /**
     * @property value
     * @type {String}
     * @description
     *   [en]The current value of the input.[/en]
     *   [ja][/ja]
     */ /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the input is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */ /**
     * @method focus
     * @signature focus()
     * @description
     *   [en]Focuses the input.[/en]
     *   [ja][/ja]
     */ /**
     * @method blur
     * @signature blur()
     * @description
     *   [en]Removes focus from the input.[/en]
     *   [ja][/ja]
     */}]);return SearchInputElement;}(BaseInputElement);onsElements.SearchInput=SearchInputElement;customElements.define('ons-search-input',SearchInputElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var ModalAnimator=function(_BaseAnimator){inherits(ModalAnimator,_BaseAnimator);/**
   * @param {Object} options
   * @param {String} options.timing
   * @param {Number} options.duration
   * @param {Number} options.delay
   */function ModalAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'linear':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.2:_ref$duration;classCallCheck(this,ModalAnimator);return possibleConstructorReturn(this,(ModalAnimator.__proto__||Object.getPrototypeOf(ModalAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));}/**
   * @param {HTMLElement} modal
   * @param {Function} callback
   */createClass(ModalAnimator,[{key:'show',value:function show(modal,callback){callback();}/**
     * @param {HTMLElement} modal
     * @param {Function} callback
     */},{key:'hide',value:function hide(modal,callback){callback();}}]);return ModalAnimator;}(BaseAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * iOS style animator for dialog.
 */var FadeModalAnimator=function(_ModalAnimator){inherits(FadeModalAnimator,_ModalAnimator);function FadeModalAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'linear':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.3:_ref$duration;classCallCheck(this,FadeModalAnimator);return possibleConstructorReturn(this,(FadeModalAnimator.__proto__||Object.getPrototypeOf(FadeModalAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));}/**
   * @param {HTMLElement} modal
   * @param {Function} callback
   */createClass(FadeModalAnimator,[{key:'show',value:function show(modal,callback){callback=callback?callback:function(){};Animit(modal,this.def)["default"]({opacity:0},{opacity:1}).queue(function(done){callback();done();}).play();}/**
     * @param {HTMLElement} modal
     * @param {Function} callback
     */},{key:'hide',value:function hide(modal,callback){callback=callback?callback:function(){};Animit(modal,this.def)["default"]({opacity:1},{opacity:0}).queue(function(done){callback();done();}).play();}}]);return FadeModalAnimator;}(ModalAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * iOS style animator for modal.
 */var LiftModalAnimator=function(_ModalAnimator){inherits(LiftModalAnimator,_ModalAnimator);function LiftModalAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'cubic-bezier( .1, .7, .1, 1)':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.4:_ref$duration;classCallCheck(this,LiftModalAnimator);return possibleConstructorReturn(this,(LiftModalAnimator.__proto__||Object.getPrototypeOf(LiftModalAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));}/**
   * @param {HTMLElement} modal
   * @param {Function} callback
   */createClass(LiftModalAnimator,[{key:'show',value:function show(modal,callback){callback=callback?callback:function(){};Animit(modal,this.def)["default"]({transform:'translate3d(0, 100%, 0)'},{transform:'translate3d(0, 0, 0)'}).queue(function(done){callback();done();}).play();}/**
     * @param {HTMLElement} modal
     * @param {Function} callback
     */},{key:'hide',value:function hide(modal,callback){callback=callback?callback:function(){};Animit(modal,this.def)["default"]({transform:'translate3d(0, 0, 0)'},{transform:'translate3d(0, 100%, 0)'}).queue(function(done){callback();done();}).play();}}]);return LiftModalAnimator;}(ModalAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var scheme$16={'':'modal--*','modal__content':'modal--*__content'};var defaultClassName$8='modal';var _animatorDict$4={'default':ModalAnimator,'fade':FadeModalAnimator,'lift':LiftModalAnimator,'none':ModalAnimator};/**
 * @element ons-modal
 * @category dialog
 * @description
 *   [en]
 *     Modal component that masks current screen. Underlying components are not subject to any events while the modal component is shown.
 *
 *     This component can be used to block user input while some operation is running or to show some information to the user.
 *   [/en]
 *   [ja]
 *     画面全体をマスクするモーダル用コンポーネントです。下側にあるコンポーネントは、
 *     モーダルが表示されている間はイベント通知が行われません。
 *   [/ja]
 * @seealso ons-dialog
 *   [en]The `<ons-dialog>` component can be used to create a modal dialog.[/en]
 *   [ja][/ja]
 * @codepen devIg
 * @tutorial vanilla/reference/modal
 * @example
 * <ons-modal id="modal">
 *   Modal content
 * </ons-modal>
 * <script>
 *   var modal = document.getElementById('modal');
 *   modal.show();
 * </script>
 */var ModalElement=function(_BaseDialogElement){inherits(ModalElement,_BaseDialogElement);/**
   * @event preshow
   * @description
   * [en]Fired just before the modal is displayed.[/en]
   * [ja]モーダルが表示される直前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.modal
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Execute this function to stop the modal from being shown.[/en]
   *   [ja]この関数を実行すると、ダイアログの表示がキャンセルされます。[/ja]
   */ /**
   * @event postshow
   * @description
   * [en]Fired just after the modal is displayed.[/en]
   * [ja]モーダルが表示された直後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.modal
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */ /**
   * @event prehide
   * @description
   * [en]Fired just before the modal is hidden.[/en]
   * [ja]モーダルが隠れる直前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.modal
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Execute this function to stop the modal from being hidden.[/en]
   *   [ja]この関数を実行すると、ダイアログの非表示がキャンセルされます。[/ja]
   */ /**
   * @event posthide
   * @description
   * [en]Fired just after the modal is hidden.[/en]
   * [ja]モーダルが隠れた後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.modal
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */ /**
   * @attribute animation
   * @type {String}
   * @default default
   * @description
   *  [en]The animation used when showing and hiding the modal. Can be either `"none"`, `"fade"` or `"lift"`.[/en]
   *  [ja]モーダルを表示する際のアニメーション名を指定します。"none"もしくは"fade","lift"を指定できます。[/ja]
   */ /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. <code>{duration: 0.2, delay: 1, timing: 'ease-in'}</code>[/ja]
   */function ModalElement(){classCallCheck(this,ModalElement);var _this=possibleConstructorReturn(this,(ModalElement.__proto__||Object.getPrototypeOf(ModalElement)).call(this));_this._defaultDBB=function(){return undefined;};contentReady(_this,function(){return _this._compile();});return _this;}createClass(ModalElement,[{key:'_updateAnimatorFactory',value:function _updateAnimatorFactory(){return new AnimatorFactory({animators:_animatorDict$4,baseClass:ModalAnimator,baseClassName:'ModalAnimator',defaultAnimation:this.getAttribute('animation')});}/**
     * @property onDeviceBackButton
     * @type {Object}
     * @description
     *   [en]Back-button handler.[/en]
     *   [ja]バックボタンハンドラ。[/ja]
     */},{key:'_compile',value:function _compile(){this.style.display='none';this.style.zIndex=10001;this.classList.add(defaultClassName$8);if(!util$1.findChild(this,'.modal__content')){var content=document.createElement('div');content.classList.add('modal__content');while(this.childNodes[0]){var node=this.childNodes[0];this.removeChild(node);content.insertBefore(node,null);}this.appendChild(content);}ModifierUtil.initModifier(this,this._scheme);}},{key:'_toggleStyle',value:function _toggleStyle(shouldShow){this.style.display=shouldShow?'table':'none';}},{key:'connectedCallback',value:function connectedCallback(){get(ModalElement.prototype.__proto__||Object.getPrototypeOf(ModalElement.prototype),'connectedCallback',this).call(this);}},{key:'disconnectedCallback',value:function disconnectedCallback(){get(ModalElement.prototype.__proto__||Object.getPrototypeOf(ModalElement.prototype),'disconnectedCallback',this).call(this);}/**
     * @property visible
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the element is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */ /**
     * @method show
     * @signature show([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"none"` and `"fade"`.[/en]
     *   [ja]アニメーション名を指定します。"none", "fade"のいずれかを指定します。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @param {Function} [options.callback]
     *   [en]This function is called after the modal has been revealed.[/en]
     *   [ja]モーダルが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Show modal.[/en]
     *   [ja]モーダルを表示します。[/ja]
     * @return {Promise}
     *   [en]Resolves to the displayed element[/en]
     *   [ja][/ja]
     */ /**
     * @method toggle
     * @signature toggle([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"none"` and `"fade"`.[/en]
     *   [ja]アニメーション名を指定します。"none", "fade"のいずれかを指定します。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @param {Function} [options.callback]
     *   [en]This function is called after the modal has been revealed.[/en]
     *   [ja]モーダルが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Toggle modal visibility.[/en]
     *   [ja]モーダルの表示を切り替えます。[/ja]
     */ /**
     * @method hide
     * @signature hide([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"none"` and `"fade"`.[/en]
     *   [ja]アニメーション名を指定します。"none", "fade"のいずれかを指定します。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @param {Function} [options.callback]
     *   [en]This function is called after the modal has been revealed.[/en]
     *   [ja]モーダルが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Hide modal.[/en]
     *   [ja]モーダルを非表示にします。[/ja]
     * @return {Promise}
     *   [en]Resolves to the hidden element[/en]
     *   [ja][/ja]
     */},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){if(name==='class'){util$1.restoreClass(this,defaultClassName$8,scheme$16);}else{get(ModalElement.prototype.__proto__||Object.getPrototypeOf(ModalElement.prototype),'attributeChangedCallback',this).call(this,name,last,current);}}/**
     * @param {String} name
     * @param {Function} Animator
     */},{key:'_scheme',get:function get$$1(){return scheme$16;}}],[{key:'registerAnimator',value:function registerAnimator(name,Animator){if(!(Animator.prototype instanceof ModalAnimator)){util$1.throwAnimator('Modal');}_animatorDict$4[name]=Animator;}},{key:'observedAttributes',get:function get$$1(){return[].concat(toConsumableArray(get(ModalElement.__proto__||Object.getPrototypeOf(ModalElement),'observedAttributes',this)),['class']);}},{key:'animators',get:function get$$1(){return _animatorDict$4;}},{key:'ModalAnimator',get:function get$$1(){return ModalAnimator;}}]);return ModalElement;}(BaseDialogElement);onsElements.Modal=ModalElement;customElements.define('ons-modal',ModalElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var widthToPx=function widthToPx(width){var _ref=[parseInt(width,10),/px/.test(width)],value=_ref[0],px=_ref[1];return px?value:Math.round(document.body.offsetWidth*value/100);};var SwipeReveal=function(){function SwipeReveal(params){var _this=this;classCallCheck(this,SwipeReveal);'element ignoreSwipe isInitialState onDragCallback swipeMax swipeMin swipeMid'.split(/\s+/).forEach(function(key){return _this[key]=params[key];});this.elementHandler=params.elementHandler||params.element;this.getThreshold=params.getThreshold||function(){return .5;};this.getSide=params.getSide||function(){return'left';};this.handleGesture=this.handleGesture.bind(this);this._shouldFixScroll=util$1.globals.actualMobileOS==='ios';}createClass(SwipeReveal,[{key:'update',value:function update(){var swipeable=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.element.hasAttribute('swipeable');if(!this.gestureDetector){this.gestureDetector=new GestureDetector(this.elementHandler,{dragMinDistance:1,passive:!this._shouldFixScroll});}var action=swipeable?'on':'off';this.gestureDetector[action]('drag dragstart dragend',this.handleGesture);}},{key:'handleGesture',value:function handleGesture(e){if(e.gesture){if(e.type==='dragstart'){this.onDragStart(e);}else if(!this._ignoreDrag){e.type==='dragend'?this.onDragEnd(e):this.onDrag(e);}}}},{key:'onDragStart',value:function onDragStart(event){var _this2=this;var getDistance=function getDistance(){return _this2.getSide()==='left'?event.gesture.center.clientX:window.innerWidth-event.gesture.center.clientX;};this._ignoreDrag=event.consumed||!util$1.isValidGesture(event)||this.ignoreSwipe(event,getDistance());if(!this._ignoreDrag){event.consume&&event.consume();event.consumed=true;this._width=widthToPx(this.element.style.width||'100%');this._startDistance=this._distance=!(this.isInitialState instanceof Function)||this.isInitialState()?0:this._width;util$1.iosPreventScroll(this.gestureDetector);}}},{key:'onDrag',value:function onDrag(event){event.stopPropagation();var delta=this.getSide()==='left'?event.gesture.deltaX:-event.gesture.deltaX;var distance=Math.max(0,Math.min(this._width,this._startDistance+delta));if(distance!==this._distance){this._distance=distance;this.swipeMid(this._distance,this._width);}}},{key:'onDragEnd',value:function onDragEnd(event){event.stopPropagation();var direction=event.gesture.interimDirection;var isSwipeMax=this.getSide()!==direction&&this._distance>this._width*this.getThreshold();isSwipeMax?this.swipeMax():this.swipeMin();}},{key:'dispose',value:function dispose(){this.gestureDetector&&this.gestureDetector.dispose();this.gestureDetector=this.element=this.elementHandler=null;}}]);return SwipeReveal;}();/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var NavigatorAnimator=function(_BaseAnimator){inherits(NavigatorAnimator,_BaseAnimator);/**
   * @param {Object} options
   * @param {String} options.timing
   * @param {Number} options.duration
   * @param {Number} options.delay
   */function NavigatorAnimator(options){classCallCheck(this,NavigatorAnimator);options=util$1.extend({timing:'linear',duration:'0.4',delay:'0'},options||{});return possibleConstructorReturn(this,(NavigatorAnimator.__proto__||Object.getPrototypeOf(NavigatorAnimator)).call(this,options));}createClass(NavigatorAnimator,[{key:'push',value:function push(enterPage,leavePage,callback){callback();}},{key:'pop',value:function pop(enterPage,leavePage,callback){callback();}},{key:'block',value:function block(page){var blocker=util$1.createElement('\n      <div style="position: absolute; background-color: transparent; width: 100%; height: 100%; z-index: 100000"></div>\n    ');page.parentNode.appendChild(blocker);return function(){return blocker.remove();};}}]);return NavigatorAnimator;}(BaseAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * Abstract swipe animator for iOS navigator transition.
 */var IOSSwipeNavigatorAnimator=function(_NavigatorAnimator){inherits(IOSSwipeNavigatorAnimator,_NavigatorAnimator);createClass(IOSSwipeNavigatorAnimator,null,[{key:'swipeable',get:function get$$1(){return true;}}]);function IOSSwipeNavigatorAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _ref$durationRestore=_ref.durationRestore,durationRestore=_ref$durationRestore===undefined?0.1:_ref$durationRestore,_ref$durationSwipe=_ref.durationSwipe,durationSwipe=_ref$durationSwipe===undefined?0.15:_ref$durationSwipe,_ref$timingSwipe=_ref.timingSwipe,timingSwipe=_ref$timingSwipe===undefined?'linear':_ref$timingSwipe,rest=objectWithoutProperties(_ref,['durationRestore','durationSwipe','timingSwipe']);classCallCheck(this,IOSSwipeNavigatorAnimator);var _this=possibleConstructorReturn(this,(IOSSwipeNavigatorAnimator.__proto__||Object.getPrototypeOf(IOSSwipeNavigatorAnimator)).call(this,_extends({},rest)));if(_this.constructor===IOSSwipeNavigatorAnimator){util$1.throwAbstract();}_this.durationRestore=durationRestore;_this.durationSwipe=durationSwipe;_this.timingSwipe=timingSwipe;_this.optSwipe={timing:timingSwipe,duration:durationSwipe};_this.optRestore={timing:timingSwipe,duration:durationRestore};_this.swipeShadow=util$1.createElement('<div style="position: absolute; height: 100%; width: 12px; right: 100%; top: 0; bottom: 0; z-index: -1;'+'background: linear-gradient(to right, transparent 0, rgba(0,0,0,.04) 40%, rgba(0,0,0,.12) 80%, rgba(0,0,0,.16) 100%);"></div>');_this.isDragStart=true;return _this;}createClass(IOSSwipeNavigatorAnimator,[{key:'_decompose',value:function _decompose(){util$1.throwMember();}},{key:'_shouldAnimateToolbar',value:function _shouldAnimateToolbar(){util$1.throwMember();}},{key:'_calculateDelta',value:function _calculateDelta(){util$1.throwMember();}},{key:'_dragStartSetup',value:function _dragStartSetup(enterPage,leavePage){this.isDragStart=false;// Avoid content clicks
this.unblock=get(IOSSwipeNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(IOSSwipeNavigatorAnimator.prototype),'block',this).call(this,leavePage);// Mask
enterPage.parentElement.insertBefore(this.backgroundMask,enterPage);// Decomposition
this.target={enter:util$1.findToolbarPage(enterPage)||enterPage,leave:util$1.findToolbarPage(leavePage)||leavePage};this.decomp={enter:this._decompose(this.target.enter),leave:this._decompose(this.target.leave)};// Animation values
this.delta=this._calculateDelta(leavePage,this.decomp.leave);this.shouldAnimateToolbar=this._shouldAnimateToolbar(this.target.enter,this.target.leave);// Shadow && styles
if(this.shouldAnimateToolbar){this.swipeShadow.style.top=this.decomp.leave.toolbar.offsetHeight+'px';this.target.leave.appendChild(this.swipeShadow);this._saveStyle(this.target.enter,this.target.leave);}else{leavePage.appendChild(this.swipeShadow);this._saveStyle(enterPage,leavePage);}leavePage.classList.add('overflow-visible');this.overflowElement=leavePage;this.decomp.leave.content.classList.add('content-swiping');}},{key:'translate',value:function translate(distance,maxWidth,enterPage,leavePage){this.isSwiping=true;if(enterPage.style.display==='none'){enterPage.style.display='';}if(this.isDragStart){this.maxWidth=maxWidth;this._dragStartSetup(enterPage,leavePage);}var swipeRatio=(distance-maxWidth)/maxWidth;if(this.shouldAnimateToolbar){Animit.runAll(/* Enter page */Animit([this.decomp.enter.content,this.decomp.enter.bottomToolbar,this.decomp.enter.background]).queue({transform:'translate3d('+swipeRatio*25+'%, 0, 0)',opacity:1+swipeRatio*10/100// 0.9 -> 1
}),Animit(this.decomp.enter.toolbarCenter).queue({transform:'translate3d('+this.delta.title*swipeRatio+'px, 0, 0)',opacity:1+swipeRatio// 0 -> 1
}),Animit(this.decomp.enter.backButtonLabel).queue({opacity:1+swipeRatio*10/100,// 0.9 -> 1
transform:'translate3d('+this.delta.label*swipeRatio+'px, 0, 0)'}),Animit(this.decomp.enter.other).queue({opacity:1+swipeRatio// 0 -> 1
}),/* Leave page */Animit([this.decomp.leave.content,this.decomp.leave.bottomToolbar,this.decomp.leave.background,this.swipeShadow]).queue({transform:'translate3d('+distance+'px, 0, 0)'}),Animit(this.decomp.leave.toolbar).queue({opacity:-1*swipeRatio// 1 -> 0
}),Animit(this.decomp.leave.toolbarCenter).queue({transform:'translate3d('+(1+swipeRatio)*125+'%, 0, 0)'}),Animit(this.decomp.leave.backButtonLabel).queue({opacity:-1*swipeRatio,// 1 -> 0
transform:'translate3d('+this.delta.title*(1+swipeRatio)+'px, 0, 0)'}),/* Other */Animit(this.swipeShadow).queue({opacity:-1*swipeRatio// 1 -> 0
}));}else{Animit.runAll(Animit(leavePage).queue({transform:'translate3d('+distance+'px, 0, 0)'}),Animit(enterPage).queue({transform:'translate3d('+swipeRatio*25+'%, 0, 0)',opacity:1+swipeRatio*10/100// 0.9 -> 1
}),Animit(this.swipeShadow).queue({opacity:-1*swipeRatio// 1 -> 0
}));}}},{key:'restore',value:function restore(enterPage,leavePage,callback){var _this2=this;if(this.isDragStart){return;}if(this.shouldAnimateToolbar){Animit.runAll(/* Enter page */Animit([this.decomp.enter.content,this.decomp.enter.bottomToolbar,this.decomp.enter.background]).queue({transform:'translate3d(-25%, 0, 0)',opacity:0.9},this.optRestore),Animit(this.decomp.enter.toolbarCenter).queue({transform:'translate3d(-'+this.delta.title+'px, 0, 0)',transition:'opacity '+this.durationRestore+'s linear, transform '+this.durationRestore+'s '+this.timingSwipe,opacity:0}),Animit(this.decomp.enter.backButtonLabel).queue({transform:'translate3d(-'+this.delta.label+'px, 0, 0)'},this.optRestore),Animit(this.decomp.enter.other).queue({opacity:0},this.optRestore),/* Leave page */Animit([this.decomp.leave.content,this.decomp.leave.bottomToolbar,this.decomp.leave.background,this.swipeShadow]).queue({transform:'translate3d(0, 0, 0)'},this.optRestore),Animit(this.decomp.leave.toolbar).queue({opacity:1},this.optRestore),Animit(this.decomp.leave.toolbarCenter).queue({transform:'translate3d(0, 0, 0)'},this.optRestore),Animit(this.decomp.leave.backButtonLabel).queue({opacity:1,transform:'translate3d(0, 0, 0)',transition:'opacity '+this.durationRestore+'s linear, transform '+this.durationRestore+'s '+this.timingSwipe}),/* Other */Animit(this.swipeShadow).queue({opacity:0},this.optRestore).queue(function(done){_this2._reset(_this2.target.enter,_this2.target.leave);enterPage.style.display='none';callback&&callback();done();}));}else{Animit.runAll(Animit(enterPage).queue({transform:'translate3D(-25%, 0, 0)',opacity:0.9},this.optRestore),Animit(leavePage).queue({transform:'translate3D(0, 0, 0)'},this.optRestore).queue(function(done){_this2._reset(enterPage,leavePage);enterPage.style.display='none';callback&&callback();done();}));}}},{key:'popSwipe',value:function popSwipe(enterPage,leavePage,callback){var _this3=this;if(this.isDragStart){return;}if(this.shouldAnimateToolbar){Animit.runAll(/* Enter page */Animit([this.decomp.enter.content,this.decomp.enter.bottomToolbar,this.decomp.enter.background]).queue({transform:'translate3d(0, 0, 0)',opacity:1},this.optSwipe),Animit(this.decomp.enter.toolbarCenter).queue({transform:'translate3d(0, 0, 0)',transition:'opacity '+this.durationSwipe+'s linear, transform '+this.durationSwipe+'s '+this.timingSwipe,opacity:1}),Animit(this.decomp.enter.backButtonLabel).queue({transform:'translate3d(0, 0, 0)'},this.optSwipe),Animit(this.decomp.enter.other).queue({opacity:1},this.optSwipe),/* Leave page */Animit([this.decomp.leave.content,this.decomp.leave.bottomToolbar,this.decomp.leave.background]).queue({transform:'translate3d(100%, 0, 0)'},this.optSwipe),Animit(this.decomp.leave.toolbar).queue({opacity:0},this.optSwipe),Animit(this.decomp.leave.toolbarCenter).queue({transform:'translate3d(125%, 0, 0)'},this.optSwipe),Animit(this.decomp.leave.backButtonLabel).queue({opacity:0,transform:'translate3d('+this.delta.title+'px, 0, 0)',transition:'opacity '+this.durationSwipe+'s linear, transform '+this.durationSwipe+'s '+this.timingSwipe}),/* Other */Animit(this.swipeShadow).queue({opacity:0,transform:'translate3d('+this.maxWidth+'px, 0, 0)'},this.optSwipe).queue(function(done){_this3._reset(_this3.target.enter,_this3.target.leave);callback&&callback();done();}));}else{Animit.runAll(Animit(enterPage).queue({transform:'translate3D(0, 0, 0)',opacity:1.0},this.optSwipe),Animit(leavePage).queue({transform:'translate3D(100%, 0, 0)'},this.optSwipe).queue(function(done){_this3._reset(enterPage,leavePage);callback&&callback();done();}));}}},{key:'_saveStyle',value:function _saveStyle(){var _this4=this;this._savedStyle=new WeakMap();var save=function save(el){return _this4._savedStyle.set(el,el.getAttribute('style'));};for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}args.forEach(save);Object.keys(this.decomp).forEach(function(p){Object.keys(_this4.decomp[p]).forEach(function(k){(_this4.decomp[p][k]instanceof Array?_this4.decomp[p][k]:[_this4.decomp[p][k]]).forEach(save);});});}},{key:'_restoreStyle',value:function _restoreStyle(){var _this5=this;var restore=function restore(el){_this5._savedStyle.get(el)===null?el.removeAttribute('style'):el.setAttribute('style',_this5._savedStyle.get(el));_this5._savedStyle["delete"](el);};for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}args.forEach(restore);Object.keys(this.decomp).forEach(function(p){Object.keys(_this5.decomp[p]).forEach(function(k){(_this5.decomp[p][k]instanceof Array?_this5.decomp[p][k]:[_this5.decomp[p][k]]).forEach(restore);});});}},{key:'_reset',value:function _reset(){this.isSwiping=false;this._savedStyle&&this._restoreStyle.apply(this,arguments);this.unblock&&this.unblock();this.swipeShadow.remove();this.backgroundMask.remove();this.overflowElement.classList.remove('overflow-visible');this.decomp.leave.content.classList.remove('content-swiping');this.decomp=this.target=this.overflowElement=this._savedStyle=null;this.isDragStart=true;}}]);return IOSSwipeNavigatorAnimator;}(NavigatorAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var translate3d=function translate3d(){var x=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var y=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var z=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;return'translate3d('+x+', '+y+', '+z+')';};/**
 * Slide animator for navigator transition like iOS's screen slide transition.
 */var IOSSlideNavigatorAnimator=function(_IOSSwipeNavigatorAni){inherits(IOSSlideNavigatorAnimator,_IOSSwipeNavigatorAni);function IOSSlideNavigatorAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _ref$timing=_ref.timing,timing=_ref$timing===undefined?'cubic-bezier(0.3, .4, 0, .9)':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.4:_ref$duration,rest=objectWithoutProperties(_ref,['timing','delay','duration']);classCallCheck(this,IOSSlideNavigatorAnimator);var _this=possibleConstructorReturn(this,(IOSSlideNavigatorAnimator.__proto__||Object.getPrototypeOf(IOSSlideNavigatorAnimator)).call(this,_extends({timing:timing,delay:delay,duration:duration},rest)));_this.backgroundMask=util$1.createElement('<div style="position: absolute; width: 100%; height: 100%;'+'background-color: black; z-index: 2"></div>');return _this;}createClass(IOSSlideNavigatorAnimator,[{key:'_decompose',value:function _decompose(page){var toolbar=page._getToolbarElement();var left=toolbar._getToolbarLeftItemsElement();var right=toolbar._getToolbarRightItemsElement();var excludeBackButton=function excludeBackButton(elements){var result=[];for(var i=0;i<elements.length;i++){if(elements[i].nodeName.toLowerCase()!=='ons-back-button'){result.push(elements[i]);}}return result;};var other=[].concat(left.children.length===0?left:excludeBackButton(left.children)).concat(right.children.length===0?right:excludeBackButton(right.children));return{toolbarCenter:toolbar._getToolbarCenterItemsElement(),backButtonIcon:toolbar._getToolbarBackButtonIconElement(),backButtonLabel:toolbar._getToolbarBackButtonLabelElement(),other:other,content:page._getContentElement(),background:page._getBackgroundElement(),toolbar:toolbar,bottomToolbar:page._getBottomToolbarElement()};}},{key:'_shouldAnimateToolbar',value:function _shouldAnimateToolbar(enterPage,leavePage){var toolbars=enterPage._canAnimateToolbar()&&leavePage._canAnimateToolbar();var enterToolbar=enterPage._getToolbarElement();var leaveToolbar=leavePage._getToolbarElement();var isStatic=enterToolbar.hasAttribute('static')||leaveToolbar.hasAttribute('static');var isMaterial=util$1.hasModifier(enterToolbar,'material')||util$1.hasModifier(leaveToolbar,'material');var isTransparent=util$1.hasModifier(enterToolbar,'transparent')||util$1.hasModifier(leaveToolbar,'transparent');return toolbars&&!isStatic&&!isMaterial&&!isTransparent;}},{key:'_calculateDelta',value:function _calculateDelta(element,decomposition){var title=void 0,label=void 0;var pageRect=element.getBoundingClientRect();if(decomposition.backButtonLabel.classList.contains('back-button__label')){var labelRect=decomposition.backButtonLabel.getBoundingClientRect();title=Math.round(pageRect.width/2-labelRect.width/2-labelRect.left);}else{title=Math.round(pageRect.width/2*0.6);}if(decomposition.backButtonIcon.classList.contains('back-button__icon')){label=decomposition.backButtonIcon.getBoundingClientRect().right-2;}return{title:title,label:label};}/**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} callback
     */},{key:'push',value:function push(enterPage,leavePage,callback){var _this2=this;this.backgroundMask.remove();leavePage.parentNode.insertBefore(this.backgroundMask,leavePage);var unblock=get(IOSSlideNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(IOSSlideNavigatorAnimator.prototype),'block',this).call(this,enterPage);contentReady(enterPage,function(){var enterPageTarget=util$1.findToolbarPage(enterPage)||enterPage;var leavePageTarget=util$1.findToolbarPage(leavePage)||leavePage;var enterPageDecomposition=_this2._decompose(enterPageTarget);var leavePageDecomposition=_this2._decompose(leavePageTarget);var delta=_this2._calculateDelta(leavePage,enterPageDecomposition);var shouldAnimateToolbar=_this2._shouldAnimateToolbar(enterPageTarget,leavePageTarget);if(shouldAnimateToolbar){Animit.runAll(Animit([enterPageDecomposition.content,enterPageDecomposition.bottomToolbar,enterPageDecomposition.background],_this2.def)["default"]({transform:translate3d('100%')},{transform:translate3d()}),Animit(enterPageDecomposition.toolbar,_this2.def)["default"]({opacity:0},{opacity:1}),Animit(enterPageDecomposition.toolbarCenter,_this2.def)["default"]({transform:translate3d('125%'),opacity:1},{transform:translate3d(),opacity:1}),Animit(enterPageDecomposition.backButtonLabel,_this2.def)["default"]({transform:translate3d(delta.title+'px'),opacity:0},{transform:translate3d(),opacity:1,transition:'opacity '+_this2.duration+'s linear, transform '+_this2.duration+'s '+_this2.timing}),Animit(enterPageDecomposition.other,_this2.def)["default"]({opacity:0},{css:{opacity:1},timing:'linear'}),Animit([leavePageDecomposition.content,leavePageDecomposition.bottomToolbar,leavePageDecomposition.background],_this2.def)["default"]({transform:translate3d(),opacity:1},{transform:translate3d('-25%'),opacity:0.9}).queue(function(done){_this2.backgroundMask.remove();unblock();callback();done();}),Animit(leavePageDecomposition.toolbarCenter,_this2.def)["default"]({transform:translate3d(),opacity:1},{transform:translate3d('-'+delta.title+'px'),opacity:0,transition:'opacity '+_this2.duration+'s linear, transform '+_this2.duration+'s '+_this2.timing}),Animit(leavePageDecomposition.backButtonLabel,_this2.def)["default"]({transform:translate3d(),opacity:1},{transform:translate3d('-'+delta.label+'px'),opacity:0}),Animit(leavePageDecomposition.other,_this2.def)["default"]({opacity:1},{css:{opacity:0},timing:'linear'}));}else{Animit.runAll(Animit(enterPage,_this2.def)["default"]({transform:translate3d('100%')},{transform:translate3d()}),Animit(leavePage,_this2.def)["default"]({transform:translate3d(),opacity:1},{transform:translate3d('-25%'),opacity:.9}).queue(function(done){_this2.backgroundMask.remove();unblock();callback();done();}));}});}/**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} callback
     */},{key:'pop',value:function pop(enterPage,leavePage,callback){var _this3=this;if(this.isSwiping){return this.popSwipe(enterPage,leavePage,callback);}this.backgroundMask.remove();enterPage.parentNode.insertBefore(this.backgroundMask,enterPage);var unblock=get(IOSSlideNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(IOSSlideNavigatorAnimator.prototype),'block',this).call(this,enterPage);var enterPageTarget=util$1.findToolbarPage(enterPage)||enterPage;var leavePageTarget=util$1.findToolbarPage(leavePage)||leavePage;var enterPageDecomposition=this._decompose(enterPageTarget);var leavePageDecomposition=this._decompose(leavePageTarget);var delta=this._calculateDelta(leavePage,leavePageDecomposition);var shouldAnimateToolbar=this._shouldAnimateToolbar(enterPageTarget,leavePageTarget);if(shouldAnimateToolbar){Animit.runAll(Animit([enterPageDecomposition.content,enterPageDecomposition.bottomToolbar,enterPageDecomposition.background],this.def)["default"]({transform:translate3d('-25%'),opacity:.9},{transform:translate3d(),opacity:1}),Animit(enterPageDecomposition.toolbarCenter,this.def)["default"]({transform:translate3d('-'+delta.title+'px'),opacity:0},{transform:translate3d(),opacity:1,transition:'opacity '+this.duration+'s linear, transform '+this.duration+'s '+this.timing}),Animit(enterPageDecomposition.backButtonLabel,this.def)["default"]({transform:translate3d('-'+delta.label+'px')},{transform:translate3d()}),Animit(enterPageDecomposition.other,this.def)["default"]({opacity:0},{css:{opacity:1},timing:'linear'}),Animit([leavePageDecomposition.content,leavePageDecomposition.bottomToolbar,leavePageDecomposition.background],this.def)["default"]({transform:translate3d()},{transform:translate3d('100%')}).wait(0).queue(function(done){_this3.backgroundMask.remove();unblock();callback();done();}),Animit(leavePageDecomposition.toolbar,this.def)["default"]({opacity:1},{opacity:0}),Animit(leavePageDecomposition.toolbarCenter,this.def)["default"]({transform:translate3d()},{transform:translate3d('125%')}),Animit(leavePageDecomposition.backButtonLabel,this.def)["default"]({transform:translate3d(),opacity:1},{transform:translate3d(delta.title+'px'),opacity:0,transition:'opacity '+this.duration+'s linear, transform '+this.duration+'s '+this.timing}));}else{Animit.runAll(Animit(enterPage,this.def)["default"]({transform:translate3d('-25%'),opacity:.9},{transform:translate3d(),opacity:1}),Animit(leavePage,this.def)["default"]({transform:translate3d()},{transform:translate3d('100%')}).queue(function(done){_this3.backgroundMask.remove();unblock();callback();done();}));}}}]);return IOSSlideNavigatorAnimator;}(IOSSwipeNavigatorAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * Lift screen transition.
 */var IOSLiftNavigatorAnimator=function(_NavigatorAnimator){inherits(IOSLiftNavigatorAnimator,_NavigatorAnimator);function IOSLiftNavigatorAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'cubic-bezier(.1, .7, .1, 1)':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.4:_ref$duration;classCallCheck(this,IOSLiftNavigatorAnimator);var _this=possibleConstructorReturn(this,(IOSLiftNavigatorAnimator.__proto__||Object.getPrototypeOf(IOSLiftNavigatorAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));_this.backgroundMask=util$1.createElement('<div style="position: absolute; width: 100%; height: 100%;'+'background: linear-gradient(black, white);"></div>');return _this;}/**
   * @param {Object} enterPage
   * @param {Object} leavePage
   * @param {Function} callback
   */createClass(IOSLiftNavigatorAnimator,[{key:'push',value:function push(enterPage,leavePage,callback){var _this2=this;this.backgroundMask.remove();leavePage.parentNode.insertBefore(this.backgroundMask,leavePage);var unblock=get(IOSLiftNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(IOSLiftNavigatorAnimator.prototype),'block',this).call(this,enterPage);Animit.runAll(Animit(enterPage,this.def)["default"]({transform:'translate3D(0, 100%, 0)'},{transform:'translate3D(0, 0, 0)'}),Animit(leavePage,this.def)["default"]({transform:'translate3D(0, 0, 0)',opacity:1},{transform:'translate3D(0, -10%, 0)',opacity:.9}).queue(function(done){_this2.backgroundMask.remove();unblock();callback();done();}));}/**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} callback
     */},{key:'pop',value:function pop(enterPage,leavePage,callback){var _this3=this;this.backgroundMask.remove();enterPage.parentNode.insertBefore(this.backgroundMask,enterPage);var unblock=get(IOSLiftNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(IOSLiftNavigatorAnimator.prototype),'block',this).call(this,enterPage);Animit.runAll(Animit(enterPage,this.def)["default"]({transform:'translate3D(0, -43px, 0)',opacity:.9},{transform:'translate3D(0, 0, 0)',opacity:1}).queue(function(done){_this3.backgroundMask.remove();unblock();callback();done();}),Animit(leavePage,this.def)["default"]({transform:'translate3D(0, 0, 0)'},{transform:'translate3D(0, 100%, 0)'}));}}]);return IOSLiftNavigatorAnimator;}(NavigatorAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var transform='translate3d(0, 0, 0)';/**
 * Fade-in screen transition.
 */var IOSFadeNavigatorAnimator=function(_NavigatorAnimator){inherits(IOSFadeNavigatorAnimator,_NavigatorAnimator);function IOSFadeNavigatorAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'linear':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.4:_ref$duration;classCallCheck(this,IOSFadeNavigatorAnimator);return possibleConstructorReturn(this,(IOSFadeNavigatorAnimator.__proto__||Object.getPrototypeOf(IOSFadeNavigatorAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));}/**
   * @param {Object} enterPage
   * @param {Object} leavePage
   * @param {Function} callback
   */createClass(IOSFadeNavigatorAnimator,[{key:'push',value:function push(enterPage,leavePage,callback){var unblock=get(IOSFadeNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(IOSFadeNavigatorAnimator.prototype),'block',this).call(this,enterPage);Animit.runAll(Animit(enterPage,this.def)["default"]({transform:transform,opacity:0},{transform:transform,opacity:1}).queue(function(done){unblock();callback();done();}));}/**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} done
     */},{key:'pop',value:function pop(enterPage,leavePage,callback){var unblock=get(IOSFadeNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(IOSFadeNavigatorAnimator.prototype),'block',this).call(this,enterPage);Animit.runAll(Animit(leavePage,this.def)["default"]({transform:transform,opacity:1},{transform:transform,opacity:0}).queue(function(done){unblock();callback();done();}));}}]);return IOSFadeNavigatorAnimator;}(NavigatorAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * Slide animator for navigator transition.
 */var MDSlideNavigatorAnimator=function(_NavigatorAnimator){inherits(MDSlideNavigatorAnimator,_NavigatorAnimator);function MDSlideNavigatorAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'cubic-bezier(.1, .7, .4, 1)':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.3:_ref$duration;classCallCheck(this,MDSlideNavigatorAnimator);var _this=possibleConstructorReturn(this,(MDSlideNavigatorAnimator.__proto__||Object.getPrototypeOf(MDSlideNavigatorAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));_this.blackMaskOpacity=0.4;_this.backgroundMask=util$1.createElement('<div style="position: absolute; width: 100%; height: 100%; z-index: 2;'+'background-color: black; opacity: 0;"></div>');return _this;}/**
   * @param {Object} enterPage
   * @param {Object} leavePage
   * @param {Function} callback
   */createClass(MDSlideNavigatorAnimator,[{key:'push',value:function push(enterPage,leavePage,callback){var _this2=this;this.backgroundMask.remove();leavePage.parentElement.insertBefore(this.backgroundMask,leavePage.nextSibling);var unblock=get(MDSlideNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(MDSlideNavigatorAnimator.prototype),'block',this).call(this,enterPage);Animit.runAll(Animit(this.backgroundMask,this.def)["default"]({transform:'translate3d(0, 0, 0)',opacity:0},{opacity:this.blackMaskOpacity}).queue(function(done){_this2.backgroundMask.remove();done();}),Animit(enterPage,this.def)["default"]({transform:'translate3d(100%, 0, 0)'},{transform:'translate3d(0, 0, 0)'}),Animit(leavePage,this.def)["default"]({transform:'translate3d(0, 0, 0)'},{transform:'translate3d(-45%, 0, 0)'}).queue(function(done){unblock();callback();done();}));}/**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} callback
     */},{key:'pop',value:function pop(enterPage,leavePage,callback){var _this3=this;this.backgroundMask.remove();enterPage.parentNode.insertBefore(this.backgroundMask,enterPage.nextSibling);var unblock=get(MDSlideNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(MDSlideNavigatorAnimator.prototype),'block',this).call(this,enterPage);Animit.runAll(Animit(this.backgroundMask,this.def)["default"]({transform:'translate3d(0, 0, 0)',opacity:this.blackMaskOpacity},{opacity:0}).queue(function(done){_this3.backgroundMask.remove();done();}),Animit(enterPage,this.def)["default"]({transform:'translate3d(-45%, 0, 0)',opacity:.9},{transform:'translate3d(0, 0, 0)',opacity:1}),Animit(leavePage,this.def)["default"]({transform:'translate3d(0, 0, 0)'},{transform:'translate3d(100%, 0, 0)'}).queue(function(done){unblock();callback();done();}));}}]);return MDSlideNavigatorAnimator;}(NavigatorAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * Lift screen transition.
 */var MDLiftNavigatorAnimator=function(_NavigatorAnimator){inherits(MDLiftNavigatorAnimator,_NavigatorAnimator);function MDLiftNavigatorAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'cubic-bezier(.1, .7, .1, 1)':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0.05:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.4:_ref$duration;classCallCheck(this,MDLiftNavigatorAnimator);var _this=possibleConstructorReturn(this,(MDLiftNavigatorAnimator.__proto__||Object.getPrototypeOf(MDLiftNavigatorAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));_this.backgroundMask=util$1.createElement('<div style="position: absolute; width: 100%; height: 100%;'+'background-color: black;"></div>');return _this;}/**
   * @param {Object} enterPage
   * @param {Object} leavePage
   * @param {Function} callback
   */createClass(MDLiftNavigatorAnimator,[{key:'push',value:function push(enterPage,leavePage,callback){var _this2=this;this.backgroundMask.remove();leavePage.parentNode.insertBefore(this.backgroundMask,leavePage);var unblock=get(MDLiftNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(MDLiftNavigatorAnimator.prototype),'block',this).call(this,enterPage);var maskClear=Animit(this.backgroundMask).wait(this.delay+this.duration).queue(function(done){_this2.backgroundMask.remove();done();});Animit.runAll(maskClear,Animit(enterPage,this.def)["default"]({transform:'translate3d(0, 100%, 0)'},{transform:'translate3d(0, 0, 0)'}),Animit(leavePage,this.def)["default"]({opacity:1},{opacity:.4}).queue(function(done){unblock();callback();done();}));}/**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} callback
     */},{key:'pop',value:function pop(enterPage,leavePage,callback){var _this3=this;this.backgroundMask.remove();enterPage.parentNode.insertBefore(this.backgroundMask,enterPage);var unblock=get(MDLiftNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(MDLiftNavigatorAnimator.prototype),'block',this).call(this,enterPage);Animit.runAll(Animit(this.backgroundMask).wait(this.delay+this.duration).queue(function(done){_this3.backgroundMask.remove();done();}),Animit(enterPage,this.def)["default"]({opacity:.4},{opacity:1}).queue(function(done){unblock();callback();done();}),Animit(leavePage,this.def)["default"]({transform:'translate3d(0, 0, 0)'},{transform:'translate3d(0, 100%, 0)'}));}}]);return MDLiftNavigatorAnimator;}(NavigatorAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * Fade-in + Lift screen transition.
 */var MDFadeNavigatorAnimator=function(_NavigatorAnimator){inherits(MDFadeNavigatorAnimator,_NavigatorAnimator);function MDFadeNavigatorAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'cubic-bezier(0.4, 0, 0.2, 1)':_ref$timing,_ref$timingPop=_ref.timingPop,timingPop=_ref$timingPop===undefined?'cubic-bezier(0.4, 0, 1, 1)':_ref$timingPop,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.2:_ref$duration;classCallCheck(this,MDFadeNavigatorAnimator);var _this=possibleConstructorReturn(this,(MDFadeNavigatorAnimator.__proto__||Object.getPrototypeOf(MDFadeNavigatorAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));_this.timingPop=timingPop;return _this;}/**
   * @param {Object} enterPage
   * @param {Object} leavePage
   * @param {Function} callback
   */createClass(MDFadeNavigatorAnimator,[{key:'push',value:function push(enterPage,leavePage,callback){var unblock=get(MDFadeNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(MDFadeNavigatorAnimator.prototype),'block',this).call(this,enterPage);Animit.runAll(Animit(enterPage,this.def)["default"]({transform:'translate3D(0, 42px, 0)',opacity:0},{transform:'translate3D(0, 0, 0)',opacity:1}).queue(function(done){unblock();callback();done();}));}/**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} done
     */},{key:'pop',value:function pop(enterPage,leavePage,callback){var unblock=get(MDFadeNavigatorAnimator.prototype.__proto__||Object.getPrototypeOf(MDFadeNavigatorAnimator.prototype),'block',this).call(this,enterPage);Animit.runAll(Animit(leavePage,this.def)["default"]({transform:'translate3D(0, 0, 0)',opacity:1},{css:{transform:'translate3D(0, 38px, 0)',opacity:0},timing:this.timingPop}).queue(function(done){unblock();callback();done();}));}}]);return MDFadeNavigatorAnimator;}(NavigatorAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var NoneNavigatorAnimator=function(_NavigatorAnimator){inherits(NoneNavigatorAnimator,_NavigatorAnimator);function NoneNavigatorAnimator(options){classCallCheck(this,NoneNavigatorAnimator);return possibleConstructorReturn(this,(NoneNavigatorAnimator.__proto__||Object.getPrototypeOf(NoneNavigatorAnimator)).call(this,options));}createClass(NoneNavigatorAnimator,[{key:'push',value:function push(enterPage,leavePage,callback){callback();}},{key:'pop',value:function pop(enterPage,leavePage,callback){callback();}}]);return NoneNavigatorAnimator;}(NavigatorAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var _animatorDict$5={'default':function _default(){return platform.isAndroid()?MDFadeNavigatorAnimator:IOSSlideNavigatorAnimator;},'slide':function slide(){return platform.isAndroid()?MDSlideNavigatorAnimator:IOSSlideNavigatorAnimator;},'lift':function lift(){return platform.isAndroid()?MDLiftNavigatorAnimator:IOSLiftNavigatorAnimator;},'fade':function fade(){return platform.isAndroid()?MDFadeNavigatorAnimator:IOSFadeNavigatorAnimator;},'slide-ios':IOSSlideNavigatorAnimator,'slide-md':MDSlideNavigatorAnimator,'lift-ios':IOSLiftNavigatorAnimator,'lift-md':MDLiftNavigatorAnimator,'fade-ios':IOSFadeNavigatorAnimator,'fade-md':MDFadeNavigatorAnimator,'none':NoneNavigatorAnimator};var rewritables={/**
   * @param {Element} navigatorSideElement
   * @param {Function} callback
   */ready:function ready(navigatorElement,callback){callback();}};var verifyPageElement=function verifyPageElement(el){return el.nodeName!=='ONS-PAGE'&&util$1["throw"]('Only page elements can be children of navigator');};/**
 * @element ons-navigator
 * @category navigation
 * @description
 *   [en]
 *     A component that provides page stack management and navigation. Stack navigation is the most common navigation pattern for mobile apps.
 *
 *     When a page is pushed on top of the stack it is displayed with a transition animation. When the user returns to the previous page the top page will be popped from the top of the stack and hidden with an opposite transition animation.
 *   [/en]
 *   [ja][/ja]
 * @codepen yrhtv
 * @tutorial vanilla/Reference/navigator
 * @guide lifecycle.html#events
 *   [en]Overview of page events[/en]
 *   [ja]Overview of page events[/ja]
 * @seealso ons-toolbar
 *   [en]The `<ons-toolbar>` component is used to display a toolbar on the top of a page.[/en]
 *   [ja][/ja]
 * @seealso ons-back-button
 *   [en]The `<ons-back-button>` component lets the user return to the previous page.[/en]
 *   [ja][/ja]
 * @example
 * <ons-navigator id="navigator">
 *   <ons-page>
 *     <ons-toolbar>
 *       <div class="center">
 *         Title
 *       </div>
 *     </ons-toolbar>
 *     <p>
 *       <ons-button
 *         onclick="document.getElementById('navigator').pushPage('page.html')">
 *         Push page
 *       </ons-button>
 *     </p>
 *   </ons-page>
 * </ons-navigator>
 *
 * <template id="page.html">
 *   <ons-page>
 *     <ons-toolbar>
 *       <div class="left">
 *         <ons-back-button>Back</ons-back-button>
 *       </div>
 *       <div class="center">
 *         Another page
 *       </div>
 *     </ons-toolbar>
 *   </ons-page>
 * </template>
 */var NavigatorElement=function(_BaseElement){inherits(NavigatorElement,_BaseElement);createClass(NavigatorElement,[{key:'animatorFactory',/**
     * @attribute page
     * @initonly
     * @type {String}
     * @description
     *   [en]First page to show when navigator is initialized.[/en]
     *   [ja]ナビゲーターが初期化された時に表示するページを指定します。[/ja]
     */ /**
     * @attribute swipeable
     * @type {Boolean}
     * @description
     *   [en]Enable iOS "swipe to pop" feature.[/en]
     *   [ja][/ja]
     */ /**
     * @attribute swipe-target-width
     * @type {String}
     * @default 20px
     * @description
     *   [en]The width of swipeable area calculated from the edge (in pixels). Use this to enable swipe only when the finger touch on the screen edge.[/en]
     *   [ja]スワイプの判定領域をピクセル単位で指定します。画面の端から指定した距離に達するとページが表示されます。[/ja]
     */ /**
     * @attribute swipe-threshold
     * @type {Number}
     * @default 0.2
     * @description
     *  [en]Specify how much the page needs to be swiped before popping. A value between `0` and `1`.[/en]
     *  [ja][/ja]
     */ /**
     * @attribute animation
     * @type {String}
     * @default default
     * @description
     *   [en]
     *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
     *
     *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"` depending on the platform.
     *   [/en]
     *   [ja][/ja]
     */ /**
     * @attribute animation-options
     * @type {Expression}
     * @description
     *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`[/en]
     *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`[/ja]
     */ /**
     * @event prepush
     * @description
     *   [en]Fired just before a page is pushed.[/en]
     *   [ja]pageがpushされる直前に発火されます。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.navigator
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Object} event.currentPage
     *   [en]Current page object.[/en]
     *   [ja]現在のpageオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Call this function to cancel the push.[/en]
     *   [ja]この関数を呼び出すと、push処理がキャンセルされます。[/ja]
     */ /**
     * @event prepop
     * @description
     *   [en]Fired just before a page is popped.[/en]
     *   [ja]pageがpopされる直前に発火されます。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.navigator
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Object} event.currentPage
     *   [en]Current page object.[/en]
     *   [ja]現在のpageオブジェクト。[/ja]
     * @param {Function} event.cancel
     *   [en]Call this function to cancel the pop.[/en]
     *   [ja]この関数を呼び出すと、pageのpopがキャンセルされます。[/ja]
     */ /**
     * @event postpush
     * @description
     *   [en]Fired just after a page is pushed.[/en]
     *   [ja]pageがpushされてアニメーションが終了してから発火されます。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.navigator
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Object} event.enterPage
     *   [en]Object of the next page.[/en]
     *   [ja]pushされたpageオブジェクト。[/ja]
     * @param {Object} event.leavePage
     *   [en]Object of the previous page.[/en]
     *   [ja]以前のpageオブジェクト。[/ja]
     */ /**
     * @event postpop
     * @description
     *   [en]Fired just after a page is popped.[/en]
     *   [ja]pageがpopされてアニメーションが終わった後に発火されます。[/ja]
     * @param {Object} event [en]Event object.[/en]
     * @param {Object} event.navigator
     *   [en]Component object.[/en]
     *   [ja]コンポーネントのオブジェクト。[/ja]
     * @param {Object} event.enterPage
     *   [en]Object of the next page.[/en]
     *   [ja]popされて表示されるページのオブジェクト。[/ja]
     * @param {Object} event.leavePage
     *   [en]Object of the previous page.[/en]
     *   [ja]popされて消えるページのオブジェクト。[/ja]
     */get:function get$$1(){return this._animatorFactory;}}]);function NavigatorElement(){classCallCheck(this,NavigatorElement);var _this=possibleConstructorReturn(this,(NavigatorElement.__proto__||Object.getPrototypeOf(NavigatorElement)).call(this));_this._isRunning=false;_this._initialized=false;_this._pageLoader=defaultPageLoader;_this._pageMap=new WeakMap();_this._updateAnimatorFactory();return _this;}/**
   * @property pageLoader
   * @type {PageLoader}
   * @description
   *   [en]PageLoader instance. It can be overriden to change the way pages are loaded by this element. Useful for lib developers.[/en]
   *   [ja]PageLoaderインスタンスを格納しています。[/ja]
   */createClass(NavigatorElement,[{key:'_getPageTarget',value:function _getPageTarget(){return this._page||this.getAttribute('page');}/**
     * @property page
     * @type {*}
     * @description
     *   [en]Specify the page to be loaded during initialization. This value takes precedence over the `page` attribute. Useful for lib developers.[/en]
     *   [ja]初期化時に読み込むページを指定します。`page`属性で指定した値よりも`page`プロパティに指定した値を優先します。[/ja]
     */},{key:'connectedCallback',value:function connectedCallback(){var _this2=this;this.onDeviceBackButton=this._onDeviceBackButton.bind(this);if(!platform.isAndroid()||this.getAttribute('swipeable')==='force'){var swipeAnimator=void 0;this._swipe=new SwipeReveal({element:this,getThreshold:function getThreshold(){return Math.max(0.2,parseFloat(_this2.getAttribute('swipe-threshold'))||0);},swipeMax:function swipeMax(){_this2._onSwipe&&_this2._onSwipe(1,{duration:swipeAnimator.durationSwipe,timing:swipeAnimator.timingSwipe});_this2[_this2.swipeMax?'swipeMax':'popPage']({animator:swipeAnimator});swipeAnimator=null;},swipeMid:function swipeMid(distance,width){_this2._onSwipe&&_this2._onSwipe(distance/width);swipeAnimator.translate(distance,width,_this2.topPage.previousElementSibling,_this2.topPage);},swipeMin:function swipeMin(){_this2._onSwipe&&_this2._onSwipe(0,{duration:swipeAnimator.durationRestore,timing:swipeAnimator.timingSwipe});swipeAnimator.restore(_this2.topPage.previousElementSibling,_this2.topPage);swipeAnimator=null;},ignoreSwipe:function ignoreSwipe(event,distance){// Basic conditions
if(!_this2._isRunning&&_this2.children.length>1){// Area or directional issues
var area=parseInt(_this2.getAttribute('swipe-target-width')||25,10);if(event.gesture.direction==='right'&&area>distance){// Swipes on ons-back-button and its children
var isBB=function isBB(el){return /ons-back-button/i.test(el.tagName);};if(!isBB(event.target)&&!util$1.findParent(event.target,isBB,function(p){return /ons-page/i.test(p.tagName);})){// Animator is swipeable
var animation=(_this2.topPage.pushedOptions||{}).animation||_this2.animatorFactory._animation;var Animator=_animatorDict$5[animation]instanceof Function?_animatorDict$5[animation].call():_animatorDict$5[animation];if(typeof Animator!=='undefined'&&Animator.swipeable){swipeAnimator=new Animator();// Prepare for the swipe
return false;}}}}return true;// Ignore swipe
}});this.attributeChangedCallback('swipeable');}if(this._initialized){return;}this._initialized=true;var deferred=util$1.defer();this.loaded=deferred.promise;rewritables.ready(this,function(){var show=!util$1.hasAnyComponentAsParent(_this2);var options={animation:'none',show:show};if(_this2.pages.length===0&&_this2._getPageTarget()){_this2.pushPage(_this2._getPageTarget(),options).then(function(){return deferred.resolve();});}else if(_this2.pages.length>0){for(var i=0;i<_this2.pages.length;i++){verifyPageElement(_this2.pages[i]);}if(_this2.topPage){contentReady(_this2.topPage,function(){return setTimeout(function(){deferred.resolve();show&&_this2.topPage._show();_this2._updateLastPageBackButton();},0);});}}else{contentReady(_this2,function(){if(_this2.pages.length===0&&_this2._getPageTarget()){_this2.pushPage(_this2._getPageTarget(),options).then(function(){return deferred.resolve();});}else{deferred.resolve();}});}});}},{key:'_updateAnimatorFactory',value:function _updateAnimatorFactory(){this._animatorFactory=new AnimatorFactory({animators:_animatorDict$5,baseClass:NavigatorAnimator,baseClassName:'NavigatorAnimator',defaultAnimation:this.getAttribute('animation')});}},{key:'disconnectedCallback',value:function disconnectedCallback(){this._backButtonHandler.destroy();this._backButtonHandler=null;this._swipe&&this._swipe.dispose();this._swipe=null;}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'animation':this._updateAnimatorFactory();break;case'swipeable':this._swipe&&this._swipe.update();break;}}/**
     * @method popPage
     * @signature popPage([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]
     *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
     *
     *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
     *   [/en]
     *   [ja][/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @param {Function} [options.callback]
     *   [en]Function that is called when the transition has ended.[/en]
     *   [ja]このメソッドによる画面遷移が終了した際に呼び出される関数オブジェクトを指定します。[/ja]
     * @param {Object} [options.data]
     *   [en]Custom data that will be stored in the new page element.[/en]
     *   [ja][/ja]
     * @param {Number} [options.times]
     *   [en]Number of pages to be popped. Only one animation will be shown.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en]Pops the current page from the page stack. The previous page will be displayed.[/en]
     *   [ja]現在表示中のページをページスタックから取り除きます。一つ前のページに戻ります。[/ja]
     */},{key:'popPage',value:function popPage(){var _this3=this;var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _preparePageAndOption=this._preparePageAndOptions(null,options);options=_preparePageAndOption.options;if(util$1.isInteger(options.times)&&options.times>1){this._removePages(options.times);}var popUpdate=function popUpdate(){return new Promise(function(resolve){_this3._pageLoader.unload(_this3.pages[_this3.pages.length-1]);resolve();});};return this._popPage(options,popUpdate);}},{key:'_popPage',value:function _popPage(options){var _this4=this;var update=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){return Promise.resolve();};if(this._isRunning){return Promise.reject('popPage is already running.');}if(this.pages.length<=1){return Promise.reject('ons-navigator\'s page stack is empty.');}if(this._emitPrePopEvent()){return Promise.reject('Canceled in prepop event.');}var length=this.pages.length;this._isRunning=true;this.pages[length-2].updateBackButton(length-2>0);return new Promise(function(resolve){var leavePage=_this4.pages[length-1];var enterPage=_this4.pages[length-2];options=util$1.extend({},_this4.options||{},options);if(options.data){enterPage.data=util$1.extend({},enterPage.data||{},options.data||{});}var done=function done(){update().then(function(){_this4._isRunning=false;enterPage._show();util$1.triggerElementEvent(_this4,'postpop',{leavePage:leavePage,enterPage:enterPage,navigator:_this4});options.callback&&options.callback(enterPage);resolve(enterPage);});};leavePage._hide();enterPage.style.display='';var animator=options.animator||_this4._animatorFactory.newAnimator(options);animator.pop(_this4.pages[length-2],_this4.pages[length-1],done);})["catch"](function(){return _this4._isRunning=false;});}/**
     * @method pushPage
     * @signature pushPage(page, [options])
     * @param {String} page
     *   [en]Page URL. Can be either a HTML document or a template defined with the `<template>` tag.[/en]
     *   [ja]pageのURLか、もしくは`<template>`で宣言したテンプレートのid属性の値を指定できます。[/ja]
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.page]
     *   [en]Page URL. Only necessary if `page` parameter is null or undefined.[/en]
     *   [ja][/ja]
     * @param {String} [options.pageHTML]
     *   [en]HTML code that will be computed as a new page. Overwrites `page` parameter.[/en]
     *   [ja][/ja]
     * @param {String} [options.animation]
     *   [en]
     *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
     *
     *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
     *   [/en]
     *   [ja][/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}` [/ja]
     * @param {Function} [options.callback]
     *   [en]Function that is called when the transition has ended.[/en]
     *   [ja]pushPage()による画面遷移が終了した時に呼び出される関数オブジェクトを指定します。[/ja]
     * @param {Object} [options.data]
     *   [en]Custom data that will be stored in the new page element.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the pushed page.[/en]
     *   [ja]追加したページを解決するPromiseを返します。[/ja]
     * @description
     *   [en]Pushes the specified page into the stack.[/en]
     *   [ja]指定したpageを新しいページスタックに追加します。新しいページが表示されます。[/ja]
     */},{key:'pushPage',value:function pushPage(page){var _this5=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _preparePageAndOption2=this._preparePageAndOptions(page,options);page=_preparePageAndOption2.page;options=_preparePageAndOption2.options;var prepare=function prepare(pageElement){verifyPageElement(pageElement);_this5._pageMap.set(pageElement,page);pageElement=util$1.extend(pageElement,{data:options.data});pageElement.style.visibility='hidden';};if(options.pageHTML){return this._pushPage(options,function(){return new Promise(function(resolve){instantPageLoader.load({page:options.pageHTML,parent:_this5,params:options.data},function(pageElement){prepare(pageElement);resolve();});});});}return this._pushPage(options,function(){return new Promise(function(resolve){_this5._pageLoader.load({page:page,parent:_this5,params:options.data},function(pageElement){prepare(pageElement);resolve();},function(error){_this5._isRunning=false;throw error;});});});}},{key:'_pushPage',value:function _pushPage(){var _this6=this;var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var update=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){return Promise.resolve();};if(this._isRunning){return Promise.reject('pushPage is already running.');}if(this._emitPrePushEvent()){return Promise.reject('Canceled in prepush event.');}this._isRunning=true;var animationOptions=AnimatorFactory.parseAnimationOptionsString(this.getAttribute('animation-options'));options=util$1.extend({},this.options||{},{animationOptions:animationOptions},options);var animator=this._animatorFactory.newAnimator(options);return update().then(function(){var pageLength=_this6.pages.length;var enterPage=_this6.pages[pageLength-1];var leavePage=options.leavePage||_this6.pages[pageLength-2];verifyPageElement(enterPage);enterPage.updateBackButton(pageLength>(options._replacePage?2:1));enterPage.pushedOptions=util$1.extend({},enterPage.pushedOptions||{},options||{});enterPage.data=util$1.extend({},enterPage.data||{},options.data||{});enterPage.unload=enterPage.unload||options.unload;return new Promise(function(resolve){var done=function done(){_this6._isRunning=false;options.show!==false&&setImmediate(function(){return enterPage._show();});util$1.triggerElementEvent(_this6,'postpush',{leavePage:leavePage,enterPage:enterPage,navigator:_this6});if(leavePage){leavePage.style.display='none';}options.callback&&options.callback(enterPage);resolve(enterPage);};enterPage.style.visibility='';if(leavePage){leavePage._hide();animator.push(enterPage,leavePage,done);}else{done();}});})["catch"](function(error){_this6._isRunning=false;throw error;});}/**
     * @method replacePage
     * @signature replacePage(page, [options])
     * @return {Promise}
     *   [en]Promise which resolves to the new page.[/en]
     *   [ja]新しいページを解決するPromiseを返します。[/ja]
     * @description
     *   [en]Replaces the current top page with the specified one. Extends `pushPage()` parameters.[/en]
     *   [ja]現在表示中のページをを指定したページに置き換えます。[/ja]
     */},{key:'replacePage',value:function replacePage(page){var _this7=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return this.pushPage(page,options).then(function(resolvedValue){if(_this7.pages.length>1){_this7._pageLoader.unload(_this7.pages[_this7.pages.length-2]);}_this7._updateLastPageBackButton();return Promise.resolve(resolvedValue);});}/**
     * @method insertPage
     * @signature insertPage(index, page, [options])
     * @param {Number} index
     *   [en]The index where it should be inserted.[/en]
     *   [ja]スタックに挿入する位置のインデックスを指定します。[/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the inserted page.[/en]
     *   [ja]指定したページを解決するPromiseを返します。[/ja]
     * @description
     *   [en]Insert the specified page into the stack with at a position defined by the `index` argument. Extends `pushPage()` parameters.[/en]
     *   [ja]指定したpageをページスタックのindexで指定した位置に追加します。[/ja]
     */},{key:'insertPage',value:function insertPage(index,page){var _this8=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var _preparePageAndOption3=this._preparePageAndOptions(page,options);page=_preparePageAndOption3.page;options=_preparePageAndOption3.options;index=this._normalizeIndex(index);if(index>=this.pages.length){return this.pushPage(page,options);}page=typeof options.pageHTML==='string'?options.pageHTML:page;var loader=typeof options.pageHTML==='string'?instantPageLoader:this._pageLoader;return new Promise(function(resolve){loader.load({page:page,parent:_this8},function(pageElement){verifyPageElement(pageElement);_this8._pageMap.set(pageElement,page);pageElement=util$1.extend(pageElement,{data:options.data,pushedOptions:options});options.animationOptions=util$1.extend({},AnimatorFactory.parseAnimationOptionsString(_this8.getAttribute('animation-options')),options.animationOptions||{});pageElement.style.display='none';_this8.insertBefore(pageElement,_this8.pages[index]);_this8.topPage.updateBackButton(true);setTimeout(function(){pageElement=null;resolve(_this8.pages[index]);},1000/60);});});}/**
     * @method removePage
     * @signature removePage(index, [options])
     * @param {Number} index
     *   [en]The index where it should be removed.[/en]
     *   [ja]スタックから削除するページのインデックスを指定します。[/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the revealed page.[/en]
     *   [ja]削除によって表示されたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en]Remove the specified page at a position in the stack defined by the `index` argument. Extends `popPage()` parameters.[/en]
     *   [ja]指定したインデックスにあるページを削除します。[/ja]
     */},{key:'removePage',value:function removePage(index){var _this9=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};index=this._normalizeIndex(index);if(index<this.pages.length-1){return new Promise(function(resolve){var leavePage=_this9.pages[index];var enterPage=_this9.topPage;_this9._pageMap["delete"](leavePage);_this9._pageLoader.unload(leavePage);if(_this9.pages.length===1){// edge case
_this9.topPage.updateBackButton(false);}resolve(enterPage);});}else{return this.popPage(options);}}/**
     * @method resetToPage
     * @signature resetToPage(page, [options])
     * @return {Promise}
     *   [en]Promise which resolves to the new top page.[/en]
     *   [ja]新しいトップページを解決するPromiseを返します。[/ja]
     * @param {Boolean} [options.pop]
     *   [en]Performs 'pop' effect if `true` instead of 'push' or none. This also sets `options.animation` value to `default` instead of `none`.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Clears page stack and adds the specified page to the stack. Extends `pushPage()` parameters.[/en]
     *   [ja]ページスタックをリセットし、指定したページを表示します。[/ja]
     */},{key:'resetToPage',value:function resetToPage(page){var _this10=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _preparePageAndOption4=this._preparePageAndOptions(page,options);page=_preparePageAndOption4.page;options=_preparePageAndOption4.options;if(!options.animator&&!options.animation&&!options.pop){options.animation='none';}if(!options.page&&!options.pageHTML&&this._getPageTarget()){page=options.page=this._getPageTarget();}if(options.pop){this._removePages();return this.insertPage(0,page,{data:options.data}).then(function(){return _this10.popPage(options);});}// Tip: callback runs before resolved promise
var callback=options.callback;options.callback=function(newPage){_this10._removePages();newPage.updateBackButton(false);callback&&callback(newPage);};return this.pushPage(page,options);}/**
     * @method bringPageTop
     * @signature bringPageTop(item, [options])
     * @param {String|Number} item
     *   [en]Page URL or index of an existing page in navigator's stack.[/en]
     *   [ja]ページのURLかもしくはons-navigatorのページスタックのインデックス値を指定します。[/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the new top page.[/en]
     *   [ja]新しいトップページを解決するPromiseを返します。[/ja]
     * @description
     *   [en]Brings the given page to the top of the page stack if it already exists or pushes it into the stack if doesn't. Extends `pushPage()` parameters.[/en]
     *   [ja]指定したページをページスタックの一番上に移動します。もし指定したページが無かった場合新しくpushされます。[/ja]
     */},{key:'bringPageTop',value:function bringPageTop(item){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(['number','string'].indexOf(typeof item==='undefined'?'undefined':_typeof(item))===-1){util$1["throw"]('First argument must be a page name or the index of an existing page. You supplied '+item);}var index=typeof item==='number'?this._normalizeIndex(item):this._lastIndexOfPage(item);var page=this.pages[index];if(index<0){return this.pushPage(item,options);}var _preparePageAndOption5=this._preparePageAndOptions(page,options);options=_preparePageAndOption5.options;if(index===this.pages.length-1){return Promise.resolve(page);}if(!page){util$1["throw"]('Failed to find item '+item);}if(this._isRunning){return Promise.reject('pushPage is already running.');}if(this._emitPrePushEvent()){return Promise.reject('Canceled in prepush event.');}page.style.display='';page.style.visibility='hidden';page.parentNode.appendChild(page);return this._pushPage(options);}},{key:'_preparePageAndOptions',value:function _preparePageAndOptions(page){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if((typeof options==='undefined'?'undefined':_typeof(options))!='object'){util$1["throw"]('options must be an object. You supplied '+options);}if((page===null||page===undefined)&&options.page){page=options.page;}options=util$1.extend({},this.options||{},options,{page:page});return{page:page,options:options};}},{key:'_removePages',value:function _removePages(times){var pages=this.pages;var until=times===undefined?0:pages.length-times;until=until<0?1:until;for(var i=pages.length-2;i>=until;i--){this._pageMap["delete"](pages[i]);this._pageLoader.unload(pages[i]);}}},{key:'_updateLastPageBackButton',value:function _updateLastPageBackButton(){var index=this.pages.length-1;if(index>=0){this.pages[index].updateBackButton(index>0);}}},{key:'_normalizeIndex',value:function _normalizeIndex(index){return index>=0?index:Math.abs(this.pages.length+index)%this.pages.length;}},{key:'_onDeviceBackButton',value:function _onDeviceBackButton(event){if(this.pages.length>1){this.popPage();}else{event.callParentHandler();}}},{key:'_lastIndexOfPage',value:function _lastIndexOfPage(pageName){var index=void 0;for(index=this.pages.length-1;index>=0;index--){if(pageName===this._pageMap.get(this.pages[index])){break;}}return index;}},{key:'_emitPreEvent',value:function _emitPreEvent(name){var data=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var isCanceled=false;util$1.triggerElementEvent(this,'pre'+name,util$1.extend({navigator:this,currentPage:this.pages[this.pages.length-1],cancel:function cancel(){return isCanceled=true;}},data));return isCanceled;}},{key:'_emitPrePushEvent',value:function _emitPrePushEvent(){return this._emitPreEvent('push');}},{key:'_emitPrePopEvent',value:function _emitPrePopEvent(){var l=this.pages.length;return this._emitPreEvent('pop',{leavePage:this.pages[l-1],enterPage:this.pages[l-2]});}// TODO: 書き直す
},{key:'_createPageElement',value:function _createPageElement(templateHTML){var pageElement=util$1.createElement(internal$1.normalizePageHTML(templateHTML));verifyPageElement(pageElement);return pageElement;}/**
     * @property onDeviceBackButton
     * @type {Object}
     * @description
     *   [en]Back-button handler.[/en]
     *   [ja]バックボタンハンドラ。[/ja]
     */},{key:'_show',value:function _show(){var _this11=this;this.loaded.then(function(){return _this11.topPage&&_this11.topPage._show();});}},{key:'_hide',value:function _hide(){this.topPage&&this.topPage._hide();}},{key:'_destroy',value:function _destroy(){for(var i=this.pages.length-1;i>=0;i--){this._pageLoader.unload(this.pages[i]);}this.remove();}/**
     * @param {String} name
     * @param {Function} Animator
     */},{key:'pageLoader',get:function get$$1(){return this._pageLoader;},set:function set$$1(pageLoader){if(!(pageLoader instanceof PageLoader)){util$1.throwPageLoader();}this._pageLoader=pageLoader;}},{key:'page',get:function get$$1(){return this._page;},set:function set$$1(page){this._page=page;}},{key:'onDeviceBackButton',get:function get$$1(){return this._backButtonHandler;},set:function set$$1(callback){if(this._backButtonHandler){this._backButtonHandler.destroy();}this._backButtonHandler=deviceBackButtonDispatcher.createHandler(this,callback);}/**
     * @property topPage
     * @readonly
     * @type {HTMLElement}
     * @description
     *   [en]Current top page element. Use this method to access options passed by `pushPage()`-like methods.[/en]
     *   [ja]現在のページを取得します。pushPage()やresetToPage()メソッドの引数を取得できます。[/ja]
     */},{key:'topPage',get:function get$$1(){var last=this.lastElementChild;while(last&&last.tagName!=='ONS-PAGE'){last=last.previousElementSibling;}return last;}/**
     * @property pages
     * @readonly
     * @type {Array}
     * @description
     *   [en]Copy of the navigator's page stack.[/en]
     *   [ja][/ja]
     */},{key:'pages',get:function get$$1(){return util$1.arrayFrom(this.children).filter(function(element){return element.tagName==='ONS-PAGE';});}/**
     * @property onSwipe
     * @type {Function}
     * @description
     *   [en]Hook called whenever the user slides the navigator (swipe-to-pop). It gets a decimal ratio (0-1) and an animationOptions object as arguments.[/en]
     *   [ja][/ja]
     */},{key:'onSwipe',get:function get$$1(){return this._onSwipe;},set:function set$$1(value){if(value&&!(value instanceof Function)){util$1["throw"]('"onSwipe" must be a function');}this._onSwipe=value;}/**
     * @property options
     * @type {Object}
     * @description
     *   [en]Default options object. Attributes have priority over this property.[/en]
     *   [ja][/ja]
     */ /**
     * @property options.animation
     * @type {String}
     * @description
     *   [en]
     *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
     *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
     *   [/en]
     *   [ja][/ja]
     */ /**
     * @property options.animationOptions
     * @type {String}
     * @description
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}` [/ja]
     */ /**
     * @property options.callback
     * @type {String}
     * @description
     *   [en]Function that is called when the transition has ended.[/en]
     *   [ja]このメソッドによる画面遷移が終了した際に呼び出される関数オブジェクトを指定します。[/ja]
     */},{key:'options',get:function get$$1(){return this._options;},set:function set$$1(object){this._options=object;}},{key:'_isRunning',set:function set$$1(value){this.setAttribute('_is-running',value?'true':'false');},get:function get$$1(){return JSON.parse(this.getAttribute('_is-running'));}}],[{key:'registerAnimator',value:function registerAnimator(name,Animator){if(!(Animator.prototype instanceof NavigatorAnimator)){util$1.throwAnimator('Navigator');}_animatorDict$5[name]=Animator;}},{key:'observedAttributes',get:function get$$1(){return['animation','swipeable'];}},{key:'animators',get:function get$$1(){return _animatorDict$5;}},{key:'NavigatorAnimator',get:function get$$1(){return NavigatorAnimator;}},{key:'events',get:function get$$1(){return['prepush','postpush','prepop','postpop'];}},{key:'rewritables',get:function get$$1(){return rewritables;}}]);return NavigatorElement;}(BaseElement);onsElements.Navigator=NavigatorElement;customElements.define('ons-navigator',NavigatorElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var defaultClassName$10='toolbar';var scheme$18={'':'toolbar--*','.toolbar__left':'toolbar--*__left','.toolbar__center':'toolbar--*__center','.toolbar__right':'toolbar--*__right'};/**
 * @element ons-toolbar
 * @category page
 * @modifier material
 *   [en]Material Design toolbar.[/en]
 *   [ja][/ja]
 * @modifier transparent
 *   [en]Transparent toolbar.[/en]
 *   [ja]透明な背景を持つツールバーを表示します。[/ja]
 * @modifier cover-content
 *   [en]Displays the toolbar on top of the page's content. Should be combined with `transparent` modifier.[/en]
 *   [ja][/ja]
 * @modifier noshadow
 *   [en]Toolbar without shadow.[/en]
 *   [ja]ツールバーに影を付けずに表示します。[/ja]
 * @description
 *   [en]
 *     Toolbar component that can be used with navigation.
 *
 *     Left, center and right containers can be specified by class names.
 *
 *     This component will automatically display as a Material Design toolbar when running on Android devices.
 *   [/en]
 *   [ja]ナビゲーションで使用するツールバー用コンポーネントです。クラス名により、左、中央、右のコンテナを指定できます。[/ja]
 * @codepen aHmGL
 * @tutorial vanilla/Reference/toolbar
 * @guide compilation.html#toolbar-compilation [en]Adding a toolbar[/en][ja]ツールバーの追加[/ja]
 * @seealso ons-bottom-toolbar
 *   [en]The `<ons-bottom-toolbar>` displays a toolbar on the bottom of the page.[/en]
 *   [ja]ons-bottom-toolbarコンポーネント[/ja]
 * @seealso ons-back-button
 *   [en]The `<ons-back-button>` component displays a back button inside the toolbar.[/en]
 *   [ja]ons-back-buttonコンポーネント[/ja]
 * @seealso ons-toolbar-button
 *   [en]The `<ons-toolbar-button>` component displays a toolbar button inside the toolbar.[/en]
 *   [ja]ons-toolbar-buttonコンポーネント[/ja]
 * @example
 * <ons-page>
 *   <ons-toolbar>
 *     <div class="left">
 *       <ons-back-button>
 *         Back
 *       </ons-back-button>
 *     </div>
 *     <div class="center">
 *       Title
 *     </div>
 *     <div class="right">
 *       <ons-toolbar-button>
 *         <ons-icon icon="md-menu"></ons-icon>
 *       </ons-toolbar-button>
 *     </div>
 *   </ons-toolbar>
 * </ons-page>
 */var ToolbarElement=function(_BaseElement){inherits(ToolbarElement,_BaseElement);/**
   * @attribute inline
   * @initonly
   * @description
   *   [en]Display the toolbar as an inline element.[/en]
   *   [ja]ツールバーをインラインに置きます。スクロール領域内にそのまま表示されます。[/ja]
   */ /**
   * @attribute static
   * @description
   *   [en]Static toolbars are not animated by `ons-navigator` when pushing or popping pages. This can be useful to improve performance in some situations.[/en]
   *   [ja][/ja]
   */ /**
   * @attribute modifier
   * @description
   *   [en]The appearance of the toolbar.[/en]
   *   [ja]ツールバーの表現を指定します。[/ja]
   */function ToolbarElement(){classCallCheck(this,ToolbarElement);var _this=possibleConstructorReturn(this,(ToolbarElement.__proto__||Object.getPrototypeOf(ToolbarElement)).call(this));contentReady(_this,function(){_this._compile();});return _this;}createClass(ToolbarElement,[{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'class':util$1.restoreClass(this,defaultClassName$10,scheme$18);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$18);break;}}/**
     * @method setVisibility
     * @signature setVisibility(visible)
     * @param {Boolean} visible
     *   [en]Set to true to show the toolbar, false to hide it[/en]
     *   [ja][/ja]
     * @description
     *   [en]Shows the toolbar if visible is true, otherwise hides it.[/en]
     *   [ja][/ja]
     */},{key:'setVisibility',value:function setVisibility(visible){var _this2=this;contentReady(this,function(){_this2.style.display=visible?'':'none';if(_this2.parentNode){var siblingBackground=util$1.findChild(_this2.parentNode,'.page__background');if(siblingBackground){siblingBackground.style.top=visible?null:0;}var siblingContent=util$1.findChild(_this2.parentNode,'.page__content');if(siblingContent){siblingContent.style.top=visible?null:0;}}});}/**
     * @method show
     * @signature show()
     * @description
     *   [en]Show the toolbar.[/en]
     *   [ja][/ja]
     */},{key:'show',value:function show(){this.setVisibility(true);}/**
     * @method hide
     * @signature hide()
     * @description
     *   [en]Hide the toolbar.[/en]
     *   [ja][/ja]
     */},{key:'hide',value:function hide(){this.setVisibility(false);}/**
     * @return {HTMLElement}
     */},{key:'_getToolbarLeftItemsElement',value:function _getToolbarLeftItemsElement(){return this.querySelector('.left')||internal$1.nullElement;}/**
     * @return {HTMLElement}
     */},{key:'_getToolbarCenterItemsElement',value:function _getToolbarCenterItemsElement(){return this.querySelector('.center')||internal$1.nullElement;}/**
     * @return {HTMLElement}
     */},{key:'_getToolbarRightItemsElement',value:function _getToolbarRightItemsElement(){return this.querySelector('.right')||internal$1.nullElement;}/**
     * @return {HTMLElement}
     */},{key:'_getToolbarBackButtonLabelElement',value:function _getToolbarBackButtonLabelElement(){return this.querySelector('ons-back-button .back-button__label')||internal$1.nullElement;}/**
     * @return {HTMLElement}
     */},{key:'_getToolbarBackButtonIconElement',value:function _getToolbarBackButtonIconElement(){return this.querySelector('ons-back-button .back-button__icon')||internal$1.nullElement;}},{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.classList.add(defaultClassName$10);this._ensureToolbarItemElements();ModifierUtil.initModifier(this,scheme$18);}},{key:'_ensureToolbarItemElements',value:function _ensureToolbarItemElements(){for(var i=this.childNodes.length-1;i>=0;i--){// case of not element
if(this.childNodes[i].nodeType!=1){this.removeChild(this.childNodes[i]);}}var center=this._ensureToolbarElement('center');center.classList.add('toolbar__title');if(this.children.length!==1||!this.children[0].classList.contains('center')){var left=this._ensureToolbarElement('left');var right=this._ensureToolbarElement('right');if(this.children[0]!==left||this.children[1]!==center||this.children[2]!==right){this.appendChild(left);this.appendChild(center);this.appendChild(right);}}}},{key:'_ensureToolbarElement',value:function _ensureToolbarElement(name){if(util$1.findChild(this,'.toolbar__'+name)){var _element=util$1.findChild(this,'.toolbar__'+name);_element.classList.add(name);return _element;}var element=util$1.findChild(this,'.'+name)||util$1.create('.'+name);element.classList.add('toolbar__'+name);return element;}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','class'];}}]);return ToolbarElement;}(BaseElement);onsElements.Toolbar=ToolbarElement;customElements.define('ons-toolbar',ToolbarElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var defaultClassName$9='page';var scheme$17={'':'page--*','.page__content':'page--*__content','.page__background':'page--*__background'};/**
 * @element ons-page
 * @category page
 * @modifier material
 *   [en]Material Design style[/en]
 *   [ja][/ja]
 * @description
 *   [en]
 *     This component defines the root of each page. If the content is large it will become scrollable.
 *
 *     A navigation bar can be added to the top of the page using the `<ons-toolbar>` element.
 *   [/en]
 *   [ja]ページ定義のためのコンポーネントです。このコンポーネントの内容はスクロールが許可されます。[/ja]
 * @tutorial vanilla/Reference/page
 * @guide lifecycle.html#events
 *   [en]Overview of page events[/en]
 *   [ja]Overview of page events[/ja]
 * @guide fundamentals.html#managing-pages
 *   [en]Managing multiple pages[/en]
 *   [ja]複数のページを管理する[/ja]
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @seealso ons-toolbar
 *   [en]Use the `<ons-toolbar>` element to add a navigation bar to the top of the page.[/en]
 *   [ja][/ja]
 * @example
 * <ons-page>
 *   <ons-toolbar>
 *     <div class="left">
 *       <ons-back-button>Back</ons-back-button>
 *     </div>
 *     <div class="center">Title</div>
 *     <div class="right">
 *       <ons-toolbar-button>
 *         <ons-icon icon="md-menu"></ons-icon>
 *       </ons-toolbar-button>
 *     </div>
 *   </ons-toolbar>
 *
 *   <p>Page content</p>
 * </ons-page>
 *
 * @example
 * <script>
 *   myApp.handler = function(done) {
 *     loadMore().then(done);
 *   }
 * </script>
 *
 * <ons-page on-infinite-scroll="myApp.handler">
 *   <ons-toolbar>
 *     <div class="center">List</div>
 *   </ons-toolbar>
 *
 *   <ons-list>
 *     <ons-list-item>#1</ons-list-item>
 *     <ons-list-item>#2</ons-list-item>
 *     <ons-list-item>#3</ons-list-item>
 *     ...
 *   </ons-list>
 * </ons-page>
 */var PageElement=function(_BaseElement){inherits(PageElement,_BaseElement);/**
   * @event init
   * @description
   *   [en]Fired right after the page is attached.[/en]
   *   [ja]ページがアタッチされた後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   */ /**
   * @event show
   * @description
   *   [en]Fired right after the page is shown.[/en]
   *   [ja]ページが表示された後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   */ /**
   * @event hide
   * @description
   *   [en]Fired right after the page is hidden.[/en]
   *   [ja]ページが隠れた後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   */ /**
   * @event destroy
   * @description
   *   [en]Fired right before the page is destroyed.[/en]
   *   [ja]ページが破棄される前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   */ /**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]Specify modifier name to specify custom styles.[/en]
   *   [ja]スタイル定義をカスタマイズするための名前を指定します。[/ja]
   */ /**
   * @attribute on-infinite-scroll
   * @type {String}
   * @description
   *   [en]Path of the function to be executed on infinite scrolling. Example: `app.loadData`. The function receives a done callback that must be called when it's finished.[/en]
   *   [ja][/ja]
   */function PageElement(){classCallCheck(this,PageElement);var _this=possibleConstructorReturn(this,(PageElement.__proto__||Object.getPrototypeOf(PageElement)).call(this));_this._deriveHooks();_this._defaultClassName=defaultClassName$9;_this.classList.add(defaultClassName$9);_this._initialized=false;contentReady(_this,function(){_this._compile();_this._isShown=false;_this._contentElement=_this._getContentElement();_this._backgroundElement=_this._getBackgroundElement();});return _this;}createClass(PageElement,[{key:'_compile',value:function _compile(){var _this2=this;autoStyle.prepare(this);var toolbar=util$1.findChild(this,'ons-toolbar');var background=util$1.findChild(this,'.page__background')||util$1.findChild(this,'.background')||document.createElement('div');background.classList.add('page__background');this.insertBefore(background,!toolbar&&this.firstChild||toolbar&&toolbar.nextSibling);var content=util$1.findChild(this,'.page__content')||util$1.findChild(this,'.content')||document.createElement('div');content.classList.add('page__content');if(!content.parentElement){util$1.arrayFrom(this.childNodes).forEach(function(node){if(node.nodeType!==1||_this2._elementShouldBeMoved(node)){content.appendChild(node);// Can trigger detached connectedCallbacks
}});}this._tryToFillStatusBar(content);// Must run before child pages try to fill status bar.
this.insertBefore(content,background.nextSibling);// Can trigger attached connectedCallbacks
if((!toolbar||!util$1.hasModifier(toolbar,'transparent'))&&content.children.length===1&&util$1.isPageControl(content.children[0])){this._defaultClassName+=' page--wrapper';this.attributeChangedCallback('class');}var bottomToolbar=util$1.findChild(this,'ons-bottom-toolbar');if(bottomToolbar){this._defaultClassName+=' page-with-bottom-toolbar';this.attributeChangedCallback('class');}ModifierUtil.initModifier(this,scheme$17);}},{key:'_elementShouldBeMoved',value:function _elementShouldBeMoved(el){if(el.classList.contains('page__background')){return false;}var tagName=el.tagName.toLowerCase();if(tagName==='ons-fab'){return!el.hasAttribute('position');}var fixedElements=['script','ons-toolbar','ons-bottom-toolbar','ons-modal','ons-speed-dial','ons-dialog','ons-alert-dialog','ons-popover','ons-action-sheet'];return el.hasAttribute('inline')||fixedElements.indexOf(tagName)===-1;}},{key:'_tryToFillStatusBar',value:function _tryToFillStatusBar(){var _this3=this;var content=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._contentElement;internal$1.autoStatusBarFill(function(){util$1.toggleAttribute(_this3,'status-bar-fill',!util$1.findParent(_this3,function(e){return e.hasAttribute('status-bar-fill');})// Not already filled
&&(_this3._canAnimateToolbar(content)||!util$1.findChild(content,util$1.isPageControl))// Has toolbar or cannot delegate
);});}},{key:'_canAnimateToolbar',value:function _canAnimateToolbar(){var content=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._contentElement;if(util$1.findChild(this,'ons-toolbar')){return true;}return!!util$1.findChild(content,function(el){return util$1.match(el,'ons-toolbar')&&!el.hasAttribute('inline');});}},{key:'connectedCallback',value:function connectedCallback(){var _this4=this;if(!util$1.isAttached(this)){// Avoid detached calls
return;}contentReady(this,function(){_this4._tryToFillStatusBar();// Ensure status bar when the element was compiled before connected
if(_this4.hasAttribute('on-infinite-scroll')){_this4.attributeChangedCallback('on-infinite-scroll',null,_this4.getAttribute('on-infinite-scroll'));}if(!_this4._initialized){_this4._initialized=true;setImmediate(function(){_this4.onInit&&_this4.onInit();util$1.triggerElementEvent(_this4,'init');});if(!util$1.hasAnyComponentAsParent(_this4)){setImmediate(function(){return _this4._show();});}}});}},{key:'updateBackButton',value:function updateBackButton(show){if(this.backButton){show?this.backButton.show():this.backButton.hide();}}},{key:'_onScroll',value:function _onScroll(){var _this5=this;var c=this._contentElement,overLimit=(c.scrollTop+c.clientHeight)/c.scrollHeight>=this._infiniteScrollLimit;if(this._onInfiniteScroll&&!this._loadingContent&&overLimit){this._loadingContent=true;this._onInfiniteScroll(function(){return _this5._loadingContent=false;});}}/**
     * @property onDeviceBackButton
     * @type {Object}
     * @description
     *   [en]Back-button handler.[/en]
     *   [ja]バックボタンハンドラ。[/ja]
     */},{key:'_getContentElement',value:function _getContentElement(){var result=util$1.findChild(this,'.page__content');if(result){return result;}util$1["throw"]('Fail to get ".page__content" element');}},{key:'_getBackgroundElement',value:function _getBackgroundElement(){var result=util$1.findChild(this,'.page__background');if(result){return result;}util$1["throw"]('Fail to get ".page__background" element');}},{key:'_getBottomToolbarElement',value:function _getBottomToolbarElement(){return util$1.findChild(this,'ons-bottom-toolbar')||internal$1.nullElement;}},{key:'_getToolbarElement',value:function _getToolbarElement(){return util$1.findChild(this,'ons-toolbar')||document.createElement('ons-toolbar');}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){var _this6=this;switch(name){case'class':util$1.restoreClass(this,this._defaultClassName,scheme$17);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$17);break;case'on-infinite-scroll':if(current===null){this.onInfiniteScroll=null;}else{this.onInfiniteScroll=function(done){var f=util$1.findFromPath(current);_this6.onInfiniteScroll=f;f(done);};}break;}}},{key:'_show',value:function _show(){if(!this._isShown&&util$1.isAttached(this)){this._isShown=true;this.setAttribute('shown','');this.onShow&&this.onShow();util$1.triggerElementEvent(this,'show');util$1.propagateAction(this,'_show');}}},{key:'_hide',value:function _hide(){if(this._isShown){this._isShown=false;this.removeAttribute('shown');this.onHide&&this.onHide();util$1.triggerElementEvent(this,'hide');util$1.propagateAction(this,'_hide');}}},{key:'_destroy',value:function _destroy(){this._hide();this.onDestroy&&this.onDestroy();util$1.triggerElementEvent(this,'destroy');if(this.onDeviceBackButton){this.onDeviceBackButton.destroy();}util$1.propagateAction(this,'_destroy');this.remove();}},{key:'_deriveHooks',value:function _deriveHooks(){var _this7=this;this.constructor.events.forEach(function(event){var key='on'+event.charAt(0).toUpperCase()+event.slice(1);Object.defineProperty(_this7,key,{configurable:true,enumerable:true,get:function get$$1(){return _this7['_'+key];},set:function set$$1(value){if(!(value instanceof Function)){util$1["throw"]('"'+key+'" hook must be a function');}_this7['_'+key]=value.bind(_this7);}});});}},{key:'name',set:function set$$1(str){this.setAttribute('name',str);},get:function get$$1(){return this.getAttribute('name');}},{key:'backButton',get:function get$$1(){return this.querySelector('ons-back-button');}/**
     * @property onInfiniteScroll
     * @description
     *  [en]Function to be executed when scrolling to the bottom of the page. The function receives a done callback as an argument that must be called when it's finished.[/en]
     *  [ja][/ja]
     */},{key:'onInfiniteScroll',set:function set$$1(value){var _this8=this;if(value&&!(value instanceof Function)){util$1["throw"]('"onInfiniteScroll" must be function or null');}contentReady(this,function(){if(!value){_this8._contentElement.removeEventListener('scroll',_this8._boundOnScroll);}else if(!_this8._onInfiniteScroll){_this8._infiniteScrollLimit=0.9;_this8._boundOnScroll=_this8._onScroll.bind(_this8);setImmediate(function(){return _this8._contentElement.addEventListener('scroll',_this8._boundOnScroll);});}_this8._onInfiniteScroll=value;});},get:function get$$1(){return this._onInfiniteScroll;}},{key:'onDeviceBackButton',get:function get$$1(){return this._backButtonHandler;},set:function set$$1(callback){if(this._backButtonHandler){this._backButtonHandler.destroy();}this._backButtonHandler=deviceBackButtonDispatcher.createHandler(this,callback);}},{key:'scrollTop',get:function get$$1(){return this._contentElement.scrollTop;},set:function set$$1(newValue){this._contentElement.scrollTop=newValue;}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','on-infinite-scroll','class'];}},{key:'events',get:function get$$1(){return['init','show','hide','destroy'];}/**
     * @property data
     * @type {*}
     * @description
     *   [en]User's custom data passed to `pushPage()`-like methods.[/en]
     *   [ja][/ja]
     */}]);return PageElement;}(BaseElement);onsElements.Page=PageElement;customElements.define('ons-page',PageElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var PopoverAnimator=function(_BaseAnimator){inherits(PopoverAnimator,_BaseAnimator);/**
   * @param {Object} options
   * @param {String} options.timing
   * @param {Number} options.duration
   * @param {Number} options.delay
   */function PopoverAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'cubic-bezier(.1, .7, .4, 1)':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.2:_ref$duration;classCallCheck(this,PopoverAnimator);return possibleConstructorReturn(this,(PopoverAnimator.__proto__||Object.getPrototypeOf(PopoverAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));}createClass(PopoverAnimator,[{key:'show',value:function show(popover,callback){callback();}},{key:'hide',value:function hide(popover,callback){callback();}},{key:'_animate',value:function _animate(element,_ref2){var from=_ref2.from,to=_ref2.to,options=_ref2.options,callback=_ref2.callback,_ref2$restore=_ref2.restore,restore=_ref2$restore===undefined?false:_ref2$restore,animation=_ref2.animation;options=util$1.extend({},this.options,options);if(animation){from=animation.from;to=animation.to;}animation=Animit(element);if(restore){animation=animation.saveStyle();}animation=animation.queue(from).wait(this.delay).queue({css:to,duration:this.duration,timing:this.timing});if(restore){animation=animation.restoreStyle();}if(callback){animation=animation.queue(function(done){callback();done();});}return animation;}},{key:'_animateAll',value:function _animateAll(element,animations){var _this2=this;Object.keys(animations).forEach(function(key){return _this2._animate(element[key],animations[key]).play();});}}]);return PopoverAnimator;}(BaseAnimator);var fade={out:{from:{opacity:1.0},to:{opacity:0}},"in":{from:{opacity:0},to:{opacity:1.0}}};var MDFadePopoverAnimator=function(_PopoverAnimator){inherits(MDFadePopoverAnimator,_PopoverAnimator);function MDFadePopoverAnimator(){classCallCheck(this,MDFadePopoverAnimator);return possibleConstructorReturn(this,(MDFadePopoverAnimator.__proto__||Object.getPrototypeOf(MDFadePopoverAnimator)).apply(this,arguments));}createClass(MDFadePopoverAnimator,[{key:'show',value:function show(popover,callback){this._animateAll(popover,{_mask:fade["in"],_popover:{animation:fade["in"],restore:true,callback:callback}});}},{key:'hide',value:function hide(popover,callback){this._animateAll(popover,{_mask:fade.out,_popover:{animation:fade.out,restore:true,callback:callback}});}}]);return MDFadePopoverAnimator;}(PopoverAnimator);var IOSFadePopoverAnimator=function(_MDFadePopoverAnimato){inherits(IOSFadePopoverAnimator,_MDFadePopoverAnimato);function IOSFadePopoverAnimator(){classCallCheck(this,IOSFadePopoverAnimator);return possibleConstructorReturn(this,(IOSFadePopoverAnimator.__proto__||Object.getPrototypeOf(IOSFadePopoverAnimator)).apply(this,arguments));}createClass(IOSFadePopoverAnimator,[{key:'show',value:function show(popover,callback){this._animateAll(popover,{_mask:fade["in"],_popover:{from:{transform:'scale3d(1.3, 1.3, 1.0)',opacity:0},to:{transform:'scale3d(1.0, 1.0,  1.0)',opacity:1.0},restore:true,callback:callback}});}}]);return IOSFadePopoverAnimator;}(MDFadePopoverAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var scheme$19={'.popover':'popover--*','.popover-mask':'popover-mask--*','.popover__content':'popover--*__content','.popover__arrow':'popover--*__arrow'};var _animatorDict$6={'default':function _default(){return platform.isAndroid()?MDFadePopoverAnimator:IOSFadePopoverAnimator;},'none':PopoverAnimator,'fade-ios':IOSFadePopoverAnimator,'fade-md':MDFadePopoverAnimator};var positions={up:'bottom',left:'right',down:'top',right:'left'};/**
 * @element ons-popover
 * @category dialog
 * @description
 *  [en]
 *    A component that displays a popover next to an element. The popover can be used to display extra information about a component or a tooltip.
 *
 *    To use the element it can either be attached directly to the `<body>` element or dynamically created from a template using the `ons.createPopover(template)` utility function and the `<template>` tag.
 *
 *    Another common way to use the popover is to display a menu when a button on the screen is tapped. For Material Design, popover looks exactly as a dropdown menu.
 *  [/en]
 *  [ja]ある要素を対象とするポップオーバーを表示するコンポーネントです。[/ja]
 * @codepen ZYYRKo
 * @tutorial vanilla/Reference/popover
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @example
 * <ons-button onclick="showPopover(this)">
 *   Click me!
 * </ons-button>
 *
 * <ons-popover direction="down" id="popover">
 *   <p>This is a popover!</p>
 * </ons-popover>
 *
 * <script>
 *   var showPopover = function(element) {
 *     var popover = document.getElementById('popover');
 *     popover.show(element);
 *   };
 * </script>
 */var PopoverElement=function(_BaseDialogElement){inherits(PopoverElement,_BaseDialogElement);/**
   * @event preshow
   * @description
   *   [en]Fired just before the popover is displayed.[/en]
   *   [ja]ポップオーバーが表示される直前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.popover
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Call this function to stop the popover from being shown.[/en]
   *   [ja]この関数を呼び出すと、ポップオーバーの表示がキャンセルされます。[/ja]
   */ /**
   * @event postshow
   * @description
   *   [en]Fired just after the popover is displayed.[/en]
   *   [ja]ポップオーバーが表示された直後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.popover
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */ /**
   * @event prehide
   * @description
   *   [en]Fired just before the popover is hidden.[/en]
   *   [ja]ポップオーバーが隠れる直前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.popover
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Call this function to stop the popover from being hidden.[/en]
   *   [ja]この関数を呼び出すと、ポップオーバーが隠れる処理をキャンセルします。[/ja]
   */ /**
   * @event posthide
   * @description
   *   [en]Fired just after the popover is hidden.[/en]
   *   [ja]ポップオーバーが隠れた後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.popover
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */ /**
   * @attribute modifier
   * @type {String}
   * @description
   *  [en]The appearance of the popover.[/en]
   *  [ja]ポップオーバーの表現を指定します。[/ja]
   */ /**
   * @attribute direction
   * @type {String}
   * @description
   *  [en]
   *    A space separated list of directions. If more than one direction is specified,
   *    it will be chosen automatically. Valid directions are `"up"`, `"down"`, `"left"` and `"right"`.
   *  [/en]
   *  [ja]
   *    ポップオーバーを表示する方向を空白区切りで複数指定できます。
   *    指定できる方向は、"up", "down", "left", "right"の4つです。空白区切りで複数指定することもできます。
   *    複数指定された場合、対象とする要素に合わせて指定した値から自動的に選択されます。
   *  [/ja]
   */ /**
   * @attribute cancelable
   * @description
   *   [en]If this attribute is set the popover can be closed by tapping the background or by pressing the back button.[/en]
   *   [ja]この属性があると、ポップオーバーが表示された時に、背景やバックボタンをタップした時にをポップオーバー閉じます。[/ja]
   */ /**
   * @attribute cover-target
   * @description
   *   [en]If set the popover will cover the target on the screen.[/en]
   *   [ja][/ja]
   */ /**
   * @attribute animation
   * @type {String}
   * @description
   *   [en]The animation used when showing an hiding the popover. Can be either `"none"`, `"default"`, `"fade-ios"` or `"fade-md"`.[/en]
   *   [ja]ポップオーバーを表示する際のアニメーション名を指定します。[/ja]
   */ /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. {duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
   */ /**
   * @attribute mask-color
   * @type {Color}
   * @description
   *   [en]Color of the background mask. Default is `"rgba(0, 0, 0, 0.2)"`.[/en]
   *   [ja]背景のマスクの色を指定します。デフォルトは"rgba(0, 0, 0, 0.2)"です。[/ja]
   */function PopoverElement(){classCallCheck(this,PopoverElement);var _this=possibleConstructorReturn(this,(PopoverElement.__proto__||Object.getPrototypeOf(PopoverElement)).call(this));_this._boundOnChange=_this._onChange.bind(_this);contentReady(_this,function(){_this._compile();_this.style.display='none';});return _this;}createClass(PopoverElement,[{key:'_updateAnimatorFactory',value:function _updateAnimatorFactory(){return new AnimatorFactory({animators:_animatorDict$6,baseClass:PopoverAnimator,baseClassName:'PopoverAnimator',defaultAnimation:this.getAttribute('animation')||'default'});}},{key:'_toggleStyle',value:function _toggleStyle(shouldShow){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(shouldShow){this.style.display='block';this._currentTarget=options.target;this._positionPopover(options.target);}else{this.style.display='none';this._clearStyles();}}},{key:'_positionPopover',value:function _positionPopover(target){var radius=this._radius,contentElement=this._content,margin=this._margin;var safeAreaLengths=iPhoneXPatch.getSafeAreaLengths();var safeAreaRect=iPhoneXPatch.getSafeAreaDOMRect();var targetRect=target.getBoundingClientRect();var isMD=util$1.hasModifier(this,'material');var cover=isMD&&this.hasAttribute('cover-target');var parent=util$1.findParent(this,'ons-page')||document.body;var parentDimensions=parent.getBoundingClientRect();var maxPositions={top:Math.max(parentDimensions.top,safeAreaRect.top),left:Math.max(parentDimensions.left,safeAreaRect.left),bottom:Math.min(parentDimensions.bottom,safeAreaRect.bottom),right:Math.min(parentDimensions.right,safeAreaRect.right)};// Distance from each side of the safe area (with margin) to the target element
var targetDistance={top:targetRect.top-(maxPositions.top+margin),left:targetRect.left-(maxPositions.left+margin),bottom:maxPositions.bottom-margin-targetRect.bottom,right:maxPositions.right-margin-targetRect.right};// Distance from each side of the safe area (with margin) to the geometric center of the target element
var targetCenterDistanceFrom={top:targetRect.top+Math.round(targetRect.height/2)-(maxPositions.top+margin),left:targetRect.left+Math.round(targetRect.width/2)-(maxPositions.left+margin),bottom:maxPositions.bottom-margin-targetRect.bottom+Math.round(targetRect.height/2),right:maxPositions.right-margin-targetRect.right+Math.round(targetRect.width/2)};var _calculateDirections2=this._calculateDirections(targetDistance),vertical=_calculateDirections2.vertical,primaryDirection=_calculateDirections2.primary,secondaryDirection=_calculateDirections2.secondary;this._currentDirection=primaryDirection;util$1.addModifier(this,primaryDirection);var sizeName=vertical?'width':'height';// Get .popover__content size
var contentSize=function(style){return{width:parseInt(style.getPropertyValue('width'),10),height:parseInt(style.getPropertyValue('height'),10)};}(window.getComputedStyle(contentElement));// Setting .popover position.
var targetAndArrowLength=cover?0:(vertical?targetRect.height:targetRect.width)+(isMD?0:14);var primaryOffset=Math.max(safeAreaLengths[primaryDirection]+margin,safeAreaLengths[primaryDirection]+margin+targetDistance[primaryDirection]+targetAndArrowLength);var secondaryOffset=Math.max(safeAreaLengths[secondaryDirection]+margin,safeAreaLengths[secondaryDirection]+margin+targetCenterDistanceFrom[secondaryDirection]-contentSize[sizeName]/2);this._popover.style[primaryDirection]=primaryOffset+'px';this._popover.style[secondaryDirection]=secondaryOffset+'px';// Setting .popover__arrow position.
this._arrow.style[secondaryDirection]=Math.max(radius,safeAreaLengths[secondaryDirection]+margin+targetCenterDistanceFrom[secondaryDirection]-secondaryOffset)+'px';}},{key:'_calculateDirections',value:function _calculateDirections(distance){var options=(this.getAttribute('direction')||'up down left right').split(/\s+/).map(function(e){return positions[e];});var primary=options.sort(function(a,b){return distance[a]-distance[b];})[0];var vertical='top'==primary||'bottom'==primary;var secondary=void 0;if(vertical){secondary=distance.left<distance.right?'left':'right';}else{secondary=distance.top<distance.bottom?'top':'bottom';}return{vertical:vertical,primary:primary,secondary:secondary};}},{key:'_clearStyles',value:function _clearStyles(){var _this2=this;this._currentDirection=null;['top','bottom','left','right'].forEach(function(e){_this2._arrow.style[e]=_this2._content.style[e]=_this2._popover.style[e]='';util$1.removeModifier(_this2,e);});}},{key:'_onChange',value:function _onChange(){var _this3=this;setImmediate(function(){if(_this3._currentTarget){_this3._positionPopover(_this3._currentTarget);}});}},{key:'_compile',value:function _compile(){autoStyle.prepare(this);if(this._popover&&this._mask){return;}var hasDefaultContainer=this._popover&&this._content;if(hasDefaultContainer){if(!this._mask){var mask=document.createElement('div');mask.classList.add('popover-mask');this.insertBefore(mask,this.firstChild);}if(!this._arrow){var arrow=document.createElement('div');arrow.classList.add('popover__arrow');this._popover.appendChild(arrow);}}else{var template=util$1.createFragment('\n        <div class="popover-mask"></div>\n        <div class="popover">\n          <div class="popover__content"></div>\n          <div class="popover__arrow"></div>\n        </div>\n      ');var content=template.querySelector('.popover__content');while(this.childNodes[0]){content.appendChild(this.childNodes[0]);}this.appendChild(template);}// FIXME!
if(this.hasAttribute('style')){this._popover.setAttribute('style',this.getAttribute('style'));this.removeAttribute('style');}ModifierUtil.initModifier(this,this._scheme);}/**
     * @method show
     * @signature show(target, [options])
     * @param {String|Event|HTMLElement} target
     *   [en]Target element. Can be either a CSS selector, an event object or a DOM element. It can be also provided as 'options.target' instead. [/en]
     *   [ja]ポップオーバーのターゲットとなる要素を指定します。CSSセレクタかeventオブジェクトかDOM要素のいずれかを渡せます。[/ja]
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name.  Use one of `"fade-ios"`, `"fade-md"`, `"none"` and `"default"`.[/en]
     *   [ja]アニメーション名を指定します。"fade-ios", "fade-md", "none", "default"のいずれかを指定できます。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @param {Function} [options.callback]
     *   [en]This function is called after the popover has been revealed.[/en]
     *   [ja]ポップオーバーが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Open the popover and point it at a target. The target can be either an event, a CSS selector or a DOM element..[/en]
     *   [ja]対象とする要素にポップオーバーを表示します。target引数には、$eventオブジェクトやDOMエレメントやCSSセレクタを渡すことが出来ます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the displayed element[/en]
     *   [ja][/ja]
     */},{key:'show',value:function show(target){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};// Copy options and include options.target
if(target&&(typeof target==='undefined'?'undefined':_typeof(target))==='object'&&!(target instanceof Event)&&!(target instanceof HTMLElement)){options=_extends({},target);}else{options=_extends({},options,{target:target});}if(typeof options.target==='string'){options.target=document.querySelector(options.target);}else if(options.target instanceof Event){options.target=options.target.target;}if(!(options.target instanceof HTMLElement)){util$1["throw"]('Invalid target type or undefined');}return get(PopoverElement.prototype.__proto__||Object.getPrototypeOf(PopoverElement.prototype),'show',this).call(this,options);}/**
     * @method hide
     * @signature hide([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name.  Use one of `"fade-ios"`, `"fade-md"`, `"none"` and `"default"`.[/en]
     *   [ja]アニメーション名を指定します。"fade-ios", "fade-md", "none", "default"のいずれかを指定できます。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @param {Function} [options.callback]
     *   [en]This functions is called after the popover has been hidden.[/en]
     *   [ja]ポップオーバーが隠れた後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Close the popover.[/en]
     *   [ja]ポップオーバーを閉じます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the hidden element[/en]
     *   [ja][/ja]
     */ /**
     * @property visible
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the element is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */ /**
     * @property cancelable
     * @type {Boolean}
     * @description
     *   [en]
     *     A boolean value that specifies whether the popover is cancelable or not.
     *
     *     When the popover is cancelable it can be closed by tapping the background or by pressing the back button on Android devices.
     *   [/en]
     *   [ja][/ja]
     */ /**
     * @property onDeviceBackButton
     * @type {Object}
     * @description
     *   [en]Back-button handler.[/en]
     *   [ja]バックボタンハンドラ。[/ja]
     */},{key:'connectedCallback',value:function connectedCallback(){var _this4=this;get(PopoverElement.prototype.__proto__||Object.getPrototypeOf(PopoverElement.prototype),'connectedCallback',this).call(this);window.addEventListener('resize',this._boundOnChange,false);this._margin=this._margin||parseInt(window.getComputedStyle(this).getPropertyValue('top'));this._margin=this._margin||6;// Fix for iframes
contentReady(this,function(){_this4._radius=parseInt(window.getComputedStyle(_this4._content).getPropertyValue('border-top-left-radius'));});}},{key:'disconnectedCallback',value:function disconnectedCallback(){get(PopoverElement.prototype.__proto__||Object.getPrototypeOf(PopoverElement.prototype),'disconnectedCallback',this).call(this);window.removeEventListener('resize',this._boundOnChange,false);}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){if(name==='direction'){return this._boundOnChange();}else if(name==='modifier'){this._currentDirection&&util$1.addModifier(this,this._currentDirection);}get(PopoverElement.prototype.__proto__||Object.getPrototypeOf(PopoverElement.prototype),'attributeChangedCallback',this).call(this,name,last,current);}/**
     * @param {String} name
     * @param {PopoverAnimator} Animator
     */},{key:'_scheme',get:function get$$1(){return scheme$19;}},{key:'_mask',get:function get$$1(){return util$1.findChild(this,'.popover-mask');}},{key:'_popover',get:function get$$1(){return util$1.findChild(this,'.popover');}},{key:'_content',get:function get$$1(){return util$1.findChild(this._popover,'.popover__content');}},{key:'_arrow',get:function get$$1(){return util$1.findChild(this._popover,'.popover__arrow');}}],[{key:'registerAnimator',value:function registerAnimator(name,Animator){if(!(Animator.prototype instanceof PopoverAnimator)){util$1.throwAnimator('Popover');}_animatorDict$6[name]=Animator;}},{key:'observedAttributes',get:function get$$1(){return[].concat(toConsumableArray(get(PopoverElement.__proto__||Object.getPrototypeOf(PopoverElement),'observedAttributes',this)),['direction']);}},{key:'animators',get:function get$$1(){return _animatorDict$6;}},{key:'PopoverAnimator',get:function get$$1(){return PopoverAnimator;}}]);return PopoverElement;}(BaseDialogElement);onsElements.Popover=PopoverElement;customElements.define('ons-popover',PopoverElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var scheme$20={'.progress-bar':'progress-bar--*','.progress-bar__primary':'progress-bar--*__primary','.progress-bar__secondary':'progress-bar--*__secondary'};var template=util$1.createElement('\n  <div class="progress-bar">\n    <div class="progress-bar__secondary"></div>\n    <div class="progress-bar__primary"></div>\n  </div>\n');var INDET='indeterminate';/**
 * @element ons-progress-bar
 * @category visual
 * @modifier material
 *   [en]Display a Material Design progress bar.[/en]
 *   [ja]マテリアルデザインのスタイルでプログレスバーを表示します。[/ja]
 * @description
 *   [en]
 *     The component is used to display a linear progress bar. It can either display a progress bar that shows the user how much of a task has been completed. In the case where the percentage is not known it can be used to display an animated progress bar so the user can see that an operation is in progress.
 *   [/en]
 *   [ja][/ja]
 * @codepen zvQbGj
 * @tutorial vanilla/Reference/progress
 * @seealso ons-progress-circular
 *   [en]The `<ons-progress-circular>` component displays a circular progress indicator.[/en]
 *   [ja][/ja]
 * @example
 * <ons-progress-bar
 *  value="55"
 *  secondary-value="87">
 * </ons-progress-bar>
 *
 * <ons-progress-bar
 *  indeterminate>
 * </ons-progress-bar>
 */var ProgressBarElement=function(_BaseElement){inherits(ProgressBarElement,_BaseElement);/**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]Change the appearance of the progress indicator.[/en]
   *   [ja]プログレスインジケータの見た目を変更します。[/ja]
   */ /**
   * @attribute value
   * @type {Number}
   * @description
   *   [en]Current progress. Should be a value between 0 and 100.[/en]
   *   [ja]現在の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
   */ /**
   * @attribute secondary-value
   * @type {Number}
   * @description
   *   [en]Current secondary progress. Should be a value between 0 and 100.[/en]
   *   [ja]現在の２番目の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
   */ /**
   * @attribute indeterminate
   * @description
   *   [en]If this attribute is set, an infinite looping animation will be shown.[/en]
   *   [ja]この属性が設定された場合、ループするアニメーションが表示されます。[/ja]
   */function ProgressBarElement(){classCallCheck(this,ProgressBarElement);var _this=possibleConstructorReturn(this,(ProgressBarElement.__proto__||Object.getPrototypeOf(ProgressBarElement)).call(this));contentReady(_this,function(){return _this._compile();});return _this;}createClass(ProgressBarElement,[{key:'_compile',value:function _compile(){if(!this._isCompiled()){this._template=template.cloneNode(true);}else{this._template=util$1.findChild(this,'.progress-bar');}this._primary=util$1.findChild(this._template,'.progress-bar__primary');this._secondary=util$1.findChild(this._template,'.progress-bar__secondary');this._updateDeterminate();this._updateValue();this.appendChild(this._template);autoStyle.prepare(this);ModifierUtil.initModifier(this,scheme$20);}},{key:'_isCompiled',value:function _isCompiled(){if(!util$1.findChild(this,'.progress-bar')){return false;}var barElement=util$1.findChild(this,'.progress-bar');if(!util$1.findChild(barElement,'.progress-bar__secondary')){return false;}if(!util$1.findChild(barElement,'.progress-bar__primary')){return false;}return true;}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){if(name==='modifier'){ModifierUtil.onModifierChanged(last,current,this,scheme$20);this.hasAttribute(INDET)&&this._updateDeterminate();}else if(name==='value'||name==='secondary-value'){this._updateValue();}else if(name===INDET){this._updateDeterminate();}}},{key:'_updateDeterminate',value:function _updateDeterminate(){var _this2=this;contentReady(this,function(){return util$1.toggleModifier(_this2,INDET,{force:_this2.hasAttribute(INDET)});});}},{key:'_updateValue',value:function _updateValue(){var _this3=this;contentReady(this,function(){_this3._primary.style.width=_this3.hasAttribute('value')?_this3.getAttribute('value')+'%':'0%';_this3._secondary.style.width=_this3.hasAttribute('secondary-value')?_this3.getAttribute('secondary-value')+'%':'0%';});}/**
     * @property value
     * @type {Number}
     * @description
     *   [en]Current progress. Should be a value between 0 and 100.[/en]
     *   [ja]現在の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
     */},{key:'value',set:function set$$1(value){if(typeof value!=='number'||value<0||value>100){util$1["throw"]('Invalid value');}this.setAttribute('value',Math.floor(value));},get:function get$$1(){return parseInt(this.getAttribute('value')||'0');}/**
     * @property secondaryValue
     * @type {Number}
     * @description
     *   [en]Current secondary progress. Should be a value between 0 and 100.[/en]
     *   [ja]現在の２番目の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
     */},{key:'secondaryValue',set:function set$$1(value){if(typeof value!=='number'||value<0||value>100){util$1["throw"]('Invalid value');}this.setAttribute('secondary-value',Math.floor(value));},get:function get$$1(){return parseInt(this.getAttribute('secondary-value')||'0');}/**
     * @property indeterminate
     * @type {Boolean}
     * @description
     *   [en]If this property is `true`, an infinite looping animation will be shown.[/en]
     *   [ja]この属性が設定された場合、ループするアニメーションが表示されます。[/ja]
     */},{key:'indeterminate',set:function set$$1(value){if(value){this.setAttribute(INDET,'');}else{this.removeAttribute(INDET);}},get:function get$$1(){return this.hasAttribute(INDET);}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','value','secondary-value',INDET];}}]);return ProgressBarElement;}(BaseElement);onsElements.ProgressBar=ProgressBarElement;customElements.define('ons-progress-bar',ProgressBarElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var scheme$21={'.progress-circular':'progress-circular--*','.progress-circular__background':'progress-circular--*__background','.progress-circular__primary':'progress-circular--*__primary','.progress-circular__secondary':'progress-circular--*__secondary'};var template$1=util$1.createElement('\n  <svg class="progress-circular">\n    <circle class="progress-circular__background" />\n    <circle class="progress-circular__secondary" cx="50%" cy="50%" r="40%" />\n    <circle class="progress-circular__primary" cx="50%" cy="50%" r="40%" />\n  </svg>\n');var INDET$1='indeterminate';/**
 * @element ons-progress-circular
 * @category visual
 * @description
 *   [en]
 *     This component displays a circular progress indicator. It can either be used to show how much of a task has been completed or to show a looping animation to indicate that an operation is currently running.
 *   [/en]
 *   [ja][/ja]
 * @codepen EVzMjR
 * @tutorial vanilla/Reference/progress-circular
 * @seealso ons-progress-bar
 *   [en]The `<ons-progress-bar>` component displays a bar progress indicator.[/en]
 *   [ja][/ja]
 * @example
 * <ons-progress-circular
 *  value="55"
 *  secondary-value="87">
 * </ons-progress-circular>
 *
 * <ons-progress-circular
 *  indeterminate>
 * </ons-progress-circular>
 */var ProgressCircularElement=function(_BaseElement){inherits(ProgressCircularElement,_BaseElement);/**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]Change the appearance of the progress indicator.[/en]
   *   [ja]プログレスインジケータの見た目を変更します。[/ja]
   */ /**
   * @attribute value
   * @type {Number}
   * @description
   *   [en]Current progress. Should be a value between 0 and 100.[/en]
   *   [ja]現在の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
   */ /**
   * @attribute secondary-value
   * @type {Number}
   * @description
   *   [en]Current secondary progress. Should be a value between 0 and 100.[/en]
   *   [ja]現在の２番目の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
   */ /**
   * @attribute indeterminate
   * @description
   *   [en]If this attribute is set, an infinite looping animation will be shown.[/en]
   *   [ja]この属性が設定された場合、ループするアニメーションが表示されます。[/ja]
   */function ProgressCircularElement(){classCallCheck(this,ProgressCircularElement);var _this=possibleConstructorReturn(this,(ProgressCircularElement.__proto__||Object.getPrototypeOf(ProgressCircularElement)).call(this));contentReady(_this,function(){return _this._compile();});return _this;}createClass(ProgressCircularElement,[{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){if(name==='modifier'){ModifierUtil.onModifierChanged(last,current,this,scheme$21);this.hasAttribute(INDET$1)&&this._updateDeterminate();}else if(name==='value'||name==='secondary-value'){this._updateValue();}else if(name===INDET$1){this._updateDeterminate();}}},{key:'_updateDeterminate',value:function _updateDeterminate(){var _this2=this;contentReady(this,function(){return util$1.toggleModifier(_this2,INDET$1,{force:_this2.hasAttribute(INDET$1)});});}},{key:'_updateValue',value:function _updateValue(){var _this3=this;if(this.hasAttribute('value')){contentReady(this,function(){var per=Math.ceil(_this3.getAttribute('value')*251.32*0.01);_this3._primary.style['stroke-dasharray']=per+'%, 251.32%';});}if(this.hasAttribute('secondary-value')){contentReady(this,function(){var per=Math.ceil(_this3.getAttribute('secondary-value')*251.32*0.01);_this3._secondary.style.display=null;_this3._secondary.style['stroke-dasharray']=per+'%, 251.32%';});}else{contentReady(this,function(){_this3._secondary.style.display='none';});}}/**
     * @property value
     * @type {Number}
     * @description
     *   [en]Current progress. Should be a value between 0 and 100.[/en]
     *   [ja]現在の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
     */},{key:'_compile',value:function _compile(){if(this._isCompiled()){this._template=util$1.findChild(this,'.progress-circular');}else{this._template=template$1.cloneNode(true);}this._primary=util$1.findChild(this._template,'.progress-circular__primary');this._secondary=util$1.findChild(this._template,'.progress-circular__secondary');this._updateDeterminate();this._updateValue();this.appendChild(this._template);autoStyle.prepare(this);ModifierUtil.initModifier(this,scheme$21);}},{key:'_isCompiled',value:function _isCompiled(){if(!util$1.findChild(this,'.progress-circular')){return false;}var svg=util$1.findChild(this,'.progress-circular');if(!util$1.findChild(svg,'.progress-circular__secondary')){return false;}if(!util$1.findChild(svg,'.progress-circular__primary')){return false;}return true;}},{key:'value',set:function set$$1(value){if(typeof value!=='number'||value<0||value>100){util$1["throw"]('Invalid value');}this.setAttribute('value',Math.floor(value));},get:function get$$1(){return parseInt(this.getAttribute('value')||'0');}/**
     * @property secondaryValue
     * @type {Number}
     * @description
     *   [en]Current secondary progress. Should be a value between 0 and 100.[/en]
     *   [ja]現在の２番目の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
     */},{key:'secondaryValue',set:function set$$1(value){if(typeof value!=='number'||value<0||value>100){util$1["throw"]('Invalid value');}this.setAttribute('secondary-value',Math.floor(value));},get:function get$$1(){return parseInt(this.getAttribute('secondary-value')||'0');}/**
     * @property indeterminate
     * @type {Boolean}
     * @description
     *   [en]If this property is `true`, an infinite looping animation will be shown.[/en]
     *   [ja]この属性が設定された場合、ループするアニメーションが表示されます。[/ja]
     */},{key:'indeterminate',set:function set$$1(value){if(value){this.setAttribute(INDET$1,'');}else{this.removeAttribute(INDET$1);}},get:function get$$1(){return this.hasAttribute(INDET$1);}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','value','secondary-value',INDET$1];}}]);return ProgressCircularElement;}(BaseElement);onsElements.ProgressCircular=ProgressCircularElement;customElements.define('ons-progress-circular',ProgressCircularElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var STATE_INITIAL='initial';var STATE_PREACTION='preaction';var STATE_ACTION='action';var throwType=function throwType(el,type){return util$1["throw"]('"'+el+'" must be '+type);};/**
 * @element ons-pull-hook
 * @category control
 * @description
 *   [en]
 *     Component that adds **Pull to refresh** functionality to an `<ons-page>` element.
 *
 *     It can be used to perform a task when the user pulls down at the top of the page. A common usage is to refresh the data displayed in a page.
 *   [/en]
 *   [ja][/ja]
 * @codepen WbJogM
 * @tutorial vanilla/Reference/pull-hook
 * @example
 * <ons-page>
 *   <ons-pull-hook>
 *     Release to refresh
 *   </ons-pull-hook>
 * </ons-page>
 *
 * <script>
 *   document.querySelector('ons-pull-hook').onAction = function(done) {
 *     setTimeout(done, 1000);
 *   };
 * </script>
 */var PullHookElement=function(_BaseElement){inherits(PullHookElement,_BaseElement);/**
   * @event changestate
   * @description
   *   [en]Fired when the state is changed. The state can be either "initial", "preaction" or "action".[/en]
   *   [ja]コンポーネントの状態が変わった場合に発火します。状態は、"initial", "preaction", "action"のいずれかです。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクト。[/ja]
   * @param {Object} event.pullHook
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {String} event.state
   *   [en]Current state.[/en]
   *   [ja]現在の状態名を参照できます。[/ja]
   */ /**
   * @attribute disabled
   * @description
   *   [en]If this attribute is set the "pull-to-refresh" functionality is disabled.[/en]
   *   [ja]この属性がある時、disabled状態になりアクションが実行されなくなります[/ja]
   */ /**
   * @attribute height
   * @type {String}
   * @description
   *   [en]Specify the height of the component. When pulled down further than this value it will switch to the "preaction" state. The default value is "64px".[/en]
   *   [ja]コンポーネントの高さを指定します。この高さ以上にpull downすると"preaction"状態に移行します。デフォルトの値は"64px"です。[/ja]
   */ /**
   * @attribute threshold-height
   * @type {String}
   * @description
   *   [en]Specify the threshold height. The component automatically switches to the "action" state when pulled further than this value. The default value is "96px". A negative value will disable this property. If this value is lower than the height, it will skip "preaction" state.[/en]
   *   [ja]閾値となる高さを指定します。この値で指定した高さよりもpull downすると、このコンポーネントは自動的に"action"状態に移行します。[/ja]
   */ /**
   * @attribute fixed-content
   * @description
   *   [en]If this attribute is set the content of the page will not move when pulling.[/en]
   *   [ja]この属性がある時、プルフックが引き出されている時にもコンテンツは動きません。[/ja]
   */function PullHookElement(){classCallCheck(this,PullHookElement);var _this=possibleConstructorReturn(this,(PullHookElement.__proto__||Object.getPrototypeOf(PullHookElement)).call(this));_this._onDrag=_this._onDrag.bind(_this);_this._onDragStart=_this._onDragStart.bind(_this);_this._onDragEnd=_this._onDragEnd.bind(_this);_this._onScroll=_this._onScroll.bind(_this);_this._setState(STATE_INITIAL,true);_this._hide();// Fix for transparent toolbar transitions
return _this;}createClass(PullHookElement,[{key:'_setStyle',value:function _setStyle(){var height=this.height+'px';styler(this,{height:height,lineHeight:height});this.style.display===''&&this._show();}},{key:'_onScroll',value:function _onScroll(event){var element=this._pageElement;if(element.scrollTop<0){element.scrollTop=0;}}},{key:'_canConsumeGesture',value:function _canConsumeGesture(gesture){return gesture.direction==='up'||gesture.direction==='down';}},{key:'_onDragStart',value:function _onDragStart(event){var _this2=this;if(!event.gesture||this.disabled){return;}var tapY=event.gesture.center.clientY+this._pageElement.scrollTop;var maxY=window.innerHeight;// Only use drags that start near the pullHook to reduce flickerings
var draggableAreaRatio=1;this._ignoreDrag=event.consumed||tapY>maxY*draggableAreaRatio;if(!this._ignoreDrag){var consume=event.consume;event.consume=function(){consume&&consume();_this2._ignoreDrag=true;// This elements resizes .page__content so it is safer
// to hide it when other components are dragged.
_this2._hide();};if(this._canConsumeGesture(event.gesture)){consume&&consume();event.consumed=true;this._show();// Not enough due to 'dragLockAxis'
}}this._startScroll=this._pageElement.scrollTop;}},{key:'_onDrag',value:function _onDrag(event){var _this3=this;if(!event.gesture||this.disabled||this._ignoreDrag||!this._canConsumeGesture(event.gesture)){return;}// Necessary due to 'dragLockAxis' (25px)
if(this.style.display==='none'){this._show();}event.stopPropagation();var tapY=event.gesture.center.clientY+this._pageElement.scrollTop;var maxY=window.innerHeight;var scroll=Math.max(event.gesture.deltaY-this._startScroll,0);if(scroll!==this._currentTranslation){var th=this.thresholdHeight;if(th>0&&scroll>=th){event.gesture.stopDetect();setImmediate(function(){return _this3._finish();});}else if(scroll>=this.height){this._setState(STATE_PREACTION);}else{this._setState(STATE_INITIAL);}this._translateTo(scroll);}}},{key:'_onDragEnd',value:function _onDragEnd(event){if(!event.gesture||this.disabled||this._ignoreDrag){return;}event.stopPropagation();if(this._currentTranslation>0){var scroll=this._currentTranslation;if(scroll>this.height){this._finish();}else{this._translateTo(0,{animate:true});}}}/**
     * @property onAction
     * @type {Function}
     * @description
     *   [en]This will be called in the `action` state if it exists. The function will be given a `done` callback as it's first argument.[/en]
     *   [ja][/ja]
     */},{key:'_finish',value:function _finish(){var _this4=this;this._setState(STATE_ACTION);this._translateTo(this.height,{animate:true});var action=this.onAction||function(done){return done();};action(function(){_this4._translateTo(0,{animate:true});_this4._setState(STATE_INITIAL);});}/**
     * @property height
     * @type {Number}
     * @description
     *   [en]The height of the pull hook in pixels. The default value is `64px`.[/en]
     *   [ja][/ja]
     */},{key:'_setState',value:function _setState(state,noEvent){var lastState=this.state;this.setAttribute('state',state);if(!noEvent&&lastState!==this.state){util$1.triggerElementEvent(this,'changestate',{pullHook:this,state:state,lastState:lastState});}}/**
     * @property state
     * @readonly
     * @type {String}
     * @description
     *   [en]Current state of the element.[/en]
     *   [ja][/ja]
     */},{key:'_show',value:function _show(){var _this5=this;// Run asyncrhonously to avoid conflicts with Animit's style clean
setImmediate(function(){_this5.style.display='';if(_this5._pageElement){_this5._pageElement.style.marginTop='-'+_this5.height+'px';}});}},{key:'_hide',value:function _hide(){this.style.display='none';if(this._pageElement){this._pageElement.style.marginTop='';}}/**
     * @param {Number} scroll
     * @param {Object} options
     * @param {Function} [options.callback]
     */},{key:'_translateTo',value:function _translateTo(scroll){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(this._currentTranslation==0&&scroll==0){return;}this._currentTranslation=scroll;var opt=options.animate?{duration:.3,timing:'cubic-bezier(.1, .7, .1, 1)'}:{};this._onPull&&this._onPull((scroll/this.height).toFixed(2),opt);var scrollElement=this.hasAttribute('fixed-content')?this:this._pageElement;Animit(scrollElement).queue({transform:'translate3d(0px, '+scroll+'px, 0px)'},opt).play(function(){scroll===0&&styler.clear(scrollElement,'transition transform');options.callback instanceof Function&&options.callback();});}},{key:'_disableDragLock',value:function _disableDragLock(){// e2e tests need it
this._dragLockDisabled=true;this._setupListeners(true);}},{key:'_setupListeners',value:function _setupListeners(add){var _this6=this;var scrollToggle=function scrollToggle(action){return _this6._pageElement[action+'EventListener']('scroll',_this6._onScroll,false);};var gdToggle=function gdToggle(action){var passive={passive:true};_this6._gestureDetector[action]('drag',_this6._onDrag,passive);_this6._gestureDetector[action]('dragstart',_this6._onDragStart,passive);_this6._gestureDetector[action]('dragend',_this6._onDragEnd,passive);};if(this._gestureDetector){gdToggle('off');this._gestureDetector.dispose();this._gestureDetector=null;}scrollToggle('remove');if(add){this._gestureDetector=new GestureDetector(this._pageElement,{dragMinDistance:1,dragDistanceCorrection:false,dragLockToAxis:!this._dragLockDisabled,passive:true});gdToggle('on');scrollToggle('add');}}},{key:'connectedCallback',value:function connectedCallback(){this._currentTranslation=0;this._pageElement=this.parentNode;this._setupListeners(true);this._setStyle();}},{key:'disconnectedCallback',value:function disconnectedCallback(){this._hide();this._setupListeners(false);}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){if(name==='height'&&this._pageElement){this._setStyle();}}},{key:'onAction',get:function get$$1(){return this._onAction;},set:function set$$1(value){if(value&&!(value instanceof Function)){throwType('onAction','function or null');}this._onAction=value;}/**
     * @property onPull
     * @type {Function}
     * @description
     *   [en]Hook called whenever the user pulls the element. It gets the pulled distance ratio (scroll / height) and an animationOptions object as arguments.[/en]
     *   [ja][/ja]
     */},{key:'onPull',get:function get$$1(){return this._onPull;},set:function set$$1(value){if(value&&!(value instanceof Function)){throwType('onPull','function or null');}this._onPull=value;}},{key:'height',set:function set$$1(value){if(!util$1.isInteger(value)){throwType('height','integer');}this.setAttribute('height',value+'px');},get:function get$$1(){return parseInt(this.getAttribute('height')||'64',10);}/**
     * @property thresholdHeight
     * @type {Number}
     * @description
     *   [en]The thresholdHeight of the pull hook in pixels. The default value is `96px`.[/en]
     *   [ja][/ja]
     */},{key:'thresholdHeight',set:function set$$1(value){if(!util$1.isInteger(value)){throwType('thresholdHeight','integer');}this.setAttribute('threshold-height',value+'px');},get:function get$$1(){return parseInt(this.getAttribute('threshold-height')||'96',10);}},{key:'state',get:function get$$1(){return this.getAttribute('state');}/**
     * @property pullDistance
     * @readonly
     * @type {Number}
     * @description
     *   [en]The current number of pixels the pull hook has moved.[/en]
     *   [ja]現在のプルフックが引き出された距離をピクセル数。[/ja]
     */},{key:'pullDistance',get:function get$$1(){return this._currentTranslation;}/**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */},{key:'disabled',set:function set$$1(value){return util$1.toggleAttribute(this,'disabled',value);},get:function get$$1(){return this.hasAttribute('disabled');}}],[{key:'observedAttributes',get:function get$$1(){return['height'];}},{key:'events',get:function get$$1(){return['changestate'];}}]);return PullHookElement;}(BaseElement);onsElements.PullHook=PullHookElement;customElements.define('ons-pull-hook',PullHookElement);/*
Copyright 2013-2015 ASIAL CORPORATION
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/var scheme$22={'':'range--*','.range__input':'range--*__input','.range__focus-ring':'range--*__focus-ring'};var activeClassToken='range__input--active';/**
 * @element ons-range
 * @category form
 * @modifier material
 *   [en]Material Design slider[/en]
 *   [ja][/ja]
 * @description
 *   [en]
 *     Range input component. Used to display a draggable slider.
 *
 *     Works very similar to the `<input type="range">` element.
 *   [/en]
 *   [ja][/ja]
 * @codepen xZQomM
 * @tutorial vanilla/Reference/range
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @seealso ons-input
 *   [en]The `<ons-input>` component is used to display text inputs, radio buttons and checkboxes.[/en]
 *   [ja][/ja]
 * @example
 * <ons-range value="20"></ons-range>
 * <ons-range modifier="material" value="10"></range>
 */var RangeElement=function(_BaseInputElement){inherits(RangeElement,_BaseInputElement);function RangeElement(){classCallCheck(this,RangeElement);var _this=possibleConstructorReturn(this,(RangeElement.__proto__||Object.getPrototypeOf(RangeElement)).call(this));_this._onMouseDown=_this._onMouseDown.bind(_this);_this._onMouseUp=_this._onMouseUp.bind(_this);_this._onTouchStart=_this._onTouchStart.bind(_this);_this._onTouchEnd=_this._onTouchEnd.bind(_this);_this._onInput=_this._update.bind(_this);_this._onDragstart=_this._onDragstart.bind(_this);_this._onDragend=_this._onDragend.bind(_this);return _this;}createClass(RangeElement,[{key:'_compile',value:function _compile(){get(RangeElement.prototype.__proto__||Object.getPrototypeOf(RangeElement.prototype),'_compile',this).call(this);this._updateDisabled(this.hasAttribute('disabled'));}/* Inherited props */},{key:'_update',value:function _update(){var input=this._input;var focusRing=this._focusRing;input.style.backgroundSize=100*this._ratio+'% 2px';focusRing.value=this.value;// NOTE: "_zero" attribute is used for CSS styling.
if(input.min===''&&input.value==='0'||input.min===input.value){input.setAttribute('_zero','');}else{input.removeAttribute('_zero');}['min','max'].forEach(function(attr){return focusRing[attr]=input[attr];});}},{key:'_onMouseDown',/* Own props */value:function _onMouseDown(e){var _this2=this;this._input.classList.add(activeClassToken);setImmediate(function(){return _this2._input.focus();});}},{key:'_onTouchStart',value:function _onTouchStart(e){this._onMouseDown();}},{key:'_onMouseUp',value:function _onMouseUp(e){this._input.classList.remove(activeClassToken);}},{key:'_onTouchEnd',value:function _onTouchEnd(e){this._onMouseUp(e);}},{key:'_onDragstart',value:function _onDragstart(e){e.consumed=true;e.gesture.stopPropagation();this._input.classList.add(activeClassToken);this.addEventListener('drag',this._onDrag);}},{key:'_onDrag',value:function _onDrag(e){e.stopPropagation();}},{key:'_onDragend',value:function _onDragend(e){this._input.classList.remove(activeClassToken);this.removeEventListener('drag',this._onDrag);}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){if(name==='disabled'){this._updateDisabled(current);}get(RangeElement.prototype.__proto__||Object.getPrototypeOf(RangeElement.prototype),'attributeChangedCallback',this).call(this,name,last,current);}/**
     * @param {boolean} disabled
     */},{key:'_updateDisabled',value:function _updateDisabled(disabled){if(disabled){this.classList.add('range--disabled');}else{this.classList.remove('range--disabled');}}},{key:'connectedCallback',value:function connectedCallback(){this._setupListeners(true);}},{key:'disconnectedCallback',value:function disconnectedCallback(){this._setupListeners(false);}},{key:'_setupListeners',value:function _setupListeners(add){var action=(add?'add':'remove')+'EventListener';util$1[action](this,'touchstart',this._onTouchStart,{passive:true});this[action]('mousedown',this._onMouseDown);this[action]('mouseup',this._onMouseUp);this[action]('touchend',this._onTouchEnd);this[action]('dragstart',this._onDragstart);this[action]('dragend',this._onDragend);this[action]('input',this._onInput);}/**
     * @attribute disabled
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */ /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */ /**
     * @property value
     * @type {Number}
     * @description
     *   [en]Current value.[/en]
     *   [ja][/ja]
     */ /**
     * @method focus
     * @signature focus()
     * @description
     *   [en]Focuses the range.[/en]
     *   [ja][/ja]
     */ /**
     * @method blur
     * @signature blur()
     * @description
     *   [en]Removes focus from the range.[/en]
     *   [ja][/ja]
     */},{key:'_scheme',get:function get$$1(){return scheme$22;}},{key:'_template',get:function get$$1(){return'\n      <input type="'+this.type+'" class="'+this._defaultClassName+'__input">\n      <input type="range" class="range__focus-ring" tabIndex="-1">\n    ';}},{key:'_defaultClassName',get:function get$$1(){return'range';}},{key:'type',get:function get$$1(){return'range';}},{key:'_focusRing',get:function get$$1(){return this.children[1];}},{key:'_ratio',get:function get$$1(){// Returns the current ratio.
var min=this._input.min===''?0:parseInt(this._input.min);var max=this._input.max===''?100:parseInt(this._input.max);return(this.value-min)/(max-min);}}],[{key:'observedAttributes',get:function get$$1(){return['disabled'].concat(toConsumableArray(BaseInputElement.observedAttributes));}}]);return RangeElement;}(BaseInputElement);onsElements.Range=RangeElement;customElements.define('ons-range',RangeElement);/*
Copyright 2013-2016 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @class AnimatorCSS - implementation of Animator class using css transitions
 */var AnimatorCSS=function(){createClass(AnimatorCSS,[{key:'animate',/**
     * @method animate
     * @desc main animation function
     * @param {Element} element
     * @param {Object} finalCSS
     * @param {number} [duration=200] - duration in milliseconds
     * @return {Object} result
     * @return {Function} result.then(callback) - sets a callback to be executed after the animation has stopped
     * @return {Function} result.stop(options) - stops the animation; if options.stopNext is true then it doesn't call the callback
     * @return {Function} result.finish(ms) - finishes the animation in the specified time in milliseconds
     * @return {Function} result.speed(ms) - sets the animation speed so that it finishes as if the original duration was the one specified here
     * @example
     * ````
     *  var result = animator.animate(el, {opacity: 0.5}, 1000);
     *
     *  el.addEventListener('click', function(e){
     *    result.speed(200).then(function(){
     *      console.log('done');
     *    });
     *  }, 300);
     * ````
     */value:function animate(el,_final){var duration=arguments.length>2&&arguments[2]!==undefined?arguments[2]:200;var start=new Date().getTime(),initial={},stopped=false,next=false,timeout=false,properties=Object.keys(_final);var updateStyles=function updateStyles(){var s=window.getComputedStyle(el);properties.forEach(s.getPropertyValue.bind(s));s=el.offsetHeight;};var result={stop:function stop(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};timeout&&clearTimeout(timeout);var k=Math.min(1,(new Date().getTime()-start)/duration);properties.forEach(function(i){el.style[i]=(1-k)*initial[i]+k*_final[i]+(i=='opacity'?'':'px');});el.style.transitionDuration='0s';if(options.stopNext){next=false;}else if(!stopped){stopped=true;next&&next();}return result;},then:function then(cb){next=cb;if(stopped){next&&next();}return result;},speed:function speed(newDuration){if(internal$1.config.animationsDisabled){newDuration=0;}if(!stopped){timeout&&clearTimeout(timeout);var passed=new Date().getTime()-start;var k=passed/duration;var remaining=newDuration*(1-k);properties.forEach(function(i){el.style[i]=(1-k)*initial[i]+k*_final[i]+(i=='opacity'?'':'px');});updateStyles();start=el.speedUpTime;duration=remaining;el.style.transitionDuration=duration/1000+'s';properties.forEach(function(i){el.style[i]=_final[i]+(i=='opacity'?'':'px');});timeout=setTimeout(result.stop,remaining);}return result;},finish:function finish(){var milliseconds=arguments.length>0&&arguments[0]!==undefined?arguments[0]:50;var k=(new Date().getTime()-start)/duration;result.speed(milliseconds/(1-k));return result;}};if(el.hasAttribute('disabled')||stopped||internal$1.config.animationsDisabled){return result;}var style=window.getComputedStyle(el);properties.forEach(function(e){var v=parseFloat(style.getPropertyValue(e));initial[e]=isNaN(v)?0:v;});if(!stopped){el.style.transitionProperty=properties.join(',');el.style.transitionDuration=duration/1000+'s';properties.forEach(function(e){el.style[e]=_final[e]+(e=='opacity'?'':'px');});}timeout=setTimeout(result.stop,duration);this._onStopAnimations(el,result.stop);return result;}}]);function AnimatorCSS(){classCallCheck(this,AnimatorCSS);this._queue=[];this._index=0;}createClass(AnimatorCSS,[{key:'_onStopAnimations',value:function _onStopAnimations(el,listener){var queue=this._queue;var i=this._index++;queue[el]=queue[el]||[];queue[el][i]=function(options){delete queue[el][i];if(queue[el]&&queue[el].length==0){delete queue[el];}return listener(options);};}/**
    * @method stopAnimations
    * @desc stops active animations on a specified element
    * @param {Element|Array} element - element or array of elements
    * @param {Object} [options={}]
    * @param {Boolean} [options.stopNext] - the callbacks after the animations won't be called if this option is true
    */},{key:'stopAnimations',value:function stopAnimations(el){var _this=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(Array.isArray(el)){return el.forEach(function(el){_this.stopAnimations(el,options);});}(this._queue[el]||[]).forEach(function(e){e(options||{});});}/**
    * @method stopAll
    * @desc stops all active animations
    * @param {Object} [options={}]
    * @param {Boolean} [options.stopNext] - the callbacks after the animations won't be called if this option is true
    */},{key:'stopAll',value:function stopAll(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.stopAnimations(Object.keys(this._queue),options);}/**
    * @method fade
    * @desc fades the element (short version for animate(el, {opacity: 0}))
    * @param {Element} element
    * @param {number} [duration=200]
    */},{key:'fade',value:function fade(el){var duration=arguments.length>1&&arguments[1]!==undefined?arguments[1]:200;return this.animate(el,{opacity:0},duration);}}]);return AnimatorCSS;}();/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var defaultClassName$11='ripple';var scheme$23={'':'ripple--*','.ripple__wave':'ripple--*__wave','.ripple__background':'ripple--*__background'};/**
 * @element ons-ripple
 * @category visual
 * @description
 *   [en]
 *     Adds a Material Design "ripple" effect to an element. The ripple effect will spread from the position where the user taps.
 *
 *     Some elements such as `<ons-button>` and `<ons-fab>`  support a `ripple` attribute.
 *   [/en]
 *   [ja]マテリアルデザインのリップル効果をDOM要素に追加します。[/ja]
 * @codepen wKQWdZ
 * @tutorial vanilla/Reference/ripple
 * @modifier light-gray
 *   [en]Change the color of effects to light gray.[/en]
 *   [ja]エフェクトの色が明るい灰色になります。[/ja]
 * @guide theming.html#cross-platform-styling-autostyling
 *  [en]Cross platform styling[/en]
 *  [ja]Cross platform styling[/ja]
 * @example
 * <div class="my-div">
 *  <ons-ripple></ons-ripple>
 * </div>
 *
 * @example
 * <ons-button ripple>Click me!</ons-button>
 */var RippleElement=function(_BaseElement){inherits(RippleElement,_BaseElement);/**
   * @attribute color
   * @type {String}
   * @description
   *   [en]Color of the ripple effect.[/en]
   *   [ja]リップルエフェクトの色を指定します。[/ja]
   */ /**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the ripple effect.[/en]
   *   [ja]エフェクトの表現を指定します。[/ja]
   */ /**
   * @attribute background
   * @type {String}
   * @description
   *   [en]Color of the background.[/en]
   *   [ja]背景の色を設定します。[/ja]
   */ /**
   * @attribute size
   * @type {String}
   * @description
   *   [en]Sizing of the wave on ripple effect. Set "cover" or "contain". Default is "cover".[/en]
   *   [ja]エフェクトのサイズを指定します。"cover"もしくは"contain"を指定します。デフォルトは"cover"です。[/ja]
   */ /**
   * @attribute center
   * @type {Boolean}
   * @description
   *   [en]If this attribute presents, change the position of wave effect to center of the target element.[/en]
   *   [ja]この要素を設定すると、エフェクトの位置が要素の真ん中から始まります。[/ja]
   */ /**
   * @attribute disabled
   * @description
   *   [en]If this attribute is set, the ripple effect will be disabled.[/en]
   *   [ja]この属性が設定された場合、リップルエフェクトは無効になります。[/ja]
   */function RippleElement(){classCallCheck(this,RippleElement);var _this=possibleConstructorReturn(this,(RippleElement.__proto__||Object.getPrototypeOf(RippleElement)).call(this));_this._onTap=_this._onTap.bind(_this);_this._onHold=_this._onHold.bind(_this);_this._onDragStart=_this._onDragStart.bind(_this);_this._onRelease=_this._onRelease.bind(_this);contentReady(_this,function(){return _this._compile();});_this._animator=new AnimatorCSS();['color','center','start-radius','background','modifier'].forEach(function(e){_this.attributeChangedCallback(e,null,_this.getAttribute(e));});return _this;}createClass(RippleElement,[{key:'_compile',value:function _compile(){this.classList.add(defaultClassName$11);this._wave=this.getElementsByClassName('ripple__wave')[0];this._background=this.getElementsByClassName('ripple__background')[0];if(!(this._background&&this._wave)){this._wave=util$1.create('.ripple__wave');this._background=util$1.create('.ripple__background');this.appendChild(this._wave);this.appendChild(this._background);}ModifierUtil.initModifier(this,scheme$23);}},{key:'_getEffectSize',value:function _getEffectSize(){var sizes=['cover','contain'];if(this.hasAttribute('size')){var size=this.getAttribute('size');if(sizes.indexOf(size)!==-1){return size;}}return'cover';}},{key:'_calculateCoords',value:function _calculateCoords(e){var x=void 0,y=void 0,h=void 0,w=void 0,r=void 0;var b=this.getBoundingClientRect();var size=this._getEffectSize();var error=function error(){return util$1["throw"]('Ripple invalid state');};if(this._center){x=b.width/2;y=b.height/2;if(size==='cover'){r=Math.sqrt(x*x+y*y);}else if(size==='contain'){r=Math.min(x,y);}else{error();}}else{x=(typeof e.clientX==='number'?e.clientX:e.changedTouches[0].clientX)-b.left;y=(typeof e.clientY==='number'?e.clientY:e.changedTouches[0].clientY)-b.top;h=Math.max(y,b.height-y);w=Math.max(x,b.width-x);if(size==='cover'){r=Math.sqrt(h*h+w*w);}else if(size==='contain'){r=Math.min(Math.round(h/2),Math.round(w/2));}else{error();}}return{x:x,y:y,r:r};}},{key:'_rippleAnimation',value:function _rippleAnimation(e){var duration=arguments.length>1&&arguments[1]!==undefined?arguments[1]:300;var _animator=this._animator,_wave=this._wave,_background=this._background,_minR=this._minR;var _calculateCoords2=this._calculateCoords(e),x=_calculateCoords2.x,y=_calculateCoords2.y,r=_calculateCoords2.r;_animator.stopAll({stopNext:1});_animator.animate(_background,{opacity:1},duration);util$1.extend(_wave.style,{opacity:1,top:y-_minR+'px',left:x-_minR+'px',width:2*_minR+'px',height:2*_minR+'px'});return _animator.animate(_wave,{top:y-r,left:x-r,height:2*r,width:2*r},duration);}},{key:'_updateParent',value:function _updateParent(){if(!this._parentUpdated&&this.parentNode){var computedStyle=window.getComputedStyle(this.parentNode);if(computedStyle.getPropertyValue('position')==='static'){this.parentNode.style.position='relative';}this._parentUpdated=true;}}},{key:'_onTap',value:function _onTap(e){var _this2=this;if(!this.disabled&&!e.ripple){e.ripple=true;this._updateParent();this._rippleAnimation(e.gesture.srcEvent).then(function(){_this2._animator.fade(_this2._wave);_this2._animator.fade(_this2._background);});}}},{key:'_onHold',value:function _onHold(e){if(!this.disabled&&!e.ripple){e.ripple=true;this._updateParent();this._holding=this._rippleAnimation(e.gesture.srcEvent,2000);document.addEventListener('release',this._onRelease);}}},{key:'_onRelease',value:function _onRelease(e){var _this3=this;if(this._holding&&!e.ripple){e.ripple=true;this._holding.speed(300).then(function(){_this3._animator.stopAll({stopNext:true});_this3._animator.fade(_this3._wave);_this3._animator.fade(_this3._background);});this._holding=false;}document.removeEventListener('release',this._onRelease);}},{key:'_onDragStart',value:function _onDragStart(e){if(this._holding){return this._onRelease(e);}if(['left','right'].indexOf(e.gesture.direction)!=-1){this._onTap(e);}}},{key:'connectedCallback',value:function connectedCallback(){this._parentNode=this.parentNode;if(internal$1.config.animationsDisabled){this.disabled=true;}else{this._parentNode.addEventListener('tap',this._onTap);this._parentNode.addEventListener('hold',this._onHold);this._parentNode.addEventListener('dragstart',this._onDragStart);}}},{key:'disconnectedCallback',value:function disconnectedCallback(){var pn=this._parentNode||this.parentNode;pn.removeEventListener('tap',this._onTap);pn.removeEventListener('hold',this._onHold);pn.removeEventListener('dragstart',this._onDragStart);}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){var _this4=this;switch(name){case'class':util$1.restoreClass(this,defaultClassName$11,scheme$23);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$23);break;case'start-radius':this._minR=Math.max(0,parseFloat(current)||0);break;case'color':if(current){contentReady(this,function(){_this4._wave.style.background=current;if(!_this4.hasAttribute('background')){_this4._background.style.background=current;}});}break;case'background':if(current||last){if(current==='none'){contentReady(this,function(){_this4._background.setAttribute('disabled','disabled');_this4._background.style.background='transparent';});}else{contentReady(this,function(){if(_this4._background.hasAttribute('disabled')){_this4._background.removeAttribute('disabled');}_this4._background.style.background=current;});}}break;case'center':if(name==='center'){this._center=current!=null&&current!='false';}break;}}/**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */},{key:'disabled',set:function set$$1(value){return util$1.toggleAttribute(this,'disabled',value);},get:function get$$1(){return this.hasAttribute('disabled');}}],[{key:'observedAttributes',get:function get$$1(){return['start-radius','color','background','center','class','modifier'];}}]);return RippleElement;}(BaseElement);onsElements.Ripple=RippleElement;customElements.define('ons-ripple',RippleElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @element ons-row
 * @category grid
 * @description
 *   [en]Represents a row in the grid system. Use with `<ons-col>` to layout components.[/en]
 *   [ja]グリッドシステムにて行を定義します。ons-colとともに使用し、コンポーネントの配置に使用します。[/ja]
 * @codepen GgujC {wide}
 * @guide features.html
 *   [en]Layouting guide[/en]
 *   [ja]レイアウト調整[/ja]
 * @seealso ons-col
 *   [en]The `<ons-col>` component is used as children of `<ons-row>`.[/en]
 *   [ja]ons-colコンポーネント[/ja]
 * @note
 *   [en]For Android 4.3 and earlier, and iOS6 and earlier, when using mixed alignment with ons-row and ons-col, they may not be displayed correctly. You can use only one vertical-align.[/en]
 *   [ja]Android 4.3以前、もしくはiOS 6以前のOSの場合、ons-rowとons-colを組み合わせてそれぞれのons-col要素のvertical-align属性の値に別々の値を指定すると、描画が崩れる場合があります。vertical-align属性の値には一つの値だけを指定できます。[/ja]
 * @example
 * <ons-row>
 *   <ons-col width="50px"><ons-icon icon="fa-twitter"></ons-icon></ons-col>
 *   <ons-col>Text</ons-col>
 * </ons-row>
 */ /**
 * @attribute vertical-align
 * @type {String}
 * @description
 *   [en]Short hand attribute for aligning vertically. Valid values are top, bottom, and center.[/en]
 *   [ja]縦に整列するために指定します。top、bottom、centerのいずれかを指定できます。[/ja]
 */var RowElement=function(_BaseElement){inherits(RowElement,_BaseElement);function RowElement(){classCallCheck(this,RowElement);return possibleConstructorReturn(this,(RowElement.__proto__||Object.getPrototypeOf(RowElement)).apply(this,arguments));}return RowElement;}(BaseElement);onsElements.Row=RowElement;customElements.define('ons-row',RowElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var defaultClassName$12='segment';var scheme$24={'':'segment--*','.segment__item':'segment--*__item','.segment__input':'segment--*__input','.segment__button':'segment--*__button'};var generateId$1=function(){var i=0;return function(){return'ons-segment-gen-'+i++;};}();/**
 * @element ons-segment
 * @category control
 * @modifier material
 *   [en]Material Design segment[/en]
 *   [ja][/ja]
 * @description
 *   [en]
 *     Segment component. Use this component to have a button bar with automatic styles that switch on click of another button.
 *
 *     Will automatically display as a Material Design segment on Android.
 *   [/en]
 *   [ja][/ja]
 * @codepen hLayx
 * @tutorial vanilla/Reference/segment
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
 * @example
 * <ons-segment>
 *   <ons-button>Label 1</ons-button>
 *   <ons-button>Label 2</ons-button>
 *   <ons-button>Label 3</ons-button>
 * </ons-segment>
 */var SegmentElement=function(_BaseElement){inherits(SegmentElement,_BaseElement);/**
   * @event postchange
   * @description
   *   [en]Fires after the active button is changed.[/en]
   *   [ja][/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja][/ja]
   * @param {Number} event.index
   *   [en]Tapped button index.[/en]
   *   [ja][/ja]
   * @param {Object} event.segmentItem
   *   [en]Segment item object.[/en]
   *   [ja][/ja]
   */ /**
   * @attribute modifier
   * @type {String}
   * @description
   *  [en]The appearance of the segment.[/en]
   *  [ja][/ja]
   */ /**
   * @attribute tabbar-id
   * @initonly
   * @type {String}
   * @description
   *  [en]ID of the tabbar element to "connect" to the segment. Must be inside the same page.[/en]
   *  [ja][/ja]
   */ /**
   * @attribute active-index
   * @initonly
   * @default 0
   * @type {Number}
   * @description
   *  [en]Index of the first active button, only works if there is no connected tabbar (in which case the active tab sets the active button).[/en]
   *  [ja][/ja]
   */ /**
   * @attribute disabled
   * @description
   *   [en]Specify if segment should be disabled.[/en]
   *   [ja]ボタンを無効化する場合は指定します。[/ja]
   */function SegmentElement(){classCallCheck(this,SegmentElement);var _this=possibleConstructorReturn(this,(SegmentElement.__proto__||Object.getPrototypeOf(SegmentElement)).call(this));_this._segmentId=generateId$1();_this._tabbar=null;_this._onChange=_this._onChange.bind(_this);_this._onTabbarPreChange=_this._onTabbarPreChange.bind(_this);contentReady(_this,function(){_this._compile();setImmediate(function(){return _this._lastActiveIndex=_this._tabbar?_this._tabbar.getActiveTabIndex():_this.getActiveButtonIndex();});});return _this;}createClass(SegmentElement,[{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.classList.add(defaultClassName$12);for(var index=this.children.length-1;index>=0;index--){var item=this.children[index];item.classList.add('segment__item');var input=util$1.findChild(item,'.segment__input')||util$1.create('input.segment__input');input.type='radio';input.value=index;input.name=input.name||this._segmentId;input.checked=!this.hasAttribute('tabbar-id')&&index===(parseInt(this.getAttribute('active-index'))||0);var button=util$1.findChild(item,'.segment__button')||util$1.create('.segment__button');if(button.parentElement!==item){while(item.firstChild){button.appendChild(item.firstChild);}}item.appendChild(input);item.appendChild(button);}ModifierUtil.initModifier(this,scheme$24);}},{key:'connectedCallback',value:function connectedCallback(){var _this2=this;contentReady(this,function(){if(_this2.hasAttribute('tabbar-id')){var page=util$1.findParent(_this2,'ons-page');_this2._tabbar=page&&page.querySelector('#'+_this2.getAttribute('tabbar-id'));if(!_this2._tabbar||_this2._tabbar.tagName!=='ONS-TABBAR'){util$1["throw"]('No tabbar with id '+_this2.getAttribute('tabbar-id')+' was found.');}_this2._tabbar.setAttribute('hide-tabs','');setImmediate(function(){return _this2._setChecked(_this2._tabbar.getActiveTabIndex());});_this2._tabbar.addEventListener('prechange',_this2._onTabbarPreChange);}});this.addEventListener('change',this._onChange);}},{key:'disconnectedCallback',value:function disconnectedCallback(){var _this3=this;contentReady(this,function(){if(_this3._tabbar){_this3._tabbar.removeEventListener('prechange',_this3._onTabbarPreChange);_this3._tabbar=null;}});this.removeEventListener('change',this._onChange);}},{key:'_setChecked',value:function _setChecked(index){this.children[index].firstElementChild.checked=true;}/**
     * @method setActiveButton
     * @signature setActiveButton(index, [options])
     * @param {Number} index
     *   [en]Button index.[/en]
     *   [ja][/ja]
     * @param {Object} [options]
     *   [en]Parameter object, works only if there is a connected tabbar. Supports the same options as `ons-tabbar`'s `setActiveTab` method.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Make button with the specified index active. If there is a connected tabbar it shows the corresponding tab page. In this case animations and their options can be specified by the second parameter.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the selected index or to the new page element if there is a connected tabbar.[/en]
     *   [ja][/ja]
     */},{key:'setActiveButton',value:function setActiveButton(index,options){if(this._tabbar){return this._tabbar.setActiveTab(index,options);}this._setChecked(index);this._postChange(index);return Promise.resolve(index);}/**
     * @method getActiveButtonIndex
     * @signature getActiveButtonIndex()
     * @return {Number}
     *   [en]The index of the currently active button.[/en]
     *   [ja][/ja]
     * @description
     *   [en]Returns button index of current active button. If active button is not found, returns -1.[/en]
     *   [ja][/ja]
     */},{key:'getActiveButtonIndex',value:function getActiveButtonIndex(){for(var i=this.children.length-1;i>=0;i--){// Array.findIndex
if(this.children[i].firstElementChild.checked){return i;}}return-1;}},{key:'_onChange',value:function _onChange(event){event.stopPropagation();this._tabbar?this._tabbar.setActiveTab(this.getActiveButtonIndex(),{reject:false}):this._postChange(this.getActiveButtonIndex());}},{key:'_onTabbarPreChange',value:function _onTabbarPreChange(event){var _this4=this;setImmediate(function(){if(!event.detail.canceled){_this4._setChecked(event.index);_this4._postChange(event.index);}});}},{key:'_postChange',value:function _postChange(index){util$1.triggerElementEvent(this,'postchange',{index:index,activeIndex:index,lastActiveIndex:this._lastActiveIndex,segmentItem:this.children[index]});this._lastActiveIndex=index;}/**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the segment is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'class':util$1.restoreClass(this,defaultClassName$12,scheme$24);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$24);break;}}},{key:'disabled',set:function set$$1(value){return util$1.toggleAttribute(this,'disabled',value);},get:function get$$1(){return this.hasAttribute('disabled');}}],[{key:'observedAttributes',get:function get$$1(){return['class','modifier'];}},{key:'events',get:function get$$1(){return['postchange'];}}]);return SegmentElement;}(BaseElement);onsElements.Segment=SegmentElement;customElements.define('ons-segment',SegmentElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var scheme$25={'':'select-* select--*','.select-input':'select-input--*'};var defaultClassName$13='select';var INPUT_ATTRIBUTES$1=['autofocus','disabled','form','multiple','name','required','size'];/**
 * @element ons-select
 * @category form
 * @modifier material
 *  [en]Displays a Material Design select input.[/en]
 *  [ja][/ja]
 * @modifier underbar
 *  [en]Displays a horizontal line underneath a select input.[/en]
 *  [ja][/ja]
 * @description
 *   [en]
 *     Select component. If you want to place a select with an ID of `my-id` on a page, use `<ons-select select-id="my-id">`.
 *
 *     The component will automatically display as a Material Design select on Android.
 *
 *     Most attributes that can be used for a normal `<select>` element can also be used on the `<ons-select>` element.
 *   [/en]
 *   [ja]セレクトボックスを表示するコンポーネントです。`select` 要素に使用できる属性の多くが `ons-select` 要素でも利用できます。[/ja]
 * @codepen hLayx
 * @tutorial vanilla/Reference/select
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
 * @example
 * <ons-select>
 *   <option value="1">1</option>
 *   <option value="2">2nd</option>
 *   <option value="3">3rd option</option>
 * </ons-select>
 */var SelectElement=function(_BaseElement){inherits(SelectElement,_BaseElement);/**
   * @attribute autofocus
   * @type {Boolean}
   * @default false
   * @description
   *  [en]Element automatically gains focus on page load.[/en]
   *  [ja]ページロード時にこのセレクトボックスにフォーカスが移るようにします。[/ja]
   */ /**
   * @attribute disabled
   * @type {Boolean}
   * @default false
   * @description
   *   [en]Specify if select input should be disabled.[/en]
   *   [ja]このセレクトボックスを無効化する場合に指定します。[/ja]
   */ /**
   * @attribute form
   * @type {String}
   * @description
   *   [en]Associate a select element to an existing form on the page, even if not nested.[/en]
   *   [ja]このセレクトボックスを、指定した `form` 要素に紐付けます。セレクトボックスを `form` 要素の外側に配置する際に使用します。[/ja]
   */ /**
   * @attribute multiple
   * @type {Boolean}
   * @default false
   * @description
   *  [en]If this attribute is defined, multiple options can be selected at once.[/en]
   *  [ja]選択肢の複数選択を有効にします。[/ja]
   */ /**
   * @attribute name
   * @type {String}
   * @description
   *   [en]Name the select element, useful for instance if it is part of a form.[/en]
   *   [ja]このセレクトボックスの名前を指定します。通常 `form` 要素と共に使用します。[/ja]
   */ /**
   * @attribute required
   * @type {Boolean}
   * @description
   *   [en]Make the select input required for submitting the form it is part of.[/en]
   *   [ja]このセレクトボックスを入力必須にする場合に指定します。通常 `form` 要素と共に使用します。[/ja]
   */ /**
   * @attribute select-id
   * @type {String}
   * @description
   *   [en]ID given to the inner select, useful for dynamic manipulation.[/en]
   *   [ja]このセレクトボックスが内部に持つ select 要素に与える ID を指定します。セレクトボックスの内容を動的に変更する必要がある場合に使用します。[/ja]
   */ /**
   * @attribute size
   * @type {Number}
   * @default 1
   * @description
   *   [en]How many options are displayed; if there are more than the size then a scroll appears to navigate them.[/en]
   *   [ja]一度に表示する選択肢の個数を指定します。選択肢がこの属性で指定した個数よりも多い場合、スクロールが有効になります。[/ja]
   */function SelectElement(){classCallCheck(this,SelectElement);var _this=possibleConstructorReturn(this,(SelectElement.__proto__||Object.getPrototypeOf(SelectElement)).call(this));contentReady(_this,function(){return _this._compile();});_this._deriveGetters();return _this;}createClass(SelectElement,[{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){var _this2=this;switch(name){case'class':util$1.restoreClass(this,defaultClassName$13,scheme$25);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$25);break;}if(INPUT_ATTRIBUTES$1.indexOf(name)>=0){contentReady(this,function(){return _this2._updateBoundAttributes();});}}},{key:'_updateBoundAttributes',value:function _updateBoundAttributes(){var _this3=this;INPUT_ATTRIBUTES$1.forEach(function(attr){if(_this3.hasAttribute(attr)){_this3._select.setAttribute(attr,_this3.getAttribute(attr));}else{_this3._select.removeAttribute(attr);}});}/**
     * @property length
     * @description
     *   [en]Number of options in the select box.[/en]
     *   [ja]このセレクトボックスに含まれる選択肢の個数を返します。 `select` 要素[/ja]
     */ /**
     * @property options
     * @description
     *   [en]Several options for handling the select DOM object.[/en]
     *   [ja]このセレクトボックスに含まれる `option` 要素の配列を返します。[/ja]
     */ /**
     * @property selectedIndex
     * @description
     *   [en]Index of the currently selected option.[/en]
     *   [ja]現在選択されている選択肢のインデックスを返します。[/ja]
     */ /**
     * @property value
     * @description
     *   [en]Value of the currently selected option.[/en]
     *   [ja]現在選択されている選択肢の値を返します。[/ja]
     */},{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.classList.add(defaultClassName$13);var sel=this._select||document.createElement('select');if(!sel.id&&this.hasAttribute('select-id')){sel.id=this.getAttribute('select-id');}sel.classList.add('select-input');if(!this._select){util$1.arrayFrom(this.childNodes).forEach(function(element){return sel.appendChild(element);});this.appendChild(sel);}ModifierUtil.initModifier(this,scheme$25);}},{key:'_deriveGetters',value:function _deriveGetters(){var _this4=this;['disabled','length','multiple','name','options','selectedIndex','size','value','form','type'].forEach(function(key){Object.defineProperty(_this4,key,{configurable:true,enumerable:true,get:function get$$1(){return _this4._select[key];},set:['form','type'].indexOf(key)===-1?function(value){return contentReady(_this4,function(){return _this4._select[key]=value;});}:undefined});});}},{key:'add',value:function add(option){var index=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;this._select.add(option,index);}},{key:'remove',value:function remove(index){this._select.remove(index);}},{key:'_select',get:function get$$1(){return this.querySelector('select');}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','class'].concat(INPUT_ATTRIBUTES$1);}}]);return SelectElement;}(BaseElement);onsElements.Select=SelectElement;customElements.define('ons-select',SelectElement);/*
Copyright 2013-2015 ASIAL CORPORATION
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/var defaultClassName$14='fab fab--mini speed-dial__item';var scheme$26={'':'fab--* speed-dial__item--*'};/**
 * @element ons-speed-dial-item
 * @category control
 * @description
 *   [en]
 *     This component displays the child elements of the Material Design Speed dial component.
 *   [/en]
 *   [ja]
 *     Material DesignのSpeed dialの子要素を表現する要素です。
 *   [/ja]
 * @codepen dYQYLg
 * @tutorial vanilla/Reference/speed-dial
 * @seealso ons-speed-dial
 *   [en]The `<ons-speed-dial>` component.[/en]
 *   [ja]ons-speed-dialコンポーネント[/ja]
 * @seealso ons-fab
 *   [en]ons-fab component[/en]
 *   [ja]ons-fabコンポーネント[/ja]
 * @example
 * <ons-speed-dial position="left bottom">
 *   <ons-fab>
 *     <ons-icon icon="fa-twitter"></ons-icon>
 *   </ons-fab>
 *   <ons-speed-dial-item>A</ons-speed-dial-item>
 *   <ons-speed-dial-item>B</ons-speed-dial-item>
 *   <ons-speed-dial-item>C</ons-speed-dial-item>
 * </ons-speed-dial>
 */var SpeedDialItemElement=function(_BaseElement){inherits(SpeedDialItemElement,_BaseElement);/**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the component.[/en]
   *   [ja]このコンポーネントの表現を指定します。[/ja]
   */ /**
   * @attribute ripple
   * @description
   *  [en]If this attribute is defined, the button will have a ripple effect when tapped.[/en]
   *  [ja][/ja]
   */function SpeedDialItemElement(){classCallCheck(this,SpeedDialItemElement);var _this=possibleConstructorReturn(this,(SpeedDialItemElement.__proto__||Object.getPrototypeOf(SpeedDialItemElement)).call(this));_this._compile();_this._boundOnClick=_this._onClick.bind(_this);return _this;}createClass(SpeedDialItemElement,[{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'class':util$1.restoreClass(this,defaultClassName$14,scheme$26);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$26);util$1.addModifier(this,'mini');break;case'ripple':this._updateRipple();}}},{key:'connectedCallback',value:function connectedCallback(){this.addEventListener('click',this._boundOnClick,false);}},{key:'disconnectedCallback',value:function disconnectedCallback(){this.removeEventListener('click',this._boundOnClick,false);}},{key:'_updateRipple',value:function _updateRipple(){util$1.updateRipple(this);}},{key:'_onClick',value:function _onClick(e){e.stopPropagation();}},{key:'_compile',value:function _compile(){var _this2=this;autoStyle.prepare(this);defaultClassName$14.split(/\s+/).forEach(function(token){return _this2.classList.add(token);});util$1.addModifier(this,'mini');this._updateRipple();ModifierUtil.initModifier(this,scheme$26);}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','ripple','class'];}}]);return SpeedDialItemElement;}(BaseElement);onsElements.SpeedDialItem=SpeedDialItemElement;customElements.define('ons-speed-dial-item',SpeedDialItemElement);/*
Copyright 2013-2015 ASIAL CORPORATION
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/var defaultClassName$15='speed-dial';var scheme$27={'':'speed-dial--*'};/**
 * @element ons-speed-dial
 * @category control
 * @description
 *   [en]
 *     Element that displays a Material Design Speed Dialog component. It is useful when there are more than one primary action that can be performed in a page.
 *
 *     The Speed dial looks like a `<ons-fab>` element but will expand a menu when tapped.
 *   [/en]
 *   [ja][/ja]
 * @codepen dYQYLg
 * @tutorial vanilla/Reference/speed-dial
 * @seealso ons-speed-dial-item
 *   [en]The `<ons-speed-dial-item>` represents a menu item.[/en]
 *   [ja]ons-speed-dial-itemコンポーネント[/ja]
 * @seealso ons-fab
 *   [en]ons-fab component[/en]
 *   [ja]ons-fabコンポーネント[/ja]
 * @example
 * <ons-speed-dial position="left bottom">
 *   <ons-fab>
 *     <ons-icon icon="fa-twitter"></ons-icon>
 *   </ons-fab>
 *   <ons-speed-dial-item>A</ons-speed-dial-item>
 *   <ons-speed-dial-item>B</ons-speed-dial-item>
 *   <ons-speed-dial-item>C</ons-speed-dial-item>
 * </ons-speed-dial>
 */var SpeedDialElement=function(_BaseElement){inherits(SpeedDialElement,_BaseElement);/**
   * @event open
   * @description
   *   [en]Fired when the menu items are shown.[/en]
   *   [ja][/ja]
   */ /**
   * @event close
   * @description
   *   [en]Fired when the menu items are hidden.[/en]
   *   [ja][/ja]
   */ /**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the component.[/en]
   *   [ja]このコンポーネントの表現を指定します。[/ja]
   */ /**
   * @attribute ripple
   * @description
   *  [en]If this attribute is defined, the button will have a ripple effect when tapped.[/en]
   *  [ja][/ja]
   */ /**
   * @attribute position
   * @type {String}
   * @description
   *   [en]
   *     Specify the vertical and horizontal position of the component.
   *     I.e. to display it in the top right corner specify "right top".
   *     Choose from "right", "left", "top" and "bottom".
   *   [/en]
   *   [ja]
   *     この要素を表示する左右と上下の位置を指定します。
   *     例えば、右上に表示する場合には"right top"を指定します。
   *     左右と上下の位置の指定には、rightとleft、topとbottomがそれぞれ指定できます。
   *   [/ja]
   */ /**
   * @attribute direction
   * @type {String}
   * @description
   *   [en]Specify the direction the items are displayed. Possible values are "up", "down", "left" and "right".[/en]
   *   [ja]
   *     要素が表示する方向を指定します。up, down, left, rightが指定できます。
   *   [/ja]
   */ /**
   * @attribute disabled
   * @description
   *   [en]Specify if button should be disabled.[/en]
   *   [ja]無効化する場合に指定します。[/ja]
   */function SpeedDialElement(){classCallCheck(this,SpeedDialElement);var _this=possibleConstructorReturn(this,(SpeedDialElement.__proto__||Object.getPrototypeOf(SpeedDialElement)).call(this));contentReady(_this,function(){_this._compile();});_this._itemShown=false;_this._boundOnClick=_this._onClick.bind(_this);return _this;}createClass(SpeedDialElement,[{key:'_compile',value:function _compile(){this.classList.add(defaultClassName$15);autoStyle.prepare(this);this._updateRipple();ModifierUtil.initModifier(this,scheme$27);if(this.hasAttribute('direction')){this._updateDirection(this.getAttribute('direction'));}else{this._updateDirection('up');}this._updatePosition();}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){var _this2=this;switch(name){case'class':util$1.restoreClass(this,defaultClassName$15,scheme$27);break;case'modifier':ModifierUtil.onModifierChanged(last,current,this,scheme$27);break;case'ripple':contentReady(this,function(){return _this2._updateRipple();});break;case'direction':contentReady(this,function(){return _this2._updateDirection(current);});break;case'position':contentReady(this,function(){return _this2._updatePosition();});break;}}},{key:'connectedCallback',value:function connectedCallback(){this.addEventListener('click',this._boundOnClick,false);}},{key:'disconnectedCallback',value:function disconnectedCallback(){this.removeEventListener('click',this._boundOnClick,false);}},{key:'_onClick',value:function _onClick(e){if(this.onClick){this.onClick.apply(this);return Promise.resolve();}else if(!this.disabled&&this.visible){return this.toggleItems();}}},{key:'_show',value:function _show(){if(!this.inline){return this.show();}return Promise.resolve();}},{key:'_hide',value:function _hide(){var _this3=this;return new Promise(function(resolve){if(!_this3.inline){setImmediate(function(){return _this3.hide().then(resolve);});}else{resolve();}});}},{key:'_updateRipple',value:function _updateRipple(){if(this._fab){this.hasAttribute('ripple')?this._fab.setAttribute('ripple',''):this._fab.removeAttribute('ripple');}}},{key:'_updateDirection',value:function _updateDirection(direction){var children=this.items;for(var i=0;i<children.length;i++){styler(children[i],{transitionDelay:25*i+'ms',bottom:'auto',right:'auto',top:'auto',left:'auto'});}switch(direction){case'up':for(var _i=0;_i<children.length;_i++){children[_i].style.bottom=72+56*_i+'px';children[_i].style.right='8px';}break;case'down':for(var _i2=0;_i2<children.length;_i2++){children[_i2].style.top=72+56*_i2+'px';children[_i2].style.left='8px';}break;case'left':for(var _i3=0;_i3<children.length;_i3++){children[_i3].style.top='8px';children[_i3].style.right=72+56*_i3+'px';}break;case'right':for(var _i4=0;_i4<children.length;_i4++){children[_i4].style.top='8px';children[_i4].style.left=72+56*_i4+'px';}break;default:util$1["throw"]('Argument must be one of up, down, left or right.');}}},{key:'_updatePosition',value:function _updatePosition(){var position=this.getAttribute('position');this.classList.remove('fab--top__left','fab--bottom__right','fab--bottom__left','fab--top__right','fab--top__center','fab--bottom__center');switch(position){case'top right':case'right top':this.classList.add('fab--top__right');break;case'top left':case'left top':this.classList.add('fab--top__left');break;case'bottom right':case'right bottom':this.classList.add('fab--bottom__right');break;case'bottom left':case'left bottom':this.classList.add('fab--bottom__left');break;case'center top':case'top center':this.classList.add('fab--top__center');break;case'center bottom':case'bottom center':this.classList.add('fab--bottom__center');break;default:break;}}},{key:'_getTranslate',value:function _getTranslate(){var isBottom=(this.getAttribute('position')||'').indexOf('bottom')>=0;var translate=isBottom?'translate3d(0px, -'+(util$1.globals.fabOffset||0)+'px, 0px) ':'';return translate;}/**
     * @method show
     * @signature show()
     * @description
     *   [en]Show the speed dial.[/en]
     *   [ja]Speed dialを表示します。[/ja]
     */},{key:'show',value:function show(){this._fab.show();styler(this,{transform:this._getTranslate});return Promise.resolve();}/**
     * @method hide
     * @signature hide()
     * @description
     *   [en]Hide the speed dial.[/en]
     *   [ja]Speed dialを非表示にします。[/ja]
     */},{key:'hide',value:function hide(){var _this4=this;return this.hideItems().then(function(){return _this4._fab.hide();});}/**
     * @method showItems
     * @signature showItems()
     * @description
     *   [en]Show the speed dial items.[/en]
     *   [ja]Speed dialの子要素を表示します。[/ja]
     */},{key:'showItems',value:function showItems(){if(this.hasAttribute('direction')){this._updateDirection(this.getAttribute('direction'));}else{this._updateDirection('up');}var totalDelay=0;if(!this._itemShown){var children=this.items;for(var i=0;i<children.length;i++){var delay=25*i;totalDelay+=delay;styler(children[i],{transform:'scale(1)',transitionDelay:delay+'ms'});}totalDelay+=50;this._itemShown=true;util$1.triggerElementEvent(this,'open');}var deferred=util$1.defer();setTimeout(deferred.resolve,totalDelay);return deferred.promise;}/**
     * @method hideItems
     * @signature hideItems()
     * @description
     *   [en]Hide the speed dial items.[/en]
     *   [ja]Speed dialの子要素を非表示にします。[/ja]
     */},{key:'hideItems',value:function hideItems(){var totalDelay=0;if(this._itemShown){var children=this.items;for(var i=0;i<children.length;i++){var delay=25*(children.length-i);totalDelay+=delay;styler(children[i],{transform:'scale(0)',transitionDelay:delay+'ms'});}totalDelay+=50;this._itemShown=false;util$1.triggerElementEvent(this,'close');}var deferred=util$1.defer();setTimeout(deferred.resolve,totalDelay);return deferred.promise;}/**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */},{key:'isOpen',/**
     * @method isOpen
     * @signature isOpen()
     * @description
     *   [en]Returns whether the menu is open or not.[/en]
     *   [ja][/ja]
     */value:function isOpen(){return this._itemShown;}/**
     * @method toggle
     * @signature toggle()
     * @description
     *   [en]Toggle visibility.[/en]
     *   [ja]Speed dialの表示非表示を切り替えます。[/ja]
     */},{key:'toggle',value:function toggle(){return this.visible?this.hide():this.show();}/**
     * @method toggleItems
     * @signature toggleItems()
     * @description
     *   [en]Toggle item visibility.[/en]
     *   [ja]Speed dialの子要素の表示非表示を切り替えます。[/ja]
     */},{key:'toggleItems',value:function toggleItems(){return this.isOpen()?this.hideItems():this.showItems();}},{key:'items',get:function get$$1(){return util$1.arrayFrom(this.querySelectorAll('ons-speed-dial-item'));}},{key:'_fab',get:function get$$1(){return util$1.findChild(this,'ons-fab');}},{key:'disabled',set:function set$$1(value){if(value){this.hideItems();}util$1.arrayFrom(this.children).forEach(function(e){util$1.match(e,'.fab')&&util$1.toggleAttribute(e,'disabled',value);});return util$1.toggleAttribute(this,'disabled',value);},get:function get$$1(){return this.hasAttribute('disabled');}/**
     * @property inline
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the element is inline or not.[/en]
     *   [ja]インライン要素の場合に`true`。[/ja]
     */},{key:'inline',get:function get$$1(){return this.hasAttribute('inline');}/**
     * @property visible
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the element is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */},{key:'visible',get:function get$$1(){return this._fab.visible&&this.style.display!=='none';}}],[{key:'observedAttributes',get:function get$$1(){return['class','modifier','ripple','direction','position'];}},{key:'events',get:function get$$1(){return['open','close'];}}]);return SpeedDialElement;}(BaseElement);onsElements.SpeedDial=SpeedDialElement;customElements.define('ons-speed-dial',SpeedDialElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var rewritables$1={/**
   * @param {Element} element
   * @param {Function} callback
   */ready:function ready(element,callback){setImmediate(callback);}};/**
 * @element ons-splitter-content
 * @category menu
 * @description
 *  [en]
 *    The `<ons-splitter-content>` element is used as a child element of `<ons-splitter>`.
 *
 *    It contains the main content of the page while `<ons-splitter-side>` contains the list.
 *  [/en]
 *  [ja]ons-splitter-content要素は、ons-splitter要素の子要素として利用します。[/ja]
 * @codepen rOQOML
 * @tutorial vanilla/Reference/splitter
 * @guide fundamentals.html#managing-pages
 *  [en]Managing multiple pages.[/en]
 *  [ja]複数のページを管理する[/ja]
 * @seealso ons-splitter
 *  [en]The `<ons-splitter>` component is the parent element.[/en]
 *  [ja]ons-splitterコンポーネント[/ja]
 * @seealso ons-splitter-side
 *  [en]The `<ons-splitter-side>` component contains the menu.[/en]
 *  [ja]ons-splitter-sideコンポーネント[/ja]
 * @example
 * <ons-splitter>
 *   <ons-splitter-content>
 *     ...
 *   </ons-splitter-content>
 *
 *   <ons-splitter-side side="left" width="80%" collapse>
 *     ...
 *   </ons-splitter-side>
 * </ons-splitter>
 */var SplitterContentElement=function(_BaseElement){inherits(SplitterContentElement,_BaseElement);/**
   * @attribute page
   * @type {String}
   * @description
   *   [en]
   *     The url of the content page. If this attribute is used the content will be loaded from a `<template>` tag or a remote file.
   *
   *     It is also possible to put `<ons-page>` element as a child of the element.
   *   [/en]
   *   [ja]ons-splitter-content要素に表示するページのURLを指定します。[/ja]
   */function SplitterContentElement(){classCallCheck(this,SplitterContentElement);var _this=possibleConstructorReturn(this,(SplitterContentElement.__proto__||Object.getPrototypeOf(SplitterContentElement)).call(this));_this._page=null;_this._pageLoader=defaultPageLoader;contentReady(_this,function(){rewritables$1.ready(_this,function(){var page=_this._getPageTarget();if(page){_this.load(page);}});});return _this;}createClass(SplitterContentElement,[{key:'connectedCallback',value:function connectedCallback(){if(!util$1.match(this.parentNode,'ons-splitter')){util$1["throw"]('"ons-splitter-content" must have "ons-splitter" as parent');}}},{key:'_getPageTarget',value:function _getPageTarget(){return this._page||this.getAttribute('page');}},{key:'disconnectedCallback',value:function disconnectedCallback(){}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){}/**
     * @property page
     * @type {HTMLElement}
     * @description
     *   [en]The page to load in the splitter content.[/en]
     *   [ja]この要素内に表示するページを指定します。[/ja]
     */},{key:'load',/**
     * @method load
     * @signature load(page, [options])
     * @param {String} page, [options]
     *   [en]Page URL. Can be either an HTML document or an `<template>` id.[/en]
     *   [ja]pageのURLか、`<template>`で宣言したテンプレートのid属性の値を指定します。[/ja]
     * @param {Object} [options]
     * @param {Function} [options.callback]
     * @description
     *   [en]Show the page specified in `page` in the content.[/en]
     *   [ja]指定したURLをメインページを読み込みます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the new `<ons-page>` element[/en]
     *   [ja]`<ons-page>`要素を解決するPromiseオブジェクトを返します。[/ja]
     */value:function load(page){var _this2=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this._page=page;var callback=options.callback||function(){};return new Promise(function(resolve){var oldContent=_this2._content||null;_this2._pageLoader.load({page:page,parent:_this2},function(pageElement){if(oldContent){_this2._pageLoader.unload(oldContent);oldContent=null;}setImmediate(function(){return _this2._show();});callback(pageElement);resolve(pageElement);});});}},{key:'_show',value:function _show(){if(this._content){this._content._show();}}},{key:'_hide',value:function _hide(){if(this._content){this._content._hide();}}},{key:'_destroy',value:function _destroy(){if(this._content){this._pageLoader.unload(this._content);}this.remove();}},{key:'page',get:function get$$1(){return this._page;}/**
     * @param {*} page
     */,set:function set$$1(page){this._page=page;}},{key:'_content',get:function get$$1(){return this.children[0];}/**
     * @property pageLoader
     * @type {Function}
     * @description
     *   [en]Page element loaded in the splitter content.[/en]
     *   [ja]この要素内に表示するページを指定します。[/ja]
     */},{key:'pageLoader',get:function get$$1(){return this._pageLoader;},set:function set$$1(loader){if(!(loader instanceof PageLoader)){util$1.throwPageLoader();}this._pageLoader=loader;}}],[{key:'observedAttributes',get:function get$$1(){return[];}},{key:'rewritables',get:function get$$1(){return rewritables$1;}}]);return SplitterContentElement;}(BaseElement);onsElements.SplitterContent=SplitterContentElement;customElements.define('ons-splitter-content',SplitterContentElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var SplitterMaskElement=function(_BaseElement){inherits(SplitterMaskElement,_BaseElement);function SplitterMaskElement(){classCallCheck(this,SplitterMaskElement);var _this=possibleConstructorReturn(this,(SplitterMaskElement.__proto__||Object.getPrototypeOf(SplitterMaskElement)).call(this));_this._boundOnClick=_this._onClick.bind(_this);contentReady(_this,function(){if(_this.parentNode._sides.every(function(side){return side.mode==='split';})){_this.setAttribute('style','display: none !important');}});return _this;}createClass(SplitterMaskElement,[{key:'_onClick',value:function _onClick(event){if(this.onClick instanceof Function){this.onClick();}else if(util$1.match(this.parentNode,'ons-splitter')){this.parentNode._sides.forEach(function(side){return side.close('left')["catch"](function(){});});}event.stopPropagation();}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){}},{key:'connectedCallback',value:function connectedCallback(){this.addEventListener('click',this._boundOnClick);}},{key:'disconnectedCallback',value:function disconnectedCallback(){this.removeEventListener('click',this._boundOnClick);}}],[{key:'observedAttributes',get:function get$$1(){return[];}}]);return SplitterMaskElement;}(BaseElement);onsElements.SplitterMask=SplitterMaskElement;customElements.define('ons-splitter-mask',SplitterMaskElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var SplitterAnimator$1=function(_BaseAnimator){inherits(SplitterAnimator,_BaseAnimator);function SplitterAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'cubic-bezier(.1, .7, .1, 1)':_ref$timing,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.3:_ref$duration,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay;classCallCheck(this,SplitterAnimator);return possibleConstructorReturn(this,(SplitterAnimator.__proto__||Object.getPrototypeOf(SplitterAnimator)).call(this,{timing:timing,duration:duration,delay:delay}));}createClass(SplitterAnimator,[{key:'updateOptions',value:function updateOptions(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};util$1.extend(this,{timing:this.timing,duration:this.duration,delay:this.delay},options);}/**
     * @param {Element} sideElement
     */},{key:'activate',value:function activate(sideElement){var _this2=this;var splitter=sideElement.parentNode;contentReady(splitter,function(){_this2._side=sideElement;_this2._oppositeSide=splitter.right!==sideElement&&splitter.right||splitter.left!==sideElement&&splitter.left;_this2._content=splitter.content;_this2._mask=splitter.mask;});}},{key:'deactivate',value:function deactivate(){this.clearTransition();this._mask&&this.clearMask();this._content=this._side=this._oppositeSide=this._mask=null;}},{key:'clearTransition',value:function clearTransition(){var _this3=this;'side mask content'.split(/\s+/).forEach(function(e){return _this3['_'+e]&&styler.clear(_this3['_'+e],'transform transition');});}},{key:'clearMask',value:function clearMask(){// Check if the other side needs the mask before clearing
if(!this._oppositeSide||this._oppositeSide.mode==='split'||!this._oppositeSide.isOpen){this._mask.style.opacity='';this._mask.style.display='none';}}/**
     * @param {Number} distance
     */},{key:'translate',value:function translate(distance){}/**
     * @param {Function} done
     */},{key:'open',value:function open(done){done();}/**
     * @param {Function} done
     */},{key:'close',value:function close(done){done();}},{key:'minus',get:function get$$1(){return this._side.side==='right'?'-':'';}}]);return SplitterAnimator;}(BaseAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var OverlaySplitterAnimator=function(_SplitterAnimator){inherits(OverlaySplitterAnimator,_SplitterAnimator);function OverlaySplitterAnimator(){classCallCheck(this,OverlaySplitterAnimator);return possibleConstructorReturn(this,(OverlaySplitterAnimator.__proto__||Object.getPrototypeOf(OverlaySplitterAnimator)).apply(this,arguments));}createClass(OverlaySplitterAnimator,[{key:'translate',value:function translate(distance){this._mask.style.display='block';// Avoid content clicks
Animit(this._side).queue({transform:'translate3d('+(this.minus+distance)+'px, 0, 0)'}).play();}/**
     * @param {Function} done
     */},{key:'open',value:function open(done){Animit.runAll(Animit(this._side).wait(this.delay).queue({transform:'translate3d('+this.minus+'100%, 0, 0)'},this.def).queue(function(callback){callback();done&&done();}),Animit(this._mask).wait(this.delay).queue({display:'block'}).queue({opacity:'1'},{duration:this.duration,timing:'linear'}));}/**
     * @param {Function} done
     */},{key:'close',value:function close(done){Animit.runAll(Animit(this._side).wait(this.delay).queue({transform:'translate3d(0, 0, 0)'},this.def).queue(function(callback){done&&done();callback();}),Animit(this._mask).wait(this.delay).queue({opacity:'0'},{duration:this.duration,timing:'linear'}).queue({display:'none'}));}}]);return OverlaySplitterAnimator;}(SplitterAnimator$1);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var PushSplitterAnimator=function(_SplitterAnimator){inherits(PushSplitterAnimator,_SplitterAnimator);function PushSplitterAnimator(){classCallCheck(this,PushSplitterAnimator);return possibleConstructorReturn(this,(PushSplitterAnimator.__proto__||Object.getPrototypeOf(PushSplitterAnimator)).apply(this,arguments));}createClass(PushSplitterAnimator,[{key:'_getSlidingElements',value:function _getSlidingElements(){var slidingElements=[this._side,this._content];if(this._oppositeSide&&this._oppositeSide.mode==='split'){slidingElements.push(this._oppositeSide);}return slidingElements;}},{key:'translate',value:function translate(distance){if(!this._slidingElements){this._slidingElements=this._getSlidingElements();}this._mask.style.display='block';// Avoid content clicks
Animit(this._slidingElements).queue({transform:'translate3d('+(this.minus+distance)+'px, 0, 0)'}).play();}/**
     * @param {Function} done
     */},{key:'open',value:function open(done){var _this2=this;var max=this._side.offsetWidth;this._slidingElements=this._getSlidingElements();Animit.runAll(Animit(this._slidingElements).wait(this.delay).queue({transform:'translate3d('+(this.minus+max)+'px, 0, 0)'},this.def).queue(function(callback){_this2._slidingElements=null;callback();done&&done();}),Animit(this._mask).wait(this.delay).queue({display:'block'}));}/**
     * @param {Function} done
     */},{key:'close',value:function close(done){var _this3=this;this._slidingElements=this._getSlidingElements();Animit.runAll(Animit(this._slidingElements).wait(this.delay).queue({transform:'translate3d(0, 0, 0)'},this.def).queue(function(callback){_this3._slidingElements=null;get(PushSplitterAnimator.prototype.__proto__||Object.getPrototypeOf(PushSplitterAnimator.prototype),'clearTransition',_this3).call(_this3);done&&done();callback();}),Animit(this._mask).wait(this.delay).queue({display:'none'}));}}]);return PushSplitterAnimator;}(SplitterAnimator$1);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var RevealSplitterAnimator=function(_SplitterAnimator){inherits(RevealSplitterAnimator,_SplitterAnimator);function RevealSplitterAnimator(){classCallCheck(this,RevealSplitterAnimator);return possibleConstructorReturn(this,(RevealSplitterAnimator.__proto__||Object.getPrototypeOf(RevealSplitterAnimator)).apply(this,arguments));}createClass(RevealSplitterAnimator,[{key:'_getSlidingElements',value:function _getSlidingElements(){var slidingElements=[this._content,this._mask];if(this._oppositeSide&&this._oppositeSide.mode==='split'){slidingElements.push(this._oppositeSide);}return slidingElements;}},{key:'activate',value:function activate(sideElement){get(RevealSplitterAnimator.prototype.__proto__||Object.getPrototypeOf(RevealSplitterAnimator.prototype),'activate',this).call(this,sideElement);if(sideElement.mode==='collapse'){this._setStyles(sideElement);}}},{key:'deactivate',value:function deactivate(){this._side&&this._unsetStyles(this._side);get(RevealSplitterAnimator.prototype.__proto__||Object.getPrototypeOf(RevealSplitterAnimator.prototype),'deactivate',this).call(this);}},{key:'_setStyles',value:function _setStyles(sideElement){styler(sideElement,{left:sideElement.side==='right'?'auto':0,right:sideElement.side==='right'?0:'auto',zIndex:0,backgroundColor:'black',transform:this._generateBehindPageStyle(0).container.transform,display:'none'});var splitter=sideElement.parentElement;contentReady(splitter,function(){return splitter.content&&styler(splitter.content,{boxShadow:'0 0 12px 0 rgba(0, 0, 0, 0.2)'});});}},{key:'_unsetStyles',value:function _unsetStyles(sideElement){styler.clear(sideElement,'left right zIndex backgroundColor display');if(sideElement._content){sideElement._content.style.opacity='';}// Check if the other side needs the common styles
if(!this._oppositeSide||this._oppositeSide.mode==='split'){sideElement.parentElement.content&&styler.clear(sideElement.parentElement.content,'boxShadow');}}},{key:'_generateBehindPageStyle',value:function _generateBehindPageStyle(distance){var max=this.maxWidth;var behindDistance=(distance-max)/max*10;behindDistance=isNaN(behindDistance)?0:Math.max(Math.min(behindDistance,0),-10);var behindTransform='translate3d('+(this.minus?-1:1)*behindDistance+'%, 0, 0)';var opacity=1+behindDistance/100;return{content:{opacity:opacity},container:{transform:behindTransform}};}},{key:'translate',value:function translate(distance){this._side.style.display='';this._side.style.zIndex=1;this.maxWidth=this.maxWidth||this._getMaxWidth();var menuStyle=this._generateBehindPageStyle(Math.min(distance,this.maxWidth));if(!this._slidingElements){this._slidingElements=this._getSlidingElements();}this._mask.style.display='block';// Avoid content clicks
Animit.runAll(Animit(this._slidingElements).queue({transform:'translate3d('+(this.minus+distance)+'px, 0, 0)'}),Animit(this._side._content).queue(menuStyle.content),Animit(this._side).queue(menuStyle.container));}/**
     * @param {Function} done
     */},{key:'open',value:function open(done){var _this2=this;this._side.style.display='';this._side.style.zIndex=1;this.maxWidth=this.maxWidth||this._getMaxWidth();var menuStyle=this._generateBehindPageStyle(this.maxWidth);this._slidingElements=this._getSlidingElements();setTimeout(function(){// Fix: Time to update previous translate3d after changing style.display
Animit.runAll(Animit(_this2._slidingElements).wait(_this2.delay).queue({transform:'translate3d('+(_this2.minus+_this2.maxWidth)+'px, 0, 0)'},_this2.def),Animit(_this2._mask).wait(_this2.delay).queue({display:'block'}),Animit(_this2._side._content).wait(_this2.delay).queue(menuStyle.content,_this2.def),Animit(_this2._side).wait(_this2.delay).queue(menuStyle.container,_this2.def).queue(function(callback){_this2._slidingElements=null;callback();done&&done();}));},1000/60);}/**
     * @param {Function} done
     */},{key:'close',value:function close(done){var _this3=this;var menuStyle=this._generateBehindPageStyle(0);this._slidingElements=this._getSlidingElements();Animit.runAll(Animit(this._slidingElements).wait(this.delay).queue({transform:'translate3d(0, 0, 0)'},this.def),Animit(this._mask).wait(this.delay).queue({display:'none'}),Animit(this._side._content).wait(this.delay).queue(menuStyle.content,this.def),Animit(this._side).wait(this.delay).queue(menuStyle.container,this.def).queue(function(callback){_this3._slidingElements=null;_this3._side.style.zIndex=0;_this3._side.style.display='none';_this3._side._content.style.opacity='';done&&done();callback();}));}},{key:'_getMaxWidth',value:function _getMaxWidth(){return this._side.offsetWidth;}}]);return RevealSplitterAnimator;}(SplitterAnimator$1);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var _animatorDict$7={"default":OverlaySplitterAnimator,overlay:OverlaySplitterAnimator,push:PushSplitterAnimator,reveal:RevealSplitterAnimator};/**
 * @element ons-splitter
 * @category menu
 * @description
 *  [en]
 *    A component that enables responsive layout by implementing both a two-column layout and a sliding menu layout.
 *
 *    It can be configured to automatically expand into a column layout on large screens and collapse the menu on smaller screens. When the menu is collapsed the user can open it by swiping.
 *  [/en]
 *  [ja][/ja]
 * @codepen rOQOML
 * @tutorial vanilla/Reference/splitter
 * @guide fundamentals.html#managing-pages
 *  [en]Managing multiple pages.[/en]
 *  [ja]複数のページを管理する[/ja]
 * @seealso ons-splitter-content
 *  [en]The `<ons-splitter-content>` component contains the main content of the page.[/en]
 *  [ja]ons-splitter-contentコンポーネント[/ja]
 * @seealso ons-splitter-side
 *  [en]The `<ons-splitter-side>` component contains the menu.[/en]
 *  [ja]ons-splitter-sideコンポーネント[/ja]
 * @example
 * <ons-splitter id="splitter">
 *   <ons-splitter-content>
 *     ...
 *   </ons-splitter-content>
 *
 *   <ons-splitter-side side="left" width="80%" collapse swipeable>
 *     ...
 *   </ons-splitter-side>
 * </ons-splitter>
 *
 * <script>
 *   var splitter = document.getElementById('splitter');
 *   splitter.left.open();
 * </script>
 */var SplitterElement=function(_BaseElement){inherits(SplitterElement,_BaseElement);createClass(SplitterElement,[{key:'_getSide',value:function _getSide(side){var element=util$1.findChild(this,function(e){return util$1.match(e,'ons-splitter-side')&&e.getAttribute('side')===side;});return element;}/**
     * @property left
     * @readonly
     * @type {HTMLElement}
     * @description
     *   [en]Left `<ons-splitter-side>` element.[/en]
     *   [ja][/ja]
     */},{key:'_onDeviceBackButton',value:function _onDeviceBackButton(event){this._sides.some(function(s){return s.isOpen?s.close():false;})||event.callParentHandler();}},{key:'_onModeChange',value:function _onModeChange(e){var _this2=this;if(e.target.parentNode){contentReady(this,function(){_this2._layout();});}}},{key:'_layout',value:function _layout(){var _this3=this;this._sides.forEach(function(side){if(_this3.content){_this3.content.style[side.side]=side.mode==='split'?side.style.width:0;}});}},{key:'left',get:function get$$1(){return this._getSide('left');}/**
     * @property right
     * @readonly
     * @type {HTMLElement}
     * @description
     *   [en]Right `<ons-splitter-side>` element.[/en]
     *   [ja][/ja]
     */},{key:'right',get:function get$$1(){return this._getSide('right');}/**
     * @property side
     * @readonly
     * @type {HTMLElement}
     * @description
     *   [en]First `<ons-splitter-side>` element regardless the actual side.[/en]
     *   [ja][/ja]
     */},{key:'side',get:function get$$1(){return util$1.findChild(this,'ons-splitter-side');}},{key:'_sides',get:function get$$1(){return[this.left,this.right].filter(function(e){return e;});}/**
     * @property content
     * @readonly
     * @type {HTMLElement}
     * @description
     *   [en]The `<ons-splitter-content>` element.[/en]
     *   [ja][/ja]
     */},{key:'content',get:function get$$1(){return util$1.findChild(this,'ons-splitter-content');}},{key:'topPage',get:function get$$1(){return this.content._content;}},{key:'mask',get:function get$$1(){return util$1.findChild(this,'ons-splitter-mask');}/**
     * @property onDeviceBackButton
     * @type {Object}
     * @description
     *   [en]Back-button handler.[/en]
     *   [ja]バックボタンハンドラ。[/ja]
     */},{key:'onDeviceBackButton',get:function get$$1(){return this._backButtonHandler;},set:function set$$1(callback){if(this._backButtonHandler){this._backButtonHandler.destroy();}this._backButtonHandler=deviceBackButtonDispatcher.createHandler(this,callback);}}]);function SplitterElement(){classCallCheck(this,SplitterElement);var _this=possibleConstructorReturn(this,(SplitterElement.__proto__||Object.getPrototypeOf(SplitterElement)).call(this));_this._onModeChange=_this._onModeChange.bind(_this);contentReady(_this,function(){!_this.mask&&_this.appendChild(document.createElement('ons-splitter-mask'));_this._layout();});return _this;}createClass(SplitterElement,[{key:'connectedCallback',value:function connectedCallback(){this.onDeviceBackButton=this._onDeviceBackButton.bind(this);this.addEventListener('modechange',this._onModeChange,false);}},{key:'disconnectedCallback',value:function disconnectedCallback(){this._backButtonHandler.destroy();this._backButtonHandler=null;this.removeEventListener('modechange',this._onModeChange,false);}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){}},{key:'_show',value:function _show(){util$1.propagateAction(this,'_show');}},{key:'_hide',value:function _hide(){util$1.propagateAction(this,'_hide');}},{key:'_destroy',value:function _destroy(){util$1.propagateAction(this,'_destroy');this.remove();}}],[{key:'registerAnimator',value:function registerAnimator(name,Animator){if(!(Animator instanceof SplitterAnimator)){util$1.throwAnimator('Splitter');}_animatorDict$7[name]=Animator;}},{key:'SplitterAnimator',get:function get$$1(){return SplitterAnimator;}},{key:'animators',get:function get$$1(){return _animatorDict$7;}}]);return SplitterElement;}(BaseElement);onsElements.Splitter=SplitterElement;customElements.define('ons-splitter',SplitterElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var SPLIT_MODE='split';var COLLAPSE_MODE='collapse';var CLOSED_STATE='closed';var OPEN_STATE='open';var CHANGING_STATE='changing';var rewritables$2={/**
   * @param {Element} splitterSideElement
   * @param {Function} callback
   */ready:function ready(splitterSideElement,callback){setImmediate(callback);}};var CollapseDetection=function(){function CollapseDetection(element,target){classCallCheck(this,CollapseDetection);this._element=element;this._onChange=this._onChange.bind(this);target&&this.changeTarget(target);}createClass(CollapseDetection,[{key:'changeTarget',value:function changeTarget(target){this.disable();this._target=target;if(target){this._orientation=['portrait','landscape'].indexOf(target)!==-1;this.activate();}}},{key:'_match',value:function _match(value){if(this._orientation){return this._target===(value.isPortrait?'portrait':'landscape');}return value.matches;}},{key:'_onChange',value:function _onChange(value){this._element._updateMode(this._match(value)?COLLAPSE_MODE:SPLIT_MODE);}},{key:'activate',value:function activate(){if(this._orientation){orientation.on('change',this._onChange);this._onChange({isPortrait:orientation.isPortrait()});}else{this._queryResult=window.matchMedia(this._target);this._queryResult.addListener(this._onChange);this._onChange(this._queryResult);}}},{key:'disable',value:function disable(){if(this._orientation){orientation.off('change',this._onChange);}else if(this._queryResult){this._queryResult.removeListener(this._onChange);this._queryResult=null;}}}]);return CollapseDetection;}();/**
 * @element ons-splitter-side
 * @category menu
 * @description
 *  [en]
 *    The `<ons-splitter-side>` element is used as a child element of `<ons-splitter>`.
 *
 *    It will be displayed on either the left or right side of the `<ons-splitter-content>` element.
 *
 *    It supports two modes: collapsed and split. When it's in collapsed mode it will be hidden from view and can be displayed when the user swipes the screen or taps a button. In split mode the element is always shown. It can be configured to automatically switch between the two modes depending on the screen size.
 *  [/en]
 *  [ja]ons-splitter-side要素は、ons-splitter要素の子要素として利用します。[/ja]
 * @codepen rOQOML
 * @tutorial vanilla/Reference/splitter
 * @guide fundamentals.html#managing-pages
 *  [en]Managing multiple pages.[/en]
 *  [ja]複数のページを管理する[/ja]
 * @seealso ons-splitter
 *  [en]The `<ons-splitter>` is the parent component.[/en]
 *  [ja]ons-splitterコンポーネント[/ja]
 * @seealso ons-splitter-content
 *  [en]The `<ons-splitter-content>` component contains the main content of the page.[/en]
 *  [ja]ons-splitter-contentコンポーネント[/ja]
 * @example
 * <ons-splitter>
 *   <ons-splitter-content>
 *     ...
 *   </ons-splitter-content>
 *
 *   <ons-splitter-side side="left" width="80%" collapse>
 *     ...
 *   </ons-splitter-side>
 * </ons-splitter>
 */var SplitterSideElement=function(_BaseElement){inherits(SplitterSideElement,_BaseElement);/**
   * @event modechange
   * @description
   *   [en]Fired just after the component's mode changes.[/en]
   *   [ja]この要素のモードが変化した際に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Object} event.side
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {String} event.mode
   *   [en]Returns the current mode. Can be either `"collapse"` or `"split"`.[/en]
   *   [ja]現在のモードを返します。[/ja]
   */ /**
   * @event preopen
   * @description
   *   [en]Fired just before the sliding menu is opened.[/en]
   *   [ja]スライディングメニューが開く前に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Function} event.cancel
   *   [en]Call to cancel opening sliding menu.[/en]
   *   [ja]スライディングメニューが開くのをキャンセルします。[/ja]
   * @param {Object} event.side
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */ /**
   * @event postopen
   * @description
   *   [en]Fired just after the sliding menu is opened.[/en]
   *   [ja]スライディングメニューが開いた後に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Object} event.side
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */ /**
   * @event preclose
   * @description
   *   [en]Fired just before the sliding menu is closed.[/en]
   *   [ja]スライディングメニューが閉じる前に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Object} event.side
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Call to cancel opening sliding-menu.[/en]
   *   [ja]スライディングメニューが閉じるのをキャンセルします。[/ja]
   */ /**
   * @event postclose
   * @description
   *   [en]Fired just after the sliding menu is closed.[/en]
   *   [ja]スライディングメニューが閉じた後に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Object} event.side
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */ /**
   * @attribute animation
   * @type {String}
   * @default  default
   * @description
   *  [en]Specify the animation. Use one of `overlay`, `push`, `reveal` or  `default`.[/en]
   *  [ja]アニメーションを指定します。"overlay", "push", "reveal", "default"のいずれかを指定できます。[/ja]
   */ /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. {duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
   */ /**
   * @attribute open-threshold
   * @type {Number}
   * @default  0.3
   * @description
   *  [en]Specify how much the menu needs to be swiped before opening. A value between `0` and `1`.[/en]
   *  [ja]どのくらいスワイプすればスライディングメニューを開くかどうかの割合を指定します。0から1の間の数値を指定します。スワイプの距離がここで指定した数値掛けるこの要素の幅よりも大きければ、スワイプが終わった時にこの要素を開きます。デフォルトは0.3です。[/ja]
   */ /**
   * @attribute collapse
   * @type {String}
   * @description
   *   [en]
   *     Specify the collapse behavior. Valid values are `"portrait"`, `"landscape"` or a media query.
   *     The strings `"portrait"` and `"landscape"` means the view will collapse when device is in landscape or portrait orientation.
   *     If the value is a media query, the view will collapse when the media query resolves to `true`.
   *     If the value is not defined, the view always be in `"collapse"` mode.
   *   [/en]
   *   [ja]
   *     左側のページを非表示にする条件を指定します。portrait, landscape、width #pxもしくはメディアクエリの指定が可能です。
   *     portraitもしくはlandscapeを指定すると、デバイスの画面が縦向きもしくは横向きになった時に適用されます。
   *     メディアクエリを指定すると、指定したクエリに適合している場合に適用されます。
   *     値に何も指定しない場合には、常にcollapseモードになります。
   *   [/ja]
   */ /**
   * @attribute swipe-target-width
   * @type {String}
   * @description
   *   [en]The width of swipeable area calculated from the edge (in pixels). Use this to enable swipe only when the finger touch on the screen edge.[/en]
   *   [ja]スワイプの判定領域をピクセル単位で指定します。画面の端から指定した距離に達するとページが表示されます。[/ja]
   */ /**
   * @attribute width
   * @type {String}
   * @description
   *   [en]Can be specified in either pixels or as a percentage, e.g. `90%` or `200px`.[/en]
   *   [ja]この要素の横幅を指定します。pxと%での指定が可能です。eg. 90%, 200px[/ja]
   */ /**
   * @attribute side
   * @type {String}
   * @default left
   * @description
   *   [en]Specify which side of the screen the `<ons-splitter-side>` element is located. Possible values are `"left"` and `"right"`.[/en]
   *   [ja]この要素が左か右かを指定します。指定できる値は"left"か"right"のみです。[/ja]
   */ /**
   * @attribute mode
   * @type {String}
   * @description
   *   [en]Current mode. Possible values are `"collapse"` or `"split"`. This attribute is read only.[/en]
   *   [ja]現在のモードが設定されます。"collapse"もしくは"split"が指定されます。この属性は読み込み専用です。[/ja]
   */ /**
   * @attribute page
   * @initonly
   * @type {String}
   * @description
   *   [en]The URL of the menu page.[/en]
   *   [ja]ons-splitter-side要素に表示するページのURLを指定します。[/ja]
   */ /**
   * @attribute swipeable
   * @type {Boolean}
   * @description
   *   [en]Whether to enable swipe interaction on collapse mode.[/en]
   *   [ja]collapseモード時にスワイプ操作を有効にする場合に指定します。[/ja]
   */function SplitterSideElement(){classCallCheck(this,SplitterSideElement);var _this=possibleConstructorReturn(this,(SplitterSideElement.__proto__||Object.getPrototypeOf(SplitterSideElement)).call(this));_this._page=null;_this._state=CLOSED_STATE;_this._lock=new DoorLock();_this._pageLoader=defaultPageLoader;_this._collapseDetection=new CollapseDetection(_this);_this._animatorFactory=new AnimatorFactory({animators:SplitterElement.animators,baseClass:SplitterAnimator$1,baseClassName:'SplitterAnimator',defaultAnimation:_this.getAttribute('animation')});contentReady(_this,function(){// These attributes are used early by the parent element
_this.attributeChangedCallback('width');if(!_this.hasAttribute('side')){_this.setAttribute('side','left');}rewritables$2.ready(_this,function(){var page=_this._page||_this.getAttribute('page');page&&_this.load(page);});});return _this;}createClass(SplitterSideElement,[{key:'connectedCallback',value:function connectedCallback(){var _this2=this;if(!util$1.match(this.parentNode,'ons-splitter')){util$1["throw"]('Parent must be an ons-splitter element');}this._swipe=new SwipeReveal({element:this,elementHandler:this.parentElement,swipeMax:function swipeMax(){_this2._onSwipe&&_this2._onSwipe(1,_this2._animationOpt);_this2.open();},swipeMid:function swipeMid(distance,width){_this2._onSwipe&&_this2._onSwipe(distance/width);_this2._animator.translate(distance);},swipeMin:function swipeMin(){_this2._onSwipe&&_this2._onSwipe(0,_this2._animationOpt);_this2.close();},getThreshold:function getThreshold(){return Math.max(0,Math.min(1,parseFloat(_this2.getAttribute('open-threshold'))||0.3));},getSide:function getSide(){return _this2.side;},isInitialState:function isInitialState(){var closed=_this2._state===CLOSED_STATE;_this2._state=CHANGING_STATE;return closed;},ignoreSwipe:function ignoreSwipe(event,distance){var isOpen=_this2.isOpen;var validDrag=function validDrag(d){return _this2.side==='left'?d==='left'&&isOpen||d==='right'&&!isOpen:d==='left'&&!isOpen||d==='right'&&isOpen;};var area=Math.max(0,parseInt(_this2.getAttribute('swipe-target-width'),10)||0);return _this2._mode===SPLIT_MODE||_this2._lock.isLocked()||_this2._isOtherSideOpen()||!validDrag(event.gesture.direction)||!isOpen&&area!==0&&distance>area;}});this.attributeChangedCallback('swipeable');contentReady(this,function(){_this2.constructor.observedAttributes.forEach(function(attr){return _this2.attributeChangedCallback(attr,null,_this2.getAttribute(attr));});});}},{key:'disconnectedCallback',value:function disconnectedCallback(){this._swipe&&this._swipe.dispose();this._animator=this._animationOpt=this._swipe=null;}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){switch(name){case'swipeable':this._swipe&&this._swipe.update();break;case'width':current=this.getAttribute('width');// Sometimes undefined. CE bug?
this.style.width=/^\d+(px|%)$/.test(current)?current:'80%';break;default:this[util$1.camelize('_update-'+name)](current);}}},{key:'_emitEvent',value:function _emitEvent(name){if(name.slice(0,3)!=='pre'){return util$1.triggerElementEvent(this,name,{side:this});}var isCanceled=false;util$1.triggerElementEvent(this,name,{side:this,cancel:function cancel(){return isCanceled=true;}});return isCanceled;}},{key:'_isOtherSideOpen',value:function _isOtherSideOpen(){var _this3=this;return!!util$1.findChild(this.parentElement,function(el){return el instanceof _this3.constructor&&el!==_this3&&el._mode===COLLAPSE_MODE&&el.isOpen;});}},{key:'_updateCollapse',value:function _updateCollapse(){var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.getAttribute('collapse');if(value===null||value==='split'){this._collapseDetection.disable();return this._updateMode(SPLIT_MODE);}if(value===''||value==='collapse'){this._collapseDetection.disable();return this._updateMode(COLLAPSE_MODE);}this._collapseDetection.changeTarget(value);}},{key:'_updateMode',value:function _updateMode(mode){if(mode!==this._mode){this._mode=mode;this.setAttribute('mode',mode);// readonly attribute for the users
if(mode===SPLIT_MODE){this._animator&&this._animator.deactivate();this._state=CLOSED_STATE;}else{this._animator&&this._animator.activate(this);this._state===OPEN_STATE&&this._animator.open();}util$1.triggerElementEvent(this,'modechange',{side:this,mode:mode});}}},{key:'_updateAnimation',value:function _updateAnimation(){var animation=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.getAttribute('animation');if(this.parentNode){this._animator&&this._animator.deactivate();this._animator=this._animatorFactory.newAnimator({animation:animation});this._animator.activate(this);this._animationOpt={timing:this._animator.duration,duration:this._animator.duration};}}},{key:'_updateAnimationOptions',value:function _updateAnimationOptions(){var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.getAttribute('animation-options');this._animator.updateOptions(AnimatorFactory.parseAnimationOptionsString(value));}/**
     * @property page
     * @type {*}
     * @description
     *   [en]Page location to load in the splitter side.[/en]
     *   [ja]この要素内に表示するページを指定します。[/ja]
     */},{key:'open',/**
     * @method open
     * @signature open([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {Function} [options.callback]
     *   [en]This function will be called after the menu has been opened.[/en]
     *   [ja]メニューが開いた後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Open menu in collapse mode.[/en]
     *   [ja]collapseモードになっているons-splitter-side要素を開きます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the splitter side element or false if not in collapse mode[/en]
     *   [ja][/ja]
     */value:function open(options){return this.toggle(options,true);}/**
     * @method close
     * @signature close([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {Function} [options.callback]
     *   [en]This function will be called after the menu has been closed.[/en]
     *   [ja]メニューが閉じた後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Close menu in collapse mode.[/en]
     *   [ja]collapseモードになっているons-splitter-side要素を閉じます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the splitter side element or false if not in collapse mode[/en]
     *   [ja][/ja]
     */},{key:'close',value:function close(options){return this.toggle(options,false);}/**
     * @method toggle
     * @signature toggle([options])
     * @param {Object} [options]
     * @description
     *   [en]Opens if it's closed. Closes if it's open.[/en]
     *   [ja]開けている場合は要素を閉じますそして開けている場合は要素を開きます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the splitter side element or false if not in collapse mode[/en]
     *   [ja][/ja]
     */},{key:'toggle',value:function toggle(){var _this4=this;var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var force=arguments[1];var shouldOpen=typeof force==='boolean'?force:!this.isOpen;var action=shouldOpen?'open':'close';var FINAL_STATE=shouldOpen?OPEN_STATE:CLOSED_STATE;if(this._mode===SPLIT_MODE){return Promise.resolve(false);}if(this._state===FINAL_STATE){return Promise.resolve(this);}if(this._lock.isLocked()){return Promise.reject('Another splitter-side action is already running.');}if(shouldOpen&&this._isOtherSideOpen()){return Promise.reject('Another menu is already open.');}if(this._emitEvent('pre'+action)){return Promise.reject('Canceled in pre'+action+' event.');}var unlock=this._lock.lock();this._state=CHANGING_STATE;if(options.animation){this._updateAnimation(options.animation);}return new Promise(function(resolve){_this4._animator[action](function(){util$1.iosPageScrollFix(shouldOpen);_this4._state=FINAL_STATE;unlock();_this4._emitEvent('post'+action);options.callback instanceof Function&&options.callback(_this4);resolve(_this4);});});}/**
     * @method load
     * @signature load(page, [options])
     * @param {String} page
     *   [en]Page URL. Can be either an HTML document or a `<template>`.[/en]
     *   [ja]pageのURLか、`<template>`で宣言したテンプレートのid属性の値を指定します。[/ja]
     * @param {Object} [options]
     * @param {Function} [options.callback]
     * @description
     *   [en]Show the page specified in pageUrl in the right section[/en]
     *   [ja]指定したURLをメインページを読み込みます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the new page element[/en]
     *   [ja][/ja]
     */},{key:'load',value:function load(page){var _this5=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this._page=page;var callback=options.callback||function(){};return new Promise(function(resolve){var oldContent=_this5._content||null;_this5._pageLoader.load({page:page,parent:_this5},function(pageElement){if(oldContent){_this5._pageLoader.unload(oldContent);oldContent=null;}setImmediate(function(){return _this5._show();});callback(pageElement);resolve(pageElement);});});}},{key:'_show',value:function _show(){if(this._content){this._content._show();}}},{key:'_hide',value:function _hide(){if(this._content){this._content._hide();}}},{key:'_destroy',value:function _destroy(){if(this._content){this._pageLoader.unload(this._content);}this.remove();}},{key:'side',get:function get$$1(){return this.getAttribute('side')==='right'?'right':'left';}},{key:'page',get:function get$$1(){return this._page;}/**
     * @param {*} page
     */,set:function set$$1(page){this._page=page;}},{key:'_content',get:function get$$1(){return this.children[0];}/**
     * @property pageLoader
     * @description
     *   [en][/en]
     *   [ja][/ja]
     */},{key:'pageLoader',get:function get$$1(){return this._pageLoader;},set:function set$$1(loader){if(!(loader instanceof PageLoader)){util$1.throwPageLoader();}this._pageLoader=loader;}/**
     * @property mode
     * @readonly
     * @type {String}
     * @description
     *   [en]Current mode. Possible values are "split", "collapse", "closed", "open" or "changing".[/en]
     *   [ja][/ja]
     */},{key:'mode',get:function get$$1(){return this._mode;}/**
     * @property onSwipe
     * @type {Function}
     * @description
     *   [en]Hook called whenever the user slides the splitter. It gets a decimal ratio (0-1) and an animationOptions object as arguments.[/en]
     *   [ja][/ja]
     */},{key:'onSwipe',get:function get$$1(){return this._onSwipe;},set:function set$$1(value){if(value&&!(value instanceof Function)){util$1["throw"]('"onSwipe" must be a function');}this._onSwipe=value;}/**
     * @property isOpen
     * @type {Boolean}
     * @readonly
     * @description
     *   [en]This value is `true` when the menu is open.[/en]
     *   [ja][/ja]
     */},{key:'isOpen',get:function get$$1(){return this._mode===COLLAPSE_MODE&&this._state!==CLOSED_STATE;}}],[{key:'observedAttributes',get:function get$$1(){return['animation','width','collapse','swipeable','animation-options'];}},{key:'events',get:function get$$1(){return['preopen','postopen','preclose','postclose','modechange'];}},{key:'rewritables',get:function get$$1(){return rewritables$2;}}]);return SplitterSideElement;}(BaseElement);onsElements.SplitterSide=SplitterSideElement;customElements.define('ons-splitter-side',SplitterSideElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var scheme$28={'':'switch--*','.switch__input':'switch--*__input','.switch__handle':'switch--*__handle','.switch__toggle':'switch--*__toggle'};var locations={ios:[1,21],material:[0,16]};/**
 * @element ons-switch
 * @category form
 * @description
 *   [en]
 *     Switch component. The switch can be toggled both by dragging and tapping.
 *
 *     Will automatically displays a Material Design switch on Android devices.
 *   [/en]
 *   [ja]スイッチを表示するコンポーネントです。[/ja]
 * @modifier material
 *   [en]Material Design switch[/en]
 *   [ja][/ja]
 * @codepen LpXZQQ
 * @tutorial vanilla/Reference/switch
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @example
 * <ons-switch checked></ons-switch>
 * <ons-switch disabled></ons-switch>
 * <ons-switch modifier="material"></ons-switch>
 */var SwitchElement=function(_BaseCheckboxElement){inherits(SwitchElement,_BaseCheckboxElement);function SwitchElement(){classCallCheck(this,SwitchElement);var _this=possibleConstructorReturn(this,(SwitchElement.__proto__||Object.getPrototypeOf(SwitchElement)).call(this));contentReady(_this,function(){_this.attributeChangedCallback('modifier',null,_this.getAttribute('modifier'));});_this._onChange=_this._onChange.bind(_this);_this._onRelease=_this._onRelease.bind(_this);_this._lastTimeStamp=0;return _this;}createClass(SwitchElement,[{key:'_getPosition',/* Own props */value:function _getPosition(e){var l=this._locations;return Math.min(l[1],Math.max(l[0],this._startX+e.gesture.deltaX));}},{key:'_emitChangeEvent',value:function _emitChangeEvent(){util$1.triggerElementEvent(this,'change',{value:this.checked,"switch":this,isInteractive:true});}},{key:'_onChange',value:function _onChange(event){if(event&&event.stopPropagation){event.stopPropagation();}this._emitChangeEvent();}},{key:'_onClick',value:function _onClick(ev){if(ev.target.classList.contains(this.defaultElementClass+'__touch')||ev.timeStamp-this._lastTimeStamp<50// Prevent second click triggered by <label>
){ev.preventDefault();}this._lastTimeStamp=ev.timeStamp;}},{key:'_onHold',value:function _onHold(e){if(!this.disabled){ModifierUtil.addModifier(this,'active');document.addEventListener('release',this._onRelease);}}},{key:'_onDragStart',value:function _onDragStart(e){if(this.disabled||['left','right'].indexOf(e.gesture.direction)===-1){ModifierUtil.removeModifier(this,'active');return;}e.consumed=true;ModifierUtil.addModifier(this,'active');this._startX=this._locations[this.checked?1:0];// - e.gesture.deltaX;
this.addEventListener('drag',this._onDrag);document.addEventListener('release',this._onRelease);}},{key:'_onDrag',value:function _onDrag(e){e.stopPropagation();this._handle.style.left=this._getPosition(e)+'px';}},{key:'_onRelease',value:function _onRelease(e){var l=this._locations;var position=this._getPosition(e);var previousValue=this.checked;this.checked=position>=(l[0]+l[1])/2;if(this.checked!==previousValue){this._emitChangeEvent();}this.removeEventListener('drag',this._onDrag);document.removeEventListener('release',this._onRelease);this._handle.style.left='';ModifierUtil.removeModifier(this,'active');}},{key:'click',value:function click(){var ev=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(!this.disabled){this.checked=!this.checked;this._emitChangeEvent();this._lastTimeStamp=ev.timeStamp||0;}}},{key:'connectedCallback',value:function connectedCallback(){var _this2=this;contentReady(this,function(){_this2._input.addEventListener('change',_this2._onChange);});this.addEventListener('dragstart',this._onDragStart);this.addEventListener('hold',this._onHold);this.addEventListener('tap',this.click);this.addEventListener('click',this._onClick);this._gestureDetector=new GestureDetector(this,{dragMinDistance:1,holdTimeout:251,passive:true});}},{key:'disconnectedCallback',value:function disconnectedCallback(){var _this3=this;contentReady(this,function(){_this3._input.removeEventListener('change',_this3._onChange);});this.removeEventListener('dragstart',this._onDragStart);this.removeEventListener('hold',this._onHold);this.removeEventListener('tap',this.click);this.removeEventListener('click',this._onClick);if(this._gestureDetector){this._gestureDetector.dispose();}}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){if(name==='modifier'){var md=(current||'').indexOf('material')!==-1;this._locations=locations[md?'material':'ios'];}get(SwitchElement.prototype.__proto__||Object.getPrototypeOf(SwitchElement.prototype),'attributeChangedCallback',this).call(this,name,last,current);}/**
     * @event change
     * @description
     *   [en]Fired when the switch is toggled.[/en]
     *   [ja]ON/OFFが変わった時に発火します。[/ja]
     * @param {Object} event
     *   [en]Event object.[/en]
     *   [ja]イベントオブジェクト。[/ja]
     * @param {Object} event.switch
     *   [en]Switch object.[/en]
     *   [ja]イベントが発火したSwitchオブジェクトを返します。[/ja]
     * @param {Boolean} event.value
     *   [en]Current value.[/en]
     *   [ja]現在の値を返します。[/ja]
     * @param {Boolean} event.isInteractive
     *   [en]True if the change was triggered by the user clicking on the switch.[/en]
     *   [ja]タップやクリックなどのユーザの操作によって変わった場合にはtrueを返します。[/ja]
     */ /**
     * @attribute modifier
     * @type {String}
     * @description
     *  [en]The appearance of the switch.[/en]
     *  [ja]スイッチの表現を指定します。[/ja]
     */ /**
     * @attribute disabled
     * @description
     *   [en]Whether the switch is be disabled.[/en]
     *   [ja]スイッチを無効の状態にする場合に指定します。[/ja]
     */ /**
     * @attribute checked
     * @description
     *   [en]Whether the switch is checked.[/en]
     *   [ja]スイッチがONの状態にするときに指定します。[/ja]
     */ /**
     * @attribute input-id
     * @type {String}
     * @description
     *   [en]Specify the `id` attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
     *   [ja][/ja]
     */ /**
     * @property checked
     * @type {Boolean}
     * @description
     *   [en]This value is `true` if the switch is checked.[/en]
     *   [ja]スイッチがONの場合に`true`。[/ja]
     */ /**
     * @property value
     * @type {String}
     * @description
     *   [en]The current value of the input.[/en]
     *   [ja][/ja]
     */ /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */ /**
     * @property checkbox
     * @readonly
     * @type {HTMLElement}
     * @description
     *   [en]The underlying checkbox element.[/en]
     *   [ja]コンポーネント内部のcheckbox要素になります。[/ja]
     */ /**
     * @method focus
     * @signature focus()
     * @description
     *   [en]Focuses the switch.[/en]
     *   [ja][/ja]
     */ /**
     * @method blur
     * @signature blur()
     * @description
     *   [en]Removes focus from the switch.[/en]
     *   [ja][/ja]
     */},{key:'_scheme',get:function get$$1(){return scheme$28;}},{key:'_defaultClassName',get:function get$$1(){return'switch';}},{key:'_template',get:function get$$1(){return'\n      <input type="'+this.type+'" class="'+this._defaultClassName+'__input">\n      <div class="'+this._defaultClassName+'__toggle">\n        <div class="'+this._defaultClassName+'__handle">\n          <div class="'+this._defaultClassName+'__touch"></div>\n        </div>\n      </div>\n    ';}},{key:'type',get:function get$$1(){return'checkbox';}},{key:'_handle',get:function get$$1(){return this.querySelector('.'+this._defaultClassName+'__handle');}},{key:'checkbox',get:function get$$1(){return this._input;}}],[{key:'observedAttributes',get:function get$$1(){return[].concat(toConsumableArray(get(SwitchElement.__proto__||Object.getPrototypeOf(SwitchElement),'observedAttributes',this)),['modifier']);}}]);return SwitchElement;}(BaseCheckboxElement);onsElements.Switch=SwitchElement;customElements.define('ons-switch',SwitchElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var scheme$30={'.tabbar__content':'tabbar--*__content','.tabbar__border':'tabbar--*__border','.tabbar':'tabbar--*'};var rewritables$3={/**
   * @param {Element} tabbarElement
   * @param {Function} callback
   */ready:function ready(tabbarElement,callback){callback();}};var lerp=function lerp(x0,x1,t){return(1-t)*x0+t*x1;};/**
 * @element ons-tabbar
 * @category tabbar
 * @description
 *   [en]A component to display a tab bar on the bottom of a page. Used with `<ons-tab>` to manage pages using tabs.[/en]
 *   [ja]タブバーをページ下部に表示するためのコンポーネントです。ons-tabと組み合わせて使うことで、ページを管理できます。[/ja]
 * @codepen pGuDL
 * @tutorial vanilla/Reference/tabbar
 * @modifier material
 *   [en]A tabbar in Material Design.[/en]
 *   [ja][/ja]
 * @modifier autogrow
 *   [en]Tabs automatically grow depending on their content instead of having a fixed width.[/en]
 *   [ja][/ja]
 * @modifier top-border
 *   [en]Shows a static border-bottom in tabs for iOS top tabbars.[/en]
 *   [ja][/ja]
 * @guide fundamentals.html#managing-pages
 *  [en]Managing multiple pages.[/en]
 *  [ja]複数のページを管理する[/ja]
 * @seealso ons-tab
 *   [en]The `<ons-tab>` component.[/en]
 *   [ja]ons-tabコンポーネント[/ja]
 * @seealso ons-page
 *   [en]The `<ons-page>` component.[/en]
 *   [ja]ons-pageコンポーネント[/ja]
 * @example
 * <ons-tabbar>
 *   <ons-tab
 *     page="home.html"
 *     label="Home"
 *     active>
 *   </ons-tab>
 *   <ons-tab
 *     page="settings.html"
 *     label="Settings"
 *     active>
 *   </ons-tab>
 * </ons-tabbar>
 *
 * <template id="home.html">
 *   ...
 * </template>
 *
 * <template id="settings.html">
 *   ...
 * </template>
 */var TabbarElement=function(_BaseElement){inherits(TabbarElement,_BaseElement);/**
   * @event prechange
   * @description
   *   [en]Fires just before the tab is changed.[/en]
   *   [ja]アクティブなタブが変わる前に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクト。[/ja]
   * @param {Number} event.index
   *   [en]Current index.[/en]
   *   [ja]現在アクティブになっているons-tabのインデックスを返します。[/ja]
   * @param {Object} event.tabItem
   *   [en]Tab item object.[/en]
   *   [ja]tabItemオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Call this function to cancel the change event.[/en]
   *   [ja]この関数を呼び出すと、アクティブなタブの変更がキャンセルされます。[/ja]
   */ /**
   * @event postchange
   * @description
   *   [en]Fires just after the tab is changed.[/en]
   *   [ja]アクティブなタブが変わった後に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクト。[/ja]
   * @param {Number} event.index
   *   [en]Current index.[/en]
   *   [ja]現在アクティブになっているons-tabのインデックスを返します。[/ja]
   * @param {Object} event.tabItem
   *   [en]Tab item object.[/en]
   *   [ja]tabItemオブジェクト。[/ja]
   */ /**
   * @event reactive
   * @description
   *   [en]Fires if the already open tab is tapped again.[/en]
   *   [ja]すでにアクティブになっているタブがもう一度タップやクリックされた場合に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクト。[/ja]
   * @param {Number} event.index
   *   [en]Current index.[/en]
   *   [ja]現在アクティブになっているons-tabのインデックスを返します。[/ja]
   * @param {Object} event.tabItem
   *   [en]Tab item object.[/en]
   *   [ja]tabItemオブジェクト。[/ja]
   */ /**
   * @attribute animation
   * @type {String}
   * @default none
   * @description
   *   [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
   *   [ja][/ja]
   */ /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. {duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
   */ /**
   * @attribute position
   * @initonly
   * @type {String}
   * @default bottom
   * @description
   *   [en]Tabbar's position. Available values are `"bottom"` and `"top"`. Use `"auto"` to choose position depending on platform (bottom for iOS flat design, top for Material Design).[/en]
   *   [ja]タブバーの位置を指定します。"bottom"もしくは"top"を選択できます。デフォルトは"bottom"です。[/ja]
   */ /**
   * @attribute swipeable
   * @description
   *   [en]If this attribute is set the tab bar can be scrolled by drag or swipe.[/en]
   *   [ja]この属性がある時、タブバーをスワイプやドラッグで移動できるようになります。[/ja]
   */ /**
   * @attribute ignore-edge-width
   * @type {Number}
   * @default 20
   * @description
   *   [en]Distance in pixels from both edges. Swiping on these areas will prioritize parent components such as `ons-splitter` or `ons-navigator`.[/en]
   *   [ja][/ja]
   */ /**
   * @attribute hide-tabs
   * @description
   *   [en]Whether to hide the tabs.[/en]
   *   [ja]タブを非表示にする場合に指定します。[/ja]
   */ /**
   * @attribute tab-border
   * @description
   *   [en]If this attribute is set the tabs show a dynamic bottom border. Only works for iOS flat design since the border is always visible in Material Design.[/en]
   *   [ja][/ja]
   */ /**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the tabbar.[/en]
   *   [ja]タブバーの表現を指定します。[/ja]
   */function TabbarElement(){classCallCheck(this,TabbarElement);var _this=possibleConstructorReturn(this,(TabbarElement.__proto__||Object.getPrototypeOf(TabbarElement)).call(this));_this._loadInactive=util$1.defer();// Improves #2324
contentReady(_this,function(){return _this._compile();});return _this;}createClass(TabbarElement,[{key:'connectedCallback',value:function connectedCallback(){var _this2=this;if(!this._swiper){this._swiper=new Swiper({getElement:function getElement(){return _this2._contentElement;},getInitialIndex:function getInitialIndex(){return _this2.getAttribute('activeIndex')||_this2.getAttribute('active-index');},getAutoScrollRatio:this._getAutoScrollRatio.bind(this),getBubbleWidth:function getBubbleWidth(){return parseInt(_this2.getAttribute('ignore-edge-width')||25,10);},isAutoScrollable:function isAutoScrollable(){return true;},preChangeHook:this._onPreChange.bind(this),postChangeHook:this._onPostChange.bind(this),refreshHook:this._onRefresh.bind(this),scrollHook:this._onScroll.bind(this)});contentReady(this,function(){_this2._tabbarBorder=util$1.findChild(_this2._tabbarElement,'.tabbar__border');_this2._swiper.init({swipeable:_this2.hasAttribute('swipeable')});});}contentReady(this,function(){_this2._updatePosition();if(!util$1.findParent(_this2,'ons-page',function(p){return p===document.body;})){_this2._show();// This tabbar is the top component
}});}},{key:'disconnectedCallback',value:function disconnectedCallback(){if(this._swiper&&this._swiper.initialized){this._swiper.dispose();this._swiper=null;this._tabbarBorder=null;this._tabsRect=null;}}},{key:'_normalizeEvent',value:function _normalizeEvent(event){return _extends({},event,{index:event.activeIndex,tabItem:this.tabs[event.activeIndex]});}},{key:'_onPostChange',value:function _onPostChange(event){event=this._normalizeEvent(event);util$1.triggerElementEvent(this,'postchange',event);var page=event.tabItem.pageElement;page&&page._show();}},{key:'_onPreChange',value:function _onPreChange(event){event=this._normalizeEvent(event);event.cancel=function(){return event.canceled=true;};util$1.triggerElementEvent(this,'prechange',event);if(!event.canceled){var _event=event,activeIndex=_event.activeIndex,lastActiveIndex=_event.lastActiveIndex;var tabs=this.tabs;tabs[activeIndex].setActive(true);if(lastActiveIndex>=0){var prevTab=tabs[lastActiveIndex];prevTab.setActive(false);prevTab.pageElement&&prevTab.pageElement._hide();}}return event.canceled;}},{key:'_onScroll',value:function _onScroll(index){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(this._tabbarBorder){this._tabbarBorder.style.transition='all '+(options.duration||0)+'s '+(options.timing||'');if(this._autogrow&&this._tabsRect.length>0){var a=Math.floor(index),b=Math.ceil(index),r=index%1;this._tabbarBorder.style.width=lerp(this._tabsRect[a].width,this._tabsRect[b].width,r)+'px';this._tabbarBorder.style.transform='translate3d('+lerp(this._tabsRect[a].left,this._tabsRect[b].left,r)+'px, 0, 0)';}else{this._tabbarBorder.style.transform='translate3d('+index*100+'%, 0, 0)';}}this._onSwipe&&this._onSwipe(index,options);}},{key:'_onRefresh',value:function _onRefresh(){this._autogrow=util$1.hasModifier(this,'autogrow');this._tabsRect=this.tabs.map(function(tab){return tab.getBoundingClientRect();});if(this._tabbarBorder){this._tabbarBorder.style.display=this.hasAttribute('tab-border')||util$1.hasModifier(this,'material')?'block':'none';var index=this.getActiveTabIndex();if(this._tabsRect.length>0&&index>=0){this._tabbarBorder.style.width=this._tabsRect[index].width+'px';}}}},{key:'_getAutoScrollRatio',value:function _getAutoScrollRatio(matches,velocity,size){var ratio=.6;// Base ratio
var modifier=size/300*(matches?-1:1);// Based on screen size
return Math.min(1,Math.max(0,ratio+velocity*modifier));}},{key:'_compile',value:function _compile(){autoStyle.prepare(this);var content=this._contentElement||util$1.create('.tabbar__content');content.classList.add('ons-tabbar__content');var tabbar=this._tabbarElement||util$1.create('.tabbar');tabbar.classList.add('ons-tabbar__footer');if(!tabbar.parentNode){while(this.firstChild){tabbar.appendChild(this.firstChild);}}var activeIndex=Number(this.getAttribute('activeIndex'));// 0 by default
if(tabbar.children.length>activeIndex&&!util$1.findChild(tabbar,'[active]')){tabbar.children[activeIndex].setAttribute('active','');}this._tabbarBorder=util$1.findChild(tabbar,'.tabbar__border')||util$1.create('.tabbar__border');tabbar.appendChild(this._tabbarBorder);tabbar.classList.add('ons-swiper-tabbar');// Hides material border
!content.children[0]&&content.appendChild(document.createElement('div'));!content.children[1]&&content.appendChild(document.createElement('div'));content.appendChild=content.appendChild.bind(content.children[0]);content.insertBefore=content.insertBefore.bind(content.children[0]);this.appendChild(content);this.appendChild(tabbar);// Triggers ons-tab connectedCallback
ModifierUtil.initModifier(this,scheme$30);}},{key:'_updatePosition',value:function _updatePosition(){var _this3=this;var position=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.getAttribute('position');var top=this._top=position==='top'||position==='auto'&&util$1.hasModifier(this,'material');var action=top?util$1.addModifier:util$1.removeModifier;action(this,'top');var page=util$1.findParent(this,'ons-page');if(page){contentReady(page,function(){var p=0;if(page.children[0]&&util$1.match(page.children[0],'ons-toolbar')){action(page.children[0],'noshadow');p=1;// Visual fix for some devices
}var content=page._getContentElement();var cs=window.getComputedStyle(page._getContentElement(),null);_this3.style.top=top?parseInt(cs.getPropertyValue('padding-top'),10)-p+'px':'';// Refresh content top - Fix for iOS 8
content.style.top=cs.top;content.style.top='';});}internal$1.autoStatusBarFill(function(){var filled=util$1.findParent(_this3,function(e){return e.hasAttribute('status-bar-fill');});util$1.toggleAttribute(_this3,'status-bar-fill',top&&!filled);});}},{key:'setActiveTab',/**
     * @method setActiveTab
     * @signature setActiveTab(index, [options])
     * @param {Number} index
     *   [en]Tab index.[/en]
     *   [ja]タブのインデックスを指定します。[/ja]
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {Function} [options.callback]
     *   [en]Function that runs when the new page has loaded.[/en]
     *   [ja][/ja]
     * @param {String} [options.animation]
     *   [en]If this option is "none", the transition won't slide.[/en]
     *   [ja][/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @description
     *   [en]Show specified tab page. Animations and their options can be specified by the second parameter.[/en]
     *   [ja]指定したインデックスのタブを表示します。アニメーションなどのオプションを指定できます。[/ja]
     * @return {Promise}
     *   [en]A promise that resolves to the new page element.[/en]
     *   [ja][/ja]
     */value:function setActiveTab(nextIndex){var _this4=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var prevIndex=this.getActiveTabIndex();var prevTab=this.tabs[prevIndex],nextTab=this.tabs[nextIndex];if(!nextTab){return Promise.reject('Specified index does not match any tab.');}if(nextIndex===prevIndex){util$1.triggerElementEvent(this,'reactive',{index:nextIndex,activeIndex:nextIndex,tabItem:nextTab});return Promise.resolve(nextTab.pageElement);}// FIXME: nextTab.loaded is broken in Zone.js promises (Angular2)
var nextPage=nextTab.pageElement;return(nextPage?Promise.resolve(nextPage):nextTab.loaded).then(function(nextPage){return _this4._swiper.setActiveIndex(nextIndex,_extends({reject:true},options,{animation:prevTab&&nextPage?options.animation||_this4.getAttribute('animation'):'none',animationOptions:util$1.extend({duration:.3,timing:'cubic-bezier(.4, .7, .5, 1)'},_this4.hasAttribute('animation-options')?util$1.animationOptionsParse(_this4.getAttribute('animation-options')):{},options.animationOptions||{})})).then(function(){options.callback instanceof Function&&options.callback(nextPage);return nextPage;});});}/**
     * @method setTabbarVisibility
     * @signature setTabbarVisibility(visible)
     * @param {Boolean} visible
     * @description
     *   [en]Used to hide or show the tab bar.[/en]
     *   [ja][/ja]
     */},{key:'setTabbarVisibility',value:function setTabbarVisibility(visible){var _this5=this;contentReady(this,function(){_this5._contentElement.style[_this5._top?'top':'bottom']=visible?'':'0px';_this5._tabbarElement.style.display=visible?'':'none';visible&&_this5._onRefresh();});}},{key:'show',value:function show(){this.setTabbarVisibility(true);}},{key:'hide',value:function hide(){this.setTabbarVisibility(false);}/**
     * @property visible
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the tabbar is visible or not.[/en]
     *   [ja]タブバーが見える場合に`true`。[/ja]
     */},{key:'getActiveTabIndex',/**
     * @method getActiveTabIndex
     * @signature getActiveTabIndex()
     * @return {Number}
     *   [en]The index of the currently active tab.[/en]
     *   [ja]現在アクティブになっているタブのインデックスを返します。[/ja]
     * @description
     *   [en]Returns tab index on current active tab. If active tab is not found, returns -1.[/en]
     *   [ja]現在アクティブになっているタブのインデックスを返します。現在アクティブなタブがない場合には-1を返します。[/ja]
     */value:function getActiveTabIndex(){var tabs=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.tabs;for(var i=0;i<tabs.length;i++){if(tabs[i]&&tabs[i].tagName==='ONS-TAB'&&tabs[i].isActive()){return i;}}return-1;}},{key:'_show',value:function _show(){var _this6=this;this._swiper.show();setImmediate(function(){var tabs=_this6.tabs;var activeIndex=_this6.getActiveTabIndex(tabs);_this6._loadInactive.resolve();if(tabs.length>0&&activeIndex>=0){tabs[activeIndex].loaded.then(function(el){return el&&setImmediate(function(){return el._show();});});}});}},{key:'_hide',value:function _hide(){this._swiper.hide();var topPage=this.topPage;topPage&&topPage._hide();}},{key:'_destroy',value:function _destroy(){this.tabs.forEach(function(tab){return tab.remove();});this.remove();}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){if(name==='modifier'){ModifierUtil.onModifierChanged(last,current,this,scheme$30);var isTop=function isTop(m){return /(^|\s+)top($|\s+)/i.test(m);};isTop(last)!==isTop(current)&&this._updatePosition();}else if(name==='position'){util$1.isAttached(this)&&this._updatePosition();}else if(name==='swipeable'){this._swiper&&this._swiper.updateSwipeable(this.hasAttribute('swipeable'));}else if(name==='hide-tabs'){this.setTabbarVisibility(!this.hasAttribute('hide-tabs')||current==='false');}}},{key:'_tabbarElement',get:function get$$1(){return util$1.findChild(this,'.tabbar');}},{key:'_contentElement',get:function get$$1(){return util$1.findChild(this,'.tabbar__content');}},{key:'_targetElement',get:function get$$1(){var content=this._contentElement;return content&&content.children[0]||null;}},{key:'topPage',get:function get$$1(){var tabs=this.tabs,index=this.getActiveTabIndex();return tabs[index]?tabs[index].pageElement||this.pages[0]||null:null;}},{key:'pages',get:function get$$1(){return util$1.arrayFrom(this._targetElement.children);}},{key:'tabs',get:function get$$1(){return Array.prototype.filter.call(this._tabbarElement.children,function(e){return e.tagName==='ONS-TAB';});}},{key:'visible',get:function get$$1(){return this._tabbarElement.style.display!=='none';}/**
     * @property swipeable
     * @type {Boolean}
     * @description
     *   [en]Enable swipe interaction.[/en]
     *   [ja]swipeableであればtrueを返します。[/ja]
     */},{key:'swipeable',get:function get$$1(){return this.hasAttribute('swipeable');},set:function set$$1(value){return util$1.toggleAttribute(this,'swipeable',value);}/**
     * @property onSwipe
     * @type {Function}
     * @description
     *   [en]Hook called whenever the user slides the tabbar. It gets a decimal index and an animationOptions object as arguments.[/en]
     *   [ja][/ja]
     */},{key:'onSwipe',get:function get$$1(){return this._onSwipe;},set:function set$$1(value){if(value&&!(value instanceof Function)){util$1["throw"]('"onSwipe" must be a function');}this._onSwipe=value;}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','position','swipeable','tab-border','hide-tabs'];}},{key:'rewritables',get:function get$$1(){return rewritables$3;}},{key:'events',get:function get$$1(){return['prechange','postchange','reactive'];}}]);return TabbarElement;}(BaseElement);onsElements.Tabbar=TabbarElement;customElements.define('ons-tabbar',TabbarElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var defaultClassName$16='tabbar__item';var scheme$29={'':'tabbar--*__item','.tabbar__button':'tabbar--*__button'};/**
 * @element ons-tab
 * @category tabbar
 * @description
 *   [en]Represents a tab inside tab bar. Each `<ons-tab>` represents a page.[/en]
 *   [ja]
 *     タブバーに配置される各アイテムのコンポーネントです。それぞれのons-tabはページを表します。
 *     ons-tab要素の中には、タブに表示されるコンテンツを直接記述することが出来ます。
 *   [/ja]
 * @codepen pGuDL
 * @tutorial vanilla/Reference/tabbar
 * @guide fundamentals.html#managing-pages
 *   [en]Managing multiple pages.[/en]
 *   [ja]複数のページを管理する[/ja]]
 * @guide appsize.html#removing-icon-packs [en]Removing icon packs.[/en][ja][/ja]
 * @guide faq.html#how-can-i-use-custom-icon-packs [en]Adding custom icon packs.[/en][ja][/ja]
 * @seealso ons-tabbar
 *   [en]ons-tabbar component[/en]
 *   [ja]ons-tabbarコンポーネント[/ja]
 * @seealso ons-page
 *   [en]ons-page component[/en]
 *   [ja]ons-pageコンポーネント[/ja]
 * @seealso ons-icon
 *   [en]ons-icon component[/en]
 *   [ja]ons-iconコンポーネント[/ja]
 * @example
 * <ons-tabbar>
 *   <ons-tab
 *     page="home.html"
 *     label="Home"
 *     active>
 *   </ons-tab>
 *   <ons-tab
 *     page="settings.html"
 *     label="Settings"
 *     active>
 *   </ons-tab>
 * </ons-tabbar>
 *
 * <template id="home.html">
 *   ...
 * </template>
 *
 * <template id="settings.html">
 *   ...
 * </template>

 */var TabElement=function(_BaseElement){inherits(TabElement,_BaseElement);/**
   * @attribute page
   * @initonly
   * @type {String}
   * @description
   *   [en]The page that is displayed when the tab is tapped.[/en]
   *   [ja]ons-tabが参照するページへのURLを指定します。[/ja]
   */ /**
   * @attribute icon
   * @type {String}
   * @description
   *   [en]
   *     The icon name for the tab. Can specify the same icon name as `<ons-icon>`. Check [See also](#seealso) section for more information.
   *   [/en]
   *   [ja]
   *     アイコン名を指定します。ons-iconと同じアイコン名を指定できます。
   *     個別にアイコンをカスタマイズする場合は、background-imageなどのCSSスタイルを用いて指定できます。
   *   [/ja]
   */ /**
   * @attribute active-icon
   * @type {String}
   * @description
   *   [en]The name of the icon when the tab is active.[/en]
   *   [ja]アクティブの際のアイコン名を指定します。[/ja]
   */ /**
   * @attribute label
   * @type {String}
   * @description
   *   [en]The label of the tab item.[/en]
   *   [ja]アイコン下に表示されるラベルを指定します。[/ja]
   */ /**
   * @attribute badge
   * @type {String}
   * @description
   *   [en]Display a notification badge on top of the tab.[/en]
   *   [ja]バッジに表示する内容を指定します。[/ja]
   */ /**
   * @attribute active
   * @description
   *   [en]This attribute should be set to the tab that is active by default.[/en]
   *   [ja][/ja]
   */function TabElement(){classCallCheck(this,TabElement);var _this=possibleConstructorReturn(this,(TabElement.__proto__||Object.getPrototypeOf(TabElement)).call(this));if(['label','icon','badge'].some(_this.hasAttribute.bind(_this))){_this._compile();}else{contentReady(_this,function(){return _this._compile();});}_this._pageLoader=defaultPageLoader;_this._onClick=_this._onClick.bind(_this);return _this;}createClass(TabElement,[{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.classList.add(defaultClassName$16);if(this._button){return;}var button=util$1.create('button.tabbar__button');while(this.childNodes[0]){button.appendChild(this.childNodes[0]);}var input=util$1.create('input',{display:'none'});input.type='radio';this.appendChild(input);this.appendChild(button);this._updateButtonContent();ModifierUtil.initModifier(this,scheme$29);this._updateRipple();}},{key:'_updateRipple',value:function _updateRipple(){this._button&&util$1.updateRipple(this._button,this.hasAttribute('ripple'));}},{key:'_updateButtonContent',value:function _updateButtonContent(){var _this2=this;var button=this._button;var iconWrapper=this._icon;if(this.hasAttribute('icon')){iconWrapper=iconWrapper||util$1.createElement('<div class="tabbar__icon"><ons-icon></ons-icon></div>');var icon=iconWrapper.children[0];var fix=function(last){return function(){return icon.attributeChangedCallback('icon',last,_this2.getAttribute('icon'));};}(icon.getAttribute('icon'));if(this.hasAttribute('icon')&&this.hasAttribute('active-icon')){icon.setAttribute('icon',this.getAttribute(this.isActive()?'active-icon':'icon'));}else if(this.hasAttribute('icon')){icon.setAttribute('icon',this.getAttribute('icon'));}iconWrapper.parentElement!==button&&button.insertBefore(iconWrapper,button.firstChild);// dirty fix for https://github.com/OnsenUI/OnsenUI/issues/1654
icon.attributeChangedCallback instanceof Function?fix():setImmediate(function(){return icon.attributeChangedCallback instanceof Function&&fix();});}else{iconWrapper&&iconWrapper.remove();}['label','badge'].forEach(function(attr,index){var prop=_this2.querySelector('.tabbar__'+attr);if(_this2.hasAttribute(attr)){prop=prop||util$1.create('.tabbar__'+attr+(attr==='badge'?' notification':''));prop.textContent=_this2.getAttribute(attr);prop.parentElement!==button&&button.appendChild(prop);}else{prop&&prop.remove();}});}},{key:'_onClick',value:function _onClick(){if(this.onClick instanceof Function){this.onClick();}else{this._tabbar.setActiveTab(this.index,{reject:false});}}},{key:'setActive',value:function setActive(){var active=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;this._input.checked=active;this.classList.toggle('active',active);util$1.toggleAttribute(this,'active',active);if(this.hasAttribute('icon')&&this.hasAttribute('active-icon')){this._icon.children[0].setAttribute('icon',this.getAttribute(active?'active-icon':'icon'));}}},{key:'_loadPageElement',value:function _loadPageElement(parent,page){var _this3=this;this._hasLoaded=true;return new Promise(function(resolve){_this3._pageLoader.load({parent:parent,page:page},function(pageElement){parent.replaceChild(pageElement,parent.children[_this3.index]);// Ensure position
_this3._loadedPage=pageElement;resolve(pageElement);});});}},{key:'isActive',/**
     * @return {Boolean}
     */value:function isActive(){return this.classList.contains('active');}},{key:'disconnectedCallback',value:function disconnectedCallback(){this.removeEventListener('click',this._onClick,false);if(this._loadedPage){this._hasLoaded=false;this.loaded=null;}}},{key:'connectedCallback',value:function connectedCallback(){var _this4=this;this.addEventListener('click',this._onClick,false);if(!util$1.isAttached(this)||this.loaded){return;// ons-tabbar compilation may trigger this
}var deferred=util$1.defer();this.loaded=deferred.promise;contentReady(this,function(){var index=_this4.index;var tabbar=_this4._tabbar;if(!tabbar){util$1["throw"]('Tab elements must be children of Tabbar');}if(tabbar.hasAttribute('modifier')){util$1.addModifier(_this4,tabbar.getAttribute('modifier'));}if(!_this4._hasLoaded){if(_this4.hasAttribute('active')){_this4.setActive(true);tabbar.setAttribute('activeIndex',index);}if(index===tabbar.tabs.length-1){tabbar._onRefresh();setImmediate(function(){return tabbar._onRefresh();});}TabbarElement.rewritables.ready(tabbar,function(){var pageTarget=_this4.page||_this4.getAttribute('page');if(!_this4.pageElement&&pageTarget){var parentTarget=tabbar._targetElement;var dummyPage=util$1.create('div',{height:'100%',width:'100%',visibility:'hidden'});parentTarget.insertBefore(dummyPage,parentTarget.children[index]);// Ensure position
var load=function load(){return _this4._loadPageElement(parentTarget,pageTarget).then(deferred.resolve);};return _this4.isActive()?load():tabbar._loadInactive.promise.then(load);}return deferred.resolve(_this4.pageElement);});}});}},{key:'attributeChangedCallback',value:function attributeChangedCallback(name,last,current){var _this5=this;switch(name){case'class':util$1.restoreClass(this,defaultClassName$16,scheme$29);break;case'modifier':contentReady(this,function(){return ModifierUtil.onModifierChanged(last,current,_this5,scheme$29);});break;case'ripple':contentReady(this,function(){return _this5._updateRipple();});break;case'icon':case'label':case'badge':contentReady(this,function(){return _this5._updateButtonContent();});break;case'page':this.page=current||'';break;}}},{key:'pageLoader',set:function set$$1(loader){if(!(loader instanceof PageLoader)){util$1.throwPageLoader();}this._pageLoader=loader;},get:function get$$1(){return this._pageLoader;}},{key:'_input',get:function get$$1(){return util$1.findChild(this,'input');}},{key:'_button',get:function get$$1(){return util$1.findChild(this,'.tabbar__button');}},{key:'_icon',get:function get$$1(){return this.querySelector('.tabbar__icon');}},{key:'_tabbar',get:function get$$1(){return util$1.findParent(this,'ons-tabbar');}},{key:'index',get:function get$$1(){return Array.prototype.indexOf.call(this.parentElement.children,this);}},{key:'pageElement',get:function get$$1(){// It has been loaded by ons-tab
if(this._loadedPage){return this._loadedPage;}// Manually attached to DOM, 1 per tab
var tabbar=this._tabbar;if(tabbar.pages.length===tabbar.tabs.length){return tabbar.pages[this.index];}// Loaded in another way
return null;}}],[{key:'observedAttributes',get:function get$$1(){return['modifier','ripple','icon','label','page','badge','class'];}}]);return TabElement;}(BaseElement);onsElements.Tab=TabElement;customElements.define('ons-tab',TabElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var ToastAnimator=function(_BaseAnimator){inherits(ToastAnimator,_BaseAnimator);/**
   * @param {Object} options
   * @param {String} options.timing
   * @param {Number} options.duration
   * @param {Number} options.delay
   */function ToastAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'linear':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.2:_ref$duration;classCallCheck(this,ToastAnimator);return possibleConstructorReturn(this,(ToastAnimator.__proto__||Object.getPrototypeOf(ToastAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));}/**
   * @param {HTMLElement} modal
   * @param {Function} callback
   */createClass(ToastAnimator,[{key:'show',value:function show(modal,callback){callback();}/**
     * @param {HTMLElement} modal
     * @param {Function} callback
     */},{key:'hide',value:function hide(modal,callback){callback();}}]);return ToastAnimator;}(BaseAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * iOS style animator for dialog.
 */var FadeToastAnimator=function(_ToastAnimator){inherits(FadeToastAnimator,_ToastAnimator);function FadeToastAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'linear':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.3:_ref$duration;classCallCheck(this,FadeToastAnimator);return possibleConstructorReturn(this,(FadeToastAnimator.__proto__||Object.getPrototypeOf(FadeToastAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));}/**
   * @param {HTMLElement} toast
   * @param {Function} callback
   */createClass(FadeToastAnimator,[{key:'show',value:function show(toast,callback){callback=callback?callback:function(){};Animit(toast,this.def)["default"]({opacity:0},{opacity:1}).queue(function(done){callback();done();}).play();}/**
     * @param {HTMLElement} toast
     * @param {Function} callback
     */},{key:'hide',value:function hide(toast,callback){callback=callback?callback:function(){};Animit(toast,this.def)["default"]({opacity:1},{opacity:0}).queue(function(done){callback();done();}).play();}}]);return FadeToastAnimator;}(ToastAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * Ascend Toast Animator.
 */var AscendToastAnimator=function(_ToastAnimator){inherits(AscendToastAnimator,_ToastAnimator);function AscendToastAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'ease':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.25:_ref$duration;classCallCheck(this,AscendToastAnimator);var _this=possibleConstructorReturn(this,(AscendToastAnimator.__proto__||Object.getPrototypeOf(AscendToastAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));_this.messageDelay=_this.duration*0.4+_this.delay;// Delay message opacity change
if(platform.isAndroid()){_this.ascension=48;// Toasts are always 1 line
}else{if(iPhoneXPatch.isIPhoneXPortraitPatchActive()){_this.ascension=98;// 64 + 34
}else if(iPhoneXPatch.isIPhoneXLandscapePatchActive()){_this.ascension=85;// 64 + 21
}else{_this.ascension=64;}}return _this;}/**
   * @param {HTMLElement} toast
   * @param {Function} callback
   */createClass(AscendToastAnimator,[{key:'show',value:function show(toast,callback){toast=toast._toast;util$1.globals.fabOffset=this.ascension;Animit.runAll(Animit(toast,this.def)["default"]({transform:'translate3d(0, '+this.ascension+'px, 0)'},{transform:'translate3d(0, 0, 0)'}).queue(function(done){callback&&callback();done();}),Animit(this._getFabs()).wait(this.delay).queue({transform:'translate3d(0, -'+this.ascension+'px, 0) scale(1)'},this.def),Animit(util$1.arrayFrom(toast.children),this.def)["default"]({opacity:0},{opacity:1}));}/**
     * @param {HTMLElement} toast
     * @param {Function} callback
     */},{key:'hide',value:function hide(toast,callback){toast=toast._toast;util$1.globals.fabOffset=0;Animit.runAll(Animit(toast,this.def)["default"]({transform:'translate3d(0, 0, 0)'},{transform:'translate3d(0, '+this.ascension+'px, 0)'}).queue(function(done){callback&&callback();done();}),Animit(this._getFabs(),this.def).wait(this.delay).queue({transform:'translate3d(0, 0, 0) scale(1)'},this.def),Animit(util$1.arrayFrom(toast.children),this.def)["default"]({opacity:1},{opacity:0}));}},{key:'_getFabs',value:function _getFabs(){return util$1.arrayFrom(document.querySelectorAll('ons-fab[position~=bottom], ons-speed-dial[position~=bottom]')).filter(function(fab){return fab.visible;});}}]);return AscendToastAnimator;}(ToastAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * Lift-fade Toast Animator
 */var LiftToastAnimator=function(_ToastAnimator){inherits(LiftToastAnimator,_ToastAnimator);function LiftToastAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'ease':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.35:_ref$duration;classCallCheck(this,LiftToastAnimator);var _this=possibleConstructorReturn(this,(LiftToastAnimator.__proto__||Object.getPrototypeOf(LiftToastAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));_this.bodyHeight=document.body.clientHeight;// avoid Forced Synchronous Layout
if(iPhoneXPatch.isIPhoneXPortraitPatchActive()){_this.liftAmount='calc(100% + 34px)';}else if(iPhoneXPatch.isIPhoneXLandscapePatchActive()){_this.liftAmount='calc(100% + 21px)';}else{_this.liftAmount='100%';}return _this;}/**
   * @param {HTMLElement} toast
   * @param {Function} callback
   */createClass(LiftToastAnimator,[{key:'show',value:function show(toast,callback){toast=toast._toast;Animit.runAll(Animit(toast,this.def)["default"]({transform:'translate3d(0, '+this.liftAmount+', 0)',opacity:0},{transform:'translate3d(0, 0, 0)',opacity:1}).queue(function(done){callback&&callback();done();}));}/**
     * @param {HTMLElement} toast
     * @param {Function} callback
     */},{key:'hide',value:function hide(toast,callback){toast=toast._toast;Animit.runAll(Animit(toast,this.def)["default"]({transform:'translate3d(0, 0, 0)',opacity:1},{transform:'translate3d(0, '+this.liftAmount+', 0)',opacity:0}).queue(function(done){callback&&callback();done();}));}},{key:'_updatePosition',value:function _updatePosition(toast){if(parseInt(toast.style.top,10)===0){toast.style.top=toast.style.bottom='';}}}]);return LiftToastAnimator;}(ToastAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * Fall-fade Toast Animator
 */var FallToastAnimator=function(_ToastAnimator){inherits(FallToastAnimator,_ToastAnimator);function FallToastAnimator(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$timing=_ref.timing,timing=_ref$timing===undefined?'ease':_ref$timing,_ref$delay=_ref.delay,delay=_ref$delay===undefined?0:_ref$delay,_ref$duration=_ref.duration,duration=_ref$duration===undefined?0.35:_ref$duration;classCallCheck(this,FallToastAnimator);var _this=possibleConstructorReturn(this,(FallToastAnimator.__proto__||Object.getPrototypeOf(FallToastAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));if(iPhoneXPatch.isIPhoneXPortraitPatchActive()){_this.fallAmount='calc(-100% - 44px)';}else{_this.fallAmount='-100%';}return _this;}/**
   * @param {HTMLElement} toast
   * @param {Function} callback
   */createClass(FallToastAnimator,[{key:'show',value:function show(toast,callback){toast=toast._toast;this._updatePosition(toast);Animit.runAll(Animit(toast,this.def)["default"]({transform:'translate3d(0, '+this.fallAmount+', 0)',opacity:0},{transform:'translate3d(0, 0, 0)',opacity:1}).queue(function(done){callback&&callback();done();}));}/**
     * @param {HTMLElement} toast
     * @param {Function} callback
     */},{key:'hide',value:function hide(toast,callback){var _this2=this;toast=toast._toast;this._updatePosition(toast);Animit.runAll(Animit(toast,this.def)["default"]({transform:'translate3d(0, 0, 0)',opacity:1},{transform:'translate3d(0, '+this.fallAmount+', 0)',opacity:0}).queue(function(done){_this2._updatePosition(toast,true);callback&&callback();done();}));}},{key:'_updatePosition',value:function _updatePosition(toast,cleanUp){var correctTop=void 0;if(iPhoneXPatch.isIPhoneXPortraitPatchActive()){correctTop='44px';}else{correctTop='0';}if(toast.style.top!==correctTop){toast.style.top=correctTop;toast.style.bottom='initial';}}}]);return FallToastAnimator;}(ToastAnimator);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/var scheme$31={'.toast':'toast--*','.toast__message':'toast--*__message','.toast__button':'toast--*__button'};var defaultClassName$17='toast';var _animatorDict$8={'default':platform.isAndroid()?AscendToastAnimator:LiftToastAnimator,'fade':FadeToastAnimator,'ascend':AscendToastAnimator,'lift':LiftToastAnimator,'fall':FallToastAnimator,'none':ToastAnimator};/**
 * @element ons-toast
 * @category dialog
 * @description
 *   [en]
 *     The Toast or Snackbar component is useful for displaying dismissable information or simple actions at (normally) the bottom of the page.
 *
 *     This component does not block user input, allowing the app to continue its flow. For simple toasts, consider `ons.notification.toast` instead.
 *   [/en]
 *   [ja][/ja]
 * @tutorial vanilla/Reference/toast
 * @seealso ons-alert-dialog
 *   [en]The `<ons-alert-dialog>` component is preferred for displaying undismissable information.[/en]
 *   [ja][/ja]
 */var ToastElement=function(_BaseDialogElement){inherits(ToastElement,_BaseDialogElement);/**
   * @attribute animation
   * @type {String}
   * @default default
   * @description
   *  [en]The animation used when showing and hiding the toast. Can be either `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
   *  [ja][/ja]
   */ /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. <code>{duration: 0.2, delay: 1, timing: 'ease-in'}</code>[/ja]
   */function ToastElement(){classCallCheck(this,ToastElement);var _this=possibleConstructorReturn(this,(ToastElement.__proto__||Object.getPrototypeOf(ToastElement)).call(this));_this._defaultDBB=null;contentReady(_this,function(){return _this._compile();});return _this;}createClass(ToastElement,[{key:'_updateAnimatorFactory',value:function _updateAnimatorFactory(){// Reset position style
this._toast&&(this._toast.style.top=this._toast.style.bottom='');return new AnimatorFactory({animators:_animatorDict$8,baseClass:ToastAnimator,baseClassName:'ToastAnimator',defaultAnimation:this.getAttribute('animation')});}/**
     * @property onDeviceBackButton
     * @type {Object}
     * @description
     *   [en]Back-button handler.[/en]
     *   [ja]バックボタンハンドラ。[/ja]
     */},{key:'_compile',value:function _compile(){autoStyle.prepare(this);this.style.display='none';this.style.zIndex=10000;// Lower than dialogs
var messageClassName='toast__message';var buttonClassName='toast__button';var toast=util$1.findChild(this,'.'+defaultClassName$17);if(!toast){toast=document.createElement('div');toast.classList.add(defaultClassName$17);while(this.childNodes[0]){toast.appendChild(this.childNodes[0]);}}var button=util$1.findChild(toast,'.'+buttonClassName);if(!button){button=util$1.findChild(toast,function(e){return util$1.match(e,'.button')||util$1.match(e,'button');});if(button){button.classList.remove('button');button.classList.add(buttonClassName);toast.appendChild(button);}}if(!util$1.findChild(toast,'.'+messageClassName)){var message=util$1.findChild(toast,'.message');if(!message){message=document.createElement('div');for(var i=toast.childNodes.length-1;i>=0;i--){if(toast.childNodes[i]!==button){message.insertBefore(toast.childNodes[i],message.firstChild);}}}message.classList.add(messageClassName);toast.insertBefore(message,toast.firstChild);}if(toast.parentNode!==this){this.appendChild(toast);}ModifierUtil.initModifier(this,this._scheme);}/**
     * @property visible
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the element is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */ /**
     * @method show
     * @signature show([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
     *   [ja][/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @description
     *   [en]Show the element.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the displayed element[/en]
     *   [ja][/ja]
     */ /**
     * @method toggle
     * @signature toggle([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
     *   [ja][/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @description
     *   [en]Toggle toast visibility.[/en]
     *   [ja][/ja]
     */ /**
     * @method hide
     * @signature hide([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
     *   [ja][/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @description
     *   [en]Hide toast.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the hidden element[/en]
     *   [ja][/ja]
     */ /**
     * @param {String} name
     * @param {Function} Animator
     */},{key:'_scheme',get:function get$$1(){return scheme$31;}},{key:'_toast',get:function get$$1(){return util$1.findChild(this,'.'+defaultClassName$17);}}],[{key:'registerAnimator',value:function registerAnimator(name,Animator){if(!(Animator.prototype instanceof ToastAnimator)){util$1["throw"]('"Animator" param must inherit OnsToastElement.ToastAnimator');}_animatorDict$8[name]=Animator;}},{key:'animators',get:function get$$1(){return _animatorDict$8;}},{key:'ToastAnimator',get:function get$$1(){return ToastAnimator;}}]);return ToastElement;}(BaseDialogElement);onsElements.Toast=ToastElement;customElements.define('ons-toast',ToastElement);/*
Copyright 2013-2015 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ /**
 * @element ons-toolbar-button
 * @category page
 * @modifier material
 *   [en]Material Design toolbar button.[/en]
 *   [ja][/ja]
 * @modifier outline
 *   [en]A button with an outline.[/en]
 *   [ja]アウトラインをもったボタンを表示します。[/ja]
 * @description
 *   [en]Button component for ons-toolbar and ons-bottom-toolbar.[/en]
 *   [ja]ons-toolbarあるいはons-bottom-toolbarに設置できるボタン用コンポーネントです。[/ja]
 * @codepen aHmGL
 * @tutorial vanilla/Reference/page
 * @guide compilation.html#toolbar-compilation
 *   [en]Adding a toolbar[/en]
 *   [ja]ツールバーの追加[/ja]
 * @seealso ons-toolbar
 *   [en]The `<ons-toolbar>` component displays a navigation bar at the top of a page.[/en]
 *   [ja]ons-toolbarコンポーネント[/ja]
 * @seealso ons-back-button
 *   [en]The `<ons-back-button>` displays a back button in the navigation bar.[/en]
 *   [ja]ons-back-buttonコンポーネント[/ja]
 * @example
 * <ons-toolbar>
 *   <div class="left">
 *     <ons-toolbar-button>
 *       Button
 *     </ons-toolbar-button>
 *   </div>
 *   <div class="center">
 *     Title
 *   </div>
 *   <div class="right">
 *     <ons-toolbar-button>
 *       <ons-icon icon="ion-navicon" size="28px"></ons-icon>
 *     </ons-toolbar-button>
 *   </div>
 * </ons-toolbar>
 */var ToolbarButtonElement=function(_BaseButtonElement){inherits(ToolbarButtonElement,_BaseButtonElement);function ToolbarButtonElement(){classCallCheck(this,ToolbarButtonElement);return possibleConstructorReturn(this,(ToolbarButtonElement.__proto__||Object.getPrototypeOf(ToolbarButtonElement)).apply(this,arguments));}createClass(ToolbarButtonElement,[{key:'_scheme',/**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the button.[/en]
     *   [ja]ボタンの表現を指定します。[/ja]
     */ /**
     * @attribute icon
     * @type {String}
     * @description
     *  [en]Creates an `ons-icon` component with this string.[/en]
     *  [ja]`ons-icon`コンポーネントを悪性します。[/ja]
     */ /**
     * @attribute disabled
     * @description
     *   [en]Specify if button should be disabled.[/en]
     *   [ja]ボタンを無効化する場合は指定してください。[/ja]
     */ /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */get:function get$$1(){return{'':'toolbar-button--*'};}},{key:'_defaultClassName',get:function get$$1(){return'toolbar-button';}},{key:'_rippleOpt',get:function get$$1(){return[this,undefined,{center:'','size':'contain','background':'transparent'}];}}]);return ToolbarButtonElement;}(BaseButtonElement);onsElements.ToolbarButton=ToolbarButtonElement;customElements.define('ons-toolbar-button',ToolbarButtonElement);// Add and register Custom Elements
setup(ons$1);// Setup initial listeners
window._superSecretOns=ons$1;return ons$1;});