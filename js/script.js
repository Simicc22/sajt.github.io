let currentIndex = 0;
        const gallery = document.querySelector('.gallery');
        const slides = document.querySelectorAll('.gallery img');
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modal-image');

        function changeSlide(offset) {
            currentIndex += offset;
            if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            } else if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            updateGallery();
        }

        function updateGallery() {
            const translateValue = -currentIndex * 210; /* Prilagodite ovoj vrednosti */
            gallery.style.transform = `translateX(${translateValue}px)`;
        }

        function openModal(event) {
            if (event.target.tagName === 'IMG') {
                const clickedIndex = Array.from(slides).indexOf(event.target);
                currentIndex = clickedIndex;
                updateGallery();
                modalImage.src = event.target.src;
                modal.style.display = 'flex';
            }
        }

        function closeModal() {
            modal.style.display = 'none';
        }

        updateGallery();


      