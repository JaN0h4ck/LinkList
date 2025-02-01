const copyrightSymbol = document.querySelector("#copyright");
const copyrightText = document.querySelector("#copyright-name");

if (copyrightSymbol != null) {
	copyrightSymbol.textContent = "\uF7DB";
}

if (copyrightText != null) {
	const todaysDate = new Date();
	copyrightText.innerHTML = `${todaysDate.getFullYear()} Jan Nothacker - <a href="https://github.com/JaN0h4ck/LinkList">Source Code</a>`;
}
