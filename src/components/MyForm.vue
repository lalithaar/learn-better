<template>
  <!-- <h4 v-if="formData.value !== {}">
      <strong>Topic:</strong> {{ formData.value?.topicName ?? '' }}<br>
    </h4> -->
  <div class="stepper-container">
    <!-- Vertical Step Bar -->
    <ul class="stepper">
      <li
        v-for="(label, idx) in steps"
        :key="label"
        :class="['stepper-step', { active: step === idx + 1 }]"
      >
        <span class="stepper-index">{{ idx + 1 }}</span>
        <span>{{ label }}</span>
      </li>
    </ul>

    <!-- Multi-step Form -->
    <div class="form-card">
      <form @submit.prevent="handleSubmit">
        <!-- Step 1: Topic -->
        <div v-if="step === 1">
          <div class="group">
            <label for="topicName">
              Enter the topic you want to understand better
            </label>
            <textarea
              id="topicName"
              name="topicName"
              v-model="formData.topicName"
              placeholder="Example Topic: e.g. Gravity, Photosynthesis, The Pythagorean Theorem, directional derivatives"
              rows="2"
            ></textarea>
            <small>
              Pick a concept that's small enough to stand on its own, but rich enough to explain.<br>
              A good rule of thumb:<br>
              Not a whole field (“nutrition”)<br>
              Not just a word (“protein”)<br>
              → But something like: “How your body uses protein to build muscle"<br>
              If you're unsure, just write what's on your mind—you can always refine it later!
            </small>
          </div>
        </div>

        <!-- Step 2: Textbook Definition -->
        <div v-if="step === 2">
          <div class="group">
            <label for="formaldef">
              What's the textbook definition of the topic?
            </label>
            <textarea
              id="formaldef"
              name="formaldef"
              v-model="formData.formaldef"
              placeholder="Gravity is the force that pulls objects toward each other. For example, it keeps us on the ground and makes things fall."
              rows="3"
            ></textarea>
            <small>
              Copy it from your textbook, class notes, or Wikipedia.
              This is your launch point — even if it makes no sense to you yet.
              You're not supposed to get it all at once.
            </small>
          </div>
            <div class="group">
            <label for="kg1">
              List down the unfamiliar words or phrases from the definition
            </label>
            <textarea
              id="kg1"
              name="kg1"
              v-model="formData.kg1"
              placeholder="force, mass, acceleration, attraction"
              rows="2"
            ></textarea>
            <small>
              Go through your definition. What parts confuse you? Add those here.
              It's totally okay if it's the whole sentence.
              You're not supposed to know it all — that's what this tool is for.<br><br>
              It's so so common and so okay if you don't get a single word at all, please be gentle with yourself, <em>we will learn to understand better</em>
            </small>
          </div>
        </div>

        <!-- Step 3: Zoom out -->
        <div v-if="step === 3">
          <div class="group">
            <label for="zoomout">
              Zoom out — where does this topic live?
            </label>
            <textarea
              id="zoomout"
              name="zoomout"
              v-model="formData.zoomout"
              placeholder="Gravity is part of physics. It connects to things like motion, planets orbiting the sun, and why things fall down."
              rows="3"
            ></textarea>
            <small>
              Try to name the bigger ideas or steps that lead up to this one. You don't have to explain them fully — just see if you get the neighborhood.<br><br>
              Explain in your own words, you are the only one to see these notes so don't be afraid of any grammar or typos.<br>
              You are doing great :> <br>
              Remember, you're just mapping the neighborhood, not building the whole city!
            </small>
          </div>
        </div>

        <!-- Step 4: Analogy -->
        <div v-if="step === 4">
          <h4>Build the Bridge Part - 1</h4>
          <div class="group">
            <label for="textarea_3">
              Can you perhaps try to describe the topic with what it's like?
            </label>
            <textarea
              id="textarea_3"
              name="textarea_3"
              v-model="formData.textarea_3"
              placeholder="Gravity is like an invisible magnet that pulls everything toward the ground."
              rows="3"
            ></textarea>
            <small>
              Feel free to let your mind run wild, it doesn't have to make sense for anyone as long as it does for you<br><br>
              Feel free to use chatgpt or other AI to ask 'I am learning [x] topic, can you please give me a good real world analogy to help me understand?'<br><br>
              Key is, you don't have to know what it is yet, just know what <em> it is like </em>
            </small>
          </div>
        </div>

        <!-- Step 5: Relate -->
        <div v-if="step === 5">
          <h4>Build the Bridge Part - 2</h4>
          <div class="group">
            <label for="textarea_4">
              Play around with the topic
            </label>
            <textarea
              id="textarea_4"
              name="textarea_4"
              v-model="formData.textarea_4"
              placeholder="When I jump, gravity pulls me back down. It's why my basketball falls through the hoop. It's also why the moon orbits Earth."
              rows="3"
            ></textarea>
            <small>
              Find how this topic shows up in your real life or the things you care about.
              Don't settle for textbook examples — play with it.
              Someone smart made connections. Now you get to make yours
              <br>
              Try thinking: “Where have I seen this in real life?” or “How would I explain this to a friend?”
            </small>
          </div>
        </div>

        <!-- Step 6: Plain English -->
        <div v-if="step === 6">
          <div class="group">
            <label for="textarea_5">
              Try to explain the topic in plain english in a single paragraph
            </label>
            <textarea
              id="textarea_5"
              name="textarea_5"
              v-model="formData.textarea_5"
              placeholder="Gravity is a force that pulls things toward each other. It's what keeps us on the ground and makes things fall when we drop them."
              rows="3"
            ></textarea>
            <small>
              It's so okay if you feel stuck, just note down the exact place you are stuck below<br><br>
            </small>
          </div>
          <div class="group">
            <label for="textarea_7">
              Try to explain the topic in plain english in a single sentence
            </label>
            <textarea
              id="textarea_7"
              name="textarea_7"
              v-model="formData.textarea_7"
              placeholder="Gravity pulls everything down."
              rows="1"
            ></textarea>
            <small>
              It's so okay if you feel stuck, just note down the exact place you are stuck below<br><br>
            </small>
          </div>
          <div class="group">
            <label for="textarea_6">
              Words or steps you feel stuck at?
            </label>
            <textarea
              id="textarea_6"
              name="textarea_6"
              v-model="formData.textarea_6"
              placeholder="Why don't we feel gravity pulling us sideways?
              How does gravity work in space?
              Why do astronauts float?"
              rows="3"
            ></textarea>
            <small>
              Press enter to use a new line for every word / phrase you don't quite get, yet!
            </small>
          </div>
        </div>

        <!-- Step 7:  Knowledge Gaps-->
        <div v-if="step === 7">

          <h3>Last lap little buddy, we are almost there</h3>
          <div>Let's clear up the Gaps</div>
          <label>Here's what's still a little fuzzy - let's solve them one by one</label>
          <small>
            Search them up, refer to textbooks / YouTube videos / chatgpt and write your understanding for each doubt below
          </small>

          <div class="group question-answer-group">
            <div
              v-for="(item, index) in gapList"
              :key="index"
              class="question-answer-item"
            >
              <label :for="'gap-answer-' + index" class="question-label">
                {{ item }}
              </label>
              <textarea
                :id="'gap-answer-' + index"
                v-model="formData.gapAnswers[item]"
                :placeholder="`Write your understanding or solution for: ${item}`"
                rows="3"
                class="answer-textarea"
              ></textarea>
            </div>
          </div>

          <div class="tips">
            <p>Try these to clear the fuzz:</p>
            <ul>
              <li>🔍 Re-read the original definition and see if it makes more sense now.</li>
              <li>🔗 Pick two confusing bits — can you tell how they connect?</li>
              <li>📚 Search YouTube or Google with “[term] explained for beginners.”</li>
              <li>💬 Ask ChatGPT or another AI: “Explain [term] like a bedtime story” or “Help me connect [term 1] and [term 2]”</li>
              <li>🧠 Say it out loud like you're teaching a friend.</li>
              <li>✏️ Sketch it or draw boxes and arrows — visuals help more than we think.</li>
            </ul>
          </div>
        </div>

        <!-- Step 8: Explain like I am 5 -->
        <div v-if="step === 8">
          <div class="group">
            <label for="textarea_8">
              We have a very curious 5 year old here ( or 12 but aim for 5 :> )
            </label>
            <textarea
              id="textarea_8"
              name="textarea_8"
              v-model="formData.textarea_8"
              placeholder="Gravity is like a big invisible hand that keeps your feet on the ground and makes your ball come back down when you throw it up."
              rows="4"
            ></textarea>
            <small>
              We've got a very curious 5-year-old here. Use stories, voices, wild metaphors — anything to make them go ohhhh!<br><br>
              Imagine you’re telling a bedtime story, or explaining to your younger self. <br>
              The key is, to explain the topic in a way that the kid would understand<br><br>
              If you are not able to fully, it's okay!!! go back on these steps, and redo it anytime, as much as we want<br><br>
            </small>
          </div>

        </div>


        <!-- Navigation Buttons -->
        <div class="step-controls">
          <button type="button" @click="prevStep" :disabled="step === 1">Previous</button>
          <button type="button" @click="nextStep" v-if="step < steps.length">Next</button>
          <button type="submit" v-if="step === steps.length">Generate Notes</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['update:formData'])

const step = ref(1)
const steps = [
  'Topic',
  'Start with the textbook',
  'What don\'t I get yet?',
  'What is it like?',
  'Why should I care?',
  'Say it simply',
  'Feed the knowledge gaps',
  'Explain Like I\'m 5']

const formData = ref({
  topicName: '',
  formaldef: '',
  kg1: '',
  zoomout: '',
  textarea_3: '',
  textarea_4: '',
  textarea_5: '',
  textarea_6: '',
  textarea_7: '',
  textarea_8: '',
  checkboxgroup: [], // Keep for backward compatibility
  gapAnswers: {}, // New structure: { gap: answer }
})

const gapList = computed(() => [
  ...formData.value.kg1.split(',').filter(item => item.trim() !== ''),
  ...formData.value.textarea_6.split('\n').filter(item => item.trim() !== '')
])
const router = useRouter()
const handleSubmit = () => {
  emit('update:formData', formData.value)
  localStorage.setItem('notesData', JSON.stringify(formData.value))
  router.push({ name: 'Notes', state: { notesData: formData.value } })

}

watch(formData, (newVal) => {
  emit('update:formData', newVal)
}, { deep: true })

function nextStep() {
  if (step.value < steps.length) step.value++
}
function prevStep() {
  if (step.value > 1) step.value--
}
</script>

<style scoped>
.form-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07), 0 1.5px 6px 0 rgba(0,0,0,0.03);
  padding: 2.5rem 2rem;
  max-width: 650px;
  margin: 2rem auto;
}

.group {
  margin-bottom: 2rem;
}

label {
  display: block;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
  font-size: 1.08rem;
  letter-spacing: 0.01em;
}

textarea,
input[type="text"] {
  width: 100%;
  padding: 0.85rem 1rem;
  font-size: 1.08rem;
  line-height: 1.5;
  border: 1.5px solid #d1d5db;
  border-radius: 8px;
  box-sizing: border-box;
  background: #f9fafb;
  transition: border-color 0.2s, box-shadow 0.2s;
  margin-bottom: 0.2rem;
  resize: vertical;
  min-height: 2.5rem;
  outline: none;
}

textarea:focus,
input[type="text"]:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 2px #bae6fd;
  background: #fff;
}

small {
  display: block;
  margin-top: 0.3rem;
  color: #64748b;
  font-size: 0.98rem;
  line-height: 1.5;
  font-weight: 400;
}

h3, h4 {
  color: #2563eb;
  margin: 1.5rem 0 0.7rem 0;
  font-weight: 700;
  letter-spacing: 0.01em;
}

button[type="submit"] {
  background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
  color: #fff;
  font-weight: 600;
  font-size: 1.08rem;
  padding: 0.8rem 2.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1.5rem;
  box-shadow: 0 2px 8px 0 rgba(37,99,235,0.08);
  transition: background 0.2s, box-shadow 0.2s;
}

button[type="submit"]:hover {
  background: linear-gradient(90deg, #1d4ed8 0%, #38bdf8 100%);
  box-shadow: 0 4px 16px 0 rgba(37,99,235,0.13);
}

input[type="checkbox"] {
  accent-color: #2563eb;
  width: 1.1em;
  height: 1.1em;
  margin-right: 0.6em;
  vertical-align: middle;
}

.question-answer-group {
  background: #f3f6fa;
  border-radius: 10px;
  padding: 1.2rem 1rem 1rem 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 4px 0 rgba(37,99,235,0.04);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.question-answer-item {
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.question-label {
  display: block;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 0.7rem;
  font-size: 1.05rem;
  line-height: 1.4;
  background: #f0f7ff;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  border-left: 4px solid #2563eb;
}

.answer-textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  font-size: 1.05rem;
  line-height: 1.5;
  border: 1.5px solid #d1d5db;
  border-radius: 6px;
  box-sizing: border-box;
  background: #f9fafb;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: vertical;
  min-height: 2.5rem;
  outline: none;
}

.answer-textarea:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 2px #bae6fd;
  background: #fff;
}

.tips {
  background: #f9fafb;
  border-radius: 8px;
  padding: 1rem 1.2rem;
  margin-bottom: 2rem;
  color: #334155;
  font-size: 1rem;
}

.tips ul {
  margin: 0.5em 0 0 1.2em;
  padding: 0;
}

@media (max-width: 700px) {
  .form-card {
    padding: 1.2rem 0.5rem;
    max-width: 98vw;
  }
  h3, h4 {
    font-size: 1.1rem;
  }
  button[type="submit"] {
    width: 100%;
    padding: 0.8rem 0;
  }
  }
</style>

<style scoped>
.stepper-container {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
}

.stepper {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 210px;
}

.stepper-step {
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  border-left: 4px solid #e5e7eb;
  color: #64748b;
  font-weight: 500;
  transition: background 0.2s, border-color 0.2s;
  background: transparent;
}

.stepper-step.active {
  background: #f0f7ff;
  border-left: 4px solid #2563eb;
  color: #2563eb;
  font-weight: 700;
}

.stepper-index {
  display: inline-block;
  width: 2em;
  height: 2em;
  margin-right: 1em;
  border-radius: 50%;
  background: #e0e7ef;
  color: #2563eb;
  text-align: center;
  line-height: 2em;
  font-weight: bold;
  font-size: 1.1em;
}

.step-controls {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.step-controls button {
  background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
  color: #fff;
  font-weight: 600;
  font-size: 1.08rem;
  padding: 0.7rem 1.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(37,99,235,0.08);
  transition: background 0.2s, box-shadow 0.2s;
}

.step-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.step-controls button:hover:not(:disabled) {
  background: linear-gradient(90deg, #1d4ed8 0%, #38bdf8 100%);
  box-shadow: 0 4px 16px 0 rgba(37,99,235,0.13);
}

@media (max-width: 900px) {
  .stepper-container {
    flex-direction: column;
    gap: 1.5rem;
  }
  .stepper {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
  }
  .stepper-step {
    flex-direction: column;
    align-items: flex-start;
    border-left: none;
    border-top: 4px solid #e5e7eb;
    padding: 0.7rem 0.5rem;
    min-width: 120px;
  }
  .stepper-step.active {
    border-top: 4px solid #2563eb;
    background: #f0f7ff;
  }
  .stepper-index {
    margin-right: 0;
    margin-bottom: 0.3em;
  }
}
</style>