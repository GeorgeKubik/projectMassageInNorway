

window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	const hamburger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');
	const btnClose = document.querySelector('.menu__close');

	hamburger.addEventListener('click', () => {
		menu.classList.add('active');
	});

	btnClose.addEventListener('click', () => {
		menu.classList.remove('active');
	});


	// forms

	const forms = document.querySelector('.contacts__form');


	const message = {
		loading: 'loading',
		success: 'Thank you! We will contact you soon',
		failure: 'Something went wrong...'
	};

	postData(forms);

	function postData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.textContent = message.success;
			form.append(statusMessage);
			setInterval(() => {
				statusMessage.classList.remove('status');
				statusMessage.textContent = '';
				form.removeChild(statusMessage);
			}, 3000)
		});
	}

	const emailList = document.querySelector(".emailList");
	const hostname = window.location.hostname;
	const prefix = "support@";
	emailList.setAttribute("href", "mailto:" + prefix + hostname);
	emailList.classList.add('emailList');
	emailList.textContent = `Email: ${prefix} ${hostname}`;
});
