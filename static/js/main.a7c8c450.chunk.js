(this["webpackJsonpnordic-proj"]=this["webpackJsonpnordic-proj"]||[]).push([[0],{138:function(e,t,c){},139:function(e,t,c){},140:function(e,t,c){},190:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c(13),a=c.n(i),n=(c(138),c(8)),r=(c.p,c(139),c(224)),o=c(227),j=c(228),l=c(229),x=c(193),b=c(230),h=c(250),d=(c(140),{primary:"#F25835",secondary:"#F27C38",tertary:"#F25E5E"}),O=c(9),u=c(1),m=Object(r.a)((function(e){return{root:{width:"100%",textAlign:"end"},text:{position:"relative",right:"10px"}}})),p=function(e){var t=Object(s.useState)(e.item),c=Object(n.a)(t,2),i=c[0],a=(c[1],Object(s.useState)(!1)),r=Object(n.a)(a,2),o=r[0],j=r[1],l=Object(s.useContext)(Fe),x=(l.keyWord,l.setKeyWord,l.isSubmit,l.setIsSubmit,l.cart,l.badge,l.account,l.setAccount),b=Object(O.f)(),h=Object(s.useState)(""),p=Object(n.a)(h,2),g=p[0],f=p[1],y=Object(u.jsx)("div",{style:{backgroundColor:d.tertary,color:"white",height:"150px"},children:i.map((function(e,t){return Object(u.jsx)("div",{onClick:function(t){return function(e,t){"Logout"===t&&(x({isLogin:!1}),localStorage.clear(),window.location.reload());"Login/Logup"===t&&b.push("/login")}(0,e)},style:{position:"relative",top:"10px",textAlign:"center"},children:Object(u.jsx)("p",{children:e})},t)}))}),v=function(){j(!0!==o)};Object(s.useEffect)((function(){console.log(i),console.log(e.name),f(localStorage.getItem("email")),console.log(g)}),[]);var w=m();return Object(u.jsx)("div",{className:w.root,children:Object(u.jsxs)("div",{className:w.text,children:[Object(u.jsx)("p",{onClick:v,children:e.name}),o?y:null]})})},g=c(192),f=c(112),y=c.n(f),v=c(231),w=c(111),C=c.n(w),S=c(110),N=c.n(S),k=Object(r.a)((function(e){return{root:{position:"fixed",top:"0",width:"100%",zIndex:99,fontWeight:"bold",backgroundColor:"rgba(242, 94, 93, 0.3)"},container:{direction:"row"},head:{background:d.tertary,height:"auto"},leftside:{textAlign:"start"},rightside:{},searchIcon:{backgroundColor:d.tertary,"&:hover":{backgroundColor:d.primary}}}})),P=Object(g.a)((function(e){return{badge:{position:"relative",left:-10,top:25,border:"2px solid ".concat(d.primary),padding:"0 4px",backgroundColor:d.tertary}}}))(o.a),L=function(e){var t=k(),c=Object(j.a)("(max-width: 500px)"),i=Object(s.useState)(!1),a=Object(n.a)(i,2),r=a[0],o=a[1],d=Object(s.useState)(!1),m=Object(n.a)(d,2),g=m[0],f=m[1],w=Object(s.useContext)(Fe),S=w.keyWord,L=w.setKeyWord,A=w.isSubmit,D=w.setIsSubmit,I=(w.cart,w.badge),E=(w.account,w.setAccount,e.custom),R=E.isDisable,z=(E.setDisable,Object(O.f)()),q=function(){o(!1===r)},W=function(){f(!1===g)},B=function(e,t){"home"===t&&z.push("/"),"shop"===t&&z.push("/shop")};return Object(u.jsx)("div",{children:c?Object(u.jsxs)(l.a,{container:!0,className:t.root,children:[Object(u.jsx)(l.a,{className:t.head,item:!0,xs:12,children:Object(u.jsxs)(l.a,{container:!0,spacing:0,children:[Object(u.jsx)(l.a,{item:!0,xs:6,children:Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{style:{position:"relative",right:"2px"},className:"fas fa-phone-square"})}),"+099 999 9999"]})}),Object(u.jsx)(l.a,{item:!0,xs:6,children:Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{style:{position:"relative",right:"2px"},className:"fas fa-envelope-square"})}),"umbreom@gmail.com"]})}),Object(u.jsxs)(l.a,{item:!0,xs:12,children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{style:{width:"30px",height:"30px"},className:"fab fa-facebook-square"})}),Object(u.jsx)("span",{children:Object(u.jsx)("i",{style:{width:"30px",height:"30px"},className:"fab fa-twitter-square"})}),Object(u.jsx)("span",{children:Object(u.jsx)("i",{style:{width:"30px",height:"30px"},className:"fab fa-instagram-square"})}),Object(u.jsx)("span",{children:Object(u.jsx)("i",{style:{width:"30px",height:"30px"},className:"fab fa-google-plus-square"})})]})]})}),Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsxs)(l.a,{item:!0,xs:2,children:[Object(u.jsx)(x.a,{children:Object(u.jsx)(y.a,{onClick:q})}),Object(u.jsx)(h.a,{anchor:"left",open:r,onClose:q,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)("p",{children:"Home"})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)("p",{children:"Shop"})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)("p",{children:"About us"})})]})})]}),Object(u.jsx)(l.a,{item:!0,xs:4}),Object(u.jsx)(l.a,{item:!0,xs:3}),Object(u.jsxs)(l.a,{item:!0,xs:3,children:[Object(u.jsx)(x.a,{style:{position:"relative",left:"25px"},children:Object(u.jsx)(v.a,{onClick:W})}),Object(u.jsx)(h.a,{anchor:"right",open:g,onClose:W,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)("p",{children:"Home"})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)("p",{children:"Shop"})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)("p",{children:"About us"})})]})})]})]}),Object(u.jsx)(b.a,{style:{width:"90%",position:"relative",left:"50%",transform:"translateX(-50%)",zIndex:-1}})]}):Object(u.jsxs)(l.a,{className:t.root,container:!0,children:[Object(u.jsx)(l.a,{className:t.head,item:!0,xs:12,children:Object(u.jsxs)(l.a,{container:!0,spacing:0,children:[Object(u.jsx)(l.a,{item:!0,xs:1}),Object(u.jsx)(l.a,{className:t.leftside,item:!0,xs:!0,children:Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{style:{position:"relative",right:"2px"},className:"fas fa-phone-square"})}),"+099 999 9999"]})}),Object(u.jsx)(l.a,{className:t.leftside,item:!0,xs:!0,children:Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{style:{position:"relative",right:"2px"},className:"fas fa-envelope-square"})}),"umbreom@gmail.com"]})}),Object(u.jsx)(l.a,{item:!0,xs:5}),Object(u.jsxs)(l.a,{item:!0,xs:!0,children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{style:{width:"30px",height:"30px"},className:"fab fa-facebook-square"})}),Object(u.jsx)("span",{children:Object(u.jsx)("i",{style:{width:"30px",height:"30px"},className:"fab fa-twitter-square"})}),Object(u.jsx)("span",{children:Object(u.jsx)("i",{style:{width:"30px",height:"30px"},className:"fab fa-instagram-square"})}),Object(u.jsx)("span",{children:Object(u.jsx)("i",{style:{width:"30px",height:"30px"},className:"fab fa-google-plus-square"})})]}),Object(u.jsx)(l.a,{item:!0,xs:1})]})}),Object(u.jsx)(l.a,{style:{height:"50px"},item:!0,xs:12,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:1}),Object(u.jsx)(l.a,{item:!0,xs:1,children:Object(u.jsx)("p",{onClick:function(e){return B(0,"home")},className:t.leftside,children:"Home"})}),Object(u.jsx)(l.a,{item:!0,xs:1,children:Object(u.jsx)("p",{onClick:function(e){return B(0,"shop")},className:t.leftside,children:"Shop"})}),Object(u.jsx)(l.a,{item:!0,xs:1,children:Object(u.jsx)("p",{className:t.leftside,children:"About us"})}),Object(u.jsx)(l.a,{item:!0,xs:4,children:R?Object(u.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),D(!0),console.log(A)}(e)},children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:10,children:Object(u.jsx)("input",{value:S,onChange:function(e){return function(e){e.preventDefault(),L(e.target.value),D(!1),console.log(S)}(e)},style:{position:"relative",top:"25px",width:"370px"},className:"search",placeholder:"Search..."})}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(x.a,{type:"submit",style:{position:"relative",top:"6px"},className:t.searchIcon,children:Object(u.jsx)(N.a,{})})})]})}):null}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:!0,children:Object(u.jsx)("p",{onClick:function(e){z.push("/cart")},style:{position:"relative",left:"80px"},className:t.rightside,children:"Cart"})}),Object(u.jsx)(l.a,{item:!0,xs:!0,children:Object(u.jsx)(P,{badgeContent:I,children:Object(u.jsx)(C.a,{style:{position:"relative",top:"12px",left:"6px"}})})})]})}),Object(u.jsx)(l.a,{item:!0,xs:1,children:"abc@gmail.com"===localStorage.getItem("email")?Object(u.jsx)(p,{name:"Kyle",item:["Account","Wishlist","Checkout","Logout"]}):Object(u.jsx)(p,{name:"Account",item:["Account","Wishlist","Checkout","Login/Logup"]})}),Object(u.jsx)(l.a,{item:!0,xs:1})]})}),Object(u.jsx)(b.a,{style:{width:"90%",position:"relative",left:"50%",transform:"translateX(-50%)",zIndex:-1}})]})})},A=(c(147),c(113)),D="250",I="900",E=Object(r.a)((function(e){return{root:{position:"relative",width:"90%",height:"auto",left:"50%",transform:"translateX(-50%)"}}})),R=function(){var e=E();return Object(u.jsx)("div",{className:e.root,children:Object(u.jsxs)(A.Carousel,{infiniteLoop:!0,autoPlay:!0,interval:"3000",transitionTime:"1800",showThumbs:!1,showStatus:!1,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{alt:"image1",src:"https://picsum.photos/id/870/".concat(I,"/").concat(D)})}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{alt:"image2",src:"https://picsum.photos/id/880/".concat(I,"/").concat(D)})}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{alt:"image3",src:"https://picsum.photos/id/890/".concat(I,"/").concat(D)})})]})})},z=c(55),q=c(232),W=c(233),B=c(236),X=c(234),K=c(237),T=c(238),F=c(239),Y=(c(91),c(235)),H=Object(r.a)({root:{width:"300px"},media:{height:140},heart:{paddingLeft:"5px",fontSize:"20px",transition:2e3,"&:hover":{fontSize:"25px"}},heart2:{paddingLeft:"5px",fontSize:"25px"},button:{height:"40px"},card:{height:"320px"}}),M=function(){var e=H();return Object(s.useEffect)((function(){}),[]),Object(u.jsxs)(q.a,{className:e.card,children:[Object(u.jsx)(W.a,{style:{backgroundColor:"white"},children:Object(u.jsx)("p",{style:{width:"120px",height:"150px"},children:"Loading..."})}),Object(u.jsx)(W.a,{children:Object(u.jsx)(X.a,{children:Object(u.jsx)(Y.a,{style:{display:"block",marginLeft:"auto",marginRight:"auto"}})})}),Object(u.jsx)(B.a,{children:Object(u.jsxs)("div",{style:{position:"relative",bottom:0,left:"50%",transform:"translateX(-50%)"},children:[Object(u.jsx)(x.a,{className:e.button,size:"small",color:"primary",children:"Loading..."}),Object(u.jsx)(x.a,{className:e.button,size:"small",color:"primary",children:"Loading..."}),Object(u.jsx)(x.a,{className:e.button,size:"small",color:"primary",children:"Loading..."})]})})]})},$=Object(r.a)({root:{width:"300px"},media:{height:140},heart:{paddingLeft:"5px",fontSize:"20px",transition:2e3,"&:hover":{fontSize:"25px"}},heart2:{paddingLeft:"5px",fontSize:"25px"},button:{height:"40px"},card:{height:"320px"}}),G=function(e){var t=$(),c=e.prod,i=c.id,a=c.title,r=c.price,o=c.image,j=c.rating,b=e.loading,h=b.isLoading,d=b.setLoading,m=Object(s.useState)(!1),p=Object(n.a)(m,2),g=p[0],f=p[1],y=Object(s.useContext)(Fe),v=(y.keyWord,y.setKeyWord),w=y.setIsSubmit,C=y.cart,S=y.setCart,N=y.badge,k=y.setBadge,P=Object(O.f)();return Object(s.useEffect)((function(){setTimeout((function(){d(!1)}),1e3)}),[]),Object(u.jsx)(l.a,{className:t.root,item:!0,xs:e.grid,children:h?Object(u.jsx)(M,{}):Object(u.jsxs)(q.a,{className:t.card,children:[Object(u.jsx)(W.a,{style:{backgroundColor:"white"},children:Object(u.jsx)("img",{style:{width:"120px",height:"150px",display:"block",marginLeft:"auto",marginRight:"auto"},src:o})}),Object(u.jsx)(W.a,{children:Object(u.jsxs)(X.a,{children:[Object(u.jsx)(K.a,{align:"center",gutterBottom:!0,variant:"h5",component:"h2",children:"$ ".concat(r)}),Object(u.jsx)(K.a,{align:"center",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},variant:"body2",color:"textSecondary",component:"p",children:a})]})}),Object(u.jsx)(B.a,{children:Object(u.jsxs)("div",{style:{position:"relative",bottom:0,left:"50%",transform:"translateX(-50%)"},children:[Object(u.jsx)(x.a,{onClick:function(e){return function(e){k(N+1);var t={id:i,title:a,price:r,newPrice:r,image:o,rate:j.rate,quantity:j.count,count:1},c=C.findIndex((function(e){return e.id===t.id})),s=[];C!==[]&&(s=C),c>-1?(s[c].count+=1,s[c].newPrice=s[c].count*s[c].price,S(s)):S([].concat(Object(z.a)(C),[t])),console.log("tmp",s)}()},className:t.button,size:"small",color:"primary",children:"Add to cart"}),Object(u.jsx)(x.a,{onClick:function(e){P.push("/products/".concat(i)),v(""),w(!1),console.log(i)},className:t.button,size:"small",color:"primary",children:"Detail"}),Object(u.jsx)(x.a,{className:t.button,onClick:function(){f(!g)},size:"small",color:"primary",children:g?Object(u.jsx)(F.a,{className:t.heart2,style:{color:"red"}}):Object(u.jsx)(T.a,{className:t.heart,style:{color:"red"}})})]})})]})})},J=c(17),Q=c.n(J),U=c(73),V=c.n(U),Z=c(74),_=c.n(Z),ee=(c(191),c(240)),te=function(e){var t=e.set,c=t.setList,i=t.setProducts,a=t.setPage,r=t.setCategory,o=Object(s.useState)([]),j=Object(n.a)(o,2),l=j[0],b=j[1];Object(s.useEffect)((function(){Q.a.get("https://fakestoreapi.com/products/categories").then((function(e){b(e.data)}))}),[]);return Object(u.jsx)("div",{children:Object(u.jsx)(ee.a,{orientation:"vertical","aria-label":"vertical contained primary button group",variant:"text",children:l.map((function(e,t){return Object(u.jsx)(x.a,{onClick:function(t){return function(e,t){Q.a.get("https://fakestoreapi.com/products/category/".concat(t)).then((function(e){console.log(e.data);for(var s=e.data.length/6,n=[],o=0;o<s;o++)n.push(o);a(n),i(e.data),c(e.data),r(t)}))}(0,e)},children:e},t)}))})})},ce=c(251),se=Object(r.a)({root:{width:300,marginLeft:"auto",marginRight:"auto"},slider:{position:"relative",left:"50%",transform:"translateX(-50%)"}}),ie=function(e){var t=se(),c=Object(s.useState)([20,80]),i=Object(n.a)(c,2),a=i[0],r=i[1],o=e.set,j=o.setList,l=o.setProducts,x=o.setPage,b=o.setCurrentPage,h=e.data,O=(h.products,h.list,h.category);Object(s.useEffect)((function(){}),[]);return Object(u.jsx)("div",{className:t.root,children:Object(u.jsx)(ce.a,{value:a,min:0,max:1e3,onChange:function(e,t){r(t),console.log(O),null===O||void 0===O||""===O?Q.a.get("https://fakestoreapi.com/products").then((function(e){var t=e.data;t=t.filter((function(e,t){return e.price>a[0]&&e.price<a[1]}));for(var c=[],s=0;s<t.length/6;s++)c.push(s);x(c),b(c[0]),j(t),l(t)})):Q.a.get("https://fakestoreapi.com/products/category/".concat(O)).then((function(e){var t=e.data;t=t.filter((function(e,t){return e.price>a[0]&&e.price<a[1]}));for(var c=[],s=0;s<t.length/6;s++)c.push(s);x(c),b(c[0]+1),j(t),l(t)}))},valueLabelDisplay:"auto","aria-labelledby":"range-slider",style:{color:d.secondary}})})},ae=c.p+"static/media/sale.39804a77.png",ne=Object(r.a)((function(e){return{root:{},title:{color:d.primary}}})),re=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(!0),r=Object(n.a)(a,2),o=r[0],j=r[1],h=Object(s.useState)([]),d=Object(n.a)(h,2),O=d[0],m=d[1],p=Object(s.useState)([]),g=Object(n.a)(p,2),f=g[0],y=g[1],v=Object(s.useState)([]),w=Object(n.a)(v,2),C=w[0],S=w[1],N=Object(s.useState)(0),k=Object(n.a)(N,2),P=k[0],L=k[1],A=[],D=Object(s.useState)({numberPages:4,productsPerPage:6}),I=Object(n.a)(D,2),E=I[0],R=(I[1],ne()),z=Object(s.useContext)(Fe),q=z.keyWord,W=(z.setKeyWord,z.isSubmit);z.setIsSubmit;Object(s.useEffect)((function(){Q.a.get("https://fakestoreapi.com/products").then((function(e){if(W){m(O.filter((function(e){return-1!==JSON.stringify(e).toLowerCase().indexOf(q.toLowerCase())})));for(var t=[],c=0;c<O.length/E.productsPerPage;c++)t.push(c);S(t)}else{y(e.data);var s=e.data,i=[];i.length=E.numberPages;for(var a=0;a<E.numberPages;a++){var n=s.slice(a*E.productsPerPage,E.productsPerPage*(a+1));i[a]=n}m(i[0]),S(i)}})).catch((function(e){return console.log(e)}));for(var e=0;e<4;e++){var t=Object(u.jsx)(x.a,{children:e+1});A.push(t)}}),[W]);var B=function(e,t){e.preventDefault(),"+"===t&&(P<3?(m(C[P+1]),L(P+1)):L(E.numberPages-1)),"-"===t&&(P>0?(m(C[P-1]),L(P-1)):L(0))};return Object(u.jsx)("div",{children:Object(u.jsxs)(l.a,{container:!0,spacing:1,children:[Object(u.jsx)(l.a,{item:!0,xs:1}),Object(u.jsx)(l.a,{item:!0,xs:3,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(b.a,{style:{position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"3px"}})}),Object(u.jsx)(l.a,{style:{textAlign:"center"},item:!0,xs:8,children:Object(u.jsx)("h1",{className:R.title,children:"CATEGORIES"})}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(b.a,{style:{position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"3px"}})})]})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(te,{set:{setList:y,setProducts:m,setPage:S,setCategory:i}})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(b.a,{style:{position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"3px"}})}),Object(u.jsx)(l.a,{style:{textAlign:"center"},item:!0,xs:8,children:Object(u.jsx)("h1",{className:R.title,children:"PRICE RANGE"})}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(b.a,{style:{position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"3px"}})})]})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(ie,{data:{products:O,list:f,category:c},set:{setList:y,setProducts:m,setPage:S,setCurrentPage:L}})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:4,children:Object(u.jsx)(b.a,{style:{position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"3px"}})}),Object(u.jsx)(l.a,{style:{textAlign:"center"},item:!0,xs:4,children:Object(u.jsx)("h1",{className:R.title,children:"SALES"})}),Object(u.jsx)(l.a,{item:!0,xs:4,children:Object(u.jsx)(b.a,{style:{position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"3px"}})})]})}),Object(u.jsx)(l.a,{style:{height:"400px"},item:!0,xs:12,children:Object(u.jsx)("img",{id:"sale",src:ae})})]})}),Object(u.jsx)(l.a,{item:!0,xs:7,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:4,children:Object(u.jsx)(b.a,{style:{position:"relative",top:"50%",transform:"translateY(-50%)",height:"3px"}})}),Object(u.jsx)(l.a,{item:!0,xs:4,children:Object(u.jsx)("h1",{className:R.title,children:"PRODUCTIONS"})}),Object(u.jsx)(l.a,{item:!0,xs:4,children:Object(u.jsx)(b.a,{style:{position:"relative",top:"50%",transform:"translateY(-50%)",height:"3px"}})})]})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(l.a,{style:{height:"100%"},container:!0,spacing:2,children:O.map((function(e){return Object(u.jsx)(G,{grid:4,prod:e,loading:{isLoading:o,setLoading:j}},e.id)}))})}),Object(u.jsx)(l.a,{style:{height:"20px"},item:!0,xs:12}),Object(u.jsxs)(l.a,{item:!0,xs:12,children:[Object(u.jsx)(x.a,{children:1===C.length?Object(u.jsx)(V.a,{}):Object(u.jsx)(V.a,{onClick:function(e){return B(e,"-")}})}),C.map((function(e,t){return Object(u.jsx)(x.a,{onClick:function(e){return function(e,t){e.preventDefault();var c=[];c.length=E.numberPages;for(var s=0;s<E.numberPages;s++){var i=f.slice(s*E.productsPerPage,E.productsPerPage*(s+1));c[s]=i}m(c[t]),L(t),console.log(P)}(e,t)},value:t+1,children:t+1},t)})),Object(u.jsx)(x.a,{children:1===C.length?Object(u.jsx)(_.a,{}):Object(u.jsx)(_.a,{onClick:function(e){return B(e,"+")}})})]}),Object(u.jsx)(l.a,{style:{height:"20px"},item:!0,xs:12})]})})]})})},oe=c(63),je=c.n(oe),le=c.p+"static/media/512x512.3373974c.png",xe=Object(r.a)((function(){return{root:{},row1:{paddingBottom:"20px",paddingTop:"20px"}}})),be=function(){var e=xe();return Object(u.jsxs)(l.a,{style:{backgroundColor:"rgba(242, 94, 94, 0.4)"},container:!0,children:[Object(u.jsx)(l.a,{className:e.row1,item:!0,xs:12,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:3,children:Object(u.jsx)("img",{style:{width:"100px",display:"block",marginLeft:"auto",marginRight:"auto"},src:le})}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(je.a,{width:"200px",height:"100px",playing:!0,muted:!0,controls:!1,loop:!0,url:"https://www.youtube.com/watch?v=vYPYgHwf2KA"})}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(je.a,{width:"200px",height:"100px",playing:!0,muted:!0,controls:!1,loop:!0,url:"https://www.youtube.com/watch?v=vYPYgHwf2KA"})}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(je.a,{width:"200px",height:"100px",playing:!0,muted:!0,controls:!1,loop:!0,url:"https://www.youtube.com/watch?v=vYPYgHwf2KA"})}),Object(u.jsx)(l.a,{item:!0,xs:3,children:Object(u.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5552413090486!2d106.69889771474412!3d10.768719762280726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f7dbce91fbd%3A0x3954d44420742ac3!2sNordic%20Coder!5e0!3m2!1svi!2s!4v1633443716579!5m2!1svi!2s",style:{width:"200px",height:"100px",border:"0px"},allowFullScreen:!0,loading:"lazy"})})]})}),Object(u.jsx)(l.a,{style:{backgroundColor:"rgb(242, 94, 94)"},item:!0,xs:12,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{style:{textAlign:"center"},item:!0,xs:4,children:Object(u.jsx)("p",{children:"Copyright \xa9 2021 UMBREON Inc. All rights reserved."})}),Object(u.jsx)(l.a,{item:!0,xs:8,children:Object(u.jsxs)("p",{style:{position:"relative",right:"50px",textAlign:"right"},children:["Design by ",Object(u.jsx)("span",{children:Object(u.jsx)("a",{children:"Kyle"})})]})})]})})]})},he=Object(r.a)((function(e){return{root:{},main:{zIndex:98}}})),de=function(){var e=he(),t=Object(s.useContext)(Fe),c=(t.isDisbale,t.setDisable);return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:e.root,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(L,{custom:{isDisable:!0,setDisable:c}})}),Object(u.jsx)(l.a,{style:{height:"120px"},item:!0,xs:12}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(R,{})}),Object(u.jsx)(l.a,{style:{height:"20px"},item:!0,xs:12}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(re,{})}),Object(u.jsx)(l.a,{style:{height:"20px"},item:!0,xs:12}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(be,{})})]})})})},Oe=c(252),ue=c(75),me=c.n(ue),pe=function(e){var t=e.tmp,c=t.category,i=t.id,a=Object(s.useState)(!0),r=Object(n.a)(a,2),o=r[0],j=r[1],x=Object(s.useState)([]),h=Object(n.a)(x,2),O=h[0],m=h[1];Object(s.useEffect)((function(){Q.a.get("https://fakestoreapi.com/products/category/".concat(c)).then((function(e){var t=e.data.filter((function(e){return e.id!==i}));m(t),console.log(t)})).catch((function(e){return console.error("From Recommend Component: ",e)})),p()}),[i]);var p=function(){setTimeout((function(){j(!1)}),2e3)};return Object(u.jsx)("div",{children:Object(u.jsxs)(l.a,{style:{textAlign:"center"},container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:1}),Object(u.jsx)(l.a,{item:!0,xs:4,children:Object(u.jsx)(b.a,{style:{position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"3px"}})}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(K.a,{style:{fontWeight:"bold",color:d.primary},variant:"h5",children:"RECOMMEND"})}),Object(u.jsx)(l.a,{item:!0,xs:4,children:Object(u.jsx)(b.a,{style:{position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"3px"}})}),Object(u.jsx)(l.a,{item:!0,xs:1}),Object(u.jsx)(l.a,{style:{height:"20px"},item:!0,xs:12}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsxs)(l.a,{container:!0,spacing:1,children:[Object(u.jsx)(l.a,{item:!0,xs:1}),Object(u.jsx)(l.a,{item:!0,xs:10,children:Object(u.jsx)(me.a,{containerStyle:{height:"340px"},cols:3,rows:1,gap:10,loop:!0,autoplay:3e3,children:O.map((function(e,t){return Object(u.jsx)(me.a.Item,{children:Object(u.jsx)(l.a,{style:{position:"relative",top:"10px",height:"340px",width:"80%",left:"50%",transform:"translateX(-50%)"},container:!0,children:Object(u.jsx)(G,{grid:12,prod:e,loading:{isLoading:o,setLoading:j}},e.id)})})}))})}),Object(u.jsx)(l.a,{item:!0,xs:1})]})})]})})},ge=Object(r.a)((function(e){return{root:{},img:{width:"150px",position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},btnAmount:{backgroundColor:d.primary,color:"white","&:hover":{backgroundColor:d.tertary}},btn:{backgroundColor:d.tertary,color:"white","&:hover":{backgroundColor:d.secondary}}}})),fe=function(){var e=ge(),t=Object(O.g)().id,c=Object(s.useState)([]),i=Object(n.a)(c,2),a=i[0],r=i[1],o=Object(s.useState)(0),j=Object(n.a)(o,2),b=j[0],h=j[1],d=Object(s.useState)(1),m=Object(n.a)(d,2),p=m[0],g=m[1],f=Object(s.useState)(0),y=Object(n.a)(f,2),v=y[0],w=y[1],C=Object(s.useContext)(Fe),S=C.isDisable,N=C.setDisable,k=C.cart,P=C.setCart,A=C.badge,D=C.setBadge;Object(s.useEffect)((function(){console.log(t),Q.a.get("https://fakestoreapi.com/products/".concat(t)).then((function(e){r(e.data),console.log(e.data),h(e.data.rating.rate),w(e.data.rating.count)}))}),[t]);var I=function(e,t){e.preventDefault(),"+"===t&&(g(Math.min(p+1,v)),console.log(p)),"-"===t&&g(Math.max(p-1,1))};return Object(u.jsx)("div",{children:Object(u.jsxs)(l.a,{container:!0,spacing:0,children:[Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(L,{custom:{isDisable:S,setDisable:N}})}),Object(u.jsx)(l.a,{style:{height:"150px"},item:!0,xs:12}),Object(u.jsx)(l.a,{item:!0,xs:1}),Object(u.jsx)(l.a,{item:!0,xs:4,children:Object(u.jsx)(l.a,{container:!0,children:Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(q.a,{style:{height:"350px"},children:Object(u.jsx)("img",{className:e.img,src:a.image})})})})}),Object(u.jsx)(l.a,{item:!0,xs:1}),Object(u.jsx)(l.a,{item:!0,xs:5,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(K.a,{variant:"h5",gutterBottom:!0,children:a.title})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Description: "}),a.description]})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(Oe.a,{name:"read-only",value:b,readOnly:!0})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsxs)(K.a,{variant:"h6",children:["Price: $",a.price]})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsxs)(K.a,{variant:"h6",children:["Category: ",a.category]})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(K.a,{variant:"h6",children:"Quantity: "})}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(x.a,{onClick:function(e){return I(e,"-")},className:e.btnAmount,children:"-"})}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)("input",{onChange:function(e){return function(e){var t=e.target.value;console.log(t),""!==t&&g(Math.min(parseInt(t),v))}(e)},style:{width:"50px",fontSize:"25px"},value:p})}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(x.a,{onClick:function(e){return I(e,"+")},className:e.btnAmount,children:"+"})})]})}),Object(u.jsx)(l.a,{style:{height:"7px"},item:!0,xs:12}),Object(u.jsxs)(l.a,{item:!0,xs:12,children:[Object(u.jsx)(x.a,{className:e.btn,children:"Buy now"}),Object(u.jsx)(x.a,{onClick:function(e){return function(e){var c={id:t,title:a.title,price:a.price,image:a.image,rate:a.rating.rate,quantity:a.rating.count,count:1};P([].concat(Object(z.a)(k),[c]));var s=k.findIndex((function(e){return e.id===c.id})),i=[];k!==[]&&(i=k),s>-1?(i[s].count+=p,i[s].newPrice=i[s].price*(p+1),D(A+p),P(i)):(c.count+=p-1,c.newPrice=c.price*p,D(A+p),P([].concat(Object(z.a)(k),[c]))),console.log("tmp",i)}()},className:e.btn,style:{marginLeft:"10px"},children:"Add to cart"})]})]})}),Object(u.jsx)(l.a,{item:!0,xs:1}),Object(u.jsx)(l.a,{style:{height:"50px"},item:!0,xs:12}),Object(u.jsx)(l.a,{style:{height:"100vh"},item:!0,xs:12,children:Object(u.jsx)(pe,{tmp:{category:a.category,id:a.id}})}),Object(u.jsx)(l.a,{style:{width:"100vw"},item:!0,xs:12,children:Object(u.jsx)(be,{})})]})})},ye=c(241),ve=c(194),we=c(242),Ce=c(243),Se=c(244),Ne=c(245),ke=c(246),Pe=c(117),Le=c.n(Pe),Ae=c(118),De=c.n(Ae),Ie=function(e){var t=e.tmp,c=t.count,i=(t.quantity,t.setCount,Object(s.useState)(0)),a=Object(n.a)(i,2),r=(a[0],a[1]);Object(s.useEffect)((function(){r(c)}),[]);return Object(u.jsx)("div",{children:Object(u.jsx)(K.a,{align:"center",variant:"h5",children:c})})},Ee=Object(r.a)({table:{minWidth:650},btnBuy:{backgroundColor:"#2a7efd",color:"white","&:hover":{backgroundColor:"#205bb3"}}}),Re=function(){var e=Ee(),t=Object(s.useState)(0),c=Object(n.a)(t,2),i=c[0],a=c[1],r=Object(s.useState)(1),o=Object(n.a)(r,2),j=(o[0],o[1]),b=Object(s.useContext)(Fe),h=b.isDisable,O=b.setDisable,m=b.cart,p=b.setCart,g=b.badge,f=b.setBadge;Object(s.useEffect)((function(){console.log("cart ",m);try{for(var e=0,t=0;t<m.length;t++)e+=m[t].newPrice;console.log(e),a(e)}catch(c){console.error(c)}}),[m]);return Object(u.jsx)("div",{children:Object(u.jsxs)(l.a,{container:!0,spacing:0,children:[Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(L,{custom:{isDisable:h,setDisable:O}})}),Object(u.jsx)(l.a,{style:{height:"150px"},item:!0,xs:12}),Object(u.jsx)(l.a,{style:{height:"100vh"},item:!0,xs:12,children:Object(u.jsx)(ye.a,{style:{width:"90%",display:"block",marginLeft:"auto",marginRight:"auto"},component:ve.a,children:Object(u.jsxs)(we.a,{className:e.table,"aria-label":"simple table",children:[Object(u.jsx)(Ce.a,{children:Object(u.jsxs)(Se.a,{children:[Object(u.jsx)(Ne.a,{align:"left",children:"Items"}),Object(u.jsx)(Ne.a,{align:"left"}),Object(u.jsx)(Ne.a,{align:"right",children:"Price ($)"}),Object(u.jsx)(Ne.a,{align:"center",children:"Quantity"}),Object(u.jsx)(Ne.a,{align:"right",children:"Total ($)"}),Object(u.jsx)(Ne.a,{align:"right",children:"Remove"})]})}),Object(u.jsxs)(ke.a,{children:[m.map((function(e,t){return Object(u.jsxs)(Se.a,{children:[Object(u.jsx)(Ne.a,{align:"center",children:Object(u.jsx)("img",{style:{width:"40px"},src:e.image})}),Object(u.jsx)(Ne.a,{align:"left",children:Object(u.jsx)(K.a,{variant:"h5",children:e.title})}),Object(u.jsx)(Ne.a,{align:"right",children:Object(u.jsx)(K.a,{variant:"h5",children:e.price})}),Object(u.jsx)(Ne.a,{align:"center",children:Object(u.jsx)(Ie,{tmp:{count:e.count,quantity:e.quantity,setCount:j}})}),Object(u.jsx)(Ne.a,{align:"right",children:Object(u.jsx)(K.a,{variant:"h5",children:e.newPrice||e.price})}),Object(u.jsx)(Ne.a,{align:"right",children:Object(u.jsx)(x.a,{onClick:function(t){return function(e,t){var c=m.filter((function(e){return e.id!==t}));p(c);try{for(var s=0,i=0;i<m.length;i++)s+=m[i].newPrice,f(g-m[i].count);console.log(s),a(s)}catch(e){console.error(e)}}(t,e.id)},children:Object(u.jsx)(Le.a,{style:{color:d.tertary}})})})]},t)})),Object(u.jsxs)(Se.a,{children:[Object(u.jsx)(Ne.a,{align:"center",children:"-"}),Object(u.jsx)(Ne.a,{align:"left",children:"-"}),Object(u.jsx)(Ne.a,{align:"right",children:"-"}),Object(u.jsx)(Ne.a,{align:"right",children:"-"}),Object(u.jsx)(Ne.a,{align:"right",children:Object(u.jsxs)(x.a,{disabled:!0,children:["Total: ",i.toFixed(2)]})}),Object(u.jsx)(Ne.a,{align:"right",children:Object(u.jsxs)(x.a,{className:e.btnBuy,children:["Buy\xa0",Object(u.jsx)(De.a,{style:{color:"greenyellow"}})]})})]})]})]})})}),Object(u.jsx)(l.a,{style:{height:"50px"},item:!0,xs:12}),Object(u.jsx)(l.a,{style:{width:"100vw"},item:!0,xs:12,children:Object(u.jsx)(be,{})})]})})},ze=function(){var e=Object(s.useState)(!0),t=Object(n.a)(e,2),c=t[0],i=t[1],a=Object(s.useContext)(Fe),r=a.isDisbale,o=a.setDisable,j=Object(s.useState)([]),x=Object(n.a)(j,2),b=x[0],h=x[1];return Object(s.useEffect)((function(){Q.a.get("https://fakestoreapi.com/products").then((function(e){h(e.data)}))}),[]),Object(u.jsxs)(l.a,{container:!0,children:[Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(L,{custom:{isDisbale:r,setDisable:o}})}),Object(u.jsx)(l.a,{style:{height:"120px"},item:!0,xs:12}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(l.a,{style:{width:"90%",position:"relative",left:"50%",transform:"translateX(-50%)"},container:!0,spacing:2,children:b.map((function(e){return Object(u.jsx)(G,{grid:3,prod:e,loading:{isLoading:c,setLoading:i}},e.id)}))})}),Object(u.jsx)(l.a,{style:{height:"20px"},item:!0,xs:12}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(be,{})})]})},qe=c(247),We=c(249),Be=Object(r.a)((function(e){return{root:{width:"80vw","& > *":{margin:e.spacing(1)}}}})),Xe="abc@gmail.com",Ke="123",Te=function(){var e=Be(),t=Object(s.useContext)(Fe),c=(t.keyWord,t.setKeyWord,t.isSubmit,t.setIsSubmit,t.cart,t.badge,t.account,t.setAccount),i=t.isRemember,a=t.setIsRemember,r=Object(s.useState)(""),o=Object(n.a)(r,2),j=o[0],b=o[1],h=Object(s.useState)(""),d=Object(n.a)(h,2),m=d[0],p=d[1],g=Object(O.f)(),f=function(e,t){"email"===t&&b(e.target.value),"password"===t&&p(e.target.value),console.log("email: ".concat(j,", password: ").concat(m))},y=function(e){e.preventDefault(),j===Xe&&m===Ke&&(c({isLogin:!0}),!1===i&&(localStorage.setItem("email",Xe),localStorage.setItem("pasword",Ke)),g.push("/"))};return Object(u.jsx)("div",{children:Object(u.jsxs)(q.a,{style:{width:"90vw",position:"relative",left:"50%",transform:"translateX(-50%)",top:"100px"},children:[Object(u.jsx)(X.a,{children:Object(u.jsx)(K.a,{align:"center",variant:"h5",children:"LOGIN"})}),Object(u.jsx)(B.a,{children:Object(u.jsx)(W.a,{children:Object(u.jsx)("form",{onSubmit:function(e){return y(e)},className:e.root,children:Object(u.jsxs)(l.a,{container:!0,spacing:2,children:[Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(qe.a,{value:j,onChange:function(e){return f(e,"email")},style:{width:"500px",position:"relative",left:"50%",transform:"translateX(-50%)"},id:"standard-basic",label:"email"})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(qe.a,{value:m,onChange:function(e){return f(e,"password")},style:{width:"500px",position:"relative",left:"50%",transform:"translateX(-50%)"},id:"standard-basic",label:"password"})}),Object(u.jsx)(l.a,{item:!0,xs:4}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(We.a,{onClick:function(e){return!1===i&&a(!0),!0===i&&a(!1),void console.log(i)},style:{position:"relative",left:"50px"}})}),Object(u.jsx)(l.a,{item:!0,xs:2,children:Object(u.jsx)(K.a,{style:{position:"relative",top:"50%",transform:"translateY(-50%)"},align:"left",variant:"subtitle1",children:"Remember me!!!"})}),Object(u.jsx)(l.a,{item:!0,xs:4}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(x.a,{onClick:function(e){return y(e)},style:{width:"500px",position:"relative",left:"50%",transform:"translateX(-50%)"},children:"Login"})}),Object(u.jsx)(l.a,{item:!0,xs:12,children:Object(u.jsx)(x.a,{style:{width:"500px",position:"relative",left:"50%",transform:"translateX(-50%)"},children:"Registeration"})})]})})})})]})})},Fe=Object(s.createContext)();var Ye=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(!1),r=Object(n.a)(a,2),o=r[0],j=r[1],l=Object(s.useState)(!1),x=Object(n.a)(l,2),b=x[0],h=x[1],d=Object(s.useState)([]),m=Object(n.a)(d,2),p=m[0],g=m[1],f=Object(s.useState)(0),y=Object(n.a)(f,2),v=y[0],w=y[1],C=Object(s.useState)({isLogin:!1}),S=Object(n.a)(C,2),N=S[0],k=S[1],P=Object(s.useState)(!0),L=Object(n.a)(P,2),A=L[0],D=L[1];return Object(u.jsx)(Fe.Provider,{value:{keyWord:c,setKeyWord:i,isSubmit:o,setIsSubmit:j,isDisable:b,setDisable:h,cart:p,setCart:g,badge:v,setBadge:w,account:N,setAccount:k,isRemember:A,setIsRemember:D},children:Object(u.jsxs)(O.c,{children:[Object(u.jsx)(O.a,{exact:!0,path:"/",component:de}),Object(u.jsx)(O.a,{exact:!0,path:"/shop",component:ze}),Object(u.jsx)(O.a,{exact:!0,path:"/login",component:Te}),Object(u.jsx)(O.a,{exact:!0,path:"/products/:id",component:fe}),Object(u.jsx)(O.a,{exact:!0,path:"/cart",component:Re})]})})},He=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,254)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),i(e),a(e),n(e)}))},Me=c(119);a.a.render(Object(u.jsx)(Me.a,{children:Object(u.jsx)(Ye,{})}),document.getElementById("root")),He()}},[[190,1,2]]]);
//# sourceMappingURL=main.a7c8c450.chunk.js.map