<template>
    <div class="grid gap-12 md:grid-cols-2 items-center" :class="{ 'md:flex-row-reverse': reverse }">
      <div class="w-300 h-400 bg-red-400">
        <img :src="image" class="object-cover" /> 
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
  