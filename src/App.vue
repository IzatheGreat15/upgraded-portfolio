<template>
  <About />
  <TechStack />
  <Projects />
  <Contact />
</template>

<script>
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Projects from './views/Projects.vue';
import TechStack from './views/TechStack.vue';

export default {
  components: {
    About,
    Contact,
    Projects,
    TechStack
  }
}
</script>

<style>

</style>