// import React from 'react'
import { useState } from "react";
import Button from "./Button"

function Controller() {

    const [hasWon, setHasWon] = useState(false)

    const handlePlaceBet = () => {
        setHasWon(true)
        console.log(hasWon)
    }

    console.log(hasWon)
  return (
    <div className="container bg-green-500 mx-auto">
      <Button runFunction={handlePlaceBet}/>
    </div>
  )


}

export default Controller