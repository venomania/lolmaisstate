(this.webpackJsonpmenu=this.webpackJsonpmenu||[]).push([[1],{114:function(e,n,t){},115:function(e,n,t){},116:function(e,n,t){},127:function(e,n,t){},128:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),s=t(33),i=t.n(s),o=t(25),a=t(3),j=t(68),l=t(22),u=t(13),b=(t(93),t(2)),d=[{title:"Home",url:"/page/Home",iosIcon:u.l,mdIcon:u.m},{title:"Player",url:"/page/Player",iosIcon:u.l,mdIcon:u.m},{title:"Rank",url:"/page/Rank",iosIcon:u.l,mdIcon:u.m},{title:"Ratio",url:"/page/Ratio",iosIcon:u.h,mdIcon:u.i}],h=function(){var e=Object(l.e)();return Object(b.jsx)(a.l,{contentId:"main",type:"overlay",children:Object(b.jsxs)(a.d,{children:[Object(b.jsxs)(a.j,{id:"inbox-list",children:[Object(b.jsx)(a.k,{children:"LOL PERFTOOLS"}),Object(b.jsx)(a.o,{children:"League Of Legends Performance Tools"}),d.map((function(n,t){return Object(b.jsx)(a.n,{autoHide:!1,children:Object(b.jsxs)(a.h,{className:e.pathname===n.url?"selected":"",routerLink:n.url,routerDirection:"none",lines:"none",detail:!1,children:[Object(b.jsx)(a.f,{slot:"start",ios:n.iosIcon,md:n.mdIcon}),Object(b.jsx)(a.i,{children:n.title})]})},t)}))]}),Object(b.jsx)(a.j,{id:"labels-list"})]})})},O=(t(95),t(96),function(e){e.name;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("strong",{children:"PERFORMANCE TOOLS"}),Object(b.jsx)("img",{src:"assets/img/logobg.png"}),Object(b.jsx)(a.h,{className:"btnStart",routerLink:"/page/Player",routerDirection:"none",lines:"none",detail:!1,children:Object(b.jsx)("strong",{children:"Start"})})]})}),x=t(71),m=t(6),p=t.n(m),f=t(14),y=t(52),g=t.n(y),v=Object(r.createContext)({stats:[],setStats:function(){return null}}),_=new(t(72).a);_.create();var k=function(){var e=Object(r.useContext)(v),n="RGAPI-bfaa8e64-0ba1-4048-b5f0-53837bdd813c",t=Object(r.useState)(null),c=Object(o.a)(t,2),s=c[0],i=c[1],a=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/".concat(t,"?api_key=").concat(n)).then((function(e){var n=e.data;j(n.id)}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j=function(){var t=Object(f.a)(p.a.mark((function t(r){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/".concat(r,"?api_key=").concat(n)).then((function(n){var t=n.data;console.log(t);var r,c=Object(x.a)(t);try{for(c.s();!(r=c.n()).done;){var s=r.value,o=t.queueType;_.set(o,s)}}catch(a){c.e(a)}finally{c.f()}i(t),e.setStats(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return console.log(s),{user:s,getUser:a,getRank:j}},w=(t(114),function(e){e.name;var n=Object(r.useState)(""),t=Object(o.a)(n,2),c=t[0],s=t[1],i=k(),j=i.getUser;return i.user?Object(b.jsx)(l.a,{to:"/page/Rank"}):Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("p",{children:"Search a player by his name to get his statistics !"}),Object(b.jsx)(a.j,{children:Object(b.jsxs)(a.h,{className:"customInput",children:[Object(b.jsx)(a.g,{placeholder:"Player Name",value:c,onIonChange:function(e){return s(e.detail.value)}}),Object(b.jsx)(a.b,{shape:"round",className:"searchBtn",onClick:function(){return j(c)},children:Object(b.jsx)(a.f,{icon:u.p})})]})})]})}),I=(t(115),t(74)),P=function(){return{WhatsApp:function(e){I.a.share("Venez voir vos stats \ud83d\ude18 : http://localhost:8100/page/Player")}}},C={initialSlide:0,speed:400},S=function(e){e.name;var n=k().user,t=Object(r.useContext)(v),c=P().WhatsApp;return Object(r.useEffect)((function(){console.log("user: ",n)})),Object(b.jsx)(a.d,{children:Object(b.jsx)(a.t,{pager:!0,options:C,children:t.stats.map((function(e){var n,t=e.tier?e.tier:null;null!==t&&(t=t.toLowerCase(),t=(n=t)[0].toUpperCase()+n.slice(1));var r="assets/rank/Emblem_".concat(t,".png");return Object(b.jsx)(a.s,{children:Object(b.jsxs)(a.j,{children:[Object(b.jsx)(a.h,{children:Object(b.jsx)("strong",{children:e.summonerName})}),Object(b.jsx)(a.h,{children:Object(b.jsx)("img",{src:r,width:100})}),Object(b.jsx)(a.h,{children:Object(b.jsx)("p",{children:e.tier})}),Object(b.jsx)(a.h,{children:Object(b.jsx)("p",{children:e.inactive})}),Object(b.jsx)(a.h,{children:Object(b.jsx)("p",{children:e.leaguePoints})}),Object(b.jsx)(a.h,{children:Object(b.jsx)("p",{children:e.losses})}),Object(b.jsx)(a.h,{children:Object(b.jsx)("p",{children:e.queueType})}),Object(b.jsx)(a.h,{children:Object(b.jsx)("p",{children:e.rank})}),Object(b.jsx)(a.h,{children:Object(b.jsx)("p",{children:e.wins})}),Object(b.jsx)(a.h,{children:Object(b.jsxs)(a.b,{onClick:function(){return c("r")},children:[" ",Object(b.jsx)(a.f,{slot:"end",icon:u.s})]})})]})})}))})})},L=function(e){var n,t=e.name;return"Home"==t?n=Object(b.jsx)(O,{name:t}):"Player"==t?n=Object(b.jsx)(w,{name:t}):"Rank"==t&&(n=Object(b.jsx)(S,{name:t})),Object(b.jsx)(b.Fragment,{children:n})},N=(t(116),function(){var e=Object(l.f)().name;return Object(b.jsxs)(a.p,{children:[Object(b.jsx)(a.e,{children:Object(b.jsxs)(a.w,{children:[Object(b.jsx)(a.c,{slot:"start",children:Object(b.jsx)(a.m,{})}),Object(b.jsx)(a.v,{children:e})]})}),Object(b.jsx)(a.d,{fullscreen:!0,children:Object(b.jsx)(L,{name:e})})]})}),R=(t(117),t(118),t(119),t(120),t(121),t(122),t(123),t(124),t(125),t(126),t(127),function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1];return Object(b.jsx)(v.Provider,{value:{stats:t,setStats:c},children:Object(b.jsx)(a.a,{children:Object(b.jsx)(j.a,{children:Object(b.jsxs)(a.u,{contentId:"main",children:[Object(b.jsx)(h,{}),Object(b.jsxs)(a.r,{id:"main",children:[Object(b.jsx)(l.b,{path:"/",exact:!0,children:Object(b.jsx)(l.a,{to:"/page/Home"})}),Object(b.jsx)(l.b,{path:"/page/:name",exact:!0,children:Object(b.jsx)(N,{})})]})]})})})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=function(e){e&&e instanceof Function&&t.e(58).then(t.bind(null,191)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),E()},83:function(e,n,t){var r={"./ion-action-sheet.entry.js":[131,5],"./ion-alert.entry.js":[132,6],"./ion-app_8.entry.js":[133,7],"./ion-avatar_3.entry.js":[134,17],"./ion-back-button.entry.js":[135,18],"./ion-backdrop.entry.js":[136,43],"./ion-button_2.entry.js":[137,19],"./ion-card_5.entry.js":[138,20],"./ion-checkbox.entry.js":[139,21],"./ion-chip.entry.js":[140,22],"./ion-col_3.entry.js":[141,44],"./ion-datetime_3.entry.js":[142,10],"./ion-fab_3.entry.js":[143,23],"./ion-img.entry.js":[144,45],"./ion-infinite-scroll_2.entry.js":[145,46],"./ion-input.entry.js":[146,24],"./ion-item-option_3.entry.js":[147,25],"./ion-item_8.entry.js":[148,26],"./ion-loading.entry.js":[149,27],"./ion-menu_3.entry.js":[150,28],"./ion-modal.entry.js":[151,8],"./ion-nav_2.entry.js":[152,14],"./ion-popover.entry.js":[153,9],"./ion-progress-bar.entry.js":[154,29],"./ion-radio_2.entry.js":[155,30],"./ion-range.entry.js":[156,31],"./ion-refresher_2.entry.js":[157,11],"./ion-reorder_2.entry.js":[158,16],"./ion-ripple-effect.entry.js":[159,47],"./ion-route_4.entry.js":[160,32],"./ion-searchbar.entry.js":[161,33],"./ion-segment_2.entry.js":[162,34],"./ion-select_3.entry.js":[163,35],"./ion-slide_2.entry.js":[164,48],"./ion-spinner.entry.js":[165,13],"./ion-split-pane.entry.js":[166,49],"./ion-tab-bar_2.entry.js":[167,36],"./ion-tab_2.entry.js":[168,15],"./ion-text.entry.js":[169,37],"./ion-textarea.entry.js":[170,38],"./ion-toast.entry.js":[171,39],"./ion-toggle.entry.js":[172,12],"./ion-virtual-scroll.entry.js":[173,50]};function c(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],c=n[0];return t.e(n[1]).then((function(){return t(c)}))}c.keys=function(){return Object.keys(r)},c.id=83,e.exports=c},85:function(e,n,t){var r={"./ion-icon.entry.js":[174,57]};function c(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],c=n[0];return t.e(n[1]).then((function(){return t(c)}))}c.keys=function(){return Object.keys(r)},c.id=85,e.exports=c},93:function(e,n,t){},95:function(e,n,t){},96:function(e,n,t){}},[[128,3,4]]]);
//# sourceMappingURL=main.9aafe1a7.chunk.js.map