import React from "react";
import { Card } from "./Components/propsName";
const App = () => {
  return (
    <>
      <div
        className="parent"
        style={{
          display: "flex",
          flex: "wrap",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        <Card img="https://plus.unsplash.com/premium_photo-1774331992839-e6beca1c997c?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <Card img="https://images.unsplash.com/photo-1772528205616-e65dc0994c7b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <Card img="https://plus.unsplash.com/premium_photo-1774271481336-845c3a07f690?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />

        <Card img="https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />


        <Card img="https://images.unsplash.com/photo-1775112862799-c5a37b44b81a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        
        <Card img="https://images.unsplash.com/photo-1776033615277-6834892c5042?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />


        <Card img="https://images.unsplash.com/photo-1774308667027-3ce5c579a518?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />


        <Card img="https://images.unsplash.com/photo-1669909981138-ddba075a1b79?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      </div>
    </>
  );
};

export default App;
