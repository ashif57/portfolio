'use client';

import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  homepage: string;
  html_url: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const githubUsername = 'ashif57';
      const apiUrl = `https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`;
      const cacheKey = 'github_repos';
      const cacheDuration = 3600 * 1000; // 1 hour

      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        const { timestamp, repos } = JSON.parse(cachedData);
        if (Date.now() - timestamp < cacheDuration) {
          setRepos(repos);
          return;
        }
      }

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        const filteredRepos = data.filter((repo: any) => !repo.fork);
        setRepos(filteredRepos);
        localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), repos: filteredRepos }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (repos.length > 0) {
      new Swiper('.mySwiper', {
        effect: 'slide',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        watchOverflow: true,
        slidesPerGroup: 1,
        spaceBetween: 20,
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
        speed: 800,
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
          },
        },
      });
    }
  }, [repos]);

  return (
    <section id="projects" className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
        <div className="swiper mySwiper" id="projects-container">
          <div className="swiper-wrapper">
            {repos.map((repo) => (
              <div key={repo.id} className="swiper-slide">
                <div className="glassmorphism-card project-card rounded-xl relative h-full w-full flex flex-col">
                  <div className="h-48 bg-gray-800 flex items-center justify-center rounded-t-xl flex-shrink-0">
                    <i className="fas fa-code-branch text-6xl text-neon-cyan"></i>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                    <p className="text-text-light mb-4 flex-grow">{repo.description || 'No description available.'}</p>
                    <div className="flex justify-between items-center mb-4">
                      {repo.language && <p className="text-sm text-neon-cyan">{repo.language}</p>}
                      {repo.stargazers_count > 0 && <p className="text-sm text-white"><i className="fas fa-star"></i> {repo.stargazers_count}</p>}
                    </div>
                    <div className="project-links mt-auto flex justify-between">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-neon-cyan transition duration-300">
                        <i className="fab fa-github"></i> GitHub
                      </a>
                      {repo.homepage && <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-neon-cyan transition duration-300"><i className="fas fa-globe"></i> Live</a>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"><i className="fas fa-chevron-right"></i></div>
          <div className="swiper-button-prev"><i className="fas fa-chevron-left"></i></div>
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/ashif57?tab=repositories" target="_blank"
            className="btn-primary inline-block">
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;