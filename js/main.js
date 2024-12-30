(function() {

	"use strict";

	AOS.init({
		ease: 'slide',
		once: true
	});

	var slider = function(){

		var heroSlider = document.querySelectorAll('.hero-slider');

		if ( heroSlider.length > 0 ) {
			var heroSlider = tns({
				container: '.hero-slider',
				items: 1,
				mode: 'carousel',
				autoplay: true,
			  animateIn: 'tns-fadeIn',
		    animateOut: 'tns-fadeOut',
				speed: 700,
				nav: true,
				controls: false,
				autoplayButtonOutput: false,
			});
		}

		var carouselCourses = document.querySelectorAll('.carousel-courses');
		if ( carouselCourses.length > 0 ) {

			var coursesSlider = tns({
				container: '.carousel-courses',
				items: 1,
				mode: 'carousel',
				autoplay: true,
			  animateIn: 'tns-fadeIn',
		    animateOut: 'tns-fadeOut',
				speed: 700,
				nav: true,
				gutter: 20,
				controls: false,
				autoHeight: true,
				autoplayButtonOutput: false,
				responsive:{
					0:{
						items: 1,
						gutter: 0
					},
					600:{
						items: 2,
						gutter: 20
					},
					1000:{
						items: 3,
						gutter: 20
					}
				}
			});

		}

		var carouselSlider = document.querySelectorAll('.carousel-testimony');
		if ( carouselSlider.length > 0 ) {

			var testimonySlider = tns({
				container: '.carousel-testimony',
				items: 1,
				mode: 'carousel',
				autoplay: true,
			  animateIn: 'tns-fadeIn',
		    animateOut: 'tns-fadeOut',
				speed: 700,
				nav: true,
				gutter: 20,
				controls: false,
				autoplayButtonOutput: false,
				responsive:{
					0:{
						items: 1,
						gutter: 0
					},
					600:{
						items: 2,
						gutter: 20
					},
					1000:{
						items: 3,
						gutter: 20
					}
				}
			});

		}

	}
	slider();
	
	//COUNTER
	'use trict';
		// How long you want the animation to take, in ms
		const animationDuration = 2000;
		// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
		const frameDuration = 1000 / 60;
		// Use that to calculate how many frames we need to complete the animation
		const totalFrames = Math.round( animationDuration / frameDuration );
		// An ease-out function that slows the count as it progresses
		const easeOutQuad = t => t * ( 2 - t );


		const numberWithCommas = n => {
			return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}

		// The animation function, which takes an Element
		const animateCountUp = el => {
			let frame = 0;
			const countTo = parseInt( el.innerHTML, 10 );
			// Start the animation running 60 times per second
			const counter = setInterval( () => {
			frame++;
			// Calculate our progress as a value between 0 and 1
			// Pass that value to our easing function to get our
			// progress on a curve
			const progress = easeOutQuad( frame / totalFrames );
			// Use the progress value to calculate the current count
			const currentCount = Math.round( countTo * progress );

			// If the current count has changed, update the element
			if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = numberWithCommas(currentCount);
		}

		// If we’ve reached our last frame, stop the animation
		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
		}, frameDuration );
		};

		// Run the animation on all elements with a class of ‘countup’
		const runAnimations = () => {
			const countupEls = document.querySelectorAll( '.countup' );
			countupEls.forEach( animateCountUp );
		};




		// In Viewed
		var elements;
		var windowHeight;

		function init() {
			elements = document.querySelectorAll('.section-counter');
			windowHeight = window.innerHeight;
		}

		function checkPosition() {
			var i;
			for (i = 0; i < elements.length; i++) {
				var element = elements[i];
				var positionFromTop = elements[i].getBoundingClientRect().top;
			if (positionFromTop - windowHeight <= 0) {
			if( !element.classList.contains('viewed') ) {
			element.classList.add('viewed');
			runAnimations();
			} else {
			if ( element.classList.contains('viewed') ) {

			}
		}

		}
		}
		}

		window.addEventListener('scroll', checkPosition);
		window.addEventListener('resize', init);

		init();
		checkPosition();


	//GLIGHTBOX
	const lightbox = GLightbox({
	  touchNavigation: true,
	  loop: true,
	  autoplayVideos: true
	});


})()



//Services Card pop-up

// Function to open the modal
function openModal(modalId) {
	var modal = document.getElementById(modalId);
	modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeModal(modalId) {
	var modal = document.getElementById(modalId);
	modal.style.display = "none";
  }
  
  // Close modal if the user clicks outside of it
  window.onclick = function (event) {
	var modals = document.querySelectorAll(".portfolio-modal");
	for (var i = 0; i < modals.length; i++) {
	  var modal = modals[i];
	  if (event.target === modal) {
		modal.style.display = "none";
	  }
	}
  };


    // Function to filter FAQ questions based on search keywords
	function filterFAQs() {
		const input = document.getElementById('faqSearch').value.toLowerCase();
		const questions = document.querySelectorAll('h4');
		
		questions.forEach(question => {
		  const text = question.textContent.toLowerCase();
		  const answer = question.nextElementSibling.textContent.toLowerCase();
		  
		  if (text.includes(input) || answer.includes(input)) {
			question.style.display = 'block';
			question.nextElementSibling.style.display = 'block';
		  } else {
			question.style.display = 'none';
			question.nextElementSibling.style.display = 'none';
		  }
		});
	  }
	
		// Attach filter function to input change event if the element exists
		const faqSearchInput = document.getElementById('faqSearch');
		if (faqSearchInput) {
		faqSearchInput.addEventListener('input', filterFAQs);
		}

	
	  	  //LOADER SCREEN

document.addEventListener('DOMContentLoaded', function () {
  // Check if the current page is the index.html or /TM/
  const currentPage = window.location.pathname;
  if (currentPage.endsWith('index.html') || currentPage.endsWith('/')) {
    // Get references to the loading screen and the loader (logo)
    const loadingScreen = document.querySelector('.loading-screen');
    const loader = document.querySelector('.loader');
    
    // Create an animation that fades in the loader
    setTimeout(function () {
      loader.style.opacity = 1;
    }, 10); // Adjust the delay to control when the loader appears
    
    // When the loader animation is complete (after 3 seconds), hide the loading screen
    setTimeout(function () {
      loadingScreen.style.opacity = 0;
      setTimeout(function () {
        loadingScreen.style.display = 'none';
      }, 1000); // Adjust the delay to control when the loading screen disappears
    }, 2000); // Adjust the duration to match your desired 3-second loading animation
  }
});

//SERVICE SEARCH BAR

document.addEventListener("DOMContentLoaded", function() {
	if (window.location.pathname.endsWith("/services.html")) {
	  const services = [
		"Lifting Code Luxury Facial",
		"OxyGeneo Super Facial",
		"Casmara Express Facial",
		"Back Facial",
		"Men's Facial",
		"Hot Stone Massage",
		"Herbal B Peel (Beauty Peel)",
		"Herbal B Peel + Facial",
		"Skin Tags Removal Consultation",
		"C (Corrective Peel)",
		"Celluma LED Light Therapy",
		"Celluma Add-on for Acne",
		"Skin Glo Signature Facial",
		"Deep pore detox facial *with extraction",
		"Acne Facial",
		"Radio Frequency, RF Skin-Tightening for face",
		"Hydrabrasion for Deep Cleaning and Facial Skin-Tightening",
		"Hydrabrasion, Skin-Tightening and LED Mask",
		// Add more services as needed
		"Neck & shoulder massage",
		"Head & scalp massage",
		"Follow up facial (C peel)",
		"Teen facial",
		"Nano Infusion Stem Cell Facial Therapy",
		"Chemical Peel"
	  ];
	  const serviceSearchInput = document.getElementById("serviceSearch");
	  const suggestionList = document.getElementById("suggestionList");
	  const allServiceCards = document.querySelectorAll(".card-container");
  
	  document.addEventListener("click", function(event) {
		if (event.target !== serviceSearchInput) {
		  suggestionList.style.display = "none";
		}
	  });
  
	  document.addEventListener("keydown", function(event) {
		if (event.key === "Escape") {
		  suggestionList.style.display = "none";
		}
	  });
  
	  serviceSearchInput.addEventListener("input", function() {
		const inputValue = serviceSearchInput.value.toLowerCase();
		suggestionList.innerHTML = "";
  
		const matchingServices = services.filter(service =>
		  service.toLowerCase().includes(inputValue)
		);
  
		allServiceCards.forEach(card => {
		  const cardTitleElement = card.querySelector(".card-title");
		  if (cardTitleElement !== null) {
			const cardTitle = cardTitleElement.textContent.toLowerCase();
			if (
			  inputValue === "" ||
			  matchingServices.some(service =>
				cardTitle.includes(service.toLowerCase())
			  )
			) {
			  card.style.display = "block";
			} else {
			  card.style.display = "none";
			}
		  } else {
			console.error("Card title element not found");
		  }
		});
  
		matchingServices.forEach(service => {
		  const listItem = document.createElement("li");
		  listItem.textContent = service;
		  listItem.addEventListener("click", function() {
			serviceSearchInput.value = service;
			showServiceCard(service);
		  });
		  suggestionList.appendChild(listItem);
		});
  
		suggestionList.style.display = matchingServices.length > 0 ? "block" : "none";
	  });
  
	  function showServiceCard(serviceName) {
		const serviceCardContainer = document.getElementById("serviceCardContainer");
		serviceCardContainer.innerHTML = ""; // Clear existing content
  
		allServiceCards.forEach(card => {
		  const cardTitleElement = card.querySelector(".card-title");
		  if (cardTitleElement !== null) {
			const cardTitle = cardTitleElement.textContent.toLowerCase();
			if (cardTitle.includes(serviceName.toLowerCase())) {
			  card.style.display = "block";
			  serviceCardContainer.appendChild(card); // Show the selected service card
			  serviceCardContainer.style.display = "block";
			  card.classList.add("center-horizontal"); 
			} else {
			  card.style.display = "none";
			}
		  } else {
			console.error("Card title element not found");
		  }
		});
	  }
	}
  });
  
  //Lazy Load

  document.addEventListener("DOMContentLoaded", function() {
	const lazyImages = document.querySelectorAll('.lazy-load-img');
  
	const lazyLoad = target => {
	  const io = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
		  if (entry.isIntersecting) {
			const img = entry.target;
			const src = img.getAttribute('data-src');
			img.setAttribute('src', src);
			img.classList.remove('lazy-load-img');
			observer.disconnect();
		  }
		});
	  });
  
	  io.observe(target);
	};
  
	lazyImages.forEach(lazyLoad);
  });



  //PRODUCT SEARCHBAR

document.addEventListener("DOMContentLoaded", function() {
	if (window.location.pathname.endsWith("/products.html")) {
		const products = [
			"ALEX HERBAL SUPER LOTION 200ML",
			"ALEX VITAMIN CREAM 50ML",
			"ALEX CLEAR CREAM 50ML",
			"ALEX COSMETICS BB CREAM (NUDE) 30ML",
			"ALEX COSMETICS BB (MEDIUM) CREAM 30ML",
			"ALEX - TOTAL CREAM 30ML",
			"ALEX INSTANT RELIEF GEL MASK 50ML",
			"ALEX GREEN TONIC",
			"ALEX COSMETIC STEM CELL CREAM 50ML",
			"Alex Natural Corrector # 3 +Vitamin C 50 ml",
			"Alex Total Calm Cream 30 ml",
			"Bioline Energy Lotion Refreshing 200ml",
			"Bioline Energy Lotion Refreshing 200ml",
			"Bioline LC Eye-Lip Cream Filling Lifting 30ml",
			"Bioline LC Filler Serum Hyaluronic Acid 30ml",
			"Bioline LC Moisturizing Cream 50ml",
			"Bioline LC Nourishing Cream Filling Effect 50ml",
			"Bioline Lifting Code Diffusion Filler - Sublime Lift Serum Oil 30ml",
			"Bioline Lifting Code Hyalu (Boost 5) Concentrate Serum 30ml",
			"Alex Intensive Corrector No. 1 30ml",
			"Alex Intensive Corrector No. 2 Cream 30ml",
			"Alex No Needle Botanical Lifter 30ml",
			"Alex Inside Out Skin Perfector 30ml",
			"Alex 15%C Energizing Booster 30ml"
		  ];
		  
	  const productSearchInput = document.getElementById("productSearch");
	  const suggestionListpro = document.getElementById("suggestionListpro");
	  const allProductCards = document.querySelectorAll(".card-container");
  
	  document.addEventListener("click", function(event) {
		if (event.target !== productSearchInput) {
		  suggestionListpro.style.display = "none";
		}
	  });
  
	  document.addEventListener("keydown", function(event) {
		if (event.key === "Escape") {
		  suggestionListpro.style.display = "none";
		}
	  });
  
	  productSearchInput.addEventListener("input", function() {
		const inputValuepro = productSearchInput.value.toLowerCase();
		suggestionListpro.innerHTML = "";
  
		const matchingProducts = products.filter(product =>
		  product.toLowerCase().includes(inputValuepro)
		);
  
		allProductCards.forEach(card => {
		  const cardTitleElement = card.querySelector(".card-title2");
		  if (cardTitleElement !== null) {
			const cardTitle = cardTitleElement.textContent.toLowerCase();
			if (
			  inputValuepro === "" ||
			  matchingProducts.some(product =>
				cardTitle.includes(product.toLowerCase())
			  )
			) {
			  card.style.display = "block";
			} else {
			  card.style.display = "none";
			}
		  } else {
			console.error("Card title element not found");
		  }
		});
  
		matchingProducts.forEach(product => {
		  const listItempro = document.createElement("li");
		  listItempro.textContent = product;
		  listItempro.addEventListener("click", function() {
			productSearchInput.value = product;
			showProductCard(product);
		  });
		  suggestionListpro.appendChild(listItempro);
		});
  
		suggestionListpro.style.display = matchingProducts.length > 0 ? "block" : "none";
	  });
  
	  function showProductCard(productName) {
		const productCardContainer = document.getElementById("productCardContainer");
		productCardContainer.innerHTML = ""; // Clear existing content
  
		allProductCards.forEach(card => {
		  const cardTitleElement = card.querySelector(".card-title2");
		  if (cardTitleElement !== null) {
			const cardTitle = cardTitleElement.textContent.toLowerCase();
			if (cardTitle.includes(productName.toLowerCase())) {
			  card.style.display = "block";
			  productCardContainer.appendChild(card); // Show the selected product card
			  productCardContainer.style.display = "block";
			  card.classList.add("center-horizontal"); 
			} else {
			  card.style.display = "none";
			}
		  } else {
			console.error("Card title element not found");
		  }
		});
	  }
	}
  });