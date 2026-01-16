import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const studioImageRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Parallax effect for studio image
      if (studioImageRef.current) {
        const rect = studioImageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.bottom > 0 && rect.top < windowHeight) {
          // Adjust parallax intensity for larger screens
          const isLargeScreen = window.innerWidth >= 1920;
          const parallaxMultiplier = isLargeScreen ? 0.06 : 0.08;
          const parallaxOffset = (rect.top - windowHeight / 2) * parallaxMultiplier;
          gsap.to(studioImageRef.current, {
            y: parallaxOffset,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40 pt-16 2xl:pt-20 3xl:pt-24 4xl:pt-32 pb-12 md:pb-16 2xl:pb-20 3xl:pb-24 4xl:pb-32">
        {/* Hero Section with scroll shrink */}
        <div className={`mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32 transition-all duration-500 ease-in-out ${isScrolled ? 'mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28' : ''}`}>
          <h1 className={`font-light text-gray-900 tracking-tight transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl mb-10 2xl:mb-12 3xl:mb-14 4xl:mb-16' 
              : 'text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[10rem] mb-12 2xl:mb-16 3xl:mb-20 4xl:mb-24'
          }`}>
            About the Studio
          </h1>
        </div>

        {/* Studio Image with Parallax */}
        <div className="mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32 overflow-hidden bg-white">
          <img
            ref={studioImageRef}
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80"
            alt="Studio S.Path workspace"
            className="w-full h-96 md:h-[500px] 2xl:h-[600px] 3xl:h-[700px] 4xl:h-[800px] object-cover"
          />
        </div>

        {/* Philosophy Section */}
        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mx-auto mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-light text-gray-900 mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">Philosophy</h2>
          <div className="space-y-6 2xl:space-y-8 3xl:space-y-10 4xl:space-y-12 text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-700 leading-relaxed">
            <p className="text-justify">
              Studio S.Path approaches architecture as a sequence—shaped by site, climate, material, and human movement. Each project evolves through context rather than style, responding to the specific conditions of place and program.
            </p>
            <p className="text-justify">
              We believe architecture is fundamentally about the experience of space: how light enters a room, the sequence of movement through a building, the relationship between interior and landscape. Our work prioritizes clarity, restraint, and thoughtful detailing over formal expression.
            </p>
            <p className="text-justify">
              The studio operates with a commitment to material honesty and spatial logic. We work across residential, cultural, and workspace typologies, united by an approach that allows architecture to emerge from constraints and opportunities rather than imposing predetermined forms.
            </p>
          </div>
        </div>

        {/* Practice Section */}
        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mx-auto mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-light text-gray-900 mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24">
            <div>
              <h3 className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg uppercase tracking-widest text-gray-500 mb-3 2xl:mb-4 3xl:mb-5 4xl:mb-6">Founded</h3>
              <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-900">2018</p>
            </div>
            <div>
              <h3 className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg uppercase tracking-widest text-gray-500 mb-3 2xl:mb-4 3xl:mb-5 4xl:mb-6">Location</h3>
              <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-900">Pune, India</p>
            </div>
            <div>
              <h3 className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg uppercase tracking-widest text-gray-500 mb-3 2xl:mb-4 3xl:mb-5 4xl:mb-6">Team Size</h3>
              <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-900">8 members</p>
            </div>
          </div>
        </div>

        {/* People Section */}
        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mx-auto mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-light text-gray-900 mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">People</h2>
          <div className="space-y-8 2xl:space-y-10 3xl:space-y-12 4xl:space-y-16">
            <div>
              <h3 className="text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-light text-gray-900 mb-4 2xl:mb-5 3xl:mb-6 4xl:mb-8">Principal Architect</h3>
              <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-700 mb-4 2xl:mb-5 3xl:mb-6 4xl:mb-8 text-justify">
                Sanskruti Pathane founded Studio S.Path in 2018 after working with architectural practices in Mumbai and Ahmedabad. She holds a Bachelor of Architecture from the College of Engineering, Pune, and has focused her practice on residential and cultural projects that respond to regional climate and material traditions.
              </p>
              <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-600 text-justify">
                Her work has been recognized for its thoughtful integration of contemporary design with local building practices, and has been featured in architectural publications and exhibitions in India.
              </p>
            </div>
            <div>
              <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-700 text-justify">
                The studio team brings together architects and designers with diverse backgrounds in residential architecture, interior design, and sustainable building practices. We work collaboratively, with each project developed through careful study of site conditions, material possibilities, and spatial requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mx-auto mb-20 2xl:mb-24 3xl:mb-28 4xl:mb-32">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-light text-gray-900 mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">Awards</h2>
          <div className="space-y-3 2xl:space-y-4 3xl:space-y-5 4xl:space-y-6">
            <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-600">
              IIA Maharashtra Chapter Award for Residential Architecture, 2023
            </p>
            <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-600">
              Indian Institute of Architects Young Architect Award, 2022
            </p>
            <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-600">
              Architecture + Design Excellence Award, 2021
            </p>
          </div>
        </div>

        {/* Media Section */}
        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-light text-gray-900 mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">Media</h2>
          <div className="space-y-3 2xl:space-y-4 3xl:space-y-5 4xl:space-y-6">
            <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-600">
              Architecture + Design, 2024
            </p>
            <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-600">
              Indian Architect & Builder, 2023
            </p>
            <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-600">
              Design Today, 2022
            </p>
            <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-600">
              Domus India, 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
