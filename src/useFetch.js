import React from 'react'
import { useEffect, useState } from 'react'


export function useFetch() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState();

  const url = 'https://proxyfood-production.up.railway.app/api/v8/foodPrices';
  /*const options = {
    'mode': 'no-cors',
  };*/


  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`${url}?query=${query}&client_id=${acessKey}`);
        const response = await fetch(url);
        if (!response.ok) {
          setAlert('error');
        } else {
          const jsonData = await response.json();
          setData(jsonData);
          setAlert('success');
        }
      } catch (error) {
          setAlert(error);
      } finally {
          setLoading(false); // Indicar que la carga ha terminado, independientemente del resultado
      }

    };
    fetchData();
    return () => {};
  }, []);
console.log(data);
  return { data , loading, alert };
}


