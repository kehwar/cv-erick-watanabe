function getResumeData(locale: string) {
    return import(`assets/resume_${locale}.json`);
}

export async function useResumeData() {
    const { locale } = useI18n();
    return asyncComputed(() => {
        return getResumeData(locale.value);
    }, await getResumeData(locale.value));
}
