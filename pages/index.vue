<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const resume = await useResumeData();
</script>

<template>
    <UContainer>
        <UCard class="mt-10">
            <template #header>
                <div class="flex justify-between">
                    <h1>Welcome to Nuxt UI Starter, {{ resume.education[0].studyType }}</h1>
                    <div class="flex gap-2">
                        <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
                        <USelect v-model="locale" :options="['es', 'en']" />
                    </div>
                </div>
                {{ locale }}
                <div class="grid">
                    <NuxtLink v-for="locale in locales" :key="locale" :to="switchLocalePath(locale)">
                        {{ locale }}
                    </NuxtLink>
                </div>
            </template>
            <UButton icon="i-heroicons-book-open" target="_blank" to="https://ui.nuxt.com">
                Open Nuxt UI Documentation
            </UButton>
        </UCard>
    </UContainer>
</template>
