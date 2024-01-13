const copyrightSymbol = document.querySelector("#copyright");
const copyrightText = document.querySelector("#copyright-name");
const stagedLinkElement = <HTMLParagraphElement>document.getElementById("staged-link-text");
const linkElements = <Array<HTMLButtonElement>>[...document.querySelectorAll(".stage-link")];
const modalElement = <HTMLDivElement>document.querySelector(".modal-background");
const continueLinkElement = <HTMLAnchorElement>document.getElementById("continue-link");
const modalCancelButton = <HTMLButtonElement>document.querySelector(".btn.btn-pill.btn-dialogue.btn-cancel");

linkElements.forEach((button) => {
	button.addEventListener("click", () => {
		modalElement.classList.remove("hidden");
		stagedLinkElement.textContent = button.dataset.linkText!;
		continueLinkElement.href = button.dataset.link!;
	});
});

modalCancelButton.addEventListener("click", () => {
	modalElement.classList.add("hidden");
});

if (copyrightSymbol != null) {
	copyrightSymbol.textContent = "\uF7DB";
}

if (copyrightText != null) {
	const todaysDate = new Date();
	copyrightText.innerHTML = `${todaysDate.getFullYear()} Jan Nothacker - <a href="https://github.com/JaN0h4ck/LinkList">Source Code</a>`;
}
