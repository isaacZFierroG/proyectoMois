import{_ as c,t as n,r as i,o as s,c as p,i as d,k as l}from"./index.3af4880e.js";const _={props:{datos:{type:Array,default:[]}},setup(e){const{datos:t}=n(e),a={chart:{id:"grafica-datos"},xaxis:{categories:[1,2,3,4,5,6,7,8,9,10]}};return console.log(t),{chartOptions:a,datos:t}}};function f(e,t,a,o,m,h){const r=i("apexchart");return s(),p("div",null,[o.datos?(s(),d(r,{key:0,width:"100%",type:"line",options:o.chartOptions,series:o.datos},null,8,["options","series"])):l("",!0)])}const x=c(_,[["render",f]]);export{x as default};
