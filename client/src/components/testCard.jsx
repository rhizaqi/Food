import React from "react";

const TestCard = ({ onCardSelect }) => {
  const cards = [
    { id: 1, name: "Card 1" },
    { id: 2, name: "Card 2" },
    { id: 3, name: "Card 3" },
  ];

  return (
    <div>
      <h2>Card Menu</h2>
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => onCardSelect(card)} // Invoke the parent's callback
          style={{ border: "1px solid black", padding: "10px", margin: "5px", cursor: "pointer" }}
        >
          {card.name}
        </div>
      ))}
    </div>
  );
};

export default TestCard;
