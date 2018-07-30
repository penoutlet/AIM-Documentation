$('.task-description').hide()
$('#add-description-button').on('click',function(){
	// $('#add-description').show()
$('#add-description').toggle()

})

$('#display-description-button').on('click',function(){
	$('#display-description').toggle()
})

$('#remove-description-button').on('click',function(){
	$('#remove-description').toggle()
})
$('#finalize-description-button').on('click',function(){
	$('#finalize-description').toggle()

})
