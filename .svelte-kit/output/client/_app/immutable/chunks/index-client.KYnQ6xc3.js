import{S as T,q as Y,v as j,w as g,x as z,y as o,U as v,z as A,g as b,A as B,B as G,C as H,D as Z,E as $,L as J,P as V,F as Q,b as M,G as W,R as X,H as C,I as k,J as p,K as ee,f as F,M as re,N as ne,O as te,c as L,a as ae}from"./runtime.vuAkoxxI.js";import{c as fe}from"./store.bxznsvyl.js";function E(t,u=null,y){if(typeof t!="object"||t===null||T in t)return t;const m=H(t);if(m!==Y&&m!==j)return t;var i=new Map,c=Z(t),h=g(0);c&&i.set("length",g(t.length));var P;return new Proxy(t,{defineProperty(f,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&z();var n=i.get(e);return n===void 0?(n=g(r.value),i.set(e,n)):o(n,E(r.value,P)),!0},deleteProperty(f,e){var r=i.get(e);if(r===void 0)e in f&&i.set(e,g(v));else{if(c&&typeof e=="string"){var n=i.get("length"),a=Number(e);Number.isInteger(a)&&a<n.v&&o(n,a)}o(r,v),U(h)}return!0},get(f,e,r){var _;if(e===T)return t;var n=i.get(e),a=e in f;if(n===void 0&&(!a||(_=A(f,e))!=null&&_.writable)&&(n=g(E(a?f[e]:v,P)),i.set(e,n)),n!==void 0){var s=b(n);return s===v?void 0:s}return Reflect.get(f,e,r)},getOwnPropertyDescriptor(f,e){var r=Reflect.getOwnPropertyDescriptor(f,e);if(r&&"value"in r){var n=i.get(e);n&&(r.value=b(n))}else if(r===void 0){var a=i.get(e),s=a==null?void 0:a.v;if(a!==void 0&&s!==v)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(f,e){var s;if(e===T)return!0;var r=i.get(e),n=r!==void 0&&r.v!==v||Reflect.has(f,e);if(r!==void 0||B!==null&&(!n||(s=A(f,e))!=null&&s.writable)){r===void 0&&(r=g(n?E(f[e],P):v),i.set(e,r));var a=b(r);if(a===v)return!1}return n},set(f,e,r,n){var O;var a=i.get(e),s=e in f;if(c&&e==="length")for(var _=r;_<a.v;_+=1){var d=i.get(_+"");d!==void 0?o(d,v):_ in f&&(d=g(v),i.set(_+"",d))}a===void 0?(!s||(O=A(f,e))!=null&&O.writable)&&(a=g(void 0),o(a,E(r,P)),i.set(e,a)):(s=a.v!==v,o(a,E(r,P)));var w=Reflect.getOwnPropertyDescriptor(f,e);if(w!=null&&w.set&&w.set.call(n,r),!s){if(c&&typeof e=="string"){var N=i.get("length"),I=Number(e);Number.isInteger(I)&&I>=N.v&&o(N,I+1)}U(h)}return!0},ownKeys(f){b(h);var e=Reflect.ownKeys(f).filter(a=>{var s=i.get(a);return s===void 0||s.v!==v});for(var[r,n]of i)n.v!==v&&!(r in f)&&e.push(r);return e},setPrototypeOf(){G()}})}function U(t,u=1){o(t,t.v+u)}function ie(t){throw new Error("lifecycle_outside_component")}function K(t){for(var u=B,y=B;u!==null&&!(u.f&(W|X));)u=u.parent;try{return C(u),t()}finally{C(y)}}function ve(t,u,y,m){var q;var i=(y&k)!==0,c=(y&p)!==0,h=(y&ee)!==0,P=(y&ne)!==0,f=!1,e;h?[e,f]=fe(()=>t[u]):e=t[u];var r=(q=A(t,u))==null?void 0:q.set,n=m,a=!0,s=!1,_=()=>(s=!0,a&&(a=!1,P?n=M(m):n=m),n);e===void 0&&m!==void 0&&(r&&c&&$(),e=_(),r&&r(e));var d;if(c)d=()=>{var l=t[u];return l===void 0?_():(a=!0,s=!1,l)};else{var w=K(()=>(i?F:re)(()=>t[u]));w.f|=J,d=()=>{var l=b(w);return l!==void 0&&(n=void 0),l===void 0?n:l}}if(!(y&V))return d;if(r){var N=t.$$legacy;return function(l,R){return arguments.length>0?((!c||!R||N||f)&&r(R?d():l),l):d()}}var I=!1,O=!1,D=te(e),S=K(()=>F(()=>{var l=d(),R=b(D);return I?(I=!1,O=!0,R):(O=!1,D.v=l)}));return i||(S.equals=Q),function(l,R){if(arguments.length>0){const x=R?b(S):c&&h?E(l):l;return S.equals(x)||(I=!0,o(D,x),s&&n!==void 0&&(n=x),M(()=>b(S))),l}return b(S)}}function _e(t){L===null&&ie(),L.l!==null?ue(L).m.push(t):ae(()=>{const u=M(t);if(typeof u=="function")return u})}function ue(t){var u=t.l;return u.u??(u.u={a:[],b:[],m:[]})}export{E as a,_e as o,ve as p};
