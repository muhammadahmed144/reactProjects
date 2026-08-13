import OfferCard from "./OfferCard";

const offers = [
  {
    title: "Free Shipping",
    description: "Free delivery on orders above $100."
  },
  {
    title: "24/7 Support",
    description: "Customer support available anytime."
  },
  {
    title: "Easy Returns",
    description: "Return products within 7 days."
  }
];

const Offers = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold mb-8">
        Why Shop With Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            title={offer.title}
            description={offer.description}
          />
        ))}

      </div>

    </section>
  );
};

export default Offers;