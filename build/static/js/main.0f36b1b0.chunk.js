(this["webpackJsonpzen-chef-react"]=this["webpackJsonpzen-chef-react"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),r=n(15),o=n.n(r),s=(n(23),n.p+"static/media/logo.6ce24c58.svg"),i=(n(24),n(16)),l=n(17),p=n(18),h=n.n(p),d=function(){function e(){Object(i.a)(this,e),this.login=function(e,t){var n={url:"https://localhost:8080/api/auth/signin",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},data:{usernameOrEmail:e,password:t}};h.a.post(n).then((function(e){localStorage.setItem("currentUser",JSON.stringify(e.data))}),(function(e){console.log(e)}))}}return Object(l.a)(e,[{key:"register",value:function(e,t,n){}}]),e}(),u=n(1);var j=function(){return n(43).config(),(new d).login("robert","Secret"),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(u.jsxs)("p",{children:["Edit ",Object(u.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(u.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.0f36b1b0.chunk.js.map