export async function fetchCars() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const headers = {
		'X-RapidAPI-Key': `${apiKey}`,
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json()

  return result

}