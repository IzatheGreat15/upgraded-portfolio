<template>
  <About />
  <TechStack />
  <Projects />
  <Contact />
</template>

<script>
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Projects from './components/Projects.vue';
import TechStack from './components/TechStack.vue';

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