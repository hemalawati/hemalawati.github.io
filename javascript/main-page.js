window.addEventListener('contextmenu', (event) => {
	event.preventDefault();
});

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

document.addEventListener('submit', function (evt) {
	evt.preventDefault();

	const { name, email, message } = document.querySelector('form').elements;
	let obj = { name: name.value, email: email.value, message: message.value };

	fetch('https://submit-form.com/AcsxvW0H', {
		method: 'POST',
		body: JSON.stringify(obj),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	document.getElementsByClassName('full-name')[0].innerHTML = name.value;
	document.querySelector('form').reset();
});
