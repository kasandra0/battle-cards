(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],d=0,u=[];d<i.length;d++)o=i[d],r[o]&&u.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"afcf5f94"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=n);var s,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t),s=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");o.type=n,o.request=s,a[1](o)}r[t]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,c.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/battle-cards/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},1730:function(t,e,a){"use strict";var n=a("d816"),r=a.n(n);r.a},2037:function(t,e,a){"use strict";var n=a("dd4d"),r=a.n(n);r.a},"3dd0":function(t,e,a){t.exports=a.p+"img/punch-white.266ffc31.svg"},"4be0":function(t,e,a){"use strict";var n=a("52c4"),r=a.n(n);r.a},"52c4":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("router-view")],1)},s=[],o=(a("034f"),a("2877")),i={},c=Object(o["a"])(i,r,s,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home row"},[a("h1",{staticClass:"title col-12"},[t._v("Battle Cards")]),t._m(0),a("div",{staticClass:"col-12"},[a("form",{on:{submit:function(e){e.preventDefault(),t.startGame()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gameConfig.playerName,expression:"gameConfig.playerName"}],attrs:{type:"text",name:"player-name",placeholder:"Enter Player Name"},domProps:{value:t.gameConfig.playerName},on:{input:function(e){e.target.composing||t.$set(t.gameConfig,"playerName",e.target.value)}}}),a("br"),a("button",{attrs:{type:"submit"}},[t._v("Start a new game")])])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("img",{attrs:{src:a("663b"),height:"400px"}})])}],m={name:"home",data(){return{gameConfig:{playerName:""}}},mounted(){},methods:{startGame(){this.$store.dispatch("startGame",this.gameConfig)}},components:{}},f=m,h=(a("aee4"),Object(o["a"])(f,p,u,!1,null,"7988d29a",null));h.options.__file="Home.vue";var g=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.game.id?n("div",{staticClass:"container-fluid"},[n("hand",{staticClass:"opponent-hand justify-content-center",attrs:{role:t.game.opponent,isPlayer:!1}}),n("div",{staticClass:"row"},[t.game.winner?n("div",{staticClass:"col-12 game-over"},[n("h1",[t._v("GAME OVER")]),n("h3",[t._v("Winner: "+t._s(t.game.winner))]),n("button",{staticClass:"btn btn-light",on:{click:function(e){t.goHome()}}},[t._v("Play Again")])]):n("div",{staticClass:"col-12 game-play"},[n("div",{staticClass:"attack-button",class:{"attack-ready":t.ready()},on:{click:function(e){t.attack()}}},[n("p",[t._v("Attack")]),n("img",{attrs:{src:a("3dd0"),height:"70px"}})]),n("p",[t._v("Opponent Card: "+t._s(t.opponentCard.name))]),n("p",[t._v("Player Card: "+t._s(t.playerCard.name))])])]),n("hand",{staticClass:"player-hand",attrs:{role:t.game.player,isPlayer:!0}})],1):t._e()},C=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"row"},[a("h3",{staticClass:"col-6 name"},[t._v(t._s(t.role.name))]),a("h5",{staticClass:"col-4 offset-2"},[t._v("Remaining Cards: "+t._s(t.role.remainingCards))])]),t.isPlayer?a("div",{staticClass:"row bg-transparent justify-content-center"},t._l(t.role.hand,function(e){return a("div",{staticClass:"col-2 card m-1",class:{"chosen-card":t.isChosen(e)},on:{click:function(a){t.setPlayerCard(e)}}},[a("img",{staticClass:"card-img",attrs:{src:e.img}}),a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",[t._v("Attack: "+t._s(e.attack))]),a("p",[t._v("Health: "+t._s(e.health))]),a("p",[t._v("Defense: "+t._s(e.defense))])])})):a("div",{staticClass:"row bg-transparent justify-content-center"},t._l(t.role.hand,function(e){return a("div",{staticClass:"col-2 card m-1",class:{"chosen-card":t.isChosen(e)},on:{click:function(a){t.setOpponentCard(e)}}},[e.visible?a("div",{},[a("img",{staticClass:"card-img",attrs:{src:e.img}}),a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",[t._v("Attack: "+t._s(e.attack))]),a("p",[t._v("Health: "+t._s(e.health))]),a("p",[t._v("Defense: "+t._s(e.defense))])]):a("div",{staticClass:"card-back card-img"},[a("h3",{staticClass:"font-weight-bold my-5 py-5"},[t._v("Battle Cards")])])])}))])},_=[],b={name:"hand",props:["role","isPlayer"],mounted(){},data(){return{}},computed:{playerCard(){return this.$store.state.playerCard},opponentCard(){return this.$store.state.opponentCard}},methods:{setOpponentCard(t){this.$store.dispatch("setOpponentCard",t)},setPlayerCard(t){this.$store.dispatch("setPlayerCard",t)},isChosen(t){return t==this.playerCard||t==this.opponentCard}}},w=b,k=(a("1730"),Object(o["a"])(w,y,_,!1,null,"bcc6bcdc",null));k.options.__file="hand.vue";var P=k.exports,O={name:"Game",mounted(){this.$store.dispatch("getGame",this.$route.params.gameId)},data(){return{}},computed:{game(){return this.$store.state.game},playerCard(){return this.$store.state.playerCard},opponentCard(){return this.$store.state.opponentCard}},methods:{ready(){return this.playerCard.id&&this.opponentCard.id},attack(){let t={gameId:this.game.id,playerCardId:this.playerCard.id,opponentCardId:this.opponentCard.id};this.$store.dispatch("attack",t)},goHome(){this.$router.push({name:"home"})},newGame(){this.$store.dispatch("startGame")}},components:{hand:P}},$=O,j=(a("2037"),a("4be0"),Object(o["a"])($,v,C,!1,null,"738d9a2e",null));j.options.__file="Game.vue";var x=j.exports;n["a"].use(d["a"]);var G=new d["a"]({routes:[{path:"/",name:"home",component:g},{path:"/game/:gameId",name:"game",component:x},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),E=a("2f62"),A=a("bc3a"),I=a.n(A);n["a"].use(E["a"]);let N=I.a.create({baseURL:"https://battlecardz.herokuapp.com/api/games",timeout:3e3});var S=new E["a"].Store({state:{game:{},opponentCard:{},playerCard:{}},mutations:{setGame(t,e){t.game=e},setOpponentCard(t,e){t.opponentCard=e},setPlayerCard(t,e){t.playerCard=e}},actions:{startGame({commit:t},e){N.post("",e).then(e=>{console.log("new Game:",e.data),t("setGame",e.data),G.push({name:"game",params:{gameId:e.data.game.id}})}).catch(t=>console.log("Cannot create new game"))},getGame({commit:t},e){N.get("/"+e).then(e=>{t("setGame",e.data.data),console.log("game: ",e.data.data)}).catch(t=>console.log("Cannot get game, gameId: ",e))},attack({commit:t,dispatch:e},a){N.put(a.gameId,a).then(e=>{console.log(e.data.game),t("setGame",e.data.game),t("setOpponentCard",{}),t("setPlayerCard",{})}).catch(t=>console.log("cannot play game"))},setOpponentCard({commit:t,dispatch:e},a){t("setOpponentCard",a)},setPlayerCard({commit:t,dispatch:e},a){t("setPlayerCard",a)}}});n["a"].config.productionTip=!1,new n["a"]({router:G,store:S,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,a){},"663b":function(t,e,a){t.exports=a.p+"img/swords.d370bf4d.svg"},aee4:function(t,e,a){"use strict";var n=a("d330"),r=a.n(n);r.a},d330:function(t,e,a){},d816:function(t,e,a){},dd4d:function(t,e,a){}});
//# sourceMappingURL=app.8fb7179a.js.map