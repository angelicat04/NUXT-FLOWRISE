<template>
    <div class="h-20 px-12 mt-14 flex justify-between items-center">
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
                </li>
            </ul>
        </nav>
    </div>
</template>