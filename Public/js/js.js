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

// ===================================================

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
openNav()
