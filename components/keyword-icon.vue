<script setup lang="ts">
import { getKeyworkIcon } from "~/utilities/get-keyword-icon";

const props = defineProps<{
    name: string
}>();

const icon = getKeyworkIcon(props.name);
</script>

<template>
    <UIcon :name="icon" />
</template>
