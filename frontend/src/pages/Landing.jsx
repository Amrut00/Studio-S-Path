import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import IntroGate, { hasSeenIntroToday } from '../components/IntroGateNew';
import './Landing.css';

const INTRO_STORAGE_KEY = 'studio-spath-intro-seen';

const selectedWorks = [
  {
    id: 'valley-residence',
    number: '01',
    title: 'Valley Residence',
    meta: 'Napa Valley · 2023 · Residential',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1920&q=80',
    concept: 'A sequence of pavilions tuned to light, wind, and long views.',
  },
  {
    id: 'urban-gallery',
    number: '02',
    title: 'Urban Gallery',
    meta: 'Brooklyn · 2022 · Cultural',
    image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=1920&q=80',
    concept: 'A quiet interior world carved from the city’s noise and pace.',
  },
  {
    id: 'coastal-retreat',
    number: '03',
    title: 'Coastal Retreat',
    meta: 'Big Sur · 2021 · Hospitality',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1920&q=80',
    concept: 'Minimal forms framing horizon lines—inside and out dissolve.',
  },
];

const Landing = () => {
  const [showIntroGate, setShowIntroGate] = useState(false);
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const philosophyRef = useRef(null);

  useEffect(() => {
    // Show IntroGate only once per day
    if (!hasSeenIntroToday()) {
      setShowIntroGate(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntroGate(false);
  };

  const handleDevResetIntro = () => {
    if (!import.meta.env.DEV) return;
    localStorage.removeItem(INTRO_STORAGE_KEY);
    // Replay immediately (no refresh required)
    setShowIntroGate(true);
  };

  useEffect(() => {
    if (showIntroGate) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const textElement = heroTextRef.current;
      const imageElement = heroImageRef.current;
      const philosophyElement = philosophyRef.current;

      if (textElement) {
        // Foreground text moves very subtly on scroll (almost imperceptible)
        // Adjust parallax intensity for larger screens
        const isLargeScreen = window.innerWidth >= 1920;
        const parallaxMultiplier = isLargeScreen ? 0.12 : 0.15;
        gsap.to(textElement, {
          y: -scrollY * parallaxMultiplier,
          duration: 0.3,
          ease: 'power2.out',
        });
      }

      if (imageElement) {
        // Background image is almost static (very minimal movement)
        // Adjust parallax intensity for larger screens
        const isLargeScreen = window.innerWidth >= 1920;
        const parallaxMultiplier = isLargeScreen ? 0.04 : 0.05;
        gsap.to(imageElement, {
          y: scrollY * parallaxMultiplier,
          duration: 0.3,
          ease: 'power2.out',
        });
      }

      // Philosophy section scroll animation
      if (philosophyElement) {
        const rect = philosophyElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementVisible = rect.top < windowHeight * 0.75;

        if (elementVisible) {
          gsap.to(philosophyElement, {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'power1.inOut',
          });
        }
      }
    };

    // Set initial state for philosophy section
    if (philosophyRef.current) {
      gsap.set(philosophyRef.current, {
        y: 40,
        opacity: 0.9,
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showIntroGate]);

  return (
    <>
      {/* IntroGate - conditional layer above Landing */}
      {showIntroGate && <IntroGate onComplete={handleIntroComplete} />}

      {/* DEV ONLY: Reset intro gate */}
      {import.meta.env.DEV && (
        <button
          type="button"
          onClick={handleDevResetIntro}
          className="fixed bottom-4 left-4 z-60 text-[10px] font-mono tracking-wide text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Dev: reset intro gate"
        >
          reset intro
        </button>
      )}

      {/* Landing page content */}
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden" style={{ marginTop: 0 }}>
          {/* Background Image */}
          <div 
            ref={heroImageRef}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=80"
              alt="Modern architectural space with dramatic natural light"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          {/* Ghost Typography (Background Word) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 
              className="text-[12vw] md:text-[10vw] 2xl:text-[8vw] 3xl:text-[7vw] 4xl:text-[6vw] font-bold tracking-tight text-white select-none"
              style={{ opacity: 0.15 }}
            >
              STUDIO S.PATH
            </h2>
          </div>

          {/* Foreground Text (Overlay) */}
          <div 
            ref={heroTextRef}
            className="absolute bottom-0 left-0 w-full px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40 pb-16 md:pb-20 2xl:pb-24 3xl:pb-32 4xl:pb-40"
          >
            <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-light leading-tight tracking-tight text-white mb-6 2xl:mb-8 3xl:mb-10 4xl:mb-12">
                Architecture as a path through space<span className="text-accent-red">.</span>
              </h1>
              
            </div>
          </div>
        </section>

        {/* Studio Philosophy Section */}
        <section className="w-full bg-white py-32 md:py-40 2xl:py-48 3xl:py-56 4xl:py-64 px-8 md:px-16 2xl:px-24 3xl:px-32 4xl:px-40">
          <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto">
            <p
              ref={philosophyRef}
              className="text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-light leading-relaxed text-gray-900 tracking-tight text-center"
            >
              Studio S.Path approaches architecture as a sequence - shaped by site, climate, material, and human movement. Each project evolves through context rather than style.
            </p>
          </div>
        </section>

        {/* Visual Pause Section */}
        <section className="w-full bg-white flex items-center justify-center px-8 md:px-16 2xl:px-24 3xl:px-32 4xl:px-40 py-16 2xl:py-20 3xl:py-24 4xl:py-32" style={{ minHeight: '70vh' }}>
          <div className="w-full max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[90rem] h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
              alt="Architectural detail showing clean lines and spatial composition"
              className="w-full h-full object-cover"
              style={{ minHeight: '500px' }}
            />
          </div>
        </section>

        {/* Transition to Projects Section */}
        <section className="w-full bg-white pt-32 md:pt-40 2xl:pt-48 3xl:pt-56 4xl:pt-64 pb-12 md:pb-16 2xl:pb-20 3xl:pb-24 4xl:pb-32">
          <div className="max-w-7xl 2xl:max-w-360 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40">
            <Link
              to="/projects"
              className="group inline-block"
            >
              <h2 className="text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-light text-gray-900 tracking-tight relative inline-block">
                Selected Works
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-red transition-all duration-300 group-hover:w-full"></span>
                <span className="text-accent-red ml-1">.</span>
              </h2>
            </Link>

            <div className="mt-12 md:mt-16 2xl:mt-20 3xl:mt-24 4xl:mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24">
              {selectedWorks.map((work) => (
                <Link
                  key={work.id}
                  to={`/projects/${work.id}`}
                  className="group block"
                >
                  <div className="relative w-full aspect-4/5 bg-gray-100 overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4 2xl:top-6 2xl:left-6 3xl:top-8 3xl:left-8 4xl:top-10 4xl:left-10 text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg tracking-widest text-white/90">
                      <span className="text-accent-red">{work.number}</span>
                    </div>
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="mt-5 2xl:mt-6 3xl:mt-8 4xl:mt-10">
                    <h3 className="text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-light text-gray-900 tracking-tight">
                      {work.title}
                    </h3>
                    <p className="mt-2 2xl:mt-3 3xl:mt-4 4xl:mt-5 text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg uppercase tracking-widest text-gray-500">
                      {work.meta}
                    </p>
                    <p className="mt-4 2xl:mt-5 3xl:mt-6 4xl:mt-8 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-light text-gray-700 leading-relaxed">
                      {work.concept}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-14 md:mt-16 2xl:mt-20 3xl:mt-24 4xl:mt-32">
              <Link to="/projects" className="group relative inline-block text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl tracking-widest uppercase text-gray-700 hover:text-gray-900 transition-colors">
                View all projects
                <span className="absolute left-0 bottom-0 w-0 h-px bg-accent-red transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
