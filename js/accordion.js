var menu = document.querySelectorAll('.accordion .menu .menu__title');

for(var i = 0; i < menu.length; i++) {
	menu[i].addEventListener('click', openAccordion);
}

// 1. openAccordion : 아코디언 메뉴 다중 오픈하기
function openAccordion(e) {
	var parent = this.parentElement;
	var submenu = this.nextElementSibling;
	
	if (!parent.classList.contains('open')) {
		parent.classList.add('open');
		submenu.style.maxHeight = submenu.scrollHeight + 'px';
	}
	else {
		parent.classList.remove('open');
		submenu.style.maxHeight = '0px';
	}
}

// 2. openAccordion : 아코디언 메뉴 단독 오픈하기
function openCurrAccordion(e) {
	for(var i = 0; i < menu.length; i++) {
		var parent = menu[i].parentElement;
		var submenu = menu[i].nextElementSibling;

		if (this === menu[i] && !parent.classList.contains('open')) {
			parent.classList.add('open');
			submenu.style.maxHeight = submenu.scrollHeight + 'px';
		}
		else {
			parent.classList.remove('open');
			submenu.style.maxHeight = '0px';
		}
	}
}
