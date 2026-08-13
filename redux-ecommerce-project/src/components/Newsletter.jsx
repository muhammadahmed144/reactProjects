const Newsletter = () => {
  return (
    <section className="bg-blue-600 py-20 mt-20">

      <div className="max-w-4xl mx-auto text-center px-5">

        <h2 className="text-4xl font-bold text-white">
          Subscribe To Our Newsletter
        </h2>

        <p className="text-blue-100 mt-4">
          Get updates about new arrivals, discounts and exclusive offers.
        </p>

        <div className="flex flex-col md:flex-row mt-8 gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-lg outline-none"
          />

          <button className="bg-black text-white px-8 rounded-lg hover:bg-gray-800 transition">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;