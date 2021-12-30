(this.webpackJsonprouting=this.webpackJsonprouting||[]).push([[0],{60:function(e,t,n){},62:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),r=n(24),l=n.n(r),o=(n(60),n(21)),i=n(9),d=n.n(i),j=n(22),u=n(52),b=n(4),f=(n(62),n(16)),O=n(6),h=n(48),x=n(20),v=n.n(x),m=function(){var e=Object(O.g)();return Object(c.jsx)("h1",{children:function(){switch(e.pathname){case"/":return"Tasks";case"/folders":return"Folders";case"/settings":return"Settings";case"/add":return"New task";case"/task":return"Task";default:return"Something went wrong :>"}}()})},p=function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)(m,{})})},N=n(100),k=n(101),g=function(e){var t=e.selectedFolder,n=e.todos,a=(e.folders,e.handleDelete),s=e.postTaskHandler,r=e.setSelectedTask,l=Object(O.f)(),i=function(e){if(null!==e){var t=new Date(e);return"".concat(("0"+t.getDate()).slice(-2),".").concat(("0"+(t.getMonth()+1)).slice(-2),".")}return""};return Object(c.jsxs)("div",{className:"todos",children:[" ",function(){var e=function(e){return Object(c.jsx)("div",{className:e.isDone?"task-done":"task",children:e.title})},d=function(e){return Object(c.jsxs)("div",{className:"dead-line",children:[" ",i(e.deadline)," "]})},j=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(N.a,{className:"fa fa-trash",onClick:function(){return a(e.id)}})})},u=function(e){return Object(c.jsx)(k.a,{className:"check-box",checked:Boolean(e.isDone),onChange:function(t){return function(e){var t=Object(o.a)({},e);t.isDone=!t.isDone,s(t)}(e)},inputProps:{"aria-label":"checkbox with default color"}})};return Object(c.jsx)(c.Fragment,{children:n.map((function(n){return a=n.folder_id,(null===t||void 0===t||t.id===a)&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"todo-item",children:[Object(c.jsxs)("div",{children:[u(n)," "]}),Object(c.jsxs)("div",{className:"clickable-area",onClick:function(){return function(e){r(e),l.push("/task")}(n)},children:[e(n),d(n)]}),Object(c.jsx)("div",{children:j(n)})]},n.id)]});var a}))})}()]})},S=function(e){var t=e.searchData,n=Object(a.useState)(""),s=Object(b.a)(n,2),r=s[0],l=s[1],o=Object(a.useRef)(!1);return Object(c.jsxs)("div",{className:"search-bar",children:[Object(c.jsx)("form",{onChange:function(e){return function(e){e.preventDefault(),e.target.value.length>0?" "===e.target.value[0]?(console.log("gei"),o.current=!0):(t(e.target.value),o.current&&(o.current=!1)):(o.current&&(o.current=!1),t(null))}(e)},children:Object(c.jsx)("div",{className:"search-button",children:Object(c.jsx)("input",{type:"text",placeholder:"Search",value:r,onChange:function(e){return l(e.target.value)}})})}),o.current&&Object(c.jsx)("p",{className:"error-text",children:" Leading spaces are not allowed! "})]})},w=function(e){var t=e.sortAscending,n=e.sortTodosHandler,a=e.setSortAscending,s=e.currSort;return Object(c.jsxs)("div",{className:"sort",children:["Sort",Object(c.jsxs)("div",{className:"dropdown",children:[Object(c.jsx)("button",{className:"dropbtn",children:function(e){switch(e){case"title":return"Title";case"timeCreated":return"Time created";case"isDone":return"Status";case"deadline":return"Deadline";default:return"Error!"}}(s)}),Object(c.jsxs)("div",{className:"dropdown-content",children:[Object(c.jsx)("button",{onClick:function(){return n("title")},children:"Title"}),Object(c.jsx)("button",{onClick:function(){return n("timeCreated")},children:"Time created"}),Object(c.jsx)("button",{onClick:function(){return n("deadline")},children:"Deadline"}),Object(c.jsx)("button",{onClick:function(){return n("isDone")},children:"Status"})]})]}),Object(c.jsx)("div",{className:"arrow",children:Object(c.jsx)(N.a,{className:t?"fa fa-arrow-up":"fa fa-arrow-down",onClick:function(){a(!t),n(s)}})})]})},T=function(e){var t=e.todos,n=e.folders,a=e.handleDelete,s=e.postTaskHandler,r=e.setSelectedTask,l=e.sortTodosHandler,o=e.searchData,i=e.sortAscending,d=e.setSortAscending,j=e.currSort;return Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"sort-and-search",children:[Object(c.jsx)(w,{sortAscending:i,sortTodosHandler:l,setSortAscending:d,currSort:j}),Object(c.jsx)(S,{searchData:o})]}),Object(c.jsx)(g,{selectFolder:null,todos:t,folders:n,handleDelete:a,postTaskHandler:s,setSelectedTask:r})]})},C=function(e){var t=e.todos,n=e.folders,s=e.handleDelete,r=e.postTaskHandler,l=e.setSelectedTask,o=e.sortTodosHandler,i=e.handleFolderDelete,d=e.postFolderHandler,j=Object(a.useState)(null),u=Object(b.a)(j,2),f=u[0],O=u[1],h=Object(a.useRef)(null),x=Object(a.useState)(!1),v=Object(b.a)(x,2),m=v[0],p=v[1],k=Object(a.useRef)(),S=Object(a.useState)(""),w=Object(b.a)(S,2),T=w[0],C=w[1],D=Object(a.useState)(!1),H=Object(b.a)(D,2),F=H[0],y=H[1];Object(a.useEffect)((function(){var e=function(e){k.current.contains(e.target)||m&&p(!m)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[m]);var E=function(){d({name:T})};return Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"dropdown-menu-container",ref:k,children:[Object(c.jsxs)("div",{className:"folders-folder-icon",children:[Object(c.jsx)(N.a,{className:"fa fa-folder-open",onClick:function(){return p(!m)}}),null!==f?" ".concat(f.name):" No folder selected"]}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"folders",children:Object(c.jsx)("nav",{ref:h,className:"menu ".concat(m?"active":"inactive"),children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("p",{children:"Create Folder"}),Object(c.jsxs)("div",{className:"folder-title-and-icon",children:[Object(c.jsx)("form",{children:Object(c.jsx)("input",{type:"text",placeholder:"Folder title",value:T,onChange:function(e){return C(e.target.value)}})}),Object(c.jsx)(N.a,{className:"fa fa-plus-square",onClick:function(){return E(),void y(!F)}})]})]}),Object(c.jsx)("div",{children:n.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:"folders-title-and-icon",children:[Object(c.jsx)("button",{className:"folders-btn",onClick:function(){return O(e)},children:e.name}),Object(c.jsx)("div",{className:"folders-trash",children:Object(c.jsx)(N.a,{className:"fa fa-trash",onClick:function(){return i(e.id)}})})]})},e.id)}))})]})})})]}),Object(c.jsx)(g,{selectedFolder:f,todos:t,folders:n,handleDelete:s,postTaskHandler:r,setSelectedTask:l,sortTodosHandler:o})]})},D=function(e){var t=e.deleteAllTasks,n=e.deleteAllFolders;return Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)("div",{className:"settings",children:[Object(c.jsx)("button",{onClick:function(){return t()},children:"Delete all tasks"}),Object(c.jsx)("button",{onClick:function(){return n()},children:"Delete all folders"}),Object(c.jsx)("button",{onClick:function(){return t(),void n()},children:"Full reset"})]})})},H=n(33),F=function(e){e.todos,e.setTodos;var t=e.folders,n=(e.navSize,e.postTaskHandler),s=e.postFolderHandler,r=Object(a.useState)(""),l=Object(b.a)(r,2),o=l[0],i=l[1],d=Object(a.useState)(""),j=Object(b.a)(d,2),u=j[0],f=j[1],h=Object(a.useState)(null),x=Object(b.a)(h,2),v=x[0],m=x[1],p=Object(a.useState)(""),k=Object(b.a)(p,2),g=k[0],S=k[1],w=Object(a.useState)(""),T=Object(b.a)(w,2),C=T[0],D=T[1],F=Object(a.useState)(null),y=Object(b.a)(F,2),E=y[0],z=y[1],A=Object(a.useState)(!1),R=Object(b.a)(A,2),L=R[0],M=R[1],_=Object(a.useState)(!1),q=Object(b.a)(_,2),I=q[0],B=q[1],J=Object(a.useRef)(null),P=Object(a.useRef)(null),Q=Object(a.useRef)(null),G=Object(a.useState)(!1),K=Object(b.a)(G,2),U=K[0],V=K[1],W=Object(a.useState)("Error!"),X=Object(b.a)(W,2),Y=X[0],Z=X[1];Object(a.useEffect)((function(){var e=function(e){J.current.contains(e.target)||(L&&M(!L),I&&B(!I))};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[L,I]);var $=Object(O.f)(),ee=function(e){var t=e.getTimezoneOffset()/60;return t<0&&(t-=2*t),e.setHours(t),e=e.toISOString().split("T")[0]},te=function(e){if(e.preventDefault(),0===o.length)Z("Empty title not allowed"),V(!0);else if(" "===o[0])Z("Leading whitespaces not allowed"),V(!0);else{var t={title:o,description:u,deadline:null===E?null:ee(E),folder_id:v};n(t),i(""),$.push("/")}},ne=function(){s({name:g})};return Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"add-todo",children:[Object(c.jsx)(N.a,{className:"fa fa-check-circle",onClick:te}),Object(c.jsx)("form",{onSubmit:te,children:Object(c.jsx)("input",{type:"text",placeholder:"Task title",value:o,onChange:function(e){return i(e.target.value)}})}),U&&Object(c.jsx)("p",{className:"error-text",children:Y}),Object(c.jsx)("form",{children:Object(c.jsx)("div",{className:"description-box",children:Object(c.jsx)("textarea",{type:"text",placeholder:"Task description (optional)",value:u,onChange:function(e){return f(e.target.value)}})})})]}),Object(c.jsxs)("div",{className:"dropdown-menu-container",ref:J,children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"addtodo-folder-icon",children:[Object(c.jsx)(N.a,{className:"fa fa-folder-open",onClick:function(){return I&&B(!I),void M(!L)}}),""===C?"No folder selected":C]}),Object(c.jsx)("div",{className:"folders",children:Object(c.jsx)("nav",{ref:Q,className:"menu ".concat(L?"active":"inactive"),children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("p",{children:"Create folder"})," ",Object(c.jsxs)("div",{className:"folder-title-and-icon",children:[Object(c.jsx)("form",{onSubmit:te,children:Object(c.jsx)("input",{type:"text",placeholder:"Folder title",value:g,onChange:function(e){return S(e.target.value)}})}),Object(c.jsx)(N.a,{className:"fa fa-plus-square",onClick:function(){return ne()}})]})]}),Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"folders-btn",onClick:function(){return function(e){isNaN(e.id)?ne():m(e.id),D(e.name),M(!1)}(e)},children:e.name})},e.id)}))})]})})}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"date-selection-show",children:Object(c.jsxs)("div",{className:"addtodo-calendar-icon",children:[Object(c.jsx)(N.a,{className:"fa fa-calendar",onClick:function(){return B(!I)}}),null===E?"No date selected":E.toDateString()]})}),Object(c.jsx)("div",{className:"calendar-container",children:Object(c.jsx)("nav",{ref:P,className:"menu ".concat(I?"active":"inactive"),children:Object(c.jsx)(H.a,{value:null,locale:"en-EN",onChange:z})})})]})]})},y=function(e){var t=e.navSize,n=e.handleNavSizeChange,a=e.closeNav,s=Object(O.f)();return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"left-sidebar",style:{width:t},children:Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsxs)(f.b,{exact:!0,to:"/",className:"navlink",activeClassName:"active",children:[Object(c.jsx)(N.a,{className:"fa fa-home"}),"Tasks"]}),Object(c.jsxs)(f.b,{to:"/folders",className:"navlink",activeClassName:"active",children:[Object(c.jsx)(N.a,{className:"fa fa-folder-open"}),"Folders"]}),Object(c.jsxs)(f.b,{to:"/settings",className:"navlink",activeClassName:"active",children:[Object(c.jsx)(N.a,{className:"fa fa-cog"}),"Settings"]})]})}),Object(c.jsx)("div",{className:"burger-btn",children:Object(c.jsx)(N.a,{className:"fa fa-bars",onClick:function(){return n()}})}),Object(c.jsx)("div",{className:"add-btn",children:Object(c.jsx)(N.a,{className:"fa fa-plus-square",onClick:function(){return a(),void s.push("/add")}})})]})},E=function(e){return Object(c.jsx)("div",{className:"100%"===e.navSize?"blur":"",children:e.children})},z=function(e){var t=e.folders,n=e.selectedTask,s=e.setSelectedTask,r=e.postTaskHandler,l=e.postFolderHandler,i=e.toggleMode,d=e.handleDelete,j=e.redirect,u=Object(a.useState)(n.title),f=Object(b.a)(u,2),O=f[0],h=f[1],x=Object(a.useState)(n.description),v=Object(b.a)(x,2),m=v[0],p=v[1],k=Object(a.useState)(null===n.deadline?null:new Date(n.deadline)),g=Object(b.a)(k,2),S=g[0],w=g[1],T=Object(a.useState)(n.folder_id),C=Object(b.a)(T,2),D=C[0],F=C[1],y=Object(a.useState)(""),E=Object(b.a)(y,2),z=E[0],A=E[1],R=Object(a.useState)(!1),L=Object(b.a)(R,2),M=L[0],_=L[1],q=Object(a.useState)(!1),I=Object(b.a)(q,2),B=I[0],J=I[1],P=Object(a.useRef)(null),Q=Object(a.useRef)(null),G=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=function(e){P.current.contains(e.target)||(M&&_(!M),B&&J(!B))};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[M,B]);var K,U=function(e){isNaN(e.id)?W():F(e.id),_(!1)},V=function(){var e=Object(o.a)({},n);e.id=n.id,e.title=O,e.description=m,e.deadline=null===S?null:function(e){var t=e.getTimezoneOffset()/60;return t<0&&(t-=2*t),e.setHours(t),e.toISOString().split("T")[0]}(S),e.folder_id=D,s(e),r(e),h(""),i()},W=function(){l({name:z})};return Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)("div",{className:"edit-container",children:[Object(c.jsxs)("div",{className:"icons",children:[Object(c.jsx)(N.a,{className:"fa fa-trash",onClick:function(){return d(n.id),void j()}}),Object(c.jsx)(N.a,{className:"fa fa-save",onClick:function(){return V(),void i()}})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("form",{children:Object(c.jsx)("input",{type:"text",placeholder:"Task title",value:O,onChange:function(e){return h(e.target.value)}})}),Object(c.jsx)("hr",{}),Object(c.jsx)("form",{children:Object(c.jsx)("div",{className:"description-box",children:Object(c.jsx)("textarea",{type:"text",placeholder:"Task description (optional)",value:m,onChange:function(e){return p(e.target.value)}})})}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"dropdown-menu-container",ref:P,children:[Object(c.jsxs)("div",{className:"edit-folder-icon",children:[Object(c.jsx)(N.a,{className:"fa fa-folder-open",onClick:function(){return B&&J(!B),void _(!M)}}),null==D?"No folder selected":(K=D,0===t.length?null:t[t.map((function(e){return e.id})).indexOf(K)].name)]}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"folders",children:Object(c.jsx)("nav",{ref:G,className:"menu ".concat(M?"active":"inactive"),children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("p",{children:"Create folder"}),Object(c.jsxs)("div",{className:"folder-title-and-icon",children:[Object(c.jsx)("form",{onSubmit:V,children:Object(c.jsx)("input",{type:"text",placeholder:"Folder title",value:z,onChange:function(e){return A(e.target.value)}})}),Object(c.jsx)(N.a,{className:"fa fa-plus-square",onClick:function(){return U()}})]})]}),Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"folders-btn",onClick:function(){return U(e)},children:e.name})},e.id)}))})]})})}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"edit-calendar-icon",children:[Object(c.jsx)(N.a,{className:"fa fa-calendar",onClick:function(){return J(!B)}}),null===S&&null===n.deadline?"No date selected":null===S&&null!==n.deadline?new Date(n.deadline).toDateString():S.toDateString()]}),Object(c.jsx)("div",{className:"calendar-container",children:Object(c.jsx)("nav",{ref:Q,className:"menu ".concat(B?"active":"inactive"),children:Object(c.jsx)(H.a,{value:S,locale:"en-EN",onChange:w})})})]})]})})},A=function(e){var t,n=e.folders,a=e.selectedTask,s=e.toggleMode,r=e.handleDelete,l=e.redirect;return Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)("div",{className:"show-container",children:[Object(c.jsxs)("div",{className:"icons",children:[Object(c.jsx)(N.a,{className:"fa fa-trash",onClick:function(){return r(a.id),void l()}}),Object(c.jsx)(N.a,{className:"fa fa-edit",onClick:function(){return s()}})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"show-title",children:Object(c.jsx)("h2",{children:a.title})}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"show-description",children:a.description}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"icon-and-name",children:Object(c.jsxs)("div",{className:"show-folder-icon",children:[Object(c.jsx)(N.a,{className:"fa fa-folder-open"}),Object(c.jsx)("div",{className:"show-folder",children:null===a.folder_id?"No folder selected":(t=a.folder_id,0===n.length?null:n[n.map((function(e){return e.id})).indexOf(t)].name)})]})}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"icon-and-name",children:Object(c.jsxs)("div",{className:"show-calendar-icon",children:[Object(c.jsx)(N.a,{className:"fa fa-calendar"}),Object(c.jsxs)("div",{className:"show-deadline",children:[" ",null===a.deadline?"No date selected":new Date(a.deadline).toDateString()]})]})})]})})},R=function(e){var t=e.folders,n=e.selectedTask,s=e.setSelectedTask,r=e.postTaskHandler,l=e.postFolderHandler,o=e.handleDelete,i=Object(O.f)(),d=function(){i.push("/")},j=Object(a.useState)(!1),u=Object(b.a)(j,2),f=u[0],h=u[1],x=function(){h(!f)};return n?f?Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("br",{}),Object(c.jsx)(z,{folders:t,selectedTask:n,setSelectedTask:s,postTaskHandler:r,postFolderHandler:l,toggleMode:x,handleDelete:o,redirect:d})]}):Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("br",{}),Object(c.jsx)(A,{folders:t,selectedTask:n,toggleMode:x,handleDelete:o,redirect:d})]}):Object(c.jsxs)(c.Fragment,{children:[" ",d()]})},L=function(){var e="",t=Object(a.useState)(!1),n=Object(b.a)(t,2),s=n[0],r=n[1],l=Object(a.useState)("timeCreated"),i=Object(b.a)(l,2),x=i[0],m=i[1];e="http://localhost:8080/api";var N=Object(a.useState)([]),k=Object(b.a)(N,2),g=k[0],S=k[1],w=Object(a.useState)([]),H=Object(b.a)(w,2),z=H[0],A=H[1],L=Object(a.useState)(null),M=Object(b.a)(L,2),_=M[0],q=M[1];Object(a.useEffect)((function(){P()}),[]);var I=function(e){null===e?P():P("?search=".concat(e))},B=function(e,t){var n=Object(u.a)(e),c=function(e,n){return e[t]>n[t]?1:e[t]<n[t]||null===e[t]?-1:0};return s?n.sort((function(e,t){return c(e,t)})):n.sort((function(e,t){return c(t,e)})),n},J=function(e){e!==x&&m(e),S(B(g,e))},P=function(t){var n=function(){var t=Object(j.a)(d.a.mark((function t(n){var c,a,s=arguments;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=s.length>1&&void 0!==s[1]?s[1]:"",t.next=3,v.a.get(e+"/"+n+c);case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Promise.all([n("tasks",t),n("folders")]).then((function(e){var t=B(e[0],x);S(t),A(e[1])})).catch((function(e){return console.log(e)}))},Q=function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,void 0===n.id){t.next=6;break}return t.next=4,v.a.post(e+"/tasks/".concat(n.id),Object(o.a)({},n));case 4:t.next=8;break;case 6:return t.next=8,v.a.post(e+"/tasks",Object(o.a)({},n));case 8:P(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),G=function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post(e+"/folders",Object(o.a)({},n));case 3:P(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),K=function(){var t=Object(j.a)(d.a.mark((function t(n){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete(e+"/tasks/"+n);case 2:204!==(c=t.sent).status&&(console.log("error while deleting"),console.log(c)),P();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=Object(j.a)(d.a.mark((function t(n){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete(e+"/folders/"+n);case 2:204!==(c=t.sent).status&&(console.log("error while deleting"),console.log(c)),P();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),V=function(){var t=Object(j.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete(e+"/tasks/");case 2:204!==(n=t.sent).status&&(console.log("error while deleting"),console.log(n)),P();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=function(){var t=Object(j.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete(e+"/folders/");case 2:204!==(n=t.sent).status&&(console.log("error while deleting"),console.log(n)),P();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=Object(a.useState)("0px"),Y=Object(b.a)(X,2),Z=Y[0],$=Y[1],ee=Object(h.useMediaQuery)({query:"(max-width: 900px)"}),te=function(){ee&&$("0px")};return Object(c.jsxs)(f.a,{children:[Object(c.jsx)(p,{searchData:I}),Object(c.jsx)(y,{navSize:Z,handleNavSizeChange:function(){$(ee?"100%"===Z?"0%":"100%":"200px"===Z?"0px":"200px")},closeNav:te}),Object(c.jsx)(E,{navSize:Z,children:Object(c.jsxs)(O.c,{children:[Object(c.jsx)(O.a,{exact:!0,path:"/",children:Object(c.jsx)(T,{todos:g,folders:z,handleDelete:K,closeNav:te,navSize:Z,postTaskHandler:Q,setSelectedTask:q,sortTodosHandler:J,searchData:I,sortAscending:s,setSortAscending:r,currSort:x})}),Object(c.jsx)(O.a,{exact:!0,path:"/folders",children:Object(c.jsx)(C,{todos:g,folders:z,handleDelete:K,closeNav:te,navSize:Z,postTaskHandler:Q,setSelectedTask:q,sortTodosHandler:J,handleFolderDelete:U,postFolderHandler:G})}),Object(c.jsx)(O.a,{exact:!0,path:"/settings",children:Object(c.jsx)(D,{deleteAllTasks:V,deleteAllFolders:W})}),Object(c.jsx)(O.a,{exact:!0,path:"/add",children:Object(c.jsx)(F,{todos:g,folders:z,setTodos:S,navSize:Z,postTaskHandler:Q,postFolderHandler:G})}),Object(c.jsx)(O.a,{exact:!0,path:"/task",children:Object(c.jsx)(R,{folders:z,selectedTask:_,setSelectedTask:q,postTaskHandler:Q,postFolderHandler:G,todos:g,handleDelete:K})})]})})]})};l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.39165161.chunk.js.map