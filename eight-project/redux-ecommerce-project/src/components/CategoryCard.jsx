const CategoryCard = ({ title, image }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group">

      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

        <h2 className="text-white text-2xl font-bold">
          {title}
        </h2>

      </div>

    </div>
  );
};

export default CategoryCard;