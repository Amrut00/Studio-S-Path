import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Projects = () => {
  const projectRefs = useRef([]);
  const projectImageRefs = useRef([]);
  const lastScrollYRef = useRef(0);
  const headerContainerRef = useRef(null);
  const [activeTypology, setActiveTypology] = useState('All');
  const [showSortingRow, setShowSortingRow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(80); // fallback
  const [contentPaddingTop, setContentPaddingTop] = useState(120); // fallback

  // Curated project data
  const projects = [
    {
      id: 'valley-residence',
      number: '01',
      title: 'Valley Residence',
      location: 'Napa Valley, California',
      year: '2024',
      typology: 'Residential',
      concept: 'A sequence of pavilions following the hillside terrain',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: 'urban-gallery',
      number: '02',
      title: 'Urban Gallery',
      location: 'Brooklyn, New York',
      year: '2023',
      typology: 'Cultural',
      concept: 'Light as the primary material in a constrained urban site',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: 'coastal-retreat',
      number: '03',
      title: 'Coastal Retreat',
      location: 'Big Sur, California',
      year: '2024',
      typology: 'Interior',
      concept: 'Interior sequences that frame horizon light while anchoring to the site',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80',
    },
  ];

  useEffect(() => {
    const navEl = document.querySelector('nav');
    if (!navEl) return;

    let currentNavHeight = navEl.getBoundingClientRect().height;
    let currentSortingHeight = 0;

    const updateSortingHeight = () => {
      if (headerContainerRef.current) {
        // Get the actual content height of the sorting strip
        const sortingContent = headerContainerRef.current.querySelector('div > div > div');
        if (sortingContent) {
          currentSortingHeight = sortingContent.getBoundingClientRect().height;
        } else {
          // Fallback: measure the container itself
          const container = headerContainerRef.current.querySelector('div');
          currentSortingHeight = container ? container.getBoundingClientRect().height : 40;
        }
      }
    };

    const updateAll = () => {
      setNavHeight(currentNavHeight);
      setContentPaddingTop(currentNavHeight + currentSortingHeight);
    };

    // ResizeObserver for Nav - fires immediately on any size change (including CSS transitions)
    const navObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height;
        if (currentNavHeight !== height) {
          currentNavHeight = height;
          updateAll();
        }
      }
    });

    navObserver.observe(navEl);

    // ResizeObserver for sorting strip container
    const sortingObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height;
        if (currentSortingHeight !== height) {
          currentSortingHeight = height;
          updateAll();
        }
      }
    });

    // Set up sorting strip observation after ref is available
    const setupSortingObserver = () => {
      if (headerContainerRef.current) {
        // Observe the inner content div that actually has the height
        const sortingContent = headerContainerRef.current.querySelector('div > div > div');
        if (sortingContent) {
          sortingObserver.observe(sortingContent);
          currentSortingHeight = sortingContent.getBoundingClientRect().height;
        } else {
          // Fallback: observe the container
          const container = headerContainerRef.current.querySelector('div');
          if (container) {
            sortingObserver.observe(container);
            currentSortingHeight = container.getBoundingClientRect().height;
          }
        }
        updateAll();
      }
    };

    // Initial setup - use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      setupSortingObserver();
    });

    // Also handle window resize
    window.addEventListener('resize', () => {
      currentNavHeight = navEl.getBoundingClientRect().height;
      updateSortingHeight();
      updateAll();
    });

    return () => {
      navObserver.disconnect();
      sortingObserver.disconnect();
      window.removeEventListener('resize', updateAll);
    };
  }, [showSortingRow]);

  useEffect(() => {
    const handleScroll = () => {
      // Sorting row hide/show on scroll direction (calm, subtle)
      const scrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      const delta = scrollY - lastScrollY;

      // Scroll shrink effect - similar to Nav
      setIsScrolled(scrollY > 50);

      if (scrollY < 8) {
        setShowSortingRow(true);
      } else if (delta > 2) {
        setShowSortingRow(false);
      } else if (delta < -2) {
        setShowSortingRow(true);
      }

      lastScrollYRef.current = scrollY;

      // Parallax effect for project images
      projectImageRefs.current.forEach((imageRef) => {
        if (!imageRef) return;
        const rect = imageRef.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate parallax only when image is in or near viewport
        if (rect.bottom > 0 && rect.top < windowHeight) {
          // Calculate how much the image should move (slower than scroll - reduced multiplier for subtler effect)
          // Adjust parallax intensity for larger screens
          const isLargeScreen = window.innerWidth >= 1920;
          const parallaxMultiplier = isLargeScreen ? 0.06 : 0.08;
          const parallaxOffset = (rect.top - windowHeight / 2) * parallaxMultiplier;
          gsap.to(imageRef, {
            y: parallaxOffset,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });

      projectRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementVisible = rect.top < windowHeight * 0.8;

        if (elementVisible && ref.dataset.animated !== 'true') {
          gsap.to(ref, {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'power1.inOut',
          });
          ref.dataset.animated = 'true';
        }
      });
    };

    // Set initial states
    projectRefs.current.forEach((ref) => {
      if (ref) {
        gsap.set(ref, {
          y: 40,
          opacity: 0.95,
        });
      }
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTypology]);

  const filteredProjects =
    activeTypology === 'All' ? projects : projects.filter((p) => p.typology === activeTypology);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Sorting Strip Container - positioned below Nav */}
      <div
        ref={headerContainerRef}
        className="fixed left-0 right-0 z-40 bg-white"
        style={{ top: `${navHeight}px` }}
      >
        {/* Sorting Strip */}
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40 pt-2">
          <div
            className={`transition-all duration-300 ease-in-out ${
              showSortingRow ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-90 pointer-events-none'
            }`}
          >
            <div className="flex items-center gap-6 md:gap-8 2xl:gap-10 3xl:gap-12 4xl:gap-14 text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg font-light tracking-widest uppercase text-gray-500 py-2 2xl:py-3 3xl:py-4 4xl:py-5">
              {['All', 'Residential', 'Interior', 'Cultural'].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveTypology(label)}
                  className={`pb-1 border-b ${
                    activeTypology === label ? 'border-accent-red text-gray-900' : 'border-transparent'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Page Content with measured padding-top */}
      <div style={{ paddingTop: `${contentPaddingTop}px` }}>
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40 pt-10 md:pt-12 2xl:pt-16 3xl:pt-20 4xl:pt-24 pb-12 md:pb-16 2xl:pb-20 3xl:pb-24 4xl:pb-32">
          {/* Page Heading with scroll shrink effect */}
          <div className={`mb-16 md:mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32 transition-all duration-500 ease-in-out ${isScrolled ? 'mb-12 md:mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28' : ''}`}>
            <h1 className={`font-light text-gray-900 tracking-tight transition-all duration-500 ease-in-out ${
              isScrolled 
                ? 'text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl' 
                : 'text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[10rem]'
            }`}>
              Selected Works
            </h1>
          </div>

        {/* Projects Exhibition */}
        <div>
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              ref={(el) => (projectRefs.current[index] = el)}
              className="block group"
            >
              <article
                className={`cursor-pointer py-10 md:py-12 2xl:py-16 3xl:py-20 4xl:py-24 ${
                  index !== filteredProjects.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="md:flex md:items-start md:gap-12">
                  {/* Project Number (index reference) */}
                  <div className="mb-4 md:mb-0 md:w-20 shrink-0">
                    <span className="text-xs md:text-sm font-light text-accent-red tracking-[0.25em]">
                    {project.number}
                  </span>
                </div>

                  {/* Project Content */}
                  <div className="flex-1">
                {/* Project Title */}
                    <div className="mb-4 2xl:mb-6 3xl:mb-8 4xl:mb-10">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-light text-gray-900 tracking-tight relative inline-block">
                    {project.title}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </h2>
                </div>

                {/* Meta Line */}
                    <div className="mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
                      <p className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-light text-gray-500 tracking-wide">
                    {project.location} · {project.year} · {project.typology}
                  </p>
                </div>

                {/* Project Image */}
                    <div className="mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16 w-full h-[42vh] md:h-[46vh] lg:h-[50vh] 2xl:h-[55vh] 3xl:h-[60vh] 4xl:h-[65vh] bg-white overflow-hidden">
                  <img
                        ref={(el) => (projectImageRefs.current[index] = el)}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Concept Line */}
                    <div className="max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl 4xl:max-w-5xl">
                      <p className="text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-light text-gray-700 leading-relaxed">
                    {project.concept}
                  </p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
