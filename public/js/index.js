$(document).ready(function () {
	/** Review Carousel */

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

	const leftActive = () => {
		$('#reviews__left-arrow').attr(
			'src',
			'./images/icons/left-arrow-active.svg',
		);
	};

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
		leftActive();
		nextReview();
	});

	$('#reviews__left-arrow').click(function () {
		leftActive();
		prevReview();
	});

	/** Mailing List */

	const validateEmail = (email) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	const errorRed = '#e0807a';

	$('.mailing-list__submit-btn').attr('disabled', true);

	$('.mailing-list__email-input').focus(function () {
		$(this).addClass('mailing-list__email-input-error-placeholder');
		$('.mailing-list__submit-btn').css('backgroundColor', `${errorRed}`);
	});

	$('.mailing-list__email-input').focusout(function () {
		$(this).removeClass('mailing-list__email-input-error-placeholder');
		$('.mailing-list__submit-btn').css('backgroundColor', '#181818');
	});

	$('.mailing-list__email-input').keyup(function () {
		const email = $('.mailing-list__email-input').val();

		if (validateEmail(email)) {
			$('.mailing-list__submit-btn').attr('disabled', false);
			$(this).addClass('mailing-list__email-input-error-placeholder');
		} else {
			$('.mailing-list__submit-btn').attr('disabled', true);
			$(this).removeClass('mailing-list__email-input-error-placeholder');
		}
	});

	/** FAQ Dropdowns */

	$('.faq__text').hide();

	$('.faq').click(function () {
		$(this).find('.faq__text').slideToggle('slow');

		if (
			$(this).find('.faq-arrow').attr('src') ===
			'../images/icons/down-arrow.svg'
		) {
			$(this)
				.find('.faq-arrow')
				.attr('src', '../images/icons/up-arrow.svg');
		} else {
			$(this)
				.find('.faq-arrow')
				.attr('src', '../images/icons/down-arrow.svg');
		}
	});

	/** Marquee Animation */

	const marquee_sections = [
		'seating',
		'tables',
		'storage',
		'rugs',
		'lighting',
		'art',
		'misc',
	];

	const marquee_speeds = [85, 70, 60, 80, 70, 65, 75];

	marquee_sections.forEach(function (section, index) {
		const marquee = $('<marquee/>', {
			class: 'marquee',
			id: `marquee-${index + 1}`,
			scrollDelay: marquee_speeds[index],
		});

		for (let i = 1; i <= 200; i++) {
			const sectionDisplay =
				section.charAt(0).toUpperCase() + section.slice(1);

			const sectionLink = $('<a/>', {
				class: `marquee__section-link marquee__section-link-${
					index + 1
				}`,
				href: `./collection/${section}.html`,
				alt: `${sectionDisplay} Collection`,
				text: sectionDisplay,
			});

			const sectionImg = $('<img/>', {
				class: 'marquee__section-img',
				src: '../images/collections/example.svg',
				alt: `${sectionDisplay} Collection Image`,
			});

			marquee.append(sectionLink);
			marquee.append(sectionImg);
		}

		$('.marquee-section').append(marquee);
	});

	$('.marquee').css('text-indent', '-100%');

	// $('.grid').masonry({
	// 	// options
	// 	itemSelector: '.grid-item',
	// 	columnWidth: 200,
	// });
});
