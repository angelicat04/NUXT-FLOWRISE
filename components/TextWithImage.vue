<template>

  <section class="flex flex-col items-center md:flex-row justify-between py-6 px-48" :class="{ 'md:flex-row-reverse': reverse }" >

      <div class="flex p-4 md:max-h-[700px]">
        <img :src="image" class="flex object-cover" /> 
      </div>

      <div class="flex items-center justify-center md:">
        <div class="md: w-[250px]">
          <h3 class="text-xl font-bold">{{ title }}</h3>
          <p class=" mt-2">{{ description }}</p>
        </div>

      </div>



  </section>
  
</template>
  
<script setup>

  defineProps({
    image: String,
    title: String,
    description: String,
    reverse: Boolean,
  });
</script>
  