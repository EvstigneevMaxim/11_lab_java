(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(8),s=n.n(r),o=(n(15),n(2)),i=n(3),l=n(5),u=n(4),j=n.p+"static/media/logo.103b5fa1.svg",d=(n(16),n(7)),h=n.n(d),x=n(9),p=(n(18),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={lines:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(x.a)(h.a.mark((function e(){var t,n,c,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({lines:[{name:"data",text:"loading..."}]}),t=[{name:"Frontend",text:"React.js"}],e.next=4,fetch("/");case 4:return n=e.sent,c=n.headers.get("X-Proxy"),t=c?t.concat({name:"Frontend-Proxy",text:c}):t.concat({name:"Frontend-Proxy",text:"None"}),e.next=9,fetch("/api/info");case 9:if(!(a=e.sent).ok){e.next=18;break}return e.next=13,a.json();case 13:r=e.sent,console.log("BackendInfo fetched...",r),t=t.concat(r),e.next=26;break;case 18:return e.t0=t,e.next=21,a.text();case 21:e.t1=e.sent,e.t2="fetch error: "+e.t1,e.t3={name:"Backend",text:e.t2},e.t4=[e.t3],t=e.t0.concat.call(e.t0,e.t4);case 26:this.setState({lines:t});case 27:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Server response"}),Object(c.jsx)("ul",{children:this.state.lines.map((function(e){return Object(c.jsxs)("li",{children:[Object(c.jsxs)("b",{children:[e.name,":"]})," ",e.text]},e.id)}))})]})}}]),n}(a.Component)),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(c.jsx)("h1",{className:"App-title",children:"Frontend"})]}),Object(c.jsx)(p,{})]})}}]),n}(a.Component);s.a.render(Object(c.jsx)(b,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.559a51a1.chunk.js.map