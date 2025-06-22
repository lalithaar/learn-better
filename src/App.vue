<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
        
    <!-- <MyForm @update:formData="parentFormData.value = $event" /> -->
    
    <RouterView />
    <footer class="footer">
      Made with <span class="heart">♥</span> for the 5-year-old in all of us, still trying to make sense of the world.
    </footer>
  </div>
</template> 

<style scoped>

#app {
  max-width: 800px;
  margin: 0 auto;
}

.footer {
  margin-top: 3rem;
  padding: 1.2rem 0 1.5rem 0;
  text-align: center;
  color: #64748b;
  font-size: 1.07rem;
  letter-spacing: 0.01em;
  background: none;
  font-family: inherit;
  opacity: 0.85;
}
.heart {
  color: #ef4444;
  font-size: 1.1em;
  vertical-align: middle;
  padding: 0 0.15em;
}
</style>
 
 

