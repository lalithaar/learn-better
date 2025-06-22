import{_ as x,r as v,j as _,u as g,a as l,b as t,h as p,f as r,t as s,F as c,d as f,o as a}from"./index-Dg-hV58x.js";const y={class:"notes-page"},b={class:"rendered-notes"},h={key:0},w={key:1},$={key:2},N={key:3},P={key:4},E={key:5},L={key:6},R={key:7},S={key:8},D={key:9},U={__name:"NotesPage",setup(j){const d=g(),o=v(JSON.parse(localStorage.getItem("notesData")||"{}"));_(()=>{o.value.topicName||d.push({name:"learn"})});function k(n){return`
# ${n.topicName}

## Textbook Definition
${n.formaldef}

## Unfamiliar Words
${n.kg1}

## Zoom Out
${n.zoomout}

## Analogy
${n.textarea_3}

## Relate
${n.textarea_4}

## Plain English (Paragraph)
${n.textarea_5}

## Plain English (Sentence)
${n.textarea_7}

## Stuck Points
${n.textarea_6}

## Knowledge Gaps
${(n.checkboxgroup||[]).map(e=>`- [x] ${e}`).join(`
`)}

## Explain Like I'm 5
${n.textarea_8}
`.trim()}function m(){const n=k(o.value),e=new Blob([n],{type:"text/markdown"}),i=URL.createObjectURL(e),u=document.createElement("a");u.href=i,u.download=`${o.value.topicName||"notes"}.md`,u.click(),URL.revokeObjectURL(i)}return(n,e)=>(a(),l("div",y,[e[11]||(e[11]=t("h2",null,"🎉 Congratulations!",-1)),e[12]||(e[12]=t("p",{class:"congrats"},[p(" You’ve just broken down a complex topic into simple, clear notes."),t("br"),p(" Be proud of your curiosity and effort! ")],-1)),t("button",{class:"download-btn",onClick:m},"Download as Markdown"),t("div",b,[t("h1",null,s(o.value.topicName),1),o.value.formaldef?(a(),l("section",h,[e[0]||(e[0]=t("h3",null,"Textbook Definition",-1)),t("p",null,s(o.value.formaldef),1)])):r("",!0),o.value.kg1?(a(),l("section",w,[e[1]||(e[1]=t("h3",null,"Unfamiliar Words",-1)),t("p",null,s(o.value.kg1),1)])):r("",!0),o.value.zoomout?(a(),l("section",$,[e[2]||(e[2]=t("h3",null,"Zoom Out",-1)),t("p",null,s(o.value.zoomout),1)])):r("",!0),o.value.textarea_3?(a(),l("section",N,[e[3]||(e[3]=t("h3",null,"Analogy",-1)),t("p",null,s(o.value.textarea_3),1)])):r("",!0),o.value.textarea_4?(a(),l("section",P,[e[4]||(e[4]=t("h3",null,"Relate",-1)),t("p",null,s(o.value.textarea_4),1)])):r("",!0),o.value.textarea_5?(a(),l("section",E,[e[5]||(e[5]=t("h3",null,"Plain English (Paragraph)",-1)),t("p",null,s(o.value.textarea_5),1)])):r("",!0),o.value.textarea_7?(a(),l("section",L,[e[6]||(e[6]=t("h3",null,"Plain English (Sentence)",-1)),t("p",null,s(o.value.textarea_7),1)])):r("",!0),o.value.textarea_6?(a(),l("section",R,[e[7]||(e[7]=t("h3",null,"Stuck Points",-1)),t("p",null,s(o.value.textarea_6),1)])):r("",!0),o.value.checkboxgroup&&o.value.checkboxgroup.length?(a(),l("section",S,[e[9]||(e[9]=t("h3",null,"Knowledge Gaps",-1)),t("ul",null,[(a(!0),l(c,null,f(o.value.checkboxgroup,(i,u)=>(a(),l("li",{key:u},[e[8]||(e[8]=t("span",null,"✅",-1)),p(" "+s(i),1)]))),128))])])):r("",!0),o.value.textarea_8?(a(),l("section",D,[e[10]||(e[10]=t("h3",null,"Explain Like I'm 5",-1)),t("p",null,s(o.value.textarea_8),1)])):r("",!0)])]))}},O=x(U,[["__scopeId","data-v-a20ae905"]]);export{O as default};
