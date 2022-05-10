$(document).ready(function() {
    // action on submitting form
    $("#scriptForm").on('submit', function(e) {
        e.preventDefault(); //prevent default form action

        $("#output").html("<span id='loading'>loading...</span>");

        let language = $("#scriptForm select[name=language]").val();
        let script = editor.getValue();

        let actionURL = $(this).attr('action');

        // async POST request to /api
        $.ajax({
            async: true,
            type: "POST",
            url: actionURL,
            data: JSON.stringify({ language: language, script: script }),
            success: (data, status) => {
                $("#output").text(data["output"]);
            },
            error: (data, status) => {
                $("#output").text("Error occured during execution of your request.");
            }
        });
    });
})

