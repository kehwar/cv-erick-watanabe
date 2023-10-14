async function getResumeData(locale: string) {
    const filename = `resume_${locale}.json`;
    const json = await import(`assets/resume/resume_${locale}.json`) as Resume;
    return { filename, json };
}

export async function useResumeData() {
    const { locale } = useI18n();
    return asyncComputed(() => {
        return getResumeData(locale.value);
    }, await getResumeData(locale.value));
}

interface Certificate {
    name: string
    issuer: string
    url: string
    date: string
    keywords: string[]
}

interface Work {
    company: string
    position: string
    highlights: string[]
    startDate: string
    endDate?: string
}

interface Skill {
    keywords: string[]
    name: string
}

interface Interest {
    name: string
}

interface Language {
    language: string
    fluency: string
    locale: string
}

interface Resume {
    selectedTemplate: number
    headings: {
        skills: string
        certificates: string
        work: string
    }
    basics: {
        name: string
        email: string
        phone: string
        label: string
    }
    certificates: Certificate[]
    work: Work[]
    skills: Skill[]
    interests: Interest[]
    languages: Language[]
}
