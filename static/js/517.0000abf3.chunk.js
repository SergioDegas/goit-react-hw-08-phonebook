"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[517],{2517:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,o,c,i,u,s,l=t(9434),d=t(168),m=t(7691),f=m.ZP.p(r||(r=(0,d.Z)(["\n  margin-right: ",";\n  margin-left: auto;\n"])),(function(n){var e=n.theme;return"".concat(e.spacing(15))})),h=(m.ZP.button(a||(a=(0,d.Z)(["\n  outline: none;\n  border: none;\n  width: ",";\n  color: #fff;\n  border-radius: ",";\n\n  background-color: ",";\n  cursor: pointer;\n"])),(function(n){var e=n.theme;return"".concat(e.spacing(20))}),(function(n){var e=n.theme;return"".concat(e.spacing(3))}),(function(n){var e=n.theme;return"".concat(e.colors.blue)})),t(5162)),p=t(5589),g=t(7247),v=t(184),x=function(n){var e=n.name,t=n.number,r=n.id,a=(0,l.I0)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:e}),(0,v.jsx)(f,{children:t}),(0,v.jsx)(p.Z,{variant:"outlined",startIcon:(0,v.jsx)(g.Z,{}),type:"button",onClick:function(){return a((0,h.Dm)(r))},children:"Delete"})]})},b=t(6916),j=function(n){return n.filter},Z=function(n){return n.contacts.items},w=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},k=(0,b.P1)([Z,j],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),C=m.ZP.li(o||(o=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n\n  margin-bottom: ",";\n  width: ",";\n"])),(function(n){var e=n.theme;return"".concat(e.spacing(3))}),(function(n){var e=n.theme;return"".concat(e.spacing(100))})),P=function(){var n=(0,l.v9)(Z),e=(0,l.v9)(k);return(0,v.jsx)("ul",{children:n.length>0&&e.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,v.jsx)(C,{children:(0,v.jsx)(x,{name:t,id:e,number:r})},e)}))})},z=t(6434),A=m.ZP.form(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: ",";\n  width: 400px;\n"])),(function(n){var e=n.theme;return"".concat(e.spacing(6))})),F=m.ZP.label(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  font-size: 26px;\n"]))),I=m.ZP.input(u||(u=(0,d.Z)(["\n  padding: ",";\n  border: 1px solid #2a2a2a;\n  border-radius: ",";\n  font-family: sans-serif;\n  font-size: ",";\n  outline: none;\n  margin-top: ",";\n  ::placeholder {\n    color: ",";\n    font-size: ",";\n  }\n"])),(function(n){var e=n.theme;return"".concat(e.spacing(2))}),(function(n){var e=n.theme;return"".concat(e.spacing(3))}),(function(n){var e=n.theme;return"".concat(e.spacing(4))}),(function(n){var e=n.theme;return"".concat(e.spacing(2))}),(function(n){var e=n.theme;return"".concat(e.colors.blue)}),(function(n){var e=n.theme;return"".concat(e.spacing(4))})),S=(m.ZP.button(s||(s=(0,d.Z)(["\n  outline: none;\n  border: none;\n  width: ",";\n  color: #fff;\n  border-radius: ",";\n  margin-top: ",";\n  margin-right: auto;\n  margin-left: auto;\n  background-color: ",";\n  cursor: pointer;\n"])),(function(n){var e=n.theme;return"".concat(e.spacing(33))}),(function(n){var e=n.theme;return"".concat(e.spacing(3))}),(function(n){var e=n.theme;return"".concat(e.spacing(3))}),(function(n){var e=n.theme;return"".concat(e.colors.blue)})),function(){var n=(0,l.v9)(j),e=(0,l.I0)();return(0,v.jsx)(A,{children:(0,v.jsx)(F,{children:(0,v.jsx)(I,{placeholder:" Contact Filter",type:"text",value:n,onChange:function(n){e((0,z.U)(n.target.value))}})})})}),L=t(9439),N=t(2791),_=t(5218),D=t(8434),q=function(){var n=(0,N.useState)(""),e=(0,L.Z)(n,2),t=e[0],r=e[1],a=(0,N.useState)(""),o=(0,L.Z)(a,2),c=o[0],i=o[1],u=(0,l.I0)(),s=(0,l.v9)(Z),d=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":i(a);break;default:return}};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(A,{onSubmit:function(n){if(n.preventDefault(),s.find((function(n){return n.name===t})))return r(""),_.ZP.error("The contact with this name ".concat(t," is already in the phone book"));u((0,h.pK)({name:t,number:c})),r(""),i("")},children:[(0,v.jsx)(F,{children:(0,v.jsx)(I,{value:t,type:"text",name:"name",placeholder:" Name",onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,v.jsx)(F,{children:(0,v.jsx)(I,{value:c,onChange:d,type:"tel",placeholder:" Number",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,v.jsx)(p.Z,{variant:"contained",startIcon:(0,v.jsx)(D.Z,{}),type:"submit",children:"Add contacts"})]}),(0,v.jsx)(_.x7,{})]})},E=t(5243),J=function(){return(0,v.jsx)(E.iT,{height:80,width:80,color:"#b8c480",wrapperStyle:{position:"fixed",top:"50%",left:" 50%",transform:"translate(-50%, -50%)"},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#F4442E",strokeWidth:2,strokeWidthSecondary:0})},T=function(){var n=(0,l.v9)(w),e=(0,l.v9)(y),t=(0,l.I0)();return(0,N.useEffect)((function(){t((0,h.NJ)())}),[t]),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("main",{children:[(0,v.jsx)(q,{}),(0,v.jsx)(S,{}),n&&!e&&(0,v.jsx)(J,{}),e&&(0,v.jsx)("p",{children:e}),!n&&(0,v.jsx)(P,{})]})})}}}]);
//# sourceMappingURL=517.0000abf3.chunk.js.map