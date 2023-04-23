// import React from 'react'

type Props = {
    runFunction: any;
}

function Button({runFunction}: Props) {
  return (
    <button 
        onClick={runFunction} className="transition-all duration-300 border border-black w-full px-4 py-2 mt-4 rounded-sm bg-indigo-500 hover:bg-indigo-600 text-white">Place Bet
      </button>
  )
}

export default Button