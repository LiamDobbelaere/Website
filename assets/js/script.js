var listItems;
var index = 0;
var rolled_over = false;

$(function() {
    listItems = $("#container").find(".hex");

    simulateHover();

    function simulateHover() {
        if (!rolled_over) $(listItems[index]).addClass("hover");
        if (index - 1 >= 0) $(listItems[index - 1]).removeClass("hover");
        else $(listItems[listItems.length - 1]).removeClass("hover");

        if (!rolled_over) setTimeout(simulateHover, 300);

        index++;
        if (index >= listItems.length) {
            index = 0;
            rolled_over = true;
        }
    }
});