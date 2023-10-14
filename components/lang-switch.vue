<!-- eslint-disable lodash/prefer-lodash-method -->
<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

const { locale, locales, setLocale } = useI18n();

const localeArray = locales as ComputedRef<LocaleObject[]>;
const selectedLocale = computed<LocaleObject>({
    get: () => localeArray.value.find(l => l.code === locale.value) as LocaleObject,
    set: (value) => {
        setLocale(value.code);
    },
});
</script>

<template>
    <USelectMenu v-model="selectedLocale" class="w-32" option-attribute="name" :options="localeArray" :popper="{ strategy: 'fixed' }">
        <template #label>
            <UIcon :name="selectedLocale.icon" />
            <span class="truncate">{{ selectedLocale.name }}</span>
        </template>
        <template #option="{ option }">
            <UIcon :name="option.icon" />
            <span class="truncate">{{ option.name }}</span>
        </template>
    </USelectMenu>
</template>
