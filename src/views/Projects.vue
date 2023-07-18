<template>
  <main class="bg-grey pt-20 text-center text-white flex flex-col md:max-h-screen md:overflow-y-hidden" id="projects">
    <div class="flex justify-center">
      <Title :title="'Projects'" />
    </div>
    <div class="flex flex-grow relative mt-10 h-screen">
      <div class="horizontal-scroll object-contain">
        <div class="scroll-container flex justify-center items-start">
          <Project v-for="(item, index) in projects" :key="index" :item="item" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Title from '../components/Title.vue';
import Project from '../components/Project.vue';
import { projects } from '@/assets/data.js';

export default {
  components: {
    Title,
    Project
  },
  data() {
    return {
      projects: projects,
    }
  }
};
</script>

<style>
.horizontal-scroll {
  position: absolute;
  top: 0;
  left: 0;
/*  note vh and vw switched  */
  width: 100vh; 
  height: 100vw;
/*    */
  transform-origin: top left;
  transform: rotate(-90deg) translateX(-100vh);
  overflow-x: hidden;
  overflow-y: scroll;
}

.scroll-container {
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  transform-origin: top left;
  transform: rotate(90deg) translateY(-100vh);
}

.project {
  width: 100vw;
  height: 100%;
  overflow-y: hidden;
/*  backface visibility keeps font from looking weird  */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>
