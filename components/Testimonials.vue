<template>
    <section class="flex gap-6 justify-center items-center mt-12">

        <div v-if="error"> Erreur: {{ error.message }}</div>
            <div v-else class="flex flex-wrap gap-6 justify-center items-center">
                <h1 class="w-full text-center font-semibold text-3xl">What our users say</h1>
                <div v-for="testimonial in testimonials" class="w-[300px] h-[350px] border border-white shadow-lg rounded-lg p-8 flex flex-col justify-between items-center">
                <div><p>{{ testimonial.feedback }}</p></div>
                <div class="flex gap-2">
                    <img :src="testimonial.image" />
                    <div class="flex flex-col">
                        <p class="font-bold text-[18px]">{{ testimonial.name }}</p>
                        <p class="font-thin text-[18px]">{{ testimonial.occupation }}</p>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>

<script setup >
import { ref } from 'vue';

const {data: testimonials, error} = await useFetch('http://localhost:5000/api/Testimonials');


// const testimonials = ref([
//     {
//         id: 1,
//         name: 'Emyly W.',
//         feedback: "Flowrise has revolutionized my workday! It adapts to my  energy and helps me optimize my daily tasks. I'm more productive and happier than ever!",
//         occupation: 'UX Designer',
//         image: '/assets/images/user1.png',
//     },
//     {
//         id: 2,
//         name: 'Mark R.',
//         feedback: "Before Flowrise, I was always running against the clock. Now, I work in harmony with my natural rhythms. My productivity and wellbeing have never been better!",
//         occupation: 'Nonprofit founder',
//         image: '/assets/images/user2.png'
//     },
//     {
//         id: 3,
//         name: 'Ayesha W.',
//         feedback: "Flowrise has made burnout a thing of the past. It's a game-changer for work-life balance. It's not just a productivity app—it's a lifestyle enhancer.",
//         occupation: 'Product Manager',
//         image: '/assets/images/user3.png'
//     }
// ]);
</script>