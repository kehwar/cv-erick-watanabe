import resumeEN from "assets/resume_en.json";
import resumeES from "assets/resume_es.json";
import type { JsonResume } from "~/facades/jsonresume";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en: { resume: resumeEN },
        es: { resume: resumeES },
    } satisfies Record<string, DeepPartial<I18nSchema["message"]>>,
}));

declare global {
    export interface I18nSchema {
        message: { resume: JsonResume }
    }
}
