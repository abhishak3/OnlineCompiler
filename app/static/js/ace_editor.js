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
    let lang = select_language.value;
    console.log(`ace/mode/${languages[lang]}`);
    editor.session.setMode(`ace/mode/${languages[lang]}`);
});

editor.session.setMode(`ace/mode/${languages[select_language.value]}`);
editor.setTheme("ace/theme/twilight");

