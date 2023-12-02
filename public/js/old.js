$(document).ready(function () {
	// Navbar Dropdown

	const mobileCategories = [
		'seating',
		'tables',
		'storage',
		'rugs',
		'lighting',
		'art',
		'misc',
	];

	const navbar = $('.navbar-nav');

	const renderMobileDropdown = () => {
		if ($(window).width() < 992) {
			if ($('.navbar__link-mobile').length === 0) {
				mobileCategories.forEach(function (category) {
					const navItem = $('<li/>', {
						class: 'nav-item',
					});

					const navLink = $('<a/>', {
						class: 'nav-link navbar__link navbar__link-mobile',
						id: `navbar__link-${category}`,
						href: `/pages/collection/${category}.html`,
						text:
							category.charAt(0).toUpperCase() +
							category.slice(1),
					});

					navLink.appendTo(navItem);
					navItem.appendTo(navbar);

					if (
						location.pathname ===
						`/pages/collection/${category}.html`
					) {
						navLink.addClass('navlink__active-mobile');
					}
				});

				if (location.pathname === '/pages/about.html') {
					$('#navbar__link-about').addClass('navlink__active-mobile');
				} else if (location.pathname === '/pages/contact.html') {
					$('#navbar__link-contact').addClass(
						'navlink__active-mobile',
					);
				}
			}
		} else {
			$('.navbar__link-mobile').remove();
		}
	};

	renderMobileDropdown();

	$(window).resize(function () {
		renderMobileDropdown();
	});

	let toggleCollapse = true;

	$('.navbar-toggler-icon').css(
		'background-image',
		"url('/images/icons/hamburger.svg')",
	);

	$('.navbar-toggler').click(function () {
		if (toggleCollapse) {
			$('.navbar-toggler-icon').css(
				'background-image',
				"url('/images/icons/close-hamburger.svg')",
			);

			toggleCollapse = false;
		} else {
			$('.navbar-toggler-icon').css(
				'background-image',
				"url('/images/icons/hamburger.svg')",
			);

			toggleCollapse = true;
		}
	});

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

	const emailInputRow = $('.mailing-list__input-row');
	const emailInput = $('.mailing-list__email-input');
	const submitBtn = $('.mailing-list__submit-btn');

	emailInput.focusin(function () {
		$(this).addClass('mailing-list__email-input-active');
		$(this).removeClass('mailing-list__email-input-error');
		submitBtn.addClass('mailing-list__submit-btn-active');
		submitBtn.removeClass('mailing-list__submit-btn-error');
		$('.mailing-list__email-input-error-text').remove();
	});

	emailInput.focusout(function () {
		$(document).click(function (e) {
			if (
				!$(e.target).is('.mailing-list__email-input') &&
				!$(e.target).is('.mailing-list__submit-btn')
			) {
				emailInput.attr('placeholder', 'Enter your email address');

				emailInput.removeClass([
					'mailing-list__email-input-active',
					'mailing-list__email-input-error',
				]);

				submitBtn.removeClass([
					'mailing-list__submit-btn-active',
					'mailing-list__submit-btn-error',
				]);

				$('.mailing-list__email-input-error-text').remove();
			}
		});
	});

	$('.mailing-list__form').submit(function (e) {
		const email = emailInput.val();

		if (!validateEmail(email)) {
			e.preventDefault();

			const errorText = $('<p/>', {
				class: 'mailing-list__email-input-error-text',
				text: 'Please Enter Valid Email Address',
			});

			emailInput.removeClass('mailing-list__email-input-active');

			emailInput.addClass('mailing-list__email-input-error');
			submitBtn.addClass('mailing-list__submit-btn-error');

			emailInput.val('');
			emailInput.attr('placeholder', 'Invalid email address');

			emailInputRow.append(errorText);
		}
	});

	/** FAQ Dropdowns */

	$('.faq__text').hide();

	$('.faq').click(function () {
		$(this).find('.faq__text').slideToggle('slow');

		if (
			$(this).find('.faq-arrow').attr('src') ===
			'/images/icons/down-arrow.svg'
		) {
			$(this)
				.find('.faq-arrow')
				.attr('src', '/images/icons/up-arrow.svg');
		} else {
			$(this)
				.find('.faq-arrow')
				.attr('src', '/images/icons/down-arrow.svg');
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
				src: '/images/collections/example.svg',
				alt: `${sectionDisplay} Collection Image`,
			});

			marquee.append(sectionLink);
			marquee.append(sectionImg);
		}

		$('.marquee-section').append(marquee);
	});

	$('.marquee').css('text-indent', '-100%');

	// Contact Page

	$('.booking-btn').click(function () {
		sessionStorage.setItem('booking', true);
	});

	$('.modal-product-link').click(function () {
		const productName = $('.modal-product-link')
			.parents('.modal-footer')
			.siblings('.modal-body')
			.find('.product-name')
			.text()
			.replace(/[\n\t]/gi, '');
		sessionStorage.setItem('product-name', productName);
		window.location.href = '/pages/contact.html';
	});

	if (window.location.pathname === '/pages/contact.html') {
		console.log('testing');
		if (sessionStorage.getItem('booking')) {
			$('#contact_subject').val('Booking an Appointment');
			sessionStorage.removeItem('booking');
		} else if (sessionStorage.getItem('product-name')) {
			$('#contact_subject').val(
				`${sessionStorage.getItem('product-name')} Availability`,
			);
			sessionStorage.removeItem('product-name');
		}
	}

	const init = () => {};
});
