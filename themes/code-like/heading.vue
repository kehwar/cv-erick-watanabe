<script setup lang="ts">
defineProps<{
    leading?: string
    value?: string
    trailing?: string
}>();
</script>

<template>
    <div class="flex text-3xl font-bold">
        <span v-if="leading" class="text-sky-400">{{ leading }}</span>
        <span class="text-red-400">{{ value }}</span>
        <span v-if="trailing" class="text-sky-400">{{ trailing }}</span>
    </div>
</template>
