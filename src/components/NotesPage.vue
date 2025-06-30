<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const notesData = ref(JSON.parse(localStorage.getItem('notesData') || '{}'))

onMounted(() => {
  if (!notesData.value.topicName) {
    router.push({ name: 'learn' })
  }
})

function generateMarkdown(data) {
  let knowledgeGapsSection = '';
  
  // Check if we have new Q&A format
  if (data.gapAnswers && Object.keys(data.gapAnswers).length > 0) {
    knowledgeGapsSection = Object.entries(data.gapAnswers)
      .map(([question, answer]) => {
        const answerText = answer && answer.trim() ? answer : '_No answer provided yet_';
        return `**Q:** ${question}\n\n**A:** ${answerText}`;
      })
      .join('\n\n---\n\n');
  } else if (data.checkboxgroup && data.checkboxgroup.length > 0) {
    // Fallback to old checkbox format
    knowledgeGapsSection = data.checkboxgroup.map(item => `- [x] ${item}`).join('\n');
  }

  return `
# ${data.topicName}

## What the Book Says
${data.formaldef}

## The Big Picture
${data.zoomout}

## Analogy Playground
${data.textarea_3}

## Personal Connection
${data.textarea_4}

## In a paragraph
${data.textarea_5}

## One liner
${data.textarea_7}

## Brain Bloopers
${data.kg1}
${data.textarea_6}

## Knowledge Gaps - Questions & Answers
${knowledgeGapsSection}

## Explain Like I'm 5
${data.textarea_8}
`.trim()
}

function downloadMarkdown() {
  const markdown = generateMarkdown(notesData.value)
  const blob = new Blob([markdown], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${notesData.value.topicName || 'notes'}.md`
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="notes-page">
    <h2>🎉 Congratulations!</h2>
    <p class="congrats">
      You’ve just broken down a complex topic into simple, clear notes.<br>
      Be proud of your curiosity and effort!
    </p>
    <button class="download-btn" @click="downloadMarkdown">Download as Markdown</button>

    <div class="rendered-notes">
      <h1>{{ notesData.topicName }}</h1>

      <section v-if="notesData.formaldef">
        <h3>What the Book Says</h3>
        <p>{{ notesData.formaldef }}</p>
      </section>

      <section v-if="notesData.kg1">
        <h3>Unfamiliar Words</h3>
        <p>{{ notesData.kg1 }}</p>
      </section>

      <section v-if="notesData.zoomout">
        <h3>The Big Picture</h3>
        <p>{{ notesData.zoomout }}</p>
      </section>

      <section v-if="notesData.textarea_3">
        <h3>Analogy Playground</h3>
        <p>{{ notesData.textarea_3 }}</p>
      </section>

      <section v-if="notesData.textarea_4">
        <h3>Personal Connection</h3>
        <p>{{ notesData.textarea_4 }}</p>
      </section>

      <section v-if="notesData.textarea_5">
        <h3>In a paragraph</h3>
        <p>{{ notesData.textarea_5 }}</p>
      </section>

      <section v-if="notesData.textarea_7">
        <h3>One liner</h3>
        <p>{{ notesData.textarea_7 }}</p>
      </section>

      <section v-if="notesData.textarea_6">
        <h3>Brain Bloopers</h3>
        <p>{{ notesData.textarea_6 }}</p>
      </section>

      <section v-if="(notesData.gapAnswers && Object.keys(notesData.gapAnswers).length > 0) || (notesData.checkboxgroup && notesData.checkboxgroup.length)">
        <h3>Knowledge Gaps</h3>
        
        <!-- New Q&A format -->
        <div v-if="notesData.gapAnswers && Object.keys(notesData.gapAnswers).length > 0" class="qa-section">
          <div v-for="(answer, question) in notesData.gapAnswers" :key="question" class="qa-item">
            <div class="question">
              <strong>Q:</strong> {{ question }}
            </div>
            <div class="answer" v-if="answer && answer.trim()">
              <strong>A:</strong> {{ answer }}
            </div>
            <div class="answer no-answer" v-else>
              <em>No answer provided yet</em>
            </div>
          </div>
        </div>
        
        <!-- Fallback for old checkbox format -->
        <ul v-else-if="notesData.checkboxgroup && notesData.checkboxgroup.length">
          <li v-for="(item, idx) in notesData.checkboxgroup" :key="idx">
            <span>✅</span> {{ item }}
          </li>
        </ul>
      </section>

      <section v-if="notesData.textarea_8">
        <h3>Explain Like I'm 5</h3>
        <p>{{ notesData.textarea_8 }}</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.notes-page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px #0001;
}
.congrats {
  font-size: 1.15rem;
  color: #2563eb;
  margin-bottom: 1.5rem;
  font-weight: 500;
}
.download-btn {
  background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
  color: #fff;
  font-weight: 600;
  font-size: 1.08rem;
  padding: 0.7rem 1.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px 0 rgba(37,99,235,0.08);
  transition: background 0.2s, box-shadow 0.2s;
}
.download-btn:hover {
  background: linear-gradient(90deg, #1d4ed8 0%, #38bdf8 100%);
  box-shadow: 0 4px 16px 0 rgba(37,99,235,0.13);
}
.rendered-notes {
  background: #f3f6fa;
  border-radius: 8px;
  padding: 2rem 2rem 1.5rem 2rem;
  margin-top: 1.5rem;
}
.rendered-notes h1 {
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 1.2rem;
  font-weight: 700;
}
.rendered-notes h3 {
  color: #2563eb;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.15rem;
  font-weight: 600;
}
.rendered-notes p {
  color: #334155;
  font-size: 1.08rem;
  margin-bottom: 0.5rem;
}
.rendered-notes ul {
  margin: 0.5em 0 0 1.2em;
  padding: 0;
}
.rendered-notes li {
  font-size: 1.08rem;
  color: #2563eb;
  margin-bottom: 0.3em;
  list-style: none;
  display: flex;
  align-items: center;
}
.rendered-notes li span {
  margin-right: 0.5em;
}

.qa-section {
  margin: 1rem 0;
}

.qa-item {
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-left: 4px solid #2563eb;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.qa-item .question {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
}

.qa-item .answer {
  color: #334155;
  font-size: 1.08rem;
  line-height: 1.5;
}

.qa-item .answer.no-answer {
  color: #94a3b8;
  font-style: italic;
}
</style>