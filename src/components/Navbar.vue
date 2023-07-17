<template>
    <nav class="">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-cente w-full justify-between">
            <a href="#about" class="flex-shrink-0">
              <img class="h-8 w-8" :src="logo" alt="Logo">
            </a>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a href="#about" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#tech" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tech Stack</a>
                <a href="#projects" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#contact" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path :class="{'hidden': isOpen, 'inline-flex': !isOpen}" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path :class="{'hidden': !isOpen, 'inline-flex': isOpen}" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div :class="{'block': isOpen, 'hidden': !isOpen}" class="md:hidden absolute top-14 inset-x-0 py-2 transition transform origin-top-right">
        <div class="w-full shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="px-2 pt-2 pb-3 sm:px-3">
            <a href="#about" class="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#tech" class="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Tech Stack</a>
            <a href="#projects" class="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#contact" class="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import logo from '@/assets/logo.svg';
  export default {
    data() {
      return {
        isOpen: false,
        logo
      };
    },
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  