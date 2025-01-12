function Hero() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none">
      <div className="container mx-auto px-8 h-full flex flex-col justify-between py-16">
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-white text-[180px] font-bold leading-none tracking-tighter">
            Biome
          </h1>
          <p className="text-white text-xl font-medium mt-2">
            Natural Waste-Based Building Materials
          </p>
        </div>

        <div className="flex justify-between items-end w-full">
          <div className="pointer-events-auto">
            <button className="flex items-center gap-2 text-white group">
              <span className="text-lg">Learn more</span>
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>

          <div className="max-w-[400px] text-right">
            <p className="text-white text-lg leading-relaxed">
              Transforming agricultural waste <br /> into innovative,
              high-impact <br />
              products to address the climate crisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
