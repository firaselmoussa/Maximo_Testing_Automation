$(function() {
    // Make bubbles draggable
    $(".functionality").draggable({
        helper: "clone", // Clone the element while dragging
        cursor: "move", // Set cursor to move while dragging
        start: function(event, ui) {
            $(this).data("startPosition", ui.position); // Store the start position of the draggable element
        }
    });

    // Make divs droppable
    $(".droping-div").droppable({
        accept: ".functionality", // Specify which elements can be dropped
        drop: function(event, ui) {
            var droppedBubble = ui.draggable;

            // Check if the dropped bubble is coming from the parent div
            if (!droppedBubble.hasClass("cloned")) {
                // Clone the dropped bubble if it's from the parent div
                droppedBubble = droppedBubble.clone().addClass("cloned");
            }
            
            // Set its position to absolute and append it to the droppable area
            droppedBubble.css({
                position: "relative",
                top: 0,
                left: 0 // Reset left position
            }).appendTo(this);

// Make the dropped bubble draggable again
droppedBubble.draggable({
    revert: "invalid", // Revert if not dropped in a droppable area
    cursor: "move", // Set cursor to move while dragging
    start: function(event, ui) {
        $(this).data("startPosition", ui.position); // Store the start position of the draggable element
    }
});
        }
    });

    // Make droppable div scrollable
    $(".droping-div").css("overflow-y", "auto");
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