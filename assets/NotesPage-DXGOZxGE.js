import{_ as x,r as v,j as _,u as c,a as l,b as t,h as p,f as s,t as r,F as g,d as y,o as a}from"./index-fLkJ72O_.js";const f={class:"notes-page"},h={class:"rendered-notes"},b={key:0},B={key:1},$={key:2},w={key:3},N={key:4},P={key:5},L={key:6},I={key:7},j={key:8},C={key:9},O={__name:"NotesPage",setup(R){const d=c(),o=v(JSON.parse(localStorage.getItem("notesData")||"{}"));_(()=>{o.value.topicName||d.push({name:"learn"})});function k(n){return`
# ${n.topicName}

## What the Book Says
${n.formaldef}

## The Big Picture
${n.zoomout}

## Analogy Playground
${n.textarea_3}

## Personal Connection
${n.textarea_4}

## In a paragraph
${n.textarea_5}

## One liner
${n.textarea_7}

## Brain Bloopers
${n.kg1}
${n.textarea_6}

${(n.checkboxgroup||[]).map(e=>`- [x] ${e}`).join(`
`)}

## Explain Like I'm 5
${n.textarea_8}
`.trim()}function m(){const n=k(o.value),e=new Blob([n],{type:"text/markdown"}),i=URL.createObjectURL(e),u=document.createElement("a");u.href=i,u.download=`${o.value.topicName||"notes"}.md`,u.click(),URL.revokeObjectURL(i)}return(n,e)=>(a(),l("div",f,[e[11]||(e[11]=t("h2",null,"🎉 Congratulations!",-1)),e[12]||(e[12]=t("p",{class:"congrats"},[p(" You’ve just broken down a complex topic into simple, clear notes."),t("br"),p(" Be proud of your curiosity and effort! ")],-1)),t("button",{class:"download-btn",onClick:m},"Download as Markdown"),t("div",h,[t("h1",null,r(o.value.topicName),1),o.value.formaldef?(a(),l("section",b,[e[0]||(e[0]=t("h3",null,"What the Book Says",-1)),t("p",null,r(o.value.formaldef),1)])):s("",!0),o.value.kg1?(a(),l("section",B,[e[1]||(e[1]=t("h3",null,"Unfamiliar Words",-1)),t("p",null,r(o.value.kg1),1)])):s("",!0),o.value.zoomout?(a(),l("section",$,[e[2]||(e[2]=t("h3",null,"The Big Picture",-1)),t("p",null,r(o.value.zoomout),1)])):s("",!0),o.value.textarea_3?(a(),l("section",w,[e[3]||(e[3]=t("h3",null,"Analogy Playground",-1)),t("p",null,r(o.value.textarea_3),1)])):s("",!0),o.value.textarea_4?(a(),l("section",N,[e[4]||(e[4]=t("h3",null,"Personal Connection",-1)),t("p",null,r(o.value.textarea_4),1)])):s("",!0),o.value.textarea_5?(a(),l("section",P,[e[5]||(e[5]=t("h3",null,"In a paragraph",-1)),t("p",null,r(o.value.textarea_5),1)])):s("",!0),o.value.textarea_7?(a(),l("section",L,[e[6]||(e[6]=t("h3",null,"One liner",-1)),t("p",null,r(o.value.textarea_7),1)])):s("",!0),o.value.textarea_6?(a(),l("section",I,[e[7]||(e[7]=t("h3",null,"Brain Bloopers",-1)),t("p",null,r(o.value.textarea_6),1)])):s("",!0),o.value.checkboxgroup&&o.value.checkboxgroup.length?(a(),l("section",j,[e[9]||(e[9]=t("h3",null,"Knowledge Gaps",-1)),t("ul",null,[(a(!0),l(g,null,y(o.value.checkboxgroup,(i,u)=>(a(),l("li",{key:u},[e[8]||(e[8]=t("span",null,"✅",-1)),p(" "+r(i),1)]))),128))])])):s("",!0),o.value.textarea_8?(a(),l("section",C,[e[10]||(e[10]=t("h3",null,"Explain Like I'm 5",-1)),t("p",null,r(o.value.textarea_8),1)])):s("",!0)])]))}},U=x(O,[["__scopeId","data-v-7c751269"]]);export{U as default};
