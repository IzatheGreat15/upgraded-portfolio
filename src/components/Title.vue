<template>
    <span class="relative uppercase text-3xl font-bold">
        {{ title }}
        <span class="absolute -bottom-1 left-0 w-full h-1 bg-red-500"></span>
    </span>
</template>

<script>
export default {
    props: {
        title : {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>