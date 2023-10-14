<script setup lang="ts">
const showBadge = useSessionStorage("show-themes-badge", true, {});
</script>

<template>
    <div class="flex gap-2">
        <UPopover :popper="{ strategy: 'fixed' }">
            <UTooltip :text="$t('themes')">
                <UButton alt="Themes" class="rounded-full" color="gray" icon="i-gridicons-themes" size="lg" @click="showBadge = false" />
                <ClientOnly>
                    <span v-if="showBadge" class="fixed flex h-3 w-3 translate-x-8">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                        <span class="relative inline-flex h-3 w-3 rounded-full bg-sky-500" />
                    </span>
                </ClientOnly>
            </UTooltip>
            <template #panel>
                <div class="grid gap-1 p-1 text-sm">
                    <UButton color="gray" icon="i-lucide-file-json-2" label="JSON Schema" :to="useLocalePath()({ name: 'json' })" variant="ghost" />
                </div>
            </template>
        </UPopover>
        <UPopover :popper="{ strategy: 'fixed' }">
            <UTooltip :text="$t('settings')">
                <UButton alt="Options" class="rounded-full" color="gray" icon="i-heroicons-cog-6-tooth" size="lg" />
            </UTooltip>
            <template #panel>
                <div class="flex w-fit gap-1 p-1">
                    <LangSwitch />
                    <ColorSwitch />
                </div>
            </template>
        </UPopover>
    </div>
</template>
