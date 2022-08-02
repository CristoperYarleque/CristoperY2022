(function(){

	'use strict'


	var siteMenuClone = function() {
		var jsCloneNavs = document.querySelectorAll('.js-clone-nav');
		var siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');
		


		jsCloneNavs.forEach(nav => {
			var navCloned = nav.cloneNode(true);
			navCloned.setAttribute('class', 'site-nav-wrap');
			siteMobileMenuBody.appendChild(navCloned);
		});

		setTimeout(function(){

			var hasChildrens = document.querySelector('.site-mobile-menu').querySelectorAll(' .has-children');

			var counter = 0;
			hasChildrens.forEach( hasChild => {
				
				var refEl = hasChild.querySelector('a');

				var newElSpan = document.createElement('span');
				newElSpan.setAttribute('class', 'arrow-collapse collapsed');

				// prepend equivalent to jquery
				hasChild.insertBefore(newElSpan, refEl);

				var arrowCollapse = hasChild.querySelector('.arrow-collapse');
				arrowCollapse.setAttribute('data-bs-toggle', 'collapse');
				arrowCollapse.setAttribute('data-bs-target', '#collapseItem' + counter);

				var dropdown = hasChild.querySelector('.dropdown');
				dropdown.setAttribute('class', 'collapse');
				dropdown.setAttribute('id', 'collapseItem' + counter);

				counter++;
			});

		}, 1000);


		// Click js-menu-toggle

		var menuToggle = document.querySelectorAll(".js-menu-toggle");
		var mTog;
		menuToggle.forEach(mtoggle => {
			mTog = mtoggle;
			mtoggle.addEventListener("click", (e) => {
				if ( document.body.classList.contains('offcanvas-menu') ) {
					document.body.classList.remove('offcanvas-menu');
					mtoggle.classList.remove('active');
					mTog.classList.remove('active');
				} else {
					document.body.classList.add('offcanvas-menu');
					mtoggle.classList.add('active');
					mTog.classList.add('active');
				}
			});
		})



		var specifiedElement = document.querySelector(".site-mobile-menu");
		var mt, mtoggleTemp;
		document.addEventListener('click', function(event) {
			var isClickInside = specifiedElement.contains(event.target);
			menuToggle.forEach(mtoggle => {
				mtoggleTemp = mtoggle
				mt = mtoggle.contains(event.target);
			})

			if (!isClickInside && !mt) {
				if ( document.body.classList.contains('offcanvas-menu') ) {
					document.body.classList.remove('offcanvas-menu');
					mtoggleTemp.classList.remove('active');
				}
			}

		});

	}; 
	siteMenuClone();


})()

const typed = new Typed('.typed',{
	strings: ["<i>Cristoper Yarleque<?i>"],
	// stringsElement: '#cadenas-texto',
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});