const ab1 = async () => {

    let response = await fetch('https://fakestoreapi.com/products');
  
    let json = await response.json();
  
    return json;
  
  };
  
  
  
  const ab2 = async () => {
  
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
  
    let json = await response.json();
  
    return json;
  
  };
  
  
  
  export { ab1, ab2 };