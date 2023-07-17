<template>
  <main class="bg-img flex flex-col h-full" id="about">
    <Navbar />
    <section class="flex-grow flex flex-col-reverse md:flex-row justify-end md:justify-center items-center bg-pink-200">
      <div class="bg-slate-300 w-full md:w-2/3 px-2 md:px-20">
        <h6 class="uppercase text-2xl md:text-4xl text-white font-extrabold bg-orange-200">Kathleen Iza</h6>
        <h1 class="uppercase text-6xl md:text-9xl text-white font-extrabold bg-red-200">Monzales</h1>
        <p class="md:text-xl font-medium text-white bg-orange-200">I'm a Software Developer</p>
        <div class="bg-blue-300 md:w-1/2 my-5 md:my-10">
          <!-- buttons -->
          <div class="flex">
            <button class="w-1/2 md:w-1/3 mr-2 bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-transparent">
              Hire Me
            </button>
            <button class="w-1/2 md:w-1/3 mr-2 bg-transparent hover:bg-red-500 text-white font-semibold py-2 px-4 border border-white hover:border-transparent">
              Download CV
            </button>
          </div>
          <!-- icons -->
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </div>
      </div>
      <div class="bg-yellow-300 w-full md:w-1/3 flex items-center justify-center">
        <img :src="profile" alt="Profile" class="w-3/4 md:w-full" />
      </div>
    </section>
  </main>
</template>

<script>
import profile from '@/assets/profile-white.png';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data(){
    return{
      profile
    }
  }
}
</script>

<style>

</style>