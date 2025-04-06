<template>
    <TextWithImage
        image="images/image15.png"
        title="Features for finding focus"
        description="Harness our innovative feature set to propel your productivity power.
                        Make every moment count, stress less."
    >
    </TextWithImage>

    <FeatureCard/>

    <TextWithImage
        image="images/card1.png"
        title="Our mission"
        description="We are a passionate team trying to make the world a better place."
        :reverse="false"
    > 
    </TextWithImage>
  
    <Testimonials/>
    <CallToAction/>

</template>

<script setup lang="ts">
    useHead({
        title: "Features"
    })


</script>
