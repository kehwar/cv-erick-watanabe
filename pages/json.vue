<script setup lang="ts">
import _ from "lodash";

const resume = await useResumeData();
const resumeString = computed(() => JSON.stringify(_.omit(resume.value.json, "default"), null, 2));
</script>

<template>
    <UContainer>
        <UCard class="mt-10">
            <template #header>
                <UButton color="gray" external icon="i-lucide-file-json-2" :padded="false" :to="`https://github.com/kehwar/cv-erick-watanabe/blob/main/assets/${resume.filename}/`" variant="link">
                    {{ resume.filename }}
                </UButton>
            </template>
            <ShikiCode :code="resumeString" lang="json" />
            <template #footer>
                <div>
                    <UButton color="gray" icon="i-lucide-file-json-2" :padded="false" to="https://jsonresume.org/" variant="link">
                        https://jsonresume.org/
                    </UButton>
                </div>
            </template>
        </UCard>
    </UContainer>
</template>
