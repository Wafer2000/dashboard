import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <div>
      <button 
        type="button"
        style={{ backgroundColor: bgColor, color, borderRadius }}
        className={`
        p-3
        text-${size}
        hover:drop-shadow-xl
        `}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
