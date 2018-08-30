;(function (window, document, undefined) {
	'use strict';
	if (!('localStorage' in window)) return;
	var nightMode = localStorage.getItem('gmtNightMode');
	if (nightMode) {
		document.documentElement.className += ' night-mode';
	}
})(window, document);

;(function (window, document, undefined) {
	
	'use strict';

	// Feature test
	if (!('localStorage' in window)) return;

	// Get the navigation menu
	var nav = document.querySelector('#menu-primary');
	if (!nav) return;

	/* Insert the night mode toggle (Check cookies for icon's use)  **
	** Change HTML code bellow by yours				*/
	if (localStorage.getItem('gmtNightMode'))
		nav.innerHTML += '<li id="night-mode"><a class="mdl-navigation__link" href="#"><i id="iconID" class="zmdi zmdi-brightness-5 zmdi-hc-2x"></i></a></li>';
	else
	    	nav.innerHTML += '<li id="night-mode"><a class="mdl-navigation__link" href="#"><i id="iconID" class="zmdi zmdi-brightness-2 zmdi-hc-2x"></i></a></li>';
	
	// Get our newly insert toggle
	var nightMode = document.querySelector('#night-mode');
	if (!nightMode) return;

	// When clicked, toggle night mode on or off
	nightMode.addEventListener('click', function (event) {
		event.preventDefault();
		// Change icon if night mode is on
		if (document.documentElement.classList.toggle('night-mode') === true)
			document.getElementById('iconID').className = "zmdi zmdi-brightness-5 zmdi-hc-2x";
		else
		    	document.getElementById('iconID').className = "zmdi zmdi-brightness-2 zmdi-hc-2x";
		if ( document.documentElement.classList.contains('night-mode') ) {
			localStorage.setItem('gmtNightMode', true);
			return;
		}
		localStorage.removeItem('gmtNightMode');
	}, false);
})(window, document);
