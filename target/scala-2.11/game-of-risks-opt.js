(function(){'use strict';
var g="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},k="object"===typeof g.global&&g.global?g.global:"object"===typeof global&&global&&global.Object===Object?global:this;g.global=k;var l="object"===typeof g.exportsNamespace&&g.exportsNamespace?g.exportsNamespace:k;g.exportsNamespace=l;k.Object.freeze(g);var aa={semantics:{asInstanceOfs:2,moduleInit:2,strictFloats:!1},assumingES6:!1};k.Object.freeze(aa);k.Object.freeze(aa.semantics);
var m=k.Math.imul||function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0},n=0,q=k.WeakMap?new k.WeakMap:null;function r(a){return function(b,c){return!(!b||!b.c||b.c.t!==c||b.c.r!==a)}}function ba(a){for(var b in a)return b}function ca(a,b,c){var d=new a.fa(b[c]);if(c<b.length-1){a=a.v;c+=1;for(var e=d.ba,f=0;f<e.length;f++)e[f]=ca(a,b,c)}return d}
function da(a){switch(typeof a){case "string":return t(ea);case "number":var b=a|0;return b===a?b<<24>>24===b&&1/b!==1/-0?t(fa):b<<16>>16===b&&1/b!==1/-0?t(ga):t(ha):"number"===typeof a?t(ia):t(ja);case "boolean":return t(ka);case "undefined":return t(la);default:if(null===a)throw(new u).g();return ma(a)?t(na):a&&a.c?t(a.c):null}}
function w(a){switch(typeof a){case "string":return x(y(),a);case "number":return oa(pa(),a);case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.c||null===a?a.E():null===q?42:qa(a)}}function A(a){return 2147483647<a?2147483647:-2147483648>a?-2147483648:a|0}function ra(a,b){for(var c=k.Object.getPrototypeOf,d=k.Object.getOwnPropertyDescriptor,e=c(a);null!==e;){var f=d(e,b);if(void 0!==f)return f;e=c(e)}}
function sa(a,b,c){a=ra(a,c);if(void 0!==a)return c=a.get,void 0!==c?c.call(b):a.value}function ta(a,b,c,d){a=ra(a,c);if(void 0!==a&&(a=a.set,void 0!==a)){a.call(b,d);return}throw new k.TypeError("super has no setter '"+c+"'.");}
var qa=null!==q?function(a){switch(typeof a){case "string":case "number":case "boolean":case "undefined":return w(a);default:if(null===a)return 0;var b=q.get(a);void 0===b&&(n=b=n+1|0,q.set(a,b));return b}}:function(a){if(a&&a.c){var b=a.$idHashCode$0;if(void 0!==b)return b;if(k.Object.isSealed(a))return 42;n=b=n+1|0;return a.$idHashCode$0=b}return null===a?0:w(a)};function B(a){return null===a?C().h:a}this.__ScalaJSExportsNamespace=l;
function D(){this.L=this.fa=void 0;this.r=this.v=this.j=null;this.t=0;this.ca=null;this.z="";this.i=this.x=this.y=void 0;this.name="";this.isRawJSType=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}function E(a,b,c){var d=new D;d.j={};d.v=null;d.ca=a;d.z=b;d.i=function(){return!1};d.name=c;d.isPrimitive=!0;d.isInstance=function(){return!1};return d}
function F(a,b,c,d,e,f,p){var h=new D,s=ba(a);f=f||function(a){return!!(a&&a.c&&a.c.j[s])};p=p||function(a,b){return!!(a&&a.c&&a.c.t===b&&a.c.r.j[s])};h.L=e;h.j=c;h.z="L"+b+";";h.i=p;h.name=b;h.isInterface=!1;h.isRawJSType=!!d;h.isInstance=f;return h}
function ua(a){function b(a){if("number"===typeof a){this.ba=Array(a);for(var b=0;b<a;b++)this.ba[b]=e}else this.ba=a}var c=new D,d=a.ca,e="longZero"==d?C().h:d;b.prototype=new G;b.prototype.c=c;var d="["+a.z,f=a.r||a,p=a.t+1;c.fa=b;c.L=va;c.j={e:1};c.v=a;c.r=f;c.t=p;c.ca=null;c.z=d;c.y=void 0;c.x=void 0;c.i=void 0;c.name=d;c.isPrimitive=!1;c.isInterface=!1;c.isArrayClass=!0;c.isInstance=function(a){return f.i(a,p)};return c}function t(a){if(!a.y){var b=new H;b.A=a;a.y=b}return a.y}
D.prototype.getFakeInstance=function(){return this===ea?"some string":this===ka?!1:this===fa||this===ga||this===ha||this===ia||this===ja?0:this===na?C().h:this===la?void 0:{c:this}};D.prototype.getSuperclass=function(){return this.L?t(this.L):null};D.prototype.getComponentType=function(){return this.v?t(this.v):null};D.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b.x||(b.x=ua(b)),b=b.x;return ca(b,a,0)};
var wa=E(!1,"Z","boolean"),xa=E(0,"C","char"),ya=E(0,"B","byte"),za=E(0,"S","short"),Aa=E(0,"I","int"),Ba=E("longZero","J","long"),Ca=E(0,"F","float"),Da=E(0,"D","double");wa.i=r(wa);xa.i=r(xa);ya.i=r(ya);za.i=r(za);Aa.i=r(Aa);Ba.i=r(Ba);Ca.i=r(Ca);Da.i=r(Da);function I(){}function G(){}G.prototype=I.prototype;I.prototype.g=function(){return this};I.prototype.p=function(){var a=Ea(da(this)),b=(+(this.E()>>>0)).toString(16);return a+"@"+b};I.prototype.E=function(){return qa(this)};I.prototype.toString=function(){return this.p()};var va=F({e:0},"java.lang.Object",{e:1},void 0,void 0,function(a){return null!==a},function(a,b){var c=a&&a.c;if(c){var d=c.t||0;return!(d<b)&&(d>b||!c.r.isPrimitive)}return!1});I.prototype.c=va;function H(){this.A=null}
H.prototype=new G;function Ea(a){return a.A.name}H.prototype.p=function(){return(this.A.isInterface?"interface ":this.A.isPrimitive?"":"class ")+Ea(this)};H.prototype.c=F({Sa:0},"java.lang.Class",{Sa:1,e:1});function Fa(){this.Ob=null;this.wb=this.Gb=this.Cb=this.Db=0}Fa.prototype=new G;function Ga(a,b){var c=b,c=c|c>>>1|0,c=c|c>>>2|0,c=c|c>>>4|0,c=c|c>>>8|0;return 32-Ha(c|c>>>16|0)|0}
function Ha(a){a=a-(1431655765&a>>1)|0;a=(858993459&a)+(858993459&a>>2)|0;return m(16843009,252645135&(a+(a>>4)|0))>>24}function Ia(a,b){return Ha(-1+(b&(-b|0))|0)}Fa.prototype.c=F({Xa:0},"java.lang.Integer$",{Xa:1,e:1});var Ja=void 0;function J(){Ja||(Ja=(new Fa).g());return Ja}function Ka(){}Ka.prototype=new G;function La(){}La.prototype=Ka.prototype;function K(){this.Ia=this.Ja=this.ha=this.na=null}K.prototype=new G;
K.prototype.g=function(){L=this;this.na=Ma(!1);this.ha=Ma(!0);this.Ja=null;this.Ia=k.performance?k.performance.now?function(){return+k.performance.now()}:k.performance.webkitNow?function(){return+k.performance.webkitNow()}:function(){return+(new k.Date).getTime()}:function(){return+(new k.Date).getTime()};return this};K.prototype.c=F({cb:0},"java.lang.System$",{cb:1,e:1});var L=void 0;function Na(){L||(L=(new K).g());return L}function M(){this.ta=this.R=null}M.prototype=new G;function Oa(){}
Oa.prototype=M.prototype;M.prototype.g=function(){this.R=!1;return this};function Pa(a){a.R||(a.ta=a.da.ra,a.R=!0);return a.ta}function Qa(){}Qa.prototype=new G;function Ra(){}Ra.prototype=Qa.prototype;function N(){this.aa=this.ra=null}N.prototype=new G;N.prototype.p=function(){return"DynamicVariable("+Pa(this.aa)+")"};N.prototype.w=function(a){this.ra=a;a=new Sa;if(null===this)throw Ta(Ua(),null);a.da=this;Va.prototype.g.call(a);this.aa=a;return this};
N.prototype.c=F({gb:0},"scala.util.DynamicVariable",{gb:1,e:1});function Wa(){}Wa.prototype=new G;function Xa(){}Xa.prototype=Wa.prototype;function O(){this.o=!1;this.ja=this.Ha=this.H=this.s=null;this.P=!1;this.ma=this.ka=0}O.prototype=new G;
O.prototype.g=function(){Ya=this;this.s=(this.o=!!(k.ArrayBuffer&&k.Int32Array&&k.Float32Array&&k.Float64Array))?new k.ArrayBuffer(8):null;this.H=this.o?new k.Int32Array(this.s,0,2):null;this.Ha=this.o?new k.Float32Array(this.s,0,2):null;this.ja=this.o?new k.Float64Array(this.s,0,1):null;if(this.o)this.H[0]=16909060,a=1===((new k.Int8Array(this.s,0,8))[0]|0);else var a=!0;this.ka=(this.P=a)?0:1;this.ma=this.P?1:0;return this};
function oa(a,b){var c=b|0;if(c===b&&-Infinity!==1/b)return c;if(a.o)a.ja[0]=b,c=Za($a(P(a.H[a.ka]|0),32),ab((new Q).f(4194303,1023,0),P(a.H[a.ma]|0)));else{if(b!==b)var c=!1,d=2047,e=+k.Math.pow(2,51);else if(Infinity===b||-Infinity===b)c=0>b,d=2047,e=0;else if(0===b)c=-Infinity===1/b,e=d=0;else{var f=(c=0>b)?-b:b;if(f>=+k.Math.pow(2,-1022)){var d=+k.Math.pow(2,52),e=+k.Math.log(f)/0.6931471805599453,e=+k.Math.floor(e)|0,e=1023>e?e:1023,p=f/+k.Math.pow(2,e)*d,f=+k.Math.floor(p),p=p-f,f=0.5>p?f:0.5<
p?1+f:0!==f%2?1+f:f;2<=f/d&&(e=1+e|0,f=1);1023<e?(e=2047,f=0):(e=1023+e|0,f-=d);d=e;e=f}else d=f/+k.Math.pow(2,-1074),e=+k.Math.floor(d),f=d-e,d=0,e=0.5>f?e:0.5<f?1+e:0!==e%2?1+e:e}e=+e;f=e|0;c=Za($a(P((c?-2147483648:0)|(d|0)<<20|e/4294967296|0),32),ab((new Q).f(4194303,1023,0),P(f)))}return R(bb(c,cb(c)))}O.prototype.c=F({lb:0},"scala.scalajs.runtime.Bits$",{lb:1,e:1});var Ya=void 0;function pa(){Ya||(Ya=(new O).g());return Ya}function db(){this.xb=null;this.Aa=!1}db.prototype=new G;
function x(a,b){for(var c=0,d=1,e=-1+(b.length|0)|0;0<=e;)c=c+m(65535&(b.charCodeAt(e)|0),d)|0,d=m(31,d),e=-1+e|0;return c}db.prototype.c=F({nb:0},"scala.scalajs.runtime.RuntimeString$",{nb:1,e:1});var eb=void 0;function y(){eb||(eb=(new db).g());return eb}function fb(){this.Rb=!1;this.Ca=this.ga=this.Da=null;this.Aa=!1}fb.prototype=new G;
fb.prototype.g=function(){gb=this;for(var a={O:"java_lang_Object",T:"java_lang_String",V:"scala_Unit",Z:"scala_Boolean",C:"scala_Char",B:"scala_Byte",S:"scala_Short",I:"scala_Int",J:"scala_Long",F:"scala_Float",D:"scala_Double"},b=0;22>=b;)2<=b&&(a["T"+b]="scala_Tuple"+b),a["F"+b]="scala_Function"+b,b=1+b|0;this.Da=a;this.ga={sjsr_:"scala_scalajs_runtime_",sjs_:"scala_scalajs_",sci_:"scala_collection_immutable_",scm_:"scala_collection_mutable_",scg_:"scala_collection_generic_",sc_:"scala_collection_",
sr_:"scala_runtime_",s_:"scala_",jl_:"java_lang_",ju_:"java_util_"};this.Ca=k.Object.keys(this.ga);return this};fb.prototype.c=F({ob:0},"scala.scalajs.runtime.StackTrace$",{ob:1,e:1});var gb=void 0;function hb(){gb||(gb=(new fb).g());return gb}function ib(){}ib.prototype=new G;function Ta(a,b){return b&&b.c&&b.c.j.$?b.m:b}ib.prototype.c=F({pb:0},"scala.scalajs.runtime.package$",{pb:1,e:1});var jb=void 0;function Ua(){jb||(jb=(new ib).g());return jb}
var la=F({qb:0},"scala.runtime.BoxedUnit",{qb:1,e:1},void 0,void 0,function(a){return void 0===a});function kb(){}kb.prototype=new G;kb.prototype.c=F({rb:0},"scala.runtime.BoxesRunTime$",{rb:1,e:1});var lb=void 0;function mb(){}mb.prototype=new G;mb.prototype.c=F({sb:0},"scala.runtime.ScalaRunTime$",{sb:1,e:1});var nb=void 0;function S(){}S.prototype=new G;S.prototype.g=function(){ob=this;return this};
S.prototype.main=function(){pb||(pb=(new qb).g());var a=Pa(pb.pa.aa);y();rb(a,"Hello world!".toString());rb(a,"\n")};S.prototype.c=F({xa:0},"tutorial.webapp.TutorialApp$",{xa:1,e:1,cc:1});var ob=void 0;l.tutorial=l.tutorial||{};l.tutorial.webapp=l.tutorial.webapp||{};l.tutorial.webapp.TutorialApp=function(){ob||(ob=(new S).g());return ob};var ka=F({Qa:0},"java.lang.Boolean",{Qa:1,e:1,k:1},void 0,void 0,function(a){return"boolean"===typeof a});function Va(){M.call(this)}Va.prototype=new Oa;
function sb(){}sb.prototype=Va.prototype;function T(){this.dc=this.Ea=this.qa=null}T.prototype=new G;function tb(){}tb.prototype=T.prototype;T.prototype.ia=function(){var a=hb(),b;a:try{b=a.undef()}catch(c){Ua();a=c&&c.c&&c.c.j.K?c:(new U).w(c);if(null!==a){if(a&&a.c&&a.c.j.$){b=a.m;break a}throw Ta(Ua(),a);}throw c;}this.stackdata=b;return this};T.prototype.p=function(){var a=Ea(da(this)),b=this.qa;return null===b?a:a+": "+b};T.prototype.W=function(a,b){this.qa=a;this.Ea=b;this.ia();return this};
function ub(){this.kb=this.db=this.jb=this.gc=this.fc=this.Xb=this.ec=this.Pb=0}ub.prototype=new Xa;ub.prototype.g=function(){vb=this;this.jb=x(y(),"Seq");this.db=x(y(),"Map");this.kb=x(y(),"Set");return this};ub.prototype.c=F({ib:0},"scala.util.hashing.MurmurHash3$",{ib:1,bc:1,e:1});var vb=void 0;function wb(){}wb.prototype=new G;function xb(){}xb.prototype=wb.prototype;
var fa=F({Ra:0},"java.lang.Byte",{Ra:1,n:1,e:1,k:1},void 0,void 0,function(a){return a<<24>>24===a&&1/a!==1/-0}),ja=F({Ta:0},"java.lang.Double",{Ta:1,n:1,e:1,k:1},void 0,void 0,function(a){return"number"===typeof a});function yb(){T.call(this)}yb.prototype=new tb;function zb(){}zb.prototype=yb.prototype;yb.prototype.G=function(a){yb.prototype.W.call(this,a,null);return this};
var ia=F({Ua:0},"java.lang.Float",{Ua:1,n:1,e:1,k:1},void 0,void 0,function(a){return"number"===typeof a}),ha=F({Wa:0},"java.lang.Integer",{Wa:1,n:1,e:1,k:1},void 0,void 0,function(a){return(a|0)===a&&1/a!==1/-0}),na=F({$a:0},"java.lang.Long",{$a:1,n:1,e:1,k:1},void 0,void 0,function(a){return ma(a)}),ga=F({bb:0},"java.lang.Short",{bb:1,n:1,e:1,k:1},void 0,void 0,function(a){return a<<16>>16===a&&1/a!==1/-0});function qb(){this.Ka=this.Fa=this.pa=null}qb.prototype=new Ra;
qb.prototype.g=function(){pb=this;this.pa=(new N).w(Na().na);this.Fa=(new N).w(Na().ha);this.Ka=(new N).w(null);return this};qb.prototype.c=F({eb:0},"scala.Console$",{eb:1,Yb:1,e:1,ac:1});var pb=void 0;function Sa(){M.call(this);this.da=null}Sa.prototype=new sb;Sa.prototype.c=F({hb:0},"scala.util.DynamicVariable$$anon$1",{hb:1,Vb:1,Wb:1,e:1});function Q(){this.a=this.b=this.d=0}Q.prototype=new La;function Za(a,b){return(new Q).f(a.d|b.d,a.b|b.b,a.a|b.a)}
Q.prototype.f=function(a,b,c){this.d=a;this.b=b;this.a=c;return this};Q.prototype.p=function(){if(0===this.d&&0===this.b&&0===this.a)return"0";if(V(this,C().l))return"-9223372036854775808";if(0!==(524288&this.a))return"-"+X(this).p();var a=C().ea,b=this,c="";for(;;){var d=b;if(0===d.d&&0===d.b&&0===d.a)return c;d=Ab(b,a);b=d[0];d=""+R(d[1]);c=(0===b.d&&0===b.b&&0===b.a?"":"000000000".substring(d.length|0))+d+c}};
function Ab(a,b){if(0===b.d&&0===b.b&&0===b.a)throw(new Bb).G("/ by zero");if(0===a.d&&0===a.b&&0===a.a)return[C().h,C().h];if(V(b,C().l))return V(a,C().l)?[C().N,C().h]:[C().h,a];var c=0!==(524288&a.a),d=0!==(524288&b.a),e=V(a,C().l),f=0===b.a&&0===b.b&&0!==b.d&&0===(b.d&(-1+b.d|0))?Ia(J(),b.d):0===b.a&&0!==b.b&&0===b.d&&0===(b.b&(-1+b.b|0))?22+Ia(J(),b.b)|0:0!==b.a&&0===b.b&&0===b.d&&0===(b.a&(-1+b.a|0))?44+Ia(J(),b.a)|0:-1;if(0<=f){if(e)return c=Cb(a,f),[d?X(c):c,C().h];var e=0!==(524288&a.a)?
X(a):a,p=Cb(e,f),d=c!==d?X(p):p,e=22>=f?(new Q).f(e.d&(-1+(1<<f)|0),0,0):44>=f?(new Q).f(e.d,e.b&(-1+(1<<(-22+f|0))|0),0):(new Q).f(e.d,e.b,e.a&(-1+(1<<(-44+f|0))|0)),c=c?X(e):e;return[d,c]}f=0!==(524288&b.a)?X(b):b;if(e)var h=C().M;else if(h=0!==(524288&a.a)?X(a):a,0===(524288&f.a)?0!==(524288&h.a)||f.a>h.a||f.a===h.a&&f.b>h.b||f.a===h.a&&f.b===h.b&&f.d>h.d:!(0===(524288&h.a)||f.a<h.a||f.a===h.a&&f.b<h.b||f.a===h.a&&f.b===h.b&&f.d<=h.d))return[C().h,a];var s=Db(f)-Db(h)|0,z=$a(f,s),f=s,s=z,z=h,h=
C().h;a:{var W;for(;;){if(0>f)var v=!0;else v=z,v=0===v.d&&0===v.b&&0===v.a;if(v){W=z;p=h;break a}else v=Eb(z,X(s)),0===(524288&v.a)?(z=-1+f|0,s=Cb(s,1),h=22>f?(new Q).f(h.d|1<<f,h.b,h.a):44>f?(new Q).f(h.d,h.b|1<<(-22+f|0),h.a):(new Q).f(h.d,h.b,h.a|1<<(-44+f|0)),f=z,z=v):(f=-1+f|0,s=Cb(s,1))}}d=c!==d?X(p):p;c&&e?(c=X(W),e=C().N,c=Eb(c,X(e))):c=c?X(W):W;return[d,c]}function ab(a,b){return(new Q).f(a.d&b.d,a.b&b.b,a.a&b.a)}
function cb(a){return(new Q).f(4194303&(a.b>>10|a.a<<12),4194303&(a.a>>>10|0),0)}function $a(a,b){var c=63&b;if(22>c){var d=22-c|0;return(new Q).f(4194303&a.d<<c,4194303&(a.b<<c|a.d>>d),1048575&(a.a<<c|a.b>>d))}return 44>c?(d=-22+c|0,(new Q).f(0,4194303&a.d<<d,1048575&(a.b<<d|a.d>>(44-c|0)))):(new Q).f(0,0,1048575&a.d<<(-44+c|0))}function R(a){return a.d|a.b<<22}function P(a){var b=new Q;Q.prototype.f.call(b,4194303&a,4194303&a>>22,0>a?1048575:0);return b}
function X(a){var b=4194303&(1+~a.d|0),c=4194303&(~a.b+(0===b?1:0)|0);return(new Q).f(b,c,1048575&(~a.a+(0===b&&0===c?1:0)|0))}function Eb(a,b){var c=a.d+b.d|0,d=(a.b+b.b|0)+(c>>22)|0;return(new Q).f(4194303&c,4194303&d,1048575&((a.a+b.a|0)+(d>>22)|0))}
function Cb(a,b){var c=63&b,d=0!==(524288&a.a),e=d?-1048576|a.a:a.a;if(22>c)return d=22-c|0,(new Q).f(4194303&(a.d>>c|a.b<<d),4194303&(a.b>>c|e<<d),1048575&e>>c);if(44>c){var f=-22+c|0;return(new Q).f(4194303&(a.b>>f|e<<(44-c|0)),4194303&e>>f,1048575&(d?1048575:0))}return(new Q).f(4194303&e>>(-44+c|0),4194303&(d?4194303:0),1048575&(d?1048575:0))}function Fb(a){return V(a,C().l)?-9223372036854775E3:0!==(524288&a.a)?-Fb(X(a)):a.d+4194304*a.b+17592186044416*a.a}
function Db(a){return 0!==a.a?-12+Ga(J(),a.a)|0:0!==a.b?10+Ga(J(),a.b)|0:32+Ga(J(),a.d)|0}Q.prototype.E=function(){return R(bb(this,cb(this)))};function bb(a,b){return(new Q).f(a.d^b.d,a.b^b.b,a.a^b.a)}function V(a,b){return a.d===b.d&&a.b===b.b&&a.a===b.a}function ma(a){return!!(a&&a.c&&a.c.j.sa)}Q.prototype.c=F({sa:0},"scala.scalajs.runtime.RuntimeLong",{sa:1,n:1,e:1,k:1});
function Gb(){this.Nb=this.Mb=this.Lb=this.Kb=this.Jb=this.Ib=this.Hb=this.Fb=this.Eb=this.Bb=this.Ab=this.vb=this.ub=this.tb=0;this.ea=this.M=this.l=this.ya=this.N=this.h=null}Gb.prototype=new G;Gb.prototype.g=function(){Hb=this;this.h=(new Q).f(0,0,0);this.N=(new Q).f(1,0,0);this.ya=(new Q).f(4194303,4194303,1048575);this.l=(new Q).f(0,0,524288);this.M=(new Q).f(4194303,4194303,524287);this.ea=(new Q).f(1755648,238,0);return this};
function Ib(a,b){if(b!==b)return a.h;if(-9223372036854775E3>b)return a.l;if(9223372036854775E3<=b)return a.M;if(0>b)return X(Ib(a,-b));var c=b,d=17592186044416<=c?A(c/17592186044416):0,c=c-17592186044416*d,e=4194304<=c?A(c/4194304):0;return(new Q).f(A(c-4194304*e),e,d)}Gb.prototype.c=F({mb:0},"scala.scalajs.runtime.RuntimeLong$",{mb:1,e:1,fb:1,q:1});var Hb=void 0;function C(){Hb||(Hb=(new Gb).g());return Hb}function Jb(){this.oa=null}Jb.prototype=new xb;function Kb(){}Kb.prototype=Jb.prototype;
Jb.prototype.U=function(a){this.oa=a;return this};var ea=F({za:0},"java.lang.String",{za:1,e:1,q:1,Ub:1,k:1},void 0,void 0,function(a){return"string"===typeof a});function Lb(){}Lb.prototype=new xb;Lb.prototype.c=F({Za:0},"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{Za:1,wa:1,e:1,ua:1,va:1});function Y(){T.call(this)}Y.prototype=new zb;function Z(){}Z.prototype=Y.prototype;Y.prototype.g=function(){Y.prototype.W.call(this,null,null);return this};
Y.prototype.G=function(a){Y.prototype.W.call(this,a,null);return this};function Bb(){T.call(this)}Bb.prototype=new Z;Bb.prototype.c=F({Pa:0},"java.lang.ArithmeticException",{Pa:1,Y:1,X:1,K:1,e:1,q:1});function Mb(){T.call(this)}Mb.prototype=new Z;Mb.prototype.c=F({Va:0},"java.lang.IndexOutOfBoundsException",{Va:1,Y:1,X:1,K:1,e:1,q:1});function u(){T.call(this)}u.prototype=new Z;u.prototype.g=function(){u.prototype.G.call(this,null);return this};
u.prototype.c=F({ab:0},"java.lang.NullPointerException",{ab:1,Y:1,X:1,K:1,e:1,q:1});function $(){this.oa=null;this.Ma=!1;this.Sb=this.Ba=null;this.Qb=this.Ga=this.Na=this.Oa=!1}$.prototype=new Kb;function Nb(){}Nb.prototype=$.prototype;$.prototype.La=function(a,b,c){this.Ma=b;this.Ba=c;Jb.prototype.U.call(this,a);this.Ga=this.Na=this.Oa=!1;return this};$.prototype.U=function(a){$.prototype.La.call(this,a,!1,null);return this};function Ob(){$.call(this);this.la=null;this.Q=!1;this.u=null}
Ob.prototype=new Nb;function Ma(a){var b=new Ob;b.la=a;$.prototype.U.call(b,(new Lb).g());b.Q=!0;b.u="";return b}function rb(a,b){for(var c=b;""!==c;){var d=c.indexOf("\n")|0;if(0>d)a.u=""+a.u+c,a.Q=!1,c="";else{var e=""+a.u+c.substring(0,d);k.console&&(a.la&&k.console.error?k.console.error(e):k.console.log(e));a.u="";a.Q=!0;c=c.substring(1+d|0)}}}Ob.prototype.c=F({Ya:0},"java.lang.JSConsoleBasedPrintStream",{Ya:1,zb:1,yb:1,wa:1,e:1,ua:1,va:1,Tb:1});function U(){T.call(this);this.m=null}
U.prototype=new Z;U.prototype.ia=function(){hb();this.stackdata=this.m;return this};U.prototype.p=function(){return void 0===this.m?"undefined":this.m.toString()};U.prototype.w=function(a){this.m=a;Y.prototype.g.call(this);return this};
U.prototype.E=function(){var a;vb||(vb=(new ub).g());var b=-889275714;for(a=0;1>a;){nb||(nb=(new mb).g());var c;b:switch(a){case 0:c=this.m;break b;default:throw(new Mb).G(""+a);}var d=c;c=void 0;if(null===d)c=0;else if(c=void 0,d&&d.c&&d.c.j.n||"number"===typeof d)if(lb||(lb=(new kb).g()),(d|0)===d&&1/d!==1/-0)c=d|0;else if(ma(d))c=d,d=R(B(c)),c=V(P(d),B(c))?d:R(bb(B(c),cb(B(c))));else if("number"===typeof d){c=d;var e=A(+c),d=+c;e===d?c=e:(e=Ib(C(),+c),c=Fb(e)===d?R(bb(e,cb(e))):oa(pa(),+c))}else c=
w(d);else c=w(d);d=void 0;c=m(-862048943,c);J();c=c<<15|c>>>-15|0;c=m(461845907,c);d=b^c;J();d=d<<13|d>>>-13|0;b=-430675100+m(5,d)|0;a=1+a|0}a=b^1;a=m(-2048144789,a^(a>>>16|0));a^=a>>>13|0;a=m(-1028477387,a);a^=a>>>16|0;return a};U.prototype.c=F({$:0},"scala.scalajs.js.JavaScriptException",{$:1,Y:1,X:1,K:1,e:1,q:1,$b:1,Zb:1,fb:1});
}).call(this);
//# sourceMappingURL=game-of-risks-opt.js.map