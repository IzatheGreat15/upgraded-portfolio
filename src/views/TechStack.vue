<template>
    <main class="bg-black py-20 px-10 lg:px-40 text-white text-center" id="tech">
      <Title :title="'What I do'" />
      <p class="mt-5 text-justify sm:text-center">
        I am a skilled and dedicated software developer specializing in web development. 
        With a strong focus on critical thinking and problem-solving, I strive to deliver innovative solutions to complex challenges.  
        Additionally, my expertise in data structures and algorithms enables me to design robust and optimized code that enhances performance and scalability. 
        I am passionate about continuously expanding my knowledge and staying updated with the latest advancements in the field. 
      </p>
      <section class="grid gap-4 md:gap-10 grid-cols-2 md:grid-cols-4 my-5 mt-10">
        <Tech v-for="(item, index) in tech" :key="index" :item="item" />
      </section>
    </main>
  </template>
  
  <script>
  import Title from '../components/Title.vue';
  import Tech from '../components/Tech.vue';
  import { tech } from '@/assets/data.js';


  export default {
    components: {
      Title,
      Tech
    },
    data() {
      return {
        tech: tech
      }
    }
  }
  </script>
  
  <style>
  
  </style>