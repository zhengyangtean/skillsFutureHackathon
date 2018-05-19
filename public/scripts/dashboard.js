$(document).ready(() => {
    setupClickHandler();
});


function setupClickHandler () {
    $(".topic-item").click((e) => {
        const content = $(e.target).closest(".topic-item").find(".topic-content");
        content.toggle();
    });
}
