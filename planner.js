$(document).ready(function () {
    //save buttons
    $('.saveBtn').on('click', function() {
        //gets values
var textSpace = $(this).siblings('.description').val();
var time = $(this).parent().attr('id');

localStorage.setItem(time, textSpace);

});

function hours() {
    //gets hours
    var currentTime = moment().hours();

    $('.time-block').each(function() {
        var hourBlocks = parseInt($(this).attr('id').split('-'[1]);
        if(hourBlocks < currentTime) {
            $(this).addClass('past');
        }
        else if (hourBlocks === currentTime) {
            $(this).removeClass('past');
            $(this).addClass('present');
        }
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
    hours();
}
})