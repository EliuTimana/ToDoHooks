(this["webpackJsonpto-do-hooks"]=this["webpackJsonpto-do-hooks"]||[]).push([[0],{20:function(t,e,n){"use strict";(function(t){n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return b})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return h}));var r=n(5),a=n(24),c=n(9),o=n.n(c),s=n(17),i="http://localhost:4000",u="object"===typeof t,d=function(){return 1e3*(2*Math.random()+1)},l=function(){var t=Object(s.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!u){t.next=10;break}return t.next=3,fetch("".concat(i,"/tasks"));case 3:return e=t.sent,t.next=6,e.json();case 6:if(n=t.sent,e.ok){t.next=9;break}throw new Error(n);case 9:return t.abrupt("return",n);case 10:return t.abrupt("return",new Promise((function(t,e){var n=localStorage.getItem("tasks"),r=[];r=n?JSON.parse(n):[{id:1,description:"Task 1",done:!1},{id:2,description:"Task 2",done:!0}],setTimeout((function(){return t(r)}),d())})));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(s.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!u){t.next=13;break}return t.next=3,fetch("".concat(i,"/tasks"),{body:JSON.stringify({description:e}),method:"POST",headers:{"Content-Type":"application/json"}});case 3:if((n=t.sent).ok){t.next=10;break}return t.t0=Error,t.next=8,n.json();case 8:throw t.t1=t.sent.message,new t.t0(t.t1);case 10:return t.next=12,n.json();case 12:return t.abrupt("return",t.sent);case 13:return t.abrupt("return",new Promise(function(){var t=Object(s.a)(o.a.mark((function t(n,r){var c,s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:c=t.sent,s=0===c.length?1:Math.max.apply(Math,Object(a.a)(c.map((function(t){return t.id}))))+1,i={id:s,description:e,done:!1},c.unshift(i),j(c),setTimeout((function(){return n(i)}),d());case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(s.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!u){t.next=11;break}return t.next=3,fetch("".concat(i,"/tasks/").concat(e,"/toggle"),{method:"PATCH"});case 3:if((n=t.sent).ok){t.next=10;break}return t.t0=Error,t.next=8,n.json();case 8:throw t.t1=t.sent.message,new t.t0(t.t1);case 10:return t.abrupt("return");case 11:return t.abrupt("return",new Promise(function(){var t=Object(s.a)(o.a.mark((function t(n,a){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:(c=t.sent).map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{done:!t.done}):t})),j(c),setTimeout((function(){return n()}),d());case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(s.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!u){t.next=11;break}return t.next=3,fetch("".concat(i,"/tasks/").concat(e),{method:"DELETE"});case 3:if((n=t.sent).ok){t.next=10;break}return t.t0=Error,t.next=8,n.json();case 8:throw t.t1=t.sent.message,new t.t0(t.t1);case 10:return t.abrupt("return");case 11:return t.abrupt("return",new Promise(function(){var t=Object(s.a)(o.a.mark((function t(n,r){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:a=t.sent,j(a.filter((function(t){return t.id!==e}))),setTimeout((function(){return n()}),d());case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(t){localStorage.setItem("tasks",JSON.stringify(t))}}).call(this,n(42))},58:function(t,e,n){},59:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e),n.d(e,"theme",(function(){return z}));var r=n(5),a=n(2),c=n(38),o=n.n(c),s=n(0),i=n.n(s),u=n(43),d=n.n(u),l=n(63),b=n(34),f=n(44),h=n(18),j=n(45),p=n(64),k=n(14),O=n(12),g=n(20),x=(n(58),function(t){return Object(a.jsx)(O.Flex,Object(r.a)(Object(r.a)({},t),{},{py:4,justifyContent:"center",sx:{backgroundColor:t.done?"success":"primary",transition:"background-color 0.25s"}}))}),m=function(t){var e=t.completedTasks;return Object(a.jsx)(x,{done:0===e,children:Object(a.jsxs)(O.Heading,{color:"white",as:"h4",children:["Tasks App (",e," tasks to do)"]})})},v=n(15),w=n(65),T=n(24),C=n(32),y=n(33),S=n(37),L=n(36),D=Object(s.createContext)({theme:{},isDark:!1,tasks:[],showCompleted:!0,changeColor:function(){},addTask:function(){},deleteTask:function(){},toggleTask:function(){},toggleCompletedVisibility:function(){}}),E=function(t){Object(S.a)(n,t);var e=Object(L.a)(n);function n(t){var a;Object(C.a)(this,n),(a=e.call(this,t)).changeColor=function(){a.setState({isDark:!a.state.isDark})},a.addTask=function(t){var e={id:0===a.state.tasks.length?1:Math.max.apply(Math,Object(T.a)(a.state.tasks.map((function(t){return t.id}))))+1,description:t,done:!1};a.setState({tasks:[].concat(Object(T.a)(a.state.tasks.slice()),[e])},(function(){a.saveLocalTasks()}))},a.deleteTask=function(t){a.setState({tasks:a.state.tasks.filter((function(e){return e.id!==t.id}))},(function(){a.saveLocalTasks()}))},a.toggleTask=function(t){a.setState({tasks:a.state.tasks.map((function(e){return e.id===t.id?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))},(function(){a.saveLocalTasks()}))},a.toggleCompletedVisibility=function(){a.setState({showCompleted:!a.state.showCompleted})},a.saveLocalTasks=function(){localStorage.setItem("tasks",JSON.stringify(a.state.tasks))};var c=localStorage.getItem("tasks"),o=[];return o=c?JSON.parse(c):[{id:1,description:"Task 1",done:!1},{id:2,description:"Task 2",done:!0}],a.state={dark:{backgroundColor:"grey",color:"white"},light:{backgroundColor:"white",color:"black"},isDark:!1,tasks:o,showCompleted:!0},a}return Object(y.a)(n,[{key:"render",value:function(){var t=this.state.isDark?this.state.dark:this.state.light;return Object(a.jsx)(D.Provider,{value:Object(r.a)(Object(r.a)({},this.state),{},{theme:t,changeColor:this.changeColor,addTask:this.addTask,deleteTask:this.deleteTask,toggleTask:this.toggleTask,toggleCompletedVisibility:this.toggleCompletedVisibility}),children:this.props.children})}}]),n}(s.Component),P=n(48),R=function(){var t=Object(s.useContext)(D),e=Object(s.useState)(!0),n=Object(P.a)(e,2),r=n[0],c=n[1];return Object(a.jsx)(k.a,{display:"inline-block",children:Object(a.jsxs)(v.c,{children:[Object(a.jsx)(v.a,{id:"chk-show",name:"chk-show",checked:r,color:"blue",bg:"white",onChange:function(e){return n=e.target.checked,t.toggleCompletedVisibility(),void c(n);var n}}),"Show completed items"]})})},I=function(){var t=Object(s.useContext)(D),e=Object(s.useRef)(),n=Object(b.b)(),r=Object(w.a)("addTask",(function(t){return Object(g.a)(t)}),{onSuccess:function(){var t;n.invalidateQueries("listTasks"),e.current.value="",null===(t=e.current)||void 0===t||t.focus()}}),c=r.mutate,o=r.isLoading,i=r.error,u=r.isError,d=r.reset;return Object(a.jsxs)(k.a,{my:3,children:[Object(a.jsx)(k.a,{mb:2,children:Object(a.jsx)(v.b,{type:"text",sx:{"::placeholder":{color:t.isDark?"white":"black"},borderColor:u?"red":"initial"},placeholder:"Write a task and press ENTER",ref:e,onKeyUp:function(t){return function(t){if("enter"===t.toLowerCase()){var n,r,a=null===(n=e.current)||void 0===n?void 0:n.value.trim();a&&(c(a),null===(r=e.current)||void 0===r||r.focus())}}(t.key)},readOnly:o,onBlur:function(){return d()}})}),u&&Object(a.jsx)(k.a,{pb:2,children:Object(a.jsx)(O.Text,{color:"danger",children:i+""})}),Object(a.jsx)(k.a,{children:Object(a.jsx)(R,{})})]})},B=n(39),J=function(t){return Object(a.jsx)(O.Text,Object(r.a)(Object(r.a)({},t),{},{as:"li",sx:{border:"1px solid rgba(0,0,0,0.125)",cursor:"pointer",transition:"background-color 0.15s",":hover":{backgroundColor:t.dark?"#212529":"#f5f3f3"},":first-child":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},":last-child":{borderBottomLeftRadius:"inherit",borderBottomRightRadius:"inherit"},"&+&":{borderTopWidth:0}},bg:t.dark?"#343a40":"white",color:t.dark?"white":"#41464b",display:"flex",justifyContent:"space-between",alignContent:"center",alignItems:"center"}))},M=function(t){var e=Object(h.useTheme)();return Object(a.jsx)(O.Button,Object(r.a)(Object(r.a)({},t),{},{variant:"danger",minWidth:35,minHeight:35,mr:3,sx:{cursor:t.disabled?"not-allowed":"pointer",borderRadius:"50%",backgroundColor:t.disabled?Object(B.b)(.07,e.colors.danger):"danger","&:hover":{backgroundColor:t.disabled?Object(B.b)(.07,e.colors.danger):Object(B.a)(.07,e.colors.danger)}},p:0,fontSize:"1.8rem"}))},N=function(t){var e=t.task,n=Object(s.useContext)(D),r=Object(b.b)(),c=function(){return r.invalidateQueries("listTasks")},o=Object(w.a)((function(t){return Object(g.b)(t)}),{onSuccess:c}),i=o.mutate,u=o.isLoading,d=Object(w.a)((function(t){return Object(g.d)(t)}),{onSuccess:c}),l=d.mutate,f=d.isLoading;return Object(a.jsxs)(J,{dark:n.isDark,children:[Object(a.jsxs)(v.c,{px:3,py:3,sx:{textDecorationLine:e.done?"line-through":"none",cursor:"pointer"},children:[Object(a.jsx)(v.a,{id:"chk"+e.id,name:"chk"+e.id,onChange:function(){return l(e.id)},checked:e.done,disabled:f||u}),e.description]}),Object(a.jsx)(M,{type:"button",onClick:function(){i(e.id)},disabled:u||f,children:"\xd7"})]})},F=function(t){Object(S.a)(n,t);var e=Object(L.a)(n);function n(){var t;Object(C.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).context=void 0,t}return Object(y.a)(n,[{key:"render",value:function(){return Object(a.jsx)(D.Consumer,{children:function(t){return Object(a.jsx)(O.Button,{color:"white",onClick:t.changeColor,children:t.isDark?"Light":"Dark"})}})}}]),n}(s.Component);function V(){var t=Object(j.a)(["\n  padding-left: 0;\n  border-radius: 0.25rem;\n  margin-top: 0;\n"]);return V=function(){return t},t}F.contextType=D;var A=h.default.ul(V()),H=function(t){return Object(a.jsx)(k.a,Object(r.a)(Object(r.a)({},t),{},{height:"100%",overflow:"auto"}))},Q=function(){var t=Object(p.a)("listTasks",g.c,{staleTime:6e4}),e=t.isLoading,n=t.data,c=Object(s.useContext)(D);if(e)return Object(a.jsx)(O.Text,{children:"Cargando..."});return Object(a.jsxs)(H,{style:Object(r.a)({},c.theme),children:[Object(a.jsx)(m,{completedTasks:(n||[]).filter((function(t){return t.done})).length}),Object(a.jsxs)(k.b,{width:["100%","90%"],flexDirection:"column",mx:"auto",p:3,children:[Object(a.jsx)(I,{}),Object(a.jsx)(A,{children:(n||[]).filter((function(t){return c.showCompleted?t:!t.done})).map((function(t){return Object(a.jsx)(N,{task:t},t.id)}))}),Object(a.jsx)(k.b,{justifyContent:"flex-end",mb:3,children:Object(a.jsx)(F,{})})]})]})},W=(n(59),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))}),z=Object(r.a)(Object(r.a)({},o.a),{colors:Object(r.a)(Object(r.a)({},o.a.colors),{},{primary:"#2196f3",success:"#4caf50",danger:"#f44336"}),buttons:Object(r.a)(Object(r.a)({},o.a.buttons),{},{danger:{color:"white",bg:"danger"}})});console.log(z);var K=new l.a;d.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsxs)(b.a,{client:K,children:[Object(a.jsx)(E,{children:Object(a.jsx)(h.ThemeProvider,{theme:z,children:Object(a.jsx)(Q,{})})}),Object(a.jsx)(f.ReactQueryDevtools,{initialIsOpen:!1})]})}),document.getElementById("root")),W()}},[[61,1,2]]]);
//# sourceMappingURL=main.1e6a1925.chunk.js.map