const KeywordIcon = {
    "NuxtJS": "i-vscode-icons-file-type-nuxt",
    "Javascript": "i-vscode-icons-file-type-js-official",
    "Typescript": "i-vscode-icons-file-type-typescript-official",
    "VueJS": "i-vscode-icons-file-type-vue",
    "TailwindCSS": "i-vscode-icons-file-type-tailwind",
    "HTML": "i-vscode-icons-file-type-html",
    "CSS": "i-vscode-icons-file-type-css",
    "SASS": "i-vscode-icons-file-type-sass",
    "NodeJS": "i-vscode-icons-file-type-node",
    "MSSQL": "i-vscode-icons-file-type-sql",
    "es-PE": "i-twemoji-flag-peru",
    "en-US": "i-twemoji-flag-united-states",
};

export function getKeyworkIcon(keyword: string) {
    return KeywordIcon[keyword as keyof typeof KeywordIcon];
}

export default getKeyworkIcon;
