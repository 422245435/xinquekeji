window.onload = function() {
	var menus = document.getElementsByClassName("nav_ul1")[0];
	var menu_li = menus.getElementsByTagName("li");
	var tu = document.getElementsByClassName("tu")[0];
	for(var i = 0; i < menu_li.length; i++) {
		menu_li[i].onclick = function() {
			for(var j = 0; j < menu_li.length; j++) {
				menu_li[j].className = "nav_li1"
			};

			this.className = "nav_li"
			
		};

	};
}

	$(".tu_r_img1-hover").mouseover(function() {
		$(".tu_r_img1").css("display", "block");
	});
	$("#nav-business").mouseout(function() {
		$(".tab1").css("display", "none");
	});