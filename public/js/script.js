document.addEventListener('DOMContentLoaded', function() {
	const urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('subscribed') && urlParams.get('subscribed') === 'true') {
		const thankYou = document.getElementById('thank-you-message');
		if (thankYou) thankYou.style.display = 'block';
	}

	const termsCheckbox = document.getElementById('terms-checkbox');
	const submitBtn = document.getElementById('submit-button');
	const warning = document.getElementById('warning-message');
	const form = document.getElementById('subscription-form');

	if (termsCheckbox && submitBtn && warning) {
		termsCheckbox.addEventListener('change', function() {
			submitBtn.disabled = !this.checked;
			warning.style.display = 'none';
		});
	}

	if (form && termsCheckbox && warning) {
		form.addEventListener('submit', function(event) {
			if (!termsCheckbox.checked) {
				event.preventDefault();
				warning.style.display = 'block';
			}
		});
	}

	const chatBubble = document.getElementById('chat-bubble');
	const chatWindow = document.getElementById('chat-window');
	const closeButton = document.querySelector('.chat-header .close');

	if (chatBubble && chatWindow) {
		chatBubble.addEventListener('click', function() {
			chatWindow.style.display = (chatWindow.style.display === 'block') ? 'none' : 'block';
		});
	}

	if (closeButton && chatWindow) {
		closeButton.addEventListener('click', () => {
			chatWindow.style.display = 'none';
		});
	}
});
