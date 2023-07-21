<template>
  <main class="bg-img flex flex-col h-full" id="about">
    <Navbar />
    <section class="flex-grow flex flex-col-reverse gap-8 sm:gap-0 sm:flex-row justify-end md:justify-center items-center">
      <div class="w-full md:w-2/3 px-6 md:px-20">
        <h6 class="uppercase text-xl md:text-4xl text-white font-extrabold">Kathleen Iza</h6>
        <h1 class="uppercase text-6xl md:text-9xl text-white font-extrabold">
          Monzales
        </h1>
        <p class="md:text-xl font-medium text-white">I'm a Software Developer</p>
        <div class="md:w-1/2 my-5 md:my-10">
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
          <div class="flex w-3/4 md:w-1/2 my-4">
            <a href="https://github.com/IzatheGreat15" target="_blank" class="w-1/4 flex h-8">
              <img :src="github" alt="GitHub" />
            </a>
            <a href="https://twitter.com/IzatheGreat_" target="_blank" class="w-1/4 flex h-8">
              <img :src="twitter" alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/kathleen-iza-monzales-397866220/" target="_blank" class="w-1/4 flex h-8">
              <img :src="linkedin" alt="LinkedIn" />
            </a>
            <a href="mailto:monzalesiza@gmail.com" target="_blank" class="w-1/4 flex h-8">
              <img :src="mail" alt="Mail" />
            </a>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 flex items-center justify-center md:-ml-24 md:-mt-24">
        <img :src="profile" alt="Profile" class="w-3/4 floating" />
      </div>
    </section>
  </main>
</template>

<script>
import profile from '@/assets/profile-white.png';
import Navbar from '@/components/Navbar.vue';
import github from '@/assets/icons/github.svg';
import twitter from '@/assets/icons/twitter.svg';
import linkedin from '@/assets/icons/linkedin.svg';
import mail from '@/assets/icons/mail.svg';

export default {
  components: {
    Navbar
  },
  data(){
    return{
      profile,
      github,
      twitter,
      linkedin,
      mail
    }
  }
}
</script>

<style>

</style>