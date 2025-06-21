<script>
import { Vueform, useVueform } from '@vueform/vueform'


export default {
  mixins: [ Vueform ],
  setup: useVueform,

  data: () => ({
    vueform: {
      size: 'lg',
      validateOn: 'change|step',
      overrideClasses: {
        RadioElement: {
          wrapper: 'flex border border-gray-300 py-4 px-4 items-center cursor-pointer dark:border-dark-700',
          text: 'w-full items-center',
        },
        CheckboxElement: {
          wrapper: 'flex border border-gray-300 py-4 px-4 items-center cursor-pointer dark:border-dark-700',
          text: 'w-full items-center',
        },
      },
      addClasses: {
        RadioElement: {
          input: 'mb-1',
        },
        CheckboxElement: {
          input: 'mb-1',
        },
      }
    },
    countries: {},
    states: {},
  }),
  computed: {
    // Dynamically calculating column size for country
    // (narrower when states are also visible)
    countryColumn() {
      return this.data.country === 'US' ? 4 : 8
    },
  },
  mounted() {
    // Setting `countries` and `states`
    ['countries', 'states'].map((param) => {
      fetch(`/json/${param}.json`)
        .then(response => response.json())
        .then(data => this[param] = data)
    })
  }
}

import { reactive } from 'vue'

// Reactive form data object — names match the `name` props in your elements
const form = reactive({
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
  checkboxgroup: [], // in case you use checkboxes for knowledge gaps
})

// Checklist items for the checkbox group
const gapList = [
  'I don’t fully understand how sunlight becomes energy',
  'The word “glucose” is confusing',
  'I’m not sure how oxygen is involved',
  // add dynamically later from `textarea_6` if needed
]

</script>

<template>
  <div class="bg-white rounded-lg p-10 max-w-xl shadow-box-circle  dark:bg-dark-1000">
    <form @submit="handleSubmit">


        <FormSteps>
          <FormStep name="topic" label="Topic" :elements="['topicName']" />
          <FormStep name="textbook" label="Start with the Textbook" :elements="['formaldef', 'kg1']" />
          <FormStep name="zoomout" label="What Don't I Get Yet?" :elements="['zoomout']" />
          <FormStep name="analogy" label="What is it like" :elements="['h4', 'textarea_3']" />
          <FormStep name="relate" label="Why should I care" :elements="['h4_1', 'textarea_4']" />
          <FormStep name="plain" label="Say It Simply" :elements="['textarea_5', 'textarea_7', 'textarea_6']" />
          <FormStep name="gaps" label="Feed the Knowledge Gaps" :elements="['h3_1', 'p', 'checkboxgroup']" />
          <FormStep name="final" label="Explain like I am 5" :elements="['textarea_8']" :labels="{ finish: 'Generate Notes' }" />
        
        </FormSteps>



      <!-- Defining form elements -->
      <FormElements>
      <TextareaElement name="topicName" 
      label="Enter the topic you want to understand better" 
      placeholder="Example Topic: Photosynthesis" 
      description="Pick a concept that's small enough to stand on its own, but rich enough to explain.
      
<br>
A good rule of thumb:

Not a whole field (“nutrition”)

Not just a word (“protein”)
<br>
→ But something like: “How your body uses protein to build muscle"
    
    />

    <TextareaElement 
      name="formaldef"
      label="What's the textbook definition of the topic? " 
      placeholder="Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods (mainly glucose) from carbon dioxide and water."
      description="Copy it from your textbook, class notes, or Wikipedia.
This is your launch point — even if it makes no sense to you yet." 
    />

    <TextareaElement 
      name="kg1" 
      label="List down the unfamiliar words or phrases from the definition " 
      placeholder="synthesize, glucose, carbon dioxide, process, organisms" 
      description="Go through your definition. What parts confuse you? Add those here.
It’s totally okay if it’s the whole sentence.
You’re not supposed to know it all — that’s what this tool is for.
<br><br>
It's so so common and so okay if you don't get a single word at all, please be gentle with yourself, <em>we will learn to understand better</em>" 
    />

    <TextareaElement 
      name="zoomout" 
      label="Zoom out — where does this topic live?" 
      placeholder="I know plants have cells and they need food to grow. I also remember that energy comes from sunlight. But I’m not sure how that turns into “food” inside the plant." 
      description="Try to name the bigger ideas or steps that lead up to this one. You don’t have to explain them fully — just see if you get the neighborhood.
<br><br>
Explain in your own words, you are the only one to see these notes so don't be afraid of any grammar or typos.
<br>
You are doing great :>" 
    />

    <StaticElement tag="h4" name="h4" content="Build the Bridge Part - 1" />

    <TextareaElement 
      name="textarea_3" 
      label="Can you perhaps try to describe the topic with what it's like? " 
      placeholder="Photosynthesis is kind of like a solar-powered kitchen. The sunlight is like electricity, the plant’s leaves are the chefs, and glucose is the food they cook." 
      description="Feel free to let your mind run wild, it doesn't have to make sense for anyone as long as it does for you
<br><br>
Feel free to use chatgpt or other AI to ask 'I am learning [x] topic, can you please give me a good real world analogy to help me understand?'

<br><br>
Key is, you don't have to know what it is yet, just know what <em> it is like <em>" 
    />

    <StaticElement tag="h4" name="h4_1" content="Build the Bridge Part - 2" />

    <TextareaElement 
      name="textarea_4" 
      label="Play around with the topic" 
      placeholder="It helps me understand why sunlight is so important for my garden plants. If they don’t get light, they can’t make their own food and might wilt." 
      description="Find how this topic shows up in your real life or the things you care about.
Don’t settle for textbook examples — play with it.
Someone smart made connections. Now you get to make yours" 
    />

    <TextareaElement 
      name="textarea_5" 
      label="Try to explain the topic in plain english in a single paragraph" 
      placeholder="Photosynthesis is how plants use sunlight, water, and air to make their own food. It’s their way of converting energy from the sun into something they can grow with." 
      description="It's so okay if you feel stuck, just note down the exact place you are stuck below
<br><br>" 
    />

    <TextareaElement 
      name="textarea_7" 
      label="Try to explain the topic in plain english in a single sentence" 
      placeholder="Plants eat sunlight and turn it into sugar." 
      description="It's so okay if you feel stuck, just note down the exact place you are stuck below
<br><br>" 
    />

    <TextareaElement 
      name="textarea_6" 
      label="Words or steps you feel stuck at?" 
      placeholder="How does light become energy?
What is glucose exactly?
Is oxygen a waste product or part of the food?" 
      description="Press enter to use a new line for every word / phrase you don't quite get, yet!" 
    />

    <StaticElement tag="h3" name="h3_1" content="Last lap little buddy, we are almost there" />

    <StaticElement 
      tag="p" 
      content="<div>Let's tidy Up the Gaps</div>" 
      label="Here’s what’s still a little fuzzy" 
      description="Search them up, refer to textbooks / YouTube videos / chatgpt and tick the marks as you go through each one" 
    />

    <TextareaElement 
      name="textarea_8" 
      label="We have a very curious 5 year old here ( or 12 but aim for 5 :> )" 
      placeholder="Okay, so plants are like tiny chefs. They take sunlight, some air, and a drink of water. Then they mix it all up to make sugar snacks to grow big and strong! And while cooking, they blow out little puffs of air we call oxygen — and that’s what we breathe. Isn’t that cool?
" 
      description="We’ve got a very curious 5-year-old here. Use stories, voices, wild metaphors — anything to make them go ‘ohhhh!’”
<br><br>
The key is, to explain the topic in a way that the kid would understand
<br><br>

If you are not able to fully, it's okay!!! go back on these steps, and redo it anytime, as much as we want
<br><br>" 
    />
        <CheckboxGroupElement name="checkboxgroup" :items="[
  'I don’t fully understand how sunlight becomes energy',
  'The word “glucose” is confusing',
  'I’m not sure how oxygen is involved'
 
]" label="Checklist" 
/>


      </FormElements>

      <FormStepsControls />
    </form>
  </div>
</template>



<style>
  .w-30 {
    width: 7.5rem;
  }
</style>
