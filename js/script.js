// Sets the current date and default theme to light
const today = new Date();
let theme = 'light';

// Change the theme based on the user's preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	document.documentElement.setAttribute('data-bs-theme', 'dark');
	theme = 'dark';
}

// Appends a random Clippy GIF to the page for April Fools Day
aprilFools = () => {
	const rand = Math.floor(Math.random() * 23) + 1;
	const clippy = document.createElement('img');

	clippy.src = 'images/' + theme + '/' + rand + '.gif';
	clippy.style.position = 'fixed';
	clippy.style.bottom = '20px';
	clippy.style.left = '20px';
	
	clippy.onclick = () => {
		alert('It looks like you are trying to browse my website. Would you like help?');
		alert('April Fools!');
	}
	
	document.body.appendChild(clippy);
}

// If today is April 1st and before noon, run the April Fools function
if (today.getMonth() == 3 && today.getDate() == 1 && today.getHours() < 12) {
	aprilFools();
}