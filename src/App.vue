<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MyForm from './components/MyForm.vue'
import { ref, computed } from 'vue'

const parentFormData = ref({
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
}) // <-- use ref for reactivity

</script>



<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Learn like you are 5</h1>
    <p><em>Start with the textbook definition. End with a 5-year-old nodding back at you.</em><br> A single-page tool that guides you from formal explanations to childlike clarity — through structured breakdown, guided prompts, and self-reflection</p>
        <h4>
      <strong>Topic:</strong> {{ parentFormData.value?.topicName ?? '' }}<br>
    </h4>
    <MyForm @update:formData="parentFormData.value = $event" />
    

  </div>
</template> 

<style scoped>

#app {
  max-width: 800px;
  margin: 0 auto;
}
</style>
 
 

