import{u as ye,a as Q}from"./UsuariosView-22ca6b86.js";import{e as xe}from"./Select-5be0465d.js";import{l as Z,g as ke,d as _e,m as T,n as _,o as Se,p as Ce,c as j,a as S,N as ee}from"./service-ec2a6b46.js";import{y as Be,a1 as Re,A as oe,a4 as i,M as I,N as v,O as te,q as $e,C as Ve,D as ae,k as K,E as Ue,l as U,R as C,ai as X,ax as m,G as ze,v as u,o as $,e as Y,w as V,h as b,u as o,aw as De,b as n,c as q,f as W,ay as G,F as Fe}from"./index-25a1633d.js";import{u as Ne}from"./use-notification-57096646.js";import{N as He,a as Me}from"./Modal-f3b9a53e.js";import"./Grid-d8533d20.js";import"./fade-in-scale-up.cssr-a8000d20.js";import"./FocusDetector-0b3afe92.js";import"./index-08439a80.js";const We={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},Oe=t=>{const{primaryColor:e,opacityDisabled:d,borderRadius:c,textColor3:h}=t,g="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},We),{iconColor:h,textColor:"white",loadingColor:e,opacityDisabled:d,railColor:g,railColorActive:e,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:c,railBorderRadiusMedium:c,railBorderRadiusLarge:c,buttonBorderRadiusSmall:c,buttonBorderRadiusMedium:c,buttonBorderRadiusLarge:c,boxShadowFocus:`0 0 0 2px ${Re(e,{alpha:.2})}`})},Ee={name:"Switch",common:Be,self:Oe},Ae=Ee,Pe=oe("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[i("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),i("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),i("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),oe("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Z({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),i("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),i("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),i("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),I("&:focus",[i("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),v("round",[i("rail","border-radius: calc(var(--n-rail-height) / 2);",[i("button","border-radius: calc(var(--n-button-height) / 2);")])]),te("disabled",[te("icon",[v("rubber-band",[v("pressed",[i("rail",[i("button","max-width: var(--n-button-width-pressed);")])]),i("rail",[I("&:active",[i("button","max-width: var(--n-button-width-pressed);")])]),v("active",[v("pressed",[i("rail",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),i("rail",[I("&:active",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),v("active",[i("rail",[i("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),i("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[i("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Z()]),i("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),v("active",[i("rail","background-color: var(--n-rail-color-active);")]),v("loading",[i("rail",`
 cursor: wait;
 `)]),v("disabled",[i("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Le=Object.assign(Object.assign({},ae.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let F;const Te=$e({name:"Switch",props:Le,setup(t){F===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?F=CSS.supports("width","max(1px)"):F=!1:F=!0);const{mergedClsPrefixRef:e,inlineThemeDisabled:d}=Ve(t),c=ae("Switch","-switch",Pe,Ae,t,e),h=ke(t),{mergedSizeRef:g,mergedDisabledRef:f}=h,p=K(t.defaultValue),r=Ue(t,"value"),a=_e(r,p),z=U(()=>a.value===t.checkedValue),B=K(!1),l=K(!1),w=U(()=>{const{railStyle:s}=t;if(s)return s({focused:l.value,checked:z.value})});function y(s){const{"onUpdate:value":N,onChange:H,onUpdateValue:M}=t,{nTriggerFormInput:O,nTriggerFormChange:E}=h;N&&j(N,s),M&&j(M,s),H&&j(H,s),p.value=s,O(),E()}function re(){const{nTriggerFormFocus:s}=h;s()}function ie(){const{nTriggerFormBlur:s}=h;s()}function se(){t.loading||f.value||(a.value!==t.checkedValue?y(t.checkedValue):y(t.uncheckedValue))}function ne(){l.value=!0,re()}function le(){l.value=!1,ie(),B.value=!1}function de(s){t.loading||f.value||s.key===" "&&(a.value!==t.checkedValue?y(t.checkedValue):y(t.uncheckedValue),B.value=!1)}function ue(s){t.loading||f.value||s.key===" "&&(s.preventDefault(),B.value=!0)}const J=U(()=>{const{value:s}=g,{self:{opacityDisabled:N,railColor:H,railColorActive:M,buttonBoxShadow:O,buttonColor:E,boxShadowFocus:ce,loadingColor:he,textColor:pe,iconColor:be,[C("buttonHeight",s)]:x,[C("buttonWidth",s)]:fe,[C("buttonWidthPressed",s)]:ve,[C("railHeight",s)]:k,[C("railWidth",s)]:D,[C("railBorderRadius",s)]:me,[C("buttonBorderRadius",s)]:ge},common:{cubicBezierEaseInOut:we}}=c.value;let A,P,L;return F?(A=`calc((${k} - ${x}) / 2)`,P=`max(${k}, ${x})`,L=`max(${D}, calc(${D} + ${x} - ${k}))`):(A=X((m(k)-m(x))/2),P=X(Math.max(m(k),m(x))),L=m(k)>m(x)?D:X(m(D)+m(x)-m(k))),{"--n-bezier":we,"--n-button-border-radius":ge,"--n-button-box-shadow":O,"--n-button-color":E,"--n-button-width":fe,"--n-button-width-pressed":ve,"--n-button-height":x,"--n-height":P,"--n-offset":A,"--n-opacity-disabled":N,"--n-rail-border-radius":me,"--n-rail-color":H,"--n-rail-color-active":M,"--n-rail-height":k,"--n-rail-width":D,"--n-width":L,"--n-box-shadow-focus":ce,"--n-loading-color":he,"--n-text-color":pe,"--n-icon-color":be}}),R=d?ze("switch",U(()=>g.value[0]),J,t):void 0;return{handleClick:se,handleBlur:le,handleFocus:ne,handleKeyup:de,handleKeydown:ue,mergedRailStyle:w,pressed:B,mergedClsPrefix:e,mergedValue:a,checked:z,mergedDisabled:f,cssVars:d?void 0:J,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:e,checked:d,mergedRailStyle:c,onRender:h,$slots:g}=this;h==null||h();const{checked:f,unchecked:p,icon:r,"checked-icon":a,"unchecked-icon":z}=g,B=!(T(r)&&T(a)&&T(z));return u("div",{role:"switch","aria-checked":d,class:[`${t}-switch`,this.themeClass,B&&`${t}-switch--icon`,d&&`${t}-switch--active`,e&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},u("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:c},_(f,l=>_(p,w=>l||w?u("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},u("div",{class:`${t}-switch__rail-placeholder`},u("div",{class:`${t}-switch__button-placeholder`}),l),u("div",{class:`${t}-switch__rail-placeholder`},u("div",{class:`${t}-switch__button-placeholder`}),w)):null)),u("div",{class:`${t}-switch__button`},_(r,l=>_(a,w=>_(z,y=>u(Se,null,{default:()=>this.loading?u(Ce,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(w||l)?u("div",{class:`${t}-switch__button-icon`,key:w?"checked-icon":"icon"},w||l):!this.checked&&(y||l)?u("div",{class:`${t}-switch__button-icon`,key:y?"unchecked-icon":"icon"},y||l):null})))),_(f,l=>l&&u("div",{key:"checked",class:`${t}-switch__checked`},l)),_(p,l=>l&&u("div",{key:"unchecked",class:`${t}-switch__unchecked`},l)))))}}),je=n("h2",{class:"uppercase font-bold text-xl"}," Formulario de usuarios ",-1),Ie=n("hr",{class:"my-3"},null,-1),Ke={class:"mb-3"},Xe=n("p",{class:"uppercase font-bold"},"correo",-1),Ye={class:"mb-3"},qe=n("p",{class:"uppercase font-bold"},"nombre",-1),Ge={class:"mb-3"},Je=n("p",{class:"uppercase font-bold"},"apellido",-1),Qe={class:"mb-3"},Ze=n("p",{class:"uppercase font-bold"},"mina",-1),eo={class:"mb-3"},oo=n("p",{class:"uppercase font-bold"},"area",-1),to={class:"mb-3"},ao=n("p",{class:"uppercase font-bold"},"rol",-1),ro={key:0,class:"flex items-center justify-end my-3"},io=n("p",{class:"mr-3 uppercase"},"Editar contraseña",-1),so={class:"mb-3"},no=n("p",{class:"uppercase font-bold"},"contraseña",-1),lo={class:"mb-3"},uo=n("p",{class:"uppercase font-bold"},"confirmar contraseña",-1),co={key:2,class:"flex justify-end"},ko={__name:"FormularioComponent",setup(t){const e=ye(),d=Ne(),c=async()=>{if(e.passwordEditar){if(!e.camposLlenos){d.error({duration:2500,content:"Campos vacios",meta:"Debe de llenar todos los campos para crear un usuario",keepAliveOnHover:!0});return}if(!e.passwordCorrecto){d.error({duration:2500,content:"Password incorrecto",meta:"El password de verificacion no coincide",keepAliveOnHover:!0});return}}else delete e.usuario.password;try{const p=await Q.update(e.usuarioId,e.usuario);e.usuario.password,e.actualizarUsuarios(),e.ocultarModalUsuario(),d.success({duration:2500,content:"registro exitoso",meta:"Se ha editado al usuario de forma exitosa",keepAliveOnHover:!0})}catch(p){console.log(p),d.error({duration:2500,content:"ocurrio un error",meta:"El registro no se ha podido crear",keepAliveOnHover:!0})}},h=async()=>{if(!e.camposLlenos){d.error({duration:2500,content:"Campos vacios",meta:"Debe de llenar todos los campos para crear un usuario",keepAliveOnHover:!0});return}if(!e.passwordCorrecto){d.error({duration:2500,content:"Password incorrecto",meta:"El password de verificacion no coincide",keepAliveOnHover:!0});return}try{const p=await Q.create(e.usuario);e.actualizarUsuarios(),e.ocultarModalUsuario(),d.success({duration:2500,content:"registro exitoso",meta:"Se ha creado al usuario de forma exitosa",keepAliveOnHover:!0})}catch(p){console.log(p),d.error({duration:2500,content:"ocurrio un error",meta:"El registro no se ha podido crear",keepAliveOnHover:!0})}},g=U(()=>[{label:"administrador",value:1},{label:"supervisor",value:2},{label:"operador",value:3}]),f=U(()=>({width:"33.3%"}));return(p,r)=>($(),Y(o(Me),{show:o(e).modalUsuario,"onUpdate:show":r[9]||(r[9]=a=>o(e).modalUsuario=a)},{default:V(()=>[b(o(He),{style:De(o(f))},{default:V(()=>[je,Ie,n("section",null,[n("article",Ke,[Xe,b(o(S),{readonly:o(e).mostrarDatos,value:o(e).usuario.correo,"onUpdate:value":r[0]||(r[0]=a=>o(e).usuario.correo=a)},null,8,["readonly","value"])]),n("article",Ye,[qe,b(o(S),{readonly:o(e).mostrarDatos,value:o(e).usuario.nombre,"onUpdate:value":r[1]||(r[1]=a=>o(e).usuario.nombre=a)},null,8,["readonly","value"])]),n("article",Ge,[Je,b(o(S),{readonly:o(e).mostrarDatos,value:o(e).usuario.apellido,"onUpdate:value":r[2]||(r[2]=a=>o(e).usuario.apellido=a)},null,8,["readonly","value"])]),n("article",Qe,[Ze,b(o(S),{readonly:o(e).mostrarDatos,value:o(e).usuario.mina,"onUpdate:value":r[3]||(r[3]=a=>o(e).usuario.mina=a)},null,8,["readonly","value"])]),n("article",eo,[oo,b(o(S),{readonly:o(e).mostrarDatos,value:o(e).usuario.area,"onUpdate:value":r[4]||(r[4]=a=>o(e).usuario.area=a)},null,8,["readonly","value"])]),n("article",to,[ao,b(o(xe),{value:o(e).usuario.rol,"onUpdate:value":r[5]||(r[5]=a=>o(e).usuario.rol=a),disabled:o(e).mostrarDatos,options:o(g)},null,8,["value","disabled","options"])]),o(e).editarDatos?($(),q("section",ro,[io,b(o(Te),{value:o(e).passwordEditar,"onUpdate:value":r[6]||(r[6]=a=>o(e).passwordEditar=a)},{checked:V(()=>[W(" SI ")]),unchecked:V(()=>[W(" NO ")]),_:1},8,["value"])])):G("",!0),o(e).crearDatos||o(e).editarDatos&&o(e).passwordEditar?($(),q(Fe,{key:1},[n("article",so,[no,b(o(S),{type:"password",value:o(e).usuario.password,"onUpdate:value":r[7]||(r[7]=a=>o(e).usuario.password=a)},null,8,["value"])]),n("article",lo,[uo,b(o(S),{type:"password",value:o(e).verificacionPassword,"onUpdate:value":r[8]||(r[8]=a=>o(e).verificacionPassword=a)},null,8,["value"])])],64)):G("",!0),o(e).editarDatos||o(e).crearDatos?($(),q("footer",co,[o(e).editarDatos?($(),Y(o(ee),{key:0,onClick:c},{default:V(()=>[W(" Editar usuario ")]),_:1})):($(),Y(o(ee),{key:1,onClick:h},{default:V(()=>[W(" Crear usuario ")]),_:1}))])):G("",!0)])]),_:1},8,["style"])]),_:1},8,["show"]))}};export{ko as default};
