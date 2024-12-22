$(function() {

    $(".functionality").draggable({
        helper: "clone", 
        cursor: "move", 
        start: function(event, ui) {
            $(this).data("startPosition", ui.position); 
        }
    });


    $(".droping-div").droppable({
        accept: ".functionality", 
        drop: function(event, ui) {
            var droppedBubble = ui.draggable;
            
            if (!droppedBubble.hasClass("cloned")) {
                
                droppedBubble = droppedBubble.clone().addClass("cloned");
            }
            
            
            droppedBubble.css({
                position: "relative",
                top: 0,
                left: 0 
            }).appendTo(this);


droppedBubble.draggable({
    revert: "invalid", 
    cursor: "move", 
    start: function(event, ui) {
        $(this).data("startPosition", ui.position); 
    }
});
        }
    });

    $(".droping-div").css("overflow-y", "auto");
});



//ADD ENV INFO
$(function() {

    $("#new-env").on("click", function() {
        var newEnvInputDiv = $("#env-info-input-div").clone(); 
        newEnvInputDiv.find("input[type=text]").val(""); 
        $("#env-info-input-div-container").append(newEnvInputDiv); 
    });

});

// UPLOAD ENV FILE
$(function() {
    
    $("#upload-env").on("click", function() {
        $("#csv-file-input").click(); 
    });

    $("#csv-file-input").on("change", function() {

        var selectedFile = this.files[0];
        console.log("Selected file:", selectedFile);
    });
});