import React from "react";

const Top100Page = () => {
  // Daten für die Top-100-Liste
  const top100List = [
    { rank: 1, title: "Item 1" },
    { rank: 2, title: "Item 2" },
    // Weitere Listeneinträge hier
  ];

  return (
    <div>
      <h1>Top 100 Liste</h1>
      <ul>
        {top100List.map((item) => (
          <li key={item.rank}>
            <span>{item.rank}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Top100Page;
