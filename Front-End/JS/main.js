$(function() {
    // Make bubbles draggable
    $(".functionality").draggable({
        revert: "invalid", // Revert if not dropped in a droppable area
        helper: "clone", // Clone the element while dragging
        cursor: "move" // Set cursor to move while dragging
    });

    // Make divs droppable
    $(".droping-div").droppable({
        accept: ".functionality", // Specify which elements can be dropped
        drop: function(event, ui) {
            // Append the dropped element to the droppable div
            $(this).append($(ui.helper).clone());
        }
    });
});


$(function() {
    // Create new env-info-input-div on button click
    $("#new-env").on("click", function() {
        var newEnvInputDiv = $("#env-info-input-div").clone(); // Clone the existing div
        newEnvInputDiv.find("input[type=text]").val(""); // Clear input values
        $("#env-info-input-div-container").append(newEnvInputDiv); // Append the cloned div
    });

    // File upload functionality
    $("#upload-env").on("click", function() {
        // Your file upload logic here
        alert("Upload CSV functionality will be implemented here.");
    });
});

