<template>
    <div class="grid gap-12 px-12 md:grid-cols-2 items-center mt-6" :class="{ 'md:flex-row-reverse': reverse }">
      <div class="">
        <img :src="image" class="w-[450px] h-[500px]" /> 
        <!-- rounded-xl shadow-lg w-full -->
      </div>
      <div>
        <h3 class="text-xl font-bold">{{ title }}</h3>
        <p class=" mt-2">{{ description }}</p>
      </div>
    </div>

  </template>
  
  <script setup>
  defineProps({
    image: String,
    title: String,
    description: String,
    reverse: Boolean,
  });
  </script>
  