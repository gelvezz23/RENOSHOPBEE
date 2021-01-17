/** @format */
const doc = document;
const slider = () => {
	const $nextBtn = doc.querySelector('.slider-btns .next'),
		$prevBtn = doc.querySelector('.slider-btns .prev'),
		$slides = doc.querySelectorAll('.slider--slide');

	let iterador = 0;
	doc.addEventListener('click', (event) => {
		if (event.target === $prevBtn) {
			event.preventDefault();
			$slides[iterador].classList.remove('active');
			iterador--;

			if (iterador < 0) {
				iterador = $slides.length - 1;
			}

			$slides[iterador].classList.add('active');
		}

		if (event.target === $nextBtn) {
			event.preventDefault();
			$slides[iterador].classList.remove('active');

			iterador++;

			if (iterador >= $slides.length) {
				iterador = 0;
			}

			$slides[iterador].classList.add('active');
		}
	});
};

slider();
