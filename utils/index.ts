const fetchCars = async () => {
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e486bfb3cemsh9d1eda34e5e29eep1d7e99jsnc0fe05683be6",
      "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result
    
  } catch (error) {
    console.error(error);
  }

  
};

export default fetchCars;
