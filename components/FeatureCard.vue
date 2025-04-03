<template>
    <section class="flex flex-wrap gap-3 justify-center items-center mt-14">
        <h1 class="w-full text-center font-semibold text-3xl">Robust features</h1>
        <div v-for="feature in features" :key="feature.id" class="flex flex-col w-[200px] h-[200px] justify-center shadow-xl p-8">
            <div>
                <img :src="feature.icon" class="h-[48px] w-[48px]"/>
            </div>
            <h2 class="font-semibold text-xl mb-4">{{ feature.title }}</h2>
            <p class="font-light text-[10px]">{{ feature.description }}</p>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const features = ref([
    {
        id: 1,
        title: "Scheduling",
        description: "Create task schedules synced to your natural energy peaks and troughs.",
        icon: "https://api.iconify.design/ic:round-calendar-month.svg?color=%230891b2"
    },
    {
        id: 2,
        title: "Analytcs",
        description: "Track your productivity trends with comprehensive data and insights.",
        icon: "https://api.iconify.design/ic:sharp-bar-chart.svg?color=%230891b2"
    },
    {
        id: 3,
        title: "Integrations",
        description: "Incorporate wellness practices into your daily plan with reminders for meditation, hydration, and more.",
        icon: "https://api.iconify.design/ic:round-calendar-month.svg?color=%230891b2"
    },
    {
        id: 4,
        title: "Focus Time",
        description: "Use the built-in Pomodoro timer for focused work sessions with customizable intervals.",
        icon: "https://api.iconify.design/ic:outline-hourglass-empty.svg?color=%230891b2"
    }
])

</script>