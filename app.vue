<template>
  <div>
    <NuxtLayout :name="layout">
      <Header/>
      <NuxtPage/>
      <Footer/>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useState } from '#app';
const layout = useState('layout')
</script>
