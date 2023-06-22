// mappings from api-lang-name to ace-lang-name
let languages = {
  "python3": "python",
  "java": "java",
  "cpp": "c_cpp",
  "cpp14": "c_cpp",
  "cpp17": "c_cpp",
  "csharp": "csharp",
  "sql": "mysql",
  "perl": "perl",
  "go": "golang",
  "bash": "batchfile"
}

// initial configs
let select_language = document.getElementById("language");
let select_theme = document.getElementById("theme");

// Ace Editor Configs
var editor = ace.edit("editor", {
  highlightActiveLine: true,
  autoScrollEditorIntoView: true,
  minLines: 37,
  maxLines: 37,
  fontSize: 18,
  cursorStyle: "smooth",
  mode: `ace/mode/${languages[select_language.value]}`,
  theme: `ace/theme/${select_theme.value}`
});

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

  $(window).resize(function() {
    editor.resize();
  });
})

