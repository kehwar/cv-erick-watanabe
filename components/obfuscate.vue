<script setup lang="ts">
defineProps<{
    value: string
}>();
</script>

<template>
    <span>
        <span>{{ value?.slice(0, value.length / 2) }}</span>
        <span class="hidden">{{ Math.random() }}</span>
        <span>{{ value?.slice(value.length / 2) }}</span>
    </span>
</template>
