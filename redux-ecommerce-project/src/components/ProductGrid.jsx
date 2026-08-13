import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Featured Products
        </h2>

        <button className="text-blue-600 font-semibold hover:underline">
          View All
        </button>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>

    </section>
  );
};

export default ProductGrid;