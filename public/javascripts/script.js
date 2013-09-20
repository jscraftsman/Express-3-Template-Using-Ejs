var KEYS = {
	L: 37,
	R: 39,
	ESC: 27,
	ENTER: 13,
	SHIFT: 16
};
var SHIFT_ON = false;
$(function(){
	$("input[type=text]").focus();
	$(document).on("keyup", "body", function(e){
		var targetInput = $('#input');

		if(targetInput.is(document.activeElement)) {
			if(e.which == KEYS.ESC){
				$("input[type=text]").val("").focus();
			}else if(e.which == KEYS.ENTER){
				$("#items").append("<li>"+$("#input").val()+"</li>");
				$("input[type=text]").val("");

				$("#add_item").submit();
			}else if(e.which == KEYS.SHIFT){
				$("a")[0].focus();
			}
		}else{
			switch(e.which){
				case KEYS.L:
					window.location = "/";
					break;
				case KEYS.R:
					window.location = "/add";
					break;
				default:
				break;
			}
		}
	});
});
