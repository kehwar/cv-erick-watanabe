<script setup lang="ts">
import type { BuiltinLanguage } from "shikiji";

const props = defineProps<{
    code: string
    lang?: BuiltinLanguage
}>();

const { codeToHtml } = useNuxtApp().$shikiji;

const code = computed(() => {
    return codeToHtml(props.code);
});
</script>

<template>
    <div v-if="code" v-html="code" />
</template>

<style>
html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}

.shiki {
    @apply px-4 py-5 sm:p-6
}

.shiki code {
    @apply text-sm font-mono block overflow-auto max-h-[50vh]
}
</style>
