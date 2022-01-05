function getLanguageColor(language) {
    language = languages.find(item => item.name === language);
    if (language) {
        return language;
    } else {
        return {
            color: "#333"
        }
    }
}


var languages = [
    {
        name: "HTML",
        color: "#e34c26",
    },
    {
        name: "SCSS",
        color: "#c6538c",
    },

    {
        name: "JavaScript",
        color: "#f1e05a",
    },
    {
        name: "PHP",
        color: "#4F5D95",
    }
]