"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{73067:function(J,N,t){t.r(N),t.d(N,{default:function(){return V}});var D=t(5574),F=t.n(D),n=t(85537),h=t(45360),k=t(74330),I=t(71230),r=t(15746),o=t(56846),y=t(76562),C=t(24435),L=t(78957),m=t(92797),z=t(78173),x;function T(g){return x||(x=z.Z.create({baseURL:"/",timeout:1e4})),x(g)}var G=t(67294),e=t(85893),S=["ip","port","protocol","_token"];function V(){var g=(0,G.useState)(!1),A=F()(g,2),$=A[0],d=A[1],O=n.Z.useForm(),R=F()(O,1),p=R[0],j=function(c,u){var a=u.protocol,i=u.ip,v=u.port,Z=u._tenantId,B=u._appId,f=u._userId,E=u._token;d(!0),T({data:c,url:"".concat(a,"://").concat(i).concat(v?":".concat(v):"","/gateway/ks-manager/internal/person/device/simulate"),method:"POST",headers:{_tenantId:Z,_appId:B,_userId:f,_token:E}}).then(function(s){console.log("13123123",s),s.data.success?h.ZP.success("\u64CD\u4F5C\u6210\u529F"):h.ZP.error("\u64CD\u4F5C\u5931\u8D25: ".concat(s.data.message))},function(s){h.ZP.error(s)}).finally(function(){d(!1)})},P=function(c){p.validateFields([].concat(S,["deviceNum","deviceStartNumber"])).then(function(u){d(!0);var a=u.deviceNum,i=u.deviceStartNumber;j({deviceOnlineState:c,deviceNum:a,deviceStartNumber:i},u)})},b=function(c){c===0?p.validateFields([].concat(S,["deviceNum","deviceStartNumber"])).then(function(u){d(!0);var a=u.deviceNum,i=u.deviceStartNumber;j({deviceNum:a,deviceStartNumber:i},u)}):p.validateFields().then(function(u){d(!0);var a=u.gpsInfoList,i=u.deviceNum,v=u.deviceStartNumber,Z=u.gpsInterval,B=a.split(`
`).map(function(f){var E=f.split(","),s=F()(E,2),H=s[0],U=s[1];return{lng:H,lat:U}});j({gpsList:B,gpsSendState:c,deviceNum:i,deviceStartNumber:v,gpsInterval:Z},u)})};return(0,e.jsx)(k.Z,{spinning:$,children:(0,e.jsx)("div",{className:"mock-person-gps",children:(0,e.jsxs)("div",{children:[(0,e.jsxs)(n.Z,{form:p,layout:"vertical",children:[(0,e.jsx)("p",{className:"mock-person-gps-title",children:"\u7528\u6237\u4FE1\u606F"}),(0,e.jsx)(I.Z,{gutter:60,children:(0,e.jsx)(r.Z,{span:24,children:(0,e.jsx)(n.Z.Item,{label:"token",name:"_token",rules:[{required:!0,message:"\u8BF7\u8F93\u5165token"}],children:(0,e.jsx)(o.Z.TextArea,{rows:5,placeholder:"\u8BF7\u8F93\u5165token"})})})}),(0,e.jsx)("p",{className:"mock-person-gps-title",children:"\u8BBE\u5907\u670D\u52A1\u5668\u4FE1\u606F"}),(0,e.jsxs)(I.Z,{gutter:60,children:[(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u534F\u8BAE",name:"protocol",rules:[{required:!0}],initialValue:"https",children:(0,e.jsx)(y.Z,{placeholder:"\u8BF7\u9009\u62E9\u534F\u8BAE",options:[{value:"http",label:"http"},{value:"https",label:"https"}]})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u670D\u52A1\u5668IP",name:"ip",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u670D\u52A1\u5668IP"}],children:(0,e.jsx)(o.Z,{placeholder:"\u8BF7\u8F93\u5165\u670D\u52A1\u5668IP"})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u670D\u52A1\u5668\u7AEF\u53E3",name:"port",initialValue:20551,children:(0,e.jsx)(o.Z,{placeholder:"\u8BF7\u8F93\u5165\u670D\u52A1\u5668\u7AEF\u53E3"})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u8BBE\u5907\u8D77\u59CB\u7F16\u53F7",name:"deviceStartNumber",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BBE\u5907\u8D77\u59CB\u7F16\u53F7"}],children:(0,e.jsx)(o.Z,{placeholder:"\u8BF7\u8F93\u5165\u8BBE\u5907\u8D77\u59CB\u7F16\u53F7"})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{label:"\u8BBE\u5907\u6570\u91CF",name:"deviceNum",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BBE\u5907\u6570\u91CF"}],initialValue:10,children:(0,e.jsx)(C.Z,{placeholder:"\u8BF7\u8F93\u5165\u8BBE\u5907\u6570\u91CF"})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{initialValue:10,label:"GPS\u95F4\u9694\u65F6\u95F4\uFF08\u79D2\uFF09",name:"gpsInterval",children:(0,e.jsx)(C.Z,{placeholder:"\u8BF7\u8F93\u5165GPS\u95F4\u9694\u65F6\u95F4"})})}),(0,e.jsx)(r.Z,{span:8,children:(0,e.jsx)(n.Z.Item,{name:"gpsInfoList",label:"GPS\u4FE1\u606F\u5217\u8868",children:(0,e.jsx)(o.Z.TextArea,{placeholder:"\u8BF7\u8F93\u5165GPS\u4FE1\u606F\u5217\u8868, \u6BCF\u4E2Agps\u70B9\u9700\u6362\u884C\u8F93\u5165, \u683C\u5F0F\u4E3A:\u7ECF\u5EA6,\u7EAC\u5EA6",rows:6})})})]})]}),(0,e.jsxs)(L.Z,{className:"mock-person-gps-button",size:20,children:[(0,e.jsx)(m.ZP,{onClick:function(){return P(0)},danger:!0,size:"large",children:"\u4E0B\u7EBF"}),(0,e.jsx)(m.ZP,{color:"default",onClick:function(){return P(1)},type:"primary",size:"large",children:"\u4E0A\u7EBF"}),(0,e.jsx)(m.ZP,{onClick:function(){return b(0)},size:"large",children:"\u505C\u6B62\u4E0B\u53D1gps"}),(0,e.jsx)(m.ZP,{onClick:function(){return b(1)},size:"large",type:"primary",children:"\u5F00\u59CB\u4E0B\u53D1gps"})]})]})})})}}}]);