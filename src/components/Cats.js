import React from "react";
import useFetch from "./useFetch";
import { SpinnerDotted } from 'spinners-react';
import CatBox from "./CatBox";

const Cats = () => {

  const {errorMsg, cats} = useFetch('https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=985c5e63-464c-4891-81e7-dcd4207478df')

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

  return (

    <div className="catWrapper">
      {/* takes 9 cats - didn't start at 0 because of cat of the week, I think? */}
      {/* eventually these will be cards where the cat is the bg image but I can't work out how to do that in CSS - lots of suggestions for inline styling - is this okay?

      Could I use styled components for this?


      -------------------------------------------
      |                                         |
      |          ------------------             |
      |           'cat' the 'breed'             |
      |             find out more               |
      |          ------------------             |
      |                                         |
      -------------------------------------------


      */}
      
      {cats.slice(1, 10).map((cat, index) => {
        return <CatBox key={index} cat={cat} cats={cats} />
      })}
    </div>
  )
}

export default Cats;