import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Electronics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    title: "Fashion",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500",
  },
  {
    title: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <CategoryCard
            key={index}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>

    </section>
  );
};

export default Categories;