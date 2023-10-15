import localeEN from "./locales/en.json";
import localeES from "./locales/es.json";

type MessageSchema = typeof localeEN;

export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en: localeEN,
        es: localeES,
    },
}));

declare global {
    export type i18nSchema = MessageSchema;
}
