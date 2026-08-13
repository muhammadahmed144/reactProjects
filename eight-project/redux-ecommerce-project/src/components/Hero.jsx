const Hero = () => {
  return (
    <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-10">

        <div>

          <h1 className="text-5xl font-bold leading-tight">
            Discover Amazing Products
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Shop the latest fashion, electronics, accessories and much more.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Shop Now
          </button>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900"
            alt="Hero"
            className="rounded-2xl shadow-2xl w-full"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;