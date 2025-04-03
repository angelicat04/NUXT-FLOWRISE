<template>
    <div class="h-20 flex justify-between items-center">
        <div>
            <img src="~/assets/images/logo.png " alt="Logo" class="w-28" />
        </div>
        <nav>
            <ul class="">
                <li class="flex gap-4 text-slate-900 font-light">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/features">Features</NuxtLink>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
            </ul>
        </nav>
        <div class="flex gap-2">
            <div 
                class="rounded-full h-10 w-10  hover:bg-slate-900 group justify-center items-center flex cursor-pointer"
                @click="toggleLayout">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-black group-hover:fill-white">
                    <path d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91l-1.41-1.41l-1.79 1.79l1.41 1.41zm-3.21 13.7l1.79 1.8l1.41-1.41l-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91l1.41 1.41l1.79-1.8l-1.41-1.41z"/>
                </svg>
            </div>

            <div class="rounded-full h-10 w-10 hover:bg-slate-900 group justify-center items-center flex cursor-pointer"
                @click="toggleLayout">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-black group-hover:fill-white">
                    <path  d="M14 2c1.82 0 3.53.5 5 1.35c-2.99 1.73-5 4.95-5 8.65s2.01 6.92 5 8.65A10 10 0 0 1 14 22C8.48 22 4 17.52 4 12S8.48 2 14 2"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useState } from '#app';

//Utilisation de useState pour changer de layout
const layout = useState('layout', () => 'default');

//Fonction pour basculer entre les layouts
const toggleLayout = () => {
    layout.value = layout.value === 'default' ? 'custom' : 'default';
};
</script>