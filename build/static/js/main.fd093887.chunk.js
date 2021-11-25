(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={item:"OneContact_item__2-SL0",text:"OneContact_text__qh9M9",btn:"OneContact_btn__1qcZc"}},13:function(e,t,n){e.exports={filterInput:"Filter_filterInput__36vzA",filterLabel:"Filter_filterLabel__2YQdn"}},17:function(e,t,n){e.exports={container:"Container_container__ECQzP"}},18:function(e,t,n){e.exports={list:"ContactList_list__1sC6J"}},27:function(e,t,n){},28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),i=n.n(r),o=(n(27),n(28),n(3)),l=n(17),s=n.n(l),b=n(1);var u=function(e){var t=e.children;return Object(b.jsx)("div",{className:s.a.container,children:t})},d=n(15),j=n(6),m=n.n(j),f=n(39),O=n(4),h={addContact:Object(O.b)("contact/add",(function(e,t){return{payload:{id:Object(f.a)(),name:e,number:t}}})),deleteContact:Object(O.b)("contact/delete"),changeFilter:Object(O.b)("contact/change_filter")},p=n(10),x=n.n(p),_=function(e){var t=e.name,n=e.number,a=e.onDelete;return Object(b.jsxs)("div",{className:x.a.item,children:[Object(b.jsxs)("p",{className:x.a.text,children:[t,":",n]}),Object(b.jsx)("button",{className:x.a.btn,type:"button",onClick:a,children:"Delete"})]})},C=function(e){return e.contacts},v=function(e){return e.filter},g=function(e){var t=C(e),n=v(e);return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))};var N=function(){var e=Object(o.c)(C),t=Object(o.b)(),n=Object(a.useState)(""),c=Object(d.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(""),s=Object(d.a)(l,2),u=s[0],j=s[1],f=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":j(a);break;default:return}};return Object(b.jsxs)("form",{className:m.a.form,onSubmit:function(n){if(n.preventDefault(),e.find((function(e){return e.name.toLowerCase()===r.toLocaleLowerCase()})))return alert("".concat(r," is already exist"));t(h.addContact(r,u)),i(""),j("")},children:[Object(b.jsxs)("label",{className:m.a.label,children:["Name",Object(b.jsx)("input",{className:m.a.input,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:f,required:!0})]}),Object(b.jsxs)("label",{className:m.a.label,children:["Number",Object(b.jsx)("input",{className:m.a.input,type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:f,required:!0})]}),Object(b.jsx)("button",{className:m.a.btn,type:"submit",children:"Add contact"})]})},y=n(18),k=n.n(y),w=function(){var e=Object(o.c)(g),t=Object(o.b)();return Object(b.jsx)("ul",{className:k.a.list,children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(b.jsx)("li",{children:Object(b.jsx)(_,{name:a,number:c,onDelete:function(){return function(e){return t(h.deleteContact(e))}(n)}})},n)}))})},A=n(13),L=n.n(A),F=function(){var e=Object(o.c)(v),t=Object(o.b)();return Object(b.jsxs)("label",{className:L.a.filterLabel,children:["Find contacts by name",Object(b.jsx)("input",{className:L.a.filterInput,type:"text",value:e,onChange:function(e){return t(h.changeFilter(e.target.value))}})]})};function z(){return Object(b.jsxs)(u,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(N,{}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(F,{}),Object(b.jsx)(w,{})]})}var S,J=n(2),Z=n(5),q=n(19),D=n.n(q),I=n(14),E=n(21),M=Object(O.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(S={},Object(I.a)(S,h.addContact,(function(e,t){var n=t.payload;return[].concat(Object(E.a)(e),[n])})),Object(I.a)(S,h.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),S)),B=Object(O.c)("",{"contact/change_filter":function(e,t){return t.payload}}),H=Object(J.b)({contacts:M,filter:B}),P={key:"contacts",storage:D.a,blacklist:["filter"]},Q=Object(Z.g)(P,H),R=Object(O.a)({reducer:Q,middleware:function(e){return e({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})}}),G=Object(Z.h)(R),K=n(20);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(K.a,{loading:null,persistor:G,children:Object(b.jsx)(o.a,{store:R,children:Object(b.jsx)(z,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={input:"ContactForm_input__RJbXp",label:"ContactForm_label__iANHG",btn:"ContactForm_btn__2ljZi"}}},[[38,1,2]]]);
//# sourceMappingURL=main.fd093887.chunk.js.map