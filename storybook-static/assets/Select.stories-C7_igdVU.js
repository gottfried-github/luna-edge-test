import{j as e}from"./jsx-runtime-ieZikWJQ.js";import{r as q}from"./index-B1tThdBL.js";const j=({className:r,onClick:n})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:r||"",onClick:n,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})});j.__docgenInfo={description:"",methods:[],displayName:"XMark",props:{className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(ev: MouseEvent<SVGSVGElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"SVGSVGElement"}],raw:"MouseEvent<SVGSVGElement>"},name:"ev"}],return:{name:"void"}}},description:""}}};const z=({option:r,onDelete:n})=>{const s=a=>{a.stopPropagation()},t=a=>{a.stopPropagation(),n&&n(r)};return e.jsxs("div",{className:"flex items-center gap-1.5 rounded-3xl bg-stone-200 px-2.5 py-0.5 text-neutral-950",onClick:s,children:[r.label,e.jsx(j,{className:"w-4",onClick:t})]})};z.__docgenInfo={description:"",methods:[],displayName:"ChosenOption",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  value: string
  label: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: SelectOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string
  label: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""}}};const G=({className:r})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:r||"",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})});G.__docgenInfo={description:"",methods:[],displayName:"ChevronDown",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const L=({className:r})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:r||"",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"})});L.__docgenInfo={description:"",methods:[],displayName:"ChevronUp",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const W=({chosenOptions:r,onDeleteOption:n,onDeleteAllOptions:s,onClick:t,isOpen:a,isError:o,placeholder:l,disabled:p})=>{const d="relative flex h-10 items-center overflow-hidden rounded-lg border border-neutral-500 px-4",i=`${d} bg-neutral-50 hover:border-violet-700`,m=`${d} bg-neutral-300`,u=`${i} border-red-600`,c="absolute right-0 flex h-full items-center gap-1 pr-4 pl-2",w=`${c} bg-neutral-50`,h=`${c} bg-neutral-300`,T=g=>{g.stopPropagation(),s&&s()};return e.jsxs("div",{className:p?m:o?u:i,onClick:t,children:[e.jsx("div",{className:"flex items-center gap-2.5 text-neutral-500",children:r.length?r.map(g=>e.jsx(z,{option:g,onDelete:n},g.value)):l||null}),e.jsxs("div",{className:p?h:w,children:[r.length?e.jsx(j,{className:"w-[18px]",onClick:T}):null,a?e.jsx(L,{className:"w-[18px]"}):e.jsx(G,{className:"w-[18px]"})]})]})};W.__docgenInfo={description:"",methods:[],displayName:"SelectHead",props:{chosenOptions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"SelectOption[]"},description:""},onDeleteOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: SelectOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string
  label: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""},onDeleteAllOptions:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const $=({options:r,optionsFilterValue:n,onOptionsFilterChange:s,onChooseOption:t})=>{const a=o=>{s(o.target.value)};return e.jsxs("div",{className:"absolute mt-2 flex w-full flex-col gap-2 rounded-lg bg-neutral-50 p-1.5 shadow-md",children:[e.jsx("input",{type:"text",placeholder:"search",className:"w-full rounded-lg border border-neutral-500 px-4 py-2 hover:border-violet-700 focus:border-violet-700",value:n,onChange:a}),e.jsx("div",{className:"max-h-[150px] overflow-auto",children:r.map(o=>e.jsx("div",{onClick:()=>{t(o)},className:"px-4 py-0.5 hover:bg-stone-200",children:o.label},o.value))})]})};$.__docgenInfo={description:"",methods:[],displayName:"SelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"SelectOption[]"},description:""},optionsFilterValue:{required:!0,tsType:{name:"string"},description:""},onOptionsFilterChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onChooseOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: SelectOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string
  label: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""}}};const H=({chosenOptions:r,options:n,label:s,errorText:t,helperText:a,placeholder:o,disabled:l,onChange:p,onBlur:d})=>{const[i,m]=q.useState(!1),[u,c]=q.useState(""),w=q.useMemo(()=>(u?n.filter(y=>y.label.startsWith(u)):n).filter(y=>!r.find(K=>K.value===y.value)),[n,r,u]),h=()=>{c(""),m(!1)},T=()=>{l||(i?h():m(!0))},g=v=>{l||p(r.filter(y=>y.value!==v.value))},R=()=>{l||p([])},U=v=>{p([...r,v]),h(),d()},X=v=>{c(v)},J=()=>{h(),d()};return e.jsxs("div",{className:"flex flex-col gap-2",children:[s?e.jsx("div",{children:s}):null,e.jsxs("div",{className:"relative",children:[i?e.jsx("div",{className:"fixed top-0 left-0 h-screen w-screen",onClick:J}):null,e.jsx(W,{chosenOptions:r,onDeleteOption:g,onDeleteAllOptions:R,onClick:T,isOpen:i,isError:!!t,placeholder:o,disabled:l}),i?e.jsx($,{options:w,onChooseOption:U,optionsFilterValue:u,onOptionsFilterChange:X}):null]}),a&&!t?e.jsx("div",{children:a}):null,t?e.jsx("div",{className:"text-red-600",children:t}):null]})};H.__docgenInfo={description:"",methods:[],displayName:"Select",props:{chosenOptions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"SelectOption[]"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"SelectOption[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},errorText:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: SelectOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"SelectOption[]"},name:"v"}],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const P=({chosenOptions:r,options:n,label:s,errorText:t,helperText:a,placeholder:o,disabled:l,onChange:p,onBlur:d})=>{const[i,m]=q.useState(r),u=c=>{m(c)};return e.jsx(H,{chosenOptions:i,options:n,label:s,errorText:t,helperText:a,placeholder:o,disabled:l,onChange:u,onBlur:d})};P.__docgenInfo={description:"",methods:[],displayName:"SelectStoriesWrapper",props:{chosenOptions:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"SelectOption[]"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"SelectOption[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},errorText:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: SelectOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string
  label: string
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"SelectOption[]"},name:"v"}],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ee={component:P,tags:["autodocs"]},C=[{value:"bulbasaur",label:"bulbasaur"},{value:"ivysaur",label:"ivysaur"},{value:"venusaur",label:"venusaur"},{value:"charmander",label:"charmander"},{value:"charmeleon",label:"charmeleon"},{value:"charizard",label:"charizard"},{value:"squirtle",label:"squirtle"},{value:"wartortle",label:"wartortle"},{value:"blastoise",label:"blastoise"},{value:"caterpie",label:"caterpie"},{value:"metapod",label:"metapod"},{value:"butterfree",label:"butterfree"}],b={args:{chosenOptions:[],options:C,label:"Choose your pokemons",helperText:"This information is required",placeholder:"Choose your pokemons",onChange:()=>{},onBlur:()=>{}}},f={args:{chosenOptions:[{value:"bulbasaur",label:"bulbasaur"},{value:"charmeleon",label:"charmeleon"},{value:"charizard",label:"charizard"}],options:C,label:"Choose your pokemons",helperText:"This information is required",placeholder:"Choose your pokemons",onChange:()=>{},onBlur:()=>{}}},x={args:{chosenOptions:[{value:"bulbasaur",label:"bulbasaur"}],options:C,label:"Choose your pokemons",errorText:"you must pick 4 pokemons",helperText:"This information is required",placeholder:"Choose your pokemons",onChange:()=>{},onBlur:()=>{}}},k={args:{chosenOptions:[{value:"bulbasaur",label:"bulbasaur"}],options:C,label:"Choose your pokemons",helperText:"This information is required",placeholder:"Choose your pokemons",disabled:!0,onChange:()=>{},onBlur:()=>{}}};var O,S,N;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    chosenOptions: [],
    options: demoOptions,
    label: 'Choose your pokemons',
    helperText: 'This information is required',
    placeholder: 'Choose your pokemons',
    onChange: () => {},
    onBlur: () => {}
  }
}`,...(N=(S=b.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var E,_,D;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    chosenOptions: [{
      value: 'bulbasaur',
      label: 'bulbasaur'
    }, {
      value: 'charmeleon',
      label: 'charmeleon'
    }, {
      value: 'charizard',
      label: 'charizard'
    }],
    options: demoOptions,
    label: 'Choose your pokemons',
    helperText: 'This information is required',
    placeholder: 'Choose your pokemons',
    onChange: () => {},
    onBlur: () => {}
  }
}`,...(D=(_=f.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var B,A,F;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    chosenOptions: [{
      value: 'bulbasaur',
      label: 'bulbasaur'
    }],
    options: demoOptions,
    label: 'Choose your pokemons',
    errorText: 'you must pick 4 pokemons',
    helperText: 'This information is required',
    placeholder: 'Choose your pokemons',
    onChange: () => {},
    onBlur: () => {}
  }
}`,...(F=(A=x.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var I,M,V;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    chosenOptions: [{
      value: 'bulbasaur',
      label: 'bulbasaur'
    }],
    options: demoOptions,
    label: 'Choose your pokemons',
    helperText: 'This information is required',
    placeholder: 'Choose your pokemons',
    disabled: true,
    onChange: () => {},
    onBlur: () => {}
  }
}`,...(V=(M=k.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const re=["Empty","Chosen","Error","Disabled"];export{f as Chosen,k as Disabled,b as Empty,x as Error,re as __namedExportsOrder,ee as default};
