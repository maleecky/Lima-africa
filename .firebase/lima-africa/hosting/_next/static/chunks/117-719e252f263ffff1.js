(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[117,510],{8117:function(e,t,l){Promise.resolve().then(l.bind(l,7193))},1976:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,l(3480).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},2571:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,l(3480).Z)("CircleArrowRight",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]])},7193:function(e,t,l){"use strict";var s=l(7437),a=l(212);l(2265);var r=l(7138),i=l(9733),n=l(1336),d=l(2571),o=l(1976),c=l(8185),m=l(8510),x=l(7114),f=l(9772),u=l(9343),p=l(1014),h=l(7209),g=l(8068),b=l(6463);let j=f.Ry({name:f.Z_().min(2),email:f.Z_().min(1),quantity:f.Rx().min(1),product:f.Z_().min(1)});t.default=e=>{var t;let{productId:l,productName:f}=e,w=()=>void 0!==l&&l>=0?n.Y2.products[l]:f?n.Y2.bsfLive:void 0,v=(0,u.cI)({mode:"onChange",resolver:(0,p.F)(j),defaultValues:{name:"",email:"",quantity:0,product:(null===(t=w())||void 0===t?void 0:t.title)||""}}),N=v.formState.isSubmitting;return(0,s.jsx)("div",{className:"flex flex-col justify-center w-full pb-[2rem] lg:px-14 md:px-8 px-4 pt-[5rem]",children:(0,s.jsxs)("div",{className:"max-w-[2000px] mx-auto w-full",children:[(0,s.jsxs)("section",{className:"flex min-[860px]:flex-row flex-col min-[860px]:max-w-[70em] max-w-full min-[860px]:gap-20 gap-10 mt-[5em] rounded-lg  ",children:[(0,s.jsxs)("div",{className:"relative flex-[0_0_50%] [min-860px]:max-w-[600px] min-w-[10em] min-h-[20em] max-xs:min-h-[10em] p-4 rounded-2xl bg-[#013941]  text-[#1e1e1e] min-[860px]:flex-[0_0_50%]  w-full ",children:[(0,s.jsx)("div",{className:"text-sm absolute top-[8px] left-[8px] bg-[#C6E156] rounded-2xl py-2 px-4  ",children:"Lima Product"}),(0,s.jsx)(a.default,{src:w().img,fill:!0,alt:"hero image ",className:"object-contain w-full  h-full object-center  "})]}),(0,s.jsxs)("div",{className:"min-[860px]:flex-[0_0_50%] flex-[0_0_100%] w-full flex flex-col",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4 w-full",children:[(0,s.jsx)("h2",{className:"lg:text-[1.8em] text-[#1e1e1e] text-2xl font-semibold ",children:w().title}),(0,s.jsx)("ul",{className:"flex flex-col p-4 !pl-6 md:gap-4 gap-2 list-disc",children:w().benefits.map((e,t)=>(0,s.jsx)("li",{className:"md:text-[1.25em] text-[1.125em] text-[#1e1e1e] leading-[1.2] md:leading-[1.4rem]",children:e},t))}),(0,s.jsxs)("p",{className:"md:text-[1.25em] text-[1.125em] text-[#1e1e1e]",children:[(0,s.jsx)("span",{children:"Price: "}),w().price]})]}),(0,s.jsxs)("div",{className:"min-[340px]:flex-row flex-col flex !mt-10 items-center gap-4",children:[(0,s.jsx)(i.z,{asChild:!0,className:"bg-green-700 p-6  xmd:!text-base max-xmd:w-full rounded-full lg:hover:bg-green-800 hover:bg-green-800 max-[192px]:whitespace-normal flex space-x-2 max-[192px]:text-center !h-0",children:(0,s.jsx)(r.default,{href:"https://wa.me/".concat(n.fI.contactsInformation[0].label.split("+")[1],"?text=Hello%20Lima%20I'm%20interested%20in%20purchasing%20").concat(w().title),target:"_blank",children:"Inquire via whatsapp"})}),(0,s.jsx)(m.default,{btn:w().actionBtn.label,btnStyles:"bg-green-700 hover:text-[#fff] lg:hover:bg-green-800 hover:bg-green-800 p-6  xmd:!text-base text-white max-xmd:w-full rounded-full lg:hover:bg-green-800  max-[192px]:whitespace-normal flex space-x-2 max-[192px]:text-center !h-0",children:(0,s.jsxs)("div",{className:"p-6 ",children:[(0,s.jsx)("h3",{className:"lg:max-w-[15em] py-3 w-full text-[1.5em] leading-[1.1] font-medium",children:"Fill the Form to inquire the Product"}),(0,s.jsx)(x.l0,{...v,children:(0,s.jsxs)("form",{onSubmit:v.handleSubmit(()=>{(0,b.redirect)("/"),(0,g.Am)({title:"Success",description:"The message is sent"})}),className:"space-y-5 w-full ",children:[(0,s.jsx)(x.Wi,{control:v.control,disabled:N,name:"name",render:e=>{let{field:t}=e;return(0,s.jsxs)(x.xJ,{className:"w-full",children:[(0,s.jsx)(x.NI,{children:(0,s.jsx)(h.I,{placeholder:"Your fullname",type:"text",...t,className:"border placeholder:text-[13px]  border-[#4a704165] bg-[#C6E156]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"})}),(0,s.jsx)(x.zG,{})]})}}),(0,s.jsx)(x.Wi,{control:v.control,disabled:N,name:"email",render:e=>{let{field:t}=e;return(0,s.jsxs)(x.xJ,{className:"w-full",children:[(0,s.jsx)(x.NI,{children:(0,s.jsx)(h.I,{placeholder:"Your Email",type:"text",...t,className:"border placeholder:text-[13px]  border-[#4a704165] bg-[#C6E156]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"})}),(0,s.jsx)(x.zG,{})]})}}),(0,s.jsx)(x.Wi,{control:v.control,disabled:N,name:"quantity",render:e=>{let{field:t}=e;return(0,s.jsxs)(x.xJ,{children:[(0,s.jsx)(x.NI,{children:(0,s.jsx)(h.I,{placeholder:"How many kilos you want",...t,type:"number",className:"border placeholder:text-[13px] border-[#4a704165] bg-[#C6E156]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"})}),(0,s.jsx)(x.zG,{})]})}}),(0,s.jsx)(x.Wi,{control:v.control,disabled:!0,name:"product",render:e=>{let{field:t}=e;return(0,s.jsxs)(x.xJ,{children:[(0,s.jsx)(x.NI,{children:(0,s.jsx)(h.I,{defaultValue:w().title,...t,type:"text",className:"border placeholder:text-[13px] border-[#4a704165] bg-[#C6E156]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"})}),(0,s.jsx)(x.zG,{})]})}}),(0,s.jsx)(i.z,{className:" px-4 bg-[#022F35] max-w-[200px] w-full ",type:"submit",children:"Inquire via Email"})]})})]})})]})]})]}),(0,s.jsx)("section",{className:"w-full pt-[5em] pb-[4em]   relative  flex flex-col   ",children:(0,s.jsxs)("div",{className:"flex flex-col text-[#1e1e1e] gap-2",children:[(0,s.jsx)("h2",{className:"md:text-[1.4em] text-2xl font-medium",children:"Product Descriptions"}),(0,s.jsx)("div",{className:" md:text-[1.25em] text-[1.125em] text-[#1e1e1e] md:leading-[1.4rem] w-full xmd:max-w-[800px]",children:(0,s.jsx)("p",{children:w().descriptions})})]})}),(0,s.jsx)("section",{className:"w-full pb-[4em]   relative  flex flex-col   ",children:(0,s.jsxs)("div",{className:"flex flex-col text-[#1e1e1e] gap-2",children:[(0,s.jsxs)("h2",{className:"md:text-[1.4em] text-2xl font-medium",children:["Applications of"," ",w().title]}),(0,s.jsx)("div",{className:" md:text-[1.25em] text-[1.125em] text-[#1e1e1e] md:leading-[1.4rem] w-full xmd:max-w-[800px]",children:(0,s.jsx)("p",{children:w().Applications})})]})}),(0,s.jsx)("section",{className:"w-full pb-[4em]   relative  flex flex-col   ",children:(0,s.jsxs)("div",{className:"flex flex-col text-[#1e1e1e] gap-2",children:[(0,s.jsx)("h2",{className:"md:text-[1.4em] text-2xl font-medium",children:"Suitable for"}),(0,s.jsx)("div",{className:" md:text-[1.25em] text-[1.125em] text-[#1e1e1e] leading-[1.4rem] w-full xmd:max-w-[800px]",children:(0,s.jsx)("p",{children:w().suitable})})]})}),(0,s.jsx)("section",{className:"w-full pb-[4em]   relative  flex flex-col   ",children:(0,s.jsxs)("div",{className:"flex flex-col text-[#1e1e1e] gap-2",children:[(0,s.jsx)("h2",{className:"md:text-[1.4em] text-2xl  font-medium",children:"Nutritional Contents"}),(0,s.jsx)("div",{className:" md:text-[1.25em] text-[1.125em] text-[#1e1e1e] leading-[1.4rem] w-full xmd:max-w-[800px]",children:w().NutritionalContents.map((e,t)=>(0,s.jsx)("p",{children:e},t))})]})}),(0,s.jsx)("section",{className:"w-full pb-[4em]   relative  flex flex-col   ",children:(0,s.jsxs)("div",{className:"flex flex-col text-[#1e1e1e] gap-2",children:[(0,s.jsx)("h2",{className:"md:text-[1.4em] text-2xl font-medium",children:"Explore more from Lima Africa's Products"}),(0,s.jsxs)("div",{className:"pt-4 gap-10 w-full lg:flex-row flex-col relative flex  whitespace-nowrap",children:[n.Y2.products.map((e,t)=>{if(e.title!==w().title)return(0,s.jsx)(i.z,{asChild:!0,className:"flex  rounded-lg overflow-hidden h-full min-h-[250px]   relative  flex-col  w-full xmd:max-w-[300px] max-sm:min-h-[250px] max-xs:min-w-[150px]   shadow-none hovered p-0",variant:"ghost",children:(0,s.jsx)(r.default,{href:e.link.path,children:(0,s.jsxs)(c.Zb,{className:"flex border-none  rounded-lg bg-[#013941] py-[1em] overflow-hidden  flex-1 h-full z-10  relative  flex-col justify-end  min-w-full  ",children:[(0,s.jsx)("div",{className:"relative flex-1 min-h-[10em]",children:(0,s.jsx)(a.default,{src:e.img,fill:!0,sizes:"(min-width: 768px) 50vw, (max-width: 768px) 25vw, 12.5vw",alt:e.title,className:"block object-cover img-container"})}),(0,s.jsx)("div",{className:"flex flex-col w-full rounded-full items-center   ",children:(0,s.jsxs)("div",{className:"flex flex-col justify-center    leading-1 space-y-5 w-full  whitespace-normal",children:[(0,s.jsxs)("div",{className:"flex justify-between relative !mb-4  px-2 m-3 items-end  min-h-full z-10 ",children:[(0,s.jsxs)("div",{className:"inline-block  w-full  ",children:[(0,s.jsx)("h4",{className:" text-[#fff]  tracking-tight relative text-[1.25em] leading-[1.2] max-lg:mb-3 lg:absolute lg:bottom-0 lg:left-0 font-medium product ",children:e.title}),e.title===w().title?(0,s.jsx)("p",{className:"text-[#1e1e1e] lg:backdrop-blur absolute top-50% translate-x-[0%]  translate-y-[100%] left-50%  lg:p-4 w-full overflow-hidden product-desc  lg:hidden block text-ellipsis box-border line-clamp-3 cursor-vertical-text  ",children:"".concat(n.Y2.bsfLive.descriptions)}):(0,s.jsx)("p",{className:"text-[#1e1e1e] lg:backdrop-blur absolute top-50% translate-x-[0%]  translate-y-[100%] left-50%  lg:p-4 w-full overflow-hidden product-desc  lg:hidden block text-ellipsis box-border line-clamp-3 cursor-vertical-text  ",children:"".concat(e.descriptions[0])})]}),(0,s.jsx)(d.Z,{color:"white",width:18,className:"circle max-sm:w-4 absolute lg:block hidden bottom-0 right-0"})]}),(0,s.jsx)("span",{className:"hidden",children:e.link.title}),(0,s.jsx)(o.Z,{className:"hidden",width:14})]})})]})})},t)}),!f&&(0,s.jsx)(i.z,{asChild:!0,className:"flex  rounded-lg overflow-hidden  h-full min-h-[250px]   relative  flex-col  w-full xmd:max-w-[300px] max-sm:min-h-[250px] max-xs:min-w-[150px]   shadow-none hovered p-0",variant:"ghost",children:(0,s.jsx)(r.default,{href:n.Y2.bsfLive.link.path,children:(0,s.jsxs)(c.Zb,{className:"flex border-none  rounded-lg bg-[#013941] py-[1em] overflow-hidden  flex-1 h-full z-10  relative  flex-col justify-end  min-w-full  ",children:[(0,s.jsx)("div",{className:"relative flex-1 min-h-[10em]",children:(0,s.jsx)(a.default,{src:n.Y2.products[0].img,fill:!0,sizes:"(min-width: 768px) 50vw, (max-width: 768px) 25vw, 12.5vw",alt:n.Y2.bsfLive.title,className:"block object-cover img-container"})}),(0,s.jsx)("div",{className:"flex flex-col w-full rounded-full items-center   ",children:(0,s.jsxs)("div",{className:"flex flex-col justify-center    leading-1 space-y-5 w-full  whitespace-normal",children:[(0,s.jsxs)("div",{className:"flex justify-between relative !mb-4  px-2 m-3 items-end  min-h-full z-10 ",children:[(0,s.jsxs)("div",{className:"inline-block  w-full  ",children:[(0,s.jsx)("h4",{className:" text-[#fff]  tracking-tight relative text-[1.25em] leading-[1.2] max-lg:mb-3 lg:absolute lg:bottom-0 lg:left-0 font-medium product ",children:n.Y2.bsfLive.title}),(0,s.jsx)("p",{className:"text-[#1e1e1e] lg:backdrop-blur absolute top-50% translate-x-[0%]  translate-y-[100%] left-50%  lg:p-4 w-full overflow-hidden product-desc  lg:hidden block text-ellipsis box-border line-clamp-3 cursor-vertical-text  ",children:"".concat(n.Y2.bsfLive.descriptions)})]}),(0,s.jsx)(d.Z,{color:"white",width:18,className:"circle max-sm:w-4 absolute lg:block hidden bottom-0 right-0"})]}),(0,s.jsx)("span",{className:"hidden",children:n.Y2.bsfLive.link.title}),(0,s.jsx)(o.Z,{className:"hidden",width:14})]})})]})})})]})]})})]})})}},8510:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return u}});var s=l(7437),a=l(9733),r=l(2265),i=l(9673),n=l(4697),d=l(9354);let o=i.fC,c=i.xz,m=i.h_;i.x8;let x=r.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)(i.aV,{ref:t,className:(0,d.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",l),...a})});x.displayName=i.aV.displayName;let f=r.forwardRef((e,t)=>{let{className:l,children:a,...r}=e;return(0,s.jsxs)(m,{children:[(0,s.jsx)(x,{}),(0,s.jsxs)(i.VY,{ref:t,className:(0,d.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",l),...r,children:[a,(0,s.jsxs)(i.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(n.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});function u(e){let{btn:t,children:l,btnStyles:r}=e;return(0,s.jsxs)(o,{children:[(0,s.jsx)(c,{asChild:!0,className:"w-full ",children:(0,s.jsx)("div",{className:r?"":"flex justify-center items-center",children:(0,s.jsx)(a.z,{variant:"ghost",type:"button",className:r||" bg-transparent text-[1em] whitespace-pre-wrap w-full underline underline-offset-2 px-0 hover:bg-transparent ",children:t})})}),(0,s.jsx)(f,{className:"sm:max-w-[425px] m-3 max-xmd:p-2 max-sm:w-full  overflow-y-auto",children:l})]})}f.displayName=i.VY.displayName,r.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)(i.Dx,{ref:t,className:(0,d.cn)("text-lg font-semibold leading-none tracking-tight",l),...a})}).displayName=i.Dx.displayName,r.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)(i.dk,{ref:t,className:(0,d.cn)("text-sm text-muted-foreground",l),...a})}).displayName=i.dk.displayName},8185:function(e,t,l){"use strict";l.d(t,{Ol:function(){return n},Zb:function(){return i},aY:function(){return d},eW:function(){return o}});var s=l(7437),a=l(2265),r=l(9354);let i=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",l),...a})});i.displayName="Card";let n=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",l),...a})});n.displayName="CardHeader",a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("h3",{ref:t,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",l),...a})}).displayName="CardTitle",a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("p",{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",l),...a})}).displayName="CardDescription";let d=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("p-6 pt-0",l),...a})});d.displayName="CardContent";let o=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex items-center p-6 pt-0",l),...a})});o.displayName="CardFooter"},7114:function(e,t,l){"use strict";l.d(t,{l0:function(){return m},NI:function(){return b},pf:function(){return j},Wi:function(){return f},xJ:function(){return h},lX:function(){return g},zG:function(){return w}});var s=l(7437),a=l(2265),r=l(1538),i=l(9343),n=l(9354),d=l(8364);let o=(0,l(2218).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)(d.f,{ref:t,className:(0,n.cn)(o(),l),...a})});c.displayName=d.f.displayName;let m=i.RV,x=a.createContext({}),f=e=>{let{...t}=e;return(0,s.jsx)(x.Provider,{value:{name:t.name},children:(0,s.jsx)(i.Qr,{...t})})},u=()=>{let e=a.useContext(x),t=a.useContext(p),{getFieldState:l,formState:s}=(0,i.Gc)(),r=l(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:n}=t;return{id:n,name:e.name,formItemId:"".concat(n,"-form-item"),formDescriptionId:"".concat(n,"-form-item-description"),formMessageId:"".concat(n,"-form-item-message"),...r}},p=a.createContext({}),h=a.forwardRef((e,t)=>{let{className:l,...r}=e,i=a.useId();return(0,s.jsx)(p.Provider,{value:{id:i},children:(0,s.jsx)("div",{ref:t,className:(0,n.cn)("space-y-2",l),...r})})});h.displayName="FormItem";let g=a.forwardRef((e,t)=>{let{className:l,...a}=e,{error:r,formItemId:i}=u();return(0,s.jsx)(c,{ref:t,className:(0,n.cn)(r&&"text-destructive",l),htmlFor:i,...a})});g.displayName="FormLabel";let b=a.forwardRef((e,t)=>{let{...l}=e,{error:a,formItemId:i,formDescriptionId:n,formMessageId:d}=u();return(0,s.jsx)(r.g7,{ref:t,id:i,"aria-describedby":a?"".concat(n," ").concat(d):"".concat(n),"aria-invalid":!!a,...l})});b.displayName="FormControl";let j=a.forwardRef((e,t)=>{let{className:l,...a}=e,{formDescriptionId:r}=u();return(0,s.jsx)("p",{ref:t,id:r,className:(0,n.cn)("text-sm text-muted-foreground",l),...a})});j.displayName="FormDescription";let w=a.forwardRef((e,t)=>{let{className:l,children:a,...r}=e,{error:i,formMessageId:d}=u(),o=i?String(null==i?void 0:i.message):a;return o?(0,s.jsx)("p",{ref:t,id:d,className:(0,n.cn)("text-sm font-medium text-destructive",l),...r,children:o}):null});w.displayName="FormMessage"},7209:function(e,t,l){"use strict";l.d(t,{I:function(){return i}});var s=l(7437),a=l(2265),r=l(9354);let i=a.forwardRef((e,t)=>{let{className:l,type:a,...i}=e;return(0,s.jsx)("input",{type:a,className:(0,r.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",l),ref:t,...i})});i.displayName="Input"},8068:function(e,t,l){"use strict";l.d(t,{Am:function(){return m},pm:function(){return x}});var s=l(2265);let a=0,r=new Map,i=e=>{if(r.has(e))return;let t=setTimeout(()=>{r.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);r.set(e,t)},n=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:l}=t;return l?i(l):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],o={toasts:[]};function c(e){o=n(o,e),d.forEach(e=>{e(o)})}function m(e){let{...t}=e,l=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>c({type:"DISMISS_TOAST",toastId:l});return c({type:"ADD_TOAST",toast:{...t,id:l,open:!0,onOpenChange:e=>{e||s()}}}),{id:l,dismiss:s,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:l}})}}function x(){let[e,t]=s.useState(o);return s.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:m,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}}}]);