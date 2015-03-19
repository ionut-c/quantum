$(document).ready(function () {
    $('.qToggler').click(function () {
        $(this).toggleClass('expanded');
        $('[data-source='+$(this).attr("data-target")+']').slideToggle("fast");
    });
    $('.qToggler').each(function() {
    	$('[data-source='+$(this).attr("data-target")+']').slideUp(0);
    })
});