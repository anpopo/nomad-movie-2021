(this["webpackJsonpnomad-movie-2021"]=this["webpackJsonpnomad-movie-2021"]||[]).push([[0],{57:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(29),i=n.n(c),r=n(8),o=n(2),j=n(1);var l=function(){return Object(j.jsx)("span",{children:"About this page: i love movies"})},m=n(17),u=n.n(m),d=n(30),v=n(11),b=n(12),h=n(14),p=n(13),O=n(31),x=n.n(O);n(57);var y=function(e){var t=e.id,n=e.year,s=e.title,a=e.summary,c=e.poster,i=e.genres;return Object(j.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:a,poster:c,genres:i}},children:Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:c,alt:s,title:s}),Object(j.jsxs)("div",{className:"movies__movie",children:[Object(j.jsx)("h3",{className:"movie__title",children:s}),Object(j.jsx)("h5",{className:"movie__year",children:n}),Object(j.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(j.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(j.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})})},f=(n(63),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(v.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var n,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(j.jsx)("section",{className:"container",children:t?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("span",{className:"loader__text",children:"Loading.."})}):Object(j.jsx)("div",{className:"movies",children:n.map((function(e){return Object(j.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component)),g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;t.state||n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(j.jsx)("span",{children:e.state.title}):null}}]),n}(a.a.Component);var _=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(r.b,{to:"/",children:"Home"}),Object(j.jsx)(r.b,{to:"/about",children:"About"})]})};var N=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(_,{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(j.jsx)(o.a,{path:"/about",component:l}),Object(j.jsx)(o.a,{path:"/movie/:id",component:g})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("potato"))}},[[64,1,2]]]);
//# sourceMappingURL=main.39581116.chunk.js.map