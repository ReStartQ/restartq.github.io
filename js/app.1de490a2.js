(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],u=0,b=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&b.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(b.length)b.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e70b0aa8"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"004f":function(t,e,a){"use strict";a("cf2e")},"088b":function(t,e,a){},1632:function(t,e,a){},"1b1e":function(t,e,a){"use strict";var r=a("b1dd"),n=a("5a18"),o=(a("004f"),a("2877")),i=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,"5c49e8d8",null);e["default"]=i.exports},"202d":function(t,e,a){"use strict";a("869d")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var r=a("2b0e"),n=a("5f5b");r["default"].use(n["b"]);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s={name:"App",components:{}},c=s,l=(a("5c0b"),a("2877")),u=Object(l["a"])(c,o,i,!1,null,null,null),f=u.exports,b=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("b-row",{attrs:{cols:"12",id:"myNav"}},[a("TheNavBar")],1),a("b-row",{staticClass:"main",attrs:{"align-v":"center"}},[a("b-col",{attrs:{cols:"12"}},[a("TheMain")],1)],1),a("b-row",{attrs:{"align-v":"center",id:"about"}},[a("b-col",{attrs:{cols:"1"}}),a("TheAboutInfo"),a("b-col",{attrs:{cols:"1"}})],1),a("b-row",{staticStyle:{"background-color":"#505a5c"},attrs:{"align-v":"center",id:"projects"}},[a("b-col",{attrs:{cols:"12"}},[a("br"),a("h1",{staticStyle:{color:"white"}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-diagram-project"}}),t._v(" Projects ")],1),a("br")])],1),a("b-row",{staticStyle:{"background-color":"#505a5c"},attrs:{"align-v":"center"}},[a("b-col",{attrs:{cols:"12"}},[a("b-card-group",{attrs:{deck:""}},t._l(t.projects,(function(t){return a("ProjectCard",{key:t.id,attrs:{name:t.name,description:t.description,imgSrc:t.imgSrc,github:t.github}})})),1)],1)],1),a("b-row",{staticStyle:{"background-color":"#505a5c"},attrs:{"align-v":"center"}},[a("b-col",[a("br"),a("br"),a("br")])],1),a("TheFooter")],1)},h=[],p=a("c7eb"),v=a("1da1"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"mb-2",attrs:{header:t.name,"header-bg-variant":"dark","header-text-variant":"white","img-src":t.imgSrc,"img-alt":"Image",href:t.github,tag:"article","bg-variant":"dark","text-variant":"white"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("b-button",{attrs:{href:t.github,variant:"primary"}},[a("b-icon",{attrs:{icon:"github"}}),t._v(" GitHub")],1),a("footer",[a("small",[t._v("Check out the repository")])])]},proxy:!0}])},[a("b-card-text",[t._v(" "+t._s(t.description)+" ")])],1)},g=[],w={props:["name","description","imgSrc","github"]},_=w,y=Object(l["a"])(_,m,g,!1,null,"731116eb",null),k=y.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-col",{attrs:{id:"myNav"}},[a("b-navbar",{attrs:{type:"dark",variant:"dark"}},[a("b-nav",{attrs:{align:"left"}},[a("b-navbar-brand",{attrs:{href:"./"}},[t._v(" ReStartQ")]),a("b-nav-item",{attrs:{href:"#about"}},[t._v("About")]),a("b-nav-item",{attrs:{href:"#projects"}},[t._v("Projects")]),a("b-nav-item",{attrs:{href:"#contacts"}},[t._v("Contact")])],1)],1)],1)},x=[],j={},T=j,M=Object(l["a"])(T,S,x,!1,null,"f0f28f16",null),P=M.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer"}},[a("b-row",{attrs:{"align-v":"center",id:"contacts"}},[a("b-col",{attrs:{cols:"12"}},[a("br"),a("h1",[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-address-book"}}),t._v(" Contact Me ")],1),a("br")])],1),a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h4",[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-envelope"}}),t._v(" Email")],1),a("b-button",{attrs:{href:"mailto: kevin.hoang322@gmail.com",variant:"info"}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-paper-plane"}}),t._v(" kevin.hoang322@gmail.com")],1),a("br"),a("br"),a("h4",[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-phone"}}),t._v(" Phone")],1),a("b-button",{attrs:{href:"tel:+2149300847",variant:"info"}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-comment-sms"}}),t._v(" text (214)-930-0847")],1),a("br"),a("br")],1)],1),a("b-row",[a("b-col",[a("h4",[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-user-group"}}),t._v(" Social Media ")],1),a("b-button",{staticClass:"socialButtons",attrs:{variant:"info",href:"https://www.linkedin.com/in/kevin-hoang-restartq/"}},[a("b-icon",{attrs:{icon:"linkedin"}}),t._v(" LinkedIn ")],1),a("b-button",{staticClass:"socialButtons",attrs:{variant:"info",href:"https://twitter.com/ReStartQ_"}},[a("b-icon",{attrs:{icon:"twitter"}}),t._v(" Twitter ")],1)],1)],1)],1)},O=[],E={},A=E,$=(a("f813"),Object(l["a"])(A,C,O,!1,null,"c60f2712",null)),H=$.exports,L=a("1b1e"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-col",{attrs:{id:"AboutSection",cols:"10"}},[a("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":"","header-tag":"nav","bg-variant":"dark","text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h1",[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-id-card"}}),t._v(" About")],1)])],1)]},proxy:!0}])},[a("b-row",{staticClass:"rounded-0",staticStyle:{overflow:"auto"},attrs:{"no-gutters":""}},[a("b-col",[a("b-card-group",{staticClass:"mb-2",staticStyle:{"margin-left":"0","margin-right":"0"},attrs:{deck:""}},[a("b-card",{attrs:{"img-src":"https://i.redd.it/dzl536txpkj71.jpg","img-alt":"Card image","bg-variant":"dark","img-height":"100%","no-body":""}}),a("b-card",{staticStyle:{"max-height":"450px",overflow:"auto"},attrs:{"bg-variant":"dark","text-variant":"white","header-tag":"header"},scopedSlots:t._u([{key:"header",fn:function(){return[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-nav",{attrs:{"card-header":"",pills:""}},[a("b-nav-item",{attrs:{active:1===t.tab},on:{click:function(e){return t.switchTab(1)}}},[t._v("Profile")]),a("b-nav-item",{attrs:{active:2===t.tab},on:{click:function(e){return t.switchTab(2)}}},[t._v("Stats")])],1)],1)],1)]},proxy:!0}])},[a(t.activeComponent,{tag:"component"})],1)],1)],1)],1)],1)],1)},D=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-text",{attrs:{align:"start"}},[a("b-row",[a("b-col",[a("h5",[t._v("Background and a bit about me")])])],1),a("b-row",[a("b-col",[a("p",[t._v(" Hey, my name is Kevin, and welcome to my portfolio. I graduated from The University of Texas at Dallas with a B.S. in Computer Science, and now I develop open source apps on GitHub. My hobbies are watching anime, playing video games, and talking to others. ")])])],1),a("b-row",[a("b-col",[a("h5",[t._v("My Stack")])])],1),a("b-row",[a("b-col",[a("p",[t._v(" Languages: JavaScript, TypeScript, HTML, CSS, SCSS. "),a("br"),t._v(" Libraries/Frameworks/Environments: React, Vue, Bootstrap, Node.js, and Electron. ")])])],1),a("b-row",[a("b-col",[a("h5",[t._v("Interests")])])],1),a("b-row",[a("b-col",[a("p",[t._v(" My current interests are learning more about UI/UX, specifically what makes a comfortable and visually appealing interface. ")])])],1)],1)},R=[],U={name:"Profile"},F=U,N=(a("202d"),Object(l["a"])(F,I,R,!1,null,"6e096690",null)),K=N.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-text",{attrs:{align:"start"}},[a("b-row",[a("b-col",{attrs:{cols:"12",align:"center"}},[a("h5",[t._v("LV: "+t._s(t.lv)+" Wizard")])])],1),a("h5",{attrs:{align:"start"}},[t._v(" EXP "),a("button",{attrs:{id:"expUp"},on:{click:function(e){return t.checkXp()}}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-circle-up"}})],1)]),a("b-progress",{staticClass:"mb-3",attrs:{max:"100"}},[a("b-progress-bar",{attrs:{variant:"primary",value:t.exp}})],1),a("h5",[t._v("Abilities")]),a("p",[t._v(" Static: The opponent has a 30% chance of being induced with PARALYZE when using an attack. ")]),a("b-row",{attrs:{align:"start"}},[a("b-col",{attrs:{cols:"6"}},[a("h5",[t._v("HP: "+t._s(t.hp))])]),a("b-col",{attrs:{cols:"6"}},[a("h5",[t._v("SPEED: "+t._s(t.speed))])])],1),a("br"),a("b-row",{attrs:{align:"start"}},[a("b-col",{attrs:{cols:"6"}},[a("h5",[t._v("ATK: "+t._s(t.atk))])]),a("b-col",{attrs:{cols:"6"}},[a("h5",[t._v("DEF: "+t._s(t.def))])])],1),a("br"),a("b-row",{attrs:{align:"start"}},[a("b-col",{attrs:{cols:"6"}},[a("h5",[t._v("SP. ATK: "+t._s(t.spatk))])]),a("b-col",{attrs:{cols:"6"}},[a("h5",[t._v("SP. DEF: "+t._s(t.spdef))])])],1)],1)},X=[],J={name:"Stats",data:function(){return{lv:1,exp:0,hp:35,atk:55,def:40,spatk:50,spdef:50,speed:90}},methods:{lvUp:function(){return this.exp%100==0&&(this.exp=0,this.lv<100&&(this.lv+=1,this.improveStats())),this.exp},increment:function(){return this.exp+=25,this.exp},checkXp:function(){this.lv<100?(this.increment(),this.lvUp()):this.makeToast("danger","b-toaster-top-right")},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;this.$bvToast.toast("Max Level Reached",{title:"Error",toaster:e,variant:t,noCloseButton:!0,autoHideDelay:1e3,solid:!0})},improveStats:function(){this.hp+=Math.floor(3*Math.random()+1),this.atk+=Math.floor(2*Math.random()+1),this.def+=Math.floor(1*Math.random()+1),this.spatk+=Math.floor(2*Math.random()+1),this.spdef+=Math.floor(2*Math.random()+1),this.speed+=Math.floor(4*Math.random()+1)}}},q=J,z=(a("5dc1"),Object(l["a"])(q,Q,X,!1,null,"04157340",null)),G=z.exports,V={el:"#AboutSection",data:function(){return{activeComponent:"Profile",tab:1}},methods:{switchTab:function(t){return 1===t&&(this.activeComponent="Profile"),2===t&&(this.activeComponent="Stats"),this.tab=t,this.tab}},components:{Profile:K,Stats:G}},W=V,Y=(a("c986"),Object(l["a"])(W,B,D,!1,null,"79ff957b",null)),Z=Y.exports,tt={name:"Home",components:{ProjectCard:k,TheNavBar:P,TheFooter:H,TheMain:L["default"],TheAboutInfo:Z},mounted:function(){this.fetchData()},data:function(){return{projects:[]}},methods:{fetchData:function(){var t=this;return Object(v["a"])(Object(p["a"])().mark((function e(){var a,r;return Object(p["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("projects.json");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,t.projects=r;case 7:case"end":return e.stop()}}),e)})))()}}},et=tt,at=(a("6505"),Object(l["a"])(et,d,h,!1,null,"3758d814",null)),rt=at.exports;r["default"].use(b["a"]);var nt=[{path:"/",name:"Home",component:rt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ot=new b["a"]({mode:"history",base:"/",routes:nt}),it=ot,st=a("2f62");r["default"].use(st["a"]);var ct=new st["a"].Store({state:{},mutations:{},actions:{},modules:{}}),lt=a("b1e0"),ut=a("ecee"),ft=a("c074"),bt=a("ad3d");r["default"].config.productionTip=!1,r["default"].use(n["a"]),r["default"].use(lt["a"]),ut["c"].add(ft["j"],ft["m"],ft["h"],ft["k"],ft["f"],ft["n"],ft["g"],ft["a"],ft["b"],ft["l"],ft["i"],ft["c"],ft["e"],ft["d"]),r["default"].component("font-awesome-icon",bt["a"]),r["default"].config.productionTip=!1,new r["default"]({router:it,store:ct,render:function(t){return t(f)}}).$mount("#app")},"5a18":function(t,e,a){"use strict";var r=a("5db8"),n=a.n(r);e["default"]=n.a},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5db8":function(t,e){},"5dc1":function(t,e,a){"use strict";a("af06")},6505:function(t,e,a){"use strict";a("088b")},"869d":function(t,e,a){},"9c0c":function(t,e,a){},af06:function(t,e,a){},b1dd:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-jumbotron",{attrs:{header:"Kevin Hoang",lead:"Open Source Developer",id:"main"}},[a("p",[t._v("Start Again!")]),a("b-button",{attrs:{variant:"primary",href:"https://github.com/ReStartQ"}},[a("b-icon",{attrs:{icon:"github"}}),t._v(" ReStartQ ")],1),a("br")],1)},n=[]},c986:function(t,e,a){"use strict";a("eade")},cf2e:function(t,e,a){},eade:function(t,e,a){},f813:function(t,e,a){"use strict";a("1632")}});
//# sourceMappingURL=app.1de490a2.js.map