// mappings from api-lang-name to ace-lang-name
let languages = {
    "python3": "python",
    "cpp": "c_cpp"
}

// Ace Editor Configs
var editor = ace.edit("editor", {
    autoScrollEditorIntoView: true,
    minLines: 20,
    maxLines: 20,
    fontSize: 14,
    cursorStyle: "smooth"
});

// changing language mode of editor
let select_language = document.getElementById("language");
select_language.addEventListener("change", () => {
    let lang = languages[select_language.value];
    editor.session.setMode(`ace/mode/${lang}`);
});

// changing editor theme
let select_theme = document.getElementById("theme");
select_theme.addEventListener("change", () => {
    let theme = select_theme.value;
    editor.setTheme(`ace/theme/${theme}`);
})

// intial configs
editor.session.setMode(`ace/mode/${languages[select_language.value]}`);
editor.setTheme(`ace/theme/${select_theme.value}`);

