<template>
  <div class="form-card">
  <form @submit.prevent="handleSubmit">
    <!-- First step -->
    <div class="group">
    <label>
      Enter the topic you want to understand better
      </label>
      <textarea
        name="topicName"
        v-model="formData.topicName"
        placeholder="Example Topic: Photosynthesis"
        rows="2"
        class="textarea"
      ></textarea>
      <small>
        Pick a concept that's small enough to stand on its own, but rich enough to explain.<br>
        A good rule of thumb:<br>
        Not a whole field (“nutrition”)<br>
        Not just a word (“protein”)<br>
        → But something like: “How your body uses protein to build muscle"
      </small>
    </div>
    <!-- 2nd -->
    <div class="group">
    <label>
      What's the textbook definition of the topic?</label>
      <textarea
        name="formaldef"
        v-model="formData.formaldef"
        placeholder="Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods (mainly glucose) from carbon dioxide and water."
        rows="3"
      ></textarea>
      <small>
        Copy it from your textbook, class notes, or Wikipedia.
        This is your launch point — even if it makes no sense to you yet.
      </small>
    </div>
    <div class="group">
    <label>
      List down the unfamiliar words or phrases from the definition</label>
      <textarea
        name="kg1"
        v-model="formData.kg1"
        placeholder="synthesize, glucose, carbon dioxide, process, organisms"
        rows="2"
      ></textarea>
      <small>
        Go through your definition. What parts confuse you? Add those here.
        It's totally okay if it's the whole sentence.
        You're not supposed to know it all — that's what this tool is for.<br><br>
        It's so so common and so okay if you don't get a single word at all, please be gentle with yourself, <em>we will learn to understand better</em>
      </small>
    </div>
    <div class="group">
    <label>
      Zoom out — where does this topic live?</label>
      <textarea
        name="zoomout"
        v-model="formData.zoomout"
        placeholder="I know plants have cells and they need food to grow. I also remember that energy comes from sunlight. But I'm not sure how that turns into “food” inside the plant."
        rows="3"
      ></textarea>
      <small>
        Try to name the bigger ideas or steps that lead up to this one. You don't have to explain them fully — just see if you get the neighborhood.<br><br>
        Explain in your own words, you are the only one to see these notes so don't be afraid of any grammar or typos.<br>
        You are doing great :>
      </small>
    </div>

    <h4>Build the Bridge Part - 1</h4>
    <div class="group">
    <label>
      Can you perhaps try to describe the topic with what it's like?</label>
      <textarea
        name="textarea_3"
        v-model="formData.textarea_3"
        placeholder="Photosynthesis is kind of like a solar-powered kitchen. The sunlight is like electricity, the plant's leaves are the chefs, and glucose is the food they cook."
        rows="3"
      ></textarea>
      <small>
        Feel free to let your mind run wild, it doesn't have to make sense for anyone as long as it does for you<br><br>
        Feel free to use chatgpt or other AI to ask 'I am learning [x] topic, can you please give me a good real world analogy to help me understand?'<br><br>
        Key is, you don't have to know what it is yet, just know what <em> it is like </em>
      </small>
    
    </div>
  <h4>Build the Bridge Part - 2</h4>

  <div class="group">
        <label>
          Play around with the topic</label>
        <textarea
          name="textarea_4"
          v-model="formData.textarea_4"
          placeholder="It helps me understand why sunlight is so important for my garden plants. If they don't get light, they can't make their own food and might wilt."
          rows="3"
        ></textarea>
        <small>
          Find how this topic shows up in your real life or the things you care about.
          Don't settle for textbook examples — play with it.
          Someone smart made connections. Now you get to make yours
        </small>
  </div>

    <div class="group">
    <label>
      Try to explain the topic in plain english in a single paragraph</label>
      <textarea
        name="textarea_5"
        v-model="formData.textarea_5"
        placeholder="Photosynthesis is how plants use sunlight, water, and air to make their own food. It's their way of converting energy from the sun into something they can grow with."
        rows="2"
      ></textarea>
      <small>
        It's so okay if you feel stuck, just note down the exact place you are stuck below<br><br>
      </small>
    
    </div>
    <div class="group">
    <label>
      Try to explain the topic in plain english in a single sentence</label>
      <textarea
        name="textarea_7"
        v-model="formData.textarea_7"
        placeholder="Plants eat sunlight and turn it into sugar."
        rows="1"
      ></textarea>
      <small>
        It's so okay if you feel stuck, just note down the exact place you are stuck below<br><br>
      </small>
    
</div>
<div class="group">
    <label>
      Words or steps you feel stuck at?</label>
      <textarea
        name="textarea_6"
        v-model="formData.textarea_6"
        placeholder="How does light become energy?
What is glucose exactly?
Is oxygen a waste product or part of the food?"
        rows="3"
      ></textarea>
      <small>
        Press enter to use a new line for every word / phrase you don't quite get, yet!
      </small>
    
</div>
<h3>Last lap little buddy, we are almost there</h3>    
<div>Let's tidy Up the Gaps</div>
    
      
      <label>Here's what's still a little fuzzy</label>
      <small>
        Search them up, refer to textbooks / YouTube videos / chatgpt and tick the marks as you go through each one
      </small>
    

    <div class="group checkboxgroup">
      
      <div v-for="(item, index) in gapList" :key="index" class="checkbox-item">
        <input
          type="checkbox"
          :id="'gap-' + index"
          v-model="formData.checkboxgroup"
          :value="item"
        />
        <label :for="'gap-' + index">{{ item }}</label>
      </div>
    </div>
    <div class="group">
        <label>
          We have a very curious 5 year old here ( or 12 but aim for 5 :> )</label>
          <textarea
            name="textarea_8"
            v-model="formData.textarea_8"
            placeholder="Okay, so plants are like tiny chefs. They take sunlight, some air, and a drink of water. Then they mix it all up to make sugar snacks to grow big and strong! And while cooking, they blow out little puffs of air we call oxygen — and that's what we breathe. Isn't that cool?"
            rows="4"
          ></textarea>
          <small>
            We've got a very curious 5-year-old here. Use stories, voices, wild metaphors — anything to make them go ohhhh!<br><br>
            The key is, to explain the topic in a way that the kid would understand<br><br>
            If you are not able to fully, it's okay!!! go back on these steps, and redo it anytime, as much as we want<br><br>
          </small>
        
    </div>
    <button type="submit">Generate Notes</button>
  </form>
  </div>
</template>

<script setup>
import { computed, ref,watch } from 'vue'

const emit = defineEmits(['update:formData'])

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
  checkboxgroup: [],
})


// a method which splits kg1 nd textarea_6 by newline char and turns it into gapList
const gapList = computed(() => {
  return [
    ...formData.value.kg1.split('\n').filter(item => item.trim() !== ''),
    ...formData.value.textarea_6.split('\n').filter(item => item.trim() !== '')
  ]
})

const handleSubmit = () => {
  // Emit the formData to the parent component
  emit('update:formData', formData.value)
}

watch(formData, (newVal) => {
  // Emit the updated formData to the parent on every change
  // Use 'update:formData' to match your parent listener
  // $emit is available via defineEmits in <script setup>
  emit('update:formData', newVal)
}, { deep: true })

</script>

<style scoped>

  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    padding: 20px;
  }
    textarea {
      width: 100%;
      height: 100%;
      padding: 10px;
      font-size: 16px;
      line-height: 1.5;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
    }

    small {
      display: block;
      margin-top: 4px;
      color: black;
      font-size: 1rem;
    }

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

/* Add to your <style scoped> in MyForm.vue */

.checkboxgroup {
  background: #f3f6fa;
  border-radius: 10px;
  padding: 1.2rem 1rem 1rem 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 4px 0 rgba(37,99,235,0.04);
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.checkbox-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.7rem;
  border-radius: 6px;
  transition: background 0.15s;
  cursor: pointer;
}

.checkbox-item:hover {
  background: #e0e7ef;
}

.checkbox-item input[type="checkbox"] {
  accent-color: #2563eb;
  width: 1.15em;
  height: 1.15em;
  margin-right: 0.7em;
  transition: box-shadow 0.15s;
  box-shadow: 0 0 0 1.5px #60a5fa33;

  &:checked + label {
    text-decoration: line-through;
    color: #94a3b8;
  }
}

.checkbox-item label {
  font-size: 1.03rem;
  color: #1e293b;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 0;
  /* Remove default margin from label */
}
</style>