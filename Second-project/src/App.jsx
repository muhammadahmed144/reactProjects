import { useState } from "react";
import "./App.css";
import HeadingComponent from "./Component/headingComponent.jsx";
import FoodList from "./Component/foodList.jsx";
import Footer from "./Component/footer.jsx";

function App() {
  return (
    <div>
      <HeadingComponent />
      <FoodList />
      <Footer />
    </div>
  );
}

export default App;
