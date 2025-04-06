<template>
    <TextWithImage
        image="images/image18.png"
        title="About the Flowrise team"
        description="We have been seeking our own inner focus for over 8 years.
                        We are a passionate team trying to make the world a better place."
        :reverse="true"
    >
    </TextWithImage>
  
    <Testimonials/>

    <div class="h-12 w-full"></div>
    
    <CallToAction/>

</template>

<script setup lang="ts">
    useHead({
        title: "About",
    })
</script>