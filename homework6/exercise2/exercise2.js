jQuery(function ($) {
    //form submit handler
    $('#formID').submit(function (e) {
        //check atleat 1 checkbox is checked
        if (!$('.class_select').is(':checked')) {
            //prevent the default form submit if it is not checked
            e.preventDefault();
            alert("you have to attend atleast one class");
        }
    })
})


$("input[type='radio']").click(function(){
	checkRadio();
});

$('.class_select').click(function (e) {
    checkCheckBoxes();
})

function checkRadio() {
	var selected = false;
	var len = document.jQrgenform.year.length;
	var i;

	for(i = 0; i < len; i++){
		if(document.jQrgenform.year[i].checked){
			selected = true;
			break;
		}
	}

	if(!selected){
		document.getElementById("radio_error").innerHTML = "*";
		return false;
	}
	else{
		document.getElementById("radio_error").innerHTML = "";
		return true;
	}
}


function checkCheckBoxes(){
    if (!$('.class_select').is(':checked')) {
        document.getElementById("checkbox_error").innerHTML = "*";
    }else{
    	document.getElementById("checkbox_error").innerHTML = "";
    }
}

// init:
checkRadio()
checkCheckBoxes()