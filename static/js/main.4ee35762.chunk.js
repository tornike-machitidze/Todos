(this["webpackJsonpudemy-course-reactapp"]=this["webpackJsonpudemy-course-reactapp"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),s=c(7),a=c.n(s),r=(c(13),c(2)),i=c(8),l=(c(14),c(0));var d=function(e){var t=e.todos,c=e.setTodos,n=e.setSelected,s=Object(o.useState)(""),a=Object(r.a)(s,2),d=a[0],u=a[1];return Object(l.jsx)("div",{className:"form-container",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{onChange:function(e){u(e.target.value)},value:d,className:"input-text",type:"text",placeholder:"write your todo here"}),Object(l.jsx)("input",{onClick:function(e){e.preventDefault(),d&&c([].concat(Object(i.a)(t),[{text:d,completed:!1,id:Math.random()}])),u("")},className:"input-submit",type:"submit",value:"add todo"}),Object(l.jsxs)("select",{onChange:function(e){n(e.target.value)},children:[Object(l.jsx)("option",{value:"all",children:"All"}),Object(l.jsx)("option",{value:"completed",children:"Completed"}),Object(l.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})]})})},u=c(6);c(16);var j=function(e){var t=e.todo,c=e.setTodos,n=e.todos,s=Object(o.useState)(!1),a=Object(r.a)(s,2),i=a[0],d=a[1];return Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{className:t.completed?"completed":"normal",children:t.text}),Object(l.jsxs)("div",{className:"separate",children:[Object(l.jsx)("div",{className:i?"completed-checkbox":"checkbox",onClick:function(e){c(n.map((function(t){return Number(t.id)===Number(e.target.id)?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t}))),d(!i)},id:t.id,children:"done"}),Object(l.jsx)("button",{id:t.id,onClick:function(e){var t=e.target.id;e.preventDefault(),c(n.filter((function(e){return Number(e.id)!==Number(t)})))},children:"X"})]})]})};c(17);var b=function(e){var t=e.filteredTodos,c=e.setTodos,o=e.todos;return Object(l.jsx)("div",{className:"ul-container",children:Object(l.jsx)("ul",{className:"ul",children:t.map((function(e){return Object(l.jsx)(j,{setTodos:c,todos:o,todo:e},e.id)}))})})};var m=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(o.useState)([]),a=Object(r.a)(s,2),i=a[0],u=a[1],j=Object(o.useState)("all"),m=Object(r.a)(j,2),f=m[0],p=m[1];return Object(o.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos",JSON.stringify(c)));n(e)}}()}),[]),Object(o.useEffect)((function(){switch(f){case"completed":u(c.filter((function(e){return e.completed})));break;case"uncompleted":u(c.filter((function(e){return!1===e.completed})));break;default:u(c.map((function(e){return e})))}localStorage.setItem("todos",JSON.stringify(c))}),[c,f]),Object(l.jsxs)("div",{className:"main-container",children:[Object(l.jsx)(d,{setSelected:p,todos:c,setTodos:n}),Object(l.jsx)(b,{setTodos:n,todos:c,filteredTodos:i})]})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.4ee35762.chunk.js.map