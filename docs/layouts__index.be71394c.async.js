(self.webpackChunk=self.webpackChunk||[]).push([[717],{76587:function(Q,F,t){"use strict";t.r(F),t.d(F,{default:function(){return K}});var M=t(5574),m=t.n(M),A=t(82188),C=t(28459),y=t(9361),T=t(39249),B=t(72269),s=t(67294),I=t(45360),L=t(27922),h=t(85537),Z=t(56846),N=t(92797),P="streamax",E="f1887d3f9e6ee7a32fe5e76f4ab80d63",Y=t(81354),p=t.n(Y),e=t(85893),H=function(u){var o=u.children,l=(0,s.useState)(!1),d=m()(l,2),i=d[0],c=d[1],f=function(r){var j=p().MD5(r.password).toString();r.username===P&&j===E?c(!0):I.ZP.error("\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF")};return i?o:(0,e.jsx)("div",{className:"login-card",children:(0,e.jsx)(L.Z,{title:"\u8BF7\u767B\u5F55",style:{width:400},children:(0,e.jsxs)(h.Z,{layout:"vertical",onFinish:f,children:[(0,e.jsx)(h.Z.Item,{label:"\u7528\u6237\u540D",name:"username",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],children:(0,e.jsx)(Z.Z,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"})}),(0,e.jsx)(h.Z.Item,{label:"\u5BC6\u7801",name:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],children:(0,e.jsx)(Z.Z.Password,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})}),(0,e.jsx)(N.ZP,{style:{marginTop:50},type:"primary",block:!0,htmlType:"submit",children:"\u767B\u5F55"})]})})})},O=H,R=t(95133),z=t(62566),G=t(30381),J=t.n(G);function K(){var S=(0,s.useState)(!1),u=m()(S,2),o=u[0],l=u[1],d=(0,s.useState)(0),i=m()(d,2),c=i[0],f=i[1],v=(0,s.useRef)();(0,s.useEffect)(function(){return v.current=setInterval(function(){f(function(a){return a+1})},1e3),function(){clearInterval(v.current)}},[c]);var r=function(n){n?(document.documentElement.setAttribute("data-theme","light"),console.log("first light"),l(!1)):(document.documentElement.setAttribute("data-theme","dark"),l(!0))};(0,s.useLayoutEffect)(function(){var a=window.matchMedia("(prefers-color-scheme: light)");r(a.matches),a.addListener(function(n){r(n.matches)})},[]);var j=function(n){var D=Math.floor(n/3600),x=Math.floor(n%3600/60),g=n%60;return D>0?"".concat(D,"\u5C0F\u65F6").concat(x,"\u5206\u949F").concat(g,"\u79D2"):x>0?"".concat(x,"\u5206\u949F").concat(g,"\u79D2"):"".concat(g,"\u79D2")};return(0,e.jsx)(C.ZP,{theme:{token:{colorPrimary:"#00b96b"},algorithm:o?y.Z.darkAlgorithm:y.Z.defaultAlgorithm},children:(0,e.jsx)(T.Z,{children:(0,e.jsx)(O,{children:(0,e.jsxs)("div",{className:"layouts",children:[(0,e.jsxs)("div",{className:"header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:J()().format("YYYY-MM-DD HH:mm:ss")}),(0,e.jsx)("span",{className:"time-span",children:"\u5DF2\u767B\u5F55\u65F6\u957F\uFF1A".concat(j(c))})]}),(0,e.jsx)(B.Z,{checkedChildren:(0,e.jsx)(R.Z,{}),unCheckedChildren:(0,e.jsx)(z.Z,{}),checked:o,onChange:function(n){return r(!n)}})]}),(0,e.jsx)(A.j3,{})]})})})})}},42480:function(){}}]);
