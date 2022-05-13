$(document).ready(function() {
    // action on submitting form
    $("#scriptForm").on('submit', function(e) {
        e.preventDefault(); //prevent default form action

        // loading text
        var count = 0;
        var loading = setInterval(function() {
            let n = (count % 3) + 1;
            let loading_text = "shaking" + ".".repeat(n);
            $("#output").html(`<span style="color:gray;">${loading_text}</span>`);
            count++;
        }, 500);

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
                clearInterval(loading);
                let output = `${res_data["output"]}<br>`+
                    `<span id="additional_info">CpuTime: ${res_data["cpuTime"]} | `+
                    `Memory: ${res_data["memory"]}B</span><br>`

                $("#output").html(output);
            },
            error: (data, status) => {  // if not successful
                let output = `<span style="color:red">Something Unexpected Happened!</span>`;
                $("#output").html(output);
            }
        });
    });
})

