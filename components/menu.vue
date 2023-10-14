<template>
    <div class="flex gap-2">
        <UPopover :popper="{ strategy: 'fixed' }">
            <UAvatar alt="Themes" icon="i-gridicons-themes" size="md" />
            <template #panel>
                <div class="grid gap-1 p-1 text-sm">
                    <UButton color="gray" icon="i-lucide-file-json-2" label="JSON Schema" :to="useLocalePath()({ name: 'json' })" variant="ghost" />
                </div>
            </template>
        </UPopover>
        <UPopover :popper="{ strategy: 'fixed' }">
            <UAvatar alt="Options" icon="i-heroicons-cog-6-tooth" size="md" />
            <template #panel>
                <div class="flex w-fit gap-1 p-1">
                    <LangSwitch />
                    <ColorSwitch />
                </div>
            </template>
        </UPopover>
    </div>
</template>
