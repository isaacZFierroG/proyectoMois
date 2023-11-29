import{Y as W,k as z,Z as re,V as ue,W as V,X as le,n as Ue,m as se,y as fe,M as x,A as P,bc as je,N as k,a4 as h,bd as Le,be as Ge,q as K,C as ge,D as E,Q as Je,l as F,R as A,at as Qe,G as ve,v as s,b3 as Ne,I as he,x as _e,b0 as M,S as Ze,bf as xe,bg as eo,bh as oo,bi as to,z as no,a0 as io,E as ae,B as He,H as ye,L as D,a8 as ro,al as lo,aj as so,a6 as ce,ag as ke,a3 as ao,a5 as Ae,J as de,bj as co,a7 as uo}from"./index-25a1633d.js";import{k as fo,n as T,c as L,f as go,N as we,r as Se,h as vo}from"./service-ec2a6b46.js";import{e as De,c as ho,a as mo,d as po,p as bo,f as Co,z as xo,L as yo,h as ko}from"./fade-in-scale-up.cssr-a8000d20.js";import{g as wo,F as So}from"./index-08439a80.js";import{i as We,h as Ve}from"./Grid-d8533d20.js";const N=z(null);function ze(e){if(e.clientX>0||e.clientY>0)N.value={x:e.clientX,y:e.clientY};else{const{target:t}=e;if(t instanceof Element){const{left:n,top:o,width:a,height:u}=t.getBoundingClientRect();n>0||o>0?N.value={x:n+a/2,y:o+u/2}:N.value={x:0,y:0}}else N.value=null}}let _=0,Pe=!0;function zo(){if(!We)return W(z(null));_===0&&re("click",document,ze,!0);const e=()=>{_+=1};return Pe&&(Pe=Ve())?(ue(e),V(()=>{_-=1,_===0&&le("click",document,ze,!0)})):e(),W(N)}const Po=z(void 0);let H=0;function Re(){Po.value=Date.now()}let Be=!0;function Ro(e){if(!We)return W(z(!1));const t=z(!1);let n=null;function o(){n!==null&&window.clearTimeout(n)}function a(){o(),t.value=!0,n=window.setTimeout(()=>{t.value=!1},e)}H===0&&re("click",window,Re,!0);const u=()=>{H+=1,re("click",window,a,!0)};return Be&&(Be=Ve())?(ue(u),V(()=>{H-=1,H===0&&le("click",window,Re,!0),le("click",window,a,!0),o()})):u(),W(t)}let I=0,$e="",Oe="",Te="",Fe="";const Me=z("0px");function Bo(e){if(typeof document>"u")return;const t=document.documentElement;let n,o=!1;const a=()=>{t.style.marginRight=$e,t.style.overflow=Oe,t.style.overflowX=Te,t.style.overflowY=Fe,Me.value="0px"};Ue(()=>{n=se(e,u=>{if(u){if(!I){const f=window.innerWidth-t.offsetWidth;f>0&&($e=t.style.marginRight,t.style.marginRight=`${f}px`,Me.value=`${f}px`),Oe=t.style.overflow,Te=t.style.overflowX,Fe=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}o=!0,I++}else I--,I||a(),o=!1},{immediate:!0})}),V(()=>{n==null||n(),o&&(I--,I||a(),o=!1)})}const me=z(!1),Ie=()=>{me.value=!0},Ee=()=>{me.value=!1};let j=0;const $o=()=>(fo&&(ue(()=>{j||(window.addEventListener("compositionstart",Ie),window.addEventListener("compositionend",Ee)),j++}),V(()=>{j<=1?(window.removeEventListener("compositionstart",Ie),window.removeEventListener("compositionend",Ee),j=0):j--})),me),Oo={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},To=e=>{const{primaryColor:t,borderRadius:n,lineHeight:o,fontSize:a,cardColor:u,textColor2:f,textColor1:m,dividerColor:c,fontWeightStrong:r,closeIconColor:p,closeIconColorHover:l,closeIconColorPressed:b,closeColorHover:w,closeColorPressed:R,modalColor:y,boxShadow1:g,popoverColor:C,actionColor:v}=e;return Object.assign(Object.assign({},Oo),{lineHeight:o,color:u,colorModal:y,colorPopover:C,colorTarget:t,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:f,titleTextColor:m,borderColor:c,actionColor:v,titleFontWeight:r,closeColorHover:w,closeColorPressed:R,closeBorderRadius:n,closeIconColor:p,closeIconColorHover:l,closeIconColorPressed:b,fontSizeSmall:a,fontSizeMedium:a,fontSizeLarge:a,fontSizeHuge:a,boxShadow:g,borderRadius:n})},Fo={name:"Card",common:fe,self:To},Ke=Fo,Mo=x([P("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[je({background:"var(--n-color-modal)"}),k("hoverable",[x("&:hover","box-shadow: var(--n-box-shadow);")]),k("content-segmented",[x(">",[h("content",{paddingTop:"var(--n-padding-bottom)"})])]),k("content-soft-segmented",[x(">",[h("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),k("footer-segmented",[x(">",[h("footer",{paddingTop:"var(--n-padding-bottom)"})])]),k("footer-soft-segmented",[x(">",[h("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),x(">",[P("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[h("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),h("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),h("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),h("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),h("content","flex: 1; min-width: 0;"),h("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[x("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),h("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),P("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[x("img",`
 display: block;
 width: 100%;
 `)]),k("bordered",`
 border: 1px solid var(--n-border-color);
 `,[x("&:target","border-color: var(--n-color-target);")]),k("action-segmented",[x(">",[h("action",[x("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),k("content-segmented, content-soft-segmented",[x(">",[h("content",{transition:"border-color 0.3s var(--n-bezier)"},[x("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),k("footer-segmented, footer-soft-segmented",[x(">",[h("footer",{transition:"border-color 0.3s var(--n-bezier)"},[x("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),k("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Le(P("card",`
 background: var(--n-color-modal);
 `,[k("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Ge(P("card",`
 background: var(--n-color-popover);
 `,[k("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),pe={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Io=he(pe),Eo=Object.assign(Object.assign({},E.props),pe),jo=K({name:"Card",props:Eo,setup(e){const t=()=>{const{onClose:r}=e;r&&L(r)},{inlineThemeDisabled:n,mergedClsPrefixRef:o,mergedRtlRef:a}=ge(e),u=E("Card","-card",Mo,Ke,e,o),f=Je("Card",a,o),m=F(()=>{const{size:r}=e,{self:{color:p,colorModal:l,colorTarget:b,textColor:w,titleTextColor:R,titleFontWeight:y,borderColor:g,actionColor:C,borderRadius:v,lineHeight:B,closeIconColor:S,closeIconColorHover:i,closeIconColorPressed:d,closeColorHover:$,closeColorPressed:O,closeBorderRadius:X,closeIconSize:Y,closeSize:q,boxShadow:U,colorPopover:G,colorEmbedded:J,colorEmbeddedModal:Q,colorEmbeddedPopover:Z,[A("padding",r)]:ee,[A("fontSize",r)]:oe,[A("titleFontSize",r)]:te},common:{cubicBezierEaseInOut:ne}}=u.value,{top:ie,left:Ye,bottom:qe}=Qe(ee);return{"--n-bezier":ne,"--n-border-radius":v,"--n-color":p,"--n-color-modal":l,"--n-color-popover":G,"--n-color-embedded":J,"--n-color-embedded-modal":Q,"--n-color-embedded-popover":Z,"--n-color-target":b,"--n-text-color":w,"--n-line-height":B,"--n-action-color":C,"--n-title-text-color":R,"--n-title-font-weight":y,"--n-close-icon-color":S,"--n-close-icon-color-hover":i,"--n-close-icon-color-pressed":d,"--n-close-color-hover":$,"--n-close-color-pressed":O,"--n-border-color":g,"--n-box-shadow":U,"--n-padding-top":ie,"--n-padding-bottom":qe,"--n-padding-left":Ye,"--n-font-size":oe,"--n-title-font-size":te,"--n-close-size":q,"--n-close-icon-size":Y,"--n-close-border-radius":X}}),c=n?ve("card",F(()=>e.size[0]),m,e):void 0;return{rtlEnabled:f,mergedClsPrefix:o,mergedTheme:u,handleCloseClick:t,cssVars:n?void 0:m,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{segmented:e,bordered:t,hoverable:n,mergedClsPrefix:o,rtlEnabled:a,onRender:u,embedded:f,tag:m,$slots:c}=this;return u==null||u(),s(m,{class:[`${o}-card`,this.themeClass,f&&`${o}-card--embedded`,{[`${o}-card--rtl`]:a,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:t,[`${o}-card--hoverable`]:n}],style:this.cssVars,role:this.role},T(c.cover,r=>r&&s("div",{class:`${o}-card-cover`,role:"none"},r)),T(c.header,r=>r||this.title||this.closable?s("div",{class:`${o}-card-header`,style:this.headerStyle},s("div",{class:`${o}-card-header__main`,role:"heading"},r||this.title),T(c["header-extra"],p=>p&&s("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},p)),this.closable?s(Ne,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),T(c.default,r=>r&&s("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},r)),T(c.footer,r=>r&&[s("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},r)]),T(c.action,r=>r&&s("div",{class:`${o}-card__action`,role:"none"},r)))}}),Lo={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},No=e=>{const{textColor1:t,textColor2:n,modalColor:o,closeIconColor:a,closeIconColorHover:u,closeIconColorPressed:f,closeColorHover:m,closeColorPressed:c,infoColor:r,successColor:p,warningColor:l,errorColor:b,primaryColor:w,dividerColor:R,borderRadius:y,fontWeightStrong:g,lineHeight:C,fontSize:v}=e;return Object.assign(Object.assign({},Lo),{fontSize:v,lineHeight:C,border:`1px solid ${R}`,titleTextColor:t,textColor:n,color:o,closeColorHover:m,closeColorPressed:c,closeIconColor:a,closeIconColorHover:u,closeIconColorPressed:f,closeBorderRadius:y,iconColor:w,iconColorInfo:r,iconColorSuccess:p,iconColorWarning:l,iconColorError:b,borderRadius:y,titleFontWeight:g})},_o=_e({name:"Dialog",common:fe,peers:{Button:go},self:No}),Xe=_o,be={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},Ho=he(be),Ao=x([P("dialog",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[h("icon",{color:"var(--n-icon-color)"}),k("bordered",{border:"var(--n-border)"}),k("icon-top",[h("close",{margin:"var(--n-close-margin)"}),h("icon",{margin:"var(--n-icon-margin)"}),h("content",{textAlign:"center"}),h("title",{justifyContent:"center"}),h("action",{justifyContent:"center"})]),k("icon-left",[h("icon",{margin:"var(--n-icon-margin)"}),k("closable",[h("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),h("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),h("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[k("last","margin-bottom: 0;")]),h("action",`
 display: flex;
 justify-content: flex-end;
 `,[x("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),h("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),h("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),P("dialog-icon-container",{display:"flex",justifyContent:"center"})]),Le(P("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),P("dialog",[je(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),Do={default:()=>s(xe,null),info:()=>s(xe,null),success:()=>s(eo,null),warning:()=>s(oo,null),error:()=>s(to,null)},Wo=K({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},E.props),be),setup(e){const{mergedComponentPropsRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:o}=ge(e),a=F(()=>{var l,b;const{iconPlacement:w}=e;return w||((b=(l=t==null?void 0:t.value)===null||l===void 0?void 0:l.Dialog)===null||b===void 0?void 0:b.iconPlacement)||"left"});function u(l){const{onPositiveClick:b}=e;b&&b(l)}function f(l){const{onNegativeClick:b}=e;b&&b(l)}function m(){const{onClose:l}=e;l&&l()}const c=E("Dialog","-dialog",Ao,Xe,e,n),r=F(()=>{const{type:l}=e,b=a.value,{common:{cubicBezierEaseInOut:w},self:{fontSize:R,lineHeight:y,border:g,titleTextColor:C,textColor:v,color:B,closeBorderRadius:S,closeColorHover:i,closeColorPressed:d,closeIconColor:$,closeIconColorHover:O,closeIconColorPressed:X,closeIconSize:Y,borderRadius:q,titleFontWeight:U,titleFontSize:G,padding:J,iconSize:Q,actionSpace:Z,contentMargin:ee,closeSize:oe,[b==="top"?"iconMarginIconTop":"iconMargin"]:te,[b==="top"?"closeMarginIconTop":"closeMargin"]:ne,[A("iconColor",l)]:ie}}=c.value;return{"--n-font-size":R,"--n-icon-color":ie,"--n-bezier":w,"--n-close-margin":ne,"--n-icon-margin":te,"--n-icon-size":Q,"--n-close-size":oe,"--n-close-icon-size":Y,"--n-close-border-radius":S,"--n-close-color-hover":i,"--n-close-color-pressed":d,"--n-close-icon-color":$,"--n-close-icon-color-hover":O,"--n-close-icon-color-pressed":X,"--n-color":B,"--n-text-color":v,"--n-border-radius":q,"--n-padding":J,"--n-line-height":y,"--n-border":g,"--n-content-margin":ee,"--n-title-font-size":G,"--n-title-font-weight":U,"--n-title-text-color":C,"--n-action-space":Z}}),p=o?ve("dialog",F(()=>`${e.type[0]}${a.value[0]}`),r,e):void 0;return{mergedClsPrefix:n,mergedIconPlacement:a,mergedTheme:c,handlePositiveClick:u,handleNegativeClick:f,handleCloseClick:m,cssVars:o?void 0:r,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){var e;const{bordered:t,mergedIconPlacement:n,cssVars:o,closable:a,showIcon:u,title:f,content:m,action:c,negativeText:r,positiveText:p,positiveButtonProps:l,negativeButtonProps:b,handlePositiveClick:w,handleNegativeClick:R,mergedTheme:y,loading:g,type:C,mergedClsPrefix:v}=this;(e=this.onRender)===null||e===void 0||e.call(this);const B=u?s(Ze,{clsPrefix:v,class:`${v}-dialog__icon`},{default:()=>T(this.$slots.icon,i=>i||(this.icon?M(this.icon):Do[this.type]()))}):null,S=T(this.$slots.action,i=>i||p||r||c?s("div",{class:`${v}-dialog__action`},i||(c?[M(c)]:[this.negativeText&&s(we,Object.assign({theme:y.peers.Button,themeOverrides:y.peerOverrides.Button,ghost:!0,size:"small",onClick:R},b),{default:()=>M(this.negativeText)}),this.positiveText&&s(we,Object.assign({theme:y.peers.Button,themeOverrides:y.peerOverrides.Button,size:"small",type:C==="default"?"primary":C,disabled:g,loading:g,onClick:w},l),{default:()=>M(this.positiveText)})])):null);return s("div",{class:[`${v}-dialog`,this.themeClass,this.closable&&`${v}-dialog--closable`,`${v}-dialog--icon-${n}`,t&&`${v}-dialog--bordered`],style:o,role:"dialog"},a?s(Ne,{clsPrefix:v,class:`${v}-dialog__close`,onClick:this.handleCloseClick}):null,u&&n==="top"?s("div",{class:`${v}-dialog-icon-container`},B):null,s("div",{class:`${v}-dialog__title`},u&&n==="left"?B:null,Se(this.$slots.header,()=>[M(f)])),s("div",{class:[`${v}-dialog__content`,S?"":`${v}-dialog__content--last`]},Se(this.$slots.default,()=>[M(m)])),S)}}),Vo=no("n-dialog-provider"),Ko=e=>{const{modalColor:t,textColor2:n,boxShadow3:o}=e;return{color:t,textColor:n,boxShadow:o}},Xo=_e({name:"Modal",common:fe,peers:{Scrollbar:io,Dialog:Xe,Card:Ke},self:Ko}),Yo=Xo,Ce=Object.assign(Object.assign({},pe),be),qo=he(Ce),Uo=K({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},Ce),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const t=z(null),n=z(null),o=z(e.show),a=z(null),u=z(null);se(ae(e,"show"),g=>{g&&(o.value=!0)}),Bo(F(()=>e.blockScroll&&o.value));const f=He(De);function m(){if(f.transformOriginRef.value==="center")return"";const{value:g}=a,{value:C}=u;if(g===null||C===null)return"";if(n.value){const v=n.value.containerScrollTop;return`${g}px ${C+v}px`}return""}function c(g){if(f.transformOriginRef.value==="center")return;const C=f.getMousePosition();if(!C||!n.value)return;const v=n.value.containerScrollTop,{offsetLeft:B,offsetTop:S}=g;if(C){const i=C.y,d=C.x;a.value=-(B-d),u.value=-(S-i-v)}g.style.transformOrigin=m()}function r(g){ye(()=>{c(g)})}function p(g){g.style.transformOrigin=m(),e.onBeforeLeave()}function l(){o.value=!1,a.value=null,u.value=null,e.onAfterLeave()}function b(){const{onClose:g}=e;g&&g()}function w(){e.onNegativeClick()}function R(){e.onPositiveClick()}const y=z(null);return se(y,g=>{g&&ye(()=>{const C=g.el;C&&t.value!==C&&(t.value=C)})}),D(mo,t),D(po,null),D(bo,null),{mergedTheme:f.mergedThemeRef,appear:f.appearRef,isMounted:f.isMountedRef,mergedClsPrefix:f.mergedClsPrefixRef,bodyRef:t,scrollbarRef:n,displayed:o,childNodeRef:y,handlePositiveClick:R,handleNegativeClick:w,handleCloseClick:b,handleAfterLeave:l,handleBeforeLeave:p,handleEnter:r}},render(){const{$slots:e,$attrs:t,handleEnter:n,handleAfterLeave:o,handleBeforeLeave:a,preset:u,mergedClsPrefix:f}=this;let m=null;if(!u){if(m=wo(e),!m){ro("modal","default slot is empty");return}m=lo(m),m.props=so({class:`${f}-modal`},t,m.props||{})}return this.displayDirective==="show"||this.displayed||this.show?ce(s("div",{role:"none",class:`${f}-modal-body-wrapper`},s(ao,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${f}-modal-scroll-content`},{default:()=>{var c;return[(c=this.renderMask)===null||c===void 0?void 0:c.call(this),s(So,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var r;return s(Ae,{name:"fade-in-scale-up-transition",appear:(r=this.appear)!==null&&r!==void 0?r:this.isMounted,onEnter:n,onAfterEnter:this.onAfterEnter,onAfterLeave:o,onBeforeLeave:a},{default:()=>{const p=[[ke,this.show]],{onClickoutside:l}=this;return l&&p.push([ho,this.onClickoutside,void 0,{capture:!0}]),ce(this.preset==="confirm"||this.preset==="dialog"?s(Wo,Object.assign({},this.$attrs,{class:[`${f}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},de(this.$props,Ho),{"aria-modal":"true"}),e):this.preset==="card"?s(jo,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${f}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},de(this.$props,Io),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=m,p)}})}})]}})),[[ke,this.displayDirective==="if"||this.displayed||this.show]]):null}}),Go=x([P("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),P("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[co({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),P("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[P("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),P("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[Co({duration:".25s",enterScale:".5"})])]),Jo=Object.assign(Object.assign(Object.assign(Object.assign({},E.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),Ce),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),nt=K({name:"Modal",inheritAttrs:!1,props:Jo,setup(e){const t=z(null),{mergedClsPrefixRef:n,namespaceRef:o,inlineThemeDisabled:a}=ge(e),u=E("Modal","-modal",Go,Yo,e,n),f=Ro(64),m=zo(),c=vo(),r=e.internalDialog?He(Vo,null):null,p=$o();function l(i){const{onUpdateShow:d,"onUpdate:show":$,onHide:O}=e;d&&L(d,i),$&&L($,i),O&&!i&&O(i)}function b(){const{onClose:i}=e;i?Promise.resolve(i()).then(d=>{d!==!1&&l(!1)}):l(!1)}function w(){const{onPositiveClick:i}=e;i?Promise.resolve(i()).then(d=>{d!==!1&&l(!1)}):l(!1)}function R(){const{onNegativeClick:i}=e;i?Promise.resolve(i()).then(d=>{d!==!1&&l(!1)}):l(!1)}function y(){const{onBeforeLeave:i,onBeforeHide:d}=e;i&&L(i),d&&d()}function g(){const{onAfterLeave:i,onAfterHide:d}=e;i&&L(i),d&&d()}function C(i){var d;const{onMaskClick:$}=e;$&&$(i),e.maskClosable&&!((d=t.value)===null||d===void 0)&&d.contains(uo(i))&&l(!1)}function v(i){var d;(d=e.onEsc)===null||d===void 0||d.call(e),e.show&&e.closeOnEsc&&ko(i)&&!p.value&&l(!1)}D(De,{getMousePosition:()=>{if(r){const{clickedRef:i,clickPositionRef:d}=r;if(i.value&&d.value)return d.value}return f.value?m.value:null},mergedClsPrefixRef:n,mergedThemeRef:u,isMountedRef:c,appearRef:ae(e,"internalAppear"),transformOriginRef:ae(e,"transformOrigin")});const B=F(()=>{const{common:{cubicBezierEaseOut:i},self:{boxShadow:d,color:$,textColor:O}}=u.value;return{"--n-bezier-ease-out":i,"--n-box-shadow":d,"--n-color":$,"--n-text-color":O}}),S=a?ve("theme-class",void 0,B,e):void 0;return{mergedClsPrefix:n,namespace:o,isMounted:c,containerRef:t,presetProps:F(()=>de(e,qo)),handleEsc:v,handleAfterLeave:g,handleClickoutside:C,handleBeforeLeave:y,doUpdateShow:l,handleNegativeClick:R,handlePositiveClick:w,handleCloseClick:b,cssVars:a?void 0:B,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e}=this;return s(yo,{to:this.to,show:this.show},{default:()=>{var t;(t=this.onRender)===null||t===void 0||t.call(this);const{unstableShowMask:n}=this;return ce(s("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},s(Uo,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:n?void 0:this.handleClickoutside,renderMask:n?()=>{var o;return s(Ae,{name:"fade-in-transition",key:"mask",appear:(o=this.internalAppear)!==null&&o!==void 0?o:this.isMounted},{default:()=>this.show?s("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[xo,{zIndex:this.zIndex,enabled:this.show}]])}})}});export{jo as N,nt as a};
