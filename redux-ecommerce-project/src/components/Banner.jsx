const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-linear-to-r from-purple-600 to-pink-500 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between">

        <div>
          <h2 className="text-4xl font-bold">
            Summer Sale 50% OFF
          </h2>

          <p className="mt-4 text-lg">
            Grab your favorite products before the offer ends.
          </p>

          <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold">
            Shop Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600"
          alt="Banner"
          className="w-72 mt-8 md:mt-0 rounded-xl"
        />

      </div>
    </section>
  );
};

export default Banner;