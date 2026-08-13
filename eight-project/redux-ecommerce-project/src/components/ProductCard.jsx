import { ShoppingCart, Heart, Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
          alt="Product"
          className="w-full h-64 object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">

        <h2 className="text-xl font-bold">
          Nike Air Max
        </h2>

        <div className="flex items-center gap-1 text-yellow-500 mt-2">
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} />
        </div>

        <p className="text-gray-500 mt-3">
          Premium quality running shoes with stylish design.
        </p>

        <div className="flex justify-between items-center mt-5">

          <span className="text-2xl font-bold text-blue-600">
            $149
          </span>

          <div className="flex gap-3">

            <button className="p-2 rounded-full border hover:bg-gray-100">
              <Heart size={20} />
            </button>

            <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
              <ShoppingCart size={20} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;