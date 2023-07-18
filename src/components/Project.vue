<template>
    <section class="project flex flex-col md:flex-row p-4 md:px-20">
      <div class="w-full md:w-2/3 flex justify-center items-center">
        <img v-bind:src="item.image" :alt="item.title" />
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
  