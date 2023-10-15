export function getKeyworkIcon(keyword: string) {
    switch (keyword) {
        case "NuxtJS": {
            return "i-vscode-icons-file-type-nuxt";
        }
        case "Javascript": {
            return "i-vscode-icons-file-type-js-official";
        }
        case "Typescript": {
            return "i-vscode-icons-file-type-typescript-official";
        }
        case "VueJS": {
            return "i-vscode-icons-file-type-vue";
        }
        case "TailwindCSS": {
            return "i-vscode-icons-file-type-tailwind";
        }
        case "HTML": {
            return "i-vscode-icons-file-type-html";
        }
        case "CSS": {
            return "i-vscode-icons-file-type-css";
        }
        case "SASS": {
            return "i-vscode-icons-file-type-sass";
        }
        case "NodeJS": {
            return "i-vscode-icons-file-type-node";
        }
        case "MSSQL": {
            return "i-vscode-icons-file-type-sql";
        }
        case "es-PE": {
            return "i-twemoji-flag-peru";
        }
        case "es-EN": {
            return "i-twemoji-flag-united-states";
        }
        default: {
            return "";
        }
    }
}
