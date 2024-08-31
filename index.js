// Espera o DOM estar totalmente carregado
document.addEventListener('DOMContentLoaded', function() {

  // ** Formulário de Contato
  //
  // ** Contagem de Visualizações **
  //
  // ** Carrossel **
  const carousel = document.querySelector('.carousel');
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const carouselNav = document.querySelector('.carousel-nav');
  const carouselIndicators = document.querySelector('.carousel-indicators');
  const prevSlideButton = document.querySelector('#prev-slide');
  const nextSlideButton = document.querySelector('#next-slide');

  if (carousel && carouselSlides.length) {
    let currentSlide = 0;

    // Adiciona indicadores de slide
    if (carouselIndicators) {
      carouselIndicators.innerHTML = '';
      carouselSlides.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.textContent = `${index + 1}`;
        carouselIndicators.appendChild(indicator);
      });

      // Evento de clique nos indicadores
      carouselIndicators.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
          currentSlide = parseInt(e.target.textContent) - 1;
          updateCarousel();
        }
      });
    }

    // Evento de clique nos botões de navegação
    if (prevSlideButton) {
      prevSlideButton.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : carouselSlides.length - 1;
        updateCarousel();
      });
    }

    if (nextSlideButton) {
      nextSlideButton.addEventListener('click', () => {
        currentSlide = (currentSlide < carouselSlides.length - 1) ? currentSlide + 1 : 0;
        updateCarousel();
      });
    }

    function updateCarousel() {
      carouselSlides.forEach((slide, index) => {
        slide.style.display = 'none';
        if (carouselIndicators) {
          carouselIndicators.children[index].classList.remove('active');
        }
      });
      if (carouselSlides[currentSlide]) {
        carouselSlides[currentSlide].style.display = 'block';
        if (carouselIndicators) {
          carouselIndicators.children[currentSlide].classList.add('active');
        }
      }
    }

    // Inicializa o carrossel
    updateCarousel();
  }

  // ** Carrossel de Certificados **
  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.certificates-carousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const carouselItems = carouselInner.querySelectorAll('.carousel-item');
    const prevSlideButton = document.getElementById('prev-slide');
    const nextSlideButton = document.getElementById('next-slide');
  
    // Adiciona evento de clique nos botões de navegação
    prevSlideButton.addEventListener('click', () => {
      // ...
    });
  
    nextSlideButton.addEventListener('click', () => {
      // ...
    });
  
    // Inicializa o carrossel
    updateCarousel();
  });
  
  function updateCarousel() {
    // ...
  }
  
  // ...

  if (carouselInner && carouselItems.length) {
    let currentIndex = 0;

    function updateCarousel() {
      carouselItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
      });
    }

    if (prevSlide) {
      prevSlide.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        updateCarousel();
      });
    }

    if (nextSlide) {
      nextSlide.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
      });
    }

    // Inicializa o carrossel de certificados
    updateCarousel();
  }

  // ** Modal para Imagem **
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  const closeModal = document.getElementById('modal-close');
  const certificateImages = document.querySelectorAll('.certificate img');

  if (modal && modalImg && closeModal) {
    certificateImages.forEach(image => {
      image.addEventListener('click', function() {
        modal.classList.add('show');
        modalImg.src = this.src;
      });
    });

    closeModal.addEventListener('click', function() {
      modal.classList.remove('show');
    });

    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.classList.remove('show');
      }
    });
  }

  // ** Gráfico **
  const stackData = {
    labels: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native','Node.js', 'next.js', 'Java', 'SQL', 'Git'],
    datasets: [{
      label: 'Pontuação de Competência',
      data: [8, 7, 7, 8, 8, 7, 8, 7, 6, 7, 6, 8],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 255, 127, 0.2)',
        'rgba(255, 99, 71, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 255, 127, 1)',
        'rgba(255, 99, 71, 1)'
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: stackData,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Minhas Stacks e Pontuações'
        },
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 10
        }
      }
    }
  };

  const myChartElement = document.getElementById('myStackChart');
  if (myChartElement) {
    new Chart(myChartElement, config);
  }

// ** Blog - Modal de Post **
const blogPosts = document.querySelectorAll('.blog-post');
const modals = document.getElementById('blogModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

if (blogPosts.length && modals && modalTitle && modalBody && closeBtn) {
  function openModal(title, content) {
    console.log('Modal aberto!');
    console.log('Título:', title);
    console.log('Conteúdo:', content);
    modalTitle.textContent = title;
    modalBody.textContent = content;
    modals.classList.add('show');
  }

  function close() {
    modals.classList.remove('show');
  }

  blogPosts.forEach(post => {
    post.querySelector('.read-more').addEventListener('click', function(event) {
      console.log('Botão "Leia mais" clicado!');
      event.preventDefault();
      const title = this.getAttribute('data-title');
      const content = this.getAttribute('data-content');
      openModal(title, content);
    });
  });

  closeBtn.addEventListener('click', close);
  window.addEventListener('click', function(event) {
    if (event.target === modals) {
      close();
    }
  });
}

// ** Blog - mais de uma foto
const gallery = document.querySelector('.image-gallery');
const images = gallery.querySelectorAll('img');

let currentImage = 0;

function showNextImage() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}

function showPrevImage() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage - 1 + images.length) % images.length;
  images[currentImage].classList.add('active');
}

gallery.addEventListener('click', () => {
  showNextImage();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    showNextImage();
  } else if (e.key === 'ArrowLeft') {
    showPrevImage();
  }
});
images.forEach((image) => {
  image.addEventListener('click', () => {
    showNextImage();
  });
});
/*acesso do vercel para o servidor express.js*/
const app = express();
const port = process.env.PORT || 5000;

// Adiciona o middleware para permitir CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
});