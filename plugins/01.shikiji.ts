import _ from "lodash";
import { getHighlighter } from "shikiji";
import type { BuiltinLanguage, BuiltinTheme } from "shikiji";

export default defineNuxtPlugin(async () => {
    const themes: BuiltinTheme[] = ["material-theme-darker", "material-theme-lighter"];
    const langs: BuiltinLanguage[] = ["javascript", "json"];
    const highlighter = await getHighlighter({ themes, langs });

    function codeToHtml(code: string, lang?: BuiltinLanguage) {
        if (_.startsWith(code, "````"))
            code = _.chain(code).split("\n").slice(1, -2).join("\n").value();
        let tags = highlighter.codeToHtml(code, {
            lang: lang ?? langs[0],
            themes: {
                dark: themes[0],
                light: themes[1],
            },
        });
        tags = tags.replaceAll(/<span([^>]*)>(https?:\/\/\S+)<\/span>/gi, "<a$1 href=\"$2\">$2</a>");
        return tags;
    }

    return {
        provide: {
            shikiji: {
                highlighter,
                codeToHtml,
                langs,
                themes,
            },
        },
    };
});
