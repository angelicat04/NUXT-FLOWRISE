<template>
    <TextWithImage
        image="images/card1.png"
        title="About the Flowrise team"
        description="e’ve been seeking our own inner focus for over 8 years.
                        We’re a passionate team trying to make the world a better place."
        reverse
    >
    </TextWithImage>

    <Testimonials/>
</template>

<script setup lang="ts">
    useHead({
        title: "About",
    })
</script>