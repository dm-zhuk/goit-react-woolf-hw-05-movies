"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[937],{548:function(e,r,t){t.d(r,{Z:function(){return f}});t(791);var n=t(689),a=t(87),c="MoviesList_header__Zxe1y",s="MoviesList_ulList__FNGW8",i="MoviesList_listItem__A7ouK",u="MoviesList_imgItem__ii5gA",o="MoviesList_link__yYpw9",p="MoviesList_movieTitle__x4v5q",v=t(184),f=function(e){var r=e.movies,t=(0,n.TH)();return(0,v.jsx)("div",{className:c,children:(0,v.jsx)("ul",{className:s,children:r.map((function(e){var r=e.id,n=e.poster_path,c=e.name,s=e.title;return(0,v.jsx)("li",{className:i,children:(0,v.jsxs)(a.OL,{className:o,to:"/movies/".concat(r),state:{from:t.pathname+t.search},children:[(0,v.jsx)("img",{className:u,src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg",alt:c,width:250,height:330,loading:"lazy"}),(0,v.jsx)("h3",{className:p,children:c||s})]})},r)}))})})}},449:function(e,r,t){t.d(r,{TP:function(){return p},Tg:function(){return u},tx:function(){return f},z1:function(){return o},zG:function(){return i},zv:function(){return v}});var n=t(861),a=t(757),c=t.n(a),s=t(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"6b4e8c9fa955da636e2add3fea0fdd83"};var i=function(e,r){return r},u=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/all/day");case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",i(e.t0,"Error fetching movie trends"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie",{params:{query:r}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",i(e.t0,"Error searching movies"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",i(e.t0,"Error fetching movie details"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),i(e.t0,"Error fetching movie credits");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/reviews"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),i(e.t0,"Error fetching movie reviews");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},937:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(861),a=t(439),c=t(757),s=t.n(c),i=t(791),u=t(449),o=t(548),p="HomePage_wrapper__MN2ci",v=t(184),f=function(){var e=(0,i.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],f=(0,i.useState)(""),l=(0,a.Z)(f,2),h=l[0],d=l[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Tg)();case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d((0,u.zG)(e.t0,"Error fetching trending movies"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),h?(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("h2",{children:"\ud83d\ude1e Error"}),(0,v.jsx)("div",{children:h})]}):(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("h2",{children:"\ud83d\udd0d Trending Today"}),t&&(0,v.jsx)(o.Z,{movies:t})]})}}}]);
//# sourceMappingURL=937.69257a1f.chunk.js.map