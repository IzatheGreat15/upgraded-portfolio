<template>
    <section class="project flex flex-col md:flex-row p-4 md:px-20">
      <div class="relative">
        <img v-bind:src="item.image" :alt="item.title" />

        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-grey opacity-0 hover:opacity-90 transition-opacity">
          <div v-for="(tech, index) in item.tech" :key="index" class="bg-black bg-opacity-100 p-2 w-10 h-10 rounded-full flex items-center justify-center mx-1">
            <img v-bind:src="tech" />
          </div>
        </div>
      </div>
      
      <div class="w-full md:w-1/3 md:px-10 text-start">
        <h1 class="text-xl font-bold mb-2 text-center md:text-start mt-4 md:mt-0">{{ item.title }}</h1>
        <p>
          {{ item.description }}
        </p>
        <h1 class="text-md font-semibold my-2 mt-4">Job Description</h1>
        <ul>
          <li v-for="(job, index) in item.job_desc" :key="index" class="list-disc list-inside">{{ job }}</li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: ['item'],
    methods: {
      async getImagePath(image) {
        const imagePath = `@/assets/images/${image}`;
        const importedImage = await import(imagePath);
        return importedImage.default;
      },
    },
  };
  </script>
  
  <style>
  
  </style>
  