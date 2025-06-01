// Data Sets 
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// ForEach Basics
// Logging each name individually
names.forEach((name) => {
  console.log(name);
});
// Logging each province individually
provinces.forEach((province) => {
  console.log(province);
});
// Logging each name with their matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Uppercase Transformation
// Created a new array of provinces in uppercase
const upperProvinces = provinces.map(province => province.toUpperCase());
console.log(upperProvinces);

// Name Lengths
// Made a new array with the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Sorting
// Sorted provinces alphabetically
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// Filtering Cape
// Removed provinces that have "Cape" in their names
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(`Remaining provinces count: ${filteredProvinces.length}`);

// Finding 'S'
// Checked which names contain the letter 'S' (case insensitive)
const namesWithS = names.map(name => name.toLowerCase().includes('s'));
console.log(namesWithS);

// Creating Object Mapping
// Used reduce to pair names with their matching province
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap);

// Advanced Exercises 

// Log Products
// Logged each product name using forEach
products.forEach(p => console.log(p.product));

// Filter by Name Length
// Kept only product names with length <= 5 characters
console.log(products.filter(p => p.product.length <= 5));

// Price Manipulation
// Removed products without valid prices, converted to numbers, then calculated the total
console.log(
  products
    .filter(p => !isNaN(parseFloat(p.price)) && String(p.price).trim() !== '')
    .map(p => parseFloat(p.price))
    .reduce((acc, price) => acc + price, 0)
);

// Concatenate Product Names
// Combined all product names into a single string
console.log(
  products.reduce((acc, p) => acc + p.product, '')
);

// Find Extremes in Prices
// Found the highest and lowest priced items and formatted them into a string
console.log(
  (() => {
    const validPrices = products
      .filter(p => !isNaN(parseFloat(p.price)) && String(p.price).trim() !== '')
      .map(p => ({ product: p.product, price: parseFloat(p.price) }));
    const max = validPrices.reduce((a, b) => (a.price > b.price ? a : b));
    const min = validPrices.reduce((a, b) => (a.price < b.price ? a : b));
    return `Highest: ${max.product}. Lowest: ${min.product}.`;
  })()
);

// Object Transformation
// Changed product objects to use 'name' and 'cost' instead of 'product' and 'price'
console.log(
  products.reduce((acc, item) => {
    acc.push({ name: item.product, cost: item.price });
    return acc;
  }, [])
);
