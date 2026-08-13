const OfferCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="text-gray-500 mt-3">
        {description}
      </p>

      <button className="mt-5 text-blue-600 font-semibold">
        Explore →
      </button>

    </div>
  );
};

export default OfferCard;