// import React from 'react'
import { useState, useEffect } from "react";
import Button from "./Button"
import BetBox from "./BetBox";

function Controller() {

    const [hasWon, setHasWon] = useState(false)

    const handlePlaceBet = () => {
        setHasWon(!hasWon)
    }

    useEffect(() => {
        console.log(hasWon);
      }, [hasWon]);

  return (
    <div className="w-full md:w-[850px] lg:w-[1200px] px-5 py-12 bg-green-500 mx-auto">
      <Button runFunction={handlePlaceBet}/>
      <BetBox />
    </div>
  )


}

export default Controller