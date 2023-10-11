<template>
    <ColorScheme>
        <UButton
            color="gray"
            :icon="$colorMode.value === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            variant="ghost"
            @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
        />
    </ColorScheme>
</template>
