import { chain, startsWith } from "lodash";
import { getHighlighter } from "shikiji";
import type { BuiltinLanguage, BuiltinTheme } from "shikiji";

const themes: BuiltinTheme[] = ["material-theme-darker", "material-theme-lighter"];
const langs: BuiltinLanguage[] = ["javascript", "json"];
const highlighter = await getHighlighter({ themes, langs });

function codeToHtml(code: string, lang?: BuiltinLanguage) {
    if (startsWith(code, "````"))
        code = chain(code).split("\n").slice(1, -2).join("\n").value();
    return highlighter.codeToHtml(code, {
        lang: lang ?? langs[0],
        themes: {
            dark: themes[0],
            light: themes[1],
        },
    });
}

function useHighlighter() {
    return { codeToHtml, highlighter };
}

export default useHighlighter;
