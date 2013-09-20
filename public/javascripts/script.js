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
				var item = $("#input").val();
				$.ajax({
					url: "/add_item",
					data: {item: item},
					method: "POST",
					success: function(data){
						$("#items").append("<li>"+ data.id + " "+ data.item + " " + data.value +"</li>");
					}
				});
				$("#input").val("");
			}
		}
	});
});
