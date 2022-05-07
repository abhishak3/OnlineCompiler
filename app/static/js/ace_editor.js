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

// intial configs
let select_language = document.getElementById("language");
let select_theme = document.getElementById("theme");
editor.session.setMode(`ace/mode/${languages[select_language.value]}`);
editor.setTheme(`ace/theme/${select_theme.value}`);

// jquery
$(function() {
    // changing language mode of editor
    $("#language").on("change", function() {
        let lang = languages[$(this).val()];
        editor.session.setMode(`ace/mode/${lang}`);
    })

    // changing editor theme
    $("#theme").on("change", function() {
        let theme = $(this).val();
        editor.setTheme(`ace/theme/${theme}`);
    })
})

