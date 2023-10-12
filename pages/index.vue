<script setup lang="ts">
import { omit } from "lodash";

const resume = await useResumeData();
const resumeString = computed(() => JSON.stringify(omit(resume.value.json, "default"), null, 2));

useHead({
    title: "CV - Erick Watanabe",
});
</script>

<template>
    <UContainer>
        <UCard class="mt-10">
            <template #header>
                <div class="flex gap-2">
                    <LangSwitch />
                    <ColorSwitch />
                </div>
            </template>
            <div class="space-y-2">
                <div>
                    <UButton color="gray" external icon="i-lucide-file-json-2" :padded="false" :to="`json/${resume.filename}`" variant="link">
                        {{ resume.filename }}
                    </UButton>
                </div>
                <ShikiCode :code="resumeString" lang="json" />
                <div>
                    <UButton color="gray" icon="i-lucide-file-json-2" :padded="false" to="https://jsonresume.org/" variant="link">
                        https://jsonresume.org/
                    </UButton>
                </div>
            </div>
        </UCard>
    </UContainer>
</template>
