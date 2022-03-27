import{aS as ya,aT as va,aU as yi,aV as wa,aW as Ea,aX as Ta,aY as ue,aZ as ut,a_ as Ia,a$ as Sa,b0 as Aa,b1 as Ca,b2 as Na,b3 as ka,b4 as Da,b5 as ba}from"./vendor.73475e93.js";var Ra=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},p,Es=Es||{},T=Ra||self;function We(){}function Yn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ee(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function _a(e){return Object.prototype.hasOwnProperty.call(e,Pn)&&e[Pn]||(e[Pn]=++La)}var Pn="closure_uid_"+(1e9*Math.random()>>>0),La=0;function xa(e,t,n){return e.call.apply(e.bind,arguments)}function Ma(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function $(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$=xa:$=Ma,$.apply(null,arguments)}function Oe(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function mt(){this.s=this.s,this.o=this.o}var Fa=0,Va={};mt.prototype.s=!1;mt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Fa!=0)){var e=_a(this);delete Va[e]}};mt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},gr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function Oa(e){t:{var t=Du;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function vi(e){return Array.prototype.concat.apply([],arguments)}function Ts(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Xe(e){return/^[\s\xa0]*$/.test(e)}var wi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function H(e,t){return e.indexOf(t)!=-1}function Un(e,t){return e<t?-1:e>t?1:0}var W;t:{var Ei=T.navigator;if(Ei){var Ti=Ei.userAgent;if(Ti){W=Ti;break t}}W=""}function Is(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function pr(e){const t={};for(const n in e)t[n]=e[n];return t}var Ii="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Ii.length;r++)n=Ii[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ss(e){return Ss[" "](e),e}Ss[" "]=We;function Pa(e){var t=qa;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Ua=H(W,"Opera"),Ft=H(W,"Trident")||H(W,"MSIE"),yr=H(W,"Edge"),Qn=yr||Ft,vr=H(W,"Gecko")&&!(H(W.toLowerCase(),"webkit")&&!H(W,"Edge"))&&!(H(W,"Trident")||H(W,"MSIE"))&&!H(W,"Edge"),$a=H(W.toLowerCase(),"webkit")&&!H(W,"Edge");function wr(){var e=T.document;return e?e.documentMode:void 0}var Ye;t:{var $n="",qn=function(){var e=W;if(vr)return/rv:([^\);]+)(\)|;)/.exec(e);if(yr)return/Edge\/([\d\.]+)/.exec(e);if(Ft)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if($a)return/WebKit\/(\S+)/.exec(e);if(Ua)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(qn&&($n=qn?qn[1]:""),Ft){var Bn=wr();if(Bn!=null&&Bn>parseFloat($n)){Ye=String(Bn);break t}}Ye=$n}var qa={};function Ba(){return Pa(function(){let e=0;const t=wi(String(Ye)).split("."),n=wi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Un(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Un(i[2].length==0,r[2].length==0)||Un(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Jn;if(T.document&&Ft){var Si=wr();Jn=Si||parseInt(Ye,10)||void 0}else Jn=void 0;var ja=Jn,Ka=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",We,t),T.removeEventListener("test",We,t)}catch{}return e}();function z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};function he(e,t){if(z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(vr){t:{try{Ss(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ga[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&he.Z.h.call(this)}}K(he,z);var Ga={2:"touch",3:"pen",4:"mouse"};he.prototype.h=function(){he.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Te="closure_listenable_"+(1e6*Math.random()|0),za=0;function Ha(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++za,this.ca=this.fa=!1}function dn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function fn(e){this.src=e,this.g={},this.h=0}fn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=ts(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Ha(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function Zn(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=fr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(dn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ts(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var As="closure_lm_"+(1e6*Math.random()|0),jn={};function Er(e,t,n,s,i){if(s&&s.once)return Ir(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Er(e,t[r],n,s,i);return null}return n=ks(n),e&&e[Te]?e.N(t,n,Ee(s)?!!s.capture:!!s,i):Tr(e,t,n,!1,s,i)}function Tr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Ee(i)?!!i.capture:!!i,a=Ns(e);if(a||(e[As]=a=new fn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Wa(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Ka||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Ar(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Wa(){function e(n){return t.call(e.src,e.listener,n)}var t=Xa;return e}function Ir(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ir(e,t[r],n,s,i);return null}return n=ks(n),e&&e[Te]?e.O(t,n,Ee(s)?!!s.capture:!!s,i):Tr(e,t,n,!0,s,i)}function Sr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Sr(e,t[r],n,s,i);else s=Ee(s)?!!s.capture:!!s,n=ks(n),e&&e[Te]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=ts(r,n,s,i),-1<n&&(dn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ns(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ts(t,n,s,i)),(n=-1<e?t[e]:null)&&Cs(n))}function Cs(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Te])Zn(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ar(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ns(t))?(Zn(n,e),n.h==0&&(n.src=null,t[As]=null)):dn(e)}}}function Ar(e){return e in jn?jn[e]:jn[e]="on"+e}function Xa(e,t){if(e.ca)e=!0;else{t=new he(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Cs(e),e=n.call(s,t)}return e}function Ns(e){return e=e[As],e instanceof fn?e:null}var Kn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ks(e){return typeof e=="function"?e:(e[Kn]||(e[Kn]=function(t){return e.handleEvent(t)}),e[Kn])}function O(){mt.call(this),this.i=new fn(this),this.P=this,this.I=null}K(O,mt);O.prototype[Te]=!0;O.prototype.removeEventListener=function(e,t,n,s){Sr(this,e,t,n,s)};function q(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new z(t,e);else if(t instanceof z)t.target=t.target||e;else{var i=t;t=new z(s,e),mr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Pe(o,s,!0,t)&&i}if(o=t.g=e,i=Pe(o,s,!0,t)&&i,i=Pe(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Pe(o,s,!1,t)&&i}O.prototype.M=function(){if(O.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)dn(n[s]);delete e.g[t],e.h--}}this.I=null};O.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};O.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Pe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Zn(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ds=T.JSON.stringify;function Ya(){var e=Nr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Qa{constructor(){this.h=this.g=null}add(t,n){const s=Cr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Cr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Ja,e=>e.reset());class Ja{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Za(e){T.setTimeout(()=>{throw e},0)}function bs(e,t){es||tu(),ns||(es(),ns=!0),Nr.add(e,t)}var es;function tu(){var e=T.Promise.resolve(void 0);es=function(){e.then(eu)}}var ns=!1,Nr=new Qa;function eu(){for(var e;e=Ya();){try{e.h.call(e.g)}catch(n){Za(n)}var t=Cr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ns=!1}function gn(e,t){O.call(this),this.h=e||1,this.g=t||T,this.j=$(this.kb,this),this.l=Date.now()}K(gn,O);p=gn.prototype;p.da=!1;p.S=null;p.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),q(this,"tick"),this.da&&(Rs(this),this.start()))}};p.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}p.M=function(){gn.Z.M.call(this),Rs(this),delete this.g};function _s(e,t,n){if(typeof e=="function")n&&(e=$(e,n));else if(e&&typeof e.handleEvent=="function")e=$(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function kr(e){e.g=_s(()=>{e.g=null,e.i&&(e.i=!1,kr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class nu extends mt{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:kr(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(e){mt.call(this),this.h=e,this.g={}}K(ce,mt);var Ai=[];function Dr(e,t,n,s){Array.isArray(n)||(n&&(Ai[0]=n.toString()),n=Ai);for(var i=0;i<n.length;i++){var r=Er(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function br(e){Is(e.g,function(t,n){this.g.hasOwnProperty(n)&&Cs(t)},e),e.g={}}ce.prototype.M=function(){ce.Z.M.call(this),br(this)};ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pn(){this.g=!0}pn.prototype.Aa=function(){this.g=!1};function su(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function iu(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function _t(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ou(e,n)+(s?" "+s:"")})}function ru(e,t){e.info(function(){return"TIMEOUT: "+t})}pn.prototype.info=function(){};function ou(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ds(n)}catch{return t}}var kt={},Ci=null;function mn(){return Ci=Ci||new O}kt.Ma="serverreachability";function Rr(e){z.call(this,kt.Ma,e)}K(Rr,z);function le(e){const t=mn();q(t,new Rr(t,e))}kt.STAT_EVENT="statevent";function _r(e,t){z.call(this,kt.STAT_EVENT,e),this.stat=t}K(_r,z);function X(e){const t=mn();q(t,new _r(t,e))}kt.Na="timingevent";function Lr(e,t){z.call(this,kt.Na,e),this.size=t}K(Lr,z);function Ie(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var yn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},xr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ls(){}Ls.prototype.h=null;function Ni(e){return e.h||(e.h=e.i())}function Mr(){}var Se={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function xs(){z.call(this,"d")}K(xs,z);function Ms(){z.call(this,"c")}K(Ms,z);var ss;function vn(){}K(vn,Ls);vn.prototype.g=function(){return new XMLHttpRequest};vn.prototype.i=function(){return{}};ss=new vn;function Ae(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new ce(this),this.P=au,e=Qn?125:void 0,this.W=new gn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Fr}function Fr(){this.i=null,this.g="",this.h=!1}var au=45e3,is={},Qe={};p=Ae.prototype;p.setTimeout=function(e){this.P=e};function rs(e,t,n){e.K=1,e.v=En(ht(t)),e.s=n,e.U=!0,Vr(e,null)}function Vr(e,t){e.F=Date.now(),Ce(e),e.A=ht(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),jr(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Fr,e.g=ho(e.l,n?t:null,!e.s),0<e.O&&(e.L=new nu($(e.Ia,e,e.g),e.O)),Dr(e.V,e.g,"readystatechange",e.gb),t=e.H?pr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),le(1),su(e.j,e.u,e.A,e.m,e.X,e.s)}p.gb=function(e){e=e.target;const t=this.L;t&&ot(e)==3?t.l():this.Ia(e)};p.Ia=function(e){try{if(e==this.g)t:{const c=ot(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>c)&&(c!=3||Qn||this.g&&(this.h.h||this.g.ga()||Ri(this.g)))){this.I||c!=4||t==7||(t==8||0>=l?le(3):le(2)),wn(this);var n=this.g.ba();this.N=n;e:if(Or(this)){var s=Ri(this.g);e="";var i=s.length,r=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){vt(this),ie(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,iu(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xe(a)){var h=a;break e}}h=null}if(n=h)_t(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,os(this,n);else{this.i=!1,this.o=3,X(12),vt(this),ie(this);break t}}this.U?(Pr(this,c,o),Qn&&this.i&&c==3&&(Dr(this.V,this.W,"tick",this.fb),this.W.start())):(_t(this.j,this.m,o,null),os(this,o)),c==4&&vt(this),this.i&&!this.I&&(c==4?ro(this.l,this):(this.i=!1,Ce(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,X(12)):(this.o=0,X(13)),vt(this),ie(this)}}}catch{}finally{}};function Or(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Pr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=uu(e,n),i==Qe){t==4&&(e.o=4,X(14),s=!1),_t(e.j,e.m,null,"[Incomplete Response]");break}else if(i==is){e.o=4,X(15),_t(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else _t(e.j,e.m,i,null),os(e,i);Or(e)&&i!=Qe&&i!=is&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,X(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),js(t),t.L=!0,X(11))):(_t(e.j,e.m,n,"[Invalid Chunked Response]"),vt(e),ie(e))}p.fb=function(){if(this.g){var e=ot(this.g),t=this.g.ga();this.C<t.length&&(wn(this),Pr(this,e,t),this.i&&e!=4&&Ce(this))}};function uu(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Qe:(n=Number(t.substring(n,s)),isNaN(n)?is:(s+=1,s+n>t.length?Qe:(t=t.substr(s,n),e.C=s+n,t)))}p.cancel=function(){this.I=!0,vt(this)};function Ce(e){e.Y=Date.now()+e.P,Ur(e,e.P)}function Ur(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ie($(e.eb,e),t)}function wn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}p.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(ru(this.j,this.A),this.K!=2&&(le(3),X(17)),vt(this),this.o=2,ie(this)):Ur(this,this.Y-e)};function ie(e){e.l.G==0||e.I||ro(e.l,e)}function vt(e){wn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Rs(e.W),br(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function os(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||as(n.i,e))){if(n.I=e.N,!e.J&&as(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)en(n),Sn(n);else break t;Bs(n),X(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ie($(n.ab,n),6e3));if(1>=zr(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else wt(n,11)}else if((e.J||n.g==e)&&en(n),!Xe(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const c=h[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const l=h[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const g=h[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=s.i;!r.g&&(H(y,"spdy")||H(y,"quic")||H(y,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Os(r,r.h),r.h=null))}if(s.D){const N=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.sa=N,L(s.F,s.D,N))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=uo(s,s.H?s.la:null,s.W),o.J){Hr(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(wn(a),Ce(a)),s.g=o}else so(s);0<n.l.length&&An(n)}else h[0]!="stop"&&h[0]!="close"||wt(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?wt(n,7):qs(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}le(4)}catch{}}function hu(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Yn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Fs(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Yn(e)||typeof e=="string")gr(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Yn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=hu(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Gt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Gt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}p=Gt.prototype;p.R=function(){Vs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};p.T=function(){return Vs(this),this.g.concat()};function Vs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Tt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Tt(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}p.get=function(e,t){return Tt(this.h,e)?this.h[e]:t};p.set=function(e,t){Tt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};p.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Tt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var $r=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function cu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function It(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof It){this.g=t!==void 0?t:e.g,Je(this,e.j),this.s=e.s,Ze(this,e.i),tn(this,e.m),this.l=e.l,t=e.h;var n=new de;n.i=t.i,t.g&&(n.g=new Gt(t.g),n.h=t.h),ki(this,n),this.o=e.o}else e&&(n=String(e).match($r))?(this.g=!!t,Je(this,n[1]||"",!0),this.s=re(n[2]||""),Ze(this,n[3]||"",!0),tn(this,n[4]),this.l=re(n[5]||"",!0),ki(this,n[6]||"",!0),this.o=re(n[7]||"")):(this.g=!!t,this.h=new de(null,this.g))}It.prototype.toString=function(){var e=[],t=this.j;t&&e.push(se(t,Di,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(se(t,Di,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(se(n,n.charAt(0)=="/"?pu:gu,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",se(n,yu)),e.join("")};function ht(e){return new It(e)}function Je(e,t,n){e.j=n?re(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ze(e,t,n){e.i=n?re(t,!0):t}function tn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ki(e,t,n){t instanceof de?(e.h=t,vu(e.h,e.g)):(n||(t=se(t,mu)),e.h=new de(t,e.g))}function L(e,t,n){e.h.set(t,n)}function En(e){return L(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function lu(e){return e instanceof It?ht(e):new It(e,void 0)}function du(e,t,n,s){var i=new It(null,void 0);return e&&Je(i,e),t&&Ze(i,t),n&&tn(i,n),s&&(i.l=s),i}function re(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function se(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,fu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function fu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Di=/[#\/\?@]/g,gu=/[#\?:]/g,pu=/[#\?]/g,mu=/[#\?@]/g,yu=/#/g;function de(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function yt(e){e.g||(e.g=new Gt,e.h=0,e.i&&cu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=de.prototype;p.add=function(e,t){yt(this),this.i=null,e=zt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function qr(e,t){yt(e),t=zt(e,t),Tt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Tt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Vs(e)))}function Br(e,t){return yt(e),t=zt(e,t),Tt(e.g.h,t)}p.forEach=function(e,t){yt(this),this.g.forEach(function(n,s){gr(n,function(i){e.call(t,i,s,this)},this)},this)};p.T=function(){yt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};p.R=function(e){yt(this);var t=[];if(typeof e=="string")Br(this,e)&&(t=vi(t,this.g.get(zt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=vi(t,e[n])}return t};p.set=function(e,t){return yt(this),this.i=null,e=zt(this,e),Br(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function jr(e,t,n){qr(e,t),0<n.length&&(e.i=null,e.g.set(zt(e,t),Ts(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function zt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function vu(e,t){t&&!e.j&&(yt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(qr(this,s),jr(this,i,n))},e)),e.j=t}var wu=class{constructor(e,t){this.h=e,this.g=t}};function Kr(e){this.l=e||Eu,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Eu=10;function Gr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function zr(e){return e.h?1:e.g?e.g.size:0}function as(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Os(e,t){e.g?e.g.add(t):e.h=t}function Hr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Kr.prototype.cancel=function(){if(this.i=Wr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Wr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ts(e.i)}function Ps(){}Ps.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Ps.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function Tu(){this.g=new Ps}function Iu(e,t,n){const s=n||"";try{Fs(e,function(i,r){let o=i;Ee(i)&&(o=Ds(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Su(e,t){const n=new pn;if(T.Image){const s=new Image;s.onload=Oe(Ue,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Oe(Ue,n,s,"TestLoadImage: error",!1,t),s.onabort=Oe(Ue,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Oe(Ue,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Ue(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Ne(e){this.l=e.$b||null,this.j=e.ib||!1}K(Ne,Ls);Ne.prototype.g=function(){return new Tn(this.l,this.j)};Ne.prototype.i=function(e){return function(){return e}}({});function Tn(e,t){O.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Us,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(Tn,O);var Us=0;p=Tn.prototype;p.open=function(e,t){if(this.readyState!=Us)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,fe(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ke(this)),this.readyState=Us};p.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,fe(this)),this.g&&(this.readyState=3,fe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Xr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}p.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ke(this):fe(this),this.readyState==3&&Xr(this)}};p.Ua=function(e){this.g&&(this.response=this.responseText=e,ke(this))};p.Ta=function(e){this.g&&(this.response=e,ke(this))};p.ha=function(){this.g&&ke(this)};function ke(e){e.readyState=4,e.l=null,e.j=null,e.A=null,fe(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function fe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Au=T.JSON.parse;function F(e){O.call(this),this.headers=new Gt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yr,this.K=this.L=!1}K(F,O);var Yr="",Cu=/^https?$/i,Nu=["POST","PUT"];p=F.prototype;p.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ss.g(),this.C=this.u?Ni(this.u):Ni(ss),this.g.onreadystatechange=$(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){bi(this,r);return}e=n||"";const i=new Gt(this.headers);s&&Fs(s,function(r,o){i.set(o,r)}),s=Oa(i.T()),n=T.FormData&&e instanceof T.FormData,!(0<=fr(Nu,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zr(this),0<this.B&&((this.K=ku(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$(this.pa,this)):this.A=_s(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){bi(this,r)}};function ku(e){return Ft&&Ba()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Du(e){return e.toLowerCase()=="content-type"}p.pa=function(){typeof Es!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,q(this,"timeout"),this.abort(8))};function bi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Qr(e),In(e)}function Qr(e){e.D||(e.D=!0,q(e,"complete"),q(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,q(this,"complete"),q(this,"abort"),In(this))};p.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),In(this,!0)),F.Z.M.call(this)};p.Fa=function(){this.s||(this.F||this.v||this.l?Jr(this):this.cb())};p.cb=function(){Jr(this)};function Jr(e){if(e.h&&typeof Es!="undefined"&&(!e.C[1]||ot(e)!=4||e.ba()!=2)){if(e.v&&ot(e)==4)_s(e.Fa,0,e);else if(q(e,"readystatechange"),ot(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match($r)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!Cu.test(i?i.toLowerCase():"")}n=s}if(n)q(e,"complete"),q(e,"success");else{e.m=6;try{var o=2<ot(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Qr(e)}}finally{In(e)}}}}function In(e,t){if(e.g){Zr(e);const n=e.g,s=e.C[0]?We:null;e.g=null,e.C=null,t||q(e,"ready");try{n.onreadystatechange=s}catch{}}}function Zr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function ot(e){return e.g?e.g.readyState:0}p.ba=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}};p.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Au(t)}};function Ri(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Yr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}p.Da=function(){return this.m};p.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function bu(e){let t="";return Is(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function $s(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=bu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):L(e,t,n))}function ne(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function to(e){this.za=0,this.l=[],this.h=new pn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ne("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ne("baseRetryDelayMs",5e3,e),this.$a=ne("retryDelaySeedMs",1e4,e),this.Ya=ne("forwardChannelMaxRetries",2,e),this.ra=ne("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Kr(e&&e.concurrentRequestLimit),this.Ca=new Tu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}p=to.prototype;p.ma=8;p.G=1;function qs(e){if(eo(e),e.G==3){var t=e.V++,n=ht(e.F);L(n,"SID",e.J),L(n,"RID",t),L(n,"TYPE","terminate"),De(e,n),t=new Ae(e,e.h,t,void 0),t.K=2,t.v=En(ht(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=ho(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ce(t)}ao(e)}p.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Sn(e){e.g&&(js(e),e.g.cancel(),e.g=null)}function eo(e){Sn(e),e.u&&(T.clearTimeout(e.u),e.u=null),en(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Gn(e,t){e.l.push(new wu(e.Za++,t)),e.G==3&&An(e)}function An(e){Gr(e.i)||e.m||(e.m=!0,bs(e.Ha,e),e.C=0)}function Ru(e,t){return zr(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Ie($(e.Ha,e,t),oo(e,e.C)),e.C++,!0)}p.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Ae(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=pr(r),mr(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=no(this,i,t),n=ht(this.F),L(n,"RID",e),L(n,"CVER",22),this.D&&L(n,"X-HTTP-Session-Id",this.D),De(this,n),this.o&&r&&$s(n,this.o,r),Os(this.i,i),this.Ra&&L(n,"TYPE","init"),this.ja?(L(n,"$req",t),L(n,"SID","null"),i.$=!0,rs(i,n,null)):rs(i,n,t),this.G=2}}else this.G==3&&(e?_i(this,e):this.l.length==0||Gr(this.i)||_i(this))};function _i(e,t){var n;t?n=t.m:n=e.V++;const s=ht(e.F);L(s,"SID",e.J),L(s,"RID",n),L(s,"AID",e.U),De(e,s),e.o&&e.s&&$s(s,e.o,e.s),n=new Ae(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=no(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Os(e.i,n),rs(n,s,t)}function De(e,t){e.j&&Fs({},function(n,s){L(t,s,n)})}function no(e,t,n){n=Math.min(e.l.length,n);var s=e.j?$(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let h=i[u].h;const c=i[u].g;if(h-=r,0>h)r=Math.max(0,i[u].h-100),a=!1;else try{Iu(c,o,"req"+h+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function so(e){e.g||e.u||(e.Y=1,bs(e.Ga,e),e.A=0)}function Bs(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Ie($(e.Ga,e),oo(e,e.A)),e.A++,!0)}p.Ga=function(){if(this.u=null,io(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Ie($(this.bb,this),e)}};p.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,X(10),Sn(this),io(this))};function js(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function io(e){e.g=new Ae(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=ht(e.oa);L(t,"RID","rpc"),L(t,"SID",e.J),L(t,"CI",e.N?"0":"1"),L(t,"AID",e.U),De(e,t),L(t,"TYPE","xmlhttp"),e.o&&e.s&&$s(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=En(ht(t)),n.s=null,n.U=!0,Vr(n,e)}p.ab=function(){this.v!=null&&(this.v=null,Sn(this),Bs(this),X(19))};function en(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function ro(e,t){var n=null;if(e.g==t){en(e),js(e),e.g=null;var s=2}else if(as(e.i,t))n=t.D,Hr(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=mn(),q(s,new Lr(s,n,t,i)),An(e)}else so(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Ru(e,t)||s==2&&Bs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:wt(e,5);break;case 4:wt(e,10);break;case 3:wt(e,6);break;default:wt(e,2)}}}function oo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function wt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=$(e.jb,e);n||(n=new It("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Je(n,"https"),En(n)),Su(n.toString(),s)}else X(2);e.G=0,e.j&&e.j.va(t),ao(e),eo(e)}p.jb=function(e){e?(this.h.info("Successfully pinged google.com"),X(2)):(this.h.info("Failed to ping google.com"),X(1))};function ao(e){e.G=0,e.I=-1,e.j&&((Wr(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Ts(e.l),e.l.length=0),e.j.ua())}function uo(e,t,n){let s=lu(n);if(s.i!="")t&&Ze(s,t+"."+s.i),tn(s,s.m);else{const i=T.location;s=du(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&Is(e.aa,function(i,r){L(s,r,i)}),t=e.D,n=e.sa,t&&n&&L(s,t,n),L(s,"VER",e.ma),De(e,s),s}function ho(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new F(new Ne({ib:!0})):new F(e.qa),t.L=e.H,t}function co(){}p=co.prototype;p.xa=function(){};p.wa=function(){};p.va=function(){};p.ua=function(){};p.Oa=function(){};function nn(){if(Ft&&!(10<=Number(ja)))throw Error("Environmental error: no available transport.")}nn.prototype.g=function(e,t){return new st(e,t)};function st(e,t){O.call(this),this.g=new to(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Xe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Xe(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ht(this)}K(st,O);st.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),bs($(e.hb,e,t))),X(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=uo(e,null,e.W),An(e)};st.prototype.close=function(){qs(this.g)};st.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Gn(this.g,t)}else this.v?(t={},t.__data__=Ds(e),Gn(this.g,t)):Gn(this.g,e)};st.prototype.M=function(){this.g.j=null,delete this.j,qs(this.g),delete this.g,st.Z.M.call(this)};function lo(e){xs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(lo,xs);function fo(){Ms.call(this),this.status=1}K(fo,Ms);function Ht(e){this.g=e}K(Ht,co);Ht.prototype.xa=function(){q(this.g,"a")};Ht.prototype.wa=function(e){q(this.g,new lo(e))};Ht.prototype.va=function(e){q(this.g,new fo(e))};Ht.prototype.ua=function(){q(this.g,"b")};nn.prototype.createWebChannel=nn.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;yn.NO_ERROR=0;yn.TIMEOUT=8;yn.HTTP_ERROR=6;xr.COMPLETE="complete";Mr.EventType=Se;Se.OPEN="a";Se.CLOSE="b";Se.ERROR="c";Se.MESSAGE="d";O.prototype.listen=O.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.La;F.prototype.getLastErrorCode=F.prototype.Da;F.prototype.getStatus=F.prototype.ba;F.prototype.getResponseJson=F.prototype.Qa;F.prototype.getResponseText=F.prototype.ga;F.prototype.send=F.prototype.ea;var _u=function(){return new nn},Lu=function(){return mn()},zn=yn,xu=xr,Mu=kt,Li={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fu=Ne,$e=Mr,Vu=F;const xi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt="9.6.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Ea("@firebase/firestore");function Mi(){return St.logLevel}function w(e,...t){if(St.logLevel<=ue.DEBUG){const n=t.map(Ks);St.debug(`Firestore (${Wt}): ${e}`,...n)}}function ft(e,...t){if(St.logLevel<=ue.ERROR){const n=t.map(Ks);St.error(`Firestore (${Wt}): ${e}`,...n)}}function Fi(e,...t){if(St.logLevel<=ue.WARN){const n=t.map(Ks);St.warn(`Firestore (${Wt}): ${e}`,...n)}}function Ks(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Wt}) INTERNAL ASSERTION FAILED: `+e;throw ft(t),new Error(t)}function b(e,t){e||I()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Sa{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Pu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class Uu{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ct,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ct)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(b(typeof s.accessToken=="string"),new Ou(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(t===null||typeof t=="string"),new J(t)}}class $u{constructor(t,n,s){this.type="FirstParty",this.user=J.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class qu{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new $u(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ju{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(b(typeof n.token=="string"),this.p=n.token,new Bu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gs.A=-1;class go{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Ku(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function k(e,t){return e<t?-1:e>t?1:0}function Vt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new v(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new v(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new et(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.timestamp=t}static fromTimestamp(t){return new A(t)}static min(){return new A(new et(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Dt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function po(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ge.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ge?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class R extends ge{construct(t,n,s){return new R(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new R(n)}static emptyPath(){return new R([])}}const Gu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends ge{construct(t,n,s){return new Z(t,n,s)}static isValidIdentifier(t){return Gu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new v(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(n)}static emptyPath(){return new Z([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this.fields=t,t.sort(Z.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Vt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new j(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new j(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}j.EMPTY_BYTE_STRING=new j("");const zu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gt(e){if(b(!!e),typeof e=="string"){let t=0;const n=zu.exec(e);if(b(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:M(e.seconds),nanos:M(e.nanos)}}function M(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ot(e){return typeof e=="string"?j.fromBase64String(e):j.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yo(e){const t=e.mapValue.fields.__previous_value__;return mo(t)?yo(t):t}function me(e){const t=gt(e.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Pt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Pt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Pt&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e){return e==null}function sn(e){return e===0&&1/e==-1/0}function Wu(e){return typeof e=="number"&&Number.isInteger(e)&&!sn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(R.fromString(t))}static fromName(t){return new E(R.fromString(t).popFirst(5))}static empty(){return new E(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&R.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return R.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new R(t.slice()))}}function At(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?mo(e)?4:Xu(e)?9:10:I()}function rt(e,t){if(e===t)return!0;const n=At(e);if(n!==At(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return me(e).isEqual(me(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=gt(s.timestampValue),o=gt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Ot(s.bytesValue).isEqual(Ot(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return M(s.geoPointValue.latitude)===M(i.geoPointValue.latitude)&&M(s.geoPointValue.longitude)===M(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return M(s.integerValue)===M(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=M(s.doubleValue),o=M(i.doubleValue);return r===o?sn(r)===sn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Vt(e.arrayValue.values||[],t.arrayValue.values||[],rt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Vi(r)!==Vi(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!rt(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function ye(e,t){return(e.values||[]).find(n=>rt(n,t))!==void 0}function Ut(e,t){if(e===t)return 0;const n=At(e),s=At(t);if(n!==s)return k(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=M(i.integerValue||i.doubleValue),a=M(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Oi(e.timestampValue,t.timestampValue);case 4:return Oi(me(e),me(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Ot(i),a=Ot(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const h=k(o[u],a[u]);if(h!==0)return h}return k(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=k(M(i.latitude),M(r.latitude));return o!==0?o:k(M(i.longitude),M(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const h=Ut(o[u],a[u]);if(h)return h}return k(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),u=r.fields||{},h=Object.keys(u);a.sort(),h.sort();for(let c=0;c<a.length&&c<h.length;++c){const l=k(a[c],h[c]);if(l!==0)return l;const g=Ut(o[a[c]],u[h[c]]);if(g!==0)return g}return k(a.length,h.length)}(e.mapValue,t.mapValue);default:throw I()}}function Oi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=gt(e),s=gt(t),i=k(n.seconds,s.seconds);return i!==0?i:k(n.nanos,s.nanos)}function xt(e){return us(e)}function us(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=gt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ot(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=us(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${us(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function Pi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function hs(e){return!!e&&"integerValue"in e}function zs(e){return!!e&&"arrayValue"in e}function Ui(e){return!!e&&"nullValue"in e}function $i(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function je(e){return!!e&&"mapValue"in e}function oe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Dt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=oe(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=oe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Xu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.value=t}static empty(){return new tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!je(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=oe(n)}setAll(t){let n=Z.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=oe(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());je(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return rt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];je(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Dt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new tt(oe(this.value))}}function vo(e){const t=[];return Dt(e.fields,(n,s)=>{const i=new Z([n]);if(je(s)){const r=vo(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new pe(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new G(t,0,A.min(),A.min(),tt.empty(),0)}static newFoundDocument(t,n,s){return new G(t,1,n,A.min(),s,0)}static newNoDocument(t,n){return new G(t,2,n,A.min(),tt.empty(),0)}static newUnknownDocument(t,n){return new G(t,3,n,A.min(),tt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof G&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function qi(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Yu(e,t,n,s,i,r,o)}function Hs(e){const t=S(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+xt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Xt(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>xt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>xt(s)).join(",")),t.P=n}return t.P}function Qu(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${xt(s.value)}`;var s}).join(", ")}]`),Xt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>xt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>xt(n)).join(",")),`Target(${t})`}function Ws(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!rh(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!rt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ji(e.startAt,t.startAt)&&ji(e.endAt,t.endAt)}function cs(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class Y extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.V(t,n,s):new Ju(t,n,s):n==="array-contains"?new eh(t,s):n==="in"?new nh(t,s):n==="not-in"?new sh(t,s):n==="array-contains-any"?new ih(t,s):new Y(t,n,s)}static V(t,n,s){return n==="in"?new Zu(t,s):new th(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(Ut(n,this.value)):n!==null&&At(this.value)===At(n)&&this.v(Ut(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ju extends Y{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.v(n)}}class Zu extends Y{constructor(t,n){super(t,"in",n),this.keys=wo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class th extends Y{constructor(t,n){super(t,"not-in",n),this.keys=wo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function wo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class eh extends Y{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return zs(n)&&ye(n.arrayValue,this.value)}}class nh extends Y{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ye(this.value.arrayValue,n)}}class sh extends Y{constructor(t,n){super(t,"not-in",n)}matches(t){if(ye(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ye(this.value.arrayValue,n)}}class ih extends Y{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!zs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ye(this.value.arrayValue,s))}}class rn{constructor(t,n){this.position=t,this.inclusive=n}}class ae{constructor(t,n="asc"){this.field=t,this.dir=n}}function rh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Bi(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=Ut(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ji(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.D=null,this.C=null,this.startAt,this.endAt}}function oh(e,t,n,s,i,r,o,a){return new be(e,t,n,s,i,r,o,a)}function Eo(e){return new be(e)}function Ke(e){return!Xt(e.limit)&&e.limitType==="F"}function on(e){return!Xt(e.limit)&&e.limitType==="L"}function To(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Io(e){for(const t of e.filters)if(t.S())return t.field;return null}function So(e){return e.collectionGroup!==null}function ve(e){const t=S(e);if(t.D===null){t.D=[];const n=Io(t),s=To(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new ae(n)),t.D.push(new ae(Z.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new ae(Z.keyField(),r))}}}return t.D}function Ct(e){const t=S(e);if(!t.C)if(t.limitType==="F")t.C=qi(t.path,t.collectionGroup,ve(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ve(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new ae(r.field,o))}const s=t.endAt?new rn(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new rn(t.startAt.position,!t.startAt.inclusive):null;t.C=qi(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.C}function ah(e,t,n){return new be(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Cn(e,t){return Ws(Ct(e),Ct(t))&&e.limitType===t.limitType}function Ao(e){return`${Hs(Ct(e))}|lt:${e.limitType}`}function ls(e){return`Query(target=${Qu(Ct(e))}; limitType=${e.limitType})`}function Xs(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Bi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ve(n),s)||n.endAt&&!function(i,r,o){const a=Bi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ve(n),s))}(e,t)}function Co(e){return(t,n)=>{let s=!1;for(const i of ve(e)){const r=uh(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function uh(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Ut(a,u):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sn(t)?"-0":t}}function ko(e){return{integerValue:""+e}}function hh(e,t){return Wu(t)?ko(t):No(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this._=void 0}}function ch(e,t,n){return e instanceof an?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof $t?bo(e,t):e instanceof we?Ro(e,t):function(s,i){const r=Do(s,i),o=Ki(r)+Ki(s.k);return hs(r)&&hs(s.k)?ko(o):No(s.M,o)}(e,t)}function lh(e,t,n){return e instanceof $t?bo(e,t):e instanceof we?Ro(e,t):n}function Do(e,t){return e instanceof un?hs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class an extends Nn{}class $t extends Nn{constructor(t){super(),this.elements=t}}function bo(e,t){const n=_o(t);for(const s of e.elements)n.some(i=>rt(i,s))||n.push(s);return{arrayValue:{values:n}}}class we extends Nn{constructor(t){super(),this.elements=t}}function Ro(e,t){let n=_o(t);for(const s of e.elements)n=n.filter(i=>!rt(i,s));return{arrayValue:{values:n}}}class un extends Nn{constructor(t,n){super(),this.M=t,this.k=n}}function Ki(e){return M(e.integerValue||e.doubleValue)}function _o(e){return zs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,n){this.field=t,this.transform=n}}function fh(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof $t&&s instanceof $t||n instanceof we&&s instanceof we?Vt(n.elements,s.elements,rt):n instanceof un&&s instanceof un?rt(n.k,s.k):n instanceof an&&s instanceof an}(e.transform,t.transform)}class gh{constructor(t,n){this.version=t,this.transformResults=n}}class lt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new lt}static exists(t){return new lt(void 0,t)}static updateTime(t){return new lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ge(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class kn{}function ph(e,t,n){e instanceof Dn?function(s,i,r){const o=s.value.clone(),a=Hi(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Yt?function(s,i,r){if(!Ge(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Hi(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Lo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ds(e,t,n){e instanceof Dn?function(s,i,r){if(!Ge(s.precondition,i))return;const o=s.value.clone(),a=Wi(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(zi(i),o).setHasLocalMutations()}(e,t,n):e instanceof Yt?function(s,i,r){if(!Ge(s.precondition,i))return;const o=Wi(s.fieldTransforms,r,i),a=i.data;a.setAll(Lo(s)),a.setAll(o),i.convertToFoundDocument(zi(i),a).setHasLocalMutations()}(e,t,n):function(s,i){Ge(s.precondition,i)&&i.convertToNoDocument(A.min())}(e,t)}function mh(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Do(s.transform,i||null);r!=null&&(n==null&&(n=tt.empty()),n.set(s.field,r))}return n||null}function Gi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Vt(n,s,(i,r)=>fh(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function zi(e){return e.isFoundDocument()?e.version:A.min()}class Dn extends kn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class Yt extends kn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Lo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Hi(e,t,n){const s=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,lh(o,a,n[i]))}return s}function Wi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,ch(r,o,t))}return s}class xo extends kn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class yh extends kn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x,C;function wh(e){switch(e){default:return I();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Mo(e){if(e===void 0)return ft("GRPC error has no .code"),d.UNKNOWN;switch(e){case x.OK:return d.OK;case x.CANCELLED:return d.CANCELLED;case x.UNKNOWN:return d.UNKNOWN;case x.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case x.INTERNAL:return d.INTERNAL;case x.UNAVAILABLE:return d.UNAVAILABLE;case x.UNAUTHENTICATED:return d.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case x.NOT_FOUND:return d.NOT_FOUND;case x.ALREADY_EXISTS:return d.ALREADY_EXISTS;case x.PERMISSION_DENIED:return d.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case x.ABORTED:return d.ABORTED;case x.OUT_OF_RANGE:return d.OUT_OF_RANGE;case x.UNIMPLEMENTED:return d.UNIMPLEMENTED;case x.DATA_LOSS:return d.DATA_LOSS;default:return I()}}(C=x||(x={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Dt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return po(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,n){this.comparator=t,this.root=n||U.EMPTY}insert(t,n){return new P(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,U.BLACK,null,null))}remove(t){return new P(this.comparator,this.root.remove(t,this.comparator).copy(null,null,U.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qe(this.root,t,this.comparator,!1)}getReverseIterator(){return new qe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qe(this.root,t,this.comparator,!0)}}class qe{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class U{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:U.RED,this.left=i!=null?i:U.EMPTY,this.right=r!=null?r:U.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new U(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return U.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return U.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}U.EMPTY=null,U.RED=!0,U.BLACK=!1;U.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new U(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.comparator=t,this.data=new P(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(t){return new Xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof B)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new B(this.comparator);return n.data=t,n}}class Xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new P(E.comparator);function Nt(){return Eh}const Th=new P(E.comparator);function fs(){return Th}function Hn(){return new Qt(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ih=new P(E.comparator),Sh=new B(E.comparator);function _(...e){let t=Sh;for(const n of e)t=t.add(n);return t}const Ah=new B(k);function Fo(){return Ah}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Re.createSynthesizedTargetChangeForCurrentChange(t,n)),new bn(A.min(),s,Fo(),Nt(),_())}}class Re{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Re(j.EMPTY_BYTE_STRING,n,_(),_(),_())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,n,s,i){this.O=t,this.removedTargetIds=n,this.key=s,this.$=i}}class Vo{constructor(t,n){this.targetId=t,this.F=n}}class Oo{constructor(t,n,s=j.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Yi{constructor(){this.B=0,this.L=Ji(),this.q=j.EMPTY_BYTE_STRING,this.U=!1,this.K=!0}get current(){return this.U}get resumeToken(){return this.q}get G(){return this.B!==0}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.q=t)}H(){let t=_(),n=_(),s=_();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Re(this.q,this.U,t,n,s)}J(){this.K=!1,this.L=Ji()}Y(t,n){this.K=!0,this.L=this.L.insert(t,n)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.U=!0}}class Ch{constructor(t){this.nt=t,this.st=new Map,this.it=Nt(),this.rt=Qi(),this.ot=new B(k)}at(t){for(const n of t.O)t.$&&t.$.isFoundDocument()?this.ut(n,t.$):this.ct(n,t.key,t.$);for(const n of t.removedTargetIds)this.ct(n,t.key,t.$)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(t){const n=t.targetId,s=t.F.count,i=this.wt(n);if(i){const r=i.target;if(cs(r))if(s===0){const o=new E(r.path);this.ct(n,o,G.newNoDocument(o,A.min()))}else b(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&cs(a.target)){const u=new E(a.target.path);this.it.get(u)!==null||this.It(o,u)||this.ct(o,u,G.newNoDocument(u,t))}r.j&&(n.set(o,r.H()),r.J())}});let s=_();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.wt(u);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(t));const i=new bn(t,n,this.ot,this.it,s);return this.it=Nt(),this.rt=Qi(),this.ot=new B(k),i}ut(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,s){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new Yi,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new B(k),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new Yi),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Qi(){return new P(E.comparator)}function Ji(){return new P(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Dh{constructor(t,n){this.databaseId=t,this.N=n}}function hn(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Po(e,t){return e.N?t.toBase64():t.toUint8Array()}function bh(e,t){return hn(e,t.toTimestamp())}function at(e){return b(!!e),A.fromTimestamp(function(t){const n=gt(t);return new et(n.seconds,n.nanos)}(e))}function Ys(e,t){return function(n){return new R(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Uo(e){const t=R.fromString(e);return b(Bo(t)),t}function gs(e,t){return Ys(e.databaseId,t.path)}function Wn(e,t){const n=Uo(t);if(n.get(1)!==e.databaseId.projectId)throw new v(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new v(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E($o(n))}function ps(e,t){return Ys(e.databaseId,t)}function Rh(e){const t=Uo(e);return t.length===4?R.emptyPath():$o(t)}function ms(e){return new R(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function $o(e){return b(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Zi(e,t,n){return{name:gs(e,t),fields:n.value.mapValue.fields}}function _h(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,h){return u.N?(b(h===void 0||typeof h=="string"),j.fromBase64String(h||"")):(b(h===void 0||h instanceof Uint8Array),j.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?d.UNKNOWN:Mo(u.code);return new v(h,u.message||"")}(o);n=new Oo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Wn(e,s.document.name),r=at(s.document.updateTime),o=new tt({mapValue:{fields:s.document.fields}}),a=G.newFoundDocument(i,r,o),u=s.targetIds||[],h=s.removedTargetIds||[];n=new ze(u,h,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Wn(e,s.document),r=s.readTime?at(s.readTime):A.min(),o=G.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ze([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Wn(e,s.document),r=s.removedTargetIds||[];n=new ze([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new vh(i),o=s.targetId;n=new Vo(o,r)}}return n}function Lh(e,t){let n;if(t instanceof Dn)n={update:Zi(e,t.key,t.value)};else if(t instanceof xo)n={delete:gs(e,t.key)};else if(t instanceof Yt)n={update:Zi(e,t.key,t.data),updateMask:Bh(t.fieldMask)};else{if(!(t instanceof yh))return I();n={verify:gs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof an)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof $t)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof we)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof un)return{fieldPath:r.field.canonicalString(),increment:o.k};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bh(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function xh(e,t){return e&&e.length>0?(b(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?at(s.updateTime):at(i);return r.isEqual(A.min())&&(r=at(i)),new gh(r,s.transformResults||[])}(n,t))):[]}function Mh(e,t){return{documents:[ps(e,t.path)]}}function Fh(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ps(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ps(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length===0)return;const h=u.map(c=>function(l){if(l.op==="=="){if($i(l.value))return{unaryFilter:{field:Rt(l.field),op:"IS_NAN"}};if(Ui(l.value))return{unaryFilter:{field:Rt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if($i(l.value))return{unaryFilter:{field:Rt(l.field),op:"IS_NOT_NAN"}};if(Ui(l.value))return{unaryFilter:{field:Rt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rt(l.field),op:Uh(l.op),value:l.value}}}(c));return h.length===1?h[0]:{compositeFilter:{op:"AND",filters:h}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(h=>function(c){return{field:Rt(c.field),direction:Ph(c.dir)}}(h))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,h){return u.N||Xt(h)?h:{value:h}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Vh(e){let t=Rh(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){b(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let r=[];n.where&&(r=qo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(l){return new ae(Lt(l.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(c)));let a=null;n.limit&&(a=function(c){let l;return l=typeof c=="object"?c.value:c,Xt(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(c){const l=!!c.before,g=c.values||[];return new rn(g,l)}(n.startAt));let h=null;return n.endAt&&(h=function(c){const l=!c.before,g=c.values||[];return new rn(g,l)}(n.endAt)),oh(t,i,o,r,a,"F",u,h)}function Oh(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function qo(e){return e?e.unaryFilter!==void 0?[qh(e)]:e.fieldFilter!==void 0?[$h(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>qo(t)).reduce((t,n)=>t.concat(n)):I():[]}function Ph(e){return Nh[e]}function Uh(e){return kh[e]}function Rt(e){return{fieldPath:e.canonicalString()}}function Lt(e){return Z.fromServerFormat(e.fieldPath)}function $h(e){return Y.create(Lt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function qh(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Lt(e.unaryFilter.field);return Y.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Lt(e.unaryFilter.field);return Y.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Lt(e.unaryFilter.field);return Y.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Lt(e.unaryFilter.field);return Y.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Bh(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Bo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function _e(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&ph(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&ds(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&ds(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(A.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),_())}isEqual(t){return this.batchId===t.batchId&&Vt(this.mutations,t.mutations,(n,s)=>Gi(n,s))&&Vt(this.baseMutations,t.baseMutations,(n,s)=>Gi(n,s))}}class Qs{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){b(t.mutations.length===s.length);let i=Ih;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Qs(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,n,s,i,r=A.min(),o=A.min(),a=j.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Et(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t){this.Jt=t}}function Wh(e){const t=Vh({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ah(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.Ue=new Yh}addToCollectionParentIndex(t,n){return this.Ue.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.Ue.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getFieldIndex(t,n){return f.resolve(null)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Yh{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new B(R.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new B(R.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.wn=t}next(){return this.wn+=2,this.wn}static mn(){return new qt(0)}static gn(){return new qt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==jh)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.changes=new Qt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,G.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,n,s){this.ls=t,this.Fs=n,this.indexManager=s}Bs(t,n){return this.Fs.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Ls(t,n,s))}Ls(t,n,s){return this.ls.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}qs(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Us(t,n){return this.ls.getEntries(t,n).next(s=>this.Ks(t,s).next(()=>s))}Ks(t,n){return this.Fs.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.qs(n,s))}Gs(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Qs(t,n.path):So(n)?this.js(t,n,s):this.Ws(t,n,s)}Qs(t,n){return this.Bs(t,new E(n)).next(s=>{let i=fs();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}js(t,n,s){const i=n.collectionGroup;let r=fs();return this.indexManager.getCollectionParents(t,i).next(o=>f.forEach(o,a=>{const u=function(h,c){return new be(c,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.Ws(t,u,s).next(h=>{h.forEach((c,l)=>{r=r.insert(c,l)})})}).next(()=>r))}Ws(t,n,s){let i;return this.ls.getAll(t,n.path,s).next(r=>(i=r,this.Fs.getAllMutationBatchesAffectingQuery(t,n))).next(r=>{for(const o of r)for(const a of o.mutations){const u=a.key;let h=i.get(u);h==null&&(h=G.newInvalidDocument(u),i=i.insert(u,h)),ds(a,h,o.localWriteTime),h.isFoundDocument()||(i=i.remove(u))}}).next(()=>(i.forEach((r,o)=>{Xs(n,o)||(i=i.remove(r))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.zs=s,this.Hs=i}static Js(t,n){let s=_(),i=_();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Js(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{Ys(t){this.Xs=t}Gs(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(A.min())?this.Zs(t,n):this.Xs.Us(t,i).next(r=>{const o=this.ti(n,r);return(Ke(n)||on(n))&&this.ei(n.limitType,o,i,s)?this.Zs(t,n):(Mi()<=ue.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ls(n)),this.Xs.Gs(t,n,s).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}ti(t,n){let s=new B(Co(t));return n.forEach((i,r)=>{Xs(t,r)&&(s=s.add(r))}),s}ei(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Zs(t,n){return Mi()<=ue.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",ls(n)),this.Xs.Gs(t,n,A.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,n,s,i){this.persistence=t,this.ni=n,this.M=i,this.si=new P(k),this.ii=new Qt(r=>Hs(r),Ws),this.ri=A.min(),this.oi=t.getRemoteDocumentCache(),this.hs=t.getTargetCache(),this.fs=t.getBundleCache(),this.ai(s)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Fs=this.persistence.getMutationQueue(t,this.indexManager),this.ui=new Jh(this.oi,this.Fs,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ui)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.si))}}function ec(e,t,n,s){return new tc(e,t,n,s)}async function jo(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.Fs.getAllMutationBatches(s).next(r=>(i=r,n.ai(t),n.Fs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=_();for(const h of i){o.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}for(const h of r){a.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}return n.ui.Us(s,u).next(h=>({ci:h,removedBatchIds:o,addedBatchIds:a}))})})}function nc(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.oi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,h){const c=u.batch,l=c.keys();let g=f.resolve();return l.forEach(m=>{g=g.next(()=>h.getEntry(a,m)).next(y=>{const N=u.docVersions.get(m);b(N!==null),y.version.compareTo(N)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),h.addEntry(y)))})}),g.next(()=>o.Fs.removeMutationBatch(a,c))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.Fs.performConsistencyCheck(s)).next(()=>n.ui.Us(s,i))})}function Ko(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.hs.getLastRemoteSnapshotVersion(n))}function sc(e,t){const n=S(e),s=t.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const a=[];t.targetChanges.forEach((h,c)=>{const l=i.get(c);if(!l)return;a.push(n.hs.removeMatchingKeys(r,h.removedDocuments,c).next(()=>n.hs.addMatchingKeys(r,h.addedDocuments,c)));let g=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(c)?g=g.withResumeToken(j.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(c,g),function(m,y,N){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(l,g,h)&&a.push(n.hs.updateTargetData(r,g))});let u=Nt();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(ic(r,o,t.documentUpdates).next(h=>{u=h})),!s.isEqual(A.min())){const h=n.hs.getLastRemoteSnapshotVersion(r).next(c=>n.hs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(r)).next(()=>n.ui.Ks(r,u)).next(()=>u)}).then(r=>(n.si=i,r))}function ic(e,t,n){let s=_();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let r=Nt();return n.forEach((o,a)=>{const u=i.get(o);a.isNoDocument()&&a.version.isEqual(A.min())?(t.removeEntry(o,a.readTime),r=r.insert(o,a)):!u.isValidDocument()||a.version.compareTo(u.version)>0||a.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(a),r=r.insert(o,a)):w("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",a.version)}),r})}function rc(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.Fs.getNextMutationBatchAfterBatchId(s,t)))}function oc(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.hs.getTargetData(s,t).next(r=>r?(i=r,f.resolve(i)):n.hs.allocateTargetId(s).next(o=>(i=new Et(t,o,0,s.currentSequenceNumber),n.hs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.si.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.si=n.si.insert(s.targetId,s),n.ii.set(t,s.targetId)),s})}async function ys(e,t,n){const s=S(e),i=s.si.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_e(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.si=s.si.remove(t),s.ii.delete(i.target)}function tr(e,t,n){const s=S(e);let i=A.min(),r=_();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,h){const c=S(a),l=c.ii.get(h);return l!==void 0?f.resolve(c.si.get(l)):c.hs.getTargetData(u,h)}(s,o,Ct(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.hs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.ni.Gs(o,t,n?i:A.min(),n?r:_())).next(a=>({documents:a,hi:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.M=t,this._i=new Map,this.wi=new Map}getBundleMetadata(t,n){return f.resolve(this._i.get(n))}saveBundleMetadata(t,n){var s;return this._i.set(n.id,{id:(s=n).id,version:s.version,createTime:at(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.wi.get(n))}saveNamedQuery(t,n){return this.wi.set(n.name,function(s){return{name:s.name,query:Wh(s.bundledQuery),readTime:at(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.overlays=new P(E.comparator),this.mi=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.Xt(t,n,r)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.mi.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.mi.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const i=Hn(),r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new P((h,c)=>h-c);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let c=r.get(h.largestBatchId);c===null&&(c=Hn(),r=r.insert(h.largestBatchId,c)),c.set(h.getKey(),h)}}const a=Hn(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,c)=>a.set(h,c)),!(a.size()>=i)););return f.resolve(a)}Xt(t,n,s){if(s===null)return;const i=this.overlays.get(s.key);if(i!==null){const o=this.mi.get(i.largestBatchId).delete(s.key);this.mi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new zh(n,s));let r=this.mi.get(n);r===void 0&&(r=_(),this.mi.set(n,r)),this.mi.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.gi=new B(V.yi),this.pi=new B(V.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(t,n){const s=new V(t,n);this.gi=this.gi.add(s),this.pi=this.pi.add(s)}Ti(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Ei(new V(t,n))}Ai(t,n){t.forEach(s=>this.removeReference(s,n))}Ri(t){const n=new E(new R([])),s=new V(n,t),i=new V(n,t+1),r=[];return this.pi.forEachInRange([s,i],o=>{this.Ei(o),r.push(o.key)}),r}bi(){this.gi.forEach(t=>this.Ei(t))}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t)}Pi(t){const n=new E(new R([])),s=new V(n,t),i=new V(n,t+1);let r=_();return this.pi.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new V(t,0),s=this.gi.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class V{constructor(t,n){this.key=t,this.Vi=n}static yi(t,n){return E.comparator(t.key,n.key)||k(t.Vi,n.Vi)}static Ii(t,n){return k(t.Vi,n.Vi)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.Fs=[],this.vi=1,this.Si=new B(V.yi)}checkEmpty(t){return f.resolve(this.Fs.length===0)}addMutationBatch(t,n,s,i){const r=this.vi;this.vi++,this.Fs.length>0&&this.Fs[this.Fs.length-1];const o=new Gh(r,n,s,i);this.Fs.push(o);for(const a of i)this.Si=this.Si.add(new V(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.Ci(s),r=i<0?0:i;return f.resolve(this.Fs.length>r?this.Fs[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.Fs.length===0?-1:this.vi-1)}getAllMutationBatches(t){return f.resolve(this.Fs.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new V(n,0),i=new V(n,Number.POSITIVE_INFINITY),r=[];return this.Si.forEachInRange([s,i],o=>{const a=this.Di(o.Vi);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new B(k);return n.forEach(i=>{const r=new V(i,0),o=new V(i,Number.POSITIVE_INFINITY);this.Si.forEachInRange([r,o],a=>{s=s.add(a.Vi)})}),f.resolve(this.xi(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new V(new E(r),0);let a=new B(k);return this.Si.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(u.Vi)),!0)},o),f.resolve(this.xi(a))}xi(t){const n=[];return t.forEach(s=>{const i=this.Di(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){b(this.Ni(n.batchId,"removed")===0),this.Fs.shift();let s=this.Si;return f.forEach(n.mutations,i=>{const r=new V(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Si=s})}dn(t){}containsKey(t,n){const s=new V(n,0),i=this.Si.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.Fs.length,f.resolve()}Ni(t,n){return this.Ci(t)}Ci(t){return this.Fs.length===0?0:t-this.Fs[0].batchId}Di(t){const n=this.Ci(t);return n<0||n>=this.Fs.length?null:this.Fs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.ki=t,this.docs=new P(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ki(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():G.newInvalidDocument(n))}getEntries(t,n){let s=Nt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():G.newInvalidDocument(i))}),f.resolve(s)}getAll(t,n,s){let i=Nt();const r=new E(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||u.readTime.compareTo(s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return f.resolve(i)}Mi(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new lc(this)}getSize(t){return f.resolve(this.size)}}class lc extends Qh{constructor(t){super(),this.Un=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Un.addEntry(t,i)):this.Un.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.Un.getEntry(t,n)}getAllFromCache(t,n){return this.Un.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t){this.persistence=t,this.Oi=new Qt(n=>Hs(n),Ws),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.$i=0,this.Fi=new Zs,this.targetCount=0,this.Bi=qt.mn()}forEachTarget(t,n){return this.Oi.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$i&&(this.$i=n),f.resolve()}In(t){this.Oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Bi=new qt(n),this.highestTargetId=n),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,n){return this.In(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.In(n),f.resolve()}removeTargetData(t,n){return this.Oi.delete(n.target),this.Fi.Ri(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Oi.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.Oi.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.Fi.Ti(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.Fi.Ai(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Fi.Ri(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Fi.Pi(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.Fi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,n){this.Li={},this.overlays={},this.Zn=new Gs(0),this.ts=!1,this.ts=!0,this.referenceDelegate=t(this),this.hs=new dc(this),this.indexManager=new Xh,this.ls=function(s){return new cc(s)}(s=>this.referenceDelegate.qi(s)),this.M=new Hh(n),this.fs=new ac(this.M)}start(){return Promise.resolve()}shutdown(){return this.ts=!1,Promise.resolve()}get started(){return this.ts}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new uc,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Li[t.toKey()];return s||(s=new hc(n,this.referenceDelegate),this.Li[t.toKey()]=s),s}getTargetCache(){return this.hs}getRemoteDocumentCache(){return this.ls}getBundleCache(){return this.fs}runTransaction(t,n,s){w("MemoryPersistence","Starting transaction:",t);const i=new gc(this.Zn.next());return this.referenceDelegate.Ui(),s(i).next(r=>this.referenceDelegate.Ki(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gi(t,n){return f.or(Object.values(this.Li).map(s=>()=>s.containsKey(t,n)))}}class gc extends Kh{constructor(t){super(),this.currentSequenceNumber=t}}class ti{constructor(t){this.persistence=t,this.Qi=new Zs,this.ji=null}static Wi(t){return new ti(t)}get zi(){if(this.ji)return this.ji;throw I()}addReference(t,n,s){return this.Qi.addReference(s,n),this.zi.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.Qi.removeReference(s,n),this.zi.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.zi.add(n.toString()),f.resolve()}removeTarget(t,n){this.Qi.Ri(n.targetId).forEach(i=>this.zi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.zi.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ui(){this.ji=new Set}Ki(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.zi,s=>{const i=E.fromPath(s);return this.Hi(t,i).next(r=>{r||n.removeEntry(i,A.min())})}).next(()=>(this.ji=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hi(t,n).next(s=>{s?this.zi.delete(n.toString()):this.zi.add(n.toString())})}qi(t){return 0}Hi(t,n){return f.or([()=>f.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gi(t,n)])}}class er{constructor(){this.activeTargetIds=Fo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class pc{constructor(){this.Or=new er,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Or.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Or.Zi(t)}isLocalQueryTarget(t){return this.Or.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Or.activeTargetIds}isActiveQueryTarget(t){return this.Or.activeTargetIds.has(t)}start(){return this.Or=new er,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{Fr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.Br=()=>this.Lr(),this.qr=()=>this.Ur(),this.Kr=[],this.Gr()}Fr(t){this.Kr.push(t)}shutdown(){window.removeEventListener("online",this.Br),window.removeEventListener("offline",this.qr)}Gr(){window.addEventListener("online",this.Br),window.addEventListener("offline",this.qr)}Lr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0)}Ur(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.Qr=t.Qr,this.jr=t.jr}Wr(t){this.zr=t}Hr(t){this.Jr=t}onMessage(t){this.Yr=t}close(){this.jr()}send(t){this.Qr(t)}Xr(){this.zr()}Zr(t){this.Jr(t)}eo(t){this.Yr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.no=n+"://"+t.host,this.so="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}io(t,n,s,i,r){const o=this.ro(t,n);w("RestConnection","Sending: ",o,s);const a={};return this.oo(a,i,r),this.ao(t,o,a,s).then(u=>(w("RestConnection","Received: ",u),u),u=>{throw Fi("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}uo(t,n,s,i,r){return this.io(t,n,s,i,r)}oo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Wt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ro(t,n){const s=yc[t];return`${this.no}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}ao(t,n,s,i){return new Promise((r,o)=>{const a=new Vu;a.listenOnce(xu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case zn.NO_ERROR:const h=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(h)),r(h);break;case zn.TIMEOUT:w("Connection",'RPC "'+t+'" timed out'),o(new v(d.DEADLINE_EXCEEDED,"Request time out"));break;case zn.HTTP_ERROR:const c=a.getStatus();if(w("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const g=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(y)>=0?y:d.UNKNOWN}(l.status);o(new v(g,l.message))}else o(new v(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(d.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{w("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}co(t,n,s){const i=[this.no,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=_u(),o=Lu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Fu({})),this.oo(a.initMessageHeaders,n,s),Aa()||Ca()||Na()||ka()||Da()||ba()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");w("Connection","Creating WebChannel: "+u,a);const h=r.createWebChannel(u,a);let c=!1,l=!1;const g=new vc({Qr:y=>{l?w("Connection","Not sending because WebChannel is closed:",y):(c||(w("Connection","Opening WebChannel transport."),h.open(),c=!0),w("Connection","WebChannel sending:",y),h.send(y))},jr:()=>h.close()}),m=(y,N,D)=>{y.listen(N,Q=>{try{D(Q)}catch(it){setTimeout(()=>{throw it},0)}})};return m(h,$e.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),m(h,$e.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),g.Zr())}),m(h,$e.EventType.ERROR,y=>{l||(l=!0,Fi("Connection","WebChannel transport errored:",y),g.Zr(new v(d.UNAVAILABLE,"The operation could not be completed")))}),m(h,$e.EventType.MESSAGE,y=>{var N;if(!l){const D=y.data[0];b(!!D);const Q=D,it=Q.error||((N=Q[0])===null||N===void 0?void 0:N.error);if(it){w("Connection","WebChannel received error:",it);const te=it.status;let ee=function(ma){const mi=x[ma];if(mi!==void 0)return Mo(mi)}(te),pi=it.message;ee===void 0&&(ee=d.INTERNAL,pi="Unknown error status: "+te+" with message "+it.message),l=!0,g.Zr(new v(ee,pi)),h.close()}else w("Connection","WebChannel received:",D),g.eo(D)}}),m(o,Mu.STAT_EVENT,y=>{y.stat===Li.PROXY?w("Connection","Detected buffering proxy"):y.stat===Li.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.Xr()},0),g}}function Xn(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e){return new Dh(e,!0)}class Go{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hn=t,this.timerId=n,this.ho=s,this.lo=i,this.fo=r,this._o=0,this.wo=null,this.mo=Date.now(),this.reset()}reset(){this._o=0}yo(){this._o=this.fo}po(t){this.cancel();const n=Math.floor(this._o+this.Io()),s=Math.max(0,Date.now()-this.mo),i=Math.max(0,n-s);i>0&&w("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this._o} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.wo=this.Hn.enqueueAfterDelay(this.timerId,i,()=>(this.mo=Date.now(),t())),this._o*=this.lo,this._o<this.ho&&(this._o=this.ho),this._o>this.fo&&(this._o=this.fo)}To(){this.wo!==null&&(this.wo.skipDelay(),this.wo=null)}cancel(){this.wo!==null&&(this.wo.cancel(),this.wo=null)}Io(){return(Math.random()-.5)*this._o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,n,s,i,r,o,a,u){this.Hn=t,this.Eo=s,this.Ao=i,this.Ro=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.bo=0,this.Po=null,this.Vo=null,this.stream=null,this.vo=new Go(t,n)}So(){return this.state===1||this.state===5||this.Do()}Do(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Co()}async stop(){this.So()&&await this.close(0)}xo(){this.state=0,this.vo.reset()}No(){this.Do()&&this.Po===null&&(this.Po=this.Hn.enqueueAfterDelay(this.Eo,6e4,()=>this.ko()))}Mo(t){this.Oo(),this.stream.send(t)}async ko(){if(this.Do())return this.close(0)}Oo(){this.Po&&(this.Po.cancel(),this.Po=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Oo(),this.$o(),this.vo.cancel(),this.bo++,t!==4?this.vo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(ft(n.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.vo.yo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Fo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Hr(n)}Fo(){}auth(){this.state=1;const t=this.Bo(this.bo),n=this.bo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.bo===n&&this.Lo(s,i)},s=>{t(()=>{const i=new v(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Lo(t,n){const s=this.Bo(this.bo);this.stream=this.Uo(t,n),this.stream.Wr(()=>{s(()=>(this.state=2,this.Vo=this.Hn.enqueueAfterDelay(this.Ao,1e4,()=>(this.Do()&&(this.state=3),Promise.resolve())),this.listener.Wr()))}),this.stream.Hr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Co(){this.state=5,this.vo.po(async()=>{this.state=0,this.start()})}qo(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Bo(t){return n=>{this.Hn.enqueueAndForget(()=>this.bo===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ec extends zo{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.M=r}Uo(t,n){return this.Ro.co("Listen",t,n)}onMessage(t){this.vo.reset();const n=_h(this.M,t),s=function(i){if(!("targetChange"in i))return A.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?A.min():r.readTime?at(r.readTime):A.min()}(t);return this.listener.Ko(n,s)}Go(t){const n={};n.database=ms(this.M),n.addTarget=function(i,r){let o;const a=r.target;return o=cs(a)?{documents:Mh(i,a)}:{query:Fh(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Po(i,r.resumeToken):r.snapshotVersion.compareTo(A.min())>0&&(o.readTime=hn(i,r.snapshotVersion.toTimestamp())),o}(this.M,t);const s=Oh(this.M,t);s&&(n.labels=s),this.Mo(n)}Qo(t){const n={};n.database=ms(this.M),n.removeTarget=t,this.Mo(n)}}class Tc extends zo{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.M=r,this.jo=!1}get Wo(){return this.jo}start(){this.jo=!1,this.lastStreamToken=void 0,super.start()}Fo(){this.jo&&this.zo([])}Uo(t,n){return this.Ro.co("Write",t,n)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.jo){this.vo.reset();const n=xh(t.writeResults,t.commitTime),s=at(t.commitTime);return this.listener.Ho(s,n)}return b(!t.writeResults||t.writeResults.length===0),this.jo=!0,this.listener.Jo()}Yo(){const t={};t.database=ms(this.M),this.Mo(t)}zo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Lh(this.M,s))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.Ro=s,this.M=i,this.Xo=!1}Zo(){if(this.Xo)throw new v(d.FAILED_PRECONDITION,"The client has already been terminated.")}io(t,n,s){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Ro.io(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(d.UNKNOWN,i.toString())})}uo(t,n,s){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Ro.uo(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(d.UNKNOWN,i.toString())})}terminate(){this.Xo=!0}}class Sc{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ta=0,this.ea=null,this.na=!0}sa(){this.ta===0&&(this.ia("Unknown"),this.ea=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ea=null,this.ra("Backend didn't respond within 10 seconds."),this.ia("Offline"),Promise.resolve())))}oa(t){this.state==="Online"?this.ia("Unknown"):(this.ta++,this.ta>=1&&(this.aa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ia("Offline")))}set(t){this.aa(),this.ta=0,t==="Online"&&(this.na=!1),this.ia(t)}ia(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.na?(ft(n),this.na=!1):w("OnlineStateTracker",n)}aa(){this.ea!==null&&(this.ea.cancel(),this.ea=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.ua=[],this.ca=new Map,this.ha=new Set,this.la=[],this.fa=r,this.fa.Fr(o=>{s.enqueueAndForget(async()=>{bt(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=S(a);u.ha.add(4),await xe(u),u.da.set("Unknown"),u.ha.delete(4),await _n(u)}(this))})}),this.da=new Sc(s,i)}}async function _n(e){if(bt(e))for(const t of e.la)await t(!0)}async function xe(e){for(const t of e.la)await t(!1)}function Ho(e,t){const n=S(e);n.ca.has(t.targetId)||(n.ca.set(t.targetId,t),si(n)?ni(n):Jt(n).Do()&&ei(n,t))}function Wo(e,t){const n=S(e),s=Jt(n);n.ca.delete(t),s.Do()&&Xo(n,t),n.ca.size===0&&(s.Do()?s.No():bt(n)&&n.da.set("Unknown"))}function ei(e,t){e._a.Z(t.targetId),Jt(e).Go(t)}function Xo(e,t){e._a.Z(t),Jt(e).Qo(t)}function ni(e){e._a=new Ch({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.ca.get(t)||null}),Jt(e).start(),e.da.sa()}function si(e){return bt(e)&&!Jt(e).So()&&e.ca.size>0}function bt(e){return S(e).ha.size===0}function Yo(e){e._a=void 0}async function Cc(e){e.ca.forEach((t,n)=>{ei(e,t)})}async function Nc(e,t){Yo(e),si(e)?(e.da.oa(t),ni(e)):e.da.set("Unknown")}async function kc(e,t,n){if(e.da.set("Online"),t instanceof Oo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.ca.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.ca.delete(o),s._a.removeTarget(o))}(e,t)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await cn(e,s)}else if(t instanceof ze?e._a.at(t):t instanceof Vo?e._a._t(t):e._a.ht(t),!n.isEqual(A.min()))try{const s=await Ko(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i._a.yt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.ca.get(u);h&&i.ca.set(u,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.ca.get(a);if(!u)return;i.ca.set(a,u.withResumeToken(j.EMPTY_BYTE_STRING,u.snapshotVersion)),Xo(i,a);const h=new Et(u.target,a,1,u.sequenceNumber);ei(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await cn(e,s)}}async function cn(e,t,n){if(!_e(t))throw t;e.ha.add(1),await xe(e),e.da.set("Offline"),n||(n=()=>Ko(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.ha.delete(1),await _n(e)})}function Qo(e,t){return t().catch(n=>cn(e,n,t))}async function Ln(e){const t=S(e),n=pt(t);let s=t.ua.length>0?t.ua[t.ua.length-1].batchId:-1;for(;Dc(t);)try{const i=await rc(t.localStore,s);if(i===null){t.ua.length===0&&n.No();break}s=i.batchId,bc(t,i)}catch(i){await cn(t,i)}Jo(t)&&Zo(t)}function Dc(e){return bt(e)&&e.ua.length<10}function bc(e,t){e.ua.push(t);const n=pt(e);n.Do()&&n.Wo&&n.zo(t.mutations)}function Jo(e){return bt(e)&&!pt(e).So()&&e.ua.length>0}function Zo(e){pt(e).start()}async function Rc(e){pt(e).Yo()}async function _c(e){const t=pt(e);for(const n of e.ua)t.zo(n.mutations)}async function Lc(e,t,n){const s=e.ua.shift(),i=Qs.from(s,t,n);await Qo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ln(e)}async function xc(e,t){t&&pt(e).Wo&&await async function(n,s){if(i=s.code,wh(i)&&i!==d.ABORTED){const r=n.ua.shift();pt(n).xo(),await Qo(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ln(n)}var i}(e,t),Jo(e)&&Zo(e)}async function sr(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=bt(n);n.ha.add(3),await xe(n),s&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.ha.delete(3),await _n(n)}async function Mc(e,t){const n=S(e);t?(n.ha.delete(2),await _n(n)):t||(n.ha.add(2),await xe(n),n.da.set("Unknown"))}function Jt(e){return e.wa||(e.wa=function(t,n,s){const i=S(t);return i.Zo(),new Ec(n,i.Ro,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Wr:Cc.bind(null,e),Hr:Nc.bind(null,e),Ko:kc.bind(null,e)}),e.la.push(async t=>{t?(e.wa.xo(),si(e)?ni(e):e.da.set("Unknown")):(await e.wa.stop(),Yo(e))})),e.wa}function pt(e){return e.ma||(e.ma=function(t,n,s){const i=S(t);return i.Zo(),new Tc(n,i.Ro,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Wr:Rc.bind(null,e),Hr:xc.bind(null,e),Jo:_c.bind(null,e),Ho:Lc.bind(null,e)}),e.la.push(async t=>{t?(e.ma.xo(),await Ln(e)):(await e.ma.stop(),e.ua.length>0&&(w("RemoteStore",`Stopping write stream with ${e.ua.length} pending writes`),e.ua=[]))})),e.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new ii(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ri(e,t){if(ft("AsyncQueue",`${t}: ${e}`),_e(e))return new v(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=fs(),this.sortedSet=new P(this.comparator)}static emptySet(t){return new Mt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Mt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Mt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.ga=new P(E.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):I():this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,s)=>{t.push(s)}),t}}class Bt{constructor(t,n,s,i,r,o,a,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Bt(t,n,Mt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Cn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.pa=void 0,this.listeners=[]}}class Vc{constructor(){this.queries=new Qt(t=>Ao(t),Cn),this.onlineState="Unknown",this.Ia=new Set}}async function Oc(e,t){const n=S(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Fc),i)try{r.pa=await n.onListen(s)}catch(o){const a=ri(o,`Initialization of query '${ls(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Ta(n.onlineState),r.pa&&t.Ea(r.pa)&&oi(n)}async function Pc(e,t){const n=S(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Uc(e,t){const n=S(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Ea(i)&&(s=!0);o.pa=i}}s&&oi(n)}function $c(e,t,n){const s=S(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function oi(e){e.Ia.forEach(t=>{t.next()})}class qc{constructor(t,n,s){this.query=t,this.Aa=n,this.Ra=!1,this.ba=null,this.onlineState="Unknown",this.options=s||{}}Ea(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Bt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.Ra?this.Pa(t)&&(this.Aa.next(t),n=!0):this.Va(t,this.onlineState)&&(this.va(t),n=!0),this.ba=t,n}onError(t){this.Aa.error(t)}Ta(t){this.onlineState=t;let n=!1;return this.ba&&!this.Ra&&this.Va(this.ba,t)&&(this.va(this.ba),n=!0),n}Va(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Sa||!s)&&(!t.docs.isEmpty()||n==="Offline")}Pa(t){if(t.docChanges.length>0)return!0;const n=this.ba&&this.ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}va(t){t=Bt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Ra=!0,this.Aa.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t){this.key=t}}class ea{constructor(t){this.key=t}}class Bc{constructor(t,n){this.query=t,this.ka=n,this.Ma=null,this.current=!1,this.Oa=_(),this.mutatedKeys=_(),this.$a=Co(t),this.Fa=new Mt(this.$a)}get Ba(){return this.ka}La(t,n){const s=n?n.qa:new ir,i=n?n.Fa:this.Fa;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=Ke(this.query)&&i.size===this.query.limit?i.last():null,h=on(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,l)=>{const g=i.get(c),m=Xs(this.query,l)?l:null,y=!!g&&this.mutatedKeys.has(g.key),N=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let D=!1;g&&m?g.data.isEqual(m.data)?y!==N&&(s.track({type:3,doc:m}),D=!0):this.Ua(g,m)||(s.track({type:2,doc:m}),D=!0,(u&&this.$a(m,u)>0||h&&this.$a(m,h)<0)&&(a=!0)):!g&&m?(s.track({type:0,doc:m}),D=!0):g&&!m&&(s.track({type:1,doc:g}),D=!0,(u||h)&&(a=!0)),D&&(m?(o=o.add(m),r=N?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),Ke(this.query)||on(this.query))for(;o.size>this.query.limit;){const c=Ke(this.query)?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{Fa:o,qa:s,ei:a,mutatedKeys:r}}Ua(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Fa;this.Fa=t.Fa,this.mutatedKeys=t.mutatedKeys;const r=t.qa.ya();r.sort((h,c)=>function(l,g){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(l)-m(g)}(h.type,c.type)||this.$a(h.doc,c.doc)),this.Ka(s);const o=n?this.Ga():[],a=this.Oa.size===0&&this.current?1:0,u=a!==this.Ma;return this.Ma=a,r.length!==0||u?{snapshot:new Bt(this.query,t.Fa,i,r,t.mutatedKeys,a===0,u,!1),Qa:o}:{Qa:o}}Ta(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Fa:this.Fa,qa:new ir,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{Qa:[]}}ja(t){return!this.ka.has(t)&&!!this.Fa.has(t)&&!this.Fa.get(t).hasLocalMutations}Ka(t){t&&(t.addedDocuments.forEach(n=>this.ka=this.ka.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ka=this.ka.delete(n)),this.current=t.current)}Ga(){if(!this.current)return[];const t=this.Oa;this.Oa=_(),this.Fa.forEach(s=>{this.ja(s.key)&&(this.Oa=this.Oa.add(s.key))});const n=[];return t.forEach(s=>{this.Oa.has(s)||n.push(new ea(s))}),this.Oa.forEach(s=>{t.has(s)||n.push(new ta(s))}),n}Wa(t){this.ka=t.hi,this.Oa=_();const n=this.La(t.documents);return this.applyChanges(n,!0)}za(){return Bt.fromInitialDocuments(this.query,this.Fa,this.mutatedKeys,this.Ma===0)}}class jc{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Kc{constructor(t){this.key=t,this.Ha=!1}}class Gc{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ja={},this.Ya=new Qt(a=>Ao(a),Cn),this.Xa=new Map,this.Za=new Set,this.tu=new P(E.comparator),this.eu=new Map,this.nu=new Zs,this.su={},this.iu=new Map,this.ru=qt.gn(),this.onlineState="Unknown",this.ou=void 0}get isPrimaryClient(){return this.ou===!0}}async function zc(e,t){const n=nl(e);let s,i;const r=n.Ya.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.za();else{const o=await oc(n.localStore,Ct(t));n.isPrimaryClient&&Ho(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Hc(n,t,s,a==="current")}return i}async function Hc(e,t,n,s){e.au=(c,l,g)=>async function(m,y,N,D){let Q=y.view.La(N);Q.ei&&(Q=await tr(m.localStore,y.query,!1).then(({documents:ee})=>y.view.La(ee,Q)));const it=D&&D.targetChanges.get(y.targetId),te=y.view.applyChanges(Q,m.isPrimaryClient,it);return or(m,y.targetId,te.Qa),te.snapshot}(e,c,l,g);const i=await tr(e.localStore,t,!0),r=new Bc(t,i.hi),o=r.La(i.documents),a=Re.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),u=r.applyChanges(o,e.isPrimaryClient,a);or(e,n,u.Qa);const h=new jc(t,n,r);return e.Ya.set(t,h),e.Xa.has(n)?e.Xa.get(n).push(t):e.Xa.set(n,[t]),u.snapshot}async function Wc(e,t){const n=S(e),s=n.Ya.get(t),i=n.Xa.get(s.targetId);if(i.length>1)return n.Xa.set(s.targetId,i.filter(r=>!Cn(r,t))),void n.Ya.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ys(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Wo(n.remoteStore,s.targetId),vs(n,s.targetId)}).catch(Le)):(vs(n,s.targetId),await ys(n.localStore,s.targetId,!0))}async function Xc(e,t,n){const s=sl(e);try{const i=await function(r,o){const a=S(r),u=et.now(),h=o.reduce((l,g)=>l.add(g.key),_());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.ui.Us(l,h).next(g=>{c=g;const m=[];for(const y of o){const N=mh(y,c.get(y.key));N!=null&&m.push(new Yt(y.key,N,vo(N.value.mapValue),lt.exists(!0)))}return a.Fs.addMutationBatch(l,u,m,o)})).then(l=>(l.applyToLocalDocumentSet(c),{batchId:l.batchId,changes:c}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.su[r.currentUser.toKey()];u||(u=new P(k)),u=u.insert(o,a),r.su[r.currentUser.toKey()]=u}(s,i.batchId,n),await Me(s,i.changes),await Ln(s.remoteStore)}catch(i){const r=ri(i,"Failed to persist write");n.reject(r)}}async function na(e,t){const n=S(e);try{const s=await sc(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.eu.get(r);o&&(b(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ha=!0:i.modifiedDocuments.size>0?b(o.Ha):i.removedDocuments.size>0&&(b(o.Ha),o.Ha=!1))}),await Me(n,s,t)}catch(s){await Le(s)}}function rr(e,t,n){const s=S(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Ya.forEach((r,o)=>{const a=o.view.Ta(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=S(r);a.onlineState=o;let u=!1;a.queries.forEach((h,c)=>{for(const l of c.listeners)l.Ta(o)&&(u=!0)}),u&&oi(a)}(s.eventManager,t),i.length&&s.Ja.Ko(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Yc(e,t,n){const s=S(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.eu.get(t),r=i&&i.key;if(r){let o=new P(E.comparator);o=o.insert(r,G.newNoDocument(r,A.min()));const a=_().add(r),u=new bn(A.min(),new Map,new B(k),o,a);await na(s,u),s.tu=s.tu.remove(r),s.eu.delete(t),ai(s)}else await ys(s.localStore,t,!1).then(()=>vs(s,t,n)).catch(Le)}async function Qc(e,t){const n=S(e),s=t.batch.batchId;try{const i=await nc(n.localStore,t);ia(n,s,null),sa(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Me(n,i)}catch(i){await Le(i)}}async function Jc(e,t,n){const s=S(e);try{const i=await function(r,o){const a=S(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return a.Fs.lookupMutationBatch(u,o).next(c=>(b(c!==null),h=c.keys(),a.Fs.removeMutationBatch(u,c))).next(()=>a.Fs.performConsistencyCheck(u)).next(()=>a.ui.Us(u,h))})}(s.localStore,t);ia(s,t,n),sa(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Me(s,i)}catch(i){await Le(i)}}function sa(e,t){(e.iu.get(t)||[]).forEach(n=>{n.resolve()}),e.iu.delete(t)}function ia(e,t,n){const s=S(e);let i=s.su[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.su[s.currentUser.toKey()]=i}}function vs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.Xa.get(t))e.Ya.delete(s),n&&e.Ja.uu(s,n);e.Xa.delete(t),e.isPrimaryClient&&e.nu.Ri(t).forEach(s=>{e.nu.containsKey(s)||ra(e,s)})}function ra(e,t){e.Za.delete(t.path.canonicalString());const n=e.tu.get(t);n!==null&&(Wo(e.remoteStore,n),e.tu=e.tu.remove(t),e.eu.delete(n),ai(e))}function or(e,t,n){for(const s of n)s instanceof ta?(e.nu.addReference(s.key,t),Zc(e,s)):s instanceof ea?(w("SyncEngine","Document no longer in limbo: "+s.key),e.nu.removeReference(s.key,t),e.nu.containsKey(s.key)||ra(e,s.key)):I()}function Zc(e,t){const n=t.key,s=n.path.canonicalString();e.tu.get(n)||e.Za.has(s)||(w("SyncEngine","New document in limbo: "+n),e.Za.add(s),ai(e))}function ai(e){for(;e.Za.size>0&&e.tu.size<e.maxConcurrentLimboResolutions;){const t=e.Za.values().next().value;e.Za.delete(t);const n=new E(R.fromString(t)),s=e.ru.next();e.eu.set(s,new Kc(n)),e.tu=e.tu.insert(n,s),Ho(e.remoteStore,new Et(Ct(Eo(n.path)),s,2,Gs.A))}}async function Me(e,t,n){const s=S(e),i=[],r=[],o=[];s.Ya.isEmpty()||(s.Ya.forEach((a,u)=>{o.push(s.au(u,t,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,h.fromCache?"not-current":"current"),i.push(h);const c=Js.Js(u.targetId,h);r.push(c)}}))}),await Promise.all(o),s.Ja.Ko(i),await async function(a,u){const h=S(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>f.forEach(u,l=>f.forEach(l.zs,g=>h.persistence.referenceDelegate.addReference(c,l.targetId,g)).next(()=>f.forEach(l.Hs,g=>h.persistence.referenceDelegate.removeReference(c,l.targetId,g)))))}catch(c){if(!_e(c))throw c;w("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const l=c.targetId;if(!c.fromCache){const g=h.si.get(l),m=g.snapshotVersion,y=g.withLastLimboFreeSnapshotVersion(m);h.si=h.si.insert(l,y)}}}(s.localStore,r))}async function tl(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const s=await jo(n.localStore,t);n.currentUser=t,function(i,r){i.iu.forEach(o=>{o.forEach(a=>{a.reject(new v(d.CANCELLED,r))})}),i.iu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Me(n,s.ci)}}function el(e,t){const n=S(e),s=n.eu.get(t);if(s&&s.Ha)return _().add(s.key);{let i=_();const r=n.Xa.get(t);if(!r)return i;for(const o of r){const a=n.Ya.get(o);i=i.unionWith(a.view.Ba)}return i}}function nl(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=na.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=el.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Yc.bind(null,t),t.Ja.Ko=Uc.bind(null,t.eventManager),t.Ja.uu=$c.bind(null,t.eventManager),t}function sl(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Qc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Jc.bind(null,t),t}class il{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Rn(t.databaseInfo.databaseId),this.sharedClientState=this.hu(t),this.persistence=this.lu(t),await this.persistence.start(),this.gcScheduler=this.fu(t),this.localStore=this.du(t)}fu(t){return null}du(t){return ec(this.persistence,new Zh,t.initialUser,this.M)}lu(t){return new fc(ti.Wi,this.M)}hu(t){return new pc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rl{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>rr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tl.bind(null,this.syncEngine),await Mc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Vc}createDatastore(t){const n=Rn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new wc(i));var i;return function(r,o,a,u){return new Ic(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>rr(this.syncEngine,a,0),o=nr.vt()?new nr:new mc,new Ac(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,h){const c=new Gc(s,i,r,o,a,u);return h&&(c.ou=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=S(t);w("RemoteStore","RemoteStore shutting down."),n.ha.add(5),await xe(n),n.fa.shutdown(),n.da.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.wu(this.observer.next,t)}error(t){this.observer.error?this.wu(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}mu(){this.muted=!0}wu(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=J.UNAUTHENTICATED,this.clientId=go.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(w("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ri(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function ul(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await jo(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function hl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await cl(e);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>sr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>sr(t.remoteStore,r)),e.onlineComponents=t}async function cl(e){return e.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await ul(e,new il)),e.offlineComponents}async function oa(e){return e.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await hl(e,new rl)),e.onlineComponents}function ll(e){return oa(e).then(t=>t.syncEngine)}async function dl(e){const t=await oa(e),n=t.eventManager;return n.onListen=zc.bind(null,t.syncEngine),n.onUnlisten=Wc.bind(null,t.syncEngine),n}function fl(e,t,n={}){const s=new ct;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new ol({next:l=>{r.enqueueAndForget(()=>Pc(i,c)),l.fromCache&&a.source==="server"?u.reject(new v(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),c=new qc(o,h,{includeMetadataChanges:!0,Sa:!0});return Oc(i,c)}(await dl(e),e.asyncQueue,t,n,s)),s.promise}const ar=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e,t,n){if(!n)throw new v(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gl(e,t,n,s){if(t===!0&&s===!0)throw new v(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ur(e){if(!E.isDocumentKey(e))throw new v(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function hr(e){if(E.isDocumentKey(e))throw new v(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function xn(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function jt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new v(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xn(e);throw new v(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new v(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,gl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cr({}),this._settingsFrozen=!1,t instanceof Pt?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new v(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pt(i.options.projectId)}(t))}get app(){if(!this._app)throw new v(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Pu;switch(n.type){case"gapi":const s=n.client;return b(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new qu(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new v(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ar.get(t);n&&(w("ComponentProvider","Removing Datastore"),ar.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new nt(this.firestore,t,this._key)}}class Fe{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Fe(this.firestore,t,this._query)}}class dt extends Fe{constructor(t,n,s){super(t,n,Eo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nt(this.firestore,null,new E(t))}withConverter(t){return new dt(this.firestore,t,this._path)}}function Ul(e,t,...n){if(e=ut(e),aa("collection","path",t),e instanceof ui){const s=R.fromString(t,...n);return hr(s),new dt(e,null,s)}{if(!(e instanceof nt||e instanceof dt))throw new v(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(R.fromString(t,...n));return hr(s),new dt(e.firestore,null,s)}}function pl(e,t,...n){if(e=ut(e),arguments.length===1&&(t=go.R()),aa("doc","path",t),e instanceof ui){const s=R.fromString(t,...n);return ur(s),new nt(e,null,new E(s))}{if(!(e instanceof nt||e instanceof dt))throw new v(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(R.fromString(t,...n));return ur(s),new nt(e.firestore,e instanceof dt?e.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.Du=Promise.resolve(),this.Cu=[],this.xu=!1,this.Nu=[],this.ku=null,this.Mu=!1,this.Ou=!1,this.$u=[],this.vo=new Go(this,"async_queue_retry"),this.Fu=()=>{const n=Xn();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.vo.To()};const t=Xn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Fu)}get isShuttingDown(){return this.xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Bu(),this.Lu(t)}enterRestrictedMode(t){if(!this.xu){this.xu=!0,this.Ou=t||!1;const n=Xn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Fu)}}enqueue(t){if(this.Bu(),this.xu)return new Promise(()=>{});const n=new ct;return this.Lu(()=>this.xu&&this.Ou?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Cu.push(t),this.qu()))}async qu(){if(this.Cu.length!==0){try{await this.Cu[0](),this.Cu.shift(),this.vo.reset()}catch(t){if(!_e(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.Cu.length>0&&this.vo.po(()=>this.qu())}}Lu(t){const n=this.Du.then(()=>(this.Mu=!0,t().catch(s=>{this.ku=s,this.Mu=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ft("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Mu=!1,s))));return this.Du=n,n}enqueueAfterDelay(t,n,s){this.Bu(),this.$u.indexOf(t)>-1&&(n=0);const i=ii.createAndSchedule(this,t,n,s,r=>this.Uu(r));return this.Nu.push(i),i}Bu(){this.ku&&I()}verifyOperationInProgress(){}async Ku(){let t;do t=this.Du,await t;while(t!==this.Du)}Gu(t){for(const n of this.Nu)if(n.timerId===t)return!0;return!1}Qu(t){return this.Ku().then(()=>{this.Nu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Ku()})}ju(t){this.$u.push(t)}Uu(t){const n=this.Nu.indexOf(t);this.Nu.splice(n,1)}}class Ve extends ui{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new ml,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ha(this),this._firestoreClient.terminate()}}function $l(e=Ta()){return wa(e,"firestore").getImmediate()}function ua(e){return e._firestoreClient||ha(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ha(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Hu(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new al(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new v(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Kt(j.fromBase64String(t))}catch(n){throw new v(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Kt(j.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new v(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new v(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=/^__.*__$/;class vl{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Yt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Dn(t,this.data,n,this.fieldTransforms)}}class ca{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Yt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function la(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Vn{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Wu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get zu(){return this.settings.zu}Hu(t){return new Vn(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ju(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Hu({path:s,Yu:!1});return i.Xu(t),i}Zu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Hu({path:s,Yu:!1});return i.Wu(),i}tc(t){return this.Hu({path:void 0,Yu:!0})}ec(t){return ln(t,this.settings.methodName,this.settings.nc||!1,this.path,this.settings.sc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Wu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Xu(this.path.get(t))}Xu(t){if(t.length===0)throw this.ec("Document fields must not be empty");if(la(this.zu)&&yl.test(t))throw this.ec('Document fields cannot begin and end with "__"')}}class wl{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.M=s||Rn(t)}ic(t,n,s,i=!1){return new Vn({zu:t,methodName:n,sc:s,path:Z.emptyPath(),Yu:!1,nc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function ci(e){const t=e._freezeSettings(),n=Rn(e._databaseId);return new wl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function El(e,t,n,s,i,r={}){const o=e.ic(r.merge||r.mergeFields?2:0,t,n,i);li("Data must be an object, but it was:",o,s);const a=da(s,o);let u,h;if(r.merge)u=new pe(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const l of r.mergeFields){const g=ws(t,l,n);if(!o.contains(g))throw new v(d.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);ga(c,g)||c.push(g)}u=new pe(c),h=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,h=o.fieldTransforms;return new vl(new tt(a),u,h)}class On extends Fn{_toFieldTransform(t){if(t.zu!==2)throw t.zu===1?t.ec(`${this._methodName}() can only appear at the top level of your update data`):t.ec(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof On}}function Tl(e,t,n){return new Vn({zu:3,sc:t.settings.sc,methodName:e._methodName,Yu:n},t.databaseId,t.M,t.ignoreUndefinedProperties)}class Il extends Fn{constructor(t,n){super(t),this.rc=n}_toFieldTransform(t){const n=Tl(this,t,!0),s=this.rc.map(r=>Zt(r,n)),i=new $t(s);return new dh(t.path,i)}isEqual(t){return this===t}}function Sl(e,t,n,s){const i=e.ic(1,t,n);li("Data must be an object, but it was:",i,s);const r=[],o=tt.empty();Dt(s,(u,h)=>{const c=di(t,u,n);h=ut(h);const l=i.Zu(c);if(h instanceof On)r.push(c);else{const g=Zt(h,l);g!=null&&(r.push(c),o.set(c,g))}});const a=new pe(r);return new ca(o,a,i.fieldTransforms)}function Al(e,t,n,s,i,r){const o=e.ic(1,t,n),a=[ws(t,s,n)],u=[i];if(r.length%2!=0)throw new v(d.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<r.length;g+=2)a.push(ws(t,r[g])),u.push(r[g+1]);const h=[],c=tt.empty();for(let g=a.length-1;g>=0;--g)if(!ga(h,a[g])){const m=a[g];let y=u[g];y=ut(y);const N=o.Zu(m);if(y instanceof On)h.push(m);else{const D=Zt(y,N);D!=null&&(h.push(m),c.set(m,D))}}const l=new pe(h);return new ca(c,l,o.fieldTransforms)}function Cl(e,t,n,s=!1){return Zt(n,e.ic(s?4:3,t))}function Zt(e,t){if(fa(e=ut(e)))return li("Unsupported field value:",t,e),da(e,t);if(e instanceof Fn)return function(n,s){if(!la(s.zu))throw s.ec(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ec(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Yu&&t.zu!==4)throw t.ec("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Zt(o,s.tc(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hh(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=et.fromDate(n);return{timestampValue:hn(s.M,i)}}if(n instanceof et){const i=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:hn(s.M,i)}}if(n instanceof hi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kt)return{bytesValue:Po(s.M,n._byteString)};if(n instanceof nt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ec(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ys(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ec(`Unsupported field value: ${xn(n)}`)}(e,t)}function da(e,t){const n={};return po(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Dt(e,(s,i)=>{const r=Zt(i,t.Ju(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function fa(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof et||e instanceof hi||e instanceof Kt||e instanceof nt||e instanceof Fn)}function li(e,t,n){if(!fa(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=xn(n);throw s==="an object"?t.ec(e+" a custom object"):t.ec(e+" "+s)}}function ws(e,t,n){if((t=ut(t))instanceof Mn)return t._internalPath;if(typeof t=="string")return di(e,t);throw ln("Field path arguments must be of type string or ",e,!1,void 0,n)}const Nl=new RegExp("[~\\*/\\[\\]]");function di(e,t,n){if(t.search(Nl)>=0)throw ln(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Mn(...t.split("."))._internalPath}catch{throw ln(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ln(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new v(d.INVALID_ARGUMENT,a+e+u)}function ga(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(fi("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kl extends pa{data(){return super.data()}}function fi(e,t){return typeof t=="string"?di(e,t):t instanceof Mn?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Dl extends pa{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new He(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(fi("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class He extends Dl{data(t={}){return super.data(t)}}class bl{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Be(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new He(this._firestore,this._userDataWriter,s.key,s,new Be(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new He(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Be(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new He(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Be(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:Rl(o.type),doc:a,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Rl(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(e){if(on(e)&&e.explicitOrderBy.length===0)throw new v(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ll{}function ql(e,...t){for(const n of t)e=n._apply(e);return e}class xl extends Ll{constructor(t,n,s){super(),this.ac=t,this.uc=n,this.cc=s,this.type="where"}_apply(t){const n=ci(t.firestore),s=function(i,r,o,a,u,h,c){let l;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new v(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){dr(c,h);const m=[];for(const y of c)m.push(lr(a,i,y));l={arrayValue:{values:m}}}else l=lr(a,i,c)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||dr(c,h),l=Cl(o,r,c,h==="in"||h==="not-in");const g=Y.create(u,h,l);return function(m,y){if(y.S()){const D=Io(m);if(D!==null&&!D.isEqual(y.field))throw new v(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${D.toString()}' and '${y.field.toString()}'`);const Q=To(m);Q!==null&&Ml(m,y.field,Q)}const N=function(D,Q){for(const it of D.filters)if(Q.indexOf(it.op)>=0)return it.op;return null}(m,function(D){switch(D){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(N!==null)throw N===y.op?new v(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new v(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${N.toString()}' filters.`)}(i,g),g}(t._query,"where",n,t.firestore._databaseId,this.ac,this.uc,this.cc);return new Fe(t.firestore,t.converter,function(i,r){const o=i.filters.concat([r]);return new be(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(t._query,s))}}function Bl(e,t,n){const s=t,i=fi("where",e);return new xl(i,s,n)}function lr(e,t,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new v(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!So(t)&&n.indexOf("/")!==-1)throw new v(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(R.fromString(n));if(!E.isDocumentKey(s))throw new v(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Pi(e,new E(s))}if(n instanceof nt)return Pi(e,n._key);throw new v(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xn(n)}.`)}function dr(e,t){if(!Array.isArray(e)||e.length===0)throw new v(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new v(d.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ml(e,t,n){if(!n.isEqual(t))throw new v(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{convertValue(t,n="none"){switch(At(t)){case 0:return null;case 1:return t.booleanValue;case 2:return M(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ot(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Dt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new hi(M(t.latitude),M(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=yo(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(me(t));default:return null}}convertTimestamp(t){const n=gt(t);return new et(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=R.fromString(t);b(Bo(s));const i=new Pt(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||ft(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}class Ol extends Fl{constructor(t){super(),this.firestore=t}convertBytes(t){return new Kt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function jl(e){e=jt(e,Fe);const t=jt(e.firestore,Ve),n=ua(t),s=new Ol(t);return _l(e._query),fl(n,e._query).then(i=>new bl(t,s,e,i))}function Kl(e,t,n,...s){e=jt(e,nt);const i=jt(e.firestore,Ve),r=ci(i);let o;return o=typeof(t=ut(t))=="string"||t instanceof Mn?Al(r,"updateDoc",e._key,t,n,s):Sl(r,"updateDoc",e._key,t),gi(i,[o.toMutation(e._key,lt.exists(!0))])}function Gl(e){return gi(jt(e.firestore,Ve),[new xo(e._key,lt.none())])}function zl(e,t){const n=jt(e.firestore,Ve),s=pl(e),i=Vl(e.converter,t);return gi(n,[El(ci(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,lt.exists(!1))]).then(()=>s)}function gi(e,t){return function(n,s){const i=new ct;return n.asyncQueue.enqueueAndForget(async()=>Xc(await ll(n),s,i)),i.promise}(ua(e),t)}function Hl(...e){return new Il("arrayUnion",e)}(function(e,t=!0){(function(n){Wt=n})(Ia),ya(new va("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Ve(i,new Uu(n.getProvider("auth-internal")),new ju(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),yi(xi,"3.4.6",e),yi(xi,"3.4.6","esm2017")})();export{Bl as A,ql as T,Kl as X,Gl as Z,Hl as c,pl as h,$l as p,zl as t,Ul as u,jl as z};
