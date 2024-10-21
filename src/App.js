const App = () => {
  const categories = [
    { title: "Hats", id: 1 },
    { title: "Jackets", id: 2 },
    { title: "Sneakers", id: 3 },
    { title: "Women", id: 4 },
    { title: "Men", id: 5 },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container" key={category.id}>
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Show Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
