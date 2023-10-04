$(document).ready(function () {
	let reviews = [
		{
			author: "Emily",
			text: "I fell in love with their unique pieces; my recent purchase has transformed my living room into a cozy haven of elegance.",
		},
		{
			author: "Michael",
			text: "As a collector, I am blown away by the authenticity and quality of the vintage furniture",
		},
		{
			author: "Sophia",
			text: "The Warehouse's curated selection is a dream come true for vintage enthusiasts like me",
		},
		{
			author: "Daniel",
			text: "I've shopped around for antique furniture extensively, and The Warehouse stands out",
		},
		{
			author: "Olivia",
			text: "Finding charming and well-maintained vintage pieces has never been easier",
		},
	];

	reviews.forEach(function (review) {
		let reviewDiv = document.createElement("div");
		reviewDiv.classList.add("review");

		let author = document.createElement("p");
		author.classList.add("review__author");
		author.innerText = review.author;

		let text = document.createElement("p");
		text.classList.add("review__text");
		text.innerText = review.text;

		reviewDiv.appendChild(author);
		reviewDiv.appendChild(text);

		// let reviewList = document.getElementById("review-list");
		// let reviewsShown = reviewList.getElementsByTagName("*").length;

		document.querySelector(".reviews__right").appendChild(reviewDiv);
	});
});
