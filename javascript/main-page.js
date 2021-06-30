// window.addEventListener('contextmenu', (event) => {
// 	event.preventDefault();
// });

window.addEventListener('scroll', () => {
	let nav = document.querySelector('nav');
	let windowPosition = scrollY > 0;
	nav.classList.toggle('scrolling-active', windowPosition);
});

hideOrShowIntro = () => {
	$('#mainNav')
		.on('show.bs.collapse', () => {
			document.getElementsByClassName('greeting')[0].style.visibility =
				'hidden';
		})
		.on('hidden.bs.collapse', () => {
			document.getElementsByClassName('greeting')[0].style.visibility =
				'visible';
		});
};
