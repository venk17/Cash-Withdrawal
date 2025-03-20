// Write your code here
import React from 'react'
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onWithdraw} = props
  const {value} = denominationDetails

  const handleClick = () => {
    onWithdraw(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={handleClick}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
