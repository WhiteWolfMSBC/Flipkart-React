
// All Pi Data
const JsonApi = async () => {

  let response = await fetch('../Json/Data.json');
  let json = await response.json();
  return json;

};

// Electronics Api

const ElectronicsApi = async () => {

  let response = await fetch('../Json/Electronics.json');
  let json = await response.json();
  return json;

};

// Furniture Api

const FurnitureApi = async () => {

  let response = await fetch('../Json/Furniture.json');
  let json = await response.json();
  return json;

};


// Grocery Api

const GroceryApi = async () => {

  let response = await fetch('../Json/Grocery.json');
  let json = await response.json();
  return json;

};


// Fashion Api

const FashionApi = async () => {

  let response = await fetch('../Json/Fashion.json');
  let json = await response.json();
  return json;

};


// Mobile Api

const MobileApi = async () => {

  let response = await fetch('../Json/Mobile.json');
  let json = await response.json();
  return json;

};


export default JsonApi;
export { ElectronicsApi, FurnitureApi, GroceryApi, FashionApi, MobileApi }