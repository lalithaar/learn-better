import{_ as x,r as _,i as y,u as w,a as s,b as o,h as p,f as i,t as r,F as d,d as g,o as l}from"./index-2yByjq1T.js";const b={class:"notes-page"},h={class:"rendered-notes"},f={key:0},$={key:1},A={key:2},B={key:3},N={key:4},j={key:5},O={key:6},P={key:7},L={key:8},I={key:0,class:"qa-section"},S={class:"question"},C={key:0,class:"answer"},R={key:1,class:"answer no-answer"},U={key:1},D={key:9},E={__name:"NotesPage",setup(M){const k=w(),t=_(JSON.parse(localStorage.getItem("notesData")||"{}"));y(()=>{t.value.topicName||k.push({name:"learn"})});function v(n){let e="";return n.gapAnswers&&Object.keys(n.gapAnswers).length>0?e=Object.entries(n.gapAnswers).map(([a,u])=>{const m=u&&u.trim()?u:"_No answer provided yet_";return`**Q:** ${a}

**A:** ${m}`}).join(`

---

`):n.checkboxgroup&&n.checkboxgroup.length>0&&(e=n.checkboxgroup.map(a=>`- [x] ${a}`).join(`
`)),`
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

## Knowledge Gaps - Questions & Answers
${e}

## Explain Like I'm 5
${n.textarea_8}
`.trim()}function c(){const n=v(t.value),e=new Blob([n],{type:"text/markdown"}),a=URL.createObjectURL(e),u=document.createElement("a");u.href=a,u.download=`${t.value.topicName||"notes"}.md`,u.click(),URL.revokeObjectURL(a)}return(n,e)=>(l(),s("div",b,[e[14]||(e[14]=o("h2",null,"🎉 Congratulations!",-1)),e[15]||(e[15]=o("p",{class:"congrats"},[p(" You’ve just broken down a complex topic into simple, clear notes."),o("br"),p(" Be proud of your curiosity and effort! ")],-1)),o("button",{class:"download-btn",onClick:c},"Download as Markdown"),o("div",h,[o("h1",null,r(t.value.topicName),1),t.value.formaldef?(l(),s("section",f,[e[0]||(e[0]=o("h3",null,"What the Book Says",-1)),o("p",null,r(t.value.formaldef),1)])):i("",!0),t.value.kg1?(l(),s("section",$,[e[1]||(e[1]=o("h3",null,"Unfamiliar Words",-1)),o("p",null,r(t.value.kg1),1)])):i("",!0),t.value.zoomout?(l(),s("section",A,[e[2]||(e[2]=o("h3",null,"The Big Picture",-1)),o("p",null,r(t.value.zoomout),1)])):i("",!0),t.value.textarea_3?(l(),s("section",B,[e[3]||(e[3]=o("h3",null,"Analogy Playground",-1)),o("p",null,r(t.value.textarea_3),1)])):i("",!0),t.value.textarea_4?(l(),s("section",N,[e[4]||(e[4]=o("h3",null,"Personal Connection",-1)),o("p",null,r(t.value.textarea_4),1)])):i("",!0),t.value.textarea_5?(l(),s("section",j,[e[5]||(e[5]=o("h3",null,"In a paragraph",-1)),o("p",null,r(t.value.textarea_5),1)])):i("",!0),t.value.textarea_7?(l(),s("section",O,[e[6]||(e[6]=o("h3",null,"One liner",-1)),o("p",null,r(t.value.textarea_7),1)])):i("",!0),t.value.textarea_6?(l(),s("section",P,[e[7]||(e[7]=o("h3",null,"Brain Bloopers",-1)),o("p",null,r(t.value.textarea_6),1)])):i("",!0),t.value.gapAnswers&&Object.keys(t.value.gapAnswers).length>0||t.value.checkboxgroup&&t.value.checkboxgroup.length?(l(),s("section",L,[e[12]||(e[12]=o("h3",null,"Knowledge Gaps",-1)),t.value.gapAnswers&&Object.keys(t.value.gapAnswers).length>0?(l(),s("div",I,[(l(!0),s(d,null,g(t.value.gapAnswers,(a,u)=>(l(),s("div",{key:u,class:"qa-item"},[o("div",S,[e[8]||(e[8]=o("strong",null,"Q:",-1)),p(" "+r(u),1)]),a&&a.trim()?(l(),s("div",C,[e[9]||(e[9]=o("strong",null,"A:",-1)),p(" "+r(a),1)])):(l(),s("div",R,e[10]||(e[10]=[o("em",null,"No answer provided yet",-1)])))]))),128))])):t.value.checkboxgroup&&t.value.checkboxgroup.length?(l(),s("ul",U,[(l(!0),s(d,null,g(t.value.checkboxgroup,(a,u)=>(l(),s("li",{key:u},[e[11]||(e[11]=o("span",null,"✅",-1)),p(" "+r(a),1)]))),128))])):i("",!0)])):i("",!0),t.value.textarea_8?(l(),s("section",D,[e[13]||(e[13]=o("h3",null,"Explain Like I'm 5",-1)),o("p",null,r(t.value.textarea_8),1)])):i("",!0)])]))}},z=x(E,[["__scopeId","data-v-b0465454"]]);export{z as default};
