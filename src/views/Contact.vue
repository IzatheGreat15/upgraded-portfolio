<template>
  <main id="contact" class="bg-img py-20 pb-64 md:pb-56 px-10 lg:px-40 text-white text-center relative">
      <Title :title="'Let\'s Work Together'" />
      <section class="mt-10 flex flex-col md:flex-row h-96">
        <form @submit="handleSubmit" class="w-full md:w-1/2 text-start">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
              <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-last-name">
                Name
              </label>
              <input v-model="email.name" class="appearance-none block w-full h-10 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text">
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-last-name">
                Email
              </label>
              <input v-model="email.email" class="appearance-none block w-full h-10 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                Message
              </label>
              <textarea v-model="email.message" class="whitespace-pre-wrap appearance-none block w-full h-full max-h-96 resize-none md:resize-y md:h-72 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mt-10 md:mt-0">
            <div class="w-full px-3">
              <button type="submit" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
                Send Email
              </button>
            </div>
          </div>
        </form>
        <div class="flex w-full md:w-1/2 justify-center mt-5 md:mt-0">
          <div class="flex flex-col w-full md:w-1/2">
            <a href="https://github.com/IzatheGreat15" target="_blank" class="flex my-3">
              <span>
                <img :src="github" alt="GitHub" />
              </span>
              <span class="ml-3">IzatheGreat15</span>
            </a>
            <a href="https://twitter.com/IzatheGreat_" target="_blank" class="flex my-3">
              <span>
                <img :src="twitter" alt="Twitter" />
              </span>
              <span class="ml-3">IzatheGreat_</span>
            </a>
            <a href="https://www.linkedin.com/in/kathleen-iza-monzales-397866220/" target="_blank" class="flex my-3">
              <span>
                <img :src="linkedin" alt="LinkedIn" />
              </span>
              <span class="ml-3">Kathleen Iza Monzales</span>
            </a>
            <a href="mailto:monzalesiza@gmail.com" target="_blank" class="flex my-3">
              <span>
                <img :src="mail" alt="Mail" />
              </span>
              <span class="ml-3">monzalesiza@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
      <footer class="absolute bottom-0 left-0 w-full text-center p-2">© IzatheGreat | 2023</footer>
    </main>
  </template>
  
  <script>
  import Title from '../components/Title.vue'
  import github from '@/assets/icons/github.svg';
  import twitter from '@/assets/icons/twitter.svg';
  import linkedin from '@/assets/icons/linkedin.svg';
  import mail from '@/assets/icons/mail.svg';
  import { Email } from '@/smtp/smtp.js';

  export default {
    components: {
      Title
    },
    data() {
      return {
        github,
        twitter,
        linkedin,
        mail,
        email: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      handleSubmit(e){
        e.preventDefault();

        if(this.email.name === '' || this.email.email === '' || this.email.message === ''){
          alert('Please fill in all the fields.');
          return null;
        }

        const emailBody = "Email: " + this.email.email + "<br><br>Message:<br>" + this.email.message.replace(/\n/g, '<br>');

        Email.send({
          SecureToken: import.meta.env.VITE_EMAIL_SECURE_TOKEN,
          To: import.meta.env.VITE_EMAIL,
          From: import.meta.env.VITE_EMAIL,
          Subject: "Contact Portfolio From " + this.email.name,
          Body: emailBody,
          isHTML: true
        }).then(
          function () {
            alert("Email Successfully Sent! I will be in touch with you soon.");
            this.email = {
              name: '',
              email: '',
              message: ''
            };
          }.bind(this)
        );
      }
    }
  }
  </script>
  
  <style>
  
  </style>