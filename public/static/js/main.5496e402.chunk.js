(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,a){},36:function(e,t,a){e.exports=a(82)},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),l=a.n(r),s=(a(41),a(1)),i=a(3),o=a(5),u=a(2),m=a.n(u),p=a(8),d=(a(43),a(44),a(45),function(e){return c.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},c.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),E=(a(46),function(e){return c.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),v=function(e){return c.a.createElement("li",{className:"user-item"},c.a.createElement(E,{className:"user-item__content"},c.a.createElement(o.b,{to:"/".concat(e.id,"/places")},c.a.createElement("div",{className:"user-item__image"},c.a.createElement(d,{image:"".concat("https://yourvisitedplaces.herokuapp.com","/").concat(e.image),alt:e.name})),c.a.createElement("div",{className:"user-item__info"},c.a.createElement("h2",{style:{textTransform:"capitalize"}},e.name),c.a.createElement("h3",null,e.placesCount.length,1===e.placesCount.length?"  place":"  places")))))},f=function(e){return 0===e.items.length?c.a.createElement(E,null,c.a.createElement("h2",{className:"center"},"No users found")):c.a.createElement("ul",{className:"users-list"},e.items.map((function(e,t){return c.a.createElement(v,{key:e._id,id:e._id,name:e.name,image:e.image,placesCount:e.places})})))},b=a(7),h=a.n(b),g=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),u=o[0],d=o[1],E=Object(n.useState)(),v=Object(s.a)(E,2),b=v[0],g=v[1];return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,h()({url:"".concat("https://yourvisitedplaces.herokuapp.com/api","/users/")});case 4:"success"===(t=e.sent).data.status&&(l(t.data.users),d(!1)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),d(!1),g(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement(c.a.Fragment,null,!u&&b&&c.a.createElement("div",{className:"center"},c.a.createElement("h2",null,b)),!u&&r&&c.a.createElement(f,{items:r}))},O=(a(31),a(9)),j=(a(69),a(33)),y=function(e){return{type:"MINLENGTH",val:e}},k=function(e,t){var a,n=!0,c=Object(j.a)(t);try{for(c.s();!(a=c.n()).done;){var r=a.value;"REQUIRE"===r.type&&(n=n&&e.trim().length>0),"MINLENGTH"===r.type&&(n=n&&e.trim().length>=r.val),"MAXLENGTH"===r.type&&(n=n&&e.trim().length<=r.val),"MIN"===r.type&&(n=n&&+e>=r.val),"MAX"===r.type&&(n=n&&+e<=r.val),"EMAIL"===r.type&&(n=n&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){c.e(l)}finally{c.f()}return n},I=function(e,t){switch(t.type){case"CHANGE":return Object(O.a)(Object(O.a)({},e),{},{value:t.val,isValid:k(t.val,t.validators)});case"TOUCH":return Object(O.a)(Object(O.a)({},e),{},{isTouched:!0});default:return e}},x=function(e){var t=Object(n.useReducer)(I,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(s.a)(t,2),r=a[0],l=a[1],i=e.id,o=e.onInput,u=r.value,m=r.isValid;Object(n.useEffect)((function(){e.onInput(i,u,m)}),[i,o,u,m]);var p=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},d=function(){l({type:"TOUCH"})},E="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,onChange:p,onBlur:d,placeholder:e.placeholder,value:r.value}):c.a.createElement("textarea",{id:e.id,value:r.value,rows:e.rows||3,onChange:p,onBlur:d});return c.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),E,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText))},N=(a(70),function(e){return e.href?c.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?c.a.createElement(o.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):c.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}),w=a(83),C=(a(71),function(e){return l.a.createPortal(c.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),S=(a(72),function(e){var t=c.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},c.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},c.a.createElement("h2",null,e.header)),c.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),c.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return l.a.createPortal(t,document.getElementById("modal-hook"))}),_=function(e){return c.a.createElement(c.a.Fragment,null,e.show&&c.a.createElement(C,{onClick:e.onCancel}),c.a.createElement(w.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},c.a.createElement(S,e)))},T=function(e){return c.a.createElement(_,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:c.a.createElement(N,{onClick:e.onClear},"Okay")},c.a.createElement("p",null,e.error))},V=(a(73),function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(),o=Object(s.a)(i,2),u=o[0],m=o[1],p=Object(n.useState)(!1),d=Object(s.a)(p,2),E=d[0],v=d[1],f=Object(n.useRef)();Object(n.useEffect)((function(){if(r){var e=new FileReader;e.onload=function(){m(e.result)},e.readAsDataURL(r)}}),[r]);return c.a.createElement("div",{className:"form-control"},c.a.createElement("input",{ref:f,id:e.id,style:{display:"none"},accept:".jpeg,.png,.jpg",type:"file",onChange:function(t){var a,n;t.target.files&&1===t.target.files.length?(a=t.target.files[0],l(a),v(!0),n=!0):(v(!1),n=!1),e.onInput(e.id,a,n)}}),c.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},c.a.createElement("div",{className:"image-upload__preview"},u&&c.a.createElement("img",{src:u,alt:"Preview"}),!u&&c.a.createElement("p",null,"please pick an image")),c.a.createElement(N,{type:"button",onClick:function(){f.current.click()}},"Pick an image")),!E&&c.a.createElement("p",null,e.errorText))}),U=Object(n.createContext)({currentUserId:null,isLoggedIn:!1,login:function(){},logout:function(){}}),A=a(16),P=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(O.a)(Object(O.a)({},e),{},{inputs:Object(O.a)(Object(O.a)({},e.inputs),{},Object(A.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},L=function(e,t){var a=Object(n.useReducer)(P,{inputs:e,isValid:t}),c=Object(s.a)(a,2),r=c[0],l=c[1];return[r,Object(n.useCallback)((function(e,t,a){l({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(n.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]},D=function(e){var t=Object(n.useContext)(U),a=Object(i.g)(),r=Object(n.useState)(),l=Object(s.a)(r,2),o=l[0],u=l[1],d=L({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),E=Object(s.a)(d,3),v=E[0],f=E[1],b=(E[2],function(){var e=Object(p.a)(m.a.mark((function e(n){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,(c=new FormData).append("title",v.inputs.title.value),c.append("description",v.inputs.description.value),c.append("address",v.inputs.address.value),c.append("creator",t.currentUserId),c.append("image",v.inputs.image.value),e.next=10,h()({url:"".concat("https://yourvisitedplaces.herokuapp.com/api","/places/new"),method:"POST",data:c,headers:{authorization:"Bearer "+localStorage.getItem("jwt")}});case 10:e.sent.data.status,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),u(e.t0.response.data.message);case 17:a.push("/".concat(t.currentUserId,"/places"));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}());return c.a.createElement(c.a.Fragment,null,c.a.createElement(T,{error:o,onClear:function(){u(null)}}),c.a.createElement("form",{className:"place-form",onSubmit:b},c.a.createElement(x,{id:"title",element:"input",type:"text",label:"Title",errorText:" please enter a valid Title",validators:[{type:"REQUIRE"}],onInput:f}),c.a.createElement(V,{id:"image",onInput:f,errorText:"please provide an image"}),c.a.createElement(x,{id:"description",element:"textarea",label:"description",errorText:" please enter a valid description at least 5 character",validators:[{type:"REQUIRE"},y],onInput:f}),c.a.createElement(x,{id:"address",element:"input",label:"Address",errorText:" please enter an address ",validators:[{type:"REQUIRE"}],onInput:f}),c.a.createElement(N,{type:"submit",disabled:!v.isValid},"Add Place")))},R=(a(74),a(75),function(e){return c.a.createElement("header",{className:"main-header"},e.children)}),F=(a(76),function(e){var t=Object(i.g)(),a=Object(n.useContext)(U),r=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h()({url:"".concat("https://yourvisitedplaces.herokuapp.com/api","/users/logout"),method:"GET"});case 3:"success"===e.sent.data.status&&(a.logout(),t.push("/")),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/",exact:!0},"ALL USERS")),a.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(o.c,{to:"/".concat(a.currentUserId,"/places")},"MY PLACES")),a.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(o.c,{to:"/places/new"},"ADD PLACE")),!a.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(o.c,{to:"/auth"}," AUTHENTICATE")),a.isLoggedIn&&c.a.createElement("button",{onClick:r},"logout"))}),H=(a(77),function(e){var t=c.a.createElement(w.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return l.a.createPortal(t,document.getElementById("drawer-hook"))}),B=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],l=a[1],i=function(){l(!1)};return c.a.createElement(c.a.Fragment,null,r&&c.a.createElement(C,{onClick:i}),c.a.createElement(H,{show:r,onClick:i},c.a.createElement("nav",{className:"main-navigation__drawer-nav"},c.a.createElement(F,null))),c.a.createElement(R,null,c.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){l(!0)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("h1",{className:"main-navigation__title"},c.a.createElement(o.b,{to:"/"},"Your Visited Places")),c.a.createElement("nav",{className:"main-navigation__header-nav"},c.a.createElement(F,null))))},M=(a(78),a(79),function(e){var t=Object(i.g)(),a=Object(n.useContext)(U),r=Object(n.useState)(!1),l=Object(s.a)(r,2),o=l[0],u=l[1],d=Object(n.useState)(),v=Object(s.a)(d,2),f=v[0],b=v[1],g=function(){u(!1)},O=function(){var n=Object(p.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!1),n.prev=1,n.next=4,h()({url:"".concat("https://yourvisitedplaces.herokuapp.com/api","/places/").concat(e.id),method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("jwt")}});case 4:"success"===n.sent.data.status&&(console.log("deleted success"),t.push("/".concat(a.currentUserId,"/places")),e.onDelete(e.id)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();return f?c.a.createElement(T,{error:f,onClear:function(){b(!1)}}):c.a.createElement(c.a.Fragment,null,c.a.createElement(_,{show:o,onCancel:g,header:"Are you sure",footerClass:"place-item__modal-actios",footer:c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{inverse:!0,onClick:g},"Cancel"),c.a.createElement(N,{danger:!0,onClick:O},"Delete"))},c.a.createElement("p",null,"Do you want to proceed and delete this place ?please note that it can't be undone there after")),c.a.createElement("li",{className:"place-item"},c.a.createElement(E,{className:"place-item__content"},c.a.createElement("div",{className:"place-item__image"},c.a.createElement("img",{src:"".concat("https://yourvisitedplaces.herokuapp.com","/").concat(e.image),alt:e.title})),c.a.createElement("div",{className:"place-item__info"},c.a.createElement("h2",null,e.title),c.a.createElement("h3",null,e.address),c.a.createElement("p",null,e.description)),c.a.createElement("div",{className:"place-item__actions"},a.isLoggedIn&&c.a.createElement(N,{to:"/places/".concat(e.id)}," Edit "),a.isLoggedIn&&c.a.createElement(N,{danger:!0,onClick:function(){u(!0)}},"Delete")))))}),G=function(e){return 0===e.items.length?c.a.createElement("div",{className:"place-list center"},c.a.createElement(E,null,c.a.createElement("h2",null,"No places found .Maybe create One ?"),c.a.createElement(N,{to:"/places/new"},"Share Place"))):c.a.createElement("ul",{className:"place-list"},e.items.map((function(t,a){return c.a.createElement(M,{key:t._id,id:t._id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.loaction,onDelete:e.deletePlace})})))},z=(a(80),function(e){return c.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},c.a.createElement("div",{className:"lds-dual-ring"}))}),Q=function(e){var t=Object(n.useContext)(U),a=Object(n.useState)(),r=Object(s.a)(a,2),l=r[0],o=r[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),E=d[0],v=d[1],f=Object(n.useState)(),b=Object(s.a)(f,2),g=b[0],O=b[1],j=Object(i.h)();Object(n.useEffect)((function(){v(!0),function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h()({url:t.currentUserId?"".concat("https://yourvisitedplaces.herokuapp.com/api","/places/user/").concat(t.currentUserId):"".concat("https://yourvisitedplaces.herokuapp.com/api","/places/user/").concat(j.userId)});case 3:"success"===(a=e.sent).data.status&&(o(a.data.places),v(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),v(!1),O(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]);return c.a.createElement(c.a.Fragment,null,!E&&!l&&c.a.createElement("div",{className:"center"},c.a.createElement("h2",null,g)),E&&!l&&c.a.createElement(z,null),!E&&l&&c.a.createElement(G,{items:l,deletePlace:function(e){o((function(t){return t.filter((function(t){return t._id!==e}))}))}}))},J=function(e){var t=Object(n.useContext)(U),a=Object(i.g)(),r=Object(n.useState)(),l=Object(s.a)(r,2),o=(l[0],l[1],Object(i.h)().placeId),u=Object(n.useState)(),d=Object(s.a)(u,2),E=d[0],v=d[1],f=Object(n.useState)(!1),b=Object(s.a)(f,2),g=b[0],O=b[1],j=Object(n.useState)(),k=Object(s.a)(j,2),I=k[0],w=k[1],C=L({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),S=Object(s.a)(C,3),_=S[0],V=S[1],A=S[2];Object(n.useEffect)((function(){O(!0),function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h()({url:"".concat("https://yourvisitedplaces.herokuapp.com/api","/places/").concat(o)});case 3:"success"===(t=e.sent).data.status&&(v(t.data.place),console.log(t.data.place),A({title:{value:t.data.place.title,isValid:!0},description:{value:t.data.place.description,isValid:!0}},!0),O(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),w(e.t0.response.data.message),O(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var P=function(){var e=Object(p.a)(m.a.mark((function e(n){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),O(!0),e.prev=2,e.next=5,h()({url:"".concat("https://yourvisitedplaces.herokuapp.com/api","/places/").concat(o),method:"PATCH",headers:{"Content-Type":"application/json",authorization:"Bearer "+localStorage.getItem("jwt")},data:{title:_.inputs.title.value,description:_.inputs.description.value}});case 5:(c=e.sent).data.status&&(console.log(c.data.message),a.push("/".concat(t.currentUserId,"/places")),O(!1)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),w(e.t0.response.data.message),O(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return g?c.a.createElement("div",{className:"center"},c.a.createElement(z,null)):E||I?c.a.createElement(c.a.Fragment,null,c.a.createElement(T,{error:I,onClear:function(){w(null)}}),c.a.createElement("form",{className:"place-form",onSubmit:P},c.a.createElement(x,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"please enter a valid Title",onInput:V,initialValue:E.title,initialValid:!0}),c.a.createElement(x,{id:"description",element:"textarea",label:"Description",validators:[y(5)],errorText:"please enter a valid Description min 5 characters",onInput:V,initialValue:E.description,initialValid:!0}),c.a.createElement(N,{type:"submit",disabled:!_.isValid},"Update Place"))):c.a.createElement("div",{className:"center"},c.a.createElement("h2",null,"could not found this place"))},X=(a(81),function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(i.g)(),u=Object(n.useContext)(U),d=Object(n.useState)(!0),v=Object(s.a)(d,2),f=v[0],b=v[1],g=L({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),j=Object(s.a)(g,3),k=j[0],I=j[1],w=j[2],C=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),f){e.next=20;break}return e.prev=2,(a=new FormData).append("name",k.inputs.name.value),a.append("email",k.inputs.email.value),a.append("password",k.inputs.password.value),a.append("image",k.inputs.image.value),e.next=10,h()({method:"POST",url:"".concat("https://yourvisitedplaces.herokuapp.com/api","/users/signup"),data:a});case 10:"success"===(n=e.sent).data.status&&(u.login(n.data.token,n.data.user._id),o.push("/")),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0.response.data.message),l(e.t0.response.data.message);case 18:e.next=31;break;case 20:return e.prev=20,e.next=23,h()({url:"".concat("https://yourvisitedplaces.herokuapp.com/api","/users/login"),method:"POST",data:{email:k.inputs.email.value,password:k.inputs.password.value}});case 23:"success"===(c=e.sent).data.status&&(u.login(c.data.token,c.data.userId),console.log(c.data.token),o.push("/")),e.next=31;break;case 27:e.prev=27,e.t1=e.catch(20),console.log(e.t1.response.data.message),l(e.t1.response.data.message);case 31:case"end":return e.stop()}}),e,null,[[2,14],[20,27]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(T,{error:r,onClear:function(){l(null)}}),c.a.createElement(E,{className:"authentication"},c.a.createElement("h2",null,f?"Login":"Signup"),c.a.createElement("hr",null),c.a.createElement("form",{className:"place-form",onSubmit:C},!f&&c.a.createElement(x,{id:"name",element:"input",type:"text",label:"Name",onInput:I,validators:[{type:"REQUIRE"}],errorText:"please enter your name"}),!f&&c.a.createElement(V,{id:"image",center:!0,onInput:I,errorText:"please provide an Image"}),c.a.createElement(x,{element:"input",id:"email",type:"email",label:"E-email",validators:[{type:"EMAIL"}],errorText:"please enter a valid Email",onInput:I}),c.a.createElement(x,{element:"input",id:"password",type:"password",label:"Password",validators:[y(5)],errorText:"please enter a valid Password at least 5 charcters",onInput:I}),c.a.createElement(N,{type:"submit",disabled:!k.isValid},f?"Login":"Signup")),c.a.createElement(N,{inverse:!0,onClick:function(){f?w(Object(O.a)(Object(O.a)({},k.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):w(Object(O.a)(Object(O.a)({},k.inputs),{},{name:void 0}),k.inputs.email.isValid&&k.inputs.password.isValid),b((function(e){return!e}))}},"switch to ",f?"signup":"login")))});var Y=function(){var e,t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],l=a[1],u=Object(n.useState)(null),m=Object(s.a)(u,2),p=m[0],d=m[1],E=Object(n.useState)(),v=Object(s.a)(E,2),f=v[0],b=v[1],h=Object(n.useCallback)((function(e,t){localStorage.setItem("jwt",e),localStorage.setItem("currentUser",t),d(localStorage.getItem("jwt")),b(t),l(!0)}),[]),O=Object(n.useCallback)((function(){l(!1),localStorage.clear(),b(null),d(null)}),[]);return Object(n.useEffect)((function(){var e=localStorage.getItem("jwt"),t=localStorage.getItem("currentUser");e&&h(e,t)}),[h]),e=p?c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(g,null)),c.a.createElement(i.b,{path:"/places/new",exact:!0},c.a.createElement(D,null)),c.a.createElement(i.b,{path:"/places/:placeId",exact:!0},c.a.createElement(J,null)),c.a.createElement(i.b,{path:"/:userId/places",exact:!0},c.a.createElement(Q,null)),c.a.createElement(i.a,{to:"/"})):c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(g,null)),c.a.createElement(i.b,{path:"/:userId/places",exact:!0},c.a.createElement(Q,null)),c.a.createElement(i.b,{path:"/auth",exact:!0},c.a.createElement(X,null)),c.a.createElement(i.a,{to:"auth"})),c.a.createElement(U.Provider,{value:{currentUserId:f,isLoggedIn:r,login:h,logout:O}},c.a.createElement(o.a,null,c.a.createElement(B,null),c.a.createElement("main",null,e)))};l.a.render(c.a.createElement(Y,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.5496e402.chunk.js.map