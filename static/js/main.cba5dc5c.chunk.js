(this.webpackJsonppecker=this.webpackJsonppecker||[]).push([[0],{51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(36),r=n.n(s),o=n(7),i=n.n(o),u=n(13),l=n(5),d=n(29),j=n(8),b=n(10),m=n(31),O=n(24);n(49),n(65);O.a.initializeApp({apiKey:"AIzaSyBM0UEJkH9cT2XTaIyazlsm90a9_iOsyE8",authDomain:"pecker-8b0ae.firebaseapp.com",projectId:"pecker-8b0ae",storageBucket:"pecker-8b0ae.appspot.com",messagingSenderId:"350251717169",appId:"1:350251717169:web:1cf810a9cf1448679a3b10",measurementId:"G-HMNDXD3KF3"});var h=O.a,x=O.a.auth(),f=O.a.firestore(),p=(n(51),n(1)),v=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),o=r[0],d=r[1],j=Object(a.useState)(!0),b=Object(l.a)(j,2),m=b[0],O=b[1],h=Object(a.useState)(""),f=Object(l.a)(h,2),v=f[0],g=f[1],N=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&d(a)},w=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!m){e.next=8;break}return e.next=5,x.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,x.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{className:"auth-form-container",onSubmit:w,children:[Object(p.jsx)("input",{className:"auth-input",name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:N}),Object(p.jsx)("input",{className:"auth-input",name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:N}),Object(p.jsx)("input",{className:"auth-input-btn",type:"submit",value:m?"Create Account":"Sign In",required:!0}),v&&Object(p.jsx)("span",{className:"authError",children:v})]}),Object(p.jsx)("span",{className:"auth-toggle-btn",onClick:function(){return O((function(e){return!e}))},children:m?"Sign In":"Create Account"})]})},g=(n(53),function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,x.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"authContainer",children:[Object(p.jsx)(v,{}),Object(p.jsxs)("div",{className:"authBtns",children:[Object(p.jsxs)("button",{className:"authBtn",onClick:e,name:"google",children:["Continue with ",Object(p.jsx)("span",{className:"google-blue",children:"G"}),Object(p.jsx)("span",{className:"google-red",children:"o"}),Object(p.jsx)("span",{className:"google-yellow",children:"o"}),Object(p.jsx)("span",{className:"google-blue",children:"g"}),Object(p.jsx)("span",{className:"google-green",children:"l"}),Object(p.jsx)("span",{className:"google-red",children:"e "}),Object(p.jsx)(b.a,{icon:m.b})]}),Object(p.jsxs)("button",{className:"authBtn",onClick:e,name:"github",children:["Continue with Github ",Object(p.jsx)(b.a,{icon:m.a})]})]})]})}),N=n(26),w=n(14),k=(n(54),function(e){var t=e.refreshUser,n=e.userObj,c=Object(a.useState)(!1),s=Object(l.a)(c,2),r=s[0],o=s[1],d=Object(j.g)(),m=Object(a.useState)(n.displayName),O=Object(l.a)(m,2),h=O[0],f=O[1],v=function(){var e=Object(u.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===h){e.next=5;break}return e.next=4,n.updateProfile({displayName:h});case 4:t();case 5:o(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"profile-container",children:[Object(p.jsxs)("div",{className:"greeting",children:["\uc548\ub155\ud558\uc138\uc694 ",n.displayName,"\ub2d8"]}),Object(p.jsx)("div",{className:"edit-profile",children:r?Object(p.jsxs)("form",{onSubmit:v,children:[Object(p.jsx)("input",{className:"edit-finish-btn",onChange:function(e){var t=e.target.value;f(t)},type:"text",autoFocus:!0,placeholder:"New Name",value:h}),Object(p.jsx)("input",{className:"edit-finish-btn",type:"submit",value:"\uc774\ub984 \ubcc0\uacbd\ud558\uae30"})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("button",{className:"profile-edit-btn",onClick:function(){return o(!0)},children:[Object(p.jsx)(b.a,{icon:w.k}),"\xa0 \uc774\ub984 \uc218\uc815"]})})}),Object(p.jsx)("div",{className:"logout-container",children:Object(p.jsxs)("button",{className:"logout-btn",onClick:function(){window.confirm("\ub85c\uadf8\uc544\uc6c3\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(x.signOut(),d.push("/"))},children:[Object(p.jsx)(b.a,{icon:w.g}),"\xa0 \ub85c\uadf8\uc544\uc6c3"]})})]})}),y=n(39),S=n(67),C=(n(57),function(e){var t=e.userObj,n=e.todoObj,c=Object(a.useState)(!1),s=Object(l.a)(c,2),r=s[0],o=s[1],d=Object(a.useState)(n.work),j=Object(l.a)(d,2),m=j[0],O=j[1],h=Object(a.useState)(n.subject),x=Object(l.a)(h,2),v=x[0],g=x[1],N=Object(a.useState)(n.format),k=Object(l.a)(N,2),y=k[0],S=k[1],C=Object(a.useState)(n.duedate),I=Object(l.a)(C,2),D=I[0],A=I[1],F=Object(a.useState)("00:00:00"),z=Object(l.a)(F,2),E=z[0],P=z[1];Object(a.useEffect)((function(){var e=function(e){var t=String(Math.floor(e/3600)).padStart(2,"0"),n=String(Math.floor((e-3600*t)/60)).padStart(2,"0");return t+":"+n+":"+String(e-3600*t-60*n).padStart(2,"0")}(n.studyTime);P(e)}),[]);var T=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=4;break}return e.next=4,f.doc("".concat(t.uid,"/").concat(n.id)).delete();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){return o((function(e){return!e}))},B=function(e){var t=e.target,n=t.name,a=t.value;"work"===n?O(a):"subject"===n?g(a):"format"===n?S(a):"date"===n&&A(a)},M=function(){var e=Object(u.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,f.doc("".concat(t.uid,"/").concat(n.id)).update({work:m,subject:v,format:y,duedate:D});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("tbody",{children:r?Object(p.jsxs)("tr",{className:"todolist-row",children:[Object(p.jsx)("td",{className:"todo-edit-task-box",children:Object(p.jsx)("input",{className:"todo-edit-task",name:"work",value:m,type:"text",placeholder:n.work,onChange:B,required:!0})}),Object(p.jsx)("td",{className:"todo-edit-category-box",children:Object(p.jsx)("input",{className:"todo-edit-category",name:"subject",value:v,type:"text",placeholder:n.subject,onChange:B,required:!0})}),Object(p.jsx)("td",{className:"todo-edit-format-box",children:Object(p.jsx)("input",{className:"todo-edit-format",name:"format",value:y,type:"text",placeholder:n.format,onChange:B,required:!0})}),Object(p.jsx)("td",{className:"todo-edit-due-box",children:Object(p.jsx)("input",{className:"todo-edit-due",name:"date",value:D,type:"date",onChange:B,required:!0})}),Object(p.jsx)("td",{className:"todo-table-study-column",children:E}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{className:"todolist-btn edit-btn",onClick:M,children:Object(p.jsx)(b.a,{icon:w.b,size:"lg"})})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{className:"todolist-btn cancel-btn",onClick:q,children:Object(p.jsx)(b.a,{icon:w.a,size:"lg"})})})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("tr",{className:"todolist-row",children:[Object(p.jsx)("td",{className:"todo-table-task-column",children:n.work}),Object(p.jsx)("td",{className:"todo-table-category-column",children:n.subject}),Object(p.jsx)("td",{className:"todo-table-format-column",children:n.format}),Object(p.jsx)("td",{className:"todo-table-due-column",children:function(e){var t=e.split("-");return[t[1],t[2]].join("-")}(n.duedate)}),Object(p.jsx)("td",{className:"todo-table-study-column",children:E}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{className:"todolist-btn cancel-btn",onClick:T,children:Object(p.jsx)(b.a,{icon:w.i,size:"lg"})})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{className:"todolist-btn edit-btn",onClick:q,children:Object(p.jsx)(b.a,{icon:w.d,size:"lg"})})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{className:"todolist-btn edit-btn",children:Object(p.jsx)(b.a,{icon:w.c,size:"lg"})})})]})})})}),I=(n(58),function(e){var t=e.todoLists,n=e.userObj,c=Object(a.useState)(""),s=Object(l.a)(c,2),r=s[0],o=s[1],i=Object(a.useState)(t),u=Object(l.a)(i,2),d=u[0],j=u[1];Object(a.useEffect)((function(){if(""!==r){var e=t.filter((function(e){return e.subject===r}));j(e)}else f.collection("".concat(n.uid)).orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));j(t)}))}),[r]);var b=[],m=[],O=function(e){var t=e.target.innerText;o(t)};t.map((function(e){b.push(e.subject)})),Object(y.a)(new Set(b)).map((function(e){var t={id:Object(S.a)(),subject:e};m.push(t)}));return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"todo-title",children:"Todo List"}),Object(p.jsxs)("div",{className:"todo-filter-div",children:[Object(p.jsx)("button",{className:"todo-filter-btn",onClick:function(e){o("")},children:"\uc804\uccb4"}),m.map((function(e){return Object(p.jsx)("button",{className:"todo-filter-btn",onClick:O,children:e.subject},e.id)}))]}),Object(p.jsx)("div",{className:"todolists-table-container",children:Object(p.jsxs)("table",{className:"todolist-table",children:[Object(p.jsx)("thead",{className:"todolist-thead fixedHeader",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"todolist-task-column",children:"\ud560 \uc77c"}),Object(p.jsx)("th",{className:"todolist-category-column",children:"\uce74\ud14c\uace0\ub9ac"}),Object(p.jsx)("th",{className:"todolist-format-column",children:"\ud615\uc2dd"}),Object(p.jsx)("th",{className:"todolist-due-column",children:"\ub9c8\uac10\uc77c"}),Object(p.jsx)("th",{className:"todolist-studytime-column",children:"\uc18c\uc694 \uc2dc\uac04"}),Object(p.jsx)("th",{colSpan:"3",className:"todolist-button-column",children:"Buttons"})]})}),Object(p.jsx)(p.Fragment,{children:d.map((function(e){return Object(p.jsx)(C,{userObj:n,todoObj:e},e.id)}))})]})})]})})}),D=n(38),A=(n(59),function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),j=d[0],m=d[1],O=Object(a.useState)(""),h=Object(l.a)(O,2),x=h[0],v=h[1],g=Object(a.useState)(""),N=Object(l.a)(g,2),w=N[0],k=N[1],y=function(e){var t=e.target,n=t.name,a=t.value;"work"===n?r(a):"subject"===n?m(a):"format"===n?v(a):"date"===n&&k(a)},S=function(){var e=Object(u.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={work:s,subject:j,format:x,duedate:w,createdAt:Date.now(),creatorId:t.uid,studyTime:0},e.next=4,f.collection("".concat(t.uid)).add(a);case 4:r(""),m(""),v("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("form",{className:"todo-form-container",onSubmit:S,children:[Object(p.jsxs)("table",{className:"todo-assign-table",children:[Object(p.jsxs)("tr",{className:"todo-assign-row",children:[Object(p.jsx)("td",{className:"todo-assign-column",children:"Task"}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{className:"todo-assign-input",name:"work",value:s,type:"text",placeholder:"Task",onChange:y,required:!0})})]}),Object(p.jsxs)("tr",{className:"todo-assign-row",children:[Object(p.jsx)("td",{className:"todo-assign-column",children:"Category"}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{className:"todo-assign-input",name:"subject",value:j,type:"text",placeholder:"Category",onChange:y,required:!0})})]}),Object(p.jsxs)("tr",{className:"todo-assign-row",children:[Object(p.jsx)("td",{className:"todo-assign-column",children:"Format"}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{className:"todo-assign-input",name:"format",value:x,type:"text",placeholder:"Format",onChange:y,required:!0})})]}),Object(p.jsxs)("tr",{className:"todo-assign-row",children:[Object(p.jsx)("td",{className:"todo-assign-column",children:"DueDate"}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{className:"todo-assign-input",name:"date",type:"date",onChange:y,required:!0})})]})]}),Object(p.jsxs)("button",{className:"todo-assign-submit-btn",onSubmit:S,children:[Object(p.jsx)(b.a,{icon:D.a})," \ucd94\uac00\ud558\uae30"]})]})}),F=(n(60),function(e){var t=e.userObj,n=e.todoLists,c=Object(a.useState)("00:00:00"),s=Object(l.a)(c,2),r=s[0],o=s[1],d=Object(a.useState)(!1),j=Object(l.a)(d,2),m=j[0],O=j[1],h=Object(a.useState)(0),x=Object(l.a)(h,2),v=x[0],g=x[1],N=Object(a.useState)(0),k=Object(l.a)(N,2),y=k[0],S=k[1],C=Object(a.useState)(""),I=Object(l.a)(C,2),D=I[0],A=I[1];function F(e){var t=String(Math.floor(e/3600)).padStart(2,"0"),n=String(Math.floor((e-3600*t)/60)).padStart(2,"0");return t+":"+n+":"+String(e-3600*t-60*n).padStart(2,"0")}function z(e){var t=e.split(":");return 3600*parseInt(t[0])+60*parseInt(t[1])+parseInt(t[2])}Object(a.useEffect)((function(){var e;if(m)if(0===v){var t=Date.now();S(t),e=setInterval((function(){var e=Date.now(),n=Math.floor((e-t)/1e3);o(F(n))}),1e3)}else{var n=y-v+Date.now();S(n),e=setInterval((function(){var e=Date.now(),t=Math.floor((e-n)/1e3);o(F(t))}),1e3)}else clearInterval(e);return function(){return clearInterval(e)}}),[m]);var E=function(){var e=Object(u.a)(i.a.mark((function e(a){var c,s,u,l,d,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c=n.filter((function(e){return e.createdAt===parseInt(D)})),s=window.confirm("\ud574\ub2f9 \uc791\uc5c5\uc5d0 \uc2dc\uac04\uc744 \ucd94\uac00\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),1!==c.length||!s){e.next=16;break}return e.next=6,f.doc("".concat(t.uid,"/").concat(c[0].id)).get();case 6:return u=e.sent,l=u.data().studyTime,d=z(r),j=l+d,e.next=12,f.doc("".concat(t.uid,"/").concat(c[0].id)).update({studyTime:j});case 12:o("00:00:00"),g(0),e.next=17;break;case 16:return e.abrupt("return");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,e.next=3,A(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"timer-title",children:[Object(p.jsx)(b.a,{icon:w.j}),"\xa0\xa0Study Timer"]}),Object(p.jsx)("div",{className:"display-time",children:r}),Object(p.jsxs)("div",{className:"timer-btns",children:[!m&&Object(p.jsx)("button",{className:"timer-btn left-btn",onClick:function(){O(!0)},children:Object(p.jsx)(b.a,{icon:w.f,size:"2x"})}),m&&Object(p.jsx)("button",{className:"timer-btn left-btn",onClick:function(){var e=Date.now();g(e),O(!1)},children:Object(p.jsx)(b.a,{icon:w.e,size:"2x"})}),Object(p.jsx)("button",{className:"timer-btn right-btn",onClick:function(){O(!1),o("00:00:00"),g(0)},children:Object(p.jsx)(b.a,{icon:w.h,size:"2x"})})]}),m?Object(p.jsx)(p.Fragment,{}):Object(p.jsx)("div",{className:"add-timer-container",children:Object(p.jsxs)("form",{onSubmit:E,children:[Object(p.jsxs)("select",{className:"timer-select-todolists",onChange:P,name:"studyTime",children:[Object(p.jsx)("option",{value:"",children:"--Please choose a task--"}),n.map((function(e){return Object(p.jsx)("option",{value:e.createdAt,children:e.work},e.id)}))]}),Object(p.jsx)("button",{className:"timer-select-btn",onSubmit:E,children:"\uc2dc\uac04 \ucd94\uac00"})]})})]})})}),z=(n(61),function(e){var t=e.userObj,n=e.refreshUser,c=Object(a.useState)([]),s=Object(l.a)(c,2),r=s[0],o=s[1];return Object(a.useEffect)((function(){f.collection("".concat(t.uid)).orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));o(t)}))}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"home-container",children:[Object(p.jsxs)("div",{className:"first-inner-container",children:[Object(p.jsxs)("div",{className:"first-box-container",children:[Object(p.jsx)(k,{className:"home-profile",userObj:t,refreshUser:n}),Object(p.jsx)(A,{className:"home-todo-assign",userObj:t})]}),Object(p.jsx)("div",{className:"second-box-container",children:Object(p.jsx)(F,{userObj:t,todoLists:r})})]}),Object(p.jsxs)("div",{className:"second-inner-container",children:[Object(p.jsx)("div",{className:"third-box-container",children:Object(p.jsx)(I,{userObj:t,todoLists:r})}),Object(p.jsx)("div",{className:"fourth-box-container"})]})]})})}),E=function(e){e.modeObj;var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(p.jsx)(d.a,{children:Object(p.jsx)(j.d,{children:n?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j.b,{exact:!0,path:"/",children:Object(p.jsx)(z,{userObj:a,refreshUser:t})}),Object(p.jsx)(j.a,{from:"*",to:"/"})]}):Object(p.jsx)(j.b,{exact:!0,path:"/",children:Object(p.jsx)(g,{})})})})};n(62);var P=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(l.a)(s,2),o=r[0],d=r[1],j=Object(a.useState)(null),b=Object(l.a)(j,2),m=b[0],O=b[1],h=Object(a.useState)(!1),v=Object(l.a)(h,2),g=v[0],N=v[1],w=Object(a.useState)(null),k=Object(l.a)(w,2),y=k[0],S=k[1];Object(a.useEffect)((function(){x.onAuthStateChanged((function(e){e?(C(e.uid),S({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),O({studymode:n,timermode:o})):S(null),N(!0)}))}),[]);var C=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,f.collection("usermode").get();case 3:if((a=e.sent).docs.map((function(e){return n.push(e.id)})),-1!==n.indexOf(t)){e.next=11;break}return e.next=9,f.collection("usermode").doc("".concat(t)).set({uid:t,studymode:!0,timermode:!1});case 9:e.next=12;break;case 11:a.docs.map((function(e){e.data().uid===t&&(c(e.data().studymode),d(e.data().timermode))}));case 12:console.log();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"initial-component",children:g?Object(p.jsx)(E,{modeObj:m,refreshUser:function(){var e=x.currentUser;C(e.uid),S({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),O({studymode:n,timermode:o})},isLoggedIn:Boolean(y),userObj:y}):"Initalizing..."})})};n(63);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.cba5dc5c.chunk.js.map