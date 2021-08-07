import React from "react";

export default function Home({ recipes }) {
  console.log(recipes);
  const n = Math.floor(Math.random() * recipes.length);
  let item = recipes.at(n);
  console.log(item);
  // console.log(item.title)

  return (
    <div className="home">
      {/* {item = recipes.filter(i => i.)} */}

      {item ? (
        <>
          <h1>{item.title}</h1>
          <img src={item.picture} />
          <p>{item.description}</p>
          <p>{item.method}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
