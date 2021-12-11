(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{27:function(e,t,n){e.exports={form:"ContactForm_form__37oat"}},29:function(e,t,n){e.exports={contact_list:"ContactList_contact_list__3MGUI"}},30:function(e,t,n){e.exports={item:"ContactListItem_item__1jZDS"}},31:function(e,t,n){e.exports={label:"Filter_label__1HEph"}},39:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=(n(39),n(2)),s=n(23),l=n(8),u=n(9),d=n(11),h=n(10),b=n(14),m=n.n(b),j=(n(48),n(49),n(7)),f=n(57),p=n(28),O=n(27),v=n.n(O),C=n(1),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameId=m.a.generate(),e.numberId=m.a.generate(),e.handleInputChange=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(j.a)({},r,a))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(C.jsxs)(f.a,{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(C.jsxs)(f.a.Label,{htmlFor:this.nameId,children:["Name",Object(C.jsx)(f.a.Control,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:this.handleInputChange,id:this.nameId})]}),Object(C.jsxs)(f.a.Label,{htmlFor:this.numberId,children:["Number",Object(C.jsx)(f.a.Control,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:n,onChange:this.handleInputChange,id:this.numberId})]}),Object(C.jsx)(p.a,{variant:"outline-dark",type:"sumbit",children:"Add contact"})]})}}]),n}(a.Component),x=g,y=n(6),k=n.n(y),I=n(29),_=n.n(I),A=n(30),S=n.n(A),F=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.contact,n=e.onDelete;return Object(C.jsxs)("li",{className:S.a.item,children:[Object(C.jsx)("p",{children:t.name}),Object(C.jsx)("a",{href:"tel:"+t.number,children:t.number}),Object(C.jsx)(p.a,{variant:"outline-dark",type:"button",onClick:function(){n(t.id)},children:"Delete"})]},t.id)}}]),n}(a.Component),w=F,N=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:k.a.arrayOf(k.a.any.isRequired).isRequired},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.contacts,n=e.onDelete;return Object(C.jsx)("ul",{className:_.a.contact_list,children:t.map((function(e){return Object(C.jsx)(w,{contact:e,onDelete:n},e.id)}))})}}]),n}(a.Component),q=N,D=n(31),L=n.n(D),z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleFilterChange=function(t){var n=t.target.value;e.props.onChange(n)},e.filterId=m.a.generate(),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.title;return Object(C.jsxs)("label",{className:L.a.label,htmlFor:this.filterId,children:[Object(C.jsx)("span",{children:n}),Object(C.jsx)(f.a.Control,{type:"text",name:"filter",required:!0,value:t,onChange:this.handleFilterChange,placeholder:"Search...",id:this.filterId})]})}}]),n}(a.Component),Z=z,E=n(56),J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){-1===e.checkUniqueName(t.name)?e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[Object(o.a)({id:m.a.generate()},t)])}})):alert("".concat(t.name," is already in contacts"))},e.deleteContact=function(t){e.setState((function(e){return{contacts:Object(s.a)(e.contacts).filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.toLowerCase()})},e.checkUniqueName=function(t){return e.state.contacts.findIndex((function(e){return e.name===t}))},e.getFilteredContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getFilteredContacts();return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(x,{onSubmit:this.addContact}),Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(Z,{title:"Find contacts by name",filter:e,onChange:this.changeFilter}),t.length?Object(C.jsx)(q,{contacts:t,onDelete:this.deleteContact}):Object(C.jsx)(E.a,{className:"Alert",variant:"dark",children:"Nothing found"})]})}}]),n}(a.Component);i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(J,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.c5e9476c.chunk.js.map