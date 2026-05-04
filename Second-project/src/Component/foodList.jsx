const FoodList = () => {
  const dummyData = [
    {
      title: "biryani",
      img: "https://images.food52.com/VOfOuvcQe7fBeSqixNe1L-LhUBY=/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg",
      paragraph: "bohot hi barya biryani mazadaar",
      quantity: 0,
    },
    {
      title: "burger",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7M8pYRYJGjp58AF2saWwdLVFxXg_hSS0UA&s",
      paragraph: "juicy aur tasty burger",
      quantity: 5,
    },
    {
      title: "pizza",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/ba/f5/c6/the-best-pizza-we-ever.jpg?w=1200&h=1200&s=1",
      paragraph: "cheesy pizza bohot lazeez",
      quantity: 10,
    },
    {
      title: "karahi",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2024/12/Chicken-Karahi-847828f.jpg?quality=90&resize=708,643",
      paragraph: "spicy chicken karahi",
      quantity: 4,
    },
    {
      title: "nihari",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0Q5Gn7E0hLLwgiIkTfcnIvJu8F1yenXJcFIwzypDWyCqLwjxyWxAMff_CK69tc4ZRQPduq3d5Cq937Rcu-phFzQ38Sbl-QlO207Q5Abw&s=10",
      paragraph: "garma garam nihari",
      quantity: 6,
    },
    {
      title: "haleem",
      img: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics_v2/medium/chicken_haleem.jpg",
      paragraph: "rich aur creamy haleem",
      quantity: 10,
    },
    {
      title: "shawarma",
      img: "https://thumbs.dreamstime.com/b/beef-shawarma-wrap-juicy-meat-chunk-delicious-filled-chunks-fresh-vegetables-flavorful-spices-perfect-middle-360309605.jpg",
      paragraph: "street style shawarma",
      quantity: 8,
    },
    {
      title: "fries",
      img: "https://becentsational.com/wp-content/uploads/2024/01/Cheese-Fries-Sq1-735x735.jpeg",
      paragraph: "crispy french fries",
      quantity: 20,
    },
    {
      title: "sandwich",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6te-hLWS36Vu_I7pJRmtaeyPo6oFFKVP_g&s",
      paragraph: "light aur healthy sandwich",
      quantity: 9,
    },
    {
      title: "pasta",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77SD4cpk7zpGuhf3uO_2p-QLx5sLOD1aLQQ&s",
      paragraph: "creamy white sauce pasta",
      quantity: 2,
    },
  ];
  return (
    <ul id="foodList">
      {dummyData.map((foodItem, idx) => {
        return (
          <li key={idx}>
            <div id="imgArea">
              <img src={foodItem.img} alt="" />
            </div>
            <div>
              <h3>{foodItem.title}</h3>
              <p>{foodItem.paragraph}</p>
              <p>
                {foodItem.quantity == 0
                  ? "Sold Out"
                  : `Quantity: ${foodItem.quantity}`}{" "}
                {foodItem.quantity >= 20 ? "Buy 1 Get 1 Free" : ""}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FoodList;
