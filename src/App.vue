<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MyForm from './components/MyForm.vue'
import { ref, computed } from 'vue'



</script>



<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Learn like you are 5</h1>
    <p><em>Start with the textbook definition. End with a 5-year-old nodding back at you.</em><br> A single-page tool that guides you from formal explanations to childlike clarity — through structured breakdown, guided prompts, and self-reflection</p>
    <MyForm />
    <p>
      <!-- <strong>Topic:</strong> {{ formData.value.topicName }}<br> -->
    </p>
  </div>
</template> 

<style scoped>

#app {
  max-width: 800px;
  margin: 0 auto;
}
</style>
 
 

