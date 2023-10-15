<script setup lang="ts">
import getDomain from "~/utilities/get-domain";
import Heading from "./heading.vue";

const { value: { resume: json } } = await useResumeData();
const { t: $t } = useI18n<[i18nSchema]>();
</script>

<template>
    <UContainer>
        <div class="space-y-4">
            <!-- Logo -->
            <Heading class="!text-7xl" leading="&lt;" trailing=">" value="cv" />
            <!-- Basics -->
            <section class="flex flex-col">
                <span class="text-5xl">
                    {{ json.basics.name }}
                </span>
                <span class="text-xl">
                    ({{ json.basics.label }})
                </span>
            </section>
            <!-- Main -->
            <section class="space-y-4 md:flex md:gap-16 md:space-y-0">
                <!-- Work -->
                <section class="space-y-4 md:grow">
                    <Heading leading="/" :value="$t('headings.work')" />
                    <div v-for="(work, index) in json.work" :key="index" class="break-inside-avoid space-y-2">
                        <!-- Position -->
                        <div class="flex font-semibold text-purple-400">
                            <span>(</span>
                            <span>{{ work.position }})</span>
                        </div>
                        <!-- Company & Date -->
                        <div class="flex justify-between gap-2 font-semibold">
                            <span class="self-center text-red-400">{{ work.company }}</span>
                            <div class="min-w-fit text-right text-sky-400">
                                <span>{{ work.startDate }}</span>
                                <div>
                                    <span> - </span>
                                    <span>{{ work.endDate ?? $t('messages.current') }}</span>
                                </div>
                            </div>
                        </div>
                        <!-- Roles -->
                        <div class="space-y-2">
                            <span class="font-medium">{{ $t('messages.roles') }}:</span>
                            <ul class="ml-6 list-outside list-disc">
                                <li v-for="(hightlight, hIndex) in work.highlights" :key="hIndex">
                                    {{ hightlight }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <!-- Aside -->
                <aside class="space-y-4 md:w-96">
                    <!-- Certificates -->
                    <section class="space-y-4">
                        <Heading leading="/" :value="$t('headings.cetificates')" />
                        <div v-for="(certificate, index) in json.certificates" :key="index" class="break-inside-avoid space-y-2">
                            <div class="flex items-center gap-2">
                                <KeywordIcon :name="certificate.keywords[0]" />
                                <NuxtLink external :to="certificate.url">
                                    {{ certificate.name }}
                                </NuxtLink>
                            </div>
                            <div>
                                <span class="block text-sky-400">
                                    {{ certificate.date }}
                                </span>
                                <span class="text-red-400">
                                    <NuxtLink external :to="`https://${certificate.issuer}`">
                                        ({{ getDomain(certificate.issuer) }})
                                    </NuxtLink>
                                </span>
                            </div>
                        </div>
                    </section>
                    <!-- Skills & Interests -->
                    <section class="space-y-4">
                        <Heading leading="/" :value="$t('headings.skills')" />
                        <!-- Skills -->
                        <div v-for="(skill, index) in json.skills" :key="index" class="break-inside-avoid space-y-2">
                            <span class="font-semibold text-purple-400">{{ skill.name }}</span>
                            <div class="flex flex-wrap gap-1">
                                <div v-for="(keyword, sIndex) in skill.keywords" :key="sIndex" class="inline-flex items-center gap-1 rounded border border-gray-400 px-1">
                                    <KeywordIcon :name="keyword" />
                                    <span>{{ keyword }}</span>
                                </div>
                            </div>
                        </div>
                        <!-- Languages -->
                        <div class="break-inside-avoid space-y-2">
                            <span class="font-semibold text-purple-400">{{ $t('headings.languages') }}</span>
                            <div class="flex flex-wrap gap-1">
                                <div v-for="(language, index) in json.languages" :key="index" class="inline-flex items-center gap-1 rounded border border-gray-400 px-1">
                                    <KeywordIcon :name="language.locale" />
                                    <span>{{ language.language }}</span>
                                </div>
                            </div>
                        </div>
                        <!-- Interests -->
                        <div class="break-inside-avoid space-y-2">
                            <span class="font-semibold text-purple-400">{{ $t('headings.interests') }}</span>
                            <div class="flex flex-wrap gap-1">
                                <div v-for="(interest, index) in json.interests" :key="index" class="flex flex-wrap">
                                    <div class="inline-flex items-center gap-1 rounded border border-gray-400 px-1">
                                        <span>{{ interest.name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </aside>
            </section>
            <!-- Footer -->
            <div class="h-4" />
        </div>
    </UContainer>
</template>

<style>
* {
    @apply font-mono
}
</style>
