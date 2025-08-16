document.addEventListener('DOMContentLoaded', () => {
    const projectsWrapper = document.querySelector('#projects-container .swiper-wrapper');
    const githubUsername = 'ashif57';
    const apiUrl = `https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`;
    const cacheKey = 'github_repos';
    const cacheDuration = 3600 * 1000; // 1 hour

    const fetchProjects = async () => {
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
            const { timestamp, repos } = JSON.parse(cachedData);
            if (Date.now() - timestamp < cacheDuration) {
                return repos;
            }
        }

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }
            const data = await response.json();
            const repos = data.filter(repo => !repo.fork);
            localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), repos }));
            return repos;
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const createProjectCard = (repo) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        const card = document.createElement('div');
        // Added flex, flex-col to make the card a flex container, and h-full, w-full to fill the slide
        card.className = 'glassmorphism-card project-card rounded-xl relative h-full w-full flex flex-col';

        const language = repo.language ? `<p class="text-sm text-neon-cyan">${repo.language}</p>` : '';
        const stars = repo.stargazers_count > 0 ? `<p class="text-sm text-white"><i class="fas fa-star"></i> ${repo.stargazers_count}</p>` : '';
        const liveLink = repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="text-sm font-medium text-white hover:text-neon-cyan transition duration-300"><i class="fas fa-globe"></i> Live</a>` : '';

        card.innerHTML = `
            <div class="h-48 bg-gray-800 flex items-center justify-center rounded-t-xl flex-shrink-0">
                <i class="fas fa-code-branch text-6xl text-neon-cyan"></i>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-2">${repo.name}</h3>
                <p class="text-text-light mb-4 flex-grow">${repo.description || 'No description available.'}</p>
                <div class="flex justify-between items-center mb-4">
                    ${language}
                    ${stars}
                </div>
                <div class="project-links mt-auto flex justify-between">
                    <a href="${repo.html_url}" target="_blank" class="text-sm font-medium text-white hover:text-neon-cyan transition duration-300">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    ${liveLink}
                </div>
            </div>
        `;
        slide.appendChild(card);

        card.addEventListener('mouseenter', () => {
            slide.style.zIndex = '100';
            document.querySelector('.mySwiper').style.overflow = 'visible';
        });

        card.addEventListener('mouseleave', () => {
            slide.style.zIndex = '1';
            document.querySelector('.mySwiper').style.overflow = 'hidden';
        });

        return slide;
    };

    const initCarousel = () => {
        const swiper = new Swiper('.mySwiper', {
            effect: 'slide',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 3,
            watchOverflow: true,
            slidesPerGroup: 1,
            spaceBetween: 20, /* Add space between slides */
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            loop: false,
            speed: 800, /* Adjust speed for smoother transition */
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                480: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                }
            }
        });
    };

    fetchProjects().then(repos => {
        if (projectsWrapper) {
            repos.forEach(repo => {
                const card = createProjectCard(repo);
                projectsWrapper.appendChild(card);
            });
            initCarousel();
        }
    });
});
