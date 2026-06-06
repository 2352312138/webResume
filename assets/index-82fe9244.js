(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fd(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const Ft={},qo=[],Gi=()=>{},Fg=()=>!1,Cu=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Ru=i=>i.startsWith("onUpdate:"),vn=Object.assign,Od=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Zv=Object.prototype.hasOwnProperty,Mt=(i,e)=>Zv.call(i,e),tt=Array.isArray,$o=i=>Bl(i)==="[object Map]",Og=i=>Bl(i)==="[object Set]",nm=i=>Bl(i)==="[object Date]",st=i=>typeof i=="function",$t=i=>typeof i=="string",gr=i=>typeof i=="symbol",Tt=i=>i!==null&&typeof i=="object",Bg=i=>(Tt(i)||st(i))&&st(i.then)&&st(i.catch),zg=Object.prototype.toString,Bl=i=>zg.call(i),Jv=i=>Bl(i).slice(8,-1),kg=i=>Bl(i)==="[object Object]",Bd=i=>$t(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,qa=Fd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pu=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},jv=/-\w/g,Wi=Pu(i=>i.replace(jv,e=>e.slice(1).toUpperCase())),Qv=/\B([A-Z])/g,ws=Pu(i=>i.replace(Qv,"-$1").toLowerCase()),Vg=Pu(i=>i.charAt(0).toUpperCase()+i.slice(1)),Yu=Pu(i=>i?`on${Vg(i)}`:""),ar=(i,e)=>!Object.is(i,e),qu=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Hg=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},eS=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let im;const Du=()=>im||(im=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ml(i){if(tt(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=$t(n)?rS(n):ml(n);if(r)for(const s in r)e[s]=r[s]}return e}else if($t(i)||Tt(i))return i}const tS=/;(?![^(]*\))/g,nS=/:([^]+)/,iS=/\/\*[^]*?\*\//g;function rS(i){const e={};return i.replace(iS,"").split(tS).forEach(t=>{if(t){const n=t.split(nS);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Ys(i){let e="";if($t(i))e=i;else if(tt(i))for(let t=0;t<i.length;t++){const n=Ys(i[t]);n&&(e+=n+" ")}else if(Tt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const sS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oS=Fd(sS);function Gg(i){return!!i||i===""}function aS(i,e){if(i.length!==e.length)return!1;let t=!0;for(let n=0;t&&n<i.length;n++)t=zd(i[n],e[n]);return t}function zd(i,e){if(i===e)return!0;let t=nm(i),n=nm(e);if(t||n)return t&&n?i.getTime()===e.getTime():!1;if(t=gr(i),n=gr(e),t||n)return i===e;if(t=tt(i),n=tt(e),t||n)return t&&n?aS(i,e):!1;if(t=Tt(i),n=Tt(e),t||n){if(!t||!n)return!1;const r=Object.keys(i).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!zd(i[o],e[o]))return!1}}return String(i)===String(e)}const Wg=i=>!!(i&&i.__v_isRef===!0),Dn=i=>$t(i)?i:i==null?"":tt(i)||Tt(i)&&(i.toString===zg||!st(i.toString))?Wg(i)?Dn(i.value):JSON.stringify(i,Xg,2):String(i),Xg=(i,e)=>Wg(e)?Xg(i,e.value):$o(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[$u(n,s)+" =>"]=r,t),{})}:Og(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$u(t))}:gr(e)?$u(e):Tt(e)&&!tt(e)&&!kg(e)?String(e):e,$u=(i,e="")=>{var t;return gr(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yn;class lS{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&yn&&(yn.active?(this.parent=yn,this.index=(yn.scopes||(yn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=yn;try{return yn=this,e()}finally{yn=t}}}on(){++this._on===1&&(this.prevScope=yn,yn=this)}off(){if(this._on>0&&--this._on===0){if(yn===this)yn=this.prevScope;else{let e=yn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function cS(){return yn}let Ut;const Ku=new WeakSet;class Yg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yn&&(yn.active?yn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ku.has(this)&&(Ku.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$g(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rm(this),Kg(this);const e=Ut,t=Xi;Ut=this,Xi=!0;try{return this.fn()}finally{Zg(this),Ut=e,Xi=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hd(e);this.deps=this.depsTail=void 0,rm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ku.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rh(this)&&this.run()}get dirty(){return rh(this)}}let qg=0,$a,Ka;function $g(i,e=!1){if(i.flags|=8,e){i.next=Ka,Ka=i;return}i.next=$a,$a=i}function kd(){qg++}function Vd(){if(--qg>0)return;if(Ka){let e=Ka;for(Ka=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;$a;){let e=$a;for($a=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function Kg(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zg(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),Hd(n),uS(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function rh(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function Jg(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===_l)||(i.globalVersion=_l,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!rh(i))))return;i.flags|=2;const e=i.dep,t=Ut,n=Xi;Ut=i,Xi=!0;try{Kg(i);const r=i.fn(i._value);(e.version===0||ar(r,i._value))&&(i.flags|=128,i._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ut=t,Xi=n,Zg(i),i.flags&=-3}}function Hd(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Hd(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function uS(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let Xi=!0;const jg=[];function Hr(){jg.push(Xi),Xi=!1}function Gr(){const i=jg.pop();Xi=i===void 0?!0:i}function rm(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=Ut;Ut=void 0;try{e()}finally{Ut=t}}}let _l=0;class fS{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ut||!Xi||Ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ut)t=this.activeLink=new fS(Ut,this),Ut.deps?(t.prevDep=Ut.depsTail,Ut.depsTail.nextDep=t,Ut.depsTail=t):Ut.deps=Ut.depsTail=t,Qg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Ut.depsTail,t.nextDep=void 0,Ut.depsTail.nextDep=t,Ut.depsTail=t,Ut.deps===t&&(Ut.deps=n)}return t}trigger(e){this.version++,_l++,this.notify(e)}notify(e){kd();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Vd()}}}function Qg(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)Qg(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const sh=new WeakMap,Js=Symbol(""),oh=Symbol(""),gl=Symbol("");function Nn(i,e,t){if(Xi&&Ut){let n=sh.get(i);n||sh.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new Gd),r.map=n,r.key=t),r.track()}}function Ir(i,e,t,n,r,s){const o=sh.get(i);if(!o){_l++;return}const a=l=>{l&&l.trigger()};if(kd(),e==="clear")o.forEach(a);else{const l=tt(i),c=l&&Bd(t);if(l&&t==="length"){const u=Number(n);o.forEach((h,f)=>{(f==="length"||f===gl||!gr(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(gl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Js)),$o(i)&&a(o.get(oh)));break;case"delete":l||(a(o.get(Js)),$o(i)&&a(o.get(oh)));break;case"set":$o(i)&&a(o.get(Js));break}}Vd()}function So(i){const e=St(i);return e===i?e:(Nn(e,"iterate",gl),Fi(i)?e:e.map(qi))}function Lu(i){return Nn(i=St(i),"iterate",gl),i}function rr(i,e){return Wr(i)?aa(js(i)?qi(e):e):qi(e)}const hS={__proto__:null,[Symbol.iterator](){return Zu(this,Symbol.iterator,i=>rr(this,i))},concat(...i){return So(this).concat(...i.map(e=>tt(e)?So(e):e))},entries(){return Zu(this,"entries",i=>(i[1]=rr(this,i[1]),i))},every(i,e){return br(this,"every",i,e,void 0,arguments)},filter(i,e){return br(this,"filter",i,e,t=>t.map(n=>rr(this,n)),arguments)},find(i,e){return br(this,"find",i,e,t=>rr(this,t),arguments)},findIndex(i,e){return br(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return br(this,"findLast",i,e,t=>rr(this,t),arguments)},findLastIndex(i,e){return br(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return br(this,"forEach",i,e,void 0,arguments)},includes(...i){return Ju(this,"includes",i)},indexOf(...i){return Ju(this,"indexOf",i)},join(i){return So(this).join(i)},lastIndexOf(...i){return Ju(this,"lastIndexOf",i)},map(i,e){return br(this,"map",i,e,void 0,arguments)},pop(){return ba(this,"pop")},push(...i){return ba(this,"push",i)},reduce(i,...e){return sm(this,"reduce",i,e)},reduceRight(i,...e){return sm(this,"reduceRight",i,e)},shift(){return ba(this,"shift")},some(i,e){return br(this,"some",i,e,void 0,arguments)},splice(...i){return ba(this,"splice",i)},toReversed(){return So(this).toReversed()},toSorted(i){return So(this).toSorted(i)},toSpliced(...i){return So(this).toSpliced(...i)},unshift(...i){return ba(this,"unshift",i)},values(){return Zu(this,"values",i=>rr(this,i))}};function Zu(i,e,t){const n=Lu(i),r=n[e]();return n!==i&&!Fi(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const dS=Array.prototype;function br(i,e,t,n,r,s){const o=Lu(i),a=o!==i&&!Fi(i),l=o[e];if(l!==dS[e]){const h=l.apply(i,s);return a?qi(h):h}let c=t;o!==i&&(a?c=function(h,f){return t.call(this,rr(i,h),f,i)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,i)}));const u=l.call(o,c,n);return a&&r?r(u):u}function sm(i,e,t,n){const r=Lu(i),s=r!==i&&!Fi(i);let o=t,a=!1;r!==i&&(s?(a=n.length===0,o=function(c,u,h){return a&&(a=!1,c=rr(i,c)),t.call(this,c,rr(i,u),h,i)}):t.length>3&&(o=function(c,u,h){return t.call(this,c,u,h,i)}));const l=r[e](o,...n);return a?rr(i,l):l}function Ju(i,e,t){const n=St(i);Nn(n,"iterate",gl);const r=n[e](...t);return(r===-1||r===!1)&&qd(t[0])?(t[0]=St(t[0]),n[e](...t)):r}function ba(i,e,t=[]){Hr(),kd();const n=St(i)[e].apply(i,t);return Vd(),Gr(),n}const pS=Fd("__proto__,__v_isRef,__isVue"),e0=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(gr));function mS(i){gr(i)||(i=String(i));const e=St(this);return Nn(e,"has",i),e.hasOwnProperty(i)}class t0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?TS:s0:s?r0:i0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=tt(e);if(!r){let l;if(o&&(l=hS[t]))return l;if(t==="hasOwnProperty")return mS}const a=Reflect.get(e,t,Bn(e)?e:n);if((gr(t)?e0.has(t):pS(t))||(r||Nn(e,"get",t),s))return a;if(Bn(a)){const l=o&&Bd(t)?a:a.value;return r&&Tt(l)?lh(l):l}return Tt(a)?r?lh(a):Xd(a):a}}class n0 extends t0{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];const o=tt(e)&&Bd(t);if(!this._isShallow){const c=Wr(s);if(!Fi(n)&&!Wr(n)&&(s=St(s),n=St(n)),!o&&Bn(s)&&!Bn(n))return c||(s.value=n),!0}const a=o?Number(t)<e.length:Mt(e,t),l=Reflect.set(e,t,n,Bn(e)?e:r);return e===St(r)&&(a?ar(n,s)&&Ir(e,"set",t,n):Ir(e,"add",t,n)),l}deleteProperty(e,t){const n=Mt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ir(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!gr(t)||!e0.has(t))&&Nn(e,"has",t),n}ownKeys(e){return Nn(e,"iterate",tt(e)?"length":Js),Reflect.ownKeys(e)}}class _S extends t0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const gS=new n0,xS=new _S,vS=new n0(!0);const ah=i=>i,Xl=i=>Reflect.getPrototypeOf(i);function SS(i,e,t){return function(...n){const r=this.__v_raw,s=St(r),o=$o(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?ah:e?aa:qi;return!e&&Nn(s,"iterate",l?oh:Js),vn(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Yl(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function MS(i,e){const t={get(r){const s=this.__v_raw,o=St(s),a=St(r);i||(ar(r,a)&&Nn(o,"get",r),Nn(o,"get",a));const{has:l}=Xl(o),c=e?ah:i?aa:qi;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&Nn(St(r),"iterate",Js),r.size},has(r){const s=this.__v_raw,o=St(s),a=St(r);return i||(ar(r,a)&&Nn(o,"has",r),Nn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=St(a),c=e?ah:i?aa:qi;return!i&&Nn(l,"iterate",Js),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return vn(t,i?{add:Yl("add"),set:Yl("set"),delete:Yl("delete"),clear:Yl("clear")}:{add(r){const s=St(this),o=Xl(s),a=St(r),l=!e&&!Fi(r)&&!Wr(r)?a:r;return o.has.call(s,l)||ar(r,l)&&o.has.call(s,r)||ar(a,l)&&o.has.call(s,a)||(s.add(l),Ir(s,"add",l,l)),this},set(r,s){!e&&!Fi(s)&&!Wr(s)&&(s=St(s));const o=St(this),{has:a,get:l}=Xl(o);let c=a.call(o,r);c||(r=St(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ar(s,u)&&Ir(o,"set",r,s):Ir(o,"add",r,s),this},delete(r){const s=St(this),{has:o,get:a}=Xl(s);let l=o.call(s,r);l||(r=St(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Ir(s,"delete",r,void 0),c},clear(){const r=St(this),s=r.size!==0,o=r.clear();return s&&Ir(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=SS(r,i,e)}),t}function Wd(i,e){const t=MS(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Mt(t,r)&&r in n?t:n,r,s)}const yS={get:Wd(!1,!1)},bS={get:Wd(!1,!0)},ES={get:Wd(!0,!1)};const i0=new WeakMap,r0=new WeakMap,s0=new WeakMap,TS=new WeakMap;function AS(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xd(i){return Wr(i)?i:Yd(i,!1,gS,yS,i0)}function wS(i){return Yd(i,!1,vS,bS,r0)}function lh(i){return Yd(i,!0,xS,ES,s0)}function Yd(i,e,t,n,r){if(!Tt(i)||i.__v_raw&&!(e&&i.__v_isReactive)||i.__v_skip||!Object.isExtensible(i))return i;const s=r.get(i);if(s)return s;const o=AS(Jv(i));if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function js(i){return Wr(i)?js(i.__v_raw):!!(i&&i.__v_isReactive)}function Wr(i){return!!(i&&i.__v_isReadonly)}function Fi(i){return!!(i&&i.__v_isShallow)}function qd(i){return i?!!i.__v_raw:!1}function St(i){const e=i&&i.__v_raw;return e?St(e):i}function CS(i){return!Mt(i,"__v_skip")&&Object.isExtensible(i)&&Hg(i,"__v_skip",!0),i}const qi=i=>Tt(i)?Xd(i):i,aa=i=>Tt(i)?lh(i):i;function Bn(i){return i?i.__v_isRef===!0:!1}function Rs(i){return RS(i,!1)}function RS(i,e){return Bn(i)?i:new PS(i,e)}class PS{constructor(e,t){this.dep=new Gd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:St(e),this._value=t?e:qi(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||Fi(e)||Wr(e);e=n?e:St(e),ar(e,t)&&(this._rawValue=e,this._value=n?e:qi(e),this.dep.trigger())}}function DS(i){return Bn(i)?i.value:i}const LS={get:(i,e,t)=>e==="__v_raw"?i:DS(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Bn(r)&&!Bn(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function o0(i){return js(i)?i:new Proxy(i,LS)}class IS{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Gd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_l-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ut!==this)return $g(this,!0),!0}get value(){const e=this.dep.track();return Jg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function NS(i,e,t=!1){let n,r;return st(i)?n=i:(n=i.get,r=i.set),new IS(n,r,t)}const ql={},nu=new WeakMap;let zs;function US(i,e=!1,t=zs){if(t){let n=nu.get(t);n||nu.set(t,n=[]),n.push(i)}}function FS(i,e,t=Ft){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:Fi(v)||r===!1||r===0?ls(v,1):ls(v);let u,h,f,d,m=!1,g=!1;if(Bn(i)?(h=()=>i.value,m=Fi(i)):js(i)?(h=()=>c(i),m=!0):tt(i)?(g=!0,m=i.some(v=>js(v)||Fi(v)),h=()=>i.map(v=>{if(Bn(v))return v.value;if(js(v))return c(v);if(st(v))return l?l(v,2):v()})):st(i)?e?h=l?()=>l(i,2):i:h=()=>{if(f){Hr();try{f()}finally{Gr()}}const v=zs;zs=u;try{return l?l(i,3,[d]):i(d)}finally{zs=v}}:h=Gi,e&&r){const v=h,C=r===!0?1/0:r;h=()=>ls(v(),C)}const p=cS(),_=()=>{u.stop(),p&&p.active&&Od(p.effects,u)};if(s&&e){const v=e;e=(...C)=>{v(...C),_()}}let x=g?new Array(i.length).fill(ql):ql;const y=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const C=u.run();if(r||m||(g?C.some((T,E)=>ar(T,x[E])):ar(C,x))){f&&f();const T=zs;zs=u;try{const E=[C,x===ql?void 0:g&&x[0]===ql?[]:x,d];x=C,l?l(e,3,E):e(...E)}finally{zs=T}}}else u.run()};return a&&a(y),u=new Yg(h),u.scheduler=o?()=>o(y,!1):y,d=v=>US(v,!1,u),f=u.onStop=()=>{const v=nu.get(u);if(v){if(l)l(v,4);else for(const C of v)C();nu.delete(u)}},e?n?y(!0):x=u.run():o?o(y.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function ls(i,e=1/0,t){if(e<=0||!Tt(i)||i.__v_skip||(t=t||new Map,(t.get(i)||0)>=e))return i;if(t.set(i,e),e--,Bn(i))ls(i.value,e,t);else if(tt(i))for(let n=0;n<i.length;n++)ls(i[n],e,t);else if(Og(i)||$o(i))i.forEach(n=>{ls(n,e,t)});else if(kg(i)){for(const n in i)ls(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&ls(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zl(i,e,t,n){try{return n?i(...n):i()}catch(r){Iu(r,e,t)}}function $i(i,e,t,n){if(st(i)){const r=zl(i,e,t,n);return r&&Bg(r)&&r.catch(s=>{Iu(s,e,t)}),r}if(tt(i)){const r=[];for(let s=0;s<i.length;s++)r.push($i(i[s],e,t,n));return r}}function Iu(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](i,l,c)===!1)return}a=a.parent}if(s){Hr(),zl(s,null,10,[i,l,c]),Gr();return}}OS(i,t,r,n,o)}function OS(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const Kn=[];let tr=-1;const Ko=[];let as=null,zo=0;const a0=Promise.resolve();let iu=null;function BS(i){const e=iu||a0;return i?e.then(this?i.bind(this):i):e}function zS(i){let e=tr+1,t=Kn.length;for(;e<t;){const n=e+t>>>1,r=Kn[n],s=xl(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function $d(i){if(!(i.flags&1)){const e=xl(i),t=Kn[Kn.length-1];!t||!(i.flags&2)&&e>=xl(t)?Kn.push(i):Kn.splice(zS(e),0,i),i.flags|=1,l0()}}function l0(){iu||(iu=a0.then(u0))}function kS(i){tt(i)?Ko.push(...i):as&&i.id===-1?as.splice(zo+1,0,i):i.flags&1||(Ko.push(i),i.flags|=1),l0()}function om(i,e,t=tr+1){for(;t<Kn.length;t++){const n=Kn[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;Kn.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function c0(i){if(Ko.length){const e=[...new Set(Ko)].sort((t,n)=>xl(t)-xl(n));if(Ko.length=0,as){as.push(...e);return}for(as=e,zo=0;zo<as.length;zo++){const t=as[zo];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}as=null,zo=0}}const xl=i=>i.id==null?i.flags&2?-1:1/0:i.id;function u0(i){const e=Gi;try{for(tr=0;tr<Kn.length;tr++){const t=Kn[tr];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),zl(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tr<Kn.length;tr++){const t=Kn[tr];t&&(t.flags&=-2)}tr=-1,Kn.length=0,c0(),iu=null,(Kn.length||Ko.length)&&u0()}}let cr=null,f0=null;function ru(i){const e=cr;return cr=i,f0=i&&i.type.__scopeId||null,e}function VS(i,e=cr,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&_m(-1);const s=ru(e);let o;try{o=i(...r)}finally{ru(s),n._d&&_m(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ps(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Hr(),$i(l,t,8,[i.el,a,i,e]),Gr())}}function HS(i,e){if(Jn){let t=Jn.provides;const n=Jn.parent&&Jn.parent.provides;n===t&&(t=Jn.provides=Object.create(n)),t[i]=e}}function Bc(i,e,t=!1){const n=HM();if(n||Zo){let r=Zo?Zo._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&st(e)?e.call(n&&n.proxy):e}}const GS=Symbol.for("v-scx"),WS=()=>Bc(GS);function ju(i,e,t){return h0(i,e,t)}function h0(i,e,t=Ft){const{immediate:n,deep:r,flush:s,once:o}=t,a=vn({},t),l=e&&n||!e&&s!=="post";let c;if(Sl){if(s==="sync"){const d=WS();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Gi,d.resume=Gi,d.pause=Gi,d}}const u=Jn;a.call=(d,m,g)=>$i(d,u,m,g);let h=!1;s==="post"?a.scheduler=d=>{Qn(d,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(d,m)=>{m?d():$d(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=FS(i,e,a);return Sl&&(c?c.push(f):l&&f()),f}function XS(i,e,t){const n=this.proxy,r=$t(i)?i.includes(".")?d0(n,i):()=>n[i]:i.bind(n,n);let s;st(e)?s=e:(s=e.handler,t=e);const o=kl(this),a=h0(r,s.bind(n),t);return o(),a}function d0(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const YS=Symbol("_vte"),qS=i=>i.__isTeleport,Qu=Symbol("_leaveCb");function Kd(i,e){i.shapeFlag&6&&i.component?(i.transition=e,Kd(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function p0(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function am(i,e){let t;return!!((t=Object.getOwnPropertyDescriptor(i,e))&&!t.configurable)}const su=new WeakMap;function Za(i,e,t,n,r=!1){if(tt(i)){i.forEach((g,p)=>Za(g,e&&(tt(e)?e[p]:e),t,n,r));return}if(Ja(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Za(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?tp(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Ft?a.refs={}:a.refs,h=a.setupState,f=St(h),d=h===Ft?Fg:g=>am(u,g)?!1:Mt(f,g),m=(g,p)=>!(p&&am(u,p));if(c!=null&&c!==l){if(lm(e),$t(c))u[c]=null,d(c)&&(h[c]=null);else if(Bn(c)){const g=e;m(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(st(l))zl(l,a,12,[o,u]);else{const g=$t(l),p=Bn(l);if(g||p){const _=()=>{if(i.f){const x=g?d(l)?h[l]:u[l]:m()||!i.k?l.value:u[i.k];if(r)tt(x)&&Od(x,s);else if(tt(x))x.includes(s)||x.push(s);else if(g)u[l]=[s],d(l)&&(h[l]=u[l]);else{const y=[s];m(l,i.k)&&(l.value=y),i.k&&(u[i.k]=y)}}else g?(u[l]=o,d(l)&&(h[l]=o)):p&&(m(l,i.k)&&(l.value=o),i.k&&(u[i.k]=o))};if(o){const x=()=>{_(),su.delete(i)};x.id=-1,su.set(i,x),Qn(x,t)}else lm(i),_()}}}function lm(i){const e=su.get(i);e&&(e.flags|=8,su.delete(i))}Du().requestIdleCallback;Du().cancelIdleCallback;const Ja=i=>!!i.type.__asyncLoader,m0=i=>i.type.__isKeepAlive;function $S(i,e){_0(i,"a",e)}function KS(i,e){_0(i,"da",e)}function _0(i,e,t=Jn){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Nu(e,n,t),t){let r=t.parent;for(;r&&r.parent;)m0(r.parent.vnode)&&ZS(n,e,t,r),r=r.parent}}function ZS(i,e,t,n){const r=Nu(e,i,n,!0);Zd(()=>{Od(n[e],r)},t)}function Nu(i,e,t=Jn,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{Hr();const a=kl(t),l=$i(e,t,i,o);return a(),Gr(),l});return n?r.unshift(s):r.push(s),s}}const Kr=i=>(e,t=Jn)=>{(!Sl||i==="sp")&&Nu(i,(...n)=>e(...n),t)},JS=Kr("bm"),g0=Kr("m"),jS=Kr("bu"),QS=Kr("u"),eM=Kr("bum"),Zd=Kr("um"),tM=Kr("sp"),nM=Kr("rtg"),iM=Kr("rtc");function rM(i,e=Jn){Nu("ec",i,e)}const sM=Symbol.for("v-ndc");function Ds(i,e,t,n){let r;const s=t&&t[n],o=tt(i);if(o||$t(i)){const a=o&&js(i);let l=!1,c=!1;a&&(l=!Fi(i),c=Wr(i),i=Lu(i)),r=new Array(i.length);for(let u=0,h=i.length;u<h;u++)r[u]=e(l?c?aa(qi(i[u])):qi(i[u]):i[u],u,void 0,s&&s[u])}else if(typeof i=="number"){r=new Array(i);for(let a=0;a<i;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(Tt(i))if(i[Symbol.iterator])r=Array.from(i,(a,l)=>e(a,l,void 0,s&&s[l]));else{const a=Object.keys(i);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(i[u],u,l,s&&s[l])}}else r=[];return t&&(t[n]=r),r}const ch=i=>i?F0(i)?tp(i):ch(i.parent):null,ja=vn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>ch(i.parent),$root:i=>ch(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Jd(i),$forceUpdate:i=>i.f||(i.f=()=>{$d(i.update)}),$nextTick:i=>i.n||(i.n=BS.bind(i.proxy)),$watch:i=>XS.bind(i)}),ef=(i,e)=>i!==Ft&&!i.__isScriptSetup&&Mt(i,e),oM={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ef(n,e))return o[e]=1,n[e];if(r!==Ft&&Mt(r,e))return o[e]=2,r[e];if(Mt(s,e))return o[e]=3,s[e];if(t!==Ft&&Mt(t,e))return o[e]=4,t[e];uh&&(o[e]=0)}}const c=ja[e];let u,h;if(c)return e==="$attrs"&&Nn(i.attrs,"get",""),c(i);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ft&&Mt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Mt(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return ef(r,e)?(r[e]=t,!0):n!==Ft&&Mt(n,e)?(n[e]=t,!0):Mt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||i!==Ft&&a[0]!=="$"&&Mt(i,a)||ef(e,a)||Mt(s,a)||Mt(n,a)||Mt(ja,a)||Mt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Mt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function cm(i){return tt(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let uh=!0;function aM(i){const e=Jd(i),t=i.proxy,n=i.ctx;uh=!1,e.beforeCreate&&um(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:g,deactivated:p,beforeDestroy:_,beforeUnmount:x,destroyed:y,unmounted:v,render:C,renderTracked:T,renderTriggered:E,errorCaptured:S,serverPrefetch:A,expose:I,inheritAttrs:N,components:B,directives:ee,filters:te}=e;if(c&&lM(c,n,null),o)for(const F in o){const ne=o[F];st(ne)&&(n[F]=ne.bind(t))}if(r){const F=r.call(t,t);Tt(F)&&(i.data=Xd(F))}if(uh=!0,s)for(const F in s){const ne=s[F],me=st(ne)?ne.bind(t,t):st(ne.get)?ne.get.bind(t,t):Gi,U=!st(ne)&&st(ne.set)?ne.set.bind(t):Gi,Ae=$M({get:me,set:U});Object.defineProperty(n,F,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Ne=>Ae.value=Ne})}if(a)for(const F in a)x0(a[F],n,t,F);if(l){const F=st(l)?l.call(t):l;Reflect.ownKeys(F).forEach(ne=>{HS(ne,F[ne])})}u&&um(u,i,"c");function Y(F,ne){tt(ne)?ne.forEach(me=>F(me.bind(t))):ne&&F(ne.bind(t))}if(Y(JS,h),Y(g0,f),Y(jS,d),Y(QS,m),Y($S,g),Y(KS,p),Y(rM,S),Y(iM,T),Y(nM,E),Y(eM,x),Y(Zd,v),Y(tM,A),tt(I))if(I.length){const F=i.exposed||(i.exposed={});I.forEach(ne=>{Object.defineProperty(F,ne,{get:()=>t[ne],set:me=>t[ne]=me,enumerable:!0})})}else i.exposed||(i.exposed={});C&&i.render===Gi&&(i.render=C),N!=null&&(i.inheritAttrs=N),B&&(i.components=B),ee&&(i.directives=ee),A&&p0(i)}function lM(i,e,t=Gi){tt(i)&&(i=fh(i));for(const n in i){const r=i[n];let s;Tt(r)?"default"in r?s=Bc(r.from||n,r.default,!0):s=Bc(r.from||n):s=Bc(r),Bn(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function um(i,e,t){$i(tt(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function x0(i,e,t,n){let r=n.includes(".")?d0(t,n):()=>t[n];if($t(i)){const s=e[i];st(s)&&ju(r,s)}else if(st(i))ju(r,i.bind(t));else if(Tt(i))if(tt(i))i.forEach(s=>x0(s,e,t,n));else{const s=st(i.handler)?i.handler.bind(t):e[i.handler];st(s)&&ju(r,s,i)}}function Jd(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>ou(l,c,o,!0)),ou(l,e,o)),Tt(e)&&s.set(e,l),l}function ou(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&ou(i,s,t,!0),r&&r.forEach(o=>ou(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=cM[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const cM={data:fm,props:hm,emits:hm,methods:Ua,computed:Ua,beforeCreate:Hn,created:Hn,beforeMount:Hn,mounted:Hn,beforeUpdate:Hn,updated:Hn,beforeDestroy:Hn,beforeUnmount:Hn,destroyed:Hn,unmounted:Hn,activated:Hn,deactivated:Hn,errorCaptured:Hn,serverPrefetch:Hn,components:Ua,directives:Ua,watch:fM,provide:fm,inject:uM};function fm(i,e){return e?i?function(){return vn(st(i)?i.call(this,this):i,st(e)?e.call(this,this):e)}:e:i}function uM(i,e){return Ua(fh(i),fh(e))}function fh(i){if(tt(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Hn(i,e){return i?[...new Set([].concat(i,e))]:e}function Ua(i,e){return i?vn(Object.create(null),i,e):e}function hm(i,e){return i?tt(i)&&tt(e)?[...new Set([...i,...e])]:vn(Object.create(null),cm(i),cm(e??{})):e}function fM(i,e){if(!i)return e;if(!e)return i;const t=vn(Object.create(null),i);for(const n in e)t[n]=Hn(i[n],e[n]);return t}function v0(){return{app:null,config:{isNativeTag:Fg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hM=0;function dM(i,e){return function(n,r=null){st(n)||(n=vn({},n)),r!=null&&!Tt(r)&&(r=null);const s=v0(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:hM++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:KM,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&st(u.install)?(o.add(u),u.install(c,...h)):st(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||gs(n,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(d,u):i(d,u,f),l=!0,c._container=u,u.__vue_app__=c,tp(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&($i(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=Zo;Zo=c;try{return u()}finally{Zo=h}}};return c}}let Zo=null;const pM=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${Wi(e)}Modifiers`]||i[`${ws(e)}Modifiers`];function mM(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Ft;let r=t;const s=e.startsWith("update:"),o=s&&pM(n,e.slice(7));o&&(o.trim&&(r=t.map(u=>$t(u)?u.trim():u)),o.number&&(r=t.map(eS)));let a,l=n[a=Yu(e)]||n[a=Yu(Wi(e))];!l&&s&&(l=n[a=Yu(ws(e))]),l&&$i(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,$i(c,i,6,r)}}const _M=new WeakMap;function S0(i,e,t=!1){const n=t?_M:e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!st(i)){const l=c=>{const u=S0(c,e,!0);u&&(a=!0,vn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(Tt(i)&&n.set(i,null),null):(tt(s)?s.forEach(l=>o[l]=null):vn(o,s),Tt(i)&&n.set(i,o),o)}function Uu(i,e){return!i||!Cu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Mt(i,e[0].toLowerCase()+e.slice(1))||Mt(i,ws(e))||Mt(i,e))}function tf(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:m,inheritAttrs:g}=i,p=ru(i);let _,x;try{if(t.shapeFlag&4){const v=r||n,C=v;_=sr(c.call(C,v,u,h,d,f,m)),x=a}else{const v=e;_=sr(v.length>1?v(h,{attrs:a,slots:o,emit:l}):v(h,null)),x=e.props?a:gM(a)}}catch(v){Qa.length=0,Iu(v,i,1),_=gs(la)}let y=_;if(x&&g!==!1){const v=Object.keys(x),{shapeFlag:C}=y;v.length&&C&7&&(s&&v.some(Ru)&&(x=xM(x,s)),y=ca(y,x,!1,!0))}return t.dirs&&(y=ca(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Kd(y,t.transition),_=y,ru(p),_}const gM=i=>{let e;for(const t in i)(t==="class"||t==="style"||Cu(t))&&((e||(e={}))[t]=i[t]);return e},xM=(i,e)=>{const t={};for(const n in i)(!Ru(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function vM(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?dm(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(M0(o,n,f)&&!Uu(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?dm(n,o,c):!0:!!o;return!1}function dm(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(M0(e,i,s)&&!Uu(t,s))return!0}return!1}function M0(i,e,t){const n=i[t],r=e[t];return t==="style"&&Tt(n)&&Tt(r)?!zd(n,r):n!==r}function SM({vnode:i,parent:e,suspense:t},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===i&&(r.suspense.vnode.el=r.el=n,i=r),r===i)(i=e.vnode).el=n,e=e.parent;else break}t&&t.activeBranch===i&&(t.vnode.el=n)}const y0={},b0=()=>Object.create(y0),E0=i=>Object.getPrototypeOf(i)===y0;function MM(i,e,t,n=!1){const r={},s=b0();i.propsDefaults=Object.create(null),T0(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:wS(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function yM(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=St(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Uu(i.emitsOptions,f))continue;const d=e[f];if(l)if(Mt(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const m=Wi(f);r[m]=hh(l,a,m,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{T0(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Mt(e,h)&&((u=ws(h))===h||!Mt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=hh(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Mt(e,h))&&(delete s[h],c=!0)}c&&Ir(i.attrs,"set","")}function T0(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(qa(l))continue;const c=e[l];let u;r&&Mt(r,u=Wi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Uu(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=St(t),c=a||Ft;for(let u=0;u<s.length;u++){const h=s[u];t[h]=hh(r,l,h,c[h],i,!Mt(c,h))}}return o}function hh(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Mt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&st(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=kl(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===ws(t))&&(n=!0))}return n}const bM=new WeakMap;function A0(i,e,t=!1){const n=t?bM:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!st(i)){const u=h=>{l=!0;const[f,d]=A0(h,e,!0);vn(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return Tt(i)&&n.set(i,qo),qo;if(tt(s))for(let u=0;u<s.length;u++){const h=Wi(s[u]);pm(h)&&(o[h]=Ft)}else if(s)for(const u in s){const h=Wi(u);if(pm(h)){const f=s[u],d=o[h]=tt(f)||st(f)?{type:f}:vn({},f),m=d.type;let g=!1,p=!0;if(tt(m))for(let _=0;_<m.length;++_){const x=m[_],y=st(x)&&x.name;if(y==="Boolean"){g=!0;break}else y==="String"&&(p=!1)}else g=st(m)&&m.name==="Boolean";d[0]=g,d[1]=p,(g||Mt(d,"default"))&&a.push(h)}}const c=[o,a];return Tt(i)&&n.set(i,c),c}function pm(i){return i[0]!=="$"&&!qa(i)}const jd=i=>i==="_"||i==="_ctx"||i==="$stable",Qd=i=>tt(i)?i.map(sr):[sr(i)],EM=(i,e,t)=>{if(e._n)return e;const n=VS((...r)=>Qd(e(...r)),t);return n._c=!1,n},w0=(i,e,t)=>{const n=i._ctx;for(const r in i){if(jd(r))continue;const s=i[r];if(st(s))e[r]=EM(r,s,n);else if(s!=null){const o=Qd(s);e[r]=()=>o}}},C0=(i,e)=>{const t=Qd(e);i.slots.default=()=>t},R0=(i,e,t)=>{for(const n in e)(t||!jd(n))&&(i[n]=e[n])},TM=(i,e,t)=>{const n=i.slots=b0();if(i.vnode.shapeFlag&32){const r=e._;r?(R0(n,e,t),t&&Hg(n,"_",r,!0)):w0(e,n)}else e&&C0(i,e)},AM=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=Ft;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:R0(r,e,t):(s=!e.$stable,w0(e,r)),o=e}else e&&(C0(i,e),o={default:1});if(s)for(const a in r)!jd(a)&&o[a]==null&&delete r[a]},Qn=DM;function wM(i){return CM(i)}function CM(i,e){const t=Du();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Gi,insertStaticContent:m}=i,g=(R,P,O,V=null,L=null,X=null,he=void 0,D=null,se=!!P.dynamicChildren)=>{if(R===P)return;R&&!Ea(R,P)&&(V=ie(R),Ne(R,L,X,!0),R=null),P.patchFlag===-2&&(se=!1,P.dynamicChildren=null);const{type:K,ref:ve,shapeFlag:Z}=P;switch(K){case Fu:p(R,P,O,V);break;case la:_(R,P,O,V);break;case zc:R==null&&x(P,O,V,he);break;case bn:B(R,P,O,V,L,X,he,D,se);break;default:Z&1?C(R,P,O,V,L,X,he,D,se):Z&6?ee(R,P,O,V,L,X,he,D,se):(Z&64||Z&128)&&K.process(R,P,O,V,L,X,he,D,se,be)}ve!=null&&L?Za(ve,R&&R.ref,X,P||R,!P):ve==null&&R&&R.ref!=null&&Za(R.ref,null,X,R,!0)},p=(R,P,O,V)=>{if(R==null)n(P.el=a(P.children),O,V);else{const L=P.el=R.el;P.children!==R.children&&c(L,P.children)}},_=(R,P,O,V)=>{R==null?n(P.el=l(P.children||""),O,V):P.el=R.el},x=(R,P,O,V)=>{[R.el,R.anchor]=m(R.children,P,O,V,R.el,R.anchor)},y=({el:R,anchor:P},O,V)=>{let L;for(;R&&R!==P;)L=f(R),n(R,O,V),R=L;n(P,O,V)},v=({el:R,anchor:P})=>{let O;for(;R&&R!==P;)O=f(R),r(R),R=O;r(P)},C=(R,P,O,V,L,X,he,D,se)=>{if(P.type==="svg"?he="svg":P.type==="math"&&(he="mathml"),R==null)T(P,O,V,L,X,he,D,se);else{const K=R.el&&R.el._isVueCE?R.el:null;try{K&&K._beginPatch(),A(R,P,L,X,he,D,se)}finally{K&&K._endPatch()}}},T=(R,P,O,V,L,X,he,D)=>{let se,K;const{props:ve,shapeFlag:Z,transition:Me,dirs:b}=R;if(se=R.el=o(R.type,X,ve&&ve.is,ve),Z&8?u(se,R.children):Z&16&&S(R.children,se,null,V,L,nf(R,X),he,D),b&&Ps(R,null,V,"created"),E(se,R,R.scopeId,he,V),ve){for(const H in ve)H!=="value"&&!qa(H)&&s(se,H,null,ve[H],X,V);"value"in ve&&s(se,"value",null,ve.value,X),(K=ve.onVnodeBeforeMount)&&ji(K,V,R)}b&&Ps(R,null,V,"beforeMount");const M=RM(L,Me);M&&Me.beforeEnter(se),n(se,P,O),((K=ve&&ve.onVnodeMounted)||M||b)&&Qn(()=>{try{K&&ji(K,V,R),M&&Me.enter(se),b&&Ps(R,null,V,"mounted")}finally{}},L)},E=(R,P,O,V,L)=>{if(O&&d(R,O),V)for(let X=0;X<V.length;X++)d(R,V[X]);if(L){let X=L.subTree;if(P===X||I0(X.type)&&(X.ssContent===P||X.ssFallback===P)){const he=L.vnode;E(R,he,he.scopeId,he.slotScopeIds,L.parent)}}},S=(R,P,O,V,L,X,he,D,se=0)=>{for(let K=se;K<R.length;K++){const ve=R[K]=D?Dr(R[K]):sr(R[K]);g(null,ve,P,O,V,L,X,he,D)}},A=(R,P,O,V,L,X,he)=>{const D=P.el=R.el;let{patchFlag:se,dynamicChildren:K,dirs:ve}=P;se|=R.patchFlag&16;const Z=R.props||Ft,Me=P.props||Ft;let b;if(O&&Ls(O,!1),(b=Me.onVnodeBeforeUpdate)&&ji(b,O,P,R),ve&&Ps(P,R,O,"beforeUpdate"),O&&Ls(O,!0),(Z.innerHTML&&Me.innerHTML==null||Z.textContent&&Me.textContent==null)&&u(D,""),K?I(R.dynamicChildren,K,D,O,V,nf(P,L),X):he||ne(R,P,D,null,O,V,nf(P,L),X,!1),se>0){if(se&16)N(D,Z,Me,O,L);else if(se&2&&Z.class!==Me.class&&s(D,"class",null,Me.class,L),se&4&&s(D,"style",Z.style,Me.style,L),se&8){const M=P.dynamicProps;for(let H=0;H<M.length;H++){const j=M[H],de=Z[j],ge=Me[j];(ge!==de||j==="value")&&s(D,j,de,ge,L,O)}}se&1&&R.children!==P.children&&u(D,P.children)}else!he&&K==null&&N(D,Z,Me,O,L);((b=Me.onVnodeUpdated)||ve)&&Qn(()=>{b&&ji(b,O,P,R),ve&&Ps(P,R,O,"updated")},V)},I=(R,P,O,V,L,X,he)=>{for(let D=0;D<P.length;D++){const se=R[D],K=P[D],ve=se.el&&(se.type===bn||!Ea(se,K)||se.shapeFlag&198)?h(se.el):O;g(se,K,ve,null,V,L,X,he,!0)}},N=(R,P,O,V,L)=>{if(P!==O){if(P!==Ft)for(const X in P)!qa(X)&&!(X in O)&&s(R,X,P[X],null,L,V);for(const X in O){if(qa(X))continue;const he=O[X],D=P[X];he!==D&&X!=="value"&&s(R,X,D,he,L,V)}"value"in O&&s(R,"value",P.value,O.value,L)}},B=(R,P,O,V,L,X,he,D,se)=>{const K=P.el=R?R.el:a(""),ve=P.anchor=R?R.anchor:a("");let{patchFlag:Z,dynamicChildren:Me,slotScopeIds:b}=P;b&&(D=D?D.concat(b):b),R==null?(n(K,O,V),n(ve,O,V),S(P.children||[],O,ve,L,X,he,D,se)):Z>0&&Z&64&&Me&&R.dynamicChildren&&R.dynamicChildren.length===Me.length?(I(R.dynamicChildren,Me,O,L,X,he,D),(P.key!=null||L&&P===L.subTree)&&P0(R,P,!0)):ne(R,P,O,ve,L,X,he,D,se)},ee=(R,P,O,V,L,X,he,D,se)=>{P.slotScopeIds=D,R==null?P.shapeFlag&512?L.ctx.activate(P,O,V,he,se):te(P,O,V,L,X,he,se):z(R,P,se)},te=(R,P,O,V,L,X,he)=>{const D=R.component=VM(R,V,L);if(m0(R)&&(D.ctx.renderer=be),GM(D,!1,he),D.asyncDep){if(L&&L.registerDep(D,Y,he),!R.el){const se=D.subTree=gs(la);_(null,se,P,O),R.placeholder=se.el}}else Y(D,R,P,O,L,X,he)},z=(R,P,O)=>{const V=P.component=R.component;if(vM(R,P,O))if(V.asyncDep&&!V.asyncResolved){F(V,P,O);return}else V.next=P,V.update();else P.el=R.el,V.vnode=P},Y=(R,P,O,V,L,X,he)=>{const D=()=>{if(R.isMounted){let{next:Z,bu:Me,u:b,parent:M,vnode:H}=R;{const J=D0(R);if(J){Z&&(Z.el=H.el,F(R,Z,he)),J.asyncDep.then(()=>{Qn(()=>{R.isUnmounted||K()},L)});return}}let j=Z,de;Ls(R,!1),Z?(Z.el=H.el,F(R,Z,he)):Z=H,Me&&qu(Me),(de=Z.props&&Z.props.onVnodeBeforeUpdate)&&ji(de,M,Z,H),Ls(R,!0);const ge=tf(R),le=R.subTree;R.subTree=ge,g(le,ge,h(le.el),ie(le),R,L,X),Z.el=ge.el,j===null&&SM(R,ge.el),b&&Qn(b,L),(de=Z.props&&Z.props.onVnodeUpdated)&&Qn(()=>ji(de,M,Z,H),L)}else{let Z;const{el:Me,props:b}=P,{bm:M,m:H,parent:j,root:de,type:ge}=R,le=Ja(P);if(Ls(R,!1),M&&qu(M),!le&&(Z=b&&b.onVnodeBeforeMount)&&ji(Z,j,P),Ls(R,!0),Me&&Ue){const J=()=>{R.subTree=tf(R),Ue(Me,R.subTree,R,L,null)};le&&ge.__asyncHydrate?ge.__asyncHydrate(Me,R,J):J()}else{de.ce&&de.ce._hasShadowRoot()&&de.ce._injectChildStyle(ge,R.parent?R.parent.type:void 0);const J=R.subTree=tf(R);g(null,J,O,V,R,L,X),P.el=J.el}if(H&&Qn(H,L),!le&&(Z=b&&b.onVnodeMounted)){const J=P;Qn(()=>ji(Z,j,J),L)}(P.shapeFlag&256||j&&Ja(j.vnode)&&j.vnode.shapeFlag&256)&&R.a&&Qn(R.a,L),R.isMounted=!0,P=O=V=null}};R.scope.on();const se=R.effect=new Yg(D);R.scope.off();const K=R.update=se.run.bind(se),ve=R.job=se.runIfDirty.bind(se);ve.i=R,ve.id=R.uid,se.scheduler=()=>$d(ve),Ls(R,!0),K()},F=(R,P,O)=>{P.component=R;const V=R.vnode.props;R.vnode=P,R.next=null,yM(R,P.props,V,O),AM(R,P.children,O),Hr(),om(R),Gr()},ne=(R,P,O,V,L,X,he,D,se=!1)=>{const K=R&&R.children,ve=R?R.shapeFlag:0,Z=P.children,{patchFlag:Me,shapeFlag:b}=P;if(Me>0){if(Me&128){U(K,Z,O,V,L,X,he,D,se);return}else if(Me&256){me(K,Z,O,V,L,X,he,D,se);return}}b&8?(ve&16&&W(K,L,X),Z!==K&&u(O,Z)):ve&16?b&16?U(K,Z,O,V,L,X,he,D,se):W(K,L,X,!0):(ve&8&&u(O,""),b&16&&S(Z,O,V,L,X,he,D,se))},me=(R,P,O,V,L,X,he,D,se)=>{R=R||qo,P=P||qo;const K=R.length,ve=P.length,Z=Math.min(K,ve);let Me;for(Me=0;Me<Z;Me++){const b=P[Me]=se?Dr(P[Me]):sr(P[Me]);g(R[Me],b,O,null,L,X,he,D,se)}K>ve?W(R,L,X,!0,!1,Z):S(P,O,V,L,X,he,D,se,Z)},U=(R,P,O,V,L,X,he,D,se)=>{let K=0;const ve=P.length;let Z=R.length-1,Me=ve-1;for(;K<=Z&&K<=Me;){const b=R[K],M=P[K]=se?Dr(P[K]):sr(P[K]);if(Ea(b,M))g(b,M,O,null,L,X,he,D,se);else break;K++}for(;K<=Z&&K<=Me;){const b=R[Z],M=P[Me]=se?Dr(P[Me]):sr(P[Me]);if(Ea(b,M))g(b,M,O,null,L,X,he,D,se);else break;Z--,Me--}if(K>Z){if(K<=Me){const b=Me+1,M=b<ve?P[b].el:V;for(;K<=Me;)g(null,P[K]=se?Dr(P[K]):sr(P[K]),O,M,L,X,he,D,se),K++}}else if(K>Me)for(;K<=Z;)Ne(R[K],L,X,!0),K++;else{const b=K,M=K,H=new Map;for(K=M;K<=Me;K++){const Ie=P[K]=se?Dr(P[K]):sr(P[K]);Ie.key!=null&&H.set(Ie.key,K)}let j,de=0;const ge=Me-M+1;let le=!1,J=0;const ce=new Array(ge);for(K=0;K<ge;K++)ce[K]=0;for(K=b;K<=Z;K++){const Ie=R[K];if(de>=ge){Ne(Ie,L,X,!0);continue}let Te;if(Ie.key!=null)Te=H.get(Ie.key);else for(j=M;j<=Me;j++)if(ce[j-M]===0&&Ea(Ie,P[j])){Te=j;break}Te===void 0?Ne(Ie,L,X,!0):(ce[Te-M]=K+1,Te>=J?J=Te:le=!0,g(Ie,P[Te],O,null,L,X,he,D,se),de++)}const De=le?PM(ce):qo;for(j=De.length-1,K=ge-1;K>=0;K--){const Ie=M+K,Te=P[Ie],Re=P[Ie+1],xe=Ie+1<ve?Re.el||L0(Re):V;ce[K]===0?g(null,Te,O,xe,L,X,he,D,se):le&&(j<0||K!==De[j]?Ae(Te,O,xe,2):j--)}}},Ae=(R,P,O,V,L=null)=>{const{el:X,type:he,transition:D,children:se,shapeFlag:K}=R;if(K&6){Ae(R.component.subTree,P,O,V);return}if(K&128){R.suspense.move(P,O,V);return}if(K&64){he.move(R,P,O,be);return}if(he===bn){n(X,P,O);for(let Z=0;Z<se.length;Z++)Ae(se[Z],P,O,V);n(R.anchor,P,O);return}if(he===zc){y(R,P,O);return}if(V!==2&&K&1&&D)if(V===0)D.persisted&&!X[Qu]?n(X,P,O):(D.beforeEnter(X),n(X,P,O),Qn(()=>D.enter(X),L));else{const{leave:Z,delayLeave:Me,afterLeave:b}=D,M=()=>{R.ctx.isUnmounted?r(X):n(X,P,O)},H=()=>{const j=X._isLeaving||!!X[Qu];X._isLeaving&&X[Qu](!0),D.persisted&&!j?M():Z(X,()=>{M(),b&&b()})};Me?Me(X,M,H):H()}else n(X,P,O)},Ne=(R,P,O,V=!1,L=!1)=>{const{type:X,props:he,ref:D,children:se,dynamicChildren:K,shapeFlag:ve,patchFlag:Z,dirs:Me,cacheIndex:b,memo:M}=R;if(Z===-2&&(L=!1),D!=null&&(Hr(),Za(D,null,O,R,!0),Gr()),b!=null&&(P.renderCache[b]=void 0),ve&256){P.ctx.deactivate(R);return}const H=ve&1&&Me,j=!Ja(R);let de;if(j&&(de=he&&he.onVnodeBeforeUnmount)&&ji(de,P,R),ve&6)q(R.component,O,V);else{if(ve&128){R.suspense.unmount(O,V);return}H&&Ps(R,null,P,"beforeUnmount"),ve&64?R.type.remove(R,P,O,be,V):K&&!K.hasOnce&&(X!==bn||Z>0&&Z&64)?W(K,P,O,!1,!0):(X===bn&&Z&384||!L&&ve&16)&&W(se,P,O),V&&ue(R)}const ge=M!=null&&b==null;(j&&(de=he&&he.onVnodeUnmounted)||H||ge)&&Qn(()=>{de&&ji(de,P,R),H&&Ps(R,null,P,"unmounted"),ge&&(R.el=null)},O)},ue=R=>{const{type:P,el:O,anchor:V,transition:L}=R;if(P===bn){fe(O,V);return}if(P===zc){v(R);return}const X=()=>{r(O),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(R.shapeFlag&1&&L&&!L.persisted){const{leave:he,delayLeave:D}=L,se=()=>he(O,X);D?D(R.el,X,se):se()}else X()},fe=(R,P)=>{let O;for(;R!==P;)O=f(R),r(R),R=O;r(P)},q=(R,P,O)=>{const{bum:V,scope:L,job:X,subTree:he,um:D,m:se,a:K}=R;mm(se),mm(K),V&&qu(V),L.stop(),X&&(X.flags|=8,Ne(he,R,P,O)),D&&Qn(D,P),Qn(()=>{R.isUnmounted=!0},P)},W=(R,P,O,V=!1,L=!1,X=0)=>{for(let he=X;he<R.length;he++)Ne(R[he],P,O,V,L)},ie=R=>{if(R.shapeFlag&6)return ie(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const P=f(R.anchor||R.el),O=P&&P[YS];return O?f(O):P};let oe=!1;const ye=(R,P,O)=>{let V;R==null?P._vnode&&(Ne(P._vnode,null,null,!0),V=P._vnode.component):g(P._vnode||null,R,P,null,null,null,O),P._vnode=R,oe||(oe=!0,om(V),c0(),oe=!1)},be={p:g,um:Ne,m:Ae,r:ue,mt:te,mc:S,pc:ne,pbc:I,n:ie,o:i};let _e,Ue;return e&&([_e,Ue]=e(be)),{render:ye,hydrate:_e,createApp:dM(ye,_e)}}function nf({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ls({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function RM(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function P0(i,e,t=!1){const n=i.children,r=e.children;if(tt(n)&&tt(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Dr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&P0(o,a)),a.type===Fu&&(a.patchFlag===-1&&(a=r[s]=Dr(a)),a.el=o.el),a.type===la&&!a.el&&(a.el=o.el)}}function PM(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function D0(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:D0(e)}function mm(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}function L0(i){if(i.placeholder)return i.placeholder;const e=i.component;return e?L0(e.subTree):null}const I0=i=>i.__isSuspense;function DM(i,e){e&&e.pendingBranch?tt(i)?e.effects.push(...i):e.effects.push(i):kS(i)}const bn=Symbol.for("v-fgt"),Fu=Symbol.for("v-txt"),la=Symbol.for("v-cmt"),zc=Symbol.for("v-stc"),Qa=[];let Mi=null;function Zi(i=!1){Qa.push(Mi=i?null:[])}function LM(){Qa.pop(),Mi=Qa[Qa.length-1]||null}let vl=1;function _m(i,e=!1){vl+=i,i<0&&Mi&&e&&(Mi.hasOnce=!0)}function IM(i){return i.dynamicChildren=vl>0?Mi||qo:null,LM(),vl>0&&Mi&&Mi.push(i),i}function Ji(i,e,t,n,r,s){return IM(qe(i,e,t,n,r,s,!0))}function N0(i){return i?i.__v_isVNode===!0:!1}function Ea(i,e){return i.type===e.type&&i.key===e.key}const U0=({key:i})=>i??null,kc=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?$t(i)||Bn(i)||st(i)?{i:cr,r:i,k:e,f:!!t}:i:null);function qe(i,e=null,t=null,n=0,r=null,s=i===bn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&U0(e),ref:e&&kc(e),scopeId:f0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:cr};return a?(ep(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=$t(t)?8:16),vl>0&&!o&&Mi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Mi.push(l),l}const gs=NM;function NM(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===sM)&&(i=la),N0(i)){const a=ca(i,e,!0);return t&&ep(a,t),vl>0&&!s&&Mi&&(a.shapeFlag&6?Mi[Mi.indexOf(i)]=a:Mi.push(a)),a.patchFlag=-2,a}if(qM(i)&&(i=i.__vccOpts),e){e=UM(e);let{class:a,style:l}=e;a&&!$t(a)&&(e.class=Ys(a)),Tt(l)&&(qd(l)&&!tt(l)&&(l=vn({},l)),e.style=ml(l))}const o=$t(i)?1:I0(i)?128:qS(i)?64:Tt(i)?4:st(i)?2:0;return qe(i,e,t,n,r,o,s,!0)}function UM(i){return i?qd(i)||E0(i)?vn({},i):i:null}function ca(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?BM(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&U0(c),ref:e&&e.ref?t&&s?tt(s)?s.concat(kc(e)):[s,kc(e)]:kc(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==bn?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&ca(i.ssContent),ssFallback:i.ssFallback&&ca(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&Kd(u,l.clone(u)),u}function FM(i=" ",e=0){return gs(Fu,null,i,e)}function OM(i,e){const t=gs(zc,null,i);return t.staticCount=e,t}function sr(i){return i==null||typeof i=="boolean"?gs(la):tt(i)?gs(bn,null,i.slice()):N0(i)?Dr(i):gs(Fu,null,String(i))}function Dr(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:ca(i)}function ep(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(tt(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),ep(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!E0(e)?e._ctx=cr:r===3&&cr&&(cr.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else st(e)?(e={default:e,_ctx:cr},t=32):(e=String(e),n&64?(t=16,e=[FM(e)]):t=8);i.children=e,i.shapeFlag|=t}function BM(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Ys([e.class,n.class]));else if(r==="style")e.style=ml([e.style,n.style]);else if(Cu(r)){const s=e[r],o=n[r];o&&s!==o&&!(tt(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Ru(r)&&(e[r]=o)}else r!==""&&(e[r]=n[r])}return e}function ji(i,e,t,n=null){$i(i,e,7,[t,n])}const zM=v0();let kM=0;function VM(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||zM,s={uid:kM++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lS(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:A0(n,r),emitsOptions:S0(n,r),emit:null,emitted:null,propsDefaults:Ft,inheritAttrs:n.inheritAttrs,ctx:Ft,data:Ft,props:Ft,attrs:Ft,slots:Ft,refs:Ft,setupState:Ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=mM.bind(null,s),i.ce&&i.ce(s),s}let Jn=null;const HM=()=>Jn||cr;let au,dh;{const i=Du(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};au=e("__VUE_INSTANCE_SETTERS__",t=>Jn=t),dh=e("__VUE_SSR_SETTERS__",t=>Sl=t)}const kl=i=>{const e=Jn;return au(i),i.scope.on(),()=>{i.scope.off(),au(e)}},gm=()=>{Jn&&Jn.scope.off(),au(null)};function F0(i){return i.vnode.shapeFlag&4}let Sl=!1;function GM(i,e=!1,t=!1){e&&dh(e);const{props:n,children:r}=i.vnode,s=F0(i);MM(i,n,s,e),TM(i,r,t||e);const o=s?WM(i,e):void 0;return e&&dh(!1),o}function WM(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,oM);const{setup:n}=t;if(n){Hr();const r=i.setupContext=n.length>1?YM(i):null,s=kl(i),o=zl(n,i,0,[i.props,r]),a=Bg(o);if(Gr(),s(),(a||i.sp)&&!Ja(i)&&p0(i),a){if(o.then(gm,gm),e)return o.then(l=>{xm(i,l,e)}).catch(l=>{Iu(l,i,0)});i.asyncDep=o}else xm(i,o,e)}else O0(i,e)}function xm(i,e,t){st(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Tt(e)&&(i.setupState=o0(e)),O0(i,t)}let vm;function O0(i,e,t){const n=i.type;if(!i.render){if(!e&&vm&&!n.render){const r=n.template||Jd(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=vn(vn({isCustomElement:s,delimiters:a},o),l);n.render=vm(r,c)}}i.render=n.render||Gi}{const r=kl(i);Hr();try{aM(i)}finally{Gr(),r()}}}const XM={get(i,e){return Nn(i,"get",""),i[e]}};function YM(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,XM),slots:i.slots,emit:i.emit,expose:e}}function tp(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(o0(CS(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in ja)return ja[t](i)},has(e,t){return t in e||t in ja}})):i.proxy}function qM(i){return st(i)&&"__vccOpts"in i}const $M=(i,e)=>NS(i,e,Sl),KM="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ph;const Sm=typeof window<"u"&&window.trustedTypes;if(Sm)try{ph=Sm.createPolicy("vue",{createHTML:i=>i})}catch{}const B0=ph?i=>ph.createHTML(i):i=>i,ZM="http://www.w3.org/2000/svg",JM="http://www.w3.org/1998/Math/MathML",Rr=typeof document<"u"?document:null,Mm=Rr&&Rr.createElement("template"),jM={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?Rr.createElementNS(ZM,i):e==="mathml"?Rr.createElementNS(JM,i):t?Rr.createElement(i,{is:t}):Rr.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Rr.createTextNode(i),createComment:i=>Rr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Rr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Mm.innerHTML=B0(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=Mm.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},QM=Symbol("_vtc");function ey(i,e,t){const n=i[QM];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const ym=Symbol("_vod"),ty=Symbol("_vsh"),ny=Symbol(""),iy=/(?:^|;)\s*display\s*:/;function ry(i,e,t){const n=i.style,r=$t(t);let s=!1;if(t&&!r){if(e)if($t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Fa(n,a,"")}else for(const o in e)t[o]==null&&Fa(n,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?oy(i,o,!$t(e)&&e?e[o]:void 0,a)||Fa(n,o,a):Fa(n,o,"")}}else if(r){if(e!==t){const o=n[ny];o&&(t+=";"+o),n.cssText=t,s=iy.test(t)}}else e&&i.removeAttribute("style");ym in i&&(i[ym]=s?n.display:"",i[ty]&&(n.display="none"))}const bm=/\s*!important$/;function Fa(i,e,t){if(tt(t))t.forEach(n=>Fa(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=sy(i,e);bm.test(t)?i.setProperty(ws(n),t.replace(bm,""),"important"):i[n]=t}}const Em=["Webkit","Moz","ms"],rf={};function sy(i,e){const t=rf[e];if(t)return t;let n=Wi(e);if(n!=="filter"&&n in i)return rf[e]=n;n=Vg(n);for(let r=0;r<Em.length;r++){const s=Em[r]+n;if(s in i)return rf[e]=s}return e}function oy(i,e,t,n){return i.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&$t(n)&&t===n}const Tm="http://www.w3.org/1999/xlink";function Am(i,e,t,n,r,s=oS(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Tm,e.slice(6,e.length)):i.setAttributeNS(Tm,e,t):t==null||s&&!Gg(t)?i.removeAttribute(e):i.setAttribute(e,s?"":gr(t)?String(t):t)}function wm(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?B0(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=Gg(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(r||e)}function ay(i,e,t,n){i.addEventListener(e,t,n)}function ly(i,e,t,n){i.removeEventListener(e,t,n)}const Cm=Symbol("_vei");function cy(i,e,t,n,r=null){const s=i[Cm]||(i[Cm]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=uy(e);if(n){const c=s[e]=dy(n,r);ay(i,a,c,l)}else o&&(ly(i,a,o,l),s[e]=void 0)}}const Rm=/(?:Once|Passive|Capture)$/;function uy(i){let e;if(Rm.test(i)){e={};let n;for(;n=i.match(Rm);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):ws(i.slice(2)),e]}let sf=0;const fy=Promise.resolve(),hy=()=>sf||(fy.then(()=>sf=0),sf=Date.now());function dy(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;const r=t.value;if(tt(r)){const s=n.stopImmediatePropagation;n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0};const o=r.slice(),a=[n];for(let l=0;l<o.length&&!n._stopped;l++){const c=o[l];c&&$i(c,e,5,a)}}else $i(r,e,5,[n])};return t.value=i,t.attached=hy(),t}const Pm=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,py=(i,e,t,n,r,s)=>{const o=r==="svg";e==="class"?ey(i,n,o):e==="style"?ry(i,t,n):Cu(e)?Ru(e)||cy(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):my(i,e,n,o))?(wm(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Am(i,e,n,o,s,e!=="value")):i._isVueCE&&(_y(i,e)||i._def.__asyncLoader&&(/[A-Z]/.test(e)||!$t(n)))?wm(i,Wi(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Am(i,e,n,o))};function my(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&Pm(e)&&st(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&i.tagName==="IFRAME"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Pm(e)&&$t(t)?!1:e in i}function _y(i,e){const t=i._def.props;if(!t)return!1;const n=Wi(e);return Array.isArray(t)?t.some(r=>Wi(r)===n):Object.keys(t).some(r=>Wi(r)===n)}const gy=["ctrl","shift","alt","meta"],xy={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,e)=>gy.some(t=>i[`${t}Key`]&&!e.includes(t))},Dm=(i,e)=>{if(!i)return i;const t=i._withMods||(i._withMods={}),n=e.join(".");return t[n]||(t[n]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=xy[e[o]];if(a&&a(r,e))return}return i(r,...s)})},vy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Lm=(i,e)=>{const t=i._withKeys||(i._withKeys={}),n=e.join(".");return t[n]||(t[n]=r=>{if(!("key"in r))return;const s=ws(r.key);if(e.some(o=>o===s||vy[o]===s))return i(r)})},Sy=vn({patchProp:py},jM);let Im;function My(){return Im||(Im=wM(Sy))}const yy=(...i)=>{const e=My().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Ey(n);if(!r)return;const s=e._component;!st(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,by(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function by(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Ey(i){return $t(i)?document.querySelector(i):i}function Pr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function z0(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ml={duration:.5,overwrite:!1,delay:0},np,An,kt,Ni=1e8,Pt=1/Ni,mh=Math.PI*2,Ty=mh/4,Ay=0,k0=Math.sqrt,wy=Math.cos,Cy=Math.sin,Sn=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},Xr=function(e){return typeof e=="number"},ip=function(e){return typeof e>"u"},xr=function(e){return typeof e=="object"},ii=function(e){return e!==!1},rp=function(){return typeof window<"u"},$l=function(e){return qt(e)||Sn(e)},V0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zn=Array.isArray,Ry=/random\([^)]+\)/g,Py=/,\s*/g,Nm=/(?:-?\.?\d|\.)+/gi,H0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Go=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,of=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,G0=/[+-]=-?[.\d]+/,Dy=/[^,'"\[\]\s]+/gi,Ly=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,nr,_h,sp,Ti={},lu={},W0,X0=function(e){return(lu=ua(e,Ti))&&li},op=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},yl=function(e,t){return!t&&console.warn(e)},Y0=function(e,t){return e&&(Ti[e]=t)&&lu&&(lu[e]=t)||Ti},bl=function(){return 0},Iy={suppressEvents:!0,isStart:!0,kill:!1},Vc={suppressEvents:!0,kill:!1},Ny={suppressEvents:!0},ap={},xs=[],gh={},q0,mi={},af={},Um=30,Hc=[],lp="",cp=function(e){var t=e[0],n,r;if(xr(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Hc.length;r--&&!Hc[r].targetTest(t););n=Hc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new mx(e[r],n)))||e.splice(r,1);return e},Qs=function(e){return e._gsap||cp(Ui(e))[0]._gsap},$0=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():ip(n)&&e.getAttribute&&e.getAttribute(t)||n},ri=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},Vt=function(e){return Math.round(e*1e7)/1e7||0},Jo=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Uy=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},cu=function(){var e=xs.length,t=xs.slice(0),n,r;for(gh={},xs.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},up=function(e){return!!(e._initted||e._startAt||e.add)},K0=function(e,t,n,r){xs.length&&!An&&cu(),e.render(t,n,r||!!(An&&t<0&&up(e))),xs.length&&!An&&cu()},Z0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Dy).length<2?t:Sn(e)?e.trim():e},J0=function(e){return e},Ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Fy=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ua=function(e,t){for(var n in t)e[n]=t[n];return e},Fm=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xr(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},uu=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},el=function(e){var t=e.parent||Ht,n=e.keyframes?Fy(zn(e.keyframes)):Ai;if(ii(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Oy=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},j0=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ou=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ms=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},eo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},By=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xh=function(e,t,n,r){return e._startAt&&(An?e._startAt.revert(Vc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},zy=function i(e){return!e||e._ts&&i(e.parent)},Om=function(e){return e._repeat?fa(e._tTime,e=e.duration()+e._rDelay)*e:0},fa=function(e,t){var n=Math.floor(e=Vt(e/t));return e&&n===e?n-1:n},fu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bu=function(e){return e._end=Vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},zu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Vt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bu(e),n._dirty||eo(n,e)),e},Q0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=fu(e.rawTime(),t),(!t._dur||Vl(0,t.totalDuration(),n)-t._tTime>Pt)&&t.render(n,!0)),eo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pt}},lr=function(e,t,n,r){return t.parent&&Ms(t),t._start=Vt((Xr(n)?n:n||e!==Ht?Pi(e,n,t):e._time)+t._delay),t._end=Vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),j0(e,t,"_first","_last",e._sort?"_start":0),vh(t)||(e._recent=t),r||Q0(e,t),e._ts<0&&zu(e,e._tTime),e},ex=function(e,t){return(Ti.ScrollTrigger||op("scrollTrigger",t))&&Ti.ScrollTrigger.create(t,e)},tx=function(e,t,n,r,s){if(hp(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&q0!==xi.frame)return xs.push(e),e._lazy=[s,r],1},ky=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},vh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Vy=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&ky(e)&&!(!e._initted&&vh(e))||(e._ts<0||e._dp._ts<0)&&!vh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Vl(0,e._tDur,t),u=fa(l,a),e._yoyo&&u&1&&(o=1-o),u!==fa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||An||r||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&tx(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?Pt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&xh(e,t,n,!0),e._onUpdate&&!n&&yi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ms(e,1),!n&&!An&&(yi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Hy=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ha=function(e,t,n,r){var s=e._repeat,o=Vt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Vt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&zu(e,e._tTime=e._tDur*a),e.parent&&Bu(e),n||eo(e.parent,e),e},Bm=function(e){return e instanceof ni?eo(e):ha(e,e._dur)},Gy={_start:0,endTime:bl,totalDuration:bl},Pi=function i(e,t,n){var r=e.labels,s=e._recent||Gy,o=e.duration()>=Ni?s.endTime(!1):e._dur,a,l,c;return Sn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(zn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},tl=function(e,t,n){var r=Xr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ii(l.vars.inherit)&&l.parent;o.immediateRender=ii(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new sn(t[0],o,t[s+1])},Cs=function(e,t){return e||e===0?t(e):t},Vl=function(e,t,n){return n<e?e:n>t?t:n},Un=function(e,t){return!Sn(e)||!(t=Ly.exec(e))?"":t[1]},Wy=function(e,t,n){return Cs(n,function(r){return Vl(e,t,r)})},Sh=[].slice,nx=function(e,t){return e&&xr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&xr(e[0]))&&!e.nodeType&&e!==nr},Xy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Sn(r)&&!t||nx(r,1)?(s=n).push.apply(s,Ui(r)):n.push(r)})||n},Ui=function(e,t,n){return kt&&!t&&kt.selector?kt.selector(e):Sn(e)&&!n&&(_h||!da())?Sh.call((t||sp).querySelectorAll(e),0):zn(e)?Xy(e,n):nx(e)?Sh.call(e,0):e?[e]:[]},Mh=function(e){return e=Ui(e)[0]||yl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ui(t,n.querySelectorAll?n:n===e?yl("Invalid scope")||sp.createElement("div"):e)}},ix=function(e){return e.sort(function(){return .5-Math.random()})},rx=function(e){if(qt(e))return e;var t=xr(e)?e:{each:e},n=to(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return Sn(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,m){var g=(m||t).length,p=o[g],_,x,y,v,C,T,E,S,A;if(!p){if(A=t.grid==="auto"?0:(t.grid||[1,Ni])[1],!A){for(E=-Ni;E<(E=m[A++].getBoundingClientRect().left)&&A<g;);A<g&&A--}for(p=o[g]=[],_=l?Math.min(A,g)*u-.5:r%A,x=A===Ni?0:l?g*h/A-.5:r/A|0,E=0,S=Ni,T=0;T<g;T++)y=T%A-_,v=x-(T/A|0),p[T]=C=c?Math.abs(c==="y"?v:y):k0(y*y+v*v),C>E&&(E=C),C<S&&(S=C);r==="random"&&ix(p),p.max=E-S,p.min=S,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(A>g?g-1:c?c==="y"?g/A:A:Math.max(A,g/A))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Un(t.amount||t.each)||0,n=n&&g<0?rb(n):n}return g=(p[f]-p.min)/p.max||0,Vt(p.b+(n?n(g):g)*p.v)+p.u}},yh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Vt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Xr(n)?0:Un(n))}},sx=function(e,t){var n=zn(e),r,s;return!n&&xr(e)&&(r=n=e.radius||Ni,e.values?(e=Ui(e.values),(s=!Xr(e[0]))&&(r*=r)):e=yh(e.increment)),Cs(t,n?qt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ni,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||Xr(o)?u:u+Un(o)}:yh(e))},ox=function(e,t,n,r){return Cs(zn(e)?!t:n===!0?!!(n=0):!r,function(){return zn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Yy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},qy=function(e,t){return function(n){return e(parseFloat(n))+(t||Un(n))}},$y=function(e,t,n){return lx(e,t,0,1,n)},ax=function(e,t,n){return Cs(n,function(r){return e[~~t(r)]})},Ky=function i(e,t,n){var r=t-e;return zn(e)?ax(e,i(0,e.length),t):Cs(n,function(s){return(r+(s-e)%r)%r+e})},Zy=function i(e,t,n){var r=t-e,s=r*2;return zn(e)?ax(e,i(0,e.length-1),t):Cs(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},El=function(e){return e.replace(Ry,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Py);return ox(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},lx=function(e,t,n,r,s){var o=t-e,a=r-n;return Cs(s,function(l){return n+((l-e)/o*a||0)})},Jy=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Sn(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(zn(e)&&!zn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(m){m*=h;var g=Math.min(f,~~m);return u[g](m-g)},n=t}else r||(e=ua(zn(e)?[]:{},e));if(!u){for(l in t)fp.call(a,e,l,"get",t[l]);s=function(m){return mp(m,a)||(o?e.p:e)}}}return Cs(n,s)},zm=function(e,t,n){var r=e.labels,s=Ni,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yi=function(e,t,n){var r=e.vars,s=r[t],o=kt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&xs.length&&cu(),a&&(kt=a),u=l?s.apply(c,l):s.call(c),kt=o,u},Oa=function(e){return Ms(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&yi(e,"onInterrupt"),e},Wo,cx=[],ux=function(e){if(e)if(e=!e.name&&e.default||e,rp()||e.headless){var t=e.name,n=qt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:bl,render:mp,add:fp,kill:pb,modifier:db,rawVars:0},o={targetTest:0,get:0,getSetter:pp,aliases:{},register:0};if(da(),e!==r){if(mi[t])return;Ai(r,Ai(uu(e,s),o)),ua(r.prototype,ua(s,uu(e,o))),mi[r.prop=t]=r,e.targetTest&&(Hc.push(r),ap[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Y0(t,r),e.register&&e.register(li,r,si)}else cx.push(e)},Rt=255,Ba={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},lf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Rt+.5|0},fx=function(e,t,n){var r=e?Xr(e)?[e>>16,e>>8&Rt,e&Rt]:0:Ba.black,s,o,a,l,c,u,h,f,d,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ba[e])r=Ba[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(Nm),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=lf(l+1/3,s,o),r[1]=lf(l,s,o),r[2]=lf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(H0),n&&r.length<4&&(r[3]=1),r}else r=e.match(Nm)||Ba.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/Rt,o=r[1]/Rt,a=r[2]/Rt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},hx=function(e){var t=[],n=[],r=-1;return e.split(vs).forEach(function(s){var o=s.match(Go)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},km=function(e,t,n){var r="",s=(e+r).match(vs),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=fx(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=hx(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(vs,"1").split(Go),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(vs),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},vs=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ba)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),jy=/hsl[a]?\(/,dx=function(e){var t=e.join(" "),n;if(vs.lastIndex=0,vs.test(t))return n=jy.test(t),e[1]=km(e[1],n),e[0]=km(e[0],n,hx(e[1])),!0},Tl,xi=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,m=function g(p){var _=i()-r,x=p===!0,y,v,C,T;if((_>e||_<0)&&(n+=_-t),r+=_,C=r-n,y=C-o,(y>0||x)&&(T=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,o+=y+(y>=s?4:s-y),v=1),x||(l=c(g)),v)for(d=0;d<a.length;d++)a[d](C,f,T,p)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){W0&&(!_h&&rp()&&(nr=_h=window,sp=nr.document||{},Ti.gsap=li,(nr.gsapVersions||(nr.gsapVersions=[])).push(li.version),X0(lu||nr.GreenSockGlobals||!nr.gsap&&nr||{}),cx.forEach(ux)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Tl=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Tl=0,c=bl},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,_,x){var y=_?function(v,C,T,E){p(v,C,T,E),h.remove(y)}:p;return h.remove(p),a[x?"unshift":"push"](y),da(),y},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&d>=_&&d--},_listeners:a},h}(),da=function(){return!Tl&&xi.wake()},_t={},Qy=/^[\d.\-M][\d.\-,\s]/,eb=/["']/g,tb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(eb,"").trim():+c,r=l.substr(a+1).trim();return t},nb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},ib=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[tb(t[1])]:nb(e).split(",").map(Z0)):_t._CE&&Qy.test(e)?_t._CE("",e):n},rb=function(e){return function(t){return 1-e(1-t)}},to=function(e,t){return e&&(qt(e)?e:_t[e]||ib(e))||t},ho=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return ri(e,function(a){_t[a]=Ti[a]=s,_t[o=a.toLowerCase()]=n;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},px=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},cf=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/mh*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Cy((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:px(a);return s=mh/s,l.config=function(c,u){return i(e,c,u)},l},uf=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:px(n);return r.config=function(s){return i(e,s)},r};ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;ho(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;ho("Elastic",cf("in"),cf("out"),cf());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};ho("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ho("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});ho("Circ",function(i){return-(k0(1-i*i)-1)});ho("Sine",function(i){return i===1?1:-wy(i*Ty)+1});ho("Back",uf("in"),uf("out"),uf());_t.SteppedEase=_t.steps=Ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Pt;return function(a){return((r*Vl(0,o,a)|0)+s)*n}}};Ml.ease=_t["quad.out"];ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return lp+=i+","+i+"Params,"});var mx=function(e,t){this.id=Ay++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$0,this.set=t?t.getSetter:pp},Al=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ha(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),Tl||xi.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ha(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(da(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(zu(this,n),!s._dp||s.parent||Q0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&lr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),K0(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Om(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Om(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?fa(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?fu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pt?0:this._rts,this.totalTime(Vl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Bu(this),By(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(da(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Vt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&lr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ii(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fu(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ny);var r=An;return An=n,up(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),An=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Bm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Pi(this,n),ii(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,ii(r)),this._dur||(this._zTime=-Pt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Pt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=qt(n)?n:J0,l=function(){var u=r.then;r.then=null,s&&s(),qt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Oa(this)},i}();Ai(Al.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var ni=function(i){z0(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ii(n.sortChildren),Ht&&lr(n.parent||Ht,Pr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ex(Pr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return tl(0,arguments,this),this},t.from=function(r,s,o){return tl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return tl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,el(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new sn(r,s,Pi(this,o),1),this},t.call=function(r,s,o){return lr(this,sn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new sn(r,o,Pi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,el(o).immediateRender=ii(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,el(a).immediateRender=ii(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Vt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,m,g,p,_,x,y,v,C,T,E;if(this!==Ht&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,v=this._start,y=this._ts,_=!y,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=Vt(u%p),u===l?(g=this._repeat,f=c):(C=Vt(u/p),g=~~C,g&&g===C&&(f=c,g--),f>c&&(f=c)),C=fa(this._tTime,p),!a&&this._tTime&&C!==g&&this._tTime-C*p-this._dur<=0&&(C=g),T&&g&1&&(f=c-f,E=1),g!==C&&!this._lock){var S=T&&C&1,A=S===(T&&g&1);if(g<C&&(S=!S),a=S?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Vt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,A&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Hy(this,Vt(a),Vt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!C&&(yi(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!_){x=0,m&&(u+=this._zTime=-Pt);break}}d=m}else{d=this._last;for(var I=r<0?r:f;d;){if(m=d._prev,(d._act||I<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(I-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(I-d._start)*d._ts,s,o||An&&up(d)),f!==this._time||!this._ts&&!_){x=0,m&&(u+=this._zTime=I?-Pt:Pt);break}}d=m}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-Pt)._zTime=f>=a?1:-1,this._ts))return this._start=v,Bu(this),this.render(r,s,o);this._onUpdate&&!s&&yi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ms(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(yi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Xr(s)||(s=Pi(this,s,r)),!(r instanceof Al)){if(zn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Sn(r))return this.addLabel(r,s);if(qt(r))r=sn.delayedCall(0,r);else return this}return this!==r?lr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof sn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Sn(r)?this.removeLabel(r):qt(r)?this.killTweensOf(r):(r.parent===this&&Ou(this,r),r===this._recent&&(this._recent=this._last),eo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vt(xi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Pi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=sn.delayedCall(0,s||bl,o);return a.data="isPause",this._hasPause=1,lr(this,a,Pi(this,r))},t.removePause=function(r){var s=this._first;for(r=Pi(this,r);s;)s._start===r&&s.data==="isPause"&&Ms(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)us!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Ui(r),l=this._first,c=Xr(s),u;l;)l instanceof sn?Uy(l._targets,a)&&(c?(!us||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Pi(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=sn.to(o,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&ha(m,p,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ai({startAt:{time:Pi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),zm(this,Pi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),zm(this,Pi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Vt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return eo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),eo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ni,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,lr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Vt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ha(o,o===Ht&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ht._ts&&(K0(Ht,fu(r,Ht)),q0=xi.frame),xi.frame>=Um){Um+=Ei.autoSleep||120;var s=Ht._first;if((!s||!s._ts)&&Ei.autoSleep&&xi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xi.sleep()}}},e}(Al);Ai(ni.prototype,{_lock:0,_hasPause:0,_forcing:0});var sb=function(e,t,n,r,s,o,a){var l=new si(this._pt,e,t,0,1,Mx,null,s),c=0,u=0,h,f,d,m,g,p,_,x;for(l.b=n,l.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=El(r)),o&&(x=[n,r],o(x,e,t),n=x[0],r=x[1]),f=n.match(of)||[];h=of.exec(r);)m=h[0],g=r.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:m.charAt(1)==="="?Jo(p,m)-p:parseFloat(m)-p,m:d&&d<4?Math.round:0},c=of.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(G0.test(r)||_)&&(l.e=0),this._pt=l,l},fp=function(e,t,n,r,s,o,a,l,c,u){qt(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:qt(h)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=qt(h)?c?ub:vx:dp,m;if(Sn(r)&&(~r.indexOf("random(")&&(r=El(r)),r.charAt(1)==="="&&(m=Jo(f,r)+(Un(f)||0),(m||m===0)&&(r=m))),!u||f!==r||bh)return!isNaN(f*r)&&r!==""?(m=new si(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?hb:Sx,0,d),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&op(t,r),sb.call(this,e,t,f,r,d,l||Ei.stringFilter,c))},ob=function(e,t,n,r,s){if(qt(e)&&(e=nl(e,s,t,n,r)),!xr(e)||e.style&&e.nodeType||zn(e)||V0(e))return Sn(e)?nl(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=nl(e[a],s,t,n,r);return o},_x=function(e,t,n,r,s,o){var a,l,c,u;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:ob(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new si(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Wo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},us,bh,hp=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,m=e._dur,g=e._startAt,p=e._targets,_=e.parent,x=_&&_.data==="nested"?_.vars.targets:p,y=e._overwrite==="auto"&&!np,v=e.timeline,C=r.easeReverse||h,T,E,S,A,I,N,B,ee,te,z,Y,F,ne;if(v&&(!f||!s)&&(s="none"),e._ease=to(s,Ml.ease),e._rEase=C&&(to(C)||e._ease),e._from=!v&&!!r.runBackwards,e._from&&(e.ratio=1),!v||f&&!r.stagger){if(ee=p[0]?Qs(p[0]).harness:0,F=ee&&r[ee.prop],T=uu(r,ap),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&m?Vc:Iy),g._lazy=0),o){if(Ms(e._startAt=sn.set(p,Ai({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&ii(l),startAt:null,delay:0,onUpdate:c&&function(){return yi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!a&&!d)&&e._startAt.revert(Vc),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!g){if(t&&(a=!1),S=Ai({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ii(l),immediateRender:a,stagger:0,parent:_},T),F&&(S[ee.prop]=F),Ms(e._startAt=sn.set(p,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(Vc):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ii(l)||l&&!m,E=0;E<p.length;E++){if(I=p[E],B=I._gsap||cp(p)[E]._gsap,e._ptLookup[E]=z={},gh[B.id]&&xs.length&&cu(),Y=x===p?E:x.indexOf(I),ee&&(te=new ee).init(I,F||T,e,Y,x)!==!1&&(e._pt=A=new si(e._pt,I,te.name,0,1,te.render,te,0,te.priority),te._props.forEach(function(me){z[me]=A}),te.priority&&(N=1)),!ee||F)for(S in T)mi[S]&&(te=_x(S,T,e,Y,I,x))?te.priority&&(N=1):z[S]=A=fp.call(e,I,S,"get",T[S],Y,x,0,r.stringFilter);e._op&&e._op[E]&&e.kill(I,e._op[E]),y&&e._pt&&(us=e,Ht.killTweensOf(I,z,e.globalTime(t)),ne=!e.parent,us=0),e._pt&&l&&(gh[B.id]=1)}N&&yx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ne,f&&t<=0&&v.render(Ni,!0,!0)},ab=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return bh=1,e.vars[t]="+=0",hp(e,a),bh=0,l?yl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=jt(n)+Un(h.e)),h.b&&(h.b=u.s+Un(h.b))},lb=function(e,t){var n=e[0]?Qs(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=ua({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},cb=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(zn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},nl=function(e,t,n,r,s){return qt(e)?e.call(t,n,r,s):Sn(e)&&~e.indexOf("random(")?El(e):e},gx=lp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",xx={};ri(gx+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return xx[i]=1});var sn=function(i){z0(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:el(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,g=l.defaults,p=l.scrollTrigger,_=r.parent||Ht,x=(zn(n)||V0(n)?Xr(n[0]):"length"in r)?[n]:Ui(n),y,v,C,T,E,S,A,I;if(a._targets=x.length?cp(x):yl("GSAP target "+n+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||$l(c)||$l(u)){r=a.vars;var N=r.easeReverse||r.yoyoEase;if(y=a.timeline=new ni({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:x}),y.kill(),y.parent=y._dp=Pr(a),y._start=0,f||$l(c)||$l(u)){if(T=x.length,A=f&&rx(f),xr(f))for(E in f)~gx.indexOf(E)&&(I||(I={}),I[E]=f[E]);for(v=0;v<T;v++)C=uu(r,xx),C.stagger=0,N&&(C.easeReverse=N),I&&ua(C,I),S=x[v],C.duration=+nl(c,Pr(a),v,S,x),C.delay=(+nl(u,Pr(a),v,S,x)||0)-a._delay,!f&&T===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),y.to(S,C,A?A(v,S,x):0),y._ease=_t.none;y.duration()?c=u=0:a.timeline=0}else if(m){el(Ai(y.vars.defaults,{ease:"none"})),y._ease=to(m.ease||r.ease||"none");var B=0,ee,te,z;if(zn(m))m.forEach(function(Y){return y.to(x,Y,">")}),y.duration();else{C={};for(E in m)E==="ease"||E==="easeEach"||cb(E,m[E],C,m.easeEach);for(E in C)for(ee=C[E].sort(function(Y,F){return Y.t-F.t}),B=0,v=0;v<ee.length;v++)te=ee[v],z={ease:te.e,duration:(te.t-(v?ee[v-1].t:0))/100*c},z[E]=te.v,y.to(x,z,B),B+=z.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!np&&(us=Pr(a),Ht.killTweensOf(x),us=0),lr(_,Pr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!m&&a._start===Vt(_._time)&&ii(h)&&zy(Pr(a))&&_.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-u)||0)),p&&ex(Pr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Pt&&!u?l:r<Pt?0:r,f,d,m,g,p,_,x,y;if(!c)Vy(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(f=Vt(h%g),h===l?(m=this._repeat,f=c):(p=Vt(h/g),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),_=this._yoyo&&m&1,_&&(f=c-f),p=fa(this._tTime,g),f===a&&!o&&this._initted&&m===p)return this._tTime=h,this;m!==p&&this.vars.repeatRefresh&&!_&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Vt(g*m),!0).invalidate()._lock=0)}if(!this._initted){if(tx(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var C=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(v?-1:1)/C:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!p&&(yi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;y&&y.render(r<0?r:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&xh(this,r,s,o),yi(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&yi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&xh(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ms(this,1),!s&&!(u&&!a)&&(h||a||_)&&(yi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Tl||xi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||hp(this,c),u=this._ease(c/this._dur),ab(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(zu(this,0),this.parent||j0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Oa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!An),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,us&&us.vars.overwrite!==!0)._first||Oa(this),this.parent&&o!==this.timeline.totalDuration()&&ha(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Ui(r):a,c=this._ptLookup,u=this._pt,h,f,d,m,g,p,_;if((!s||s==="all")&&Oy(a,l))return s==="all"&&(this._pt=0),Oa(this);for(h=this._op=this._op||[],s!=="all"&&(Sn(s)&&(g={},ri(s,function(x){return g[x]=1}),s=g),s=lb(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],s==="all"?(h[_]=s,m=f,d={}):(d=h[_]=h[_]||{},m=s);for(g in m)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ou(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Oa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return tl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return tl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ht.killTweensOf(r,s,o)},e}(Al);Ai(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ri("staggerTo,staggerFrom,staggerFromTo",function(i){sn[i]=function(){var e=new ni,t=Sh.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var dp=function(e,t,n){return e[t]=n},vx=function(e,t,n){return e[t](n)},ub=function(e,t,n,r){return e[t](r.fp,n)},fb=function(e,t,n){return e.setAttribute(t,n)},pp=function(e,t){return qt(e[t])?vx:ip(e[t])&&e.setAttribute?fb:dp},Sx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Mx=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},mp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},db=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},pb=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ou(this,t,"_pt"):t.dep||(n=1),t=r;return!n},mb=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},yx=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},si=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Sx,this.d=l||this,this.set=c||dp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=mb,this.m=n,this.mt=s,this.tween=r},i}();ri(lp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return ap[i]=1});Ti.TweenMax=Ti.TweenLite=sn;Ti.TimelineLite=Ti.TimelineMax=ni;Ht=new ni({sortChildren:!1,defaults:Ml,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=dx;var no=[],Gc={},_b=[],Vm=0,gb=0,ff=function(e){return(Gc[e]||_b).map(function(t){return t()})},Eh=function(){var e=Date.now(),t=[];e-Vm>2&&(ff("matchMediaInit"),no.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=nr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),ff("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Vm=e,ff("matchMedia"))},bx=function(){function i(t,n){this.selector=n&&Mh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=gb++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){qt(n)&&(s=r,r=n,n=qt);var o=this,a=function(){var c=kt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Mh(s)),kt=o,h=r.apply(o,arguments),qt(h)&&o._r.push(h),kt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===qt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=kt;kt=null,n(this),kt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof sn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ni?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=no.length;o--;)no[o].id===this.id&&no.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),xb=function(){function i(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){xr(n)||(n={matches:n});var o=new bx(0,s||this.scope),a=o.conditions={},l,c,u;kt&&!o.selector&&(o.selector=kt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=nr.matchMedia(n[c]),l&&(no.indexOf(o)<0&&no.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Eh):l.addEventListener("change",Eh)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),hu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return ux(r)})},timeline:function(e){return new ni(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,n,r){Sn(e)&&(e=Ui(e)[0]);var s=Qs(e||{}).get,o=n?J0:Z0;return n==="native"&&(n=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,n,r)):function(a,l,c){return o((mi[a]&&mi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ui(e),e.length>1){var r=e.map(function(u){return li.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=mi[t],a=Qs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Wo._pt=0,h.init(e,n?u+n:u,Wo,0,[e]),h.render(1,h),Wo._pt&&mp(1,Wo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=li.to(e,Ai((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=to(e.ease,Ml.ease)),Fm(Ml,e||{})},config:function(e){return Fm(Ei,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mi[a]&&!Ti[a]&&yl(t+" effect requires "+a+" plugin.")}),af[t]=function(a,l,c){return n(Ui(a),Ai(l||{},s),c)},o&&(ni.prototype[t]=function(a,l,c){return this.add(af[t](a,xr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=to(t)},parseEase:function(e,t){return arguments.length?to(e,t):_t},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new ni(e),r,s;for(n.smoothChildTiming=ii(e.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,r=Ht._first;r;)s=r._next,(t||!(!r._dur&&r instanceof sn&&r.vars.onComplete===r._targets[0]))&&lr(n,r,r._start-r._delay),r=s;return lr(Ht,n,0),n},context:function(e,t){return e?new bx(e,t):kt},matchMedia:function(e){return new xb(e)},matchMediaRefresh:function(){return no.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Eh()},addEventListener:function(e,t){var n=Gc[e]||(Gc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Gc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Ky,wrapYoyo:Zy,distribute:rx,random:ox,snap:sx,normalize:$y,getUnit:Un,clamp:Wy,splitColor:fx,toArray:Ui,selector:Mh,mapRange:lx,pipe:Yy,unitize:qy,interpolate:Jy,shuffle:ix},install:X0,effects:af,ticker:xi,updateRoot:ni.updateRoot,plugins:mi,globalTimeline:Ht,core:{PropTween:si,globals:Y0,Tween:sn,Timeline:ni,Animation:Al,getCache:Qs,_removeLinkedListItem:Ou,reverting:function(){return An},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return np=e}}};ri("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return hu[i]=sn[i]});xi.add(ni.updateRoot);Wo=hu.to({},{duration:0});var vb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Sb=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=vb(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},hf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Sn(s)&&(l={},ri(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Sb(a,s)}}}},li=hu.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)An?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},hf("roundProps",yh),hf("modifiers"),hf("snap",sx))||hu;sn.version=ni.version=li.version="3.15.0";W0=1;rp()&&da();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hm,fs,jo,_p,qs,Gm,gp,Mb=function(){return typeof window<"u"},Yr={},ks=180/Math.PI,Qo=Math.PI/180,Mo=Math.atan2,Wm=1e8,xp=/([A-Z])/g,yb=/(left|right|width|margin|padding|x)/i,bb=/[\s,\(]\S/,ur={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Th=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Eb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Tb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ab=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ex=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Tx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Cb=function(e,t,n){return e.style[t]=n},Rb=function(e,t,n){return e.style.setProperty(t,n)},Pb=function(e,t,n){return e._gsap[t]=n},Db=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Lb=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ib=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Gt="transform",oi=Gt+"Origin",Nb=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Yr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ur[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Lr(r,a)}):this.tfm[e]=o.x?o[e]:Lr(r,e),e===oi&&(this.tfm.zOrigin=o.zOrigin);else return ur.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},Ax=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ub=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(xp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=gp(),(!s||!s.isStart)&&!n[Gt]&&(Ax(n),r.zOrigin&&n[oi]&&(n[oi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},wx=function(e,t){var n={target:e,props:[],revert:Ub,save:Nb};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Cx,Ah=function(e,t){var n=fs.createElementNS?fs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fs.createElement(e);return n&&n.style?n:fs.createElement(e)},bi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(xp,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,pa(t)||t,1)||""},Xm="O,Moz,ms,Ms,Webkit".split(","),pa=function(e,t,n){var r=t||qs,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Xm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Xm[o]:"")+e},wh=function(){Mb()&&window.document&&(Hm=window,fs=Hm.document,jo=fs.documentElement,qs=Ah("div")||{style:{}},Ah("div"),Gt=pa(Gt),oi=Gt+"Origin",qs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cx=!!pa("perspective"),gp=li.core.reverting,_p=1)},Ym=function(e){var t=e.ownerSVGElement,n=Ah("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),jo.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),jo.removeChild(n),s},qm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Rx=function(e){var t,n;try{t=e.getBBox()}catch{t=Ym(e),n=1}return t&&(t.width||t.height)||n||(t=Ym(e)),t&&!t.width&&!t.x&&!t.y?{x:+qm(e,["x","cx","x1"])||0,y:+qm(e,["y","cy","y1"])||0,width:0,height:0}:t},Px=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Rx(e))},ys=function(e,t){if(t){var n=e.style,r;t in Yr&&t!==oi&&(t=Gt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(xp,"-$1").toLowerCase())):n.removeAttribute(t)}},hs=function(e,t,n,r,s,o){var a=new si(e._pt,t,n,0,1,o?Tx:Ex);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},$m={deg:1,rad:1,turn:1},Fb={grid:1,flex:1},bs=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=qs.style,l=yb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",m,g,p,_;if(r===o||!s||$m[r]||$m[o])return s;if(o!=="px"&&!f&&(s=i(e,t,n,"px")),_=e.getCTM&&Px(e),(d||o==="%")&&(Yr[t]||~t.indexOf("adius")))return m=_?e.getBBox()[l?"width":"height"]:e[u],jt(d?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(f?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===fs||!g.appendChild)&&(g=fs.body),p=g._gsap,p&&d&&p.width&&l&&p.time===xi.time&&!p.uncache)return jt(s/p.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+r,m=e[u],x?e.style[t]=x:ys(e,t)}else(d||o==="%")&&!Fb[bi(g,"display")]&&(a.position=bi(e,"position")),g===e&&(a.position="static"),g.appendChild(qs),m=qs[u],g.removeChild(qs),a.position="absolute";return l&&d&&(p=Qs(g),p.time=xi.time,p.width=g[u]),jt(f?m*s/h:m&&s?h/m*s:0)},Lr=function(e,t,n,r){var s;return _p||wh(),t in ur&&t!=="transform"&&(t=ur[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yr[t]&&t!=="transform"?(s=Cl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:pu(bi(e,oi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=du[t]&&du[t](e,t,n)||bi(e,t)||$0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?bs(e,t,s,n)+n:s},Ob=function(e,t,n,r){if(!n||n==="none"){var s=pa(t,e,1),o=s&&bi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=bi(e,"borderTopColor"))}var a=new si(this._pt,e.style,t,0,1,Mx),l=0,c=0,u,h,f,d,m,g,p,_,x,y,v,C;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=bi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=bi(e,t)||r,g?e.style[t]=g:ys(e,t)),u=[n,r],dx(u),n=u[0],r=u[1],f=n.match(Go)||[],C=r.match(Go)||[],C.length){for(;h=Go.exec(r);)p=h[0],x=r.substring(l,h.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),p.charAt(1)==="="&&(p=Jo(d,p)+v),_=parseFloat(p),y=p.substr((_+"").length),l=Go.lastIndex-y.length,y||(y=y||Ei.units[t]||v,l===r.length&&(r+=y,a.e+=y)),v!==y&&(d=bs(e,t,g,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:_-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Tx:Ex;return G0.test(r)&&(a.e=0),this._pt=a,a},Km={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Bb=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Km[n]||n,t[1]=Km[r]||r,t.join(" ")},zb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Yr[a]&&(l=1,a=a==="transformOrigin"?oi:Gt),ys(n,a);l&&(ys(n,Gt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Cl(n,1),o.uncache=1,Ax(r)))}},du={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new si(e._pt,t,n,0,0,zb);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},wl=[1,0,0,1,0,0],Dx={},Lx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zm=function(e){var t=bi(e,Gt);return Lx(t)?wl:t.substr(7).match(H0).map(jt)},vp=function(e,t){var n=e._gsap||Qs(e),r=e.style,s=Zm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?wl:s):(s===wl&&!e.offsetParent&&e!==jo&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,jo.appendChild(e)),s=Zm(e),l?r.display=l:ys(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):jo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ch=function(e,t,n,r,s,o){var a=e._gsap,l=s||vp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],g=l[2],p=l[3],_=l[4],x=l[5],y=t.split(" "),v=parseFloat(y[0])||0,C=parseFloat(y[1])||0,T,E,S,A;n?l!==wl&&(E=d*p-m*g)&&(S=v*(p/E)+C*(-g/E)+(g*x-p*_)/E,A=v*(-m/E)+C*(d/E)-(d*x-m*_)/E,v=S,C=A):(T=Rx(e),v=T.x+(~y[0].indexOf("%")?v/100*T.width:v),C=T.y+(~(y[1]||y[0]).indexOf("%")?C/100*T.height:C)),r||r!==!1&&a.smooth?(_=v-c,x=C-u,a.xOffset=h+(_*d+x*g)-_,a.yOffset=f+(_*m+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[oi]="0px 0px",o&&(hs(o,a,"xOrigin",c,v),hs(o,a,"yOrigin",u,C),hs(o,a,"xOffset",h,a.xOffset),hs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+C)},Cl=function(e,t){var n=e._gsap||new mx(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=bi(e,oi)||"0",u,h,f,d,m,g,p,_,x,y,v,C,T,E,S,A,I,N,B,ee,te,z,Y,F,ne,me,U,Ae,Ne,ue,fe,q;return u=h=f=g=p=_=x=y=v=0,d=m=1,n.svg=!!(e.getCTM&&Px(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),r.scale=r.rotate=r.translate="none"),E=vp(e,n.svg),n.svg&&(n.uncache?(ne=e.getBBox(),c=n.xOrigin-ne.x+"px "+(n.yOrigin-ne.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Ch(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,E)),C=n.xOrigin||0,T=n.yOrigin||0,E!==wl&&(N=E[0],B=E[1],ee=E[2],te=E[3],u=z=E[4],h=Y=E[5],E.length===6?(d=Math.sqrt(N*N+B*B),m=Math.sqrt(te*te+ee*ee),g=N||B?Mo(B,N)*ks:0,x=ee||te?Mo(ee,te)*ks+g:0,x&&(m*=Math.abs(Math.cos(x*Qo))),n.svg&&(u-=C-(C*N+T*ee),h-=T-(C*B+T*te))):(q=E[6],ue=E[7],U=E[8],Ae=E[9],Ne=E[10],fe=E[11],u=E[12],h=E[13],f=E[14],S=Mo(q,Ne),p=S*ks,S&&(A=Math.cos(-S),I=Math.sin(-S),F=z*A+U*I,ne=Y*A+Ae*I,me=q*A+Ne*I,U=z*-I+U*A,Ae=Y*-I+Ae*A,Ne=q*-I+Ne*A,fe=ue*-I+fe*A,z=F,Y=ne,q=me),S=Mo(-ee,Ne),_=S*ks,S&&(A=Math.cos(-S),I=Math.sin(-S),F=N*A-U*I,ne=B*A-Ae*I,me=ee*A-Ne*I,fe=te*I+fe*A,N=F,B=ne,ee=me),S=Mo(B,N),g=S*ks,S&&(A=Math.cos(S),I=Math.sin(S),F=N*A+B*I,ne=z*A+Y*I,B=B*A-N*I,Y=Y*A-z*I,N=F,z=ne),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,_=180-_),d=jt(Math.sqrt(N*N+B*B+ee*ee)),m=jt(Math.sqrt(Y*Y+q*q)),S=Mo(z,Y),x=Math.abs(S)>2e-4?S*ks:0,v=fe?1/(fe<0?-fe:fe):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Lx(bi(e,Gt)),F&&e.setAttribute("transform",F))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=jt(d),n.scaleY=jt(m),n.rotation=jt(g)+a,n.rotationX=jt(p)+a,n.rotationY=jt(_)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[oi]=pu(c)),n.xOffset=n.yOffset=0,n.force3D=Ei.force3D,n.renderTransform=n.svg?Vb:Cx?Ix:kb,n.uncache=0,n},pu=function(e){return(e=e.split(" "))[0]+" "+e[1]},df=function(e,t,n){var r=Un(t);return jt(parseFloat(t)+parseFloat(bs(e,"x",n+"px",r)))+r},kb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ix(e,t)},Is="0deg",Ta="0px",Ns=") ",Ix=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,g=n.scaleY,p=n.transformPerspective,_=n.force3D,x=n.target,y=n.zOrigin,v="",C=_==="auto"&&e&&e!==1||_===!0;if(y&&(h!==Is||u!==Is)){var T=parseFloat(u)*Qo,E=Math.sin(T),S=Math.cos(T),A;T=parseFloat(h)*Qo,A=Math.cos(T),o=df(x,o,E*A*-y),a=df(x,a,-Math.sin(T)*-y),l=df(x,l,S*A*-y+y)}p!==Ta&&(v+="perspective("+p+Ns),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(C||o!==Ta||a!==Ta||l!==Ta)&&(v+=l!==Ta||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ns),c!==Is&&(v+="rotate("+c+Ns),u!==Is&&(v+="rotateY("+u+Ns),h!==Is&&(v+="rotateX("+h+Ns),(f!==Is||d!==Is)&&(v+="skew("+f+", "+d+Ns),(m!==1||g!==1)&&(v+="scale("+m+", "+g+Ns),x.style[Gt]=v||"translate(0, 0)"},Vb=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,g=n.yOrigin,p=n.xOffset,_=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),C,T,E,S,A;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Qo,c*=Qo,C=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(u*=Qo,A=Math.tan(c-u),A=Math.sqrt(1+A*A),E*=A,S*=A,u&&(A=Math.tan(u),A=Math.sqrt(1+A*A),C*=A,T*=A)),C=jt(C),T=jt(T),E=jt(E),S=jt(S)):(C=h,S=f,T=E=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=bs(d,"x",o,"px"),v=bs(d,"y",a,"px")),(m||g||p||_)&&(y=jt(y+m-(m*C+g*E)+p),v=jt(v+g-(m*T+g*S)+_)),(r||s)&&(A=d.getBBox(),y=jt(y+r/100*A.width),v=jt(v+s/100*A.height)),A="matrix("+C+","+T+","+E+","+S+","+y+","+v+")",d.setAttribute("transform",A),x&&(d.style[Gt]=A)},Hb=function(e,t,n,r,s){var o=360,a=Sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ks:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Wm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Wm)%o-~~(c/o)*o)),e._pt=f=new si(e._pt,t,n,r,c,Eb),f.e=u,f.u="deg",e._props.push(n),f},Jm=function(e,t){for(var n in t)e[n]=t[n];return e},Gb=function(e,t,n){var r=Jm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,m;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Gt]=t,a=Cl(n,1),ys(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],o[Gt]=t,a=Cl(n,1),o[Gt]=c);for(l in Yr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Un(c),m=Un(u),h=d!==m?bs(n,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new si(e._pt,a,l,h,f-h,Th),e._pt.u=m||0,e._props.push(l));Jm(a,r)};ri("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});du[e>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(m){return Lr(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(m,g){return d[m]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Nx={name:"css",register:wh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,m,g,p,_,x,y,v,C,T,E,S,A;_p||wh(),this.styles=this.styles||wx(e),S=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(mi[g]&&_x(g,t,n,r,e,s)))){if(d=typeof u,m=du[g],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=El(u)),m)m(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",vs.lastIndex=0,vs.test(c)||(p=Un(c),_=Un(u),_?p!==_&&(c=bs(e,g,c,_)+_):p&&(u+=p)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),S.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Sn(c)&&~c.indexOf("random(")&&(c=El(c)),Un(c+"")||c==="auto"||(c+=Ei.units[g]||Un(Lr(e,g))||""),(c+"").charAt(1)==="="&&(c=Lr(e,g))):c=Lr(e,g),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),g in ur&&(g==="autoAlpha"&&(f===1&&Lr(e,"visibility")==="hidden"&&h&&(f=0),S.push("visibility",0,a.visibility),hs(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=ur[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Yr,y){if(this.styles.save(g),A=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=bi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=u,u=bi(e,"perspective"),I?e.style.perspective=I:ys(e,"perspective")}h=parseFloat(u)}if(v||(C=e._gsap,C.renderTransform&&!t.parseTransform||Cl(e,t.parseTransform),T=t.smoothOrigin!==!1&&C.smooth,v=this._pt=new si(this._pt,a,Gt,0,1,C.renderTransform,C,0,-1),v.dep=1),g==="scale")this._pt=new si(this._pt,C,"scaleY",C.scaleY,(x?Jo(C.scaleY,x+h):h)-C.scaleY||0,Th),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){S.push(oi,0,a[oi]),u=Bb(u),C.svg?Ch(e,u,0,T,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==C.zOrigin&&hs(this,C,"zOrigin",C.zOrigin,_),hs(this,a,g,pu(c),pu(u)));continue}else if(g==="svgOrigin"){Ch(e,u,1,T,0,this);continue}else if(g in Dx){Hb(this,C,g,f,x?Jo(f,x+u):u);continue}else if(g==="smoothOrigin"){hs(this,C,"smooth",C.smooth,u);continue}else if(g==="force3D"){C[g]=u;continue}else if(g==="transform"){Gb(this,u,e);continue}}else g in a||(g=pa(g)||g);if(y||(h||h===0)&&(f||f===0)&&!bb.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),_=Un(u)||(g in Ei.units?Ei.units[g]:p),p!==_&&(f=bs(e,g,c,_)),this._pt=new si(this._pt,y?C:a,g,f,(x?Jo(f,x+h):h)-f,!y&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?wb:Th),this._pt.u=_||0,y&&A!==u?(this._pt.b=c,this._pt.e=A,this._pt.r=Ab):p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Tb);else if(g in a)Ob.call(this,e,g,c,x?x+u:u);else if(g in e)this.add(e,g,c||e[g],x?x+u:u,r,s);else if(g!=="parseTransform"){op(g,u);continue}y||(g in a?S.push(g,0,a[g]):typeof e[g]=="function"?S.push(g,2,e[g]()):S.push(g,1,c||e[g])),o.push(g)}}E&&yx(this)},render:function(e,t){if(t.tween._time||!gp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Lr,aliases:ur,getSetter:function(e,t,n){var r=ur[t];return r&&r.indexOf(",")<0&&(t=r),t in Yr&&t!==oi&&(e._gsap.x||Lr(e,"x"))?n&&Gm===n?t==="scale"?Db:Pb:(Gm=n||{})&&(t==="scale"?Lb:Ib):e.style&&!ip(e.style[t])?Cb:~t.indexOf("-")?Rb:pp(e,t)},core:{_removeProperty:ys,_getMatrix:vp}};li.utils.checkPrefix=pa;li.core.getStyleSaver=wx;(function(i,e,t,n){var r=ri(i+","+e+","+t,function(s){Yr[s]=1});ri(e,function(s){Ei.units[s]="deg",Dx[s]=1}),ur[r[13]]=i+","+e,ri(n,function(s){var o=s.split(":");ur[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Ei.units[i]="px"});li.registerPlugin(Nx);var Mn=li.registerPlugin(Nx)||li;Mn.core.Tween;function jm(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Wb(i,e,t){return e&&jm(i.prototype,e),t&&jm(i,t),i}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var En,Wc,vi,ds,ps,ea,Ux,Vs,ta,Fx,Fr,Vi,Ox,Bx=function(){return En||typeof window<"u"&&(En=window.gsap)&&En.registerPlugin&&En},zx=1,Xo=[],ut=[],pr=[],il=Date.now,Rh=function(e,t){return t},Xb=function(){var e=ta.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,ut),r.push.apply(r,pr),ut=n,pr=r,Rh=function(o,a){return t[o](a)}},Ss=function(e,t){return~pr.indexOf(e)&&pr[pr.indexOf(e)+1][t]},rl=function(e){return!!~Fx.indexOf(e)},Gn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Vn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Kl="scrollLeft",Zl="scrollTop",Ph=function(){return Fr&&Fr.isPressed||ut.cache++},mu=function(e,t){var n=function r(s){if(s||s===0){zx&&(vi.history.scrollRestoration="manual");var o=Fr&&Fr.isPressed;s=r.v=Math.round(s)||(Fr&&Fr.iOS?1:0),e(s),r.cacheID=ut.cache,o&&Rh("ss",s)}else(t||ut.cache!==r.cacheID||Rh("ref"))&&(r.cacheID=ut.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},jn={s:Kl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:mu(function(i){return arguments.length?vi.scrollTo(i,ln.sc()):vi.pageXOffset||ds[Kl]||ps[Kl]||ea[Kl]||0})},ln={s:Zl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:jn,sc:mu(function(i){return arguments.length?vi.scrollTo(jn.sc(),i):vi.pageYOffset||ds[Zl]||ps[Zl]||ea[Zl]||0})},ei=function(e,t){return(t&&t._ctx&&t._ctx.selector||En.utils.toArray)(e)[0]||(typeof e=="string"&&En.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Yb=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Es=function(e,t){var n=t.s,r=t.sc;rl(e)&&(e=ds.scrollingElement||ps);var s=ut.indexOf(e),o=r===ln.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+o]||Gn(e,"scroll",Ph);var a=ut[s+o],l=a||(ut[s+o]=mu(Ss(e,n),!0)||(rl(e)?r:mu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=En.getProperty(e,"scrollBehavior")==="smooth"),l},Dh=function(e,t,n){var r=e,s=e,o=il(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,g){var p=il();g||p-o>l?(s=r,r=m,a=o,o=p):n?r+=m:r=s+(m-s)/(p-a)*(o-a)},h=function(){s=r=n?0:r,a=o=0},f=function(m){var g=a,p=s,_=il();return(m||m===0)&&m!==r&&u(m),o===a||_-a>c?0:(r+(n?p:-p))/((n?_:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},Aa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Qm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},kx=function(){ta=En.core.globals().ScrollTrigger,ta&&ta.core&&Xb()},Vx=function(e){return En=e||Bx(),!Wc&&En&&typeof document<"u"&&document.body&&(vi=window,ds=document,ps=ds.documentElement,ea=ds.body,Fx=[vi,ds,ps,ea],En.utils.clamp,Ox=En.core.context||function(){},Vs="onpointerenter"in ea?"pointer":"mouse",Ux=Qt.isTouch=vi.matchMedia&&vi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in vi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Vi=Qt.eventTypes=("ontouchstart"in ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zx=0},500),Wc=1),ta||kx(),Wc};jn.op=ln;ut.cache=0;var Qt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Wc||Vx(En)||console.warn("Please gsap.registerPlugin(Observer)"),ta||kx();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,g=n.event,p=n.onDragStart,_=n.onDragEnd,x=n.onDrag,y=n.onPress,v=n.onRelease,C=n.onRight,T=n.onLeft,E=n.onUp,S=n.onDown,A=n.onChangeX,I=n.onChangeY,N=n.onChange,B=n.onToggleX,ee=n.onToggleY,te=n.onHover,z=n.onHoverEnd,Y=n.onMove,F=n.ignoreCheck,ne=n.isNormalizer,me=n.onGestureStart,U=n.onGestureEnd,Ae=n.onWheel,Ne=n.onEnable,ue=n.onDisable,fe=n.onClick,q=n.scrollSpeed,W=n.capture,ie=n.allowClicks,oe=n.lockAxis,ye=n.onLockAxis;this.target=a=ei(a)||ps,this.vars=n,d&&(d=En.utils.toArray(d)),r=r||1e-9,s=s||0,m=m||1,q=q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(vi.getComputedStyle(ea).lineHeight)||22);var be,_e,Ue,R,P,O,V,L=this,X=0,he=0,D=n.passive||!u&&n.passive!==!1,se=Es(a,jn),K=Es(a,ln),ve=se(),Z=K(),Me=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Vi[0]==="pointerdown",b=rl(a),M=a.ownerDocument||ds,H=[0,0,0],j=[0,0,0],de=0,ge=function(){return de=il()},le=function(Le,$e){return(L.event=Le)&&d&&Yb(Le.target,d)||$e&&Me&&Le.pointerType!=="touch"||F&&F(Le,$e)},J=function(){L._vx.reset(),L._vy.reset(),_e.pause(),h&&h(L)},ce=function(){var Le=L.deltaX=Qm(H),$e=L.deltaY=Qm(j),Ce=Math.abs(Le)>=r,je=Math.abs($e)>=r;N&&(Ce||je)&&N(L,Le,$e,H,j),Ce&&(C&&L.deltaX>0&&C(L),T&&L.deltaX<0&&T(L),A&&A(L),B&&L.deltaX<0!=X<0&&B(L),X=L.deltaX,H[0]=H[1]=H[2]=0),je&&(S&&L.deltaY>0&&S(L),E&&L.deltaY<0&&E(L),I&&I(L),ee&&L.deltaY<0!=he<0&&ee(L),he=L.deltaY,j[0]=j[1]=j[2]=0),(R||Ue)&&(Y&&Y(L),Ue&&(p&&Ue===1&&p(L),x&&x(L),Ue=0),R=!1),O&&!(O=!1)&&ye&&ye(L),P&&(Ae(L),P=!1),be=0},De=function(Le,$e,Ce){H[Ce]+=Le,j[Ce]+=$e,L._vx.update(Le),L._vy.update($e),c?be||(be=requestAnimationFrame(ce)):ce()},Ie=function(Le,$e){oe&&!V&&(L.axis=V=Math.abs(Le)>Math.abs($e)?"x":"y",O=!0),V!=="y"&&(H[2]+=Le,L._vx.update(Le,!0)),V!=="x"&&(j[2]+=$e,L._vy.update($e,!0)),c?be||(be=requestAnimationFrame(ce)):ce()},Te=function(Le){if(!le(Le,1)){Le=Aa(Le,u);var $e=Le.clientX,Ce=Le.clientY,je=$e-L.x,Ye=Ce-L.y,et=L.isDragging;L.x=$e,L.y=Ce,(et||(je||Ye)&&(Math.abs(L.startX-$e)>=s||Math.abs(L.startY-Ce)>=s))&&(Ue||(Ue=et?2:1),et||(L.isDragging=!0),Ie(je,Ye))}},Re=L.onPress=function(we){le(we,1)||we&&we.button||(L.axis=V=null,_e.pause(),L.isPressed=!0,we=Aa(we),X=he=0,L.startX=L.x=we.clientX,L.startY=L.y=we.clientY,L._vx.reset(),L._vy.reset(),Gn(ne?a:M,Vi[1],Te,D,!0),L.deltaX=L.deltaY=0,y&&y(L))},xe=L.onRelease=function(we){if(!le(we,1)){Vn(ne?a:M,Vi[1],Te,!0);var Le=!isNaN(L.y-L.startY),$e=L.isDragging,Ce=$e&&(Math.abs(L.x-L.startX)>3||Math.abs(L.y-L.startY)>3),je=Aa(we);!Ce&&Le&&(L._vx.reset(),L._vy.reset(),u&&ie&&En.delayedCall(.08,function(){if(il()-de>300&&!we.defaultPrevented){if(we.target.click)we.target.click();else if(M.createEvent){var Ye=M.createEvent("MouseEvents");Ye.initMouseEvent("click",!0,!0,vi,1,je.screenX,je.screenY,je.clientX,je.clientY,!1,!1,!1,!1,0,null),we.target.dispatchEvent(Ye)}}})),L.isDragging=L.isGesturing=L.isPressed=!1,h&&$e&&!ne&&_e.restart(!0),Ue&&ce(),_&&$e&&_(L),v&&v(L,Ce)}},ze=function(Le){return Le.touches&&Le.touches.length>1&&(L.isGesturing=!0)&&me(Le,L.isDragging)},Oe=function(){return(L.isGesturing=!1)||U(L)},k=function(Le){if(!le(Le)){var $e=se(),Ce=K();De(($e-ve)*q,(Ce-Z)*q,1),ve=$e,Z=Ce,h&&_e.restart(!0)}},Ee=function(Le){if(!le(Le)){Le=Aa(Le,u),Ae&&(P=!0);var $e=(Le.deltaMode===1?l:Le.deltaMode===2?vi.innerHeight:1)*m;De(Le.deltaX*$e,Le.deltaY*$e,0),h&&!ne&&_e.restart(!0)}},pe=function(Le){if(!le(Le)){var $e=Le.clientX,Ce=Le.clientY,je=$e-L.x,Ye=Ce-L.y;L.x=$e,L.y=Ce,R=!0,h&&_e.restart(!0),(je||Ye)&&Ie(je,Ye)}},Fe=function(Le){L.event=Le,te(L)},Pe=function(Le){L.event=Le,z(L)},Se=function(Le){return le(Le)||Aa(Le,u)&&fe(L)};_e=L._dc=En.delayedCall(f||.25,J).pause(),L.deltaX=L.deltaY=0,L._vx=Dh(0,50,!0),L._vy=Dh(0,50,!0),L.scrollX=se,L.scrollY=K,L.isDragging=L.isGesturing=L.isPressed=!1,Ox(this),L.enable=function(we){return L.isEnabled||(Gn(b?M:a,"scroll",Ph),o.indexOf("scroll")>=0&&Gn(b?M:a,"scroll",k,D,W),o.indexOf("wheel")>=0&&Gn(a,"wheel",Ee,D,W),(o.indexOf("touch")>=0&&Ux||o.indexOf("pointer")>=0)&&(Gn(a,Vi[0],Re,D,W),Gn(M,Vi[2],xe),Gn(M,Vi[3],xe),ie&&Gn(a,"click",ge,!0,!0),fe&&Gn(a,"click",Se),me&&Gn(M,"gesturestart",ze),U&&Gn(M,"gestureend",Oe),te&&Gn(a,Vs+"enter",Fe),z&&Gn(a,Vs+"leave",Pe),Y&&Gn(a,Vs+"move",pe)),L.isEnabled=!0,L.isDragging=L.isGesturing=L.isPressed=R=Ue=!1,L._vx.reset(),L._vy.reset(),ve=se(),Z=K(),we&&we.type&&Re(we),Ne&&Ne(L)),L},L.disable=function(){L.isEnabled&&(Xo.filter(function(we){return we!==L&&rl(we.target)}).length||Vn(b?M:a,"scroll",Ph),L.isPressed&&(L._vx.reset(),L._vy.reset(),Vn(ne?a:M,Vi[1],Te,!0)),Vn(b?M:a,"scroll",k,W),Vn(a,"wheel",Ee,W),Vn(a,Vi[0],Re,W),Vn(M,Vi[2],xe),Vn(M,Vi[3],xe),Vn(a,"click",ge,!0),Vn(a,"click",Se),Vn(M,"gesturestart",ze),Vn(M,"gestureend",Oe),Vn(a,Vs+"enter",Fe),Vn(a,Vs+"leave",Pe),Vn(a,Vs+"move",pe),L.isEnabled=L.isPressed=L.isDragging=!1,ue&&ue(L))},L.kill=L.revert=function(){L.disable();var we=Xo.indexOf(L);we>=0&&Xo.splice(we,1),Fr===L&&(Fr=0)},Xo.push(L),ne&&rl(a)&&(Fr=L),L.enable(g)},Wb(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Qt.version="3.15.0";Qt.create=function(i){return new Qt(i)};Qt.register=Vx;Qt.getAll=function(){return Xo.slice()};Qt.getById=function(i){return Xo.filter(function(e){return e.vars.id===i})[0]};Bx()&&En.registerPlugin(Qt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xe,ko,ct,yt,_i,vt,Sp,_u,Rl,sl,za,Jl,Ln,ku,Lh,qn,e_,t_,Vo,Hx,pf,Gx,Yn,Ih,Wx,Xx,os,Nh,Mp,na,yp,ol,Uh,mf,jl=1,In=Date.now,_f=In(),Oi=0,ka=0,n_=function(e,t,n){var r=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},i_=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},qb=function i(){return ka&&requestAnimationFrame(i)},r_=function(){return ku=1},s_=function(){return ku=0},ir=function(e){return e},Va=function(e){return Math.round(e*1e5)/1e5||0},Yx=function(){return typeof window<"u"},qx=function(){return Xe||Yx()&&(Xe=window.gsap)&&Xe.registerPlugin&&Xe},oo=function(e){return!!~Sp.indexOf(e)},$x=function(e){return(e==="Height"?yp:ct["inner"+e])||_i["client"+e]||vt["client"+e]},Kx=function(e){return Ss(e,"getBoundingClientRect")||(oo(e)?function(){return Kc.width=ct.innerWidth,Kc.height=yp,Kc}:function(){return Nr(e)})},$b=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=Ss(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?$x(s):e["client"+s])||0}},Kb=function(e,t){return!t||~pr.indexOf(e)?Kx(e):function(){return Kc}},fr=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=Ss(e,n))?o()-Kx(e)()[s]:oo(e)?(_i[n]||vt[n])-$x(r):e[n]-e["offset"+r])},Ql=function(e,t){for(var n=0;n<Vo.length;n+=3)(!t||~t.indexOf(Vo[n+1]))&&e(Vo[n],Vo[n+1],Vo[n+2])},pi=function(e){return typeof e=="string"},Fn=function(e){return typeof e=="function"},Ha=function(e){return typeof e=="number"},Hs=function(e){return typeof e=="object"},wa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},yo=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},bo=Math.abs,Zx="left",Jx="top",bp="right",Ep="bottom",io="width",ro="height",al="Right",ll="Left",cl="Top",ul="Bottom",rn="padding",Di="margin",ma="Width",Tp="Height",an="px",Li=function(e){return ct.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Zb=function(e){var t=Li(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},o_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Nr=function(e,t){var n=t&&Li(e)[Lh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Xe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},gu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},jx=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},Jb=function(e){return function(t){return Xe.utils.snap(jx(e),t)}},Ap=function(e){var t=Xe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},jb=function(e){return function(t,n){return Ap(jx(e))(t,n.direction)}},ec=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},gn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},_n=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},tc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},a_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},nc={toggleActions:"play",anticipatePin:0},xu={top:0,left:0,center:.5,bottom:1,right:1},Xc=function(e,t){if(pi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in xu?xu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ic=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,m=yt.createElement("div"),g=oo(n)||Ss(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,_=g?vt:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,y=x?c:u,v="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(v+=(r===ln?bp:Ep)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=v,m.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(m,_.children[0]):_.appendChild(m),m._offset=m["offset"+r.op.d2],Yc(m,0,r,x),m},Yc=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+ma]=1,s["border"+a+ma]=0,s[n.p]=t+"px",Xe.set(e,s)},at=[],Fh={},Pl,l_=function(){return In()-Oi>34&&(Pl||(Pl=requestAnimationFrame(zr)))},Eo=function(){(!Yn||!Yn.isPressed||Yn.startX>vt.clientWidth)&&(ut.cache++,Yn?Pl||(Pl=requestAnimationFrame(zr)):zr(),Oi||lo("scrollStart"),Oi=In())},gf=function(){Xx=ct.innerWidth,Wx=ct.innerHeight},Ga=function(e){ut.cache++,(e===!0||!Ln&&!Gx&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!Ih||Xx!==ct.innerWidth||Math.abs(ct.innerHeight-Wx)>ct.innerHeight*.25))&&_u.restart(!0)},ao={},Qb=[],Qx=function i(){return _n(ht,"scrollEnd",i)||$s(!0)},lo=function(e){return ao[e]&&ao[e].map(function(t){return t()})||Qb},di=[],ev=function(e){for(var t=0;t<di.length;t+=5)(!e||di[t+4]&&di[t+4].query===e)&&(di[t].style.cssText=di[t+1],di[t].getBBox&&di[t].setAttribute("transform",di[t+2]||""),di[t+3].uncache=1)},tv=function(){return ut.forEach(function(e){return Fn(e)&&++e.cacheID&&(e.rec=e())})},wp=function(e,t){var n;for(qn=0;qn<at.length;qn++)n=at[qn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ol=!0,t&&ev(t),t||lo("revert")},nv=function(e,t){ut.cache++,(t||!$n)&&ut.forEach(function(n){return Fn(n)&&n.cacheID++&&(n.rec=0)}),pi(e)&&(ct.history.scrollRestoration=Mp=e)},$n,so=0,c_,eE=function(){if(c_!==so){var e=c_=so;requestAnimationFrame(function(){return e===so&&$s(!0)})}},iv=function(){vt.appendChild(na),yp=!Yn&&na.offsetHeight||ct.innerHeight,vt.removeChild(na)},u_=function(e){return Rl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},$s=function(e,t){if(_i=yt.documentElement,vt=yt.body,Sp=[ct,yt,_i,vt],Oi&&!e&&!ol){gn(ht,"scrollEnd",Qx);return}iv(),$n=ht.isRefreshing=!0,ol||tv();var n=lo("refreshInit");Hx&&ht.sort(),t||wp(),ut.forEach(function(r){Fn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),at.slice(0).forEach(function(r){return r.refresh()}),ol=!1,at.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Uh=1,u_(!0),at.forEach(function(r){var s=fr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),u_(!1),Uh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ut.forEach(function(r){Fn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),nv(Mp,1),_u.pause(),so++,$n=2,zr(2),at.forEach(function(r){return Fn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),$n=ht.isRefreshing=!1,lo("refresh")},Oh=0,qc=1,fl,zr=function(e){if(e===2||!$n&&!ol){ht.isUpdating=!0,fl&&fl.update(0);var t=at.length,n=In(),r=n-_f>=50,s=t&&at[0].scroll();if(qc=Oh>s?-1:1,$n||(Oh=s),r&&(Oi&&!ku&&n-Oi>200&&(Oi=0,lo("scrollEnd")),za=_f,_f=n),qc<0){for(qn=t;qn-- >0;)at[qn]&&at[qn].update(0,r);qc=1}else for(qn=0;qn<t;qn++)at[qn]&&at[qn].update(0,r);ht.isUpdating=!1}Pl=0},Bh=[Zx,Jx,Ep,bp,Di+ul,Di+al,Di+cl,Di+ll,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$c=Bh.concat([io,ro,"boxSizing","max"+ma,"max"+Tp,"position",Di,rn,rn+cl,rn+al,rn+ul,rn+ll]),tE=function(e,t,n){ia(n);var r=e._gsap;if(r.spacerIsNative)ia(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xf=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Bh.length,o=t.style,a=e.style,l;s--;)l=Bh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ep]=a[bp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[io]=gu(e,jn)+an,o[ro]=gu(e,ln)+an,o[rn]=a[Di]=a[Jx]=a[Zx]="0",ia(r),a[io]=a["max"+ma]=n[io],a[ro]=a["max"+Tp]=n[ro],a[rn]=n[rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},nE=/([A-Z])/g,ia=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Xe.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(nE,"-$1").toLowerCase())}},rc=function(e){for(var t=$c.length,n=e.style,r=[],s=0;s<t;s++)r.push($c[s],n[$c[s]]);return r.t=e,r},iE=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Kc={left:0,top:0},f_=function(e,t,n,r,s,o,a,l,c,u,h,f,d,m){Fn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Xc("0"+e.substr(3),n):0));var g=d?d.time():0,p,_,x;if(d&&d.seek(0),isNaN(e)||(e=+e),Ha(e))d&&(e=Xe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Yc(a,n,r,!0);else{Fn(t)&&(t=t(l));var y=(e||"0").split(" "),v,C,T,E;x=ei(t,l)||vt,v=Nr(x)||{},(!v||!v.left&&!v.top)&&Li(x).display==="none"&&(E=x.style.display,x.style.display="block",v=Nr(x),E?x.style.display=E:x.style.removeProperty("display")),C=Xc(y[0],v[r.d]),T=Xc(y[1]||"0",n),e=v[r.p]-c[r.p]-u+C+s-T,a&&Yc(a,T,r,n-T<20||a._isStart&&T>20),n-=n-T}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var S=e+n,A=o._isStart;p="scroll"+r.d2,Yc(o,S,r,A&&S>20||!A&&(h?Math.max(vt[p],_i[p]):o.parentNode[p])<=S+1),h&&(c=Nr(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+an))}return d&&x&&(p=Nr(x),d.seek(f),_=Nr(x),d._caScrollDist=p[r.p]-_[r.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},rE=/(webkit|moz|length|cssText|inset)/i,h_=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===vt){e._stOrig=s.cssText,a=Li(e);for(o in a)!+o&&!rE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Xe.core.getCache(e).uncache=1,t.appendChild(e)}},rv=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},sc=function(e,t,n){var r={};r[t.p]="+="+n,Xe.set(e,r)},d_=function(e,t){var n=Es(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,m={};c=c||n();var g=rv(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&zr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Xe.to(e,l),f};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},gn(e,"wheel",n.wheelHandler),ht.isTouch&&gn(e,"touchmove",n.wheelHandler),s},ht=function(){function i(t,n){ko||i.register(Xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Nh(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ka){this.update=this.refresh=this.kill=ir;return}n=o_(pi(n)||Ha(n)||n.nodeType?{trigger:n}:n,nc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,_=s.onScrubComplete,x=s.onSnapComplete,y=s.once,v=s.snap,C=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,S=s.fastScrollEnd,A=s.preventOverlaps,I=n.horizontal||n.containerAnimation&&n.horizontal!==!1?jn:ln,N=!h&&h!==0,B=ei(n.scroller||ct),ee=Xe.core.getCache(B),te=oo(B),z=("pinType"in n?n.pinType:Ss(B,"pinType")||te&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=N&&n.toggleActions.split(" "),ne="markers"in n?n.markers:nc.markers,me=te?0:parseFloat(Li(B)["border"+I.p2+ma])||0,U=this,Ae=n.onRefreshInit&&function(){return n.onRefreshInit(U)},Ne=$b(B,te,I),ue=Kb(B,te),fe=0,q=0,W=0,ie=Es(B,I),oe,ye,be,_e,Ue,R,P,O,V,L,X,he,D,se,K,ve,Z,Me,b,M,H,j,de,ge,le,J,ce,De,Ie,Te,Re,xe,ze,Oe,k,Ee,pe,Fe,Pe;if(U._startClamp=U._endClamp=!1,U._dir=I,p*=45,U.scroller=B,U.scroll=E?E.time.bind(E):ie,_e=ie(),U.vars=n,r=r||n.animation,"refreshPriority"in n&&(Hx=1,n.refreshPriority===-9999&&(fl=U)),ee.tweenScroll=ee.tweenScroll||{top:d_(B,ln),left:d_(B,jn)},U.tweenTo=oe=ee.tweenScroll[I.p],U.scrubDuration=function(Ce){ze=Ha(Ce)&&Ce,ze?xe?xe.duration(Ce):xe=Xe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ze,paused:!0,onComplete:function(){return _&&_(U)}}):(xe&&xe.progress(1).kill(),xe=0)},r&&(r.vars.lazy=!1,r._initted&&!U.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),U.animation=r.pause(),r.scrollTrigger=U,U.scrubDuration(h),Te=0,l||(l=r.vars.id)),v&&((!Hs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in vt.style&&Xe.set(te?[vt,_i]:B,{scrollBehavior:"auto"}),ut.forEach(function(Ce){return Fn(Ce)&&Ce.target===(te?yt.scrollingElement||_i:B)&&(Ce.smooth=!1)}),be=Fn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Jb(r):v.snapTo==="labelsDirectional"?jb(r):v.directional!==!1?function(Ce,je){return Ap(v.snapTo)(Ce,In()-q<500?0:je.direction)}:Xe.utils.snap(v.snapTo),Oe=v.duration||{min:.1,max:2},Oe=Hs(Oe)?sl(Oe.min,Oe.max):sl(Oe,Oe),k=Xe.delayedCall(v.delay||ze/2||.1,function(){var Ce=ie(),je=In()-q<500,Ye=oe.tween;if((je||Math.abs(U.getVelocity())<10)&&!Ye&&!ku&&fe!==Ce){var et=(Ce-R)/se,en=r&&!N?r.totalProgress():et,lt=je?0:(en-Re)/(In()-za)*1e3||0,Bt=Xe.utils.clamp(-et,1-et,bo(lt/2)*lt/.185),zt=et+(v.inertia===!1?0:Bt),Lt,At,xt=v,wn=xt.onStart,It=xt.onInterrupt,hn=xt.onComplete;if(Lt=be(zt,U),Ha(Lt)||(Lt=zt),At=Math.max(0,Math.round(R+Lt*se)),Ce<=P&&Ce>=R&&At!==Ce){if(Ye&&!Ye._initted&&Ye.data<=bo(At-Ce))return;v.inertia===!1&&(Bt=Lt-et),oe(At,{duration:Oe(bo(Math.max(bo(zt-en),bo(Lt-en))*.185/lt/.05||0)),ease:v.ease||"power3",data:bo(At-Ce),onInterrupt:function(){return k.restart(!0)&&It&&yo(U,It)},onComplete:function(){U.update(),fe=ie(),r&&!N&&(xe?xe.resetTo("totalProgress",Lt,r._tTime/r._tDur):r.progress(Lt)),Te=Re=r&&!N?r.totalProgress():U.progress,x&&x(U),hn&&yo(U,hn)}},Ce,Bt*se,At-Ce-Bt*se),wn&&yo(U,wn,oe.tween)}}else U.isActive&&fe!==Ce&&k.restart(!0)}).pause()),l&&(Fh[l]=U),f=U.trigger=ei(f||d!==!0&&d),Pe=f&&f._gsap&&f._gsap.stRevert,Pe&&(Pe=Pe(U)),d=d===!0?f:ei(d),pi(a)&&(a={targets:f,className:a}),d&&(m===!1||m===Di||(m=!m&&d.parentNode&&d.parentNode.style&&Li(d.parentNode).display==="flex"?!1:rn),U.pin=d,ye=Xe.core.getCache(d),ye.spacer?K=ye.pinState:(T&&(T=ei(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),ye.spacerIsNative=!!T,T&&(ye.spacerState=rc(T))),ye.spacer=Me=T||yt.createElement("div"),Me.classList.add("pin-spacer"),l&&Me.classList.add("pin-spacer-"+l),ye.pinState=K=rc(d)),n.force3D!==!1&&Xe.set(d,{force3D:!0}),U.spacer=Me=ye.spacer,Ie=Li(d),ge=Ie[m+I.os2],M=Xe.getProperty(d),H=Xe.quickSetter(d,I.a,an),xf(d,Me,Ie),Z=rc(d)),ne){he=Hs(ne)?o_(ne,a_):a_,L=ic("scroller-start",l,B,I,he,0),X=ic("scroller-end",l,B,I,he,0,L),b=L["offset"+I.op.d2];var Se=ei(Ss(B,"content")||B);O=this.markerStart=ic("start",l,Se,I,he,b,0,E),V=this.markerEnd=ic("end",l,Se,I,he,b,0,E),E&&(Fe=Xe.quickSetter([O,V],I.a,an)),!z&&!(pr.length&&Ss(B,"fixedMarkers")===!0)&&(Zb(te?vt:B),Xe.set([L,X],{force3D:!0}),J=Xe.quickSetter(L,I.a,an),De=Xe.quickSetter(X,I.a,an))}if(E){var we=E.vars.onUpdate,Le=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){U.update(0,0,1),we&&we.apply(E,Le||[])})}if(U.previous=function(){return at[at.indexOf(U)-1]},U.next=function(){return at[at.indexOf(U)+1]},U.revert=function(Ce,je){if(!je)return U.kill(!0);var Ye=Ce!==!1||!U.enabled,et=Ln;Ye!==U.isReverted&&(Ye&&(Ee=Math.max(ie(),U.scroll.rec||0),W=U.progress,pe=r&&r.progress()),O&&[O,V,L,X].forEach(function(en){return en.style.display=Ye?"none":"block"}),Ye&&(Ln=U,U.update(Ye)),d&&(!C||!U.isActive)&&(Ye?tE(d,Me,K):xf(d,Me,Li(d),le)),Ye||U.update(Ye),Ln=et,U.isReverted=Ye)},U.refresh=function(Ce,je,Ye,et){if(!((Ln||!U.enabled)&&!je)){if(d&&Ce&&Oi){gn(i,"scrollEnd",Qx);return}!$n&&Ae&&Ae(U),Ln=U,oe.tween&&!Ye&&(oe.tween.kill(),oe.tween=0),xe&&xe.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ve){return Ve.vars.immediateRender&&Ve.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var en=Ne(),lt=ue(),Bt=E?E.duration():fr(B,I),zt=se<=.01||!se,Lt=0,At=et||0,xt=Hs(Ye)?Ye.end:n.end,wn=n.endTrigger||f,It=Hs(Ye)?Ye.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),hn=U.pinnedContainer=n.pinnedContainer&&ei(n.pinnedContainer,U),ci=f&&Math.max(0,at.indexOf(U))||0,tn=ci,on,dn,yr,go,pn,Kt,wi,w,$,ae,Q,re,ke;for(ne&&Hs(Ye)&&(re=Xe.getProperty(L,I.p),ke=Xe.getProperty(X,I.p));tn-- >0;)Kt=at[tn],Kt.end||Kt.refresh(0,1)||(Ln=U),wi=Kt.pin,wi&&(wi===f||wi===d||wi===hn)&&!Kt.isReverted&&(ae||(ae=[]),ae.unshift(Kt),Kt.revert(!0,!0)),Kt!==at[tn]&&(ci--,tn--);for(Fn(It)&&(It=It(U)),It=n_(It,"start",U),R=f_(It,f,en,I,ie(),O,L,U,lt,me,z,Bt,E,U._startClamp&&"_startClamp")||(d?-.001:0),Fn(xt)&&(xt=xt(U)),pi(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(pi(It)?It.split(" ")[0]:"")+xt:(Lt=Xc(xt.substr(2),en),xt=pi(It)?It:(E?Xe.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,R):R)+Lt,wn=f)),xt=n_(xt,"end",U),P=Math.max(R,f_(xt||(wn?"100% 0":Bt),wn,en,I,ie()+Lt,V,X,U,lt,me,z,Bt,E,U._endClamp&&"_endClamp"))||-.001,Lt=0,tn=ci;tn--;)Kt=at[tn]||{},wi=Kt.pin,wi&&Kt.start-Kt._pinPush<=R&&!E&&Kt.end>0&&(on=Kt.end-(U._startClamp?Math.max(0,Kt.start):Kt.start),(wi===f&&Kt.start-Kt._pinPush<R||wi===hn)&&isNaN(It)&&(Lt+=on*(1-Kt.progress)),wi===d&&(At+=on));if(R+=Lt,P+=Lt,U._startClamp&&(U._startClamp+=Lt),U._endClamp&&!$n&&(U._endClamp=P||-.001,P=Math.min(P,fr(B,I))),se=P-R||(R-=.01)&&.001,zt&&(W=Xe.utils.clamp(0,1,Xe.utils.normalize(R,P,Ee))),U._pinPush=At,O&&Lt&&(on={},on[I.a]="+="+Lt,hn&&(on[I.p]="-="+ie()),Xe.set([O,V],on)),d&&!(Uh&&U.end>=fr(B,I)))on=Li(d),go=I===ln,yr=ie(),j=parseFloat(M(I.a))+At,!Bt&&P>1&&(Q=(te?yt.scrollingElement||_i:B).style,Q={style:Q,value:Q["overflow"+I.a.toUpperCase()]},te&&Li(vt)["overflow"+I.a.toUpperCase()]!=="scroll"&&(Q.style["overflow"+I.a.toUpperCase()]="scroll")),xf(d,Me,on),Z=rc(d),dn=Nr(d,!0),w=z&&Es(B,go?jn:ln)(),m?(le=[m+I.os2,se+At+an],le.t=Me,tn=m===rn?gu(d,I)+se+At:0,tn&&(le.push(I.d,tn+an),Me.style.flexBasis!=="auto"&&(Me.style.flexBasis=tn+an)),ia(le),hn&&at.forEach(function(Ve){Ve.pin===hn&&Ve.vars.pinSpacing!==!1&&(Ve._subPinOffset=!0)}),z&&ie(Ee)):(tn=gu(d,I),tn&&Me.style.flexBasis!=="auto"&&(Me.style.flexBasis=tn+an)),z&&(pn={top:dn.top+(go?yr-R:w)+an,left:dn.left+(go?w:yr-R)+an,boxSizing:"border-box",position:"fixed"},pn[io]=pn["max"+ma]=Math.ceil(dn.width)+an,pn[ro]=pn["max"+Tp]=Math.ceil(dn.height)+an,pn[Di]=pn[Di+cl]=pn[Di+al]=pn[Di+ul]=pn[Di+ll]="0",pn[rn]=on[rn],pn[rn+cl]=on[rn+cl],pn[rn+al]=on[rn+al],pn[rn+ul]=on[rn+ul],pn[rn+ll]=on[rn+ll],ve=iE(K,pn,C),$n&&ie(0)),r?($=r._initted,pf(1),r.render(r.duration(),!0,!0),de=M(I.a)-j+se+At,ce=Math.abs(se-de)>1,z&&ce&&ve.splice(ve.length-2,2),r.render(0,!0,!0),$||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),pf(0)):de=se,Q&&(Q.value?Q.style["overflow"+I.a.toUpperCase()]=Q.value:Q.style.removeProperty("overflow-"+I.a));else if(f&&ie()&&!E)for(dn=f.parentNode;dn&&dn!==vt;)dn._pinOffset&&(R-=dn._pinOffset,P-=dn._pinOffset),dn=dn.parentNode;ae&&ae.forEach(function(Ve){return Ve.revert(!1,!0)}),U.start=R,U.end=P,_e=Ue=$n?Ee:ie(),!E&&!$n&&(_e<Ee&&ie(Ee),U.scroll.rec=0),U.revert(!1,!0),q=In(),k&&(fe=-1,k.restart(!0)),Ln=0,r&&N&&(r._initted||pe)&&r.progress()!==pe&&r.progress(pe||0,!0).render(r.time(),!0,!0),(zt||W!==U.progress||E||g||r&&!r._initted)&&(r&&!N&&(r._initted||W||r.vars.immediateRender!==!1)&&r.totalProgress(E&&R<-.001&&!W?Xe.utils.normalize(R,P,0):W,!0),U.progress=zt||(_e-R)/se===W?0:W),d&&m&&(Me._pinOffset=Math.round(U.progress*de)),xe&&xe.invalidate(),isNaN(re)||(re-=Xe.getProperty(L,I.p),ke-=Xe.getProperty(X,I.p),sc(L,I,re),sc(O,I,re-(et||0)),sc(X,I,ke),sc(V,I,ke-(et||0))),zt&&!$n&&U.update(),u&&!$n&&!D&&(D=!0,u(U),D=!1)}},U.getVelocity=function(){return(ie()-Ue)/(In()-za)*1e3||0},U.endAnimation=function(){wa(U.callbackAnimation),r&&(xe?xe.progress(1):r.paused()?N||wa(r,U.direction<0,1):wa(r,r.reversed()))},U.labelToScroll=function(Ce){return r&&r.labels&&(R||U.refresh()||R)+r.labels[Ce]/r.duration()*se||0},U.getTrailing=function(Ce){var je=at.indexOf(U),Ye=U.direction>0?at.slice(0,je).reverse():at.slice(je+1);return(pi(Ce)?Ye.filter(function(et){return et.vars.preventOverlaps===Ce}):Ye).filter(function(et){return U.direction>0?et.end<=R:et.start>=P})},U.update=function(Ce,je,Ye){if(!(E&&!Ye&&!Ce)){var et=$n===!0?Ee:U.scroll(),en=Ce?0:(et-R)/se,lt=en<0?0:en>1?1:en||0,Bt=U.progress,zt,Lt,At,xt,wn,It,hn,ci;if(je&&(Ue=_e,_e=E?ie():et,v&&(Re=Te,Te=r&&!N?r.totalProgress():lt)),p&&d&&!Ln&&!jl&&Oi&&(!lt&&R<et+(et-Ue)/(In()-za)*p?lt=1e-4:lt===1&&P>et+(et-Ue)/(In()-za)*p&&(lt=.9999)),lt!==Bt&&U.enabled){if(zt=U.isActive=!!lt&&lt<1,Lt=!!Bt&&Bt<1,It=zt!==Lt,wn=It||!!lt!=!!Bt,U.direction=lt>Bt?1:-1,U.progress=lt,wn&&!Ln&&(At=lt&&!Bt?0:lt===1?1:Bt===1?2:3,N&&(xt=!It&&F[At+1]!=="none"&&F[At+1]||F[At],ci=r&&(xt==="complete"||xt==="reset"||xt in r))),A&&(It||ci)&&(ci||h||!r)&&(Fn(A)?A(U):U.getTrailing(A).forEach(function(yr){return yr.endAnimation()})),N||(xe&&!Ln&&!jl?(xe._dp._time-xe._start!==xe._time&&xe.render(xe._dp._time-xe._start),xe.resetTo?xe.resetTo("totalProgress",lt,r._tTime/r._tDur):(xe.vars.totalProgress=lt,xe.invalidate().restart())):r&&r.totalProgress(lt,!!(Ln&&(q||Ce)))),d){if(Ce&&m&&(Me.style[m+I.os2]=ge),!z)H(Va(j+de*lt));else if(wn){if(hn=!Ce&&lt>Bt&&P+1>et&&et+1>=fr(B,I),C)if(!Ce&&(zt||hn)){var tn=Nr(d,!0),on=et-R;h_(d,vt,tn.top+(I===ln?on:0)+an,tn.left+(I===ln?0:on)+an)}else h_(d,Me);ia(zt||hn?ve:Z),ce&&lt<1&&zt||H(j+(lt===1&&!hn?de:0))}}v&&!oe.tween&&!Ln&&!jl&&k.restart(!0),a&&(It||y&&lt&&(lt<1||!mf))&&Rl(a.targets).forEach(function(yr){return yr.classList[zt||y?"add":"remove"](a.className)}),o&&!N&&!Ce&&o(U),wn&&!Ln?(N&&(ci&&(xt==="complete"?r.pause().totalProgress(1):xt==="reset"?r.restart(!0).pause():xt==="restart"?r.restart(!0):r[xt]()),o&&o(U)),(It||!mf)&&(c&&It&&yo(U,c),Y[At]&&yo(U,Y[At]),y&&(lt===1?U.kill(!1,1):Y[At]=0),It||(At=lt===1?1:3,Y[At]&&yo(U,Y[At]))),S&&!zt&&Math.abs(U.getVelocity())>(Ha(S)?S:2500)&&(wa(U.callbackAnimation),xe?xe.progress(1):wa(r,xt==="reverse"?1:!lt,1))):N&&o&&!Ln&&o(U)}if(De){var dn=E?et/E.duration()*(E._caScrollDist||0):et;J(dn+(L._isFlipped?1:0)),De(dn)}Fe&&Fe(-et/E.duration()*(E._caScrollDist||0))}},U.enable=function(Ce,je){U.enabled||(U.enabled=!0,gn(B,"resize",Ga),te||gn(B,"scroll",Eo),Ae&&gn(i,"refreshInit",Ae),Ce!==!1&&(U.progress=W=0,_e=Ue=fe=ie()),je!==!1&&U.refresh())},U.getTween=function(Ce){return Ce&&oe?oe.tween:xe},U.setPositions=function(Ce,je,Ye,et){if(E){var en=E.scrollTrigger,lt=E.duration(),Bt=en.end-en.start;Ce=en.start+Bt*Ce/lt,je=en.start+Bt*je/lt}U.refresh(!1,!1,{start:i_(Ce,Ye&&!!U._startClamp),end:i_(je,Ye&&!!U._endClamp)},et),U.update()},U.adjustPinSpacing=function(Ce){if(le&&Ce){var je=le.indexOf(I.d)+1;le[je]=parseFloat(le[je])+Ce+an,le[1]=parseFloat(le[1])+Ce+an,ia(le)}},U.disable=function(Ce,je){if(Ce!==!1&&U.revert(!0,!0),U.enabled&&(U.enabled=U.isActive=!1,je||xe&&xe.pause(),Ee=0,ye&&(ye.uncache=1),Ae&&_n(i,"refreshInit",Ae),k&&(k.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!te)){for(var Ye=at.length;Ye--;)if(at[Ye].scroller===B&&at[Ye]!==U)return;_n(B,"resize",Ga),te||_n(B,"scroll",Eo)}},U.kill=function(Ce,je){U.disable(Ce,je),xe&&!je&&xe.kill(),l&&delete Fh[l];var Ye=at.indexOf(U);Ye>=0&&at.splice(Ye,1),Ye===qn&&qc>0&&qn--,Ye=0,at.forEach(function(et){return et.scroller===U.scroller&&(Ye=1)}),Ye||$n||(U.scroll.rec=0),r&&(r.scrollTrigger=null,Ce&&r.revert({kill:!1}),je||r.kill()),O&&[O,V,L,X].forEach(function(et){return et.parentNode&&et.parentNode.removeChild(et)}),fl===U&&(fl=0),d&&(ye&&(ye.uncache=1),Ye=0,at.forEach(function(et){return et.pin===d&&Ye++}),Ye||(ye.spacer=0)),n.onKill&&n.onKill(U)},at.push(U),U.enable(!1,!1),Pe&&Pe(U),r&&r.add&&!se){var $e=U.update;U.update=function(){U.update=$e,ut.cache++,R||P||U.refresh()},Xe.delayedCall(.01,U.update),se=.01,R=P=0}else U.refresh();d&&eE()},i.register=function(n){return ko||(Xe=n||qx(),Yx()&&window.document&&i.enable(),ko=ka),ko},i.defaults=function(n){if(n)for(var r in n)nc[r]=n[r];return nc},i.disable=function(n,r){ka=0,at.forEach(function(o){return o[r?"kill":"disable"](n)}),_n(ct,"wheel",Eo),_n(yt,"scroll",Eo),clearInterval(Jl),_n(yt,"touchcancel",ir),_n(vt,"touchstart",ir),ec(_n,yt,"pointerdown,touchstart,mousedown",r_),ec(_n,yt,"pointerup,touchend,mouseup",s_),_u.kill(),Ql(_n);for(var s=0;s<ut.length;s+=3)tc(_n,ut[s],ut[s+1]),tc(_n,ut[s],ut[s+2])},i.enable=function(){if(ct=window,yt=document,_i=yt.documentElement,vt=yt.body,Xe){if(Rl=Xe.utils.toArray,sl=Xe.utils.clamp,Nh=Xe.core.context||ir,pf=Xe.core.suppressOverwrites||ir,Mp=ct.history.scrollRestoration||"auto",Oh=ct.pageYOffset||0,Xe.core.globals("ScrollTrigger",i),vt){ka=1,na=document.createElement("div"),na.style.height="100vh",na.style.position="absolute",iv(),qb(),Qt.register(Xe),i.isTouch=Qt.isTouch,os=Qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ih=Qt.isTouch===1,gn(ct,"wheel",Eo),Sp=[ct,yt,_i,vt],Xe.matchMedia?(i.matchMedia=function(u){var h=Xe.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Xe.addEventListener("matchMediaInit",function(){tv(),wp()}),Xe.addEventListener("matchMediaRevert",function(){return ev()}),Xe.addEventListener("matchMedia",function(){$s(0,1),lo("matchMedia")}),Xe.matchMedia().add("(orientation: portrait)",function(){return gf(),gf})):console.warn("Requires GSAP 3.11.0 or later"),gf(),gn(yt,"scroll",Eo);var n=vt.hasAttribute("style"),r=vt.style,s=r.borderTopStyle,o=Xe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Nr(vt),ln.m=Math.round(a.top+ln.sc())||0,jn.m=Math.round(a.left+jn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),Jl=setInterval(l_,250),Xe.delayedCall(.5,function(){return jl=0}),gn(yt,"touchcancel",ir),gn(vt,"touchstart",ir),ec(gn,yt,"pointerdown,touchstart,mousedown",r_),ec(gn,yt,"pointerup,touchend,mouseup",s_),Lh=Xe.utils.checkPrefix("transform"),$c.push(Lh),ko=In(),_u=Xe.delayedCall(.2,$s).pause(),Vo=[yt,"visibilitychange",function(){var u=ct.innerWidth,h=ct.innerHeight;yt.hidden?(e_=u,t_=h):(e_!==u||t_!==h)&&Ga()},yt,"DOMContentLoaded",$s,ct,"load",$s,ct,"resize",Ga],Ql(gn),at.forEach(function(u){return u.enable(0,1)}),l=0;l<ut.length;l+=3)tc(_n,ut[l],ut[l+1]),tc(_n,ut[l],ut[l+2])}else if(yt){var c=function u(){i.enable(),yt.removeEventListener("DOMContentLoaded",u)};yt.addEventListener("DOMContentLoaded",c)}}},i.config=function(n){"limitCallbacks"in n&&(mf=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Jl)||(Jl=r)&&setInterval(l_,r),"ignoreMobileResize"in n&&(Ih=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ql(_n)||Ql(gn,n.autoRefreshEvents||"none"),Gx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=ei(n),o=ut.indexOf(s),a=oo(s);~o&&ut.splice(o,a?6:2),r&&(a?pr.unshift(ct,r,vt,r,_i,r):pr.unshift(s,r))},i.clearMatchMedia=function(n){at.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(pi(n)?ei(n):n).getBoundingClientRect(),a=o[s?io:ro]*r||0;return s?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},i.positionInViewport=function(n,r,s){pi(n)&&(n=ei(n));var o=n.getBoundingClientRect(),a=o[s?io:ro],l=r==null?a/2:r in xu?xu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ct.innerWidth:(o.top+l)/ct.innerHeight},i.killAll=function(n){if(at.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=ao.killAll||[];ao={},r.forEach(function(s){return s()})}},i}();ht.version="3.15.0";ht.saveStyles=function(i){return i?Rl(i).forEach(function(e){if(e&&e.style){var t=di.indexOf(e);t>=0&&di.splice(t,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Xe.core.getCache(e),Nh())}}):di};ht.revert=function(i,e){return wp(!i,e)};ht.create=function(i,e){return new ht(i,e)};ht.refresh=function(i){return i?Ga(!0):(ko||ht.register())&&$s(!0)};ht.update=function(i){return++ut.cache&&zr(i===!0?2:0)};ht.clearScrollMemory=nv;ht.maxScroll=function(i,e){return fr(i,e?jn:ln)};ht.getScrollFunc=function(i,e){return Es(ei(i),e?jn:ln)};ht.getById=function(i){return Fh[i]};ht.getAll=function(){return at.filter(function(i){return i.vars.id!=="ScrollSmoother"})};ht.isScrolling=function(){return!!Oi};ht.snapDirectional=Ap;ht.addEventListener=function(i,e){var t=ao[i]||(ao[i]=[]);~t.indexOf(e)||t.push(e)};ht.removeEventListener=function(i,e){var t=ao[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ht.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Xe.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Fn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Fn(s)&&(s=s(),gn(ht,"refresh",function(){return s=e.batchMax()})),Rl(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ht.create(c))}),t};var p_=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},vf=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Qt.isTouch?" pinch-zoom":""):"none",e===_i&&i(vt,t)},oc={auto:1,scroll:1},sE=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Xe.core.getCache(s),a=In(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(oc[(l=Li(s)).overflowY]||oc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!oo(s)&&(oc[(l=Li(s)).overflowY]||oc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},sv=function(e,t,n,r){return Qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&sE,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&gn(yt,Qt.eventTypes[0],__,!1,!0)},onDisable:function(){return _n(yt,Qt.eventTypes[0],__,!0)}})},oE=/(input|label|select|textarea)/i,m_,__=function(e){var t=oE.test(e.target.tagName);(t||m_)&&(e._gsapAllow=!0,m_=t)},aE=function(e){Hs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ei(e.target)||_i,u=Xe.core.globals().ScrollSmoother,h=u&&u.get(),f=os&&(e.content&&ei(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Es(c,ln),m=Es(c,jn),g=1,p=(Qt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,_=0,x=Fn(r)?function(){return r(a)}:function(){return r||2.8},y,v,C=sv(c,e.type,!0,s),T=function(){return v=!1},E=ir,S=ir,A=function(){l=fr(c,ln),S=sl(os?1:0,l),n&&(E=sl(0,fr(c,jn))),y=so},I=function(){f._gsap.y=Va(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},N=function(){if(v){requestAnimationFrame(T);var ne=Va(a.deltaY/2),me=S(d.v-ne);if(f&&me!==d.v+d.offset){d.offset=me-d.v;var U=Va((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",f._gsap.y=U+"px",d.cacheID=ut.cache,zr()}return!0}d.offset&&I(),v=!0},B,ee,te,z,Y=function(){A(),B.isActive()&&B.vars.scrollY>l&&(d()>l?B.progress(1)&&d(l):B.resetTo("scrollY",l))};return f&&Xe.set(f,{y:"+=0"}),e.ignoreCheck=function(F){return os&&F.type==="touchmove"&&N()||g>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){v=!1;var F=g;g=Va((ct.visualViewport&&ct.visualViewport.scale||1)/p),B.pause(),F!==g&&vf(c,g>1.01?!0:n?!1:"x"),ee=m(),te=d(),A(),y=so},e.onRelease=e.onGestureStart=function(F,ne){if(d.offset&&I(),!ne)z.restart(!0);else{ut.cache++;var me=x(),U,Ae;n&&(U=m(),Ae=U+me*.05*-F.velocityX/.227,me*=p_(m,U,Ae,fr(c,jn)),B.vars.scrollX=E(Ae)),U=d(),Ae=U+me*.05*-F.velocityY/.227,me*=p_(d,U,Ae,fr(c,ln)),B.vars.scrollY=S(Ae),B.invalidate().duration(me).play(.01),(os&&B.vars.scrollY>=l||U>=l-1)&&Xe.to({},{onUpdate:Y,duration:me})}o&&o(F)},e.onWheel=function(){B._ts&&B.pause(),In()-_>1e3&&(y=0,_=In())},e.onChange=function(F,ne,me,U,Ae){if(so!==y&&A(),ne&&n&&m(E(U[2]===ne?ee+(F.startX-F.x):m()+ne-U[1])),me){d.offset&&I();var Ne=Ae[2]===me,ue=Ne?te+F.startY-F.y:d()+me-Ae[1],fe=S(ue);Ne&&ue!==fe&&(te+=fe-ue),d(fe)}(me||ne)&&zr()},e.onEnable=function(){vf(c,n?!1:"x"),ht.addEventListener("refresh",Y),gn(ct,"resize",Y),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),C.enable()},e.onDisable=function(){vf(c,!0),_n(ct,"resize",Y),ht.removeEventListener("refresh",Y),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Qt(e),a.iOS=os,os&&!d()&&d(1),os&&Xe.ticker.add(ir),z=a._dc,B=Xe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:rv(d,d(),function(){return B.pause()})},onUpdate:zr,onComplete:z.vars.onComplete}),a};ht.sort=function(i){if(Fn(i))return at.sort(i);var e=ct.pageYOffset||0;return ht.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ct.innerHeight}),at.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ht.observe=function(i){return new Qt(i)};ht.normalizeScroll=function(i){if(typeof i>"u")return Yn;if(i===!0&&Yn)return Yn.enable();if(i===!1){Yn&&Yn.kill(),Yn=i;return}var e=i instanceof Qt?i:aE(i);return Yn&&Yn.target===e.target&&Yn.kill(),oo(e.target)&&(Yn=e),e};ht.core={_getVelocityProp:Dh,_inputObserver:sv,_scrollers:ut,_proxies:pr,bridge:{ss:function(){Oi||lo("scrollStart"),Oi=In()},ref:function(){return Ln}}};qx()&&Xe.registerPlugin(ht);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cp="184",lE=0,g_=1,cE=2,Zc=1,uE=2,Wa=3,Ts=0,ai=1,Ur=2,kr=0,ra=1,x_=2,v_=3,S_=4,fE=5,Ws=100,hE=101,dE=102,pE=103,mE=104,_E=200,gE=201,xE=202,vE=203,zh=204,kh=205,SE=206,ME=207,yE=208,bE=209,EE=210,TE=211,AE=212,wE=213,CE=214,Vh=0,Hh=1,Gh=2,_a=3,Wh=4,Xh=5,Yh=6,qh=7,ov=0,RE=1,PE=2,mr=0,av=1,lv=2,cv=3,uv=4,fv=5,hv=6,dv=7,pv=300,co=301,ga=302,Sf=303,Mf=304,Vu=306,$h=1e3,Or=1001,Kh=1002,Tn=1003,DE=1004,ac=1005,On=1006,yf=1007,Ks=1008,Si=1009,mv=1010,_v=1011,Dl=1012,Rp=1013,vr=1014,hr=1015,qr=1016,Pp=1017,Dp=1018,Ll=1020,gv=35902,xv=35899,vv=1021,Sv=1022,Hi=1023,$r=1026,Zs=1027,Mv=1028,Lp=1029,uo=1030,Ip=1031,Np=1033,Jc=33776,jc=33777,Qc=33778,eu=33779,Zh=35840,Jh=35841,jh=35842,Qh=35843,ed=36196,td=37492,nd=37496,id=37488,rd=37489,vu=37490,sd=37491,od=37808,ad=37809,ld=37810,cd=37811,ud=37812,fd=37813,hd=37814,dd=37815,pd=37816,md=37817,_d=37818,gd=37819,xd=37820,vd=37821,Sd=36492,Md=36494,yd=36495,bd=36283,Ed=36284,Su=36285,Td=36286,LE=3200,Ad=0,IE=1,cs="",ti="srgb",Mu="srgb-linear",yu="linear",bt="srgb",To=7680,M_=519,NE=512,UE=513,FE=514,Up=515,OE=516,BE=517,Fp=518,zE=519,y_=35044,b_="300 es",dr=2e3,Il=2001;function kE(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function VE(){const i=bu("canvas");return i.style.display="block",i}const E_={};function T_(...i){const e="THREE."+i.shift();console.log(e,...i)}function yv(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=yv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function pt(...i){i=yv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function wd(...i){const e=i.join(" ");e in E_||(E_[e]=!0,Qe(...i))}function HE(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const GE={[Vh]:Hh,[Gh]:Yh,[Wh]:qh,[_a]:Xh,[Hh]:Vh,[Yh]:Gh,[qh]:Wh,[Xh]:_a};class po{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let A_=1234567;const sa=Math.PI/180,Nl=180/Math.PI;function mo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Op(i,e){return(i%e+e)%e}function WE(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function XE(i,e,t){return i!==e?(t-i)/(e-i):0}function hl(i,e,t){return(1-t)*i+t*e}function YE(i,e,t,n){return hl(i,e,1-Math.exp(-t*n))}function qE(i,e=1){return e-Math.abs(Op(i,e*2)-e)}function $E(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function KE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ZE(i,e){return i+Math.floor(Math.random()*(e-i+1))}function JE(i,e){return i+Math.random()*(e-i)}function jE(i){return i*(.5-Math.random())}function QE(i){i!==void 0&&(A_=i);let e=A_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eT(i){return i*sa}function tT(i){return i*Nl}function nT(i){return(i&i-1)===0&&i!==0}function iT(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rT(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sT(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*u,a*c);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ho(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Qr={DEG2RAD:sa,RAD2DEG:Nl,generateUUID:mo,clamp:ft,euclideanModulo:Op,mapLinear:WE,inverseLerp:XE,lerp:hl,damp:YE,pingpong:qE,smoothstep:$E,smootherstep:KE,randInt:ZE,randFloat:JE,randFloatSpread:jE,seededRandom:QE,degToRad:eT,radToDeg:tT,isPowerOfTwo:nT,ceilPowerOfTwo:iT,floorPowerOfTwo:rT,setQuaternionFromProperEuler:sT,normalize:Wn,denormalize:Ho},Zp=class Zp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zp.prototype.isVector2=!0;let Be=Zp;class Ma{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],m=s[o+2],g=s[o+3];if(h!==g||l!==f||c!==d||u!==m){let p=l*f+c*d+u*m+h*g;p<0&&(f=-f,d=-d,m=-m,g=-g,p=-p);let _=1-a;if(p<.9995){const x=Math.acos(p),y=Math.sin(x);_=Math.sin(_*x)/y,a=Math.sin(a*x)/y,l=l*_+f*a,c=c*_+d*a,u=u*_+m*a,h=h*_+g*a}else{l=l*_+f*a,c=c*_+d*a,u=u*_+m*a,h=h*_+g*a;const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jp=class Jp{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(w_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(w_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bf.copy(this).projectOnVector(e),this.sub(bf)}reflect(e){return this.sub(bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jp.prototype.isVector3=!0;let G=Jp;const bf=new G,w_=new Ma,jp=class jp{constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],g=r[0],p=r[3],_=r[6],x=r[1],y=r[4],v=r[7],C=r[2],T=r[5],E=r[8];return s[0]=o*g+a*x+l*C,s[3]=o*p+a*y+l*T,s[6]=o*_+a*v+l*E,s[1]=c*g+u*x+h*C,s[4]=c*p+u*y+h*T,s[7]=c*_+u*v+h*E,s[2]=f*g+d*x+m*C,s[5]=f*p+d*y+m*T,s[8]=f*_+d*v+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=t*h+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ef.makeScale(e,t)),this}rotate(e){return this.premultiply(Ef.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ef.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jp.prototype.isMatrix3=!0;let nt=jp;const Ef=new nt,C_=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R_=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oT(){const i={enabled:!0,workingColorSpace:Mu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===bt&&(r.r=Vr(r.r),r.g=Vr(r.g),r.b=Vr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(r.r=oa(r.r),r.g=oa(r.g),r.b=oa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cs?yu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return wd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return wd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mu]:{primaries:e,whitePoint:n,transfer:yu,toXYZ:C_,fromXYZ:R_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:C_,fromXYZ:R_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),i}const mt=oT();function Vr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ao;class aT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ao===void 0&&(Ao=bu("canvas")),Ao.width=e.width,Ao.height=e.height;const r=Ao.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ao}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bu("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vr(t[n]/255)*255):t[n]=Vr(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lT=0;class Bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tf(r[o].image)):s.push(Tf(r[o]))}else s=Tf(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?aT.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let cT=0;const Af=new G;class kn extends po{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,n=Or,r=Or,s=On,o=Ks,a=Hi,l=Si,c=kn.DEFAULT_ANISOTROPY,u=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=mo(),this.name="",this.source=new Bp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Af).x}get height(){return this.source.getSize(Af).y}get depth(){return this.source.getSize(Af).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $h:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $h:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=pv;kn.DEFAULT_ANISOTROPY=1;const Qp=class Qp{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],g=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(d+1)/2,C=(_+1)/2,T=(u+f)/4,E=(h+g)/4,S=(m+p)/4;return y>v&&y>C?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=E/n):v>C?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=S/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=E/s,r=S/s),this.set(n,r,s,t),this}let x=Math.sqrt((p-m)*(p-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(h-g)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qp.prototype.isVector4=!0;let Yt=Qp;class uT extends po{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new kn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Bp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends uT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bv extends kn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fT extends kn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wu=class wu{constructor(e,t,n,r,s,o,a,l,c,u,h,f,d,m,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,d,m,g,p)}set(e,t,n,r,s,o,a,l,c,u,h,f,d,m,g,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=m,_[11]=g,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wu().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/wo.setFromMatrixColumn(e,0).length(),s=1/wo.setFromMatrixColumn(e,1).length(),o=1/wo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,g=c*h;t[0]=f+g*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,g=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hT,e,dT)}lookAt(e,t,n){const r=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),es.crossVectors(n,fi),es.lengthSq()===0&&(Math.abs(n.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),es.crossVectors(n,fi)),es.normalize(),lc.crossVectors(fi,es),r[0]=es.x,r[4]=lc.x,r[8]=fi.x,r[1]=es.y,r[5]=lc.y,r[9]=fi.y,r[2]=es.z,r[6]=lc.z,r[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],g=n[6],p=n[10],_=n[14],x=n[3],y=n[7],v=n[11],C=n[15],T=r[0],E=r[4],S=r[8],A=r[12],I=r[1],N=r[5],B=r[9],ee=r[13],te=r[2],z=r[6],Y=r[10],F=r[14],ne=r[3],me=r[7],U=r[11],Ae=r[15];return s[0]=o*T+a*I+l*te+c*ne,s[4]=o*E+a*N+l*z+c*me,s[8]=o*S+a*B+l*Y+c*U,s[12]=o*A+a*ee+l*F+c*Ae,s[1]=u*T+h*I+f*te+d*ne,s[5]=u*E+h*N+f*z+d*me,s[9]=u*S+h*B+f*Y+d*U,s[13]=u*A+h*ee+f*F+d*Ae,s[2]=m*T+g*I+p*te+_*ne,s[6]=m*E+g*N+p*z+_*me,s[10]=m*S+g*B+p*Y+_*U,s[14]=m*A+g*ee+p*F+_*Ae,s[3]=x*T+y*I+v*te+C*ne,s[7]=x*E+y*N+v*z+C*me,s[11]=x*S+y*B+v*Y+C*U,s[15]=x*A+y*ee+v*F+C*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],g=e[7],p=e[11],_=e[15],x=l*d-c*f,y=a*d-c*h,v=a*f-l*h,C=o*d-c*u,T=o*f-l*u,E=o*h-a*u;return t*(g*x-p*y+_*v)-n*(m*x-p*C+_*T)+r*(m*y-g*C+_*E)-s*(m*v-g*T+p*E)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],g=e[13],p=e[14],_=e[15],x=t*a-n*o,y=t*l-r*o,v=t*c-s*o,C=n*l-r*a,T=n*c-s*a,E=r*c-s*l,S=u*g-h*m,A=u*p-f*m,I=u*_-d*m,N=h*p-f*g,B=h*_-d*g,ee=f*_-d*p,te=x*ee-y*B+v*N+C*I-T*A+E*S;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/te;return e[0]=(a*ee-l*B+c*N)*z,e[1]=(r*B-n*ee-s*N)*z,e[2]=(g*E-p*T+_*C)*z,e[3]=(f*T-h*E-d*C)*z,e[4]=(l*I-o*ee-c*A)*z,e[5]=(t*ee-r*I+s*A)*z,e[6]=(p*v-m*E-_*y)*z,e[7]=(u*E-f*v+d*y)*z,e[8]=(o*B-a*I+c*S)*z,e[9]=(n*I-t*B-s*S)*z,e[10]=(m*T-g*v+_*x)*z,e[11]=(h*v-u*T-d*x)*z,e[12]=(a*A-o*N-l*S)*z,e[13]=(t*N-n*A+r*S)*z,e[14]=(g*y-m*C-p*x)*z,e[15]=(u*C-h*y+f*x)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,g=o*u,p=o*h,_=a*h,x=l*c,y=l*u,v=l*h,C=n.x,T=n.y,E=n.z;return r[0]=(1-(g+_))*C,r[1]=(d+v)*C,r[2]=(m-y)*C,r[3]=0,r[4]=(d-v)*T,r[5]=(1-(f+_))*T,r[6]=(p+x)*T,r[7]=0,r[8]=(m+y)*E,r[9]=(p-x)*E,r[10]=(1-(f+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=wo.set(r[0],r[1],r[2]).length();const a=wo.set(r[4],r[5],r[6]).length(),l=wo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Bi.copy(this);const c=1/o,u=1/a,h=1/l;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=u,Bi.elements[5]*=u,Bi.elements[6]*=u,Bi.elements[8]*=h,Bi.elements[9]*=h,Bi.elements[10]*=h,t.setFromRotationMatrix(Bi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=dr,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let m,g;if(l)m=s/(o-s),g=o*s/(o-s);else if(a===dr)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Il)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=dr,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),d=-(n+r)/(n-r);let m,g;if(l)m=1/(o-s),g=o/(o-s);else if(a===dr)m=-2/(o-s),g=-(o+s)/(o-s);else if(a===Il)m=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wu.prototype.isMatrix4=!0;let Ot=wu;const wo=new G,Bi=new Ot,hT=new G(0,0,0),dT=new G(1,1,1),es=new G,lc=new G,fi=new G,P_=new Ot,D_=new Ma;class As{constructor(e=0,t=0,n=0,r=As.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return P_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(P_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return D_.setFromEuler(this),this.setFromQuaternion(D_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}As.DEFAULT_ORDER="XYZ";class zp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pT=0;const L_=new G,Co=new Ma,Er=new Ot,cc=new G,Ca=new G,mT=new G,_T=new Ma,I_=new G(1,0,0),N_=new G(0,1,0),U_=new G(0,0,1),F_={type:"added"},gT={type:"removed"},Ro={type:"childadded",child:null},wf={type:"childremoved",child:null};class xn extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new G,t=new As,n=new Ma,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new nt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Co.setFromAxisAngle(e,t),this.quaternion.multiply(Co),this}rotateOnWorldAxis(e,t){return Co.setFromAxisAngle(e,t),this.quaternion.premultiply(Co),this}rotateX(e){return this.rotateOnAxis(I_,e)}rotateY(e){return this.rotateOnAxis(N_,e)}rotateZ(e){return this.rotateOnAxis(U_,e)}translateOnAxis(e,t){return L_.copy(e).applyQuaternion(this.quaternion),this.position.add(L_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(I_,e)}translateY(e){return this.translateOnAxis(N_,e)}translateZ(e){return this.translateOnAxis(U_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cc.copy(e):cc.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(Ca,cc,this.up):Er.lookAt(cc,Ca,this.up),this.quaternion.setFromRotationMatrix(Er),r&&(Er.extractRotation(r.matrixWorld),Co.setFromRotationMatrix(Er),this.quaternion.premultiply(Co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F_),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gT),wf.child=e,this.dispatchEvent(wf),wf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F_),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,mT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,_T,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}xn.DEFAULT_UP=new G(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ms extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xT={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),_=this._getHandJoint(c,g);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Rf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=mt.workingColorSpace){if(e=Op(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Rf(o,s,e+1/3),this.g=Rf(o,s,e),this.b=Rf(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=ti){function n(s){s!==void 0&&parseFloat(s)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const n=Ev[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return mt.workingToColorSpace(Pn.copy(this),e),Math.round(ft(Pn.r*255,0,255))*65536+Math.round(ft(Pn.g*255,0,255))*256+Math.round(ft(Pn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Pn.copy(this),t);const n=Pn.r,r=Pn.g,s=Pn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=ti){mt.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,n=Pn.g,r=Pn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(uc);const n=hl(ts.h,uc.h,t),r=hl(ts.s,uc.s,t),s=hl(ts.l,uc.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new dt;dt.NAMES=Ev;class O_ extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new As,this.environmentIntensity=1,this.environmentRotation=new As,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zi=new G,Tr=new G,Pf=new G,Ar=new G,Po=new G,Do=new G,B_=new G,Df=new G,Lf=new G,If=new G,Nf=new Yt,Uf=new Yt,Ff=new Yt;class Ii{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zi.subVectors(e,t),r.cross(zi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){zi.subVectors(r,t),Tr.subVectors(n,t),Pf.subVectors(e,t);const o=zi.dot(zi),a=zi.dot(Tr),l=zi.dot(Pf),c=Tr.dot(Tr),u=Tr.dot(Pf),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ar.x),l.addScaledVector(o,Ar.y),l.addScaledVector(a,Ar.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Nf.setScalar(0),Uf.setScalar(0),Ff.setScalar(0),Nf.fromBufferAttribute(e,t),Uf.fromBufferAttribute(e,n),Ff.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Nf,s.x),o.addScaledVector(Uf,s.y),o.addScaledVector(Ff,s.z),o}static isFrontFacing(e,t,n,r){return zi.subVectors(n,t),Tr.subVectors(e,t),zi.cross(Tr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),zi.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ii.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Po.subVectors(r,n),Do.subVectors(s,n),Df.subVectors(e,n);const l=Po.dot(Df),c=Do.dot(Df);if(l<=0&&c<=0)return t.copy(n);Lf.subVectors(e,r);const u=Po.dot(Lf),h=Do.dot(Lf);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Po,o);If.subVectors(e,s);const d=Po.dot(If),m=Do.dot(If);if(m>=0&&d<=m)return t.copy(s);const g=d*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Do,a);const p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return B_.subVectors(s,r),a=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(B_,a);const _=1/(p+g+f);return o=g*_,a=f*_,t.copy(n).addScaledVector(Po,o).addScaledVector(Do,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hl{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ki):ki.fromBufferAttribute(s,o),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fc.copy(n.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),hc.subVectors(this.max,Ra),Lo.subVectors(e.a,Ra),Io.subVectors(e.b,Ra),No.subVectors(e.c,Ra),ns.subVectors(Io,Lo),is.subVectors(No,Io),Us.subVectors(Lo,No);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Us.z,Us.y,ns.z,0,-ns.x,is.z,0,-is.x,Us.z,0,-Us.x,-ns.y,ns.x,0,-is.y,is.x,0,-Us.y,Us.x,0];return!Of(t,Lo,Io,No,hc)||(t=[1,0,0,0,1,0,0,0,1],!Of(t,Lo,Io,No,hc))?!1:(dc.crossVectors(ns,is),t=[dc.x,dc.y,dc.z],Of(t,Lo,Io,No,hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wr=[new G,new G,new G,new G,new G,new G,new G,new G],ki=new G,fc=new Hl,Lo=new G,Io=new G,No=new G,ns=new G,is=new G,Us=new G,Ra=new G,hc=new G,dc=new G,Fs=new G;function Of(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Fs.fromArray(i,s);const a=r.x*Math.abs(Fs.x)+r.y*Math.abs(Fs.y)+r.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),u=n.dot(Fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const nn=new G,pc=new Be;let vT=0;class Yi extends po{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=y_,this.updateRanges=[],this.gpuType=hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ho(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),n=Wn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),n=Wn(n,this.array),r=Wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),n=Wn(n,this.array),r=Wn(r,this.array),s=Wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==y_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Tv extends Yi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Av extends Yi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends Yi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ST=new Hl,Pa=new G,Bf=new G;class Gl{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ST.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Pa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Bf)),this.expandByPoint(Pa.copy(e.center).sub(Bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let MT=0;const Ri=new Ot,zf=new xn,Uo=new G,hi=new Hl,Da=new Hl,mn=new G;class cn extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kE(e)?Av:Tv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,n){return Ri.makeTranslation(e,t,n),this.applyMatrix4(Ri),this}scale(e,t,n){return Ri.makeScale(e,t,n),this.applyMatrix4(Ri),this}lookAt(e){return zf.lookAt(e),zf.updateMatrix(),this.applyMatrix4(zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Da.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(hi.min,Da.min),hi.expandByPoint(mn),mn.addVectors(hi.max,Da.max),hi.expandByPoint(mn)):(hi.expandByPoint(Da.min),hi.expandByPoint(Da.max))}hi.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)mn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mn.fromBufferAttribute(a,c),l&&(Uo.fromBufferAttribute(e,c),mn.add(Uo)),r=Math.max(r,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new G,l[S]=new G;const c=new G,u=new G,h=new G,f=new Be,d=new Be,m=new Be,g=new G,p=new G;function _(S,A,I){c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,I),f.fromBufferAttribute(s,S),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,I),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const N=1/(d.x*m.y-m.x*d.y);isFinite(N)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(N),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(N),a[S].add(g),a[A].add(g),a[I].add(g),l[S].add(p),l[A].add(p),l[I].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,A=x.length;S<A;++S){const I=x[S],N=I.start,B=I.count;for(let ee=N,te=N+B;ee<te;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const y=new G,v=new G,C=new G,T=new G;function E(S){C.fromBufferAttribute(r,S),T.copy(C);const A=a[S];y.copy(A),y.sub(C.multiplyScalar(C.dot(A))).normalize(),v.crossVectors(T,A);const N=v.dot(l[S])<0?-1:1;o.setXYZW(S,y.x,y.y,y.z,N)}for(let S=0,A=x.length;S<A;++S){const I=x[S],N=I.start,B=I.count;for(let ee=N,te=N+B;ee<te;ee+=3)E(e.getX(ee+0)),E(e.getX(ee+1)),E(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let _=0;_<u;_++)f[m++]=c[d++]}return new Yi(f,u,h)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let yT=0;class _o extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yT++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=ra,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=kh,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(n.blending=this.blending),this.side!==Ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zh&&(n.blendSrc=this.blendSrc),this.blendDst!==kh&&(n.blendDst=this.blendDst),this.blendEquation!==Ws&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M_&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==To&&(n.stencilFail=this.stencilFail),this.stencilZFail!==To&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==To&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Cr=new G,kf=new G,mc=new G,rs=new G,Vf=new G,_c=new G,Hf=new G;class Hu{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cr.copy(this.origin).addScaledVector(this.direction,t),Cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){kf.copy(e).add(t).multiplyScalar(.5),mc.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(kf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(mc),a=rs.dot(this.direction),l=-rs.dot(mc),c=rs.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(kf).addScaledVector(mc,f),d}intersectSphere(e,t){Cr.subVectors(e.center,this.origin);const n=Cr.dot(this.direction),r=Cr.dot(Cr)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Cr)!==null}intersectTriangle(e,t,n,r,s){Vf.subVectors(t,e),_c.subVectors(n,e),Hf.crossVectors(Vf,_c);let o=this.direction.dot(Hf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(_c.crossVectors(rs,_c));if(l<0)return null;const c=a*this.direction.dot(Vf.cross(rs));if(c<0||l+c>o)return null;const u=-a*rs.dot(Hf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yo extends _o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new As,this.combine=ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const z_=new Ot,Os=new Hu,gc=new Gl,k_=new G,xc=new G,vc=new G,Sc=new G,Gf=new G,Mc=new G,V_=new G,yc=new G;class Zn extends xn{constructor(e=new cn,t=new Yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Mc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Gf.fromBufferAttribute(h,e),o?Mc.addScaledVector(Gf,u):Mc.addScaledVector(Gf.sub(t),u))}t.add(Mc)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(s),Os.copy(e.ray).recast(e.near),!(gc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(gc,k_)===null||Os.origin.distanceToSquared(k_)>(e.far-e.near)**2))&&(z_.copy(s).invert(),Os.copy(e.ray).applyMatrix4(z_),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const p=f[m],_=o[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,C=y;v<C;v+=3){const T=a.getX(v),E=a.getX(v+1),S=a.getX(v+2);r=bc(this,_,e,n,c,u,h,T,E,S),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=m,_=g;p<_;p+=3){const x=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);r=bc(this,o,e,n,c,u,h,x,y,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const p=f[m],_=o[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,C=y;v<C;v+=3){const T=v,E=v+1,S=v+2;r=bc(this,_,e,n,c,u,h,T,E,S),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=m,_=g;p<_;p+=3){const x=p,y=p+1,v=p+2;r=bc(this,o,e,n,c,u,h,x,y,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function bT(i,e,t,n,r,s,o,a){let l;if(e.side===ai?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Ts,a),l===null)return null;yc.copy(a),yc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(yc);return c<t.near||c>t.far?null:{distance:c,point:yc.clone(),object:i}}function bc(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,xc),i.getVertexPosition(l,vc),i.getVertexPosition(c,Sc);const u=bT(i,e,t,n,xc,vc,Sc,V_);if(u){const h=new G;Ii.getBarycoord(V_,xc,vc,Sc,h),r&&(u.uv=Ii.getInterpolatedAttribute(r,a,l,c,h,new Be)),s&&(u.uv1=Ii.getInterpolatedAttribute(s,a,l,c,h,new Be)),o&&(u.normal=Ii.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new G,materialIndex:0};Ii.getNormal(xc,vc,Sc,f.normal),u.face=f,u.barycoord=h}return u}class ET extends kn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Tn,u=Tn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wf=new G,TT=new G,AT=new nt;class Gs{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Wf.subVectors(n,t).cross(TT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Wf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||AT.getNormalMatrix(e),r=this.coplanarPoint(Wf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new Gl,wT=new Be(.5,.5),Ec=new G;class kp{constructor(e=new Gs,t=new Gs,n=new Gs,r=new Gs,s=new Gs,o=new Gs){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dr,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],g=s[9],p=s[10],_=s[11],x=s[12],y=s[13],v=s[14],C=s[15];if(r[0].setComponents(c-o,d-u,_-m,C-x).normalize(),r[1].setComponents(c+o,d+u,_+m,C+x).normalize(),r[2].setComponents(c+a,d+h,_+g,C+y).normalize(),r[3].setComponents(c-a,d-h,_-g,C-y).normalize(),n)r[4].setComponents(l,f,p,v).normalize(),r[5].setComponents(c-l,d-f,_-p,C-v).normalize();else if(r[4].setComponents(c-l,d-f,_-p,C-v).normalize(),t===dr)r[5].setComponents(c+l,d+f,_+p,C+v).normalize();else if(t===Il)r[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);const t=wT.distanceTo(e.center);return Bs.radius=.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ec.x=r.normal.x>0?e.max.x:e.min.x,Ec.y=r.normal.y>0?e.max.y:e.min.y,Ec.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cd extends _o{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eu=new G,Tu=new G,H_=new Ot,La=new Hu,Tc=new Gl,Xf=new G,G_=new G;class wv extends xn{constructor(e=new cn,t=new Cd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Eu.fromBufferAttribute(t,r-1),Tu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Eu.distanceTo(Tu);e.setAttribute("lineDistance",new Dt(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(r),Tc.radius+=s,e.ray.intersectsSphere(Tc)===!1)return;H_.copy(r).invert(),La.copy(e.ray).applyMatrix4(H_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,p=m-1;g<p;g+=c){const _=u.getX(g),x=u.getX(g+1),y=Ac(this,e,La,l,_,x,g);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(m-1),p=u.getX(d),_=Ac(this,e,La,l,g,p,m-1);_&&t.push(_)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,p=m-1;g<p;g+=c){const _=Ac(this,e,La,l,g,g+1,g);_&&t.push(_)}if(this.isLineLoop){const g=Ac(this,e,La,l,m-1,d,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ac(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Eu.fromBufferAttribute(a,r),Tu.fromBufferAttribute(a,s),t.distanceSqToSegment(Eu,Tu,Xf,G_)>n)return;Xf.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Xf);if(!(c<e.near||c>e.far))return{distance:c,point:G_.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const W_=new G,X_=new G;class CT extends wv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)W_.fromBufferAttribute(t,r),X_.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+W_.distanceTo(X_);e.setAttribute("lineDistance",new Dt(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cv extends _o{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Y_=new Ot,Rd=new Hu,wc=new Gl,Cc=new G;class RT extends xn{constructor(e=new cn,t=new Cv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(r),wc.radius+=s,e.ray.intersectsSphere(wc)===!1)return;Y_.copy(r).invert(),Rd.copy(e.ray).applyMatrix4(Y_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,g=d;m<g;m++){const p=c.getX(m);Cc.fromBufferAttribute(h,p),q_(Cc,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,g=d;m<g;m++)Cc.fromBufferAttribute(h,m),q_(Cc,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function q_(i,e,t,n,r,s,o){const a=Rd.distanceSqToPoint(i);if(a<t){const l=new G;Rd.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Rv extends kn{constructor(e=[],t=co,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PT extends kn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xa extends kn{constructor(e,t,n=vr,r,s,o,a=Tn,l=Tn,c,u=$r,h=1){if(u!==$r&&u!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class DT extends xa{constructor(e,t=vr,n=co,r,s,o=Tn,a=Tn,l,c=$r){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Pv extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wl extends cn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function m(g,p,_,x,y,v,C,T,E,S,A){const I=v/E,N=C/S,B=v/2,ee=C/2,te=T/2,z=E+1,Y=S+1;let F=0,ne=0;const me=new G;for(let U=0;U<Y;U++){const Ae=U*N-ee;for(let Ne=0;Ne<z;Ne++){const ue=Ne*I-B;me[g]=ue*x,me[p]=Ae*y,me[_]=te,c.push(me.x,me.y,me.z),me[g]=0,me[p]=0,me[_]=T>0?1:-1,u.push(me.x,me.y,me.z),h.push(Ne/E),h.push(1-U/S),F+=1}}for(let U=0;U<S;U++)for(let Ae=0;Ae<E;Ae++){const Ne=f+Ae+z*U,ue=f+Ae+z*(U+1),fe=f+(Ae+1)+z*(U+1),q=f+(Ae+1)+z*U;l.push(Ne,ue,q),l.push(ue,fe,q),ne+=6}a.addGroup(d,ne,A),d+=ne,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vp extends cn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(s.slice(),3)),this.setAttribute("uv",new Dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new G,v=new G,C=new G;for(let T=0;T<t.length;T+=3)d(t[T+0],y),d(t[T+1],v),d(t[T+2],C),l(y,v,C,x)}function l(x,y,v,C){const T=C+1,E=[];for(let S=0;S<=T;S++){E[S]=[];const A=x.clone().lerp(v,S/T),I=y.clone().lerp(v,S/T),N=T-S;for(let B=0;B<=N;B++)B===0&&S===T?E[S][B]=A:E[S][B]=A.clone().lerp(I,B/N)}for(let S=0;S<T;S++)for(let A=0;A<2*(T-S)-1;A++){const I=Math.floor(A/2);A%2===0?(f(E[S][I+1]),f(E[S+1][I]),f(E[S][I])):(f(E[S][I+1]),f(E[S+1][I+1]),f(E[S+1][I]))}}function c(x){const y=new G;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const x=new G;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const v=p(x)/2/Math.PI+.5,C=_(x)/Math.PI+.5;o.push(v,1-C)}m(),h()}function h(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],C=o[x+4],T=Math.max(y,v,C),E=Math.min(y,v,C);T>.9&&E<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){const x=new G,y=new G,v=new G,C=new G,T=new Be,E=new Be,S=new Be;for(let A=0,I=0;A<s.length;A+=9,I+=6){x.set(s[A+0],s[A+1],s[A+2]),y.set(s[A+3],s[A+4],s[A+5]),v.set(s[A+6],s[A+7],s[A+8]),T.set(o[I+0],o[I+1]),E.set(o[I+2],o[I+3]),S.set(o[I+4],o[I+5]),C.copy(x).add(y).add(v).divideScalar(3);const N=p(C);g(T,I+0,x,N),g(E,I+2,y,N),g(S,I+4,v,N)}}function g(x,y,v,C){C<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=C/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function _(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vp(e.vertices,e.indices,e.radius,e.detail)}}const Rc=new G,Pc=new G,Yf=new G,Dc=new Ii;class LT extends cn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(sa*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:g,b:p,c:_}=Dc;if(g.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),Dc.getNormal(Yf),h[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const y=(x+1)%3,v=h[x],C=h[y],T=Dc[u[x]],E=Dc[u[y]],S=`${v}_${C}`,A=`${C}_${v}`;A in f&&f[A]?(Yf.dot(f[A].normal)<=s&&(d.push(T.x,T.y,T.z),d.push(E.x,E.y,E.z)),f[A]=null):S in f||(f[S]={index0:c[x],index1:c[y],normal:Yf.clone()})}}for(const m in f)if(f[m]){const{index0:g,index1:p}=f[m];Rc.fromBufferAttribute(a,g),Pc.fromBufferAttribute(a,p),d.push(Rc.x,Rc.y,Rc.z),d.push(Pc.x,Pc.y,Pc.z)}this.setAttribute("position",new Dt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Mr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Be:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new G,r=[],s=[],o=[],a=new G,l=new Ot;for(let d=0;d<=e;d++){const m=d/e;r[d]=this.getTangentAt(m,new G)}s[0]=new G,o[0]=new G;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ft(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(ft(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hp extends Mr{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Be){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class IT extends Hp{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gp(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const $_=new G,K_=new G,qf=new Gp,$f=new Gp,Kf=new Gp;class NT extends Mr{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new G){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(K_.subVectors(r[0],r[1]).add(r[0]),c=K_);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:($_.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=$_),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),m<1e-4&&(m=g),p<1e-4&&(p=g),qf.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,g,p),$f.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,g,p),Kf.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,g,p)}else this.curveType==="catmullrom"&&(qf.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),$f.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Kf.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(qf.calc(l),$f.calc(l),Kf.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new G().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Z_(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function UT(i,e){const t=1-i;return t*t*e}function FT(i,e){return 2*(1-i)*i*e}function OT(i,e){return i*i*e}function dl(i,e,t,n){return UT(i,e)+FT(i,t)+OT(i,n)}function BT(i,e){const t=1-i;return t*t*t*e}function zT(i,e){const t=1-i;return 3*t*t*i*e}function kT(i,e){return 3*(1-i)*i*i*e}function VT(i,e){return i*i*i*e}function pl(i,e,t,n,r){return BT(i,e)+zT(i,t)+kT(i,n)+VT(i,r)}class Dv extends Mr{constructor(e=new Be,t=new Be,n=new Be,r=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Be){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(pl(e,r.x,s.x,o.x,a.x),pl(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class HT extends Mr{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(pl(e,r.x,s.x,o.x,a.x),pl(e,r.y,s.y,o.y,a.y),pl(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lv extends Mr{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class GT extends Mr{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iv extends Mr{constructor(e=new Be,t=new Be,n=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Be){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(dl(e,r.x,s.x,o.x),dl(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class WT extends Mr{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(dl(e,r.x,s.x,o.x),dl(e,r.y,s.y,o.y),dl(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nv extends Mr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Z_(a,l.x,c.x,u.x,h.x),Z_(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Be().fromArray(r))}return this}}var Pd=Object.freeze({__proto__:null,ArcCurve:IT,CatmullRomCurve3:NT,CubicBezierCurve:Dv,CubicBezierCurve3:HT,EllipseCurve:Hp,LineCurve:Lv,LineCurve3:GT,QuadraticBezierCurve:Iv,QuadraticBezierCurve3:WT,SplineCurve:Nv});class XT extends Mr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pd[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Pd[r.type]().fromJSON(r))}return this}}class J_ extends XT{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Lv(this.currentPoint.clone(),new Be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Iv(this.currentPoint.clone(),new Be(e,t),new Be(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Dv(this.currentPoint.clone(),new Be(e,t),new Be(n,r),new Be(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Nv(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Hp(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wp extends J_{constructor(e){super(e),this.uuid=mo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new J_().fromJSON(r))}return this}}function YT(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Uv(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=JT(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let u=a,h=l;for(let f=t;f<r;f+=t){const d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Ul(s,o,t,a,l,c,0),o}function Uv(i,e,t,n,r){let s;if(r===l1(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=j_(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=j_(o/n|0,i[o],i[o+1],s);return s&&va(s,s.next)&&(Ol(s),s=s.next),s}function fo(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(va(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Ol(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ul(i,e,t,n,r,s,o){if(!i)return;!o&&s&&n1(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?$T(i,n,r,s):qT(i)){e.push(l.i,i.i,c.i),Ol(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=KT(fo(i),e),Ul(i,e,t,n,r,s,2)):o===2&&ZT(i,e,t,n,r,s):Ul(fo(i),e,t,n,r,s,1);break}}}function qT(i){const e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c);let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&Xa(r,a,s,l,o,c,m.x,m.y)&&Wt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $T(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Wt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,l,c),m=Math.min(u,h,f),g=Math.max(a,l,c),p=Math.max(u,h,f),_=Dd(d,m,e,t,n),x=Dd(g,p,e,t,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=_&&v&&v.z<=x;){if(y.x>=d&&y.x<=g&&y.y>=m&&y.y<=p&&y!==r&&y!==o&&Xa(a,u,l,h,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=g&&v.y>=m&&v.y<=p&&v!==r&&v!==o&&Xa(a,u,l,h,c,f,v.x,v.y)&&Wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=_;){if(y.x>=d&&y.x<=g&&y.y>=m&&y.y<=p&&y!==r&&y!==o&&Xa(a,u,l,h,c,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=g&&v.y>=m&&v.y<=p&&v!==r&&v!==o&&Xa(a,u,l,h,c,f,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function KT(i,e){let t=i;do{const n=t.prev,r=t.next.next;!va(n,r)&&Ov(n,t,t.next,r)&&Fl(n,r)&&Fl(r,n)&&(e.push(n.i,t.i,r.i),Ol(t),Ol(t.next),t=i=r),t=t.next}while(t!==i);return fo(t)}function ZT(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&s1(o,a)){let l=Bv(o,a);o=fo(o,o.next),l=fo(l,l.next),Ul(o,e,t,n,r,s,0),Ul(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function JT(i,e,t,n){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Uv(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(r1(c))}r.sort(jT);for(let s=0;s<r.length;s++)t=QT(r[s],t);return t}function jT(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function QT(i,e){const t=e1(i,e);if(!t)return e;const n=Bv(t,i);return fo(n,n.next),fo(t,t.next)}function e1(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;if(va(i,t))return t;do{if(va(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Fv(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const h=Math.abs(r-t.y)/(n-t.x);Fl(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&t1(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function t1(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function n1(i,e,t,n){let r=i;do r.z===0&&(r.z=Dd(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,i1(r)}function i1(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Dd(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function r1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fv(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Xa(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Fv(i,e,t,n,r,s,o,a)}function s1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!o1(i,e)&&(Fl(i,e)&&Fl(e,i)&&a1(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||va(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function va(i,e){return i.x===e.x&&i.y===e.y}function Ov(i,e,t,n){const r=Ic(Wt(i,e,t)),s=Ic(Wt(i,e,n)),o=Ic(Wt(t,n,i)),a=Ic(Wt(t,n,e));return!!(r!==s&&o!==a||r===0&&Lc(i,t,e)||s===0&&Lc(i,n,e)||o===0&&Lc(t,i,n)||a===0&&Lc(t,e,n))}function Lc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ic(i){return i>0?1:i<0?-1:0}function o1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ov(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fl(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function a1(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bv(i,e){const t=Ld(i.i,i.x,i.y),n=Ld(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function j_(i,e,t,n){const r=Ld(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ol(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ld(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function l1(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class c1{static triangulate(e,t,n=2){return YT(e,t,n)}}class Br{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Br.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Q_(e),eg(n,e);let o=e.length;t.forEach(Q_);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,eg(n,t[l]);const a=c1.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Q_(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function eg(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Xp extends cn{constructor(e=new Wp([new Be(.5,.5),new Be(-.5,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Dt(r,3)),this.setAttribute("uv",new Dt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:u1;let y,v=!1,C,T,E,S;if(_){y=_.getSpacedPoints(u),v=!0,f=!1;const P=_.isCatmullRomCurve3?_.closed:!1;C=_.computeFrenetFrames(u,P),T=new G,E=new G,S=new G}f||(p=0,d=0,m=0,g=0);const A=a.extractPoints(c);let I=A.shape;const N=A.holes;if(!Br.isClockWise(I)){I=I.reverse();for(let P=0,O=N.length;P<O;P++){const V=N[P];Br.isClockWise(V)&&(N[P]=V.reverse())}}function ee(P){const V=10000000000000001e-36;let L=P[0];for(let X=1;X<=P.length;X++){const he=X%P.length,D=P[he],se=D.x-L.x,K=D.y-L.y,ve=se*se+K*K,Z=Math.max(Math.abs(D.x),Math.abs(D.y),Math.abs(L.x),Math.abs(L.y)),Me=V*Z*Z;if(ve<=Me){P.splice(he,1),X--;continue}L=D}}ee(I),N.forEach(ee);const te=N.length,z=I;for(let P=0;P<te;P++){const O=N[P];I=I.concat(O)}function Y(P,O,V){return O||pt("ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(O,V)}const F=I.length;function ne(P,O,V){let L,X,he;const D=P.x-O.x,se=P.y-O.y,K=V.x-P.x,ve=V.y-P.y,Z=D*D+se*se,Me=D*ve-se*K;if(Math.abs(Me)>Number.EPSILON){const b=Math.sqrt(Z),M=Math.sqrt(K*K+ve*ve),H=O.x-se/b,j=O.y+D/b,de=V.x-ve/M,ge=V.y+K/M,le=((de-H)*ve-(ge-j)*K)/(D*ve-se*K);L=H+D*le-P.x,X=j+se*le-P.y;const J=L*L+X*X;if(J<=2)return new Be(L,X);he=Math.sqrt(J/2)}else{let b=!1;D>Number.EPSILON?K>Number.EPSILON&&(b=!0):D<-Number.EPSILON?K<-Number.EPSILON&&(b=!0):Math.sign(se)===Math.sign(ve)&&(b=!0),b?(L=-se,X=D,he=Math.sqrt(Z)):(L=D,X=se,he=Math.sqrt(Z/2))}return new Be(L/he,X/he)}const me=[];for(let P=0,O=z.length,V=O-1,L=P+1;P<O;P++,V++,L++)V===O&&(V=0),L===O&&(L=0),me[P]=ne(z[P],z[V],z[L]);const U=[];let Ae,Ne=me.concat();for(let P=0,O=te;P<O;P++){const V=N[P];Ae=[];for(let L=0,X=V.length,he=X-1,D=L+1;L<X;L++,he++,D++)he===X&&(he=0),D===X&&(D=0),Ae[L]=ne(V[L],V[he],V[D]);U.push(Ae),Ne=Ne.concat(Ae)}let ue;if(p===0)ue=Br.triangulateShape(z,N);else{const P=[],O=[];for(let V=0;V<p;V++){const L=V/p,X=d*Math.cos(L*Math.PI/2),he=m*Math.sin(L*Math.PI/2)+g;for(let D=0,se=z.length;D<se;D++){const K=Y(z[D],me[D],he);ye(K.x,K.y,-X),L===0&&P.push(K)}for(let D=0,se=te;D<se;D++){const K=N[D];Ae=U[D];const ve=[];for(let Z=0,Me=K.length;Z<Me;Z++){const b=Y(K[Z],Ae[Z],he);ye(b.x,b.y,-X),L===0&&ve.push(b)}L===0&&O.push(ve)}}ue=Br.triangulateShape(P,O)}const fe=ue.length,q=m+g;for(let P=0;P<F;P++){const O=f?Y(I[P],Ne[P],q):I[P];v?(E.copy(C.normals[0]).multiplyScalar(O.x),T.copy(C.binormals[0]).multiplyScalar(O.y),S.copy(y[0]).add(E).add(T),ye(S.x,S.y,S.z)):ye(O.x,O.y,0)}for(let P=1;P<=u;P++)for(let O=0;O<F;O++){const V=f?Y(I[O],Ne[O],q):I[O];v?(E.copy(C.normals[P]).multiplyScalar(V.x),T.copy(C.binormals[P]).multiplyScalar(V.y),S.copy(y[P]).add(E).add(T),ye(S.x,S.y,S.z)):ye(V.x,V.y,h/u*P)}for(let P=p-1;P>=0;P--){const O=P/p,V=d*Math.cos(O*Math.PI/2),L=m*Math.sin(O*Math.PI/2)+g;for(let X=0,he=z.length;X<he;X++){const D=Y(z[X],me[X],L);ye(D.x,D.y,h+V)}for(let X=0,he=N.length;X<he;X++){const D=N[X];Ae=U[X];for(let se=0,K=D.length;se<K;se++){const ve=Y(D[se],Ae[se],L);v?ye(ve.x,ve.y+y[u-1].y,y[u-1].x+V):ye(ve.x,ve.y,h+V)}}}W(),ie();function W(){const P=r.length/3;if(f){let O=0,V=F*O;for(let L=0;L<fe;L++){const X=ue[L];be(X[2]+V,X[1]+V,X[0]+V)}O=u+p*2,V=F*O;for(let L=0;L<fe;L++){const X=ue[L];be(X[0]+V,X[1]+V,X[2]+V)}}else{for(let O=0;O<fe;O++){const V=ue[O];be(V[2],V[1],V[0])}for(let O=0;O<fe;O++){const V=ue[O];be(V[0]+F*u,V[1]+F*u,V[2]+F*u)}}n.addGroup(P,r.length/3-P,0)}function ie(){const P=r.length/3;let O=0;oe(z,O),O+=z.length;for(let V=0,L=N.length;V<L;V++){const X=N[V];oe(X,O),O+=X.length}n.addGroup(P,r.length/3-P,1)}function oe(P,O){let V=P.length;for(;--V>=0;){const L=V;let X=V-1;X<0&&(X=P.length-1);for(let he=0,D=u+p*2;he<D;he++){const se=F*he,K=F*(he+1),ve=O+L+se,Z=O+X+se,Me=O+X+K,b=O+L+K;_e(ve,Z,Me,b)}}}function ye(P,O,V){l.push(P),l.push(O),l.push(V)}function be(P,O,V){Ue(P),Ue(O),Ue(V);const L=r.length/3,X=x.generateTopUV(n,r,L-3,L-2,L-1);R(X[0]),R(X[1]),R(X[2])}function _e(P,O,V,L){Ue(P),Ue(O),Ue(L),Ue(O),Ue(V),Ue(L);const X=r.length/3,he=x.generateSideWallUV(n,r,X-6,X-3,X-2,X-1);R(he[0]),R(he[1]),R(he[3]),R(he[1]),R(he[2]),R(he[3])}function Ue(P){r.push(l[P*3+0]),r.push(l[P*3+1]),r.push(l[P*3+2])}function R(P){s.push(P.x),s.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return f1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Pd[r.type]().fromJSON(r)),new Xp(n,e.options)}}const u1={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new Be(s,o),new Be(a,l),new Be(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],d=e[r*3+1],m=e[r*3+2],g=e[s*3],p=e[s*3+1],_=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Be(o,1-l),new Be(c,1-h),new Be(f,1-m),new Be(g,1-_)]:[new Be(a,1-l),new Be(u,1-h),new Be(d,1-m),new Be(p,1-_)]}};function f1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Yp extends Vp{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yp(e.radius,e.detail)}}class Gu extends cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],g=[],p=[];for(let _=0;_<u;_++){const x=_*f-o;for(let y=0;y<c;y++){const v=y*h-s;m.push(v,-x,0),g.push(0,0,1),p.push(y/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){const y=x+c*_,v=x+c*(_+1),C=x+1+c*(_+1),T=x+1+c*_;d.push(y,v,T),d.push(v,C,T)}this.setIndex(d),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(g,3)),this.setAttribute("uv",new Dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Au extends cn{constructor(e=new Wp([new Be(0,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(s,3)),this.setAttribute("uv",new Dt(o,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let d=f.shape;const m=f.holes;Br.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,_=m.length;p<_;p++){const x=m[p];Br.isClockWise(x)===!0&&(m[p]=x.reverse())}const g=Br.triangulateShape(d,m);for(let p=0,_=m.length;p<_;p++){const x=m[p];d=d.concat(x)}for(let p=0,_=d.length;p<_;p++){const x=d[p];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let p=0,_=g.length;p<_;p++){const x=g[p],y=x[0]+h,v=x[1]+h,C=x[2]+h;n.push(y,v,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return h1(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new Au(n,e.curveSegments)}}function h1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class qp extends cn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],u=[],h=[],f=new G,d=new G,m=new G;for(let g=0;g<=n;g++){const p=o+g/n*a;for(let _=0;_<=r;_++){const x=_/r*s;d.x=(e+t*Math.cos(p))*Math.cos(x),d.y=(e+t*Math.cos(p))*Math.sin(x),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),m.subVectors(d,f).normalize(),u.push(m.x,m.y,m.z),h.push(_/r),h.push(g/n)}}for(let g=1;g<=n;g++)for(let p=1;p<=r;p++){const _=(r+1)*g+p-1,x=(r+1)*(g-1)+p-1,y=(r+1)*(g-1)+p,v=(r+1)*g+p;l.push(_,x,v),l.push(x,y,v)}this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class $p extends cn{constructor(e=1,t=.4,n=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:o},n=Math.floor(n),r=Math.floor(r);const a=[],l=[],c=[],u=[],h=new G,f=new G,d=new G,m=new G,g=new G,p=new G,_=new G;for(let y=0;y<=n;++y){const v=y/n*s*Math.PI*2;x(v,s,o,e,d),x(v+.01,s,o,e,m),p.subVectors(m,d),_.addVectors(m,d),g.crossVectors(p,_),_.crossVectors(g,p),g.normalize(),_.normalize();for(let C=0;C<=r;++C){const T=C/r*Math.PI*2,E=-t*Math.cos(T),S=t*Math.sin(T);h.x=d.x+(E*_.x+S*g.x),h.y=d.y+(E*_.y+S*g.y),h.z=d.z+(E*_.z+S*g.z),l.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),u.push(y/n),u.push(C/r)}}for(let y=1;y<=n;y++)for(let v=1;v<=r;v++){const C=(r+1)*(y-1)+(v-1),T=(r+1)*y+(v-1),E=(r+1)*y+v,S=(r+1)*(y-1)+v;a.push(C,T,S),a.push(T,E,S)}this.setIndex(a),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(u,2));function x(y,v,C,T,E){const S=Math.cos(y),A=Math.sin(y),I=C/v*y,N=Math.cos(I);E.x=T*(2+N)*.5*S,E.y=T*(2+N)*A*.5,E.z=T*Math.sin(I)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $p(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Sa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(tg(r))r.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(tg(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Xn(i){const e={};for(let t=0;t<i.length;t++){const n=Sa(i[t]);for(const r in n)e[r]=n[r]}return e}function tg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function d1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const p1={clone:Sa,merge:Xn};var m1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends _o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m1,this.fragmentShader=_1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sa(e.uniforms),this.uniformsGroups=d1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class g1 extends Sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ng extends _o{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new As,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class x1 extends _o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v1 extends _o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kv extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Zf=new Ot,ig=new G,rg=new G;class S1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kp,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ig.setFromMatrixPosition(e.matrixWorld),t.position.copy(ig),rg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rg),t.updateMatrixWorld(),Zf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Il||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nc=new G,Uc=new Ma,Qi=new G;class Vv extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=dr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nc,Uc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nc,Uc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Nc,Uc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nc,Uc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ss=new G,sg=new Be,og=new Be;class gi extends Vv{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,sg,og),t.subVectors(og,sg)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Kp extends Vv{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class M1 extends S1{constructor(){super(new Kp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ag extends kv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new M1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class y1 extends kv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Fo=-90,Oo=1;class b1 extends xn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gi(Fo,Oo,e,t);r.layers=this.layers,this.add(r);const s=new gi(Fo,Oo,e,t);s.layers=this.layers,this.add(s);const o=new gi(Fo,Oo,e,t);o.layers=this.layers,this.add(o);const a=new gi(Fo,Oo,e,t);a.layers=this.layers,this.add(a);const l=new gi(Fo,Oo,e,t);l.layers=this.layers,this.add(l);const c=new gi(Fo,Oo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===dr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Il)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class E1 extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lg=new Ot;class T1{constructor(e,t,n=0,r=1/0){this.ray=new Hu(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new zp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lg),this}intersectObject(e,t=!0,n=[]){return Id(e,this,n,t),n.sort(cg),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Id(e[r],this,n,t);return n.sort(cg),n}}function cg(i,e){return i.distance-e.distance}function Id(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Id(s[o],e,t,!0)}}class A1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Qe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const em=class em{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};em.prototype.isMatrix2=!0;let ug=em;function fg(i,e,t,n){const r=w1(n);switch(t){case vv:return i*e;case Mv:return i*e/r.components*r.byteLength;case Lp:return i*e/r.components*r.byteLength;case uo:return i*e*2/r.components*r.byteLength;case Ip:return i*e*2/r.components*r.byteLength;case Sv:return i*e*3/r.components*r.byteLength;case Hi:return i*e*4/r.components*r.byteLength;case Np:return i*e*4/r.components*r.byteLength;case Jc:case jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qc:case eu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jh:case Qh:return Math.max(i,16)*Math.max(e,8)/4;case Zh:case jh:return Math.max(i,8)*Math.max(e,8)/2;case ed:case td:case id:case rd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nd:case vu:case sd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case md:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _d:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Sd:case Md:case yd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bd:case Ed:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Su:case Td:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w1(i){switch(i){case Si:case mv:return{byteLength:1,components:1};case Dl:case _v:case qr:return{byteLength:2,components:1};case Pp:case Dp:return{byteLength:2,components:4};case vr:case Rp:case hr:return{byteLength:4,components:1};case gv:case xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hv(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function C1(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],g=h[d];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const g=h[d];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var R1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,B1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,J1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,j1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Q1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sA="gl_FragColor = linearToOutputTexel( gl_FragColor );",oA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_A=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,MA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,LA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$A=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_w=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ew=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ow=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ww=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$w=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:R1,alphahash_pars_fragment:P1,alphamap_fragment:D1,alphamap_pars_fragment:L1,alphatest_fragment:I1,alphatest_pars_fragment:N1,aomap_fragment:U1,aomap_pars_fragment:F1,batching_pars_vertex:O1,batching_vertex:B1,begin_vertex:z1,beginnormal_vertex:k1,bsdfs:V1,iridescence_fragment:H1,bumpmap_pars_fragment:G1,clipping_planes_fragment:W1,clipping_planes_pars_fragment:X1,clipping_planes_pars_vertex:Y1,clipping_planes_vertex:q1,color_fragment:$1,color_pars_fragment:K1,color_pars_vertex:Z1,color_vertex:J1,common:j1,cube_uv_reflection_fragment:Q1,defaultnormal_vertex:eA,displacementmap_pars_vertex:tA,displacementmap_vertex:nA,emissivemap_fragment:iA,emissivemap_pars_fragment:rA,colorspace_fragment:sA,colorspace_pars_fragment:oA,envmap_fragment:aA,envmap_common_pars_fragment:lA,envmap_pars_fragment:cA,envmap_pars_vertex:uA,envmap_physical_pars_fragment:MA,envmap_vertex:fA,fog_vertex:hA,fog_pars_vertex:dA,fog_fragment:pA,fog_pars_fragment:mA,gradientmap_pars_fragment:_A,lightmap_pars_fragment:gA,lights_lambert_fragment:xA,lights_lambert_pars_fragment:vA,lights_pars_begin:SA,lights_toon_fragment:yA,lights_toon_pars_fragment:bA,lights_phong_fragment:EA,lights_phong_pars_fragment:TA,lights_physical_fragment:AA,lights_physical_pars_fragment:wA,lights_fragment_begin:CA,lights_fragment_maps:RA,lights_fragment_end:PA,lightprobes_pars_fragment:DA,logdepthbuf_fragment:LA,logdepthbuf_pars_fragment:IA,logdepthbuf_pars_vertex:NA,logdepthbuf_vertex:UA,map_fragment:FA,map_pars_fragment:OA,map_particle_fragment:BA,map_particle_pars_fragment:zA,metalnessmap_fragment:kA,metalnessmap_pars_fragment:VA,morphinstance_vertex:HA,morphcolor_vertex:GA,morphnormal_vertex:WA,morphtarget_pars_vertex:XA,morphtarget_vertex:YA,normal_fragment_begin:qA,normal_fragment_maps:$A,normal_pars_fragment:KA,normal_pars_vertex:ZA,normal_vertex:JA,normalmap_pars_fragment:jA,clearcoat_normal_fragment_begin:QA,clearcoat_normal_fragment_maps:ew,clearcoat_pars_fragment:tw,iridescence_pars_fragment:nw,opaque_fragment:iw,packing:rw,premultiplied_alpha_fragment:sw,project_vertex:ow,dithering_fragment:aw,dithering_pars_fragment:lw,roughnessmap_fragment:cw,roughnessmap_pars_fragment:uw,shadowmap_pars_fragment:fw,shadowmap_pars_vertex:hw,shadowmap_vertex:dw,shadowmask_pars_fragment:pw,skinbase_vertex:mw,skinning_pars_vertex:_w,skinning_vertex:gw,skinnormal_vertex:xw,specularmap_fragment:vw,specularmap_pars_fragment:Sw,tonemapping_fragment:Mw,tonemapping_pars_fragment:yw,transmission_fragment:bw,transmission_pars_fragment:Ew,uv_pars_fragment:Tw,uv_pars_vertex:Aw,uv_vertex:ww,worldpos_vertex:Cw,background_vert:Rw,background_frag:Pw,backgroundCube_vert:Dw,backgroundCube_frag:Lw,cube_vert:Iw,cube_frag:Nw,depth_vert:Uw,depth_frag:Fw,distance_vert:Ow,distance_frag:Bw,equirect_vert:zw,equirect_frag:kw,linedashed_vert:Vw,linedashed_frag:Hw,meshbasic_vert:Gw,meshbasic_frag:Ww,meshlambert_vert:Xw,meshlambert_frag:Yw,meshmatcap_vert:qw,meshmatcap_frag:$w,meshnormal_vert:Kw,meshnormal_frag:Zw,meshphong_vert:Jw,meshphong_frag:jw,meshphysical_vert:Qw,meshphysical_frag:eC,meshtoon_vert:tC,meshtoon_frag:nC,points_vert:iC,points_frag:rC,shadow_vert:sC,shadow_frag:oC,sprite_vert:aC,sprite_frag:lC},He={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},or={basic:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Xn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Xn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new dt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Xn([He.points,He.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Xn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Xn([He.common,He.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Xn([He.sprite,He.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Xn([He.common,He.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Xn([He.lights,He.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};or.physical={uniforms:Xn([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Fc={r:0,b:0,g:0},cC=new Ot,Gv=new nt;Gv.set(-1,0,0,0,1,0,0,0,1);function uC(i,e,t,n,r,s){const o=new dt(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const v=x.backgroundBlurriness>0;y=e.get(y,v)}return y}function m(x){let y=!1;const v=d(x);v===null?p(o,a):v&&v.isColor&&(p(v,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,y){const v=d(y);v&&(v.isCubeTexture||v.mapping===Vu)?(c===void 0&&(c=new Zn(new Wl(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:Sa(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cC.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gv),c.material.toneMapped=mt.getTransfer(v.colorSpace)!==bt,(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Zn(new Gu(2,2),new Sr({name:"BackgroundMaterial",uniforms:Sa(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=mt.getTransfer(v.colorSpace)!==bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(Fc,zv(i)),t.buffers.color.setClear(Fc.r,Fc.g,Fc.b,y,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),a=y,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:m,addToRenderList:g,dispose:_}}function fC(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(N,B,ee,te,z){let Y=!1;const F=h(N,te,ee,B);s!==F&&(s=F,c(s.object)),Y=d(N,te,ee,z),Y&&m(N,te,ee,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(N,B,ee,te),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function h(N,B,ee,te){const z=te.wireframe===!0;let Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);const F=N.isInstancedMesh===!0?N.id:0;let ne=Y[F];ne===void 0&&(ne={},Y[F]=ne);let me=ne[ee.id];me===void 0&&(me={},ne[ee.id]=me);let U=me[z];return U===void 0&&(U=f(l()),me[z]=U),U}function f(N){const B=[],ee=[],te=[];for(let z=0;z<t;z++)B[z]=0,ee[z]=0,te[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ee,attributeDivisors:te,object:N,attributes:{},index:null}}function d(N,B,ee,te){const z=s.attributes,Y=B.attributes;let F=0;const ne=ee.getAttributes();for(const me in ne)if(ne[me].location>=0){const Ae=z[me];let Ne=Y[me];if(Ne===void 0&&(me==="instanceMatrix"&&N.instanceMatrix&&(Ne=N.instanceMatrix),me==="instanceColor"&&N.instanceColor&&(Ne=N.instanceColor)),Ae===void 0||Ae.attribute!==Ne||Ne&&Ae.data!==Ne.data)return!0;F++}return s.attributesNum!==F||s.index!==te}function m(N,B,ee,te){const z={},Y=B.attributes;let F=0;const ne=ee.getAttributes();for(const me in ne)if(ne[me].location>=0){let Ae=Y[me];Ae===void 0&&(me==="instanceMatrix"&&N.instanceMatrix&&(Ae=N.instanceMatrix),me==="instanceColor"&&N.instanceColor&&(Ae=N.instanceColor));const Ne={};Ne.attribute=Ae,Ae&&Ae.data&&(Ne.data=Ae.data),z[me]=Ne,F++}s.attributes=z,s.attributesNum=F,s.index=te}function g(){const N=s.newAttributes;for(let B=0,ee=N.length;B<ee;B++)N[B]=0}function p(N){_(N,0)}function _(N,B){const ee=s.newAttributes,te=s.enabledAttributes,z=s.attributeDivisors;ee[N]=1,te[N]===0&&(i.enableVertexAttribArray(N),te[N]=1),z[N]!==B&&(i.vertexAttribDivisor(N,B),z[N]=B)}function x(){const N=s.newAttributes,B=s.enabledAttributes;for(let ee=0,te=B.length;ee<te;ee++)B[ee]!==N[ee]&&(i.disableVertexAttribArray(ee),B[ee]=0)}function y(N,B,ee,te,z,Y,F){F===!0?i.vertexAttribIPointer(N,B,ee,z,Y):i.vertexAttribPointer(N,B,ee,te,z,Y)}function v(N,B,ee,te){g();const z=te.attributes,Y=ee.getAttributes(),F=B.defaultAttributeValues;for(const ne in Y){const me=Y[ne];if(me.location>=0){let U=z[ne];if(U===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(U=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(U=N.instanceColor)),U!==void 0){const Ae=U.normalized,Ne=U.itemSize,ue=e.get(U);if(ue===void 0)continue;const fe=ue.buffer,q=ue.type,W=ue.bytesPerElement,ie=q===i.INT||q===i.UNSIGNED_INT||U.gpuType===Rp;if(U.isInterleavedBufferAttribute){const oe=U.data,ye=oe.stride,be=U.offset;if(oe.isInstancedInterleavedBuffer){for(let _e=0;_e<me.locationSize;_e++)_(me.location+_e,oe.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<me.locationSize;_e++)p(me.location+_e);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let _e=0;_e<me.locationSize;_e++)y(me.location+_e,Ne/me.locationSize,q,Ae,ye*W,(be+Ne/me.locationSize*_e)*W,ie)}else{if(U.isInstancedBufferAttribute){for(let oe=0;oe<me.locationSize;oe++)_(me.location+oe,U.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let oe=0;oe<me.locationSize;oe++)p(me.location+oe);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let oe=0;oe<me.locationSize;oe++)y(me.location+oe,Ne/me.locationSize,q,Ae,Ne*W,Ne/me.locationSize*oe*W,ie)}}else if(F!==void 0){const Ae=F[ne];if(Ae!==void 0)switch(Ae.length){case 2:i.vertexAttrib2fv(me.location,Ae);break;case 3:i.vertexAttrib3fv(me.location,Ae);break;case 4:i.vertexAttrib4fv(me.location,Ae);break;default:i.vertexAttrib1fv(me.location,Ae)}}}}x()}function C(){A();for(const N in n){const B=n[N];for(const ee in B){const te=B[ee];for(const z in te){const Y=te[z];for(const F in Y)u(Y[F].object),delete Y[F];delete te[z]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;const B=n[N.id];for(const ee in B){const te=B[ee];for(const z in te){const Y=te[z];for(const F in Y)u(Y[F].object),delete Y[F];delete te[z]}}delete n[N.id]}function E(N){for(const B in n){const ee=n[B];for(const te in ee){const z=ee[te];if(z[N.id]===void 0)continue;const Y=z[N.id];for(const F in Y)u(Y[F].object),delete Y[F];delete z[N.id]}}}function S(N){for(const B in n){const ee=n[B],te=N.isInstancedMesh===!0?N.id:0,z=ee[te];if(z!==void 0){for(const Y in z){const F=z[Y];for(const ne in F)u(F[ne].object),delete F[ne];delete z[Y]}delete ee[te],Object.keys(ee).length===0&&delete n[B]}}}function A(){I(),o=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:x}}function hC(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function dC(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Hi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const S=E===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Si&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==hr&&!S)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:C,samples:T}}function pC(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Gs,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,_=i.get(h);if(!r||m===null||m.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,y=x*4;let v=_.clippingState||null;l.value=v,v=u(m,f,y,d);for(let C=0;C!==y;++C)v[C]=t[C];_.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const _=d+g*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,v=d;y!==g;++y,v+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const _s=4,hg=[.125,.215,.35,.446,.526,.582],Xs=20,mC=256,Ia=new Kp,dg=new dt;let Jf=null,jf=0,Qf=0,eh=!1;const _C=new G;class pg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=_C}=s;Jf=this._renderer.getRenderTarget(),jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jf,jf,Qf),this._renderer.xr.enabled=eh,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===co||e.mapping===ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jf=this._renderer.getRenderTarget(),jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:qr,format:Hi,colorSpace:Mu,depthBuffer:!1},r=mg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gC(s)),this._blurMaterial=vC(s,e,t),this._ggxMaterial=xC(s,e,t)}return r}_compileMaterial(e){const t=new Zn(new cn,e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,r,s){const l=new gi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(dg),h.toneMapping=mr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zn(new Wl,new Yo({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let _=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,_=!0):(p.color.copy(dg),_=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const C=this._cubeSize;Bo(r,v*C,y>2?C:0,C,C),h.setRenderTarget(r),_&&h.render(g,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===co||e.mapping===ga;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:m}=this,g=this._sizeLods[n],p=3*g*(n>m-_s?n-m+_s:0),_=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Bo(s,p,_,3*g,2*g),r.setRenderTarget(s),r.render(a,Ia),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Bo(e,p,_,3*g,2*g),r.setRenderTarget(e),r.render(a,Ia)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&pt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Xs-1),g=s/m,p=isFinite(s)?1+Math.floor(u*g):Xs;p>Xs&&Qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xs}`);const _=[];let x=0;for(let E=0;E<Xs;++E){const S=E/g,A=Math.exp(-S*S/2);_.push(A),E===0?x+=A:E<p&&(x+=2*A)}for(let E=0;E<_.length;E++)_[E]=_[E]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;const v=this._sizeLods[r],C=3*v*(r>y-_s?r-y+_s:0),T=4*(this._cubeSize-v);Bo(t,C,T,3*v,2*v),l.setRenderTarget(t),l.render(h,Ia)}}function gC(i){const e=[],t=[],n=[];let r=i;const s=i-_s+1+hg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-_s?l=hg[o-i+_s-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,g=3,p=2,_=1,x=new Float32Array(g*m*d),y=new Float32Array(p*m*d),v=new Float32Array(_*m*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,S=T>2?0:-1,A=[E,S,0,E+2/3,S,0,E+2/3,S+1,0,E,S,0,E+2/3,S+1,0,E,S+1,0];x.set(A,g*m*T),y.set(f,p*m*T);const I=[T,T,T,T,T,T];v.set(I,_*m*T)}const C=new cn;C.setAttribute("position",new Yi(x,g)),C.setAttribute("uv",new Yi(y,p)),C.setAttribute("faceIndex",new Yi(v,_)),n.push(new Zn(C,null)),r>_s&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function mg(i,e,t){const n=new _r(i,e,t);return n.texture.mapping=Vu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function xC(i,e,t){return new Sr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function vC(i,e,t){const n=new Float32Array(Xs),r=new G(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function _g(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function gg(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Wu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wv extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Rv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wl(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:Sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ai,blending:kr});s.uniforms.tEquirect.value=t;const o=new Zn(r,s),a=t.minFilter;return t.minFilter===Ks&&(t.minFilter=On),new b1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function SC(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Sf||d===Mf)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const g=new Wv(m.height);return g.fromEquirectangularTexture(i,f),e.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,m=d===Sf||d===Mf,g=d===co||d===ga;if(m||g){let p=t.get(f);const _=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new pg(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return m&&x&&x.height>0||g&&x&&l(x)?(n===null&&(n=new pg(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===Sf?f.mapping=co:d===Mf&&(f.mapping=ga),f}function l(f){let d=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&d++;return d===m}function c(f){const d=f.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function MC(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&wd("WebGLRenderer: "+n+" extension not supported."),r}}}function yC(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,m=h.attributes.position;let g=0;if(m===void 0)return;if(d!==null){const x=d.array;g=d.version;for(let y=0,v=x.length;y<v;y+=3){const C=x[y+0],T=x[y+1],E=x[y+2];f.push(C,T,T,E,E,C)}}else{const x=m.array;g=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const C=y+0,T=y+1,E=y+2;f.push(C,T,T,E,E,C)}}const p=new(m.count>=65535?Av:Tv)(f,1);p.version=g;const _=s.get(h);_&&e.remove(_),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function bC(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let g=0;for(let p=0;p<d;p++)g+=f[p];t.update(g,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function EC(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function TC(i,e,t){const n=new WeakMap,r=new Yt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let I=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",I)};var d=I;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let C=a.attributes.position.count*v,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*T*4*h),S=new bv(E,C,T,h);S.type=hr,S.needsUpdate=!0;const A=v*4;for(let N=0;N<h;N++){const B=_[N],ee=x[N],te=y[N],z=C*T*4*N;for(let Y=0;Y<B.count;Y++){const F=Y*A;m===!0&&(r.fromBufferAttribute(B,Y),E[z+F+0]=r.x,E[z+F+1]=r.y,E[z+F+2]=r.z,E[z+F+3]=0),g===!0&&(r.fromBufferAttribute(ee,Y),E[z+F+4]=r.x,E[z+F+5]=r.y,E[z+F+6]=r.z,E[z+F+7]=0),p===!0&&(r.fromBufferAttribute(te,Y),E[z+F+8]=r.x,E[z+F+9]=r.y,E[z+F+10]=r.z,E[z+F+11]=te.itemSize===4?r.w:1)}}f={count:h,texture:S,size:new Be(C,T)},n.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function AC(i,e,t,n,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const wC={[av]:"LINEAR_TONE_MAPPING",[lv]:"REINHARD_TONE_MAPPING",[cv]:"CINEON_TONE_MAPPING",[uv]:"ACES_FILMIC_TONE_MAPPING",[hv]:"AGX_TONE_MAPPING",[dv]:"NEUTRAL_TONE_MAPPING",[fv]:"CUSTOM_TONE_MAPPING"};function CC(i,e,t,n,r){const s=new _r(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new xa(e,t):void 0}),o=new _r(e,t,{type:qr,depthBuffer:!1,stencilBuffer:!1}),a=new cn;a.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Dt([0,2,0,0,2,0],2));const l=new g1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Zn(a,l),u=new Kp(-1,1,1,-1,0,1);let h=null,f=null,d=!1,m,g=null,p=[],_=!1;this.setSize=function(x,y){s.setSize(x,y),o.setSize(x,y);for(let v=0;v<p.length;v++){const C=p[v];C.setSize&&C.setSize(x,y)}},this.setEffects=function(x){p=x,_=p.length>0&&p[0].isRenderPass===!0;const y=s.width,v=s.height;for(let C=0;C<p.length;C++){const T=p[C];T.setSize&&T.setSize(y,v)}},this.begin=function(x,y){if(d||x.toneMapping===mr&&p.length===0)return!1;if(g=y,y!==null){const v=y.width,C=y.height;(s.width!==v||s.height!==C)&&this.setSize(v,C)}return _===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=mr,!0},this.hasRenderPass=function(){return _},this.end=function(x,y){x.toneMapping=m,d=!0;let v=s,C=o;for(let T=0;T<p.length;T++){const E=p[T];if(E.enabled!==!1&&(E.render(x,C,v,y),E.needsSwap!==!1)){const S=v;v=C,C=S}}if(h!==x.outputColorSpace||f!==x.toneMapping){h=x.outputColorSpace,f=x.toneMapping,l.defines={},mt.getTransfer(h)===bt&&(l.defines.SRGB_TRANSFER="");const T=wC[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(g),x.render(c,u),g=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Xv=new kn,Nd=new xa(1,1),Yv=new bv,qv=new fT,$v=new Rv,xg=[],vg=[],Sg=new Float32Array(16),Mg=new Float32Array(9),yg=new Float32Array(4);function ya(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=xg[r];if(s===void 0&&(s=new Float32Array(r),xg[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function un(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xu(i,e){let t=vg[e];t===void 0&&(t=new Int32Array(e),vg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function RC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function PC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function DC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function LC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function IC(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;yg.set(n),i.uniformMatrix2fv(this.addr,!1,yg),fn(t,n)}}function NC(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;Mg.set(n),i.uniformMatrix3fv(this.addr,!1,Mg),fn(t,n)}}function UC(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;Sg.set(n),i.uniformMatrix4fv(this.addr,!1,Sg),fn(t,n)}}function FC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function OC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function BC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function zC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function kC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function VC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function HC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function GC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function WC(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Nd.compareFunction=t.isReversedDepthBuffer()?Fp:Up,s=Nd):s=Xv,t.setTexture2D(e||s,r)}function XC(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||qv,r)}function YC(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||$v,r)}function qC(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Yv,r)}function $C(i){switch(i){case 5126:return RC;case 35664:return PC;case 35665:return DC;case 35666:return LC;case 35674:return IC;case 35675:return NC;case 35676:return UC;case 5124:case 35670:return FC;case 35667:case 35671:return OC;case 35668:case 35672:return BC;case 35669:case 35673:return zC;case 5125:return kC;case 36294:return VC;case 36295:return HC;case 36296:return GC;case 35678:case 36198:case 36298:case 36306:case 35682:return WC;case 35679:case 36299:case 36307:return XC;case 35680:case 36300:case 36308:case 36293:return YC;case 36289:case 36303:case 36311:case 36292:return qC}}function KC(i,e){i.uniform1fv(this.addr,e)}function ZC(i,e){const t=ya(e,this.size,2);i.uniform2fv(this.addr,t)}function JC(i,e){const t=ya(e,this.size,3);i.uniform3fv(this.addr,t)}function jC(i,e){const t=ya(e,this.size,4);i.uniform4fv(this.addr,t)}function QC(i,e){const t=ya(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eR(i,e){const t=ya(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tR(i,e){const t=ya(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nR(i,e){i.uniform1iv(this.addr,e)}function iR(i,e){i.uniform2iv(this.addr,e)}function rR(i,e){i.uniform3iv(this.addr,e)}function sR(i,e){i.uniform4iv(this.addr,e)}function oR(i,e){i.uniform1uiv(this.addr,e)}function aR(i,e){i.uniform2uiv(this.addr,e)}function lR(i,e){i.uniform3uiv(this.addr,e)}function cR(i,e){i.uniform4uiv(this.addr,e)}function uR(i,e,t){const n=this.cache,r=e.length,s=Xu(t,r);un(n,s)||(i.uniform1iv(this.addr,s),fn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Nd:o=Xv;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function fR(i,e,t){const n=this.cache,r=e.length,s=Xu(t,r);un(n,s)||(i.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||qv,s[o])}function hR(i,e,t){const n=this.cache,r=e.length,s=Xu(t,r);un(n,s)||(i.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||$v,s[o])}function dR(i,e,t){const n=this.cache,r=e.length,s=Xu(t,r);un(n,s)||(i.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Yv,s[o])}function pR(i){switch(i){case 5126:return KC;case 35664:return ZC;case 35665:return JC;case 35666:return jC;case 35674:return QC;case 35675:return eR;case 35676:return tR;case 5124:case 35670:return nR;case 35667:case 35671:return iR;case 35668:case 35672:return rR;case 35669:case 35673:return sR;case 5125:return oR;case 36294:return aR;case 36295:return lR;case 36296:return cR;case 35678:case 36198:case 36298:case 36306:case 35682:return uR;case 35679:case 36299:case 36307:return fR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return dR}}class mR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$C(t.type)}}class _R{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pR(t.type)}}class gR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const th=/(\w+)(\])?(\[|\.)?/g;function bg(i,e){i.seq.push(e),i.map[e.id]=e}function xR(i,e,t){const n=i.name,r=n.length;for(th.lastIndex=0;;){const s=th.exec(n),o=th.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bg(t,c===void 0?new mR(a,i,e):new _R(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new gR(a),bg(t,h)),t=h}}}class tu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);xR(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Eg(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vR=37297;let SR=0;function MR(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Tg=new nt;function yR(i){mt._getMatrix(Tg,mt.workingColorSpace,i);const e=`mat3( ${Tg.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case yu:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ag(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+MR(i.getShaderSource(e),a)}else return s}function bR(i,e){const t=yR(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ER={[av]:"Linear",[lv]:"Reinhard",[cv]:"Cineon",[uv]:"ACESFilmic",[hv]:"AgX",[dv]:"Neutral",[fv]:"Custom"};function TR(i,e){const t=ER[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oc=new G;function AR(){mt.getLuminanceCoefficients(Oc);const i=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wR(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function CR(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function RR(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ya(i){return i!==""}function wg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(i){return i.replace(PR,LR)}const DR=new Map;function LR(i,e){let t=rt[e];if(t===void 0){const n=DR.get(e);if(n!==void 0)t=rt[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ud(t)}const IR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rg(i){return i.replace(IR,NR)}function NR(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const UR={[Zc]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function FR(i){return UR[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const OR={[co]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE",[Vu]:"ENVMAP_TYPE_CUBE_UV"};function BR(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":OR[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const zR={[ga]:"ENVMAP_MODE_REFRACTION"};function kR(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zR[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VR={[ov]:"ENVMAP_BLENDING_MULTIPLY",[RE]:"ENVMAP_BLENDING_MIX",[PE]:"ENVMAP_BLENDING_ADD"};function HR(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":VR[i.combine]||"ENVMAP_BLENDING_NONE"}function GR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function WR(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=FR(t),c=BR(t),u=kR(t),h=HR(t),f=GR(t),d=wR(t),m=CR(s),g=r.createProgram();let p,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ya).join(`
`),p.length>0&&(p+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ya).join(`
`),_.length>0&&(_+=`
`)):(p=[Pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),_=[Pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?rt.tonemapping_pars_fragment:"",t.toneMapping!==mr?TR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,bR("linearToOutputTexel",t.outputColorSpace),AR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),o=Ud(o),o=wg(o,t),o=Cg(o,t),a=Ud(a),a=wg(a,t),a=Cg(a,t),o=Rg(o),a=Rg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=x+p+o,v=x+_+a,C=Eg(r,r.VERTEX_SHADER,y),T=Eg(r,r.FRAGMENT_SHADER,v);r.attachShader(g,C),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function E(N){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(g)||"",ee=r.getShaderInfoLog(C)||"",te=r.getShaderInfoLog(T)||"",z=B.trim(),Y=ee.trim(),F=te.trim();let ne=!0,me=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,C,T);else{const U=Ag(r,C,"vertex"),Ae=Ag(r,T,"fragment");pt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+U+`
`+Ae)}else z!==""?Qe("WebGLProgram: Program Info Log:",z):(Y===""||F==="")&&(me=!1);me&&(N.diagnostics={runnable:ne,programLog:z,vertexShader:{log:Y,prefix:p},fragmentShader:{log:F,prefix:_}})}r.deleteShader(C),r.deleteShader(T),S=new tu(r,g),A=RR(r,g)}let S;this.getUniforms=function(){return S===void 0&&E(this),S};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(g,vR)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=T,this}let XR=0;class YR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qR(e),t.set(e,n)),n}}class qR{constructor(e){this.id=XR++,this.code=e,this.usedTimes=0}}function $R(i){return i===uo||i===vu||i===Su}function KR(i,e,t,n,r,s){const o=new zp,a=new YR,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,A,I,N,B,ee){const te=N.fog,z=B.geometry,Y=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ne=e.get(S.envMap||Y,F),me=ne&&ne.mapping===Vu?ne.image.height:null,U=d[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&Qe("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ne=Ae!==void 0?Ae.length:0;let ue=0;z.morphAttributes.position!==void 0&&(ue=1),z.morphAttributes.normal!==void 0&&(ue=2),z.morphAttributes.color!==void 0&&(ue=3);let fe,q,W,ie;if(U){const Le=or[U];fe=Le.vertexShader,q=Le.fragmentShader}else fe=S.vertexShader,q=S.fragmentShader,a.update(S),W=a.getVertexShaderID(S),ie=a.getFragmentShaderID(S);const oe=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),be=B.isInstancedMesh===!0,_e=B.isBatchedMesh===!0,Ue=!!S.map,R=!!S.matcap,P=!!ne,O=!!S.aoMap,V=!!S.lightMap,L=!!S.bumpMap,X=!!S.normalMap,he=!!S.displacementMap,D=!!S.emissiveMap,se=!!S.metalnessMap,K=!!S.roughnessMap,ve=S.anisotropy>0,Z=S.clearcoat>0,Me=S.dispersion>0,b=S.iridescence>0,M=S.sheen>0,H=S.transmission>0,j=ve&&!!S.anisotropyMap,de=Z&&!!S.clearcoatMap,ge=Z&&!!S.clearcoatNormalMap,le=Z&&!!S.clearcoatRoughnessMap,J=b&&!!S.iridescenceMap,ce=b&&!!S.iridescenceThicknessMap,De=M&&!!S.sheenColorMap,Ie=M&&!!S.sheenRoughnessMap,Te=!!S.specularMap,Re=!!S.specularColorMap,xe=!!S.specularIntensityMap,ze=H&&!!S.transmissionMap,Oe=H&&!!S.thicknessMap,k=!!S.gradientMap,Ee=!!S.alphaMap,pe=S.alphaTest>0,Fe=!!S.alphaHash,Pe=!!S.extensions;let Se=mr;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Se=i.toneMapping);const we={shaderID:U,shaderType:S.type,shaderName:S.name,vertexShader:fe,fragmentShader:q,defines:S.defines,customVertexShaderID:W,customFragmentShaderID:ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:_e,batchingColor:_e&&B._colorsTexture!==null,instancing:be,instancingColor:be&&B.instanceColor!==null,instancingMorph:be&&B.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ue,matcap:R,envMap:P,envMapMode:P&&ne.mapping,envMapCubeUVHeight:me,aoMap:O,lightMap:V,bumpMap:L,normalMap:X,displacementMap:he,emissiveMap:D,normalMapObjectSpace:X&&S.normalMapType===IE,normalMapTangentSpace:X&&S.normalMapType===Ad,packedNormalMap:X&&S.normalMapType===Ad&&$R(S.normalMap.format),metalnessMap:se,roughnessMap:K,anisotropy:ve,anisotropyMap:j,clearcoat:Z,clearcoatMap:de,clearcoatNormalMap:ge,clearcoatRoughnessMap:le,dispersion:Me,iridescence:b,iridescenceMap:J,iridescenceThicknessMap:ce,sheen:M,sheenColorMap:De,sheenRoughnessMap:Ie,specularMap:Te,specularColorMap:Re,specularIntensityMap:xe,transmission:H,transmissionMap:ze,thicknessMap:Oe,gradientMap:k,opaque:S.transparent===!1&&S.blending===ra&&S.alphaToCoverage===!1,alphaMap:Ee,alphaTest:pe,alphaHash:Fe,combine:S.combine,mapUv:Ue&&m(S.map.channel),aoMapUv:O&&m(S.aoMap.channel),lightMapUv:V&&m(S.lightMap.channel),bumpMapUv:L&&m(S.bumpMap.channel),normalMapUv:X&&m(S.normalMap.channel),displacementMapUv:he&&m(S.displacementMap.channel),emissiveMapUv:D&&m(S.emissiveMap.channel),metalnessMapUv:se&&m(S.metalnessMap.channel),roughnessMapUv:K&&m(S.roughnessMap.channel),anisotropyMapUv:j&&m(S.anisotropyMap.channel),clearcoatMapUv:de&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&m(S.sheenRoughnessMap.channel),specularMapUv:Te&&m(S.specularMap.channel),specularColorMapUv:Re&&m(S.specularColorMap.channel),specularIntensityMapUv:xe&&m(S.specularIntensityMap.channel),transmissionMapUv:ze&&m(S.transmissionMap.channel),thicknessMapUv:Oe&&m(S.thicknessMap.channel),alphaMapUv:Ee&&m(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(X||ve),vertexNormals:!!z.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Ue||Ee),fog:!!te,useFog:S.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||z.attributes.normal===void 0&&X===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:ue,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:Ue&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===bt,decodeVideoTextureEmissive:D&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ur,flipSided:S.side===ai,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&S.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function p(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)A.push(I),A.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(_(A,S),x(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function x(S,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),S.push(o.mask)}function y(S){const A=d[S.type];let I;if(A){const N=or[A];I=p1.clone(N.uniforms)}else I=S.uniforms;return I}function v(S,A){let I=u.get(A);return I!==void 0?++I.usedTimes:(I=new WR(i,A,S,r),c.push(I),u.set(A,I)),I}function C(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function T(S){a.remove(S)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:v,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:E}}function ZR(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function JR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lg(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,g,p,_){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:p,group:_},i[e]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=m,x.materialVariant=o(f),x.groupOrder=g,x.renderOrder=f.renderOrder,x.z=p,x.group=_),e++,x}function l(f,d,m,g,p,_){const x=a(f,d,m,g,p,_);m.transmission>0?n.push(x):m.transparent===!0?r.push(x):t.push(x)}function c(f,d,m,g,p,_){const x=a(f,d,m,g,p,_);m.transmission>0?n.unshift(x):m.transparent===!0?r.unshift(x):t.unshift(x)}function u(f,d){t.length>1&&t.sort(f||JR),n.length>1&&n.sort(d||Dg),r.length>1&&r.sort(d||Dg)}function h(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function jR(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Lg,i.set(n,[o])):r>=s.length?(o=new Lg,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function QR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new dt};break;case"SpotLight":t={position:new G,direction:new G,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function eP(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tP=0;function nP(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iP(i){const e=new QR,t=eP(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const r=new G,s=new Ot,o=new Ot;function a(c){let u=0,h=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,m=0,g=0,p=0,_=0,x=0,y=0,v=0,C=0,T=0,E=0;c.sort(nP);for(let A=0,I=c.length;A<I;A++){const N=c[A],B=N.color,ee=N.intensity,te=N.distance;let z=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===uo?z=N.shadow.map.texture:z=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=B.r*ee,h+=B.g*ee,f+=B.b*ee;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],ee);E++}else if(N.isDirectionalLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const F=N.shadow,ne=t.get(N);ne.shadowIntensity=F.intensity,ne.shadowBias=F.bias,ne.shadowNormalBias=F.normalBias,ne.shadowRadius=F.radius,ne.shadowMapSize=F.mapSize,n.directionalShadow[d]=ne,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=N.shadow.matrix,x++}n.directional[d]=Y,d++}else if(N.isSpotLight){const Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(B).multiplyScalar(ee),Y.distance=te,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[g]=Y;const F=N.shadow;if(N.map&&(n.spotLightMap[C]=N.map,C++,F.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[g]=F.matrix,N.castShadow){const ne=t.get(N);ne.shadowIntensity=F.intensity,ne.shadowBias=F.bias,ne.shadowNormalBias=F.normalBias,ne.shadowRadius=F.radius,ne.shadowMapSize=F.mapSize,n.spotShadow[g]=ne,n.spotShadowMap[g]=z,v++}g++}else if(N.isRectAreaLight){const Y=e.get(N);Y.color.copy(B).multiplyScalar(ee),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[p]=Y,p++}else if(N.isPointLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const F=N.shadow,ne=t.get(N);ne.shadowIntensity=F.intensity,ne.shadowBias=F.bias,ne.shadowNormalBias=F.normalBias,ne.shadowRadius=F.radius,ne.shadowMapSize=F.mapSize,ne.shadowCameraNear=F.camera.near,ne.shadowCameraFar=F.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=N.shadow.matrix,y++}n.point[m]=Y,m++}else if(N.isHemisphereLight){const Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(ee),Y.groundColor.copy(N.groundColor).multiplyScalar(ee),n.hemi[_]=Y,_++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==d||S.pointLength!==m||S.spotLength!==g||S.rectAreaLength!==p||S.hemiLength!==_||S.numDirectionalShadows!==x||S.numPointShadows!==y||S.numSpotShadows!==v||S.numSpotMaps!==C||S.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=m,n.hemi.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,S.directionalLength=d,S.pointLength=m,S.spotLength=g,S.rectAreaLength=p,S.hemiLength=_,S.numDirectionalShadows=x,S.numPointShadows=y,S.numSpotShadows=v,S.numSpotMaps=C,S.numLightProbes=E,n.version=tP++)}function l(c,u){let h=0,f=0,d=0,m=0,g=0;const p=u.matrixWorldInverse;for(let _=0,x=c.length;_<x;_++){const y=c[_];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),h++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Ig(i){const e=new iP(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function rP(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ig(i),e.set(r,[a])):s>=o.length?(a=new Ig(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const sP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aP=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],lP=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Ng=new Ot,Na=new G,nh=new G;function cP(i,e,t){let n=new kp;const r=new Be,s=new Be,o=new Yt,a=new x1,l=new v1,c={},u=t.maxTextureSize,h={[Ts]:ai,[ai]:Ts,[Ur]:Ur},f=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:sP,fragmentShader:oP}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new cn;m.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Zn(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let _=this.type;this.render=function(T,E,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===uE&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zc);const A=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(kr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const ee=_!==this.type;ee&&E.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(z=>z.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,z=T.length;te<z;te++){const Y=T[te],F=Y.shadow;if(F===void 0){Qe("WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const ne=F.getFrameExtents();r.multiply(ne),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,F.mapSize.y=s.y));const me=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=me,F.map===null||ee===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Wa){if(Y.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new _r(r.x,r.y,{format:uo,type:qr,minFilter:On,magFilter:On,generateMipmaps:!1}),F.map.texture.name=Y.name+".shadowMap",F.map.depthTexture=new xa(r.x,r.y,hr),F.map.depthTexture.name=Y.name+".shadowMapDepth",F.map.depthTexture.format=$r,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Tn,F.map.depthTexture.magFilter=Tn}else Y.isPointLight?(F.map=new Wv(r.x),F.map.depthTexture=new DT(r.x,vr)):(F.map=new _r(r.x,r.y),F.map.depthTexture=new xa(r.x,r.y,vr)),F.map.depthTexture.name=Y.name+".shadowMap",F.map.depthTexture.format=$r,this.type===Zc?(F.map.depthTexture.compareFunction=me?Fp:Up,F.map.depthTexture.minFilter=On,F.map.depthTexture.magFilter=On):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Tn,F.map.depthTexture.magFilter=Tn);F.camera.updateProjectionMatrix()}const U=F.map.isWebGLCubeRenderTarget?6:1;for(let Ae=0;Ae<U;Ae++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,Ae),i.clear();else{Ae===0&&(i.setRenderTarget(F.map),i.clear());const Ne=F.getViewport(Ae);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),B.viewport(o)}if(Y.isPointLight){const Ne=F.camera,ue=F.matrix,fe=Y.distance||Ne.far;fe!==Ne.far&&(Ne.far=fe,Ne.updateProjectionMatrix()),Na.setFromMatrixPosition(Y.matrixWorld),Ne.position.copy(Na),nh.copy(Ne.position),nh.add(aP[Ae]),Ne.up.copy(lP[Ae]),Ne.lookAt(nh),Ne.updateMatrixWorld(),ue.makeTranslation(-Na.x,-Na.y,-Na.z),Ng.multiplyMatrices(Ne.projectionMatrix,Ne.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Ng,Ne.coordinateSystem,Ne.reversedDepth)}else F.updateMatrices(Y);n=F.getFrustum(),v(E,S,F.camera,Y,this.type)}F.isPointLightShadow!==!0&&this.type===Wa&&x(F,S),F.needsUpdate=!1}_=this.type,p.needsUpdate=!1,i.setRenderTarget(A,I,N)};function x(T,E){const S=e.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _r(r.x,r.y,{format:uo,type:qr})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,S,f,g,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,S,d,g,null)}function y(T,E,S,A){let I=null;const N=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)I=N;else if(I=S.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const B=I.uuid,ee=E.uuid;let te=c[B];te===void 0&&(te={},c[B]=te);let z=te[ee];z===void 0&&(z=I.clone(),te[ee]=z,E.addEventListener("dispose",C)),I=z}if(I.visible=E.visible,I.wireframe=E.wireframe,A===Wa?I.side=E.shadowSide!==null?E.shadowSide:E.side:I.side=E.shadowSide!==null?E.shadowSide:h[E.side],I.alphaMap=E.alphaMap,I.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,I.map=E.map,I.clipShadows=E.clipShadows,I.clippingPlanes=E.clippingPlanes,I.clipIntersection=E.clipIntersection,I.displacementMap=E.displacementMap,I.displacementScale=E.displacementScale,I.displacementBias=E.displacementBias,I.wireframeLinewidth=E.wireframeLinewidth,I.linewidth=E.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const B=i.properties.get(I);B.light=S}return I}function v(T,E,S,A,I){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Wa)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const ee=e.update(T),te=T.material;if(Array.isArray(te)){const z=ee.groups;for(let Y=0,F=z.length;Y<F;Y++){const ne=z[Y],me=te[ne.materialIndex];if(me&&me.visible){const U=y(T,me,A,I);T.onBeforeShadow(i,T,E,S,ee,U,ne),i.renderBufferDirect(S,null,ee,U,T,ne),T.onAfterShadow(i,T,E,S,ee,U,ne)}}}else if(te.visible){const z=y(T,te,A,I);T.onBeforeShadow(i,T,E,S,ee,z,null),i.renderBufferDirect(S,null,ee,z,T,null),T.onAfterShadow(i,T,E,S,ee,z,null)}}const B=T.children;for(let ee=0,te=B.length;ee<te;ee++)v(B[ee],E,S,A,I)}function C(T){T.target.removeEventListener("dispose",C);for(const S in c){const A=c[S],I=T.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function uP(i,e){function t(){let k=!1;const Ee=new Yt;let pe=null;const Fe=new Yt(0,0,0,0);return{setMask:function(Pe){pe!==Pe&&!k&&(i.colorMask(Pe,Pe,Pe,Pe),pe=Pe)},setLocked:function(Pe){k=Pe},setClear:function(Pe,Se,we,Le,$e){$e===!0&&(Pe*=Le,Se*=Le,we*=Le),Ee.set(Pe,Se,we,Le),Fe.equals(Ee)===!1&&(i.clearColor(Pe,Se,we,Le),Fe.copy(Ee))},reset:function(){k=!1,pe=null,Fe.set(-1,0,0,0)}}}function n(){let k=!1,Ee=!1,pe=null,Fe=null,Pe=null;return{setReversed:function(Se){if(Ee!==Se){const we=e.get("EXT_clip_control");Se?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Ee=Se;const Le=Pe;Pe=null,this.setClear(Le)}},getReversed:function(){return Ee},setTest:function(Se){Se?oe(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(Se){pe!==Se&&!k&&(i.depthMask(Se),pe=Se)},setFunc:function(Se){if(Ee&&(Se=GE[Se]),Fe!==Se){switch(Se){case Vh:i.depthFunc(i.NEVER);break;case Hh:i.depthFunc(i.ALWAYS);break;case Gh:i.depthFunc(i.LESS);break;case _a:i.depthFunc(i.LEQUAL);break;case Wh:i.depthFunc(i.EQUAL);break;case Xh:i.depthFunc(i.GEQUAL);break;case Yh:i.depthFunc(i.GREATER);break;case qh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Fe=Se}},setLocked:function(Se){k=Se},setClear:function(Se){Pe!==Se&&(Pe=Se,Ee&&(Se=1-Se),i.clearDepth(Se))},reset:function(){k=!1,pe=null,Fe=null,Pe=null,Ee=!1}}}function r(){let k=!1,Ee=null,pe=null,Fe=null,Pe=null,Se=null,we=null,Le=null,$e=null;return{setTest:function(Ce){k||(Ce?oe(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ce){Ee!==Ce&&!k&&(i.stencilMask(Ce),Ee=Ce)},setFunc:function(Ce,je,Ye){(pe!==Ce||Fe!==je||Pe!==Ye)&&(i.stencilFunc(Ce,je,Ye),pe=Ce,Fe=je,Pe=Ye)},setOp:function(Ce,je,Ye){(Se!==Ce||we!==je||Le!==Ye)&&(i.stencilOp(Ce,je,Ye),Se=Ce,we=je,Le=Ye)},setLocked:function(Ce){k=Ce},setClear:function(Ce){$e!==Ce&&(i.clearStencil(Ce),$e=Ce)},reset:function(){k=!1,Ee=null,pe=null,Fe=null,Pe=null,Se=null,we=null,Le=null,$e=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f={},d=new WeakMap,m=[],g=null,p=!1,_=null,x=null,y=null,v=null,C=null,T=null,E=null,S=new dt(0,0,0),A=0,I=!1,N=null,B=null,ee=null,te=null,z=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,ne=0;const me=i.getParameter(i.VERSION);me.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(me)[1]),F=ne>=1):me.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),F=ne>=2);let U=null,Ae={};const Ne=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),fe=new Yt().fromArray(Ne),q=new Yt().fromArray(ue);function W(k,Ee,pe,Fe){const Pe=new Uint8Array(4),Se=i.createTexture();i.bindTexture(k,Se),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<pe;we++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Ee+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Se}const ie={};ie[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(_a),L(!1),X(g_),oe(i.CULL_FACE),O(kr);function oe(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function ye(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function be(k,Ee){return f[k]!==Ee?(i.bindFramebuffer(k,Ee),f[k]=Ee,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ee),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function _e(k,Ee){let pe=m,Fe=!1;if(k){pe=d.get(Ee),pe===void 0&&(pe=[],d.set(Ee,pe));const Pe=k.textures;if(pe.length!==Pe.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,we=Pe.length;Se<we;Se++)pe[Se]=i.COLOR_ATTACHMENT0+Se;pe.length=Pe.length,Fe=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Fe=!0);Fe&&i.drawBuffers(pe)}function Ue(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const R={[Ws]:i.FUNC_ADD,[hE]:i.FUNC_SUBTRACT,[dE]:i.FUNC_REVERSE_SUBTRACT};R[pE]=i.MIN,R[mE]=i.MAX;const P={[_E]:i.ZERO,[gE]:i.ONE,[xE]:i.SRC_COLOR,[zh]:i.SRC_ALPHA,[EE]:i.SRC_ALPHA_SATURATE,[yE]:i.DST_COLOR,[SE]:i.DST_ALPHA,[vE]:i.ONE_MINUS_SRC_COLOR,[kh]:i.ONE_MINUS_SRC_ALPHA,[bE]:i.ONE_MINUS_DST_COLOR,[ME]:i.ONE_MINUS_DST_ALPHA,[TE]:i.CONSTANT_COLOR,[AE]:i.ONE_MINUS_CONSTANT_COLOR,[wE]:i.CONSTANT_ALPHA,[CE]:i.ONE_MINUS_CONSTANT_ALPHA};function O(k,Ee,pe,Fe,Pe,Se,we,Le,$e,Ce){if(k===kr){p===!0&&(ye(i.BLEND),p=!1);return}if(p===!1&&(oe(i.BLEND),p=!0),k!==fE){if(k!==_||Ce!==I){if((x!==Ws||C!==Ws)&&(i.blendEquation(i.FUNC_ADD),x=Ws,C=Ws),Ce)switch(k){case ra:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case x_:i.blendFunc(i.ONE,i.ONE);break;case v_:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case S_:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",k);break}else switch(k){case ra:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case x_:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case v_:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S_:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",k);break}y=null,v=null,T=null,E=null,S.set(0,0,0),A=0,_=k,I=Ce}return}Pe=Pe||Ee,Se=Se||pe,we=we||Fe,(Ee!==x||Pe!==C)&&(i.blendEquationSeparate(R[Ee],R[Pe]),x=Ee,C=Pe),(pe!==y||Fe!==v||Se!==T||we!==E)&&(i.blendFuncSeparate(P[pe],P[Fe],P[Se],P[we]),y=pe,v=Fe,T=Se,E=we),(Le.equals(S)===!1||$e!==A)&&(i.blendColor(Le.r,Le.g,Le.b,$e),S.copy(Le),A=$e),_=k,I=!1}function V(k,Ee){k.side===Ur?ye(i.CULL_FACE):oe(i.CULL_FACE);let pe=k.side===ai;Ee&&(pe=!pe),L(pe),k.blending===ra&&k.transparent===!1?O(kr):O(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const Fe=k.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),D(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function L(k){N!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),N=k)}function X(k){k!==lE?(oe(i.CULL_FACE),k!==B&&(k===g_?i.cullFace(i.BACK):k===cE?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),B=k}function he(k){k!==ee&&(F&&i.lineWidth(k),ee=k)}function D(k,Ee,pe){k?(oe(i.POLYGON_OFFSET_FILL),(te!==Ee||z!==pe)&&(te=Ee,z=pe,o.getReversed()&&(Ee=-Ee),i.polygonOffset(Ee,pe))):ye(i.POLYGON_OFFSET_FILL)}function se(k){k?oe(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function K(k){k===void 0&&(k=i.TEXTURE0+Y-1),U!==k&&(i.activeTexture(k),U=k)}function ve(k,Ee,pe){pe===void 0&&(U===null?pe=i.TEXTURE0+Y-1:pe=U);let Fe=Ae[pe];Fe===void 0&&(Fe={type:void 0,texture:void 0},Ae[pe]=Fe),(Fe.type!==k||Fe.texture!==Ee)&&(U!==pe&&(i.activeTexture(pe),U=pe),i.bindTexture(k,Ee||ie[k]),Fe.type=k,Fe.texture=Ee)}function Z(){const k=Ae[U];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Me(){try{i.compressedTexImage2D(...arguments)}catch(k){pt("WebGLState:",k)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(k){pt("WebGLState:",k)}}function M(){try{i.texSubImage2D(...arguments)}catch(k){pt("WebGLState:",k)}}function H(){try{i.texSubImage3D(...arguments)}catch(k){pt("WebGLState:",k)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(k){pt("WebGLState:",k)}}function de(){try{i.compressedTexSubImage3D(...arguments)}catch(k){pt("WebGLState:",k)}}function ge(){try{i.texStorage2D(...arguments)}catch(k){pt("WebGLState:",k)}}function le(){try{i.texStorage3D(...arguments)}catch(k){pt("WebGLState:",k)}}function J(){try{i.texImage2D(...arguments)}catch(k){pt("WebGLState:",k)}}function ce(){try{i.texImage3D(...arguments)}catch(k){pt("WebGLState:",k)}}function De(k){return h[k]!==void 0?h[k]:i.getParameter(k)}function Ie(k,Ee){h[k]!==Ee&&(i.pixelStorei(k,Ee),h[k]=Ee)}function Te(k){fe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),fe.copy(k))}function Re(k){q.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function xe(k,Ee){let pe=c.get(Ee);pe===void 0&&(pe=new WeakMap,c.set(Ee,pe));let Fe=pe.get(k);Fe===void 0&&(Fe=i.getUniformBlockIndex(Ee,k.name),pe.set(k,Fe))}function ze(k,Ee){const Fe=c.get(Ee).get(k);l.get(Ee)!==Fe&&(i.uniformBlockBinding(Ee,Fe,k.__bindingPointIndex),l.set(Ee,Fe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},U=null,Ae={},f={},d=new WeakMap,m=[],g=null,p=!1,_=null,x=null,y=null,v=null,C=null,T=null,E=null,S=new dt(0,0,0),A=0,I=!1,N=null,B=null,ee=null,te=null,z=null,fe.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:ye,bindFramebuffer:be,drawBuffers:_e,useProgram:Ue,setBlending:O,setMaterial:V,setFlipSided:L,setCullFace:X,setLineWidth:he,setPolygonOffset:D,setScissorTest:se,activeTexture:K,bindTexture:ve,unbindTexture:Z,compressedTexImage2D:Me,compressedTexImage3D:b,texImage2D:J,texImage3D:ce,pixelStorei:Ie,getParameter:De,updateUBOMapping:xe,uniformBlockBinding:ze,texStorage2D:ge,texStorage3D:le,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:j,compressedTexSubImage3D:de,scissor:Te,viewport:Re,reset:Oe}}function fP(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap,h=new Set;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return m?new OffscreenCanvas(b,M):bu("canvas")}function p(b,M,H){let j=1;const de=Me(b);if((de.width>H||de.height>H)&&(j=H/Math.max(de.width,de.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ge=Math.floor(j*de.width),le=Math.floor(j*de.height);f===void 0&&(f=g(ge,le));const J=M?g(ge,le):f;return J.width=ge,J.height=le,J.getContext("2d").drawImage(b,0,0,ge,le),Qe("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ge+"x"+le+")."),J}else return"data"in b&&Qe("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),b;return b}function _(b){return b.generateMipmaps}function x(b){i.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(b,M,H,j,de,ge=!1){if(b!==null){if(i[b]!==void 0)return i[b];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let le;j&&(le=e.get("EXT_texture_norm16"),le||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8),H===i.UNSIGNED_SHORT&&le&&(J=le.R16_EXT),H===i.SHORT&&le&&(J=le.R16_SNORM_EXT)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),M===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8),H===i.UNSIGNED_SHORT&&le&&(J=le.RG16_EXT),H===i.SHORT&&le&&(J=le.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),M===i.RGB&&(H===i.UNSIGNED_SHORT&&le&&(J=le.RGB16_EXT),H===i.SHORT&&le&&(J=le.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),M===i.RGBA){const ce=ge?yu:mt.getTransfer(de);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=ce===bt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&le&&(J=le.RGBA16_EXT),H===i.SHORT&&le&&(J=le.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function C(b,M){let H;return b?M===null||M===vr||M===Ll?H=i.DEPTH24_STENCIL8:M===hr?H=i.DEPTH32F_STENCIL8:M===Dl&&(H=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===vr||M===Ll?H=i.DEPTH_COMPONENT24:M===hr?H=i.DEPTH_COMPONENT32F:M===Dl&&(H=i.DEPTH_COMPONENT16),H}function T(b,M){return _(b)===!0||b.isFramebufferTexture&&b.minFilter!==Tn&&b.minFilter!==On?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function E(b){const M=b.target;M.removeEventListener("dispose",E),A(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&h.delete(M)}function S(b){const M=b.target;M.removeEventListener("dispose",S),N(M)}function A(b){const M=n.get(b);if(M.__webglInit===void 0)return;const H=b.source,j=d.get(H);if(j){const de=j[M.__cacheKey];de.usedTimes--,de.usedTimes===0&&I(b),Object.keys(j).length===0&&d.delete(H)}n.remove(b)}function I(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const H=b.source,j=d.get(H);delete j[M.__cacheKey],o.memory.textures--}function N(b){const M=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let de=0;de<M.__webglFramebuffer[j].length;de++)i.deleteFramebuffer(M.__webglFramebuffer[j][de]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=b.textures;for(let j=0,de=H.length;j<de;j++){const ge=n.get(H[j]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(H[j])}n.remove(b)}let B=0;function ee(){B=0}function te(){return B}function z(b){B=b}function Y(){const b=B;return b>=r.maxTextures&&Qe("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),B+=1,b}function F(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function ne(b,M){const H=n.get(b);if(b.isVideoTexture&&ve(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&H.__version!==b.version){const j=b.image;if(j===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(H,b,M);return}}else b.isExternalTexture&&(H.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function me(b,M){const H=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){ye(H,b,M);return}else b.isExternalTexture&&(H.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function U(b,M){const H=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){ye(H,b,M);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function Ae(b,M){const H=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&H.__version!==b.version){be(H,b,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const Ne={[$h]:i.REPEAT,[Or]:i.CLAMP_TO_EDGE,[Kh]:i.MIRRORED_REPEAT},ue={[Tn]:i.NEAREST,[DE]:i.NEAREST_MIPMAP_NEAREST,[ac]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[yf]:i.LINEAR_MIPMAP_NEAREST,[Ks]:i.LINEAR_MIPMAP_LINEAR},fe={[NE]:i.NEVER,[zE]:i.ALWAYS,[UE]:i.LESS,[Up]:i.LEQUAL,[FE]:i.EQUAL,[Fp]:i.GEQUAL,[OE]:i.GREATER,[BE]:i.NOTEQUAL};function q(b,M){if(M.type===hr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===On||M.magFilter===yf||M.magFilter===ac||M.magFilter===Ks||M.minFilter===On||M.minFilter===yf||M.minFilter===ac||M.minFilter===Ks)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Ne[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Ne[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Ne[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ue[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,fe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tn||M.minFilter!==ac&&M.minFilter!==Ks||M.type===hr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function W(b,M){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",E));const j=M.source;let de=d.get(j);de===void 0&&(de={},d.set(j,de));const ge=F(M);if(ge!==b.__cacheKey){de[ge]===void 0&&(de[ge]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),de[ge].usedTimes++;const le=de[b.__cacheKey];le!==void 0&&(de[b.__cacheKey].usedTimes--,le.usedTimes===0&&I(M)),b.__cacheKey=ge,b.__webglTexture=de[ge].texture}return H}function ie(b,M,H){return Math.floor(Math.floor(b/H)/M)}function oe(b,M,H,j){const ge=b.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,H,j,M.data);else{ge.sort((Ie,Te)=>Ie.start-Te.start);let le=0;for(let Ie=1;Ie<ge.length;Ie++){const Te=ge[le],Re=ge[Ie],xe=Te.start+Te.count,ze=ie(Re.start,M.width,4),Oe=ie(Te.start,M.width,4);Re.start<=xe+1&&ze===Oe&&ie(Re.start+Re.count-1,M.width,4)===ze?Te.count=Math.max(Te.count,Re.start+Re.count-Te.start):(++le,ge[le]=Re)}ge.length=le+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),ce=t.getParameter(i.UNPACK_SKIP_PIXELS),De=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Ie=0,Te=ge.length;Ie<Te;Ie++){const Re=ge[Ie],xe=Math.floor(Re.start/4),ze=Math.ceil(Re.count/4),Oe=xe%M.width,k=Math.floor(xe/M.width),Ee=ze,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,Oe,k,Ee,pe,H,j,M.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function ye(b,M,H){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);const de=W(b,M),ge=M.source;t.bindTexture(j,b.__webglTexture,i.TEXTURE0+H);const le=n.get(ge);if(ge.version!==le.__version||de===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const pe=mt.getPrimaries(mt.workingColorSpace),Fe=M.colorSpace===cs?null:mt.getPrimaries(M.colorSpace),Pe=M.colorSpace===cs||pe===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ce=p(M.image,!1,r.maxTextureSize);ce=Z(M,ce);const De=s.convert(M.format,M.colorSpace),Ie=s.convert(M.type);let Te=v(M.internalFormat,De,Ie,M.normalized,M.colorSpace,M.isVideoTexture);q(j,M);let Re;const xe=M.mipmaps,ze=M.isVideoTexture!==!0,Oe=le.__version===void 0||de===!0,k=ge.dataReady,Ee=T(M,ce);if(M.isDepthTexture)Te=C(M.format===Zs,M.type),Oe&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Te,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Te,ce.width,ce.height,0,De,Ie,null));else if(M.isDataTexture)if(xe.length>0){ze&&Oe&&t.texStorage2D(i.TEXTURE_2D,Ee,Te,xe[0].width,xe[0].height);for(let pe=0,Fe=xe.length;pe<Fe;pe++)Re=xe[pe],ze?k&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Re.width,Re.height,De,Ie,Re.data):t.texImage2D(i.TEXTURE_2D,pe,Te,Re.width,Re.height,0,De,Ie,Re.data);M.generateMipmaps=!1}else ze?(Oe&&t.texStorage2D(i.TEXTURE_2D,Ee,Te,ce.width,ce.height),k&&oe(M,ce,De,Ie)):t.texImage2D(i.TEXTURE_2D,0,Te,ce.width,ce.height,0,De,Ie,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Te,xe[0].width,xe[0].height,ce.depth);for(let pe=0,Fe=xe.length;pe<Fe;pe++)if(Re=xe[pe],M.format!==Hi)if(De!==null)if(ze){if(k)if(M.layerUpdates.size>0){const Pe=fg(Re.width,Re.height,M.format,M.type);for(const Se of M.layerUpdates){const we=Re.data.subarray(Se*Pe/Re.data.BYTES_PER_ELEMENT,(Se+1)*Pe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Se,Re.width,Re.height,1,De,we)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,Re.width,Re.height,ce.depth,De,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,Te,Re.width,Re.height,ce.depth,0,Re.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,Re.width,Re.height,ce.depth,De,Ie,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,Te,Re.width,Re.height,ce.depth,0,De,Ie,Re.data)}else{ze&&Oe&&t.texStorage2D(i.TEXTURE_2D,Ee,Te,xe[0].width,xe[0].height);for(let pe=0,Fe=xe.length;pe<Fe;pe++)Re=xe[pe],M.format!==Hi?De!==null?ze?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,Re.width,Re.height,De,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,Te,Re.width,Re.height,0,Re.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?k&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Re.width,Re.height,De,Ie,Re.data):t.texImage2D(i.TEXTURE_2D,pe,Te,Re.width,Re.height,0,De,Ie,Re.data)}else if(M.isDataArrayTexture)if(ze){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Te,ce.width,ce.height,ce.depth),k)if(M.layerUpdates.size>0){const pe=fg(ce.width,ce.height,M.format,M.type);for(const Fe of M.layerUpdates){const Pe=ce.data.subarray(Fe*pe/ce.data.BYTES_PER_ELEMENT,(Fe+1)*pe/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,ce.width,ce.height,1,De,Ie,Pe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,De,Ie,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,ce.width,ce.height,ce.depth,0,De,Ie,ce.data);else if(M.isData3DTexture)ze?(Oe&&t.texStorage3D(i.TEXTURE_3D,Ee,Te,ce.width,ce.height,ce.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,De,Ie,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Te,ce.width,ce.height,ce.depth,0,De,Ie,ce.data);else if(M.isFramebufferTexture){if(Oe)if(ze)t.texStorage2D(i.TEXTURE_2D,Ee,Te,ce.width,ce.height);else{let pe=ce.width,Fe=ce.height;for(let Pe=0;Pe<Ee;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Te,pe,Fe,0,De,Ie,null),pe>>=1,Fe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ce.parentNode!==pe){pe.appendChild(ce),h.add(M),pe.onpaint=Le=>{const $e=Le.changedElements;for(const Ce of h)$e.includes(Ce.image)&&(Ce.needsUpdate=!0)},pe.requestPaint();return}const Fe=0,Pe=i.RGBA,Se=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Fe,Pe,Se,we,ce),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xe.length>0){if(ze&&Oe){const pe=Me(xe[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Te,pe.width,pe.height)}for(let pe=0,Fe=xe.length;pe<Fe;pe++)Re=xe[pe],ze?k&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,De,Ie,Re):t.texImage2D(i.TEXTURE_2D,pe,Te,De,Ie,Re);M.generateMipmaps=!1}else if(ze){if(Oe){const pe=Me(ce);t.texStorage2D(i.TEXTURE_2D,Ee,Te,pe.width,pe.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Ie,ce)}else t.texImage2D(i.TEXTURE_2D,0,Te,De,Ie,ce);_(M)&&x(j),le.__version=ge.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function be(b,M,H){if(M.image.length!==6)return;const j=W(b,M),de=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+H);const ge=n.get(de);if(de.version!==ge.__version||j===!0){t.activeTexture(i.TEXTURE0+H);const le=mt.getPrimaries(mt.workingColorSpace),J=M.colorSpace===cs?null:mt.getPrimaries(M.colorSpace),ce=M.colorSpace===cs||le===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,Ie=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let Se=0;Se<6;Se++)!De&&!Ie?Te[Se]=p(M.image[Se],!0,r.maxCubemapSize):Te[Se]=Ie?M.image[Se].image:M.image[Se],Te[Se]=Z(M,Te[Se]);const Re=Te[0],xe=s.convert(M.format,M.colorSpace),ze=s.convert(M.type),Oe=v(M.internalFormat,xe,ze,M.normalized,M.colorSpace),k=M.isVideoTexture!==!0,Ee=ge.__version===void 0||j===!0,pe=de.dataReady;let Fe=T(M,Re);q(i.TEXTURE_CUBE_MAP,M);let Pe;if(De){k&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,Oe,Re.width,Re.height);for(let Se=0;Se<6;Se++){Pe=Te[Se].mipmaps;for(let we=0;we<Pe.length;we++){const Le=Pe[we];M.format!==Hi?xe!==null?k?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,we,0,0,Le.width,Le.height,xe,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,we,Oe,Le.width,Le.height,0,Le.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,we,0,0,Le.width,Le.height,xe,ze,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,we,Oe,Le.width,Le.height,0,xe,ze,Le.data)}}}else{if(Pe=M.mipmaps,k&&Ee){Pe.length>0&&Fe++;const Se=Me(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,Oe,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ie){k?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Te[Se].width,Te[Se].height,xe,ze,Te[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Oe,Te[Se].width,Te[Se].height,0,xe,ze,Te[Se].data);for(let we=0;we<Pe.length;we++){const $e=Pe[we].image[Se].image;k?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,we+1,0,0,$e.width,$e.height,xe,ze,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,we+1,Oe,$e.width,$e.height,0,xe,ze,$e.data)}}else{k?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,xe,ze,Te[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Oe,xe,ze,Te[Se]);for(let we=0;we<Pe.length;we++){const Le=Pe[we];k?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,we+1,0,0,xe,ze,Le.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,we+1,Oe,xe,ze,Le.image[Se])}}}_(M)&&x(i.TEXTURE_CUBE_MAP),ge.__version=de.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function _e(b,M,H,j,de,ge){const le=s.convert(H.format,H.colorSpace),J=s.convert(H.type),ce=v(H.internalFormat,le,J,H.normalized,H.colorSpace),De=n.get(M),Ie=n.get(H);if(Ie.__renderTarget=M,!De.__hasExternalTextures){const Te=Math.max(1,M.width>>ge),Re=Math.max(1,M.height>>ge);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,ge,ce,Te,Re,M.depth,0,le,J,null):t.texImage2D(de,ge,ce,Te,Re,0,le,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),K(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,de,Ie.__webglTexture,0,se(M)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,de,Ie.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(b,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer){const j=M.depthTexture,de=j&&j.isDepthTexture?j.type:null,ge=C(M.stencilBuffer,de),le=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;K(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(M),ge,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(M),ge,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ge,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,b)}else{const j=M.textures;for(let de=0;de<j.length;de++){const ge=j[de],le=s.convert(ge.format,ge.colorSpace),J=s.convert(ge.type),ce=v(ge.internalFormat,le,J,ge.normalized,ge.colorSpace);K(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(M),ce,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(M),ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ce,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function R(b,M,H){const j=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=n.get(M.depthTexture);if(de.__renderTarget=M,(!de.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j){if(de.__webglInit===void 0&&(de.__webglInit=!0,M.depthTexture.addEventListener("dispose",E)),de.__webglTexture===void 0){de.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),q(i.TEXTURE_CUBE_MAP,M.depthTexture);const De=s.convert(M.depthTexture.format),Ie=s.convert(M.depthTexture.type);let Te;M.depthTexture.format===$r?Te=i.DEPTH_COMPONENT24:M.depthTexture.format===Zs&&(Te=i.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Te,M.width,M.height,0,De,Ie,null)}}else ne(M.depthTexture,0);const ge=de.__webglTexture,le=se(M),J=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ce=M.depthTexture.format===Zs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===$r)K(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,J,ge,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,ce,J,ge,0);else if(M.depthTexture.format===Zs)K(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,J,ge,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,ce,J,ge,0);else throw new Error("Unknown depthTexture format")}function P(b){const M=n.get(b),H=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const de=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",de)};j.addEventListener("dispose",de),M.__depthDisposeCallback=de}M.__boundDepthTexture=j}if(b.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let j=0;j<6;j++)R(M.__webglFramebuffer[j],b,j);else{const j=b.texture.mipmaps;j&&j.length>0?R(M.__webglFramebuffer[0],b,0):R(M.__webglFramebuffer,b,0)}else if(H){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),Ue(M.__webglDepthbuffer[j],b,!1);else{const de=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ge)}}else{const j=b.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ue(M.__webglDepthbuffer,b,!1);else{const de=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ge)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(b,M,H){const j=n.get(b);M!==void 0&&_e(j.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&P(b)}function V(b){const M=b.texture,H=n.get(b),j=n.get(M);b.addEventListener("dispose",S);const de=b.textures,ge=b.isWebGLCubeRenderTarget===!0,le=de.length>1;if(le||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,o.memory.textures++),ge){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let ce=0;ce<M.mipmaps.length;ce++)H.__webglFramebuffer[J][ce]=i.createFramebuffer()}else H.__webglFramebuffer[J]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)H.__webglFramebuffer[J]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(le)for(let J=0,ce=de.length;J<ce;J++){const De=n.get(de[J]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&K(b)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<de.length;J++){const ce=de[J];H.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[J]);const De=s.convert(ce.format,ce.colorSpace),Ie=s.convert(ce.type),Te=v(ce.internalFormat,De,Ie,ce.normalized,ce.colorSpace,b.isXRRenderTarget===!0),Re=se(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Te,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,H.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),q(i.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)_e(H.__webglFramebuffer[J][ce],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce);else _e(H.__webglFramebuffer[J],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);_(M)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let J=0,ce=de.length;J<ce;J++){const De=de[J],Ie=n.get(De);let Te=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Te=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,Ie.__webglTexture),q(Te,De),_e(H.__webglFramebuffer,b,De,i.COLOR_ATTACHMENT0+J,Te,0),_(De)&&x(Te)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(J=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,j.__webglTexture),q(J,M),M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)_e(H.__webglFramebuffer[ce],b,M,i.COLOR_ATTACHMENT0,J,ce);else _e(H.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,J,0);_(M)&&x(J),t.unbindTexture()}b.depthBuffer&&P(b)}function L(b){const M=b.textures;for(let H=0,j=M.length;H<j;H++){const de=M[H];if(_(de)){const ge=y(b),le=n.get(de).__webglTexture;t.bindTexture(ge,le),x(ge),t.unbindTexture()}}}const X=[],he=[];function D(b){if(b.samples>0){if(K(b)===!1){const M=b.textures,H=b.width,j=b.height;let de=i.COLOR_BUFFER_BIT;const ge=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(b),J=M.length>1;if(J)for(let De=0;De<M.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const ce=b.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let De=0;De<M.length;De++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[De]);const Ie=n.get(M[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,de,i.NEAREST),l===!0&&(X.length=0,he.length=0,X.push(i.COLOR_ATTACHMENT0+De),b.depthBuffer&&b.resolveDepthBuffer===!1&&(X.push(ge),he.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,he)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let De=0;De<M.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,le.__webglColorRenderbuffer[De]);const Ie=n.get(M[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function se(b){return Math.min(r.maxSamples,b.samples)}function K(b){const M=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ve(b){const M=o.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function Z(b,M){const H=b.colorSpace,j=b.format,de=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==Mu&&H!==cs&&(mt.getTransfer(H)===bt?(j!==Hi||de!==Si)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",H)),M}function Me(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=ee,this.getTextureUnits=te,this.setTextureUnits=z,this.setTexture2D=ne,this.setTexture2DArray=me,this.setTexture3D=U,this.setTextureCube=Ae,this.rebindTextures=O,this.setupRenderTarget=V,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=K,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hP(i,e){function t(n,r=cs){let s;const o=mt.getTransfer(r);if(n===Si)return i.UNSIGNED_BYTE;if(n===Pp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gv)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xv)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mv)return i.BYTE;if(n===_v)return i.SHORT;if(n===Dl)return i.UNSIGNED_SHORT;if(n===Rp)return i.INT;if(n===vr)return i.UNSIGNED_INT;if(n===hr)return i.FLOAT;if(n===qr)return i.HALF_FLOAT;if(n===vv)return i.ALPHA;if(n===Sv)return i.RGB;if(n===Hi)return i.RGBA;if(n===$r)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===Mv)return i.RED;if(n===Lp)return i.RED_INTEGER;if(n===uo)return i.RG;if(n===Ip)return i.RG_INTEGER;if(n===Np)return i.RGBA_INTEGER;if(n===Jc||n===jc||n===Qc||n===eu)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Jc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Jc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zh||n===Jh||n===jh||n===Qh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Zh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ed||n===td||n===nd||n===id||n===rd||n===vu||n===sd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ed||n===td)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===nd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===id)return s.COMPRESSED_R11_EAC;if(n===rd)return s.COMPRESSED_SIGNED_R11_EAC;if(n===vu)return s.COMPRESSED_RG11_EAC;if(n===sd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===od||n===ad||n===ld||n===cd||n===ud||n===fd||n===hd||n===dd||n===pd||n===md||n===_d||n===gd||n===xd||n===vd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===od)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ad)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ld)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ud)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===md)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_d)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vd)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sd||n===Md||n===yd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Sd)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Md)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bd||n===Ed||n===Su||n===Td)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===bd)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ed)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Su)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Td)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ll?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const dP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Pv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sr({vertexShader:dP,fragmentShader:pP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zn(new Gu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _P extends po{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const g=typeof XRWebGLBinding<"u",p=new mP,_={},x=t.getContextAttributes();let y=null,v=null;const C=[],T=[],E=new Be;let S=null;const A=new gi;A.viewport=new Yt;const I=new gi;I.viewport=new Yt;const N=[A,I],B=new E1;let ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=C[W];return ie===void 0&&(ie=new Cf,C[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=C[W];return ie===void 0&&(ie=new Cf,C[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=C[W];return ie===void 0&&(ie=new Cf,C[W]=ie),ie.getHandSpace()};function z(W){const ie=T.indexOf(W.inputSource);if(ie===-1)return;const oe=C[ie];oe!==void 0&&(oe.update(W.inputSource,W.frame,c||o),oe.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",F);for(let W=0;W<C.length;W++){const ie=T[W];ie!==null&&(T[W]=null,C[W].disconnect(ie))}ee=null,te=null,p.reset();for(const W in _)delete _[W];e.setRenderTarget(y),d=null,f=null,h=null,r=null,v=null,q.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ye=null,be=null;x.depth&&(be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=x.stencil?Zs:$r,ye=x.stencil?Ll:vr);const _e={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new _r(f.textureWidth,f.textureHeight,{format:Hi,type:Si,depthTexture:new xa(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new _r(d.framebufferWidth,d.framebufferHeight,{format:Hi,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),q.setContext(r),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(W){for(let ie=0;ie<W.removed.length;ie++){const oe=W.removed[ie],ye=T.indexOf(oe);ye>=0&&(T[ye]=null,C[ye].disconnect(oe))}for(let ie=0;ie<W.added.length;ie++){const oe=W.added[ie];let ye=T.indexOf(oe);if(ye===-1){for(let _e=0;_e<C.length;_e++)if(_e>=T.length){T.push(oe),ye=_e;break}else if(T[_e]===null){T[_e]=oe,ye=_e;break}if(ye===-1)break}const be=C[ye];be&&be.connect(oe)}}const ne=new G,me=new G;function U(W,ie,oe){ne.setFromMatrixPosition(ie.matrixWorld),me.setFromMatrixPosition(oe.matrixWorld);const ye=ne.distanceTo(me),be=ie.projectionMatrix.elements,_e=oe.projectionMatrix.elements,Ue=be[14]/(be[10]-1),R=be[14]/(be[10]+1),P=(be[9]+1)/be[5],O=(be[9]-1)/be[5],V=(be[8]-1)/be[0],L=(_e[8]+1)/_e[0],X=Ue*V,he=Ue*L,D=ye/(-V+L),se=D*-V;if(ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(se),W.translateZ(D),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const K=Ue+D,ve=R+D,Z=X-se,Me=he+(ye-se),b=P*R/ve*K,M=O*R/ve*K;W.projectionMatrix.makePerspective(Z,Me,b,M,K,ve),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Ae(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ie=W.near,oe=W.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),B.near=I.near=A.near=ie,B.far=I.far=A.far=oe,(ee!==B.near||te!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),ee=B.near,te=B.far),B.layers.mask=W.layers.mask|6,A.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;const ye=W.parent,be=B.cameras;Ae(B,ye);for(let _e=0;_e<be.length;_e++)Ae(be[_e],ye);be.length===2?U(B,A,I):B.projectionMatrix.copy(A.projectionMatrix),Ne(W,B,ye)};function Ne(W,ie,oe){oe===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(oe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Nl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(W){return _[W]};let ue=null;function fe(W,ie){if(u=ie.getViewerPose(c||o),m=ie,u!==null){const oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ye=!1;oe.length!==B.cameras.length&&(B.cameras.length=0,ye=!0);for(let R=0;R<oe.length;R++){const P=oe[R];let O=null;if(d!==null)O=d.getViewport(P);else{const L=h.getViewSubImage(f,P);O=L.viewport,R===0&&(e.setRenderTargetTextures(v,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(v))}let V=N[R];V===void 0&&(V=new gi,V.layers.enable(R),V.viewport=new Yt,N[R]=V),V.matrix.fromArray(P.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(P.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(O.x,O.y,O.width,O.height),R===0&&(B.matrix.copy(V.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ye===!0&&B.cameras.push(V)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const R=h.getDepthInformation(oe[0]);R&&R.isValid&&R.texture&&p.init(R,r.renderState)}if(be&&be.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let R=0;R<oe.length;R++){const P=oe[R].camera;if(P){let O=_[P];O||(O=new Pv,_[P]=O);const V=h.getCameraImage(P);O.sourceTexture=V}}}}for(let oe=0;oe<C.length;oe++){const ye=T[oe],be=C[oe];ye!==null&&be!==void 0&&be.update(ye,ie,c||o)}ue&&ue(W,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}const q=new Hv;q.setAnimationLoop(fe),this.setAnimationLoop=function(W){ue=W},this.dispose=function(){}}}const gP=new Ot,Kv=new nt;Kv.set(-1,0,0,0,1,0,0,0,1);function xP(i,e){function t(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function n(p,_){_.color.getRGB(p.fogColor.value,zv(i)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function r(p,_,x,y,v){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(p,_):_.isMeshLambertMaterial?(s(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(p,_),h(p,_)):_.isMeshPhongMaterial?(s(p,_),u(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(p,_),f(p,_),_.isMeshPhysicalMaterial&&d(p,_,v)):_.isMeshMatcapMaterial?(s(p,_),m(p,_)):_.isMeshDepthMaterial?s(p,_):_.isMeshDistanceMaterial?(s(p,_),g(p,_)):_.isMeshNormalMaterial?s(p,_):_.isLineBasicMaterial?(o(p,_),_.isLineDashedMaterial&&a(p,_)):_.isPointsMaterial?l(p,_,x,y):_.isSpriteMaterial?c(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,t(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===ai&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,t(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===ai&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,t(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,t(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);const x=e.get(_),y=x.envMap,v=x.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(gP.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Kv),p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,p.aoMapTransform))}function o(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform))}function a(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function l(p,_,x,y){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*x,p.scale.value=y*.5,_.map&&(p.map.value=_.map,t(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function c(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function u(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function h(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function f(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function d(p,_,x){p.ior.value=_.ior,_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ai&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,_){_.matcap&&(p.matcap.value=_.matcap)}function g(p,_){const x=e.get(_).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vP(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=r[x.id];v===void 0&&(m(x),v=u(x),r[x.id]=v,x.addEventListener("dispose",p));const C=y.program;n.updateUBOMapping(x,C);const T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function u(x){const y=h();x.__bindingPointIndex=y;const v=i.createBuffer(),C=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=r[x.id],v=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,E=v.length;T<E;T++){const S=Array.isArray(v[T])?v[T]:[v[T]];for(let A=0,I=S.length;A<I;A++){const N=S[A];if(d(N,T,A,C)===!0){const B=N.__offset,ee=Array.isArray(N.value)?N.value:[N.value];let te=0;for(let z=0;z<ee.length;z++){const Y=ee[z],F=g(Y);typeof Y=="number"||typeof Y=="boolean"?(N.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,B+te,N.__data)):Y.isMatrix3?(N.__data[0]=Y.elements[0],N.__data[1]=Y.elements[1],N.__data[2]=Y.elements[2],N.__data[3]=0,N.__data[4]=Y.elements[3],N.__data[5]=Y.elements[4],N.__data[6]=Y.elements[5],N.__data[7]=0,N.__data[8]=Y.elements[6],N.__data[9]=Y.elements[7],N.__data[10]=Y.elements[8],N.__data[11]=0):ArrayBuffer.isView(Y)?N.__data.set(new Y.constructor(Y.buffer,Y.byteOffset,N.__data.length)):(Y.toArray(N.__data,te),te+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,y,v,C){const T=x.value,E=y+"_"+v;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:ArrayBuffer.isView(T)?C[E]=T.slice():C[E]=T.clone(),!0;{const S=C[E];if(typeof T=="number"||typeof T=="boolean"){if(S!==T)return C[E]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(S.equals(T)===!1)return S.copy(T),!0}}return!1}function m(x){const y=x.uniforms;let v=0;const C=16;for(let E=0,S=y.length;E<S;E++){const A=Array.isArray(y[E])?y[E]:[y[E]];for(let I=0,N=A.length;I<N;I++){const B=A[I],ee=Array.isArray(B.value)?B.value:[B.value];for(let te=0,z=ee.length;te<z;te++){const Y=ee[te],F=g(Y),ne=v%C,me=ne%F.boundary,U=ne+me;v+=me,U!==0&&C-U<F.storage&&(v+=C-U),B.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=F.storage}}}const T=v%C;return T>0&&(v+=C-T),x.__size=v,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function _(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}const SP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function MP(){return er===null&&(er=new ET(SP,16,16,uo,qr),er.name="DFG_LUT",er.minFilter=On,er.magFilter=On,er.wrapS=Or,er.wrapT=Or,er.generateMipmaps=!1,er.needsUpdate=!0),er}class Ug{constructor(e={}){const{canvas:t=VE(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Si}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=d,p=new Set([Np,Ip,Lp]),_=new Set([Si,vr,Dl,Ll,Pp,Dp]),x=new Uint32Array(4),y=new Int32Array(4),v=new G;let C=null,T=null;const E=[],S=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let N=!1,B=null;this._outputColorSpace=ti;let ee=0,te=0,z=null,Y=-1,F=null;const ne=new Yt,me=new Yt;let U=null;const Ae=new dt(0);let Ne=0,ue=t.width,fe=t.height,q=1,W=null,ie=null;const oe=new Yt(0,0,ue,fe),ye=new Yt(0,0,ue,fe);let be=!1;const _e=new kp;let Ue=!1,R=!1;const P=new Ot,O=new G,V=new Yt,L={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function he(){return z===null?q:1}let D=n;function se(w,$){return t.getContext(w,$)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cp}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Le,!1),D===null){const $="webgl2";if(D=se($,w),D===null)throw se($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw pt("WebGLRenderer: "+w.message),w}let K,ve,Z,Me,b,M,H,j,de,ge,le,J,ce,De,Ie,Te,Re,xe,ze,Oe,k,Ee,pe;function Fe(){K=new MC(D),K.init(),k=new hP(D,K),ve=new dC(D,K,e,k),Z=new uP(D,K),ve.reversedDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),Me=new EC(D),b=new ZR,M=new fP(D,K,Z,b,ve,k,Me),H=new SC(I),j=new C1(D),Ee=new fC(D,j),de=new yC(D,j,Me,Ee),ge=new AC(D,de,j,Ee,Me),xe=new TC(D,ve,M),Ie=new pC(b),le=new KR(I,H,K,ve,Ee,Ie),J=new xP(I,b),ce=new jR,De=new rP(K),Re=new uC(I,H,Z,ge,m,l),Te=new cP(I,ge,ve),pe=new vP(D,Me,ve,Z),ze=new hC(D,K,Me),Oe=new bC(D,K,Me),Me.programs=le.programs,I.capabilities=ve,I.extensions=K,I.properties=b,I.renderLists=ce,I.shadowMap=Te,I.state=Z,I.info=Me}Fe(),g!==Si&&(A=new CC(g,t.width,t.height,r,s));const Pe=new _P(I,D);this.xr=Pe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=K.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=K.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(ue,fe,!1))},this.getSize=function(w){return w.set(ue,fe)},this.setSize=function(w,$,ae=!0){if(Pe.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=w,fe=$,t.width=Math.floor(w*q),t.height=Math.floor($*q),ae===!0&&(t.style.width=w+"px",t.style.height=$+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,$)},this.getDrawingBufferSize=function(w){return w.set(ue*q,fe*q).floor()},this.setDrawingBufferSize=function(w,$,ae){ue=w,fe=$,q=ae,t.width=Math.floor(w*ae),t.height=Math.floor($*ae),this.setViewport(0,0,w,$)},this.setEffects=function(w){if(g===Si){pt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let $=0;$<w.length;$++)if(w[$].isOutputPass===!0){Qe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,$,ae,Q){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,$,ae,Q),Z.viewport(ne.copy(oe).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(ye)},this.setScissor=function(w,$,ae,Q){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,$,ae,Q),Z.scissor(me.copy(ye).multiplyScalar(q).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(w){Z.setScissorTest(be=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,$=!0,ae=!0){let Q=0;if(w){let re=!1;if(z!==null){const ke=z.texture.format;re=p.has(ke)}if(re){const ke=z.texture.type,Ve=_.has(ke),Ge=Re.getClearColor(),Ke=Re.getClearAlpha(),Ze=Ge.r,it=Ge.g,ot=Ge.b;Ve?(x[0]=Ze,x[1]=it,x[2]=ot,x[3]=Ke,D.clearBufferuiv(D.COLOR,0,x)):(y[0]=Ze,y[1]=it,y[2]=ot,y[3]=Ke,D.clearBufferiv(D.COLOR,0,y))}else Q|=D.COLOR_BUFFER_BIT}$&&(Q|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),B=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Re.dispose(),ce.dispose(),De.dispose(),b.dispose(),H.dispose(),ge.dispose(),Ee.dispose(),pe.dispose(),le.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",lt),Pe.removeEventListener("sessionend",Bt),zt.stop()};function Se(w){w.preventDefault(),T_("WebGLRenderer: Context Lost."),N=!0}function we(){T_("WebGLRenderer: Context Restored."),N=!1;const w=Me.autoReset,$=Te.enabled,ae=Te.autoUpdate,Q=Te.needsUpdate,re=Te.type;Fe(),Me.autoReset=w,Te.enabled=$,Te.autoUpdate=ae,Te.needsUpdate=Q,Te.type=re}function Le(w){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $e(w){const $=w.target;$.removeEventListener("dispose",$e),Ce($)}function Ce(w){je(w),b.remove(w)}function je(w){const $=b.get(w).programs;$!==void 0&&($.forEach(function(ae){le.releaseProgram(ae)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,$,ae,Q,re,ke){$===null&&($=L);const Ve=re.isMesh&&re.matrixWorld.determinant()<0,Ge=dn(w,$,ae,Q,re);Z.setMaterial(Q,Ve);let Ke=ae.index,Ze=1;if(Q.wireframe===!0){if(Ke=de.getWireframeAttribute(ae),Ke===void 0)return;Ze=2}const it=ae.drawRange,ot=ae.attributes.position;let Je=it.start*Ze,Et=(it.start+it.count)*Ze;ke!==null&&(Je=Math.max(Je,ke.start*Ze),Et=Math.min(Et,(ke.start+ke.count)*Ze)),Ke!==null?(Je=Math.max(Je,0),Et=Math.min(Et,Ke.count)):ot!=null&&(Je=Math.max(Je,0),Et=Math.min(Et,ot.count));const Zt=Et-Je;if(Zt<0||Zt===1/0)return;Ee.setup(re,Q,Ge,ae,Ke);let Xt,wt=ze;if(Ke!==null&&(Xt=j.get(Ke),wt=Oe,wt.setIndex(Xt)),re.isMesh)Q.wireframe===!0?(Z.setLineWidth(Q.wireframeLinewidth*he()),wt.setMode(D.LINES)):wt.setMode(D.TRIANGLES);else if(re.isLine){let Cn=Q.linewidth;Cn===void 0&&(Cn=1),Z.setLineWidth(Cn*he()),re.isLineSegments?wt.setMode(D.LINES):re.isLineLoop?wt.setMode(D.LINE_LOOP):wt.setMode(D.LINE_STRIP)}else re.isPoints?wt.setMode(D.POINTS):re.isSprite&&wt.setMode(D.TRIANGLES);if(re.isBatchedMesh)if(K.get("WEBGL_multi_draw"))wt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Cn=re._multiDrawStarts,We=re._multiDrawCounts,ui=re._multiDrawCount,gt=Ke?j.get(Ke).bytesPerElement:1,Ci=b.get(Q).currentProgram.getUniforms();for(let Ki=0;Ki<ui;Ki++)Ci.setValue(D,"_gl_DrawID",Ki),wt.render(Cn[Ki]/gt,We[Ki])}else if(re.isInstancedMesh)wt.renderInstances(Je,Zt,re.count);else if(ae.isInstancedBufferGeometry){const Cn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,We=Math.min(ae.instanceCount,Cn);wt.renderInstances(Je,Zt,We)}else wt.render(Je,Zt)};function Ye(w,$,ae){w.transparent===!0&&w.side===Ur&&w.forceSinglePass===!1?(w.side=ai,w.needsUpdate=!0,hn(w,$,ae),w.side=Ts,w.needsUpdate=!0,hn(w,$,ae),w.side=Ur):hn(w,$,ae)}this.compile=function(w,$,ae=null){ae===null&&(ae=w),T=De.get(ae),T.init($),S.push(T),ae.traverseVisible(function(re){re.isLight&&re.layers.test($.layers)&&(T.pushLight(re),re.castShadow&&T.pushShadow(re))}),w!==ae&&w.traverseVisible(function(re){re.isLight&&re.layers.test($.layers)&&(T.pushLight(re),re.castShadow&&T.pushShadow(re))}),T.setupLights();const Q=new Set;return w.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const ke=re.material;if(ke)if(Array.isArray(ke))for(let Ve=0;Ve<ke.length;Ve++){const Ge=ke[Ve];Ye(Ge,ae,re),Q.add(Ge)}else Ye(ke,ae,re),Q.add(ke)}),T=S.pop(),Q},this.compileAsync=function(w,$,ae=null){const Q=this.compile(w,$,ae);return new Promise(re=>{function ke(){if(Q.forEach(function(Ve){b.get(Ve).currentProgram.isReady()&&Q.delete(Ve)}),Q.size===0){re(w);return}setTimeout(ke,10)}K.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let et=null;function en(w){et&&et(w)}function lt(){zt.stop()}function Bt(){zt.start()}const zt=new Hv;zt.setAnimationLoop(en),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(w){et=w,Pe.setAnimationLoop(w),w===null?zt.stop():zt.start()},Pe.addEventListener("sessionstart",lt),Pe.addEventListener("sessionend",Bt),this.render=function(w,$){if($!==void 0&&$.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(w,$);const ae=Pe.enabled===!0&&Pe.isPresenting===!0,Q=A!==null&&(z===null||ae)&&A.begin(I,z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera($),$=Pe.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,$,z),T=De.get(w,S.length),T.init($),T.state.textureUnits=M.getTextureUnits(),S.push(T),P.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),_e.setFromProjectionMatrix(P,dr,$.reversedDepth),R=this.localClippingEnabled,Ue=Ie.init(this.clippingPlanes,R),C=ce.get(w,E.length),C.init(),E.push(C),Pe.enabled===!0&&Pe.isPresenting===!0){const Ve=I.xr.getDepthSensingMesh();Ve!==null&&Lt(Ve,$,-1/0,I.sortObjects)}Lt(w,$,0,I.sortObjects),C.finish(),I.sortObjects===!0&&C.sort(W,ie),X=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,X&&Re.addToRenderList(C,w),this.info.render.frame++,Ue===!0&&Ie.beginShadows();const re=T.state.shadowsArray;if(Te.render(re,w,$),Ue===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&A.hasRenderPass())===!1){const Ve=C.opaque,Ge=C.transmissive;if(T.setupLights(),$.isArrayCamera){const Ke=$.cameras;if(Ge.length>0)for(let Ze=0,it=Ke.length;Ze<it;Ze++){const ot=Ke[Ze];xt(Ve,Ge,w,ot)}X&&Re.render(w);for(let Ze=0,it=Ke.length;Ze<it;Ze++){const ot=Ke[Ze];At(C,w,ot,ot.viewport)}}else Ge.length>0&&xt(Ve,Ge,w,$),X&&Re.render(w),At(C,w,$)}z!==null&&te===0&&(M.updateMultisampleRenderTarget(z),M.updateRenderTargetMipmap(z)),Q&&A.end(I),w.isScene===!0&&w.onAfterRender(I,w,$),Ee.resetDefaultState(),Y=-1,F=null,S.pop(),S.length>0?(T=S[S.length-1],M.setTextureUnits(T.state.textureUnits),Ue===!0&&Ie.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?C=E[E.length-1]:C=null,B!==null&&B.renderEnd()};function Lt(w,$,ae,Q){if(w.visible===!1)return;if(w.layers.test($.layers)){if(w.isGroup)ae=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update($);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||_e.intersectsSprite(w)){Q&&V.setFromMatrixPosition(w.matrixWorld).applyMatrix4(P);const Ve=ge.update(w),Ge=w.material;Ge.visible&&C.push(w,Ve,Ge,ae,V.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||_e.intersectsObject(w))){const Ve=ge.update(w),Ge=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),V.copy(w.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),V.copy(Ve.boundingSphere.center)),V.applyMatrix4(w.matrixWorld).applyMatrix4(P)),Array.isArray(Ge)){const Ke=Ve.groups;for(let Ze=0,it=Ke.length;Ze<it;Ze++){const ot=Ke[Ze],Je=Ge[ot.materialIndex];Je&&Je.visible&&C.push(w,Ve,Je,ae,V.z,ot)}}else Ge.visible&&C.push(w,Ve,Ge,ae,V.z,null)}}const ke=w.children;for(let Ve=0,Ge=ke.length;Ve<Ge;Ve++)Lt(ke[Ve],$,ae,Q)}function At(w,$,ae,Q){const{opaque:re,transmissive:ke,transparent:Ve}=w;T.setupLightsView(ae),Ue===!0&&Ie.setGlobalState(I.clippingPlanes,ae),Q&&Z.viewport(ne.copy(Q)),re.length>0&&wn(re,$,ae),ke.length>0&&wn(ke,$,ae),Ve.length>0&&wn(Ve,$,ae),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function xt(w,$,ae,Q){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Q.id]===void 0){const Je=K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Q.id]=new _r(1,1,{generateMipmaps:!0,type:Je?qr:Si,minFilter:Ks,samples:Math.max(4,ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const ke=T.state.transmissionRenderTarget[Q.id],Ve=Q.viewport||ne;ke.setSize(Ve.z*I.transmissionResolutionScale,Ve.w*I.transmissionResolutionScale);const Ge=I.getRenderTarget(),Ke=I.getActiveCubeFace(),Ze=I.getActiveMipmapLevel();I.setRenderTarget(ke),I.getClearColor(Ae),Ne=I.getClearAlpha(),Ne<1&&I.setClearColor(16777215,.5),I.clear(),X&&Re.render(ae);const it=I.toneMapping;I.toneMapping=mr;const ot=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),T.setupLightsView(Q),Ue===!0&&Ie.setGlobalState(I.clippingPlanes,Q),wn(w,ae,Q),M.updateMultisampleRenderTarget(ke),M.updateRenderTargetMipmap(ke),K.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Et=0,Zt=$.length;Et<Zt;Et++){const Xt=$[Et],{object:wt,geometry:Cn,material:We,group:ui}=Xt;if(We.side===Ur&&wt.layers.test(Q.layers)){const gt=We.side;We.side=ai,We.needsUpdate=!0,It(wt,ae,Q,Cn,We,ui),We.side=gt,We.needsUpdate=!0,Je=!0}}Je===!0&&(M.updateMultisampleRenderTarget(ke),M.updateRenderTargetMipmap(ke))}I.setRenderTarget(Ge,Ke,Ze),I.setClearColor(Ae,Ne),ot!==void 0&&(Q.viewport=ot),I.toneMapping=it}function wn(w,$,ae){const Q=$.isScene===!0?$.overrideMaterial:null;for(let re=0,ke=w.length;re<ke;re++){const Ve=w[re],{object:Ge,geometry:Ke,group:Ze}=Ve;let it=Ve.material;it.allowOverride===!0&&Q!==null&&(it=Q),Ge.layers.test(ae.layers)&&It(Ge,$,ae,Ke,it,Ze)}}function It(w,$,ae,Q,re,ke){w.onBeforeRender(I,$,ae,Q,re,ke),w.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),re.onBeforeRender(I,$,ae,Q,w,ke),re.transparent===!0&&re.side===Ur&&re.forceSinglePass===!1?(re.side=ai,re.needsUpdate=!0,I.renderBufferDirect(ae,$,Q,re,w,ke),re.side=Ts,re.needsUpdate=!0,I.renderBufferDirect(ae,$,Q,re,w,ke),re.side=Ur):I.renderBufferDirect(ae,$,Q,re,w,ke),w.onAfterRender(I,$,ae,Q,re,ke)}function hn(w,$,ae){$.isScene!==!0&&($=L);const Q=b.get(w),re=T.state.lights,ke=T.state.shadowsArray,Ve=re.state.version,Ge=le.getParameters(w,re.state,ke,$,ae,T.state.lightProbeGridArray),Ke=le.getProgramCacheKey(Ge);let Ze=Q.programs;Q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?$.environment:null,Q.fog=$.fog;const it=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Q.envMap=H.get(w.envMap||Q.environment,it),Q.envMapRotation=Q.environment!==null&&w.envMap===null?$.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",$e),Ze=new Map,Q.programs=Ze);let ot=Ze.get(Ke);if(ot!==void 0){if(Q.currentProgram===ot&&Q.lightsStateVersion===Ve)return tn(w,Ge),ot}else Ge.uniforms=le.getUniforms(w),B!==null&&w.isNodeMaterial&&B.build(w,ae,Ge),w.onBeforeCompile(Ge,I),ot=le.acquireProgram(Ge,Ke),Ze.set(Ke,ot),Q.uniforms=Ge.uniforms;const Je=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Je.clippingPlanes=Ie.uniform),tn(w,Ge),Q.needsLights=go(w),Q.lightsStateVersion=Ve,Q.needsLights&&(Je.ambientLightColor.value=re.state.ambient,Je.lightProbe.value=re.state.probe,Je.directionalLights.value=re.state.directional,Je.directionalLightShadows.value=re.state.directionalShadow,Je.spotLights.value=re.state.spot,Je.spotLightShadows.value=re.state.spotShadow,Je.rectAreaLights.value=re.state.rectArea,Je.ltc_1.value=re.state.rectAreaLTC1,Je.ltc_2.value=re.state.rectAreaLTC2,Je.pointLights.value=re.state.point,Je.pointLightShadows.value=re.state.pointShadow,Je.hemisphereLights.value=re.state.hemi,Je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Je.spotLightMatrix.value=re.state.spotLightMatrix,Je.spotLightMap.value=re.state.spotLightMap,Je.pointShadowMatrix.value=re.state.pointShadowMatrix),Q.lightProbeGrid=T.state.lightProbeGridArray.length>0,Q.currentProgram=ot,Q.uniformsList=null,ot}function ci(w){if(w.uniformsList===null){const $=w.currentProgram.getUniforms();w.uniformsList=tu.seqWithValue($.seq,w.uniforms)}return w.uniformsList}function tn(w,$){const ae=b.get(w);ae.outputColorSpace=$.outputColorSpace,ae.batching=$.batching,ae.batchingColor=$.batchingColor,ae.instancing=$.instancing,ae.instancingColor=$.instancingColor,ae.instancingMorph=$.instancingMorph,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function on(w,$){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition($.matrixWorld);for(let ae=0,Q=w.length;ae<Q;ae++){const re=w[ae];if(re.texture!==null&&re.boundingBox.containsPoint(v))return re}return null}function dn(w,$,ae,Q,re){$.isScene!==!0&&($=L),M.resetTextureUnits();const ke=$.fog,Ve=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?$.environment:null,Ge=z===null?I.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:mt.workingColorSpace,Ke=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ze=H.get(Q.envMap||Ve,Ke),it=Q.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ot=!!ae.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Je=!!ae.morphAttributes.position,Et=!!ae.morphAttributes.normal,Zt=!!ae.morphAttributes.color;let Xt=mr;Q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Xt=I.toneMapping);const wt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Cn=wt!==void 0?wt.length:0,We=b.get(Q),ui=T.state.lights;if(Ue===!0&&(R===!0||w!==F)){const Nt=w===F&&Q.id===Y;Ie.setState(Q,w,Nt)}let gt=!1;Q.version===We.__version?(We.needsLights&&We.lightsStateVersion!==ui.state.version||We.outputColorSpace!==Ge||re.isBatchedMesh&&We.batching===!1||!re.isBatchedMesh&&We.batching===!0||re.isBatchedMesh&&We.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&We.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&We.instancing===!1||!re.isInstancedMesh&&We.instancing===!0||re.isSkinnedMesh&&We.skinning===!1||!re.isSkinnedMesh&&We.skinning===!0||re.isInstancedMesh&&We.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&We.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&We.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&We.instancingMorph===!1&&re.morphTexture!==null||We.envMap!==Ze||Q.fog===!0&&We.fog!==ke||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ie.numPlanes||We.numIntersection!==Ie.numIntersection)||We.vertexAlphas!==it||We.vertexTangents!==ot||We.morphTargets!==Je||We.morphNormals!==Et||We.morphColors!==Zt||We.toneMapping!==Xt||We.morphTargetsCount!==Cn||!!We.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,We.__version=Q.version);let Ci=We.currentProgram;gt===!0&&(Ci=hn(Q,$,re),B&&Q.isNodeMaterial&&B.onUpdateProgram(Q,Ci,We));let Ki=!1,Zr=!1,xo=!1;const Ct=Ci.getUniforms(),Jt=We.uniforms;if(Z.useProgram(Ci.program)&&(Ki=!0,Zr=!0,xo=!0),Q.id!==Y&&(Y=Q.id,Zr=!0),We.needsLights){const Nt=on(T.state.lightProbeGridArray,re);We.lightProbeGrid!==Nt&&(We.lightProbeGrid=Nt,Zr=!0)}if(Ki||F!==w){Z.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ct.setValue(D,"projectionMatrix",w.projectionMatrix),Ct.setValue(D,"viewMatrix",w.matrixWorldInverse);const jr=Ct.map.cameraPosition;jr!==void 0&&jr.setValue(D,O.setFromMatrixPosition(w.matrixWorld)),ve.logarithmicDepthBuffer&&Ct.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ct.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,Zr=!0,xo=!0)}if(We.needsLights&&(ui.state.directionalShadowMap.length>0&&Ct.setValue(D,"directionalShadowMap",ui.state.directionalShadowMap,M),ui.state.spotShadowMap.length>0&&Ct.setValue(D,"spotShadowMap",ui.state.spotShadowMap,M),ui.state.pointShadowMap.length>0&&Ct.setValue(D,"pointShadowMap",ui.state.pointShadowMap,M)),re.isSkinnedMesh){Ct.setOptional(D,re,"bindMatrix"),Ct.setOptional(D,re,"bindMatrixInverse");const Nt=re.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Ct.setValue(D,"boneTexture",Nt.boneTexture,M))}re.isBatchedMesh&&(Ct.setOptional(D,re,"batchingTexture"),Ct.setValue(D,"batchingTexture",re._matricesTexture,M),Ct.setOptional(D,re,"batchingIdTexture"),Ct.setValue(D,"batchingIdTexture",re._indirectTexture,M),Ct.setOptional(D,re,"batchingColorTexture"),re._colorsTexture!==null&&Ct.setValue(D,"batchingColorTexture",re._colorsTexture,M));const Jr=ae.morphAttributes;if((Jr.position!==void 0||Jr.normal!==void 0||Jr.color!==void 0)&&xe.update(re,ae,Ci),(Zr||We.receiveShadow!==re.receiveShadow)&&(We.receiveShadow=re.receiveShadow,Ct.setValue(D,"receiveShadow",re.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&$.environment!==null&&(Jt.envMapIntensity.value=$.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=MP()),Zr){if(Ct.setValue(D,"toneMappingExposure",I.toneMappingExposure),We.needsLights&&yr(Jt,xo),ke&&Q.fog===!0&&J.refreshFogUniforms(Jt,ke),J.refreshMaterialUniforms(Jt,Q,q,fe,T.state.transmissionRenderTarget[w.id]),We.needsLights&&We.lightProbeGrid){const Nt=We.lightProbeGrid;Jt.probesSH.value=Nt.texture,Jt.probesMin.value.copy(Nt.boundingBox.min),Jt.probesMax.value.copy(Nt.boundingBox.max),Jt.probesResolution.value.copy(Nt.resolution)}tu.upload(D,ci(We),Jt,M)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(tu.upload(D,ci(We),Jt,M),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ct.setValue(D,"center",re.center),Ct.setValue(D,"modelViewMatrix",re.modelViewMatrix),Ct.setValue(D,"normalMatrix",re.normalMatrix),Ct.setValue(D,"modelMatrix",re.matrixWorld),Q.uniformsGroups!==void 0){const Nt=Q.uniformsGroups;for(let jr=0,vo=Nt.length;jr<vo;jr++){const tm=Nt[jr];pe.update(tm,Ci),pe.bind(tm,Ci)}}return Ci}function yr(w,$){w.ambientLightColor.needsUpdate=$,w.lightProbe.needsUpdate=$,w.directionalLights.needsUpdate=$,w.directionalLightShadows.needsUpdate=$,w.pointLights.needsUpdate=$,w.pointLightShadows.needsUpdate=$,w.spotLights.needsUpdate=$,w.spotLightShadows.needsUpdate=$,w.rectAreaLights.needsUpdate=$,w.hemisphereLights.needsUpdate=$}function go(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,$,ae){const Q=b.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=$,b.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ae,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,$){const ae=b.get(w);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0};const pn=D.createFramebuffer();this.setRenderTarget=function(w,$=0,ae=0){z=w,ee=$,te=ae;let Q=null,re=!1,ke=!1;if(w){const Ge=b.get(w);if(Ge.__useDefaultFramebuffer!==void 0){Z.bindFramebuffer(D.FRAMEBUFFER,Ge.__webglFramebuffer),ne.copy(w.viewport),me.copy(w.scissor),U=w.scissorTest,Z.viewport(ne),Z.scissor(me),Z.setScissorTest(U),Y=-1;return}else if(Ge.__webglFramebuffer===void 0)M.setupRenderTarget(w);else if(Ge.__hasExternalTextures)M.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const it=w.depthTexture;if(Ge.__boundDepthTexture!==it){if(it!==null&&b.has(it)&&(w.width!==it.image.width||w.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(w)}}const Ke=w.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ke=!0);const Ze=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[$])?Q=Ze[$][ae]:Q=Ze[$],re=!0):w.samples>0&&M.useMultisampledRTT(w)===!1?Q=b.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?Q=Ze[ae]:Q=Ze,ne.copy(w.viewport),me.copy(w.scissor),U=w.scissorTest}else ne.copy(oe).multiplyScalar(q).floor(),me.copy(ye).multiplyScalar(q).floor(),U=be;if(ae!==0&&(Q=pn),Z.bindFramebuffer(D.FRAMEBUFFER,Q)&&Z.drawBuffers(w,Q),Z.viewport(ne),Z.scissor(me),Z.setScissorTest(U),re){const Ge=b.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ge.__webglTexture,ae)}else if(ke){const Ge=$;for(let Ke=0;Ke<w.textures.length;Ke++){const Ze=b.get(w.textures[Ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ke,Ze.__webglTexture,ae,Ge)}}else if(w!==null&&ae!==0){const Ge=b.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ge.__webglTexture,ae)}Y=-1},this.readRenderTargetPixels=function(w,$,ae,Q,re,ke,Ve,Ge=0){if(!(w&&w.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ke=Ke[Ve]),Ke){Z.bindFramebuffer(D.FRAMEBUFFER,Ke);try{const Ze=w.textures[Ge],it=Ze.format,ot=Ze.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ge),!ve.textureFormatReadable(it)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(ot)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=w.width-Q&&ae>=0&&ae<=w.height-re&&D.readPixels($,ae,Q,re,k.convert(it),k.convert(ot),ke)}finally{const Ze=z!==null?b.get(z).__webglFramebuffer:null;Z.bindFramebuffer(D.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,$,ae,Q,re,ke,Ve,Ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ke=Ke[Ve]),Ke)if($>=0&&$<=w.width-Q&&ae>=0&&ae<=w.height-re){Z.bindFramebuffer(D.FRAMEBUFFER,Ke);const Ze=w.textures[Ge],it=Ze.format,ot=Ze.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ge),!ve.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Je),D.bufferData(D.PIXEL_PACK_BUFFER,ke.byteLength,D.STREAM_READ),D.readPixels($,ae,Q,re,k.convert(it),k.convert(ot),0);const Et=z!==null?b.get(z).__webglFramebuffer:null;Z.bindFramebuffer(D.FRAMEBUFFER,Et);const Zt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await HE(D,Zt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ke),D.deleteBuffer(Je),D.deleteSync(Zt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,$=null,ae=0){const Q=Math.pow(2,-ae),re=Math.floor(w.image.width*Q),ke=Math.floor(w.image.height*Q),Ve=$!==null?$.x:0,Ge=$!==null?$.y:0;M.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,ae,0,0,Ve,Ge,re,ke),Z.unbindTexture()};const Kt=D.createFramebuffer(),wi=D.createFramebuffer();this.copyTextureToTexture=function(w,$,ae=null,Q=null,re=0,ke=0){let Ve,Ge,Ke,Ze,it,ot,Je,Et,Zt;const Xt=w.isCompressedTexture?w.mipmaps[ke]:w.image;if(ae!==null)Ve=ae.max.x-ae.min.x,Ge=ae.max.y-ae.min.y,Ke=ae.isBox3?ae.max.z-ae.min.z:1,Ze=ae.min.x,it=ae.min.y,ot=ae.isBox3?ae.min.z:0;else{const Jt=Math.pow(2,-re);Ve=Math.floor(Xt.width*Jt),Ge=Math.floor(Xt.height*Jt),w.isDataArrayTexture?Ke=Xt.depth:w.isData3DTexture?Ke=Math.floor(Xt.depth*Jt):Ke=1,Ze=0,it=0,ot=0}Q!==null?(Je=Q.x,Et=Q.y,Zt=Q.z):(Je=0,Et=0,Zt=0);const wt=k.convert($.format),Cn=k.convert($.type);let We;$.isData3DTexture?(M.setTexture3D($,0),We=D.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(M.setTexture2DArray($,0),We=D.TEXTURE_2D_ARRAY):(M.setTexture2D($,0),We=D.TEXTURE_2D),Z.activeTexture(D.TEXTURE0),Z.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,$.flipY),Z.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Z.pixelStorei(D.UNPACK_ALIGNMENT,$.unpackAlignment);const ui=Z.getParameter(D.UNPACK_ROW_LENGTH),gt=Z.getParameter(D.UNPACK_IMAGE_HEIGHT),Ci=Z.getParameter(D.UNPACK_SKIP_PIXELS),Ki=Z.getParameter(D.UNPACK_SKIP_ROWS),Zr=Z.getParameter(D.UNPACK_SKIP_IMAGES);Z.pixelStorei(D.UNPACK_ROW_LENGTH,Xt.width),Z.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xt.height),Z.pixelStorei(D.UNPACK_SKIP_PIXELS,Ze),Z.pixelStorei(D.UNPACK_SKIP_ROWS,it),Z.pixelStorei(D.UNPACK_SKIP_IMAGES,ot);const xo=w.isDataArrayTexture||w.isData3DTexture,Ct=$.isDataArrayTexture||$.isData3DTexture;if(w.isDepthTexture){const Jt=b.get(w),Jr=b.get($),Nt=b.get(Jt.__renderTarget),jr=b.get(Jr.__renderTarget);Z.bindFramebuffer(D.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Z.bindFramebuffer(D.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let vo=0;vo<Ke;vo++)xo&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get(w).__webglTexture,re,ot+vo),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,b.get($).__webglTexture,ke,Zt+vo)),D.blitFramebuffer(Ze,it,Ve,Ge,Je,Et,Ve,Ge,D.DEPTH_BUFFER_BIT,D.NEAREST);Z.bindFramebuffer(D.READ_FRAMEBUFFER,null),Z.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(re!==0||w.isRenderTargetTexture||b.has(w)){const Jt=b.get(w),Jr=b.get($);Z.bindFramebuffer(D.READ_FRAMEBUFFER,Kt),Z.bindFramebuffer(D.DRAW_FRAMEBUFFER,wi);for(let Nt=0;Nt<Ke;Nt++)xo?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Jt.__webglTexture,re,ot+Nt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Jt.__webglTexture,re),Ct?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Jr.__webglTexture,ke,Zt+Nt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Jr.__webglTexture,ke),re!==0?D.blitFramebuffer(Ze,it,Ve,Ge,Je,Et,Ve,Ge,D.COLOR_BUFFER_BIT,D.NEAREST):Ct?D.copyTexSubImage3D(We,ke,Je,Et,Zt+Nt,Ze,it,Ve,Ge):D.copyTexSubImage2D(We,ke,Je,Et,Ze,it,Ve,Ge);Z.bindFramebuffer(D.READ_FRAMEBUFFER,null),Z.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ct?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(We,ke,Je,Et,Zt,Ve,Ge,Ke,wt,Cn,Xt.data):$.isCompressedArrayTexture?D.compressedTexSubImage3D(We,ke,Je,Et,Zt,Ve,Ge,Ke,wt,Xt.data):D.texSubImage3D(We,ke,Je,Et,Zt,Ve,Ge,Ke,wt,Cn,Xt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ke,Je,Et,Ve,Ge,wt,Cn,Xt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ke,Je,Et,Xt.width,Xt.height,wt,Xt.data):D.texSubImage2D(D.TEXTURE_2D,ke,Je,Et,Ve,Ge,wt,Cn,Xt);Z.pixelStorei(D.UNPACK_ROW_LENGTH,ui),Z.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt),Z.pixelStorei(D.UNPACK_SKIP_PIXELS,Ci),Z.pixelStorei(D.UNPACK_SKIP_ROWS,Ki),Z.pixelStorei(D.UNPACK_SKIP_IMAGES,Zr),ke===0&&$.generateMipmaps&&D.generateMipmap(We),Z.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&M.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?M.setTextureCube(w,0):w.isData3DTexture?M.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?M.setTexture2DArray(w,0):M.setTexture2D(w,0),Z.unbindTexture()},this.resetState=function(){ee=0,te=0,z=null,Z.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const yP="/assets/atomic-service-8b1c3a0c.png",bP="/assets/hdd-share-66e98b98.png",EP="/assets/hdc-stage-6a23332e.png",TP="/assets/ecological-innovation-6596f97e.png",AP="/assets/harmonyos-innovation-2025-734cb2d2.jpg",wP={class:"hero section"},CP={class:"stats section","aria-label":"关键数据"},RP={style:{"font-size":"1.5rem"}},PP={class:"section split reveal"},DP={class:"highlight-grid"},LP={class:"section skill-section reveal"},IP={class:"skills"},NP={id:"projects",class:"section projects"},UP={class:"project-grid"},FP=["role","tabindex","aria-label","onClick","onKeydown"],OP={class:"project-top"},BP={class:"stack-list"},zP={id:"awards",class:"section awards-panel"},kP={id:"experience",class:"section reveal"},VP={class:"timeline"},HP={class:"click-particle-layer","aria-hidden":"true"},ih="wry2352312138",GP={__name:"App",setup(i){Mn.registerPlugin(ht),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");function e(){document.documentElement.classList.add("intro-scroll-lock")}function t(){document.documentElement.classList.remove("intro-scroll-lock")}const n=[["7年","鸿蒙/Android开发经验"],["7款+","鸿蒙/Android原生应用落地"],["双端","手机 / 手表双平台开发"],["HDC","主题演讲案例露出"]],r=["HarmonyOS","ArkTS","Stage模型","Android","Java","Kotlin","Jetpack Compose","Flutter","BLE蓝牙","NFC","OCR","ASR","AI智能化","物理引擎","多端自适应","性能优化"],s=[{title:"跨端客户端主程经验",text:"完整经历鸿蒙从早期适配到原生爆发的全周期，主导药管家、朋克养生等多款 HarmonyOS / Android 应用从 0 到 1 落地。"},{title:"华为生态官方认可",text:"药管家元服务上榜华为应用市场年度原子化服务，连续参与 HDD 分享，并入选 2025 HDC 鸿蒙合伙人梦想街区展出。"},{title:"硬件与 AI 结合能力",text:"具备无人机工程师背景，熟悉 BLE、传感器与硬件调试，并能将 ASR、AI 智能化、物理引擎等能力落到具体业务场景。"},{title:"稳定交付与效率工具化",text:"曾连续获得优秀绩效、甲方表扬信及优秀员工表彰，日常深度使用 AI 辅助拆解需求、Review 代码和定位复杂问题。"}],o=[{name:"药管家",tag:"多端吃药提醒健康助手",desc:"覆盖 Android 手机/手表、HarmonyOS 手机/手表的健康提醒产品，包含提醒、服务卡片、NFC、支付、PUSH、OCR 等完整能力。",stack:["ArkTS","Java","Kotlin","Compose","NFC","OCR","PUSH"],impact:"华为年度原子化服务 / HDC 主题演讲案例 / 2025 梦想街区展出",markets:[{label:"鸿蒙",type:"harmony",id:"C5765880207854663789"},{label:"安卓",type:"android",id:"com.yxl.medicinemanager"},{label:"iOS",type:"ios",id:"6451383362"}]},{name:"朋克养生",tag:"游戏化健康管理工具",desc:"结合物理引擎、多端自适应、ASR 与 AI 智能化能力，构建更具互动感的健康管理体验。",stack:["ArkTS","物理引擎","ASR","AI","多端自适应"],impact:"2025 华为鸿蒙创新赛三等奖",markets:[{label:"鸿蒙",type:"harmony",id:"C6917577606806054483"}]},{name:"小象 upup",tag:"多端 CRM 工具",desc:"面向人际关系管理场景，支持 Android / HarmonyOS 多端，涉及名片识别、地图、服务卡片和日历等业务模块。",stack:["ArkTS","Java","支付","地图","名片识别"],impact:"多端业务闭环与移动生产力场景落地",markets:[{label:"鸿蒙",type:"harmony",id:"C5765880207854661793"},{label:"安卓",type:"android",id:"com.yxl.topsales"},{label:"iOS",type:"ios",id:"6446807219"}]},{name:"食参谋",tag:"AI 饮食决策系统",desc:"围绕饮食决策进行 AI 场景化探索，结合元素转场和多端自适应能力提升交互连续性。",stack:["ArkTS","AI智能化","元素转场","自适应"],impact:"AI 辅助决策产品实践"},{name:"饭饭魔法",tag:"儿童吃饭辅助应用",desc:"针对儿童吃饭难场景设计的辅助应用，通过语音播报、音频反馈和 AI 智能化能力增强吃饭过程的引导与互动。",stack:["Java","TTS","Audio","AI智能化","元素转场"],impact:"儿童饮食行为辅助场景落地",markets:[{label:"安卓",type:"android",id:"com.gflow.foodmagic"}]},{name:"选择易",tag:"转盘与易经决策工具",desc:"结合转盘交互、音频反馈和 AI 智能化能力，构建轻量决策工具，并通过元素转场提升选择过程的仪式感和反馈感。",stack:["ArkTS","Audio","AI智能化","元素转场"],impact:"趣味决策与传统文化场景产品实践",markets:[{label:"鸿蒙",type:"harmony",id:"C5765880207855935661"}]},{name:"墨晗AI笔记",tag:"AI 笔记与分析洞察",desc:"面向笔记整理、内容分析和洞察提炼的 AI 工具，使用 Flutter 实现跨端体验，并结合 AI 智能化能力提升信息处理效率。",stack:["Flutter","AI智能化"],impact:"AI 内容分析与效率工具实践"},{name:"系统图库 / 深圳卫健委 / 搜电充电宝",tag:"企业级鸿蒙项目",desc:"参与图库页面架构与功能实现、政务健康导航、充电宝服务卡片、H5-APP 通信、坐标转换与导航拉起等项目。",stack:["HarmonyOS","BLE","服务卡片","地图","架构设计"],impact:"中软国际期间获得优秀绩效和客户认可"},{name:"神速农业 APP",tag:"无人机业务移动端",desc:"从无人机工程师转向 Android 开发，负责交互、保险业务购买、后端数据同步、应用维护与性能优化。",stack:["Android","Java","硬件调试","数据同步"],impact:"硬件交付经验与应用开发能力融合"}],a=[{image:AP,title:"2025 HarmonyOS创新赛三等奖",text:"在2025华为鸿蒙创新赛近万支参赛队伍中，从众多头部大厂应用中突围获三等奖。"},{image:EP,title:"HDC 大会主题演讲案例",text:"药管家作为大会演讲案例，华为常务董事余承东介绍了药管家"},{image:yP,title:"2022华为应用市场年度应用榜",text:"药管家因其实用功能，深受用户喜爱，上榜华为应用市场2022“年度原子化服务”"},{image:bP,title:"华为开发者日 HDD 现场分享",text:"受邀在 HDD 活动中分享健康卡片和药管家商业闭环实践。"},{image:TP,title:"鸿蒙生态创新合作伙伴",text:"药管家与酷狗音乐、支付宝等应用同屏展示，获得生态创新合作伙伴奖项。"}],l=Rs(null),c=Rs(null),u=Rs(!0),h=Rs(!1),f=Rs([]),d=Rs(!1),m=Rs({"--hero-rotate-x":"0deg","--hero-rotate-y":"0deg","--hero-shine-x":"78%","--hero-shine-y":"18%","--hero-press":"0","--hero-lift":"0px"}),g=[{period:"2022.12 - 至今",company:"元向量智能科技有限公司",role:"客户端开发工程师",text:"主导多款 HarmonyOS / Android 产品从 0 到 1，实现药管家、朋克养生、小象 upup、食参谋等项目落地。"},{period:"2020.11 - 2022.12",company:"深圳中软国际科技服务有限公司",role:"鸿蒙开发工程师",text:"参与深圳卫健委、搜电充电宝、天安云谷寻车导航、YOUNG 音乐、系统图库等鸿蒙项目开发与技术支持。"},{period:"2019.1 - 2020.11",company:"无人机行业经历",role:"无人机工程师 / Android 转型",text:"负责无人机组装、硬件调试、测试流程和 APP 功能开发，逐步转向 Android 客户端开发。"}];let p,_,x,y,v,C=0;async function T(){window.clearTimeout(v);try{await navigator.clipboard.writeText(ih)}catch{const ue=document.createElement("textarea");ue.value=ih,ue.setAttribute("readonly",""),ue.style.position="fixed",ue.style.top="-1000px",document.body.appendChild(ue),ue.select(),document.execCommand("copy"),ue.remove()}h.value=!0,v=window.setTimeout(()=>{h.value=!1,window.location.href="weixin://"},1200)}function E(ue){return{harmony:`store://appgallery.huawei.com/app/detail?id=${ue.id}`,android:`market://details?id=${ue.id}`,ios:`itms-apps://itunes.apple.com/app/id${ue.id}`}[ue.type]}function S(ue){const fe=ue.markets??[],q=navigator.userAgent||"",W=navigator.platform||"",ie=navigator.maxTouchPoints||0,oe=/iPad|iPhone|iPod/i.test(q)||W==="MacIntel"&&ie>1,ye=/HarmonyOS|OpenHarmony|ArkWeb|Huawei|HUAWEI|HONOR/i.test(q),be=/Android/i.test(q);if(fe.length)return oe?fe.find(_e=>_e.type==="ios")??fe[0]:ye?fe.find(_e=>_e.type==="harmony")??fe.find(_e=>_e.type==="android")??fe[0]:be?fe.find(_e=>_e.type==="android")??fe.find(_e=>_e.type==="harmony")??fe[0]:fe[0]}function A(ue){const fe=S(ue),q=fe?E(fe):void 0;q&&(window.location.href=q)}function I(ue){var ie,oe;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||(oe=(ie=ue.target)==null?void 0:ie.closest)!=null&&oe.call(ie,".awards-webgl-stage"))return;const q=["#48d8ff","#8e5cff","#66ffd7","#ff5c93","#ffb84d"],W=Array.from({length:8},(ye,be)=>{const _e=Math.random()*Math.PI*2,Ue=74+Math.random()*86;return{id:C++,x:ue.clientX,y:ue.clientY,dx:Math.cos(_e)*Ue,dy:Math.sin(_e)*Ue,size:5+Math.random()*7,color:q[(be+Math.floor(Math.random()*q.length))%q.length]}});f.value=[...f.value.slice(-24),...W],window.setTimeout(()=>{const ye=new Set(W.map(be=>be.id));f.value=f.value.filter(be=>!ye.has(be.id))},1400)}function N(){d.value=!1,document.documentElement.classList.remove("hero-card-lock"),m.value={"--hero-rotate-x":"0deg","--hero-rotate-y":"0deg","--hero-shine-x":"78%","--hero-shine-y":"18%","--hero-press":"0","--hero-lift":"0px"}}function B(ue,fe=!0){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const q=ue.currentTarget.getBoundingClientRect(),W=(ue.clientX-q.left)/Math.max(q.width,1),ie=(ue.clientY-q.top)/Math.max(q.height,1),oe=Qr.clamp(W-.5,-.5,.5),ye=Qr.clamp(ie-.5,-.5,.5);d.value=fe,m.value={"--hero-rotate-x":`${(-ye*16).toFixed(2)}deg`,"--hero-rotate-y":`${(oe*19).toFixed(2)}deg`,"--hero-shine-x":`${(W*100).toFixed(1)}%`,"--hero-shine-y":`${(ie*100).toFixed(1)}%`,"--hero-press":fe?"1":"0","--hero-lift":fe?"18px":"0px"}}function ee(ue){var fe,q;ue.cancelable&&ue.preventDefault(),document.documentElement.classList.add("hero-card-lock"),(q=(fe=ue.currentTarget).setPointerCapture)==null||q.call(fe,ue.pointerId),B(ue,!0)}function te(ue){d.value&&(ue.cancelable&&ue.preventDefault(),B(ue,!0))}function z(ue){var fe,q;(q=(fe=ue.currentTarget).releasePointerCapture)==null||q.call(fe,ue.pointerId),N()}function Y(ue,fe,q,W,ie,oe,ye){const be=[...fe];let _e="",Ue=0;for(const R of be){const P=`${_e}${R}`;if(ue.measureText(P).width>ie&&_e){if(ue.fillText(_e,q,W),_e=R,W+=oe,Ue+=1,Ue>=ye-1)break}else _e=P}_e&&Ue<ye&&ue.fillText(_e,q,W)}function F(ue,fe,q,W,ie,oe){ue.moveTo(fe+oe,q),ue.lineTo(fe+W-oe,q),ue.quadraticCurveTo(fe+W,q,fe+W,q+oe),ue.lineTo(fe+W,q+ie-oe),ue.quadraticCurveTo(fe+W,q+ie,fe+W-oe,q+ie),ue.lineTo(fe+oe,q+ie),ue.quadraticCurveTo(fe,q+ie,fe,q+ie-oe),ue.lineTo(fe,q+oe),ue.quadraticCurveTo(fe,q,fe+oe,q)}function ne(ue,fe,q){const W=new Wp,ie=-ue/2,oe=ue/2,ye=fe/2,be=-fe/2;return W.moveTo(ie+q,be),W.lineTo(oe-q,be),W.quadraticCurveTo(oe,be,oe,be+q),W.lineTo(oe,ye-q),W.quadraticCurveTo(oe,ye,oe-q,ye),W.lineTo(ie+q,ye),W.quadraticCurveTo(ie,ye,ie,ye-q),W.lineTo(ie,be+q),W.quadraticCurveTo(ie,be,ie+q,be),W}function me(ue,fe,q){const W=ue.attributes.position,ie=[];for(let oe=0;oe<W.count;oe+=1)ie.push(W.getX(oe)/fe+.5,W.getY(oe)/q+.5);ue.setAttribute("uv",new Dt(ie,2))}function U(ue){const fe=document.createElement("canvas");fe.width=1024,fe.height=1180;const q=fe.getContext("2d"),W=new PT(fe);function ie(ye){q.clearRect(0,0,1024,1180),q.save(),q.beginPath(),F(q,0,0,1024,1180,92),q.clip();const be=q.createLinearGradient(0,0,1024,1180);be.addColorStop(0,"#111827"),be.addColorStop(.46,"#05070d"),be.addColorStop(1,"#10151f"),q.fillStyle=be,q.fillRect(0,0,1024,1180),ye&&(q.globalAlpha=.9,q.drawImage(ye,0,0,1024,760),q.globalAlpha=1),q.fillStyle="rgba(0, 0, 0, 0.76)",q.fillRect(0,740,1024,440),q.fillStyle="rgba(72, 216, 255, 0.22)",q.fillRect(0,740,1024,2),q.fillStyle="#ffffff",q.font="700 52px Microsoft YaHei, PingFang SC, sans-serif",Y(q,ue.title,56,838,900,62,2),q.fillStyle="rgba(225, 235, 255, 0.86)",q.font="400 38px Microsoft YaHei, PingFang SC, sans-serif",Y(q,ue.text,56,930,900,52,4),q.restore(),W.needsUpdate=!0}ie();const oe=new Image;return oe.onload=()=>ie(oe),oe.src=ue.image,W.colorSpace=ti,W.anisotropy=2,W}function Ae(){const ue=c.value;if(!ue)return;const fe=window.matchMedia("(prefers-reduced-motion: reduce)").matches,q=new O_,W=new gi(38,1,.1,80),ie=new Ug({alpha:!0,antialias:!0}),oe=new ms,ye=new T1,be=new Be,_e={rotationX:-.08,rotationY:.28,dragging:!1,pausedUntil:0},Ue={active:!1,mode:"pending",startX:0,startY:0,startRotationX:0,startRotationY:0,moved:!1},R=[],P=[];ie.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),ie.setClearColor(0,0),ie.outputColorSpace=ti,ue.appendChild(ie.domElement),q.add(oe),q.add(new y1(12048127,.68));const O=new ag(7202815,1.15);O.position.set(-3.5,3.2,5.5),q.add(O);const V=new ag(16747718,.42);V.position.set(4,-2,3),q.add(V),W.position.set(0,.12,6.8);const L=a.length,X=2.2,he=2.46,D=2.8,se=.075,K=.22;a.forEach((le,J)=>{const ce=J/L*Math.PI*2,De=ne(he,D,K),Ie=new Xp(De,{depth:se,bevelEnabled:!1,curveSegments:18});Ie.translate(0,0,-se/2);const Te=new Au(De,18),Re=new Au(De,18);me(Te,he,D);const xe=U(le),ze=new Yo({map:xe,transparent:!0,opacity:.92}),Oe=new ng({color:1054758,emissive:463643,emissiveIntensity:.34,metalness:.42,roughness:.38,transparent:!0,opacity:.82}),k=new ng({color:461586,emissive:1313053,emissiveIntensity:.22,metalness:.22,roughness:.62,transparent:!0,opacity:.76}),Ee=new ms,pe=new Zn(Ie,Oe),Fe=new Zn(Te,ze),Pe=new Zn(Re,k),Se=new CT(new LT(Ie),new Cd({color:10153983,transparent:!0,opacity:.34}));Fe.position.z=se/2+.002,Pe.position.z=-se/2-.002,Pe.rotation.y=Math.PI,Ee.position.set(Math.sin(ce)*X,0,Math.cos(ce)*X),Ee.rotation.y=ce,Ee.userData={angle:ce,index:J,frontMaterial:ze,sideMaterial:Oe,backMaterial:k,edgeMaterial:Se.material},pe.userData.panelRoot=Ee,Fe.userData.panelRoot=Ee,Pe.userData.panelRoot=Ee,Se.userData.panelRoot=Ee,Ee.add(pe,Fe,Pe,Se),oe.add(Ee),R.push(Ee),P.push(Ie,Te,Re,xe,ze,Oe,k,Se.geometry,Se.material)});function ve(){const le=ue.getBoundingClientRect();ie.setSize(le.width,le.height,!1),W.aspect=le.width/Math.max(le.height,1),W.position.z=le.width<700?7.8:6.8,W.updateProjectionMatrix()}function Z(le){const J=ie.domElement.getBoundingClientRect();be.x=(le.clientX-J.left)/J.width*2-1,be.y=-((le.clientY-J.top)/J.height)*2+1}function Me(le){const J=-le.userData.angle,ce=Math.round((_e.rotationY-J)/(Math.PI*2));_e.pausedUntil=performance.now()+2e3,Mn.to(_e,{rotationX:-.08,rotationY:J+ce*Math.PI*2,duration:.8,ease:"power3.out"})}function b(le){Ue.active=!0,Ue.mode="pending",Ue.startX=le.clientX,Ue.startY=le.clientY,Ue.startRotationX=_e.rotationX,Ue.startRotationY=_e.rotationY,Ue.moved=!1,_e.dragging=!0,_e.pausedUntil=0}function M(le){if(!Ue.active)return;const J=le.clientX-Ue.startX,ce=le.clientY-Ue.startY,De=Math.hypot(J,ce);Ue.mode==="pending"&&De>7&&(Ue.mode=Math.abs(J)>Math.abs(ce)*1.15?"horizontal":"vertical"),Ue.mode==="horizontal"&&(le.cancelable&&le.preventDefault(),Ue.moved=De>8,_e.rotationY=Ue.startRotationY+J*.006,_e.rotationX=Qr.clamp(Ue.startRotationX-ce*.002,-.18,.18))}function H(le){if(Ue.active){if(!Ue.moved&&Ue.mode!=="vertical"){Z(le),ye.setFromCamera(be,W);const J=ye.intersectObjects(R,!0)[0];J&&Me(J.object.userData.panelRoot??J.object)}Ue.active=!1,_e.dragging=!1}}let j=0,de=0;function ge(le=0){const J=Math.min(le-de,34)||16;de=le,!_e.dragging&&le>=_e.pausedUntil&&!fe&&(_e.rotationY+=J*28e-5),oe.rotation.x+=(_e.rotationX-oe.rotation.x)*.14,oe.rotation.y+=(_e.rotationY-oe.rotation.y)*.14,R.forEach(ce=>{const De=Math.max(.48,Math.cos(ce.userData.angle+oe.rotation.y)*.35+.65);ce.userData.frontMaterial.opacity=De,ce.userData.sideMaterial.opacity=.46+De*.34,ce.userData.backMaterial.opacity=.36+De*.2,ce.userData.edgeMaterial.opacity=.16+De*.3}),ie.render(q,W),j=window.requestAnimationFrame(ge)}return ve(),ge(),window.addEventListener("resize",ve),ie.domElement.addEventListener("pointerdown",b),ie.domElement.addEventListener("pointermove",M),ie.domElement.addEventListener("pointerup",H),ie.domElement.addEventListener("pointerleave",H),{cleanup(){window.cancelAnimationFrame(j),window.removeEventListener("resize",ve),ie.domElement.removeEventListener("pointerdown",b),ie.domElement.removeEventListener("pointermove",M),ie.domElement.removeEventListener("pointerup",H),ie.domElement.removeEventListener("pointerleave",H),P.forEach(le=>le.dispose()),ie.dispose(),ie.domElement.remove()}}}function Ne(){const ue=l.value;if(!ue)return;const fe=window.matchMedia("(prefers-reduced-motion: reduce)").matches,q=new O_,W=new gi(54,1,.1,120),ie=new Ug({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),oe=new Be(0,0),ye=[9329919,4774143,12058472,16758861,16735379,6750167],be={color:new dt(ye[0]),targetColor:new dt(ye[0]),project:0,baseCameraZ:10},_e={core:fe?0:1,scale:fe?1:7.6,spin:0,tunnelPull:fe?0:-15.5},Ue={current:0,target:0};ie.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),ie.setClearColor(0,0),ue.appendChild(ie.domElement),W.position.set(0,.4,10);const R=new ms;q.add(R);const P=new ms,O=[];q.add(P);const V=new Yo({color:16777215,wireframe:!0,transparent:!0,opacity:.13});for(let xe=0;xe<9;xe+=1){const ze=new qp(2.2+xe*.34,.012,6,96),Oe=new Zn(ze,V);Oe.position.z=-xe*1.2,Oe.rotation.z=xe*.22,P.add(Oe),O.push({geometry:ze,ring:Oe})}const L=new $p(1.7,.46,220,18,2,5),X=new Yo({color:be.color,wireframe:!0,transparent:!0,opacity:.92}),he=new Zn(L,X);he.rotation.set(.7,.18,-.36),R.add(he);const D=new Yp(4.1,2),se=new Yo({color:16777215,wireframe:!0,transparent:!0,opacity:.16}),K=new Zn(D,se);R.add(K);const ve=window.innerWidth<700?700:1300,Z=new Float32Array(ve*3),Me=new Float32Array(ve);for(let xe=0;xe<ve;xe+=1){const ze=4+Math.random()*9,Oe=Math.random()*Math.PI*2;Z[xe*3]=Math.cos(Oe)*ze,Z[xe*3+1]=(Math.random()-.5)*7,Z[xe*3+2]=Math.sin(Oe)*ze-Math.random()*10,Me[xe]=Math.random()*Math.PI*2}const b=new cn;b.setAttribute("position",new Yi(Z,3));const M=new Cv({color:be.color,size:.052,transparent:!0,opacity:.92,depthWrite:!1}),H=new RT(b,M);q.add(H);const j=new Cd({color:16777215,transparent:!0,opacity:.22}),de=new cn().setFromPoints([new G(-5.8,-2.8,-2),new G(5.8,2.8,-4)]),ge=new wv(de,j);q.add(ge);function le(){const{width:xe,height:ze}=ue.getBoundingClientRect(),Oe=xe<700;ie.setSize(xe,ze,!1),W.aspect=xe/Math.max(ze,1),be.baseCameraZ=Oe?14.6:10.2,W.position.z=be.baseCameraZ,R.scale.setScalar(Oe?.84:1.18),H.scale.setScalar(Oe?.88:1.08),P.scale.setScalar(Oe?.76:1),W.updateProjectionMatrix()}function J(){const xe=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),ze=Qr.clamp(window.scrollY/xe,0,1),Oe=Math.min(ye.length-1,Math.floor(ze*ye.length));Ue.target=ze,be.targetColor.setHex(ye[Oe])}function ce(xe){const ze=ue.getBoundingClientRect();oe.x=((xe.clientX-ze.left)/ze.width-.5)*2,oe.y=((xe.clientY-ze.top)/ze.height-.5)*-2}let De=0;const Ie=new A1;function Te(){const xe=Ie.getElapsedTime(),ze=fe?.08:1,Oe=Ue.current+(Ue.target-Ue.current)*.075,k=window.innerWidth<700,Ee=k?.84:1.18,pe=k?.88:1.08,Fe=k?.76:1,Pe=be.baseCameraZ-Oe*1.55,Se=k?.54:.42,we=Qr.lerp(Pe,Se,_e.core);Ue.current=Oe,be.color.lerp(be.targetColor,.045),X.color.copy(be.color),M.color.copy(be.color),V.color.copy(be.color).lerp(new dt(16777215),.42),V.opacity=.13+_e.core*.22,se.opacity=.16+_e.core*.2,M.opacity=.82+_e.core*.18,M.size=.052+_e.core*.085,R.rotation.y+=.0018*ze+be.project*18e-5+Oe*.0012+_e.core*.0022,R.rotation.x+=7e-4*ze+Oe*42e-5+_e.core*.0012,R.position.y=Qr.lerp(R.position.y,-Oe*1.1-_e.core*.08,.032),R.position.x=Qr.lerp(R.position.x,Math.sin(Oe*Math.PI*2)*.42,.032),K.rotation.y-=7e-4*ze+Oe*72e-5,P.rotation.z=xe*.01*ze+Oe*Math.PI*.58,P.position.z=-Oe*4.2,P.position.y=Oe*.64,ge.rotation.z=Math.sin(xe*.22+Oe*2.2)*.14,he.rotation.x+=.0018*ze+Oe*.0011,he.rotation.z+=9e-4*ze+Oe*.001,he.scale.setScalar(1+Math.sin(Oe*Math.PI)*.08);const Le=b.attributes.position;for(let $e=0;$e<ve;$e+=1)Le.array[$e*3+1]+=Math.sin(xe*.55+Me[$e]+Oe*9)*34e-5*ze*(1+Oe*.9),Le.array[$e*3+2]+=Math.cos(xe*.22+Me[$e])*22e-5*ze*Oe;Le.needsUpdate=!0,W.position.x+=(oe.x*.9-W.position.x)*.035,W.position.y+=(.4+oe.y*.55-W.position.y)*.035,R.scale.setScalar(Ee*_e.scale),H.scale.setScalar(pe*(.9+_e.scale*.18+_e.core*1.15)),P.scale.setScalar(Fe*(1+_e.core*3.2)),R.rotation.z=_e.spin,P.position.z+=_e.tunnelPull,W.fov+=(Qr.lerp(54,k?104:96,_e.core)-W.fov)*.1,W.updateProjectionMatrix(),W.position.z+=(we-W.position.z)*.055,W.lookAt(0,0,0),ie.render(q,W),De=window.requestAnimationFrame(Te)}return le(),J(),Te(),window.addEventListener("resize",le),window.addEventListener("scroll",J,{passive:!0}),window.addEventListener("mousemove",ce),{cleanup:()=>{window.cancelAnimationFrame(De),window.removeEventListener("resize",le),window.removeEventListener("scroll",J),window.removeEventListener("mousemove",ce),O.forEach(({geometry:xe})=>xe.dispose()),V.dispose(),L.dispose(),X.dispose(),D.dispose(),se.dispose(),b.dispose(),M.dispose(),de.dispose(),j.dispose(),ie.dispose(),ie.domElement.remove()},intro:_e}}return g0(()=>{e(),window.addEventListener("click",I,{passive:!0}),window.scrollTo({top:0,left:0,behavior:"auto"}),requestAnimationFrame(()=>{window.scrollTo({top:0,left:0,behavior:"auto"}),document.documentElement.classList.remove("app-booting")}),x=Ne(),y=Ae(),p=Mn.context(()=>{_=Mn.matchMedia(),_.add({all:"(min-width: 0px)",reduceMotion:"(prefers-reduced-motion: reduce)",isDesktop:"(min-width: 900px)",isMobile:"(max-width: 680px)"},({conditions:ue})=>{const fe=ue.reduceMotion?0:.9;Mn.defaults({ease:"power3.out",duration:fe}),ue.reduceMotion?(u.value=!1,t(),Mn.set([".nav",".hero-copy",".hero-copy > *",".stat-card",".intro-vignette"],{autoAlpha:1,clearProps:"filter"}),Mn.set(".intro-vignette",{autoAlpha:0,pointerEvents:"none"})):(u.value=!0,e(),Mn.set(".nav",{autoAlpha:0,y:-16}),Mn.set(".hero-copy",{autoAlpha:0,filter:"blur(14px)"}),Mn.set([".hero-copy > *",".stat-card"],{autoAlpha:0}),Mn.set(".intro-vignette",{autoAlpha:1}),Mn.timeline({defaults:{ease:"power4.out"}}).to((x==null?void 0:x.intro)??{},{core:0,scale:1,spin:Math.PI*2.05,tunnelPull:0,duration:ue.isMobile?3.35:3.6}).call(()=>{u.value=!1,t()}).to(".intro-vignette",{autoAlpha:0,duration:.82,pointerEvents:"none"},"-=0.36").to(".nav",{autoAlpha:1,y:0,duration:.56},"-=0.35").to(".hero-copy",{autoAlpha:1,filter:"blur(0px)",duration:.62},"-=0.28").fromTo(".hero-copy > *",{autoAlpha:0,y:ue.isMobile?18:30,filter:"blur(10px)"},{autoAlpha:1,y:0,filter:"blur(0px)",stagger:.075,duration:.72},"-=0.22").fromTo(".stat-card",{autoAlpha:0,y:18,scale:.985},{autoAlpha:1,y:0,scale:1,stagger:.045,duration:.54},"-=0.28")),Mn.utils.toArray(".reveal").forEach(q=>{Mn.from(q,{autoAlpha:0,y:ue.isMobile?22:42,duration:ue.reduceMotion?0:ue.isMobile?.55:.8,scrollTrigger:{trigger:q,start:ue.isMobile?"top 90%":"top 82%",toggleActions:"play none none none"}})}),Mn.utils.toArray(".project-card").forEach((q,W)=>{Mn.from(q,{autoAlpha:0,y:ue.isMobile?20:36,scale:ue.isMobile?.995:.98,delay:ue.reduceMotion||ue.isMobile?0:W*.03,scrollTrigger:{trigger:q,start:ue.isMobile?"top 92%":"top 88%",toggleActions:"play none none none"}})})}),requestAnimationFrame(()=>ht.refresh())})}),Zd(()=>{var ue,fe;t(),document.documentElement.classList.remove("hero-card-lock"),window.removeEventListener("click",I),window.clearTimeout(v),(ue=x==null?void 0:x.cleanup)==null||ue.call(x),(fe=y==null?void 0:y.cleanup)==null||fe.call(y),_==null||_.revert(),p==null||p.revert()}),(ue,fe)=>(Zi(),Ji(bn,null,[fe[10]||(fe[10]=OM('<header class="nav"><a class="brand" href="#top" aria-label="返回顶部"><span>RY</span><strong>王如洋</strong></a><nav aria-label="页面导航"><a href="#projects">项目</a><a href="#awards">荣誉</a><a href="#experience">经历</a><a href="#contact">联系</a></nav></header>',1)),qe("main",{id:"top",class:Ys({"intro-active":u.value})},[qe("div",{ref_key:"sceneHost",ref:l,class:"webgl-stage","aria-hidden":"true"},null,512),fe[8]||(fe[8]=qe("div",{class:"intro-vignette","aria-hidden":"true"},null,-1)),qe("section",wP,[qe("div",{class:Ys(["hero-copy",{"is-pressed":d.value}]),style:ml(m.value),onPointerdown:ee,onPointermove:te,onPointerup:z,onPointercancel:z,onPointerleave:z},[...fe[0]||(fe[0]=[qe("h2",null,"王如洋",-1),qe("p",{class:"role"},"深圳 · 鸿蒙开发工程师 · 7年工作经验",-1),qe("p",{class:"lead"}," 专注 HarmonyOS 与 Android 多端应用落地，主导药管家、朋克养生等项目从 0 到 1。具备硬件模块、BLE、AI 场景化和多端自适应经验。 ",-1)])],38)]),qe("section",CP,[(Zi(),Ji(bn,null,Ds(n,([q,W])=>qe("article",{key:W,class:"stat-card"},[qe("strong",RP,Dn(q),1),qe("span",null,Dn(W),1)])),64))]),qe("section",PP,[fe[1]||(fe[1]=qe("div",null,[qe("h2",null,"个人优势")],-1)),qe("div",DP,[(Zi(),Ji(bn,null,Ds(s,q=>qe("article",{key:q.title,class:"highlight-card"},[qe("h3",null,Dn(q.title),1),qe("p",null,Dn(q.text),1)])),64))])]),qe("section",LP,[fe[2]||(fe[2]=qe("div",{class:"section-head"},[qe("h2",null,"技术栈")],-1)),qe("div",IP,[(Zi(),Ji(bn,null,Ds(r,q=>qe("span",{key:q},Dn(q),1)),64))])]),qe("section",NP,[fe[3]||(fe[3]=qe("div",{class:"section-head reveal"},[qe("h2",null,"我的项目")],-1)),qe("div",UP,[(Zi(),Ji(bn,null,Ds(o,q=>{var W,ie,oe,ye;return qe("article",{key:q.name,class:Ys(["project-card",{"can-open":(W=q.markets)==null?void 0:W.length}]),role:(ie=q.markets)!=null&&ie.length?"button":void 0,tabindex:(oe=q.markets)!=null&&oe.length?0:void 0,"aria-label":(ye=q.markets)!=null&&ye.length?`${q.name}，打开对应应用市场`:void 0,onClick:be=>A(q),onKeydown:[Lm(Dm(be=>A(q),["prevent"]),["enter"]),Lm(Dm(be=>A(q),["prevent"]),["space"])]},[qe("div",OP,[qe("h3",null,Dn(q.name),1),qe("span",null,Dn(q.tag),1)]),qe("p",null,Dn(q.desc),1),qe("div",BP,[(Zi(!0),Ji(bn,null,Ds(q.stack,be=>(Zi(),Ji("small",{key:be},Dn(be),1))),128))]),qe("strong",null,Dn(q.impact),1)],42,FP)}),64))])]),qe("section",zP,[fe[4]||(fe[4]=qe("div",{class:"section-head reveal"},[qe("h2",null,"奖项荣誉")],-1)),qe("div",{ref_key:"awardsSceneHost",ref:c,class:"awards-webgl-stage reveal","aria-label":"可拖动旋转的奖项 3D 展示",role:"img"},null,512)]),qe("section",kP,[fe[5]||(fe[5]=qe("div",{class:"section-head"},[qe("h2",null,"工作经历")],-1)),qe("div",VP,[(Zi(),Ji(bn,null,Ds(g,q=>qe("article",{key:q.company,class:"timeline-item"},[qe("div",null,[qe("h3",null,Dn(q.company),1),qe("strong",null,Dn(q.role),1),qe("time",null,Dn(q.period),1),qe("p",null,Dn(q.text),1)])])),64))])]),fe[9]||(fe[9]=qe("section",{class:"section education"},[qe("div",null,[qe("h3",null,"河南应用技术职业学院")]),qe("p",null,"大专 · 无人机应用技术 · 2016 - 2019。主修机械设计基础、无人机系统原理、C语言、数字电路、模拟电路。")],-1)),qe("section",{id:"contact",class:"section contact"},[fe[7]||(fe[7]=qe("h3",null,"专注鸿蒙与移动端产品落地，欢迎进一步沟通",-1)),qe("div",{class:"contact-row"},[qe("button",{type:"button",onClick:T},"微信："+Dn(ih)),fe[6]||(fe[6]=qe("span",null,"目标岗位：鸿蒙开发工程师",-1))])]),qe("div",{class:Ys(["copy-toast",{"is-visible":h.value}]),role:"status","aria-live":"polite"}," 已复制微信号 ",2),qe("div",HP,[(Zi(!0),Ji(bn,null,Ds(f.value,q=>(Zi(),Ji("span",{key:q.id,class:"click-particle",style:ml({"--x":`${q.x}px`,"--y":`${q.y}px`,"--dx":`${q.dx}px`,"--dy":`${q.dy}px`,"--size":`${q.size}px`,"--color":q.color})},null,4))),128))])],2)],64))}};yy(GP).mount("#app");
