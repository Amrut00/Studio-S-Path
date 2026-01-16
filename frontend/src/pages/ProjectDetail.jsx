import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProjectDetail = () => {
  const { id } = useParams();
  const heroImageRef = useRef(null);
  const overviewRef = useRef(null);
  const storyRefs = useRef([]);

  // Project data
  const projectData = {
    'valley-residence': {
      title: 'Valley Residence',
      location: 'Napa Valley, California',
      year: '2024',
      typology: 'Residential Architecture',
      scope: 'Architecture & Interior Design',
      builtUpArea: '4,200 sq.ft',
      heroImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=80',
      projectBrief: 'The site suggested the architecture: a sloping vineyard with views west toward the valley floor and east toward forested hills. Rather than a single mass, the residence unfolds as a sequence of pavilions, each responding to a specific view condition and program.',
      designResponse: 'Three pavilions organize the program—living, sleeping, and working—with glass corridors that maintain visual connection to the landscape while allowing the site to flow through. Orientation follows sun and wind patterns, with deep overhangs controlling heat gain and east-facing glass capturing morning light.',
      constraints: [
        'The steep slope required careful siting to minimize excavation while preserving existing vineyard terraces.',
        'Local building codes limited building footprint, pushing the design toward vertical organization.',
        'Fire regulations demanded defensible space, which informed the material palette and landscape design.',
        'Privacy from the adjacent road required strategic screening without blocking views to the valley.',
      ],
      responses: [
        'Pavilions step down the hillside, following natural contours and reducing site disturbance.',
        'Program stacks vertically within each pavilion, maximizing usable space within the footprint constraint.',
        'Board-formed concrete and weathering steel provide fire resistance while referencing agricultural structures.',
        'A grove of native oaks creates a visual buffer while maintaining sightlines through the canopy.',
      ],
      storyBlocks: [
        {
          type: 'text',
          content: 'Three pavilions organize the program—living, sleeping, and working—with glass corridors that maintain visual connection to the landscape while allowing the site to flow through.',
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
        },
        {
          type: 'text',
          content: 'Orientation follows sun and wind patterns. Deep overhangs on west-facing walls control heat gain in summer. East-facing glass captures morning light without thermal penalty.',
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80',
        },
        {
          type: 'text',
          content: 'Materials reinforce the connection to place: board-formed concrete echoes vineyard retaining walls, while weathering steel frames views like agricultural equipment left in the field.',
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=80',
        },
      ],
      drawings: [
        'https://images.unsplash.com/photo-1582268611958-ab544ad3171e?auto=format&fit=crop&w=2000&q=80',
      ],
      materialDetail: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=80',
      finalImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80',
      nextProject: 'urban-gallery',
    },
    'urban-gallery': {
      title: 'Urban Gallery',
      location: 'Brooklyn, New York',
      year: '2023',
      typology: 'Cultural Architecture',
      scope: 'Architecture & Interior Design',
      builtUpArea: '5,800 sq.ft',
      heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80',
      projectBrief: 'A constrained urban site required a building that could accommodate both public exhibition space and private studio work. The narrow lot, flanked by existing buildings, demanded careful consideration of light, privacy, and spatial efficiency.',
      designResponse: 'A central light well cuts through the building, bringing natural light deep into the plan. The ground floor opens to the street for public access, while upper levels provide quiet studio spaces. The facade responds to both street presence and interior light needs.',
      constraints: [
        'The 25-foot-wide lot limited design options, requiring vertical organization of program.',
        'Zoning restrictions capped building height at 40 feet, constraining usable square footage.',
        'Adjacent buildings blocked natural light from three sides, leaving only the street facade for daylight.',
        'Street noise required acoustic separation between public and private zones.',
      ],
      responses: [
        'A double-height ground floor accommodates large-scale installations while maintaining human scale.',
        'A mezzanine level adds program area without increasing building height.',
        'A central light well and skylights channel daylight into the deepest parts of the plan.',
        'A solid base with glazed upper levels creates acoustic separation while maintaining visual connection.',
      ],
      storyBlocks: [
        {
          type: 'text',
          content: 'Light as the primary material in a constrained urban site. The central light well becomes both functional necessity and spatial experience.',
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80',
        },
        {
          type: 'text',
          content: 'The ground floor opens completely to the street, blurring the boundary between public and private. Upper levels retreat, creating quiet studio spaces above the urban noise.',
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=2000&q=80',
        },
        {
          type: 'text',
          content: 'Materials are minimal and honest: exposed concrete, steel, and glass. The palette allows the art to be the focus, while the architecture provides a calm, neutral frame.',
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80',
        },
      ],
      drawings: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80',
      ],
      materialDetail: null,
      finalImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80',
      nextProject: 'coastal-retreat',
    },
    'coastal-retreat': {
      title: 'Coastal Retreat',
      location: 'Big Sur, California',
      year: '2024',
      typology: 'Residential Architecture',
      scope: 'Architecture & Interior Design',
      builtUpArea: '2,800 sq.ft',
      heroImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80',
      projectBrief: 'A cliff-edge site demanded a building that could anchor to the land while reaching toward the horizon. The program required both protection from coastal weather and connection to the vast Pacific view.',
      designResponse: 'The building forms a low, horizontal bar that follows the cliff edge. Interior sequences frame horizon light while anchoring to the site. Deep overhangs protect from wind and salt spray, while operable walls open the interior to the view when conditions allow.',
      constraints: [
        'Coastal erosion concerns required the building to be set back from the cliff edge by code.',
        'High winds and salt spray demanded durable materials and careful detailing.',
        'The narrow site between road and cliff limited building footprint and orientation options.',
        'Seismic requirements influenced structural system and material choices.',
      ],
      responses: [
        'The building steps back from the edge, creating a protected courtyard that mediates between structure and landscape.',
        'Weathering steel and concrete provide durability while requiring minimal maintenance in the harsh coastal environment.',
        'The linear plan maximizes view exposure while respecting setback requirements.',
        'A steel frame with concrete shear walls provides both seismic resistance and thermal mass.',
      ],
      storyBlocks: [
        {
          type: 'text',
          content: 'Interior sequences that frame horizon light while anchoring to the site. Each space orients to a specific view condition—ocean, sky, or land.',
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80',
        },
        {
          type: 'text',
          content: 'The building forms a low, horizontal bar that follows the cliff edge. Deep overhangs protect from wind and salt spray, while operable walls open the interior to the view.',
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80',
        },
        {
          type: 'text',
          content: 'Materials are chosen for their ability to weather gracefully: weathering steel that rusts to a stable patina, concrete that shows the marks of formwork, and glass that reflects the changing sky.',
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=80',
        },
      ],
      drawings: [
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80',
      ],
      materialDetail: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80',
      finalImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80',
      nextProject: 'valley-residence',
    },
  };

  const project = projectData[id] || projectData['valley-residence'];

  // Hero parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroImage = heroImageRef.current;

      if (heroImage) {
        // Very subtle parallax - image moves slower than scroll
        // Adjust parallax intensity for larger screens
        const isLargeScreen = window.innerWidth >= 1920;
        const parallaxMultiplier = isLargeScreen ? 0.12 : 0.15;
        gsap.to(heroImage, {
          y: scrollY * parallaxMultiplier,
          duration: 0.3,
          ease: 'none',
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll animations for text blocks
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = [overviewRef.current, ...storyRefs.current].filter(Boolean);

      elements.forEach((el) => {
        if (!el || el.dataset.animated === 'true') return;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementVisible = rect.top < windowHeight * 0.8;

        if (elementVisible) {
          gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'power1.inOut',
          });
          el.dataset.animated = 'true';
        }
      });
    };

    // Set initial states
    [overviewRef.current, ...storyRefs.current].forEach((el) => {
      if (el) {
        gsap.set(el, { y: 40, opacity: 0.9 });
      }
    });

    window.addEventListener('scroll', handleScrollAnimation, { passive: true });
    handleScrollAnimation();
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <article className="min-h-screen pt-24 bg-white">
      {/* Section 1: Project Identity - Two Column Layout */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40 py-20 2xl:py-28 3xl:py-32 4xl:py-40">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 2xl:gap-20 3xl:gap-24 4xl:gap-32">
          {/* Left: Project Title */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[10rem] font-light text-gray-900 tracking-tight">
              {project.title}
            </h1>
          </div>
          
          {/* Right: Project Facts */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 2xl:gap-10 3xl:gap-12 4xl:gap-16 text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-light text-gray-600">
            <div>
              <span className="text-gray-400">Location</span>
              <p className="mt-1">{project.location}</p>
            </div>
            <div>
              <span className="text-gray-400">Year</span>
              <p className="mt-1">{project.year}</p>
            </div>
            <div>
              <span className="text-gray-400">Typology</span>
              <p className="mt-1">{project.typology}</p>
            </div>
            <div>
              <span className="text-gray-400">Scope</span>
              <p className="mt-1">{project.scope}</p>
            </div>
            <div>
              <span className="text-gray-400">Built-up Area</span>
              <p className="mt-1">{project.builtUpArea}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Hero Image with Parallax */}
      <section className="relative overflow-hidden" style={{ height: '80vh' }}>
        <div ref={heroImageRef} className="absolute inset-0 w-full h-full">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section 3: Project Overview - Two Paragraphs */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40 py-32 2xl:py-40 3xl:py-48 4xl:py-56">
        <div ref={overviewRef} className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto space-y-8 2xl:space-y-10 3xl:space-y-12 4xl:space-y-16">
          <p className="text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-light leading-relaxed text-gray-900 text-justify">
            {project.projectBrief}
          </p>
          <p className="text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-light leading-relaxed text-gray-900 text-justify">
            {project.designResponse}
          </p>
        </div>
      </section>

      {/* Section 4: Constraints & Responses */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40 py-20 2xl:py-28 3xl:py-32 4xl:py-40">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 2xl:gap-32 3xl:gap-40 4xl:gap-48">
          {/* Constraints */}
          <div className="space-y-6 2xl:space-y-8 3xl:space-y-10 4xl:space-y-12">
            {project.constraints.map((constraint, index) => (
              <p key={index} className="text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-light leading-relaxed text-gray-700 text-justify">
                {constraint}
              </p>
            ))}
          </div>
          
          {/* Responses */}
          <div className="space-y-6 2xl:space-y-8 3xl:space-y-10 4xl:space-y-12">
            {project.responses.map((response, index) => (
              <p key={index} className="text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-light leading-relaxed text-gray-700 text-justify">
                {response}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Story Sequence */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40">
        <div className="space-y-32 2xl:space-y-40 3xl:space-y-48 4xl:space-y-56">
          {project.storyBlocks.map((block, index) => {
            if (block.type === 'text') {
              return (
                <div
                  key={index}
                  ref={(el) => (storyRefs.current[index] = el)}
                  className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto"
                >
                  <p className="text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-light leading-relaxed text-gray-700 text-justify">
                    {block.content}
                  </p>
                </div>
              );
            } else {
              return (
                <div key={index} className="w-full">
                  <img
                    src={block.src}
                    alt={`${project.title} detail`}
                    className="w-full h-[70vh] 2xl:h-[75vh] 3xl:h-[80vh] 4xl:h-[85vh] object-cover"
                  />
                </div>
              );
            }
          })}
        </div>
      </section>

      {/* Section 6: Drawings / Diagrams */}
      {project.drawings && project.drawings.length > 0 && (
        <section className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40 py-32 2xl:py-40 3xl:py-48 4xl:py-56">
          <div className="space-y-16 2xl:space-y-20 3xl:space-y-24 4xl:space-y-32">
            {project.drawings.map((drawing, index) => (
              <div key={index} className="w-full flex justify-center">
                <img
                  src={drawing}
                  alt={`${project.title} drawing`}
                  className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl w-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 7: Material / Detail Moment (Optional) */}
      {project.materialDetail && (
        <section className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40 py-20 2xl:py-28 3xl:py-32 4xl:py-40">
          <div className="w-full">
            <img
              src={project.materialDetail}
              alt={`${project.title} material detail`}
              className="w-full h-[60vh] 2xl:h-[65vh] 3xl:h-[70vh] 4xl:h-[75vh] object-cover"
            />
          </div>
        </section>
      )}

      {/* Section 8: Final Image */}
      <section className="py-32 2xl:py-40 3xl:py-48 4xl:py-56">
        <div className="w-full">
          <img
            src={project.finalImage}
            alt={`${project.title} final view`}
            className="w-full h-[80vh] 2xl:h-[85vh] 3xl:h-[90vh] 4xl:h-[95vh] object-cover"
          />
        </div>
      </section>

      {/* Section 9: Next Project Link */}
      <section className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40 pt-20 2xl:pt-28 3xl:pt-32 4xl:pt-40 pb-12 md:pb-16 2xl:pb-20 3xl:pb-24 4xl:pb-32">
        <Link
          to={`/projects/${project.nextProject}`}
          className="group inline-block text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-light text-gray-900 tracking-wide"
        >
          Next Project →
          <span className="block w-0 h-px bg-accent-red transition-all duration-300 group-hover:w-full mt-1"></span>
        </Link>
      </section>
    </article>
  );
};

export default ProjectDetail;
