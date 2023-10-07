$(document).ready(function () {
	const reviews = [
		{
			author: 'Emily',
			text: 'I fell in love with their unique pieces; my recent purchase has transformed my living room into a cozy haven of elegance.',
		},
		{
			author: 'Michael',
			text: 'As a collector, I am blown away by the authenticity and quality of the vintage furniture',
		},
		{
			author: 'Sophia',
			text: "The Warehouse's curated selection is a dream come true for vintage enthusiasts like me",
		},
		{
			author: 'Daniel',
			text: "I've shopped around for antique furniture extensively, and The Warehouse stands out",
		},
		{
			author: 'Olivia',
			text: 'Finding charming and well-maintained vintage pieces has never been easier',
		},
	];

	for (const [index, review] of reviews.entries()) {
		const reviewDiv = $('<div/>', {
			class: `${index === 0 ? 'review__active review' : 'review'}`,
			id: `review-${index}`,
		});

		const author = $('<p/>', {
			class: 'review__author',
			text: review.author,
		});

		const text = $('<p/>', {
			class: 'review__text',
			text: review.text,
		});

		reviewDiv.append(author);
		reviewDiv.append(text);
		$('.reviews__list').append(reviewDiv);
	}

	// card getting smaller and disappearing

	const nextReview = () => {
		let firstReview = $('.reviews__list').children().first();

		firstReview.hide('slow', function () {
			$('.reviews__list').append(firstReview);
			firstReview.show('slow');
		});
	};

	const prevReview = () => {
		let lastReview = $('.reviews__list').children().last();

		lastReview.hide('slow', function () {
			$('.reviews__list').prepend(lastReview);
			lastReview.show('slow');
		});
	};

	$('#reviews__right-arrow').click(function () {
		nextReview();
	});

	$('#reviews__left-arrow').click(function () {
		prevReview();
	});
});
