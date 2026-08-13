const brands = [
  "Nike",
  "Adidas",
  "Apple",
  "Samsung",
  "Puma",
  "Sony"
];

const BrandLogos = () => {
  return (
    <section className="bg-gray-100 py-12">

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 px-6">

        {brands.map((brand) => (
          <div
            key={brand}
            className="bg-white rounded-xl shadow p-6 text-center text-xl font-bold hover:scale-105 transition"
          >
            {brand}
          </div>
        ))}

      </div>

    </section>
  );
};

export default BrandLogos;