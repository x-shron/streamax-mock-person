"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{73067:function(J,f,t){t.r(f),t.d(f,{default:function(){return $}});var D=t(5574),v=t.n(D),n=t(31168),h=t(45803),y=t(74330),E=t(71230),r=t(15746),s=t(56846),L=t(76562),N=t(24435),z=t(78957),m=t(4923),G=t(78173),x;function T(j){return x||(x=G.Z.create({baseURL:"/",timeout:1e4})),x(j)}var V=t(67294),e=t(85893),C=["ip","port","protocol","_tenantId","_appId","_userId"];function $(){var j=(0,V.useState)(!1),S=v()(j,2),O=S[0],c=S[1],R=n.Z.useForm(),H=v()(R,1),p=H[0],Z=function(d,u){var a=u.protocol,i=u.ip,F=u.port,g=u._tenantId,I=u._appId,B=u._userId;c(!0),T({data:d,url:"".concat(a,"://").concat(i).concat(F?":".concat(F):"","/internal/person/device/simulate"),method:"POST",headers:{_tenantId:g,_appId:I,_userId:B}}).then(function(o){console.log("13123123",o),o.data.success?h.ZP.success("\u64CD\u4F5C\u6210\u529F"):h.ZP.error("\u64CD\u4F5C\u5931\u8D25: ".concat(o.data.message))},function(){h.ZP.error("\u64CD\u4F5C\u5931\u8D25")}).finally(function(){c(!1)})},b=function(d){p.validateFields([].concat(C,["deviceNum","deviceStartNumber"])).then(function(u){c(!0);var a=u.deviceNum,i=u.deviceStartNumber;Z({deviceOnlineState:d,deviceNum:a,deviceStartNumber:i},u)})},A=function(d){d===0?p.validateFields([].concat(C,["deviceNum","deviceStartNumber"])).then(function(u){c(!0);var a=u.deviceNum,i=u.deviceStartNumber;Z({deviceNum:a,deviceStartNumber:i},u)}):p.validateFields().then(function(u){c(!0);var a=u.gpsInfoList,i=u.deviceNum,F=u.deviceStartNumber,g=u.gpsInterval,I=a.split(`
`).map(function(B){var o=B.split(","),P=v()(o,2),U=P[0],k=P[1];return{lng:U,lat:k}});Z({gpsList:I,gpsSendState:d,deviceNum:i,deviceStartNumber:F,gpsInterval:g},u)})};return(0,e.jsx)(y.Z,{spinning:O,children:(0,e.jsx)("div",{className:"mock-person-gps",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)(n.Z,{form:p,layout:"vertical",children:[(0,e.jsx)("p",{className:"mock-person-gps-title",children:"\u7528\u6237\u4FE1\u606F"}),(0,e.jsxs)(E.Z,{gutter:60,children:[(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u79DF\u6237id",name:"_tenantId",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u79DF\u6237id"}],children:(0,e.jsx)(s.Z,{placeholder:"\u8BF7\u8F93\u5165\u79DF\u6237id"})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u7528\u6237id",name:"_userId",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237id"}],children:(0,e.jsx)(s.Z,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237id"})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u5E94\u7528id",name:"_appId",initialValue:10999,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E94\u7528id"}],children:(0,e.jsx)(s.Z,{placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528id"})})})]}),(0,e.jsx)("p",{className:"mock-person-gps-title",children:"\u8BBE\u5907\u4FE1\u606F"}),(0,e.jsxs)(E.Z,{gutter:60,children:[(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u534F\u8BAE",name:"protocol",rules:[{required:!0}],initialValue:"https",children:(0,e.jsx)(L.Z,{placeholder:"\u8BF7\u9009\u62E9\u534F\u8BAE",options:[{value:"http",label:"http"},{value:"https",label:"https"}]})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u670D\u52A1\u5668IP",name:"ip",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u670D\u52A1\u5668IP"}],children:(0,e.jsx)(s.Z,{placeholder:"\u8BF7\u8F93\u5165\u670D\u52A1\u5668IP"})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u670D\u52A1\u5668\u7AEF\u53E3",name:"port",children:(0,e.jsx)(s.Z,{placeholder:"\u8BF7\u8F93\u5165\u670D\u52A1\u5668\u7AEF\u53E3"})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u8BBE\u5907\u8D77\u59CB\u7F16\u53F7",name:"deviceStartNumber",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BBE\u5907\u8D77\u59CB\u7F16\u53F7"}],children:(0,e.jsx)(s.Z,{placeholder:"\u8BF7\u8F93\u5165\u8BBE\u5907\u8D77\u59CB\u7F16\u53F7"})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u8BBE\u5907\u6570\u91CF",name:"deviceNum",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BBE\u5907\u6570\u91CF"}],initialValue:10,children:(0,e.jsx)(N.Z,{placeholder:"\u8BF7\u8F93\u5165\u8BBE\u5907\u6570\u91CF"})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{initialValue:10,label:"GPS\u95F4\u9694\u65F6\u95F4\uFF08\u79D2\uFF09",name:"gpsInterval",children:(0,e.jsx)(N.Z,{placeholder:"\u8BF7\u8F93\u5165GPS\u95F4\u9694\u65F6\u95F4"})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{name:"gpsInfoList",label:"GPS\u4FE1\u606F\u5217\u8868",children:(0,e.jsx)(s.Z.TextArea,{placeholder:"\u8BF7\u8F93\u5165GPS\u4FE1\u606F\u5217\u8868, \u6BCF\u4E2Agps\u70B9\u9700\u6362\u884C\u8F93\u5165, \u683C\u5F0F\u4E3A:\u7ECF\u5EA6,\u7EAC\u5EA6",rows:6})})})]})]}),(0,e.jsxs)(z.Z,{className:"mock-person-gps-button",size:20,children:[(0,e.jsx)(m.ZP,{onClick:function(){return b(0)},danger:!0,size:"large",children:"\u4E0B\u7EBF"}),(0,e.jsx)(m.ZP,{color:"default",onClick:function(){return b(1)},type:"primary",size:"large",children:"\u4E0A\u7EBF"}),(0,e.jsx)(m.ZP,{onClick:function(){return A(0)},size:"large",children:"\u505C\u6B62\u4E0B\u53D1gps"}),(0,e.jsx)(m.ZP,{onClick:function(){return A(1)},size:"large",type:"primary",children:"\u5F00\u59CB\u4E0B\u53D1gps"})]})]})})})}}}]);