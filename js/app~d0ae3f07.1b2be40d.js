(function(e){function t(t){for(var a,c,i=t[0],l=t[1],s=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={"app~d0ae3f07":0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;r.push([0,"chunk-vendors~dfe7110a","chunk-vendors~9f3ab0cc","chunk-vendors~e4173fa2","chunk-vendors~f967fe2f","chunk-vendors~6f27f355","chunk-vendors~5ce4fade","chunk-vendors~eb7344d5","chunk-vendors~ab9cc731","chunk-vendors~4bc2da00","chunk-vendors~f414210c","chunk-vendors~6bcf42e1","chunk-vendors~1187b811","chunk-vendors~7a8621bb","chunk-vendors~3567b4a7","chunk-vendors~7e2e2373","chunk-vendors~f8ef863f","chunk-vendors~52f44a73","chunk-vendors~6937032c","chunk-vendors~36c5d7d2","chunk-vendors~ab1ba4f8","chunk-vendors~93acefaf","chunk-vendors~216d6f1c","chunk-vendors~00cb062a","chunk-vendors~9c5b28f6","chunk-vendors~3e59bfc8","chunk-vendors~f9ca8911","chunk-vendors~fdc6512a","chunk-vendors~f5586520"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[{collapsed:e.collapsed},{onmobile:e.isOnMobile}],attrs:{id:"app"}},[n("sidebar-menu",{attrs:{menu:e.menu,collapsed:e.collapsed,"show-one-chile":!0},on:{"toggle-collapse":e.onToggleCollapse,"item-click":e.onItemClick}}),e.isOnMobile&&!e.collapsed?n("div",{staticClass:"sidebar-overlay",on:{click:function(t){e.collapsed=!0}}}):e._e(),n("div",{class:[{collapsed:e.collapsed},{onmobile:e.isOnMobile}],attrs:{id:"RouterView"}},[n("router-view",{staticClass:"body"}),n("hr"),e._m(0)],1)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view-footer"},[e._v(" 聯絡我 : bu9noteblog@gmail.com "),n("br"),e._v(" Bu9 © 2021. ")])}],c={name:"App",data:function(){return{menu:[{header:!0,title:" ",hiddenOnCollapse:!0},{href:"/",title:document.title,icon:"fas fa-home"},{href:"/Recipe",title:"食譜 Recipe",icon:"fas fa-torah"},{href:"/Interview",title:"面試筆記 Interview",icon:"fas fa-pray"}],collapsed:!1,isOnMobile:!1}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize)},methods:{onToggleCollapse:function(e){console.log(e),this.collapsed=e},onItemClick:function(e,t,n){console.log("onItemClock"),console.log(e),console.log(t),console.log(n)},onResize:function(){console.log(window.innerWidth),this.isOnMobile=this.collapsed=window.innerWidth<=767}}},i=c,l=n("2877"),s=Object(l["a"])(i,o,r,!1,null,null,null),u=s.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ArticleList",{attrs:{articleType:e.articleType}})],1)},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("div",[e._v("Loading...")]):e._l(e.articleList,(function(t){return n("article",{key:t.id},[n("router-link",{staticClass:"detail-link",attrs:{to:{name:"ArticleDisplay",params:{id:t.id}}}},[e._v(e._s(t.title))]),n("br"),n("span",{staticClass:"tag"},[e._v(e._s(t.createTime))])],1)}))],2)},v=[],b=(n("99af"),{name:"ArticleList",data:function(){return{loading:!0,articleList:[]}},props:{articleType:{type:String,default:""}},mounted:function(){var e=this;this.$http.get("".concat("https://bu9note.azurewebsites.net/api","/blog/GetArticleList?type=").concat(this.articleType,"&page=1&pagesize=20")).then((function(t){e.articleList=t.data})).catch((function(t){e.$toast.error(t)})).then((function(){e.loading=!1}))}}),m=b,g=Object(l["a"])(m,h,v,!1,null,null,null),y=g.exports,k={name:"HomePage",data:function(){return{articleType:"technology"}},components:{ArticleList:y}},_=k,w=Object(l["a"])(_,f,p,!1,null,null,null),O=w.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ArticleList",{attrs:{articleType:e.articleType}})],1)},C=[],j={name:"HomePage",data:function(){return{articleType:"recipe"}},components:{ArticleList:y}},x=j,A=Object(l["a"])(x,T,C,!1,null,null,null),L=A.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ArticleList",{attrs:{articleType:e.articleType}})],1)},P=[],M={name:"HomePage",data:function(){return{articleType:"interview"}},components:{ArticleList:y}},z=M,D=Object(l["a"])(z,$,P,!1,null,null,null),E=D.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("article",[n("h1",[e._v(e._s(e.articleDisplay.title))]),n("span",{staticClass:"tag"},[e._v(e._s(e.articleDisplay.createTime))]),n("hr"),n("markdown-it-vue",{staticClass:"md-body",attrs:{content:e.articleDisplay.mdContent}})],1)])},S=[],I=(n("c975"),n("ac1f"),n("5319"),n("1276"),n("1157")),H=n.n(I),J={name:"ArticleDisplay",data:function(){return{articleDisplay:{title:"",createTime:"",mdContent:""}}},mounted:function(){var e=this;this.$http.get("".concat("https://bu9note.azurewebsites.net/api","/blog/getarticle?id=").concat(this.$route.params.id)).then((function(t){var n=t.data.mdContent.split("\r\n");t.data.mdContent="";var a=/\S*!\[\w+\]\(\S+\)/;H.a.each(n,(function(e,n){if(!a.test(n))return t.data.mdContent+="".concat(n," \r\n "),!0;var o=n.indexOf("(")+1,r=n.indexOf(")"),c=n.substring(o,r);n=n.replace(c,"".concat("https://bu9note.azurewebsites.net/api").concat(c)),t.data.mdContent+="".concat(n," \r\n ")})),e.articleDisplay=t.data})).catch((function(t){e.$toast.error(t)}))}},V=J,W=Object(l["a"])(V,R,S,!1,null,null,null),B=W.exports;a["default"].use(d["a"]);var G=[{path:"/",name:"Home",component:O},{path:"/Recipe",name:"Recipe",component:L},{path:"/Interview",name:"Interview",component:E},{path:"/Article/:id",name:"ArticleDisplay",component:B}],q=new d["a"]({mode:"hash",base:"/",routes:G}),F=q,K=n("5f5b"),N=n("b1e0"),Q=n("4776"),U=n.n(Q),X=n("bc3a"),Y=n.n(X),Z=n("2106"),ee=n.n(Z),te=n("48cd"),ne=n.n(te),ae=n("6c42");n("f417"),n("f9e3"),n("2dd8"),n("b15b"),n("15f5"),n("7051"),n("ad0b"),n("da96");a["default"].config.productionTip=!1,a["default"].use(K["a"]),a["default"].use(N["a"]),a["default"].use(U.a),a["default"].use(ee.a,Y.a),a["default"].use(ne.a),a["default"].use(ae["a"],{transition:"Vue-Toastification__bounce",maxToasts:20,newestOnTop:!0}),new a["default"]({router:F,render:function(e){return e(u)}}).$mount("#app")},ad0b:function(e,t,n){}});
//# sourceMappingURL=app~d0ae3f07.1b2be40d.js.map