document.addEventListener('DOMContentLoaded', function() {
  // // Formulário de contato
  // const contactForm = document.getElementById('contactForm');
  // if (contactForm) {
  //   contactForm.addEventListener('submit', function(event) {
  //     event.preventDefault();
  //     const formData = {
  //       nome: document.getElementById('nome').value,
  //       email: document.getElementById('email').value,
  //       mensagem: document.getElementById('mensagem').value
  //     };
  //     fetch('http://localhost:5000/submit', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     })
  //     .then(response => response.text())
  //     .then(data => alert(data))
  //     .catch(error => {
  //       console.error('Erro:', error);
  //       alert('Erro ao enviar a mensagem.');
  //     });
  //   });
  // }

  // // Contagem de visualizações
  // fetch('http://localhost:5000/views')
  // .then(response => response.json())
  // .then(data => {
  //   console.log(`O site foi visualizado ${data.views} vezes.`);
  //   const viewCount = document.getElementById('viewCount');
  //   if (viewCount) viewCount.innerText = `Visualizações: ${data.views}`;
  // })
  // .catch(error => console.error('Erro ao obter contagem de visualizações:', error));

  // Carrossel
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const carouselIndicators = document.querySelector('.carousel-indicators');
    const prevSlideButton = document.querySelector('#prev-slide');
    const nextSlideButton = document.querySelector('#next-slide');
    let currentSlide = 0;

    if (carouselIndicators) {
      carouselIndicators.innerHTML = '';
      carouselSlides.forEach((slide, index) => {
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


//certificados 

  const certificadosCarouselInner = document.querySelector('.certificates-carousel .carousel-inner');
  const certificadosCarouselItems = document.querySelectorAll('.certificates-carousel .carousel-item');
  const certificadosPrevSlide = document.querySelector('.carousel-nav .carousel-control.prev');
  const certificadosNextSlide = document.querySelector('.carousel-nav .carousel-control.next');

  let certificadosCurrentIndex = 0;

  function updateCertificadosCarousel() {
    certificadosCarouselItems.forEach((item, index) => {
      if (index === certificadosCurrentIndex) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  certificadosPrevSlide.addEventListener('click', () => {
    certificadosCurrentIndex = (certificadosCurrentIndex > 0) ? certificadosCurrentIndex - 1 : certificadosCarouselItems.length - 1;
    updateCertificadosCarousel();
  });

  certificadosNextSlide.addEventListener('click', () => {
    certificadosCurrentIndex = (certificadosCurrentIndex < certificadosCarouselItems.length - 1) ? certificadosCurrentIndex + 1 : 0;
    updateCertificadosCarousel();
  });

  updateCertificadosCarousel();
});

  // Modal para visualização da imagem
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

  // Gráfico
  const ctx = document.getElementById('myStackChart');
  if (ctx) {
    const stackData = {
      labels: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Node.js', 'next.js', 'Java', 'SQL', 'Git'],
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

    new Chart(ctx, config);
  }

  // Blog
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

// /*acesso do vercel para o servidor express.js*/
// const app = express();
// const port = process.env.PORT || 5000;

// // Adiciona o middleware para permitir CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

//fiz o deploy em um servidor (vercel) de site estatico, nao usarei o backend
// // Inicia o servidor
// app.listen(port, () => {
//   console.log(Servidor rodando na porta ${port});
// });
