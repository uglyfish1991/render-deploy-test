import { useState, useEffect } from "react";

// custom hooks need to start with the word use 
const useFetch = (url) => {

  const [errorMsg, setErrorMsg] = useState('')
  const [cats, setCats] = useState([])

  // this useEffect only runs once when component is first rendered see end of func
  useEffect(() => {
    // asynchronous function so we can wait for data to be fetched
    const fetchData = async () => {
      try {
        setErrorMsg('')
        // wait for fetch request from API endpoint and store response in a variable. Using a parameter so I can re-use this code!
        const response = await fetch(url);

        // check to see if the response was successful - otherwise chuck up an error
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        // parse JSON response into normal javascript
        const data = await response.json();
        setCats(data)
      } catch (error) {
        // catch an error that occurs in the try block
        setErrorMsg("Oops something went wrong...")
        console.log(error.message)
      }
    }
    fetchData()
    // the url is a dependancy but I think I need to really focus on what a dependancy is 
  }, [url])

  return {errorMsg, cats}
}

export default useFetch;