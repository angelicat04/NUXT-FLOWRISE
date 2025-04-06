<template>
    <div class="h-20 px-12 mt-14 mb-14 flex flex-col gap-4 md:flex-row justify-between items-center">
        <div>
            <img src="~/assets/images/logo.png " alt="Logo" class="w-28" />
        </div>
        
        <p class="text-[12px]">©2023 Flowrise</p>

        <nav>
            <ul class="">
                <li class="flex gap-4  font-light">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/features">Features</NuxtLink>
                    <NuxtLink to="/about">About</NuxtLink>
                    <NuxtLink to="/blog">Blog</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>