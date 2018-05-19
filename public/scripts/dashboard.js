$(document).ready(() => {
    setupClickHandler();
});


function setupClickHandler () {
    // Hide all the save btn
    $(".save-btn").hide();
    
    $(".edit-btn").click((e) => {
        const content = $(e.target).closest(".progress-topic-content");
        
        content.toggleClass("active");
        content.find("textarea").removeAttr("disabled", "dis");
        
        // Hide the save and submit btn
        content.find(".submit-btn, .edit-btn").hide();
        content.find(".save-btn").show();
        
        content.find("textarea").focus();
    });
    
    $(".save-btn").click((e) => {
        const content = $(e.target).closest(".progress-topic-content");
        
        content.toggleClass("active");
        content.find("textarea").attr("disabled", "disabled");
        
        // Hide the save and submit btn
        content.find(".submit-btn, .edit-btn").show();
        content.find(".save-btn").hide();
    });
}
