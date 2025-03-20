import React, {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onWithdraw = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="app-container">
        <div className="withdrawal-container">
          <div className="balance-container">
            <p className="label">Your Balance</p>
            <p className="balance" data-testid="balance">
              {balance}
            </p>
            <p className="label">In Rupees</p>
          </div>
          <div className="denominations-container">
            <p className="withdraw-label">Withdraw</p>
            <p className="choose-label">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-list">
              {denominationsList.map(denomination => (
                <DenominationItem
                  key={denomination.id}
                  denominationDetails={denomination}
                  onWithdraw={this.onWithdraw}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
