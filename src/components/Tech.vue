<template>
    <a :href="item.link" target="_blank" class="aspect-square bg-grey flex flex-col p-4 md:p-8 rounded-lg hover:scale-105 transform transition duration-200">
        <span class="h-3/4 flex justify-center items-center">
          <img :src="item.icon" class="w-3/4 h-3/4 object-contain" />
        </span>          
        <p class="h-1/4 flex justify-center items-center md:text-xl">{{ item.name }}</p>
    </a>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style>

</style>