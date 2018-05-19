$(document).ready(() => {
    setupClickHandler();
    $("#inProgress").hide()
});


function setupClickHandler () {
    $(".topic-item").click((e) => {
        const content = $(e.target).closest(".topic-item").find(".topic-content");
        content.toggle();

    });

    $("#acceptJob").click((e) => {
        $("#AvailableTopic").hide()
        $("#inProgress").show()
    });
}
