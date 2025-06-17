const products = [
  {
    id: "1",
    name: "Cheeseburger con Bacon",
    category: "Burgas",
    description: "Hamburguesa simple de cheddar y Bacon, Incluye Papas Fritas",
    price: 8000,
    image: "/assets/CheddarBacon.jpg", 
  },
  {
    id: "2",
    name: "Cheeseburger con Bacon Doble",
    category: "Burgas",
    description: "Hamburguesa doble de cheddar y Bacon, Incluye Papas Fritas",
    price: 9200,
    image: "/assets/DobleCheddarBacon.jpg",
  },
    {
    id: "3",
    name: "Cheeseburger con Bacon Triple",
    category: "Burgas",
    description: "Hamburguesa triple de cheddar y Bacon, Incluye Papas Fritas",
    price: 10400,
    image: "/assets/TripleCheddarBacon.jpg", 
  },
  {
    id: "4",
    name: "Papas Fritas Extra",
    category: "Papas",
    description: "Papas Fritas Extra",
    price: 2500,
    image: "/assets/PapasNormales.jpg",
  },
    {
    id: "5",
    name: "Papas Fritas con Salsa BBQ",
    category: "Papas",
    description: "Papas Fritas con Salsa BBQ casera, Extra, no reemplazan a las que vienen con la Hamburguesa",
    price: 3500,
    image: "/assets/PapasSalsaBBQ.jpg", 
  },
  {
    id: "6",
    name: "Papas Fritas con Cheddar y Bacon",
    category: "Papas",
    description: "Papas Fritas con Salsa Cheddar y trozos de Bacon, Extra, no reemplazan a las que vienen con la Hamburguesa",
    price: 3500,
    image: "/assets/PapasCheddarBacon.jpg",
  },
  {
    id: "7",
    name: "Pepsi",
    category: "Bebidas",
    description: "Lata 500ml",
    price: 1500,
    image: "/assets/Pepsi.jpg", 
  },
  {
    id: "8",
    name: "Fanta",
    category: "Bebidas",
    description: "Lata 500ml",
    price: 1900,
    image: "/assets/naranja.jpg",
  },
  {
    id: "9",
    name: "Sprite",
    category: "Bebidas",
    description: "Lata 500ml",
    price: 1900,
    image: "/assets/Limon.jpg",
  },
];

export const getProducts = () =>
  new Promise((res) => setTimeout(() => res(products), 1000));

export const getProductById = (id) =>
  new Promise((res) =>
    setTimeout(() => res(products.find((p) => p.id === id)), 1000)
  );

export const getProductsByCategory = (categoryId) =>
  new Promise((res) =>
    setTimeout(() => res(products.filter((p) => p.category === categoryId)), 1000)
  );