import React, { useState } from "react";
import "./Pricelist.css";

const pricelistData = [
  {
    category: "Modern Cocktails",
    items: [
      { id: 1, name: "Pornstar Martini", price: 8.75 },
      { id: 2, name: "Espresso Martini", price: 8.75 },
      { id: 3, name: "Pimm’s Cup", price: 8.75 },
      { id: 4, name: "Superfruit Mojito", price: 8.75 },
      { id: 5, name: "Long Island Ice Tea", price: 8.75 },
      { id: 6, name: "Mai Tai", price: 8.25 },
      { id: 7, name: "Strawberry Daiquiri", price: 8.25 },
      { id: 8, name: "Gin Garden Martini", price: 8.25 },
      { id: 9, name: "The Fix", price: 8.25 },
    ],
  },
  {
    category: "Classic Cocktails",
    items: [
      { id: 10, name: "Mojito", price: 8.25 },
      { id: 11, name: "Cosmopolitan", price: 8.25 },
      { id: 12, name: "Bramble", price: 8.25 },
      { id: 13, name: "French Martini", price: 8.25 },
      { id: 14, name: "Dark & Stormy", price: 8.25 },
      { id: 15, name: "Margarita", price: 8.25 },
      { id: 16, name: "Negroni", price: 8.25 },
      { id: 17, name: "Manhattan", price: 8.25 },
      { id: 18, name: "Disaronno/Whiskey Sours", price: 8.25 },
      { id: 19, name: "Old Fashioned", price: 8.25 },
    ],
  },
  {
    category: "Premium Cocktails",
    items: [
      { id: 20, name: "Salted Caramel Espresso Martini", price: 9.25 },
      { id: 21, name: "Apple & Ginger Mojito", price: 9.25 },
      { id: 22, name: "Tommy’s Margarita", price: 9.25 },
      { id: 23, name: "Roselita", price: 9.25 },
      { id: 24, name: "Strawberry Jam Bramble", price: 9.25 },
    ],
  },
  {
    category: "Prosecco Cocktails",
    items: [
      { id: 25, name: "Aperol Spritz", price: 9.25 },
      { id: 26, name: "Bellini", price: 9.25 },
      { id: 27, name: "Rossini", price: 9.25 },
      { id: 28, name: "Pirlo", price: 9.25 },
      { id: 29, name: "English Garden", price: 9.25 },
      { id: 30, name: "Forager’s Fizz", price: 9.25 },
      { id: 31, name: "Prosecco Royale", price: 9.25 },
      { id: 32, name: "Bakewell Fizz", price: 9.25 },
    ],
  },
  {
    category: "Champagne Cocktails",
    items: [
      { id: 33, name: "French 75", price: 10.75 },
      { id: 34, name: "Kir Royale", price: 10.75 },
      { id: 35, name: "Champagne Cocktail", price: 10.75 },
      { id: 36, name: "Mango Fizz", price: 10.75 },
      { id: 37, name: "Champagne Mojito", price: 10.75 },
      { id: 38, name: "Elderflower Fizz", price: 10.75 },
    ],
  },
  {
    category: "Shots",
    items: [
      { id: 39, name: "Jager Bomb", price: 4.0 },
      { id: 40, name: "Skittle Bomb", price: 4.0 },
      { id: 41, name: "Baby Guinness", price: 3.0 },
      { id: 42, name: "B52", price: 3.0 },
      { id: 43, name: "Slippery Nipple", price: 3.0 },
      { id: 44, name: "Screaming Orgasm", price: 3.0 },
    ],
  },
  {
    category: "Mocktails",
    items: [
      { id: 45, name: "No’jito", price: 3.5 },
      { id: 46, name: "Superfruit No’jito", price: 3.5 },
      { id: 47, name: "Passionfruit Martini", price: 3.5 },
      { id: 48, name: "Not So Cosmo", price: 3.5 },
    ],
  },
  {
    category: "Gins",
    items: [
      { id: 49, name: "Silent Poole", price: 4.0 },
      { id: 50, name: "Sipsmiths", price: 4.0 },
      { id: 51, name: "Sipsmiths Sloe Gin", price: 4.0 },
      { id: 52, name: "Sipsmiths Lemon Drizzle", price: 4.0 },
      { id: 53, name: "Mermaid Gin", price: 4.25 },
      { id: 54, name: "Mermaid Pink Gin", price: 4.25 },
      { id: 55, name: "Hendricks", price: 3.5 },
      { id: 56, name: "Whitley Neil Rhubarb & Ginger", price: 3.5 },
      { id: 57, name: "Whitley Neil Strawberry & Black Pepper", price: 3.5 },
      { id: 58, name: "Whitley Neil Raspberry", price: 3.5 },
      { id: 59, name: "Whitley Neil Parma Violet", price: 3.5 },
      { id: 60, name: "Whitley Neil Blueberry", price: 3.5 },
      { id: 61, name: "Bombay Sapphire", price: 3.5 },
      { id: 62, name: "Greenalls", price: 3.25 },
    ],
  },
  {
    category: "Rums",
    items: [
      { id: 63, name: "Bacardi Blanco", price: 3.25 },
      { id: 64, name: "Bacardi Oakheart Spiced Rum", price: 3.5 },
      { id: 65, name: "Sailor Jerry’s Spiced Rum", price: 3.5 },
      { id: 66, name: "Captain Morgan", price: 3.5 },
      { id: 67, name: "Captain Morgan Dark Rum", price: 3.5 },
      { id: 68, name: "Mount Gay Rum", price: 3.5 },
      { id: 69, name: "Red Leg Spiced Rum", price: 3.5 },
      { id: 70, name: "Kracken Spiced Rum", price: 4.0 },
    ],
  },
  {
    category: "Vodkas",
    items: [
      { id: 71, name: "Stolichnaya", price: 3.5 },
      { id: 72, name: "Smirnoff", price: 3.25 },
      { id: 73, name: "Bison Grass Vodka", price: 3.75 },
      { id: 74, name: "Grey Goose", price: 4.25 },
      { id: 75, name: "AU Raspberry", price: 4.25 },
      { id: 76, name: "AU Fruit Punch", price: 4.25 },
    ],
  },
  {
    category: "Wines",
    items: [
      { id: 77, name: "White Wine (175ml)", price: 4.25 },
      { id: 78, name: "White Wine (250ml)", price: 5.1 },
      { id: 79, name: "White Wine (Bottle)", price: 15.0 },
      { id: 80, name: "Red Wine (175ml)", price: 4.25 },
      { id: 81, name: "Red Wine (250ml)", price: 5.1 },
      { id: 82, name: "Red Wine (Bottle)", price: 15.0 },
      { id: 83, name: "Rose Wine (175ml)", price: 4.25 },
      { id: 84, name: "Rose Wine (250ml)", price: 5.1 },
      { id: 85, name: "Rose Wine (Bottle)", price: 15.0 },
    ],
  },
];

const Pricelist = () => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(
        expandedCategories.filter((cat) => cat !== category)
      );
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  return (
    <div className="all">
      <div className="pricelist-container">
        <h2>Drink Categories</h2>

        <ul className="category-list">
          {pricelistData.map((categoryData, index) => (
            <li key={index} className="category-item">
              <div
                className="category-header"
                onClick={() => toggleCategory(categoryData.category)}
              >
                {categoryData.category}
              </div>

              {expandedCategories.includes(categoryData.category) && (
                <ul className="pricelist-list">
                  {categoryData.items.map((item) => (
                    <li key={item.id} className="pricelist-item">
                      <span>{item.name}</span>{" "}
                      <span>€{item.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pricelist;
