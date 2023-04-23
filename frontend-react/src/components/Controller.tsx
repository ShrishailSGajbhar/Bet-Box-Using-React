// import React from 'react'
import { useState, useEffect } from "react";
import Button from "./Button"

function Controller() {

    const [hasWon, setHasWon] = useState(false)

    const handlePlaceBet = () => {
        setHasWon(!hasWon)
    }

    useEffect(() => {
        console.log(hasWon);
      }, [hasWon]);

  return (
    <div className="container bg-green-500 mx-auto">
      <Button runFunction={handlePlaceBet}/>
    </div>
  )


}

export default Controller