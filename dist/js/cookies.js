const cookieBox = document.querySelector('.cookies');
const btns = document.querySelectorAll('.cookies__btn');

const executeCodes = () => {
	if (document.cookie.includes('cookie')) return;
	cookieBox.classList.add('cookies__show');

	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			cookieBox.classList.remove('cookies__show');

			if (btn.id == 'acceptBtn') {
				document.cookie = 'cookie; max-age=' + 60 * 60 * 24 * 30;
			}
		})
	})

}

window.addEventListener('load', executeCodes);