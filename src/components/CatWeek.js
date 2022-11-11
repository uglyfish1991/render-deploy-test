import React from "react";
import { Link } from "react-router-dom"
import useFetch from "./useFetch";
import { SpinnerDotted } from 'spinners-react';

const CatWeek = () => {
  const { errorMsg, cats } = useFetch('https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=985c5e63-464c-4891-81e7-dcd4207478df')

  // if / when the array returns empty
  if (cats.length < 1) {
    return (
      <>
        <div className="loading">
          Your cats are loading...
          <SpinnerDotted />
        </div>
      </>
    )
  }

  // display error message to user if something went wrong
  if (errorMsg !== '') {
    return <h1>{errorMsg}</h1>
  }

  console.log(cats[0].breeds)


  // console.log(cats)
  return (
    <div className="weekContainer">
      <div className="catWeek">
        <h2>Cat of the Week</h2>
        <div className="catWeekInner">

          <Link to="/aboutjeffers">
            <button>Find out more - Jeffers the {cats[0].breeds[0].name}</button>
          </Link>
        </div>


      </div>
    </div>
  )
}
export default CatWeek;
