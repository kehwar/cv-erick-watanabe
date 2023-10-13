async function getResumeData(locale: string) {
    const filename = `resume_${locale}.json`;
    const json = await import(`assets/resume/resume_${locale}.json`);
    return { filename, json };
}

export async function useResumeData() {
    const { locale } = useI18n();
    return asyncComputed(() => {
        return getResumeData(locale.value);
    }, await getResumeData(locale.value));
}
