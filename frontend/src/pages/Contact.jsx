const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend logic yet - just prevent default behavior
  };

  return (
    <div className="min-h-screen pt-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 2xl:px-24 3xl:px-32 4xl:px-40 pt-16 2xl:pt-20 3xl:pt-24 4xl:pt-32 pb-12 md:pb-16 2xl:pb-20 3xl:pb-24 4xl:pb-32">
        {/* Heading - Static */}
        <div className="mb-12 2xl:mb-16 3xl:mb-20 4xl:mb-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[10rem] font-light text-gray-900 tracking-tight">
            Contact
          </h1>
        </div>

        {/* Invitation */}
        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-32">
          <p className="text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-light leading-relaxed text-gray-900">
            Studio S.Path welcomes conversations around architecture, interior design, and spatial inquiry.
            New projects, collaborations, and thoughtful discussions are approached with care and clarity.
          </p>
        </div>

        {/* Contact & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 2xl:gap-32 3xl:gap-40 4xl:gap-48">
          
          {/* Left Column: Primary Contact */}
          <div className="space-y-8 2xl:space-y-10 3xl:space-y-12 4xl:space-y-16">
            <div>
              <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-900 mb-2 2xl:mb-3 3xl:mb-4 4xl:mb-5">
                Studio S.Path Architecture
              </p>
              <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-600">
                Pune, India
              </p>
            </div>

            <div>
              <a
                href="mailto:info@studiospath.com"
                className="group inline-block text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-light text-gray-900"
              >
                info@studiospath.com
                <span className="block w-0 h-px bg-accent-red transition-all duration-300 group-hover:w-full mt-1"></span>
              </a>
            </div>
          </div>

          {/* Right Column: Optional Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 2xl:space-y-8 3xl:space-y-10 4xl:space-y-12">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-0 py-3 2xl:py-4 3xl:py-5 4xl:py-6 text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-900 placeholder-gray-400 bg-transparent border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-0 py-3 2xl:py-4 3xl:py-5 4xl:py-6 text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-900 placeholder-gray-400 bg-transparent border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full px-0 py-3 2xl:py-4 3xl:py-5 4xl:py-6 text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-900 placeholder-gray-400 bg-transparent border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none resize-none transition-colors"
                />
              </div>

              {/* Submit */}
              <div className="pt-2 2xl:pt-3 3xl:pt-4 4xl:pt-5">
                <button
                  type="submit"
                  className="group inline-block text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-light text-gray-900 bg-transparent border-0 cursor-pointer"
                >
                  Send
                  <span className="block w-0 h-px bg-accent-red transition-all duration-300 group-hover:w-full mt-1"></span>
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Closing Mark */}
        <div className="mt-12 2xl:mt-16 3xl:mt-20 4xl:mt-24">
          <p className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-light text-gray-500">
            Studio S.Path
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
