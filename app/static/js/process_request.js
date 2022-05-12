$(document).ready(function() {
    // action on submitting form
    $("#scriptForm").on('submit', function(e) {
        e.preventDefault(); //prevent default form action

        // loading text
        $("#output").html("<span id='loading'>loading...</span>");

        // form data
        let language = $("#scriptForm select[name=language]").val();
        let script = editor.getValue();
        let actionURL = $(this).attr('action');

        // async POST request to '/api'
        $.ajax({
            async: true,
            type: "POST",
            url: actionURL,
            data: JSON.stringify({ language: language, script: script }),
            success: (res_data, status) => {    // if successful
                let output = `${res_data["output"]}<br>`+
                    `<span id="additional_info">CpuTime: ${res_data["cpuTime"]} | `+
                    `Memory: ${res_data["memory"]}</span><br>`

                $("#output").html(output);
            },
            error: (data, status) => {  // if not successful
                let output = `<span style="color:red">Something Unexpected Happened!</span>`;
                $("#output").html(output);
            }
        });
    });
})

