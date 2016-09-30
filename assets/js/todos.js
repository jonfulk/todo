//check off specific todos by clicking
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

//delete a todo item by clicking
$('ul').on('click', 'span', function(e) {
	$(this).parent().fadeOut(600, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13) {
		//grabbing text from input
		var todoText = $(this).val();
		$(this).val('');
		//create new li and add to ul
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
	}
});

$('.fa-plus-circle').on('click', function() {
	$('input').fadeToggle();
})
