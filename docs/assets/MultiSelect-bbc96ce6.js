import{_ as i,M as u,r as p,o as s,c as n,a as m,w as _,f as g,v as d,t as o,e as v,b as a}from"./index-9408c43d.js";const f={components:{Multiselect:u},data(){return{value:[],options:[{name:"Vue.js",language:"JavaScript"},{name:"Adonis",language:"JavaScript"},{name:"Rails",language:"Ruby"},{name:"Sinatra",language:"Ruby"},{name:"Laravel",language:"PHP"},{name:"Phoenix",language:"Elixir"}]}}},h=a("label",{class:"typo__label"},"Simple select / dropdown",-1),y={class:"language-json"};function S(b,l,x,V,e,k){const c=p("multiselect");return s(),n("div",null,[h,m(c,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),options:e.options,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,placeholder:"Pick some",label:"name","track-by":"name","preselect-first":!0},{selection:_(({values:t,search:w,isOpen:r})=>[t.length?g((s(),n("span",{key:0,class:"multiselect__single"},o(t.length)+" options selected",513)),[[d,!r]]):v("",!0)]),_:1},8,["modelValue","options"]),a("pre",y,[a("code",null,o(e.value),1)])])}const P=i(f,[["render",S]]);export{P as default};
