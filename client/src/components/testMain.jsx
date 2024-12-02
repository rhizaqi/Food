import React, { useState } from "react";
import TestCard from "./testCard";

const TestMain = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Callback function to handle data from child
  const handleCardSelection = (cardData) => {
    setSelectedCard(cardData);
    console.log("Selected Card Data:", cardData);
  };

  return (
    <div>
      <h1>Main Page</h1>
      <p>Selected Card: {selectedCard ? selectedCard.name : "None"}</p>
      <TestCard onCardSelect={handleCardSelection} />
    </div>
  );
};

export default TestMain;
