<script setup lang="ts">
import LangSwitch from "~/components/lang-switch.vue";

const resume = await useResumeData();
</script>

<template>
    <UContainer>
        <UCard class="mt-10">
            <template #header>
                <div class="flex justify-between">
                    <h1>Welcome to Nuxt UI Starter, {{ resume.education[0].studyType }}</h1>
                    <div class="flex gap-2">
                        <ColorSwitch />
                        <LangSwitch />
                    </div>
                </div>
            </template>
            <UButton icon="i-heroicons-book-open" target="_blank" to="https://ui.nuxt.com">
                Open Nuxt UI Documentation
            </UButton>
        </UCard>
    </UContainer>
</template>
