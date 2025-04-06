<template>
    <section class="w-screen">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-center mb-4">Productivity that flows<br> with your life.</h1>
        <p class="text-[12px] text-center mb-4">Unleash your potential by harmonizing your daily <br>
            tasks and habits with your unique energy rhythms.</p>
        
        <TryFreeButton/>
      </div>

      <div class="flex justify-center items-center">
        <img src="/assets/images/image 10.png" alt="" class="flex w-1/2 h-1/2 object-cover" />
      </div>
    </section>
    
    <Testimonials/>
    <FeatureCard/>

    <TextWithImage
      image = "images/card1.png"
      title="Harmonize your schedule"
      description="Align tasks with your natural energy rhythms. Embrace tailored productivity."
    />
  
    <TextWithImage
      image="images/card2.png"
      title="Mindful task tracking"
      description="Blend productivity with mindfulness. Understand your patterns, enhance focus."
      :reverse="true"
    />

    <TextWithImage
      image="images/card3.png"
      title="Productivity and self care"
      description="Beyond task completion. Embrace self-care routines, foster a healthier lifestyle."
    />

    <CallToAction/>
</template>

<script setup lang="ts">

  useHead({
    title: 'Home',
    meta: [
      { 
        name: 'description', 
        content: 'This is the home page'
      },

      {
        name: 'keywords',
        content: 'App, Planing'
      }
    ],
    bodyAttrs: {
      class: 'test'
    },
    script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
  })
  
</script>
