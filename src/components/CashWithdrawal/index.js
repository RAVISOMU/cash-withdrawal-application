import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onWithdrawMoney = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="bg-card-container">
          <div className="bg-card">
            <div className="name-container">
              <p className="name-logo">S</p>
              <h1 className="name">Sarah Williams</h1>
            </div>
            <div className="balance-container">
              <p>Your Balance</p>
              <div className="amount-container">
                <p className="amount">{amount}</p>
                <p>In Rupees</p>
              </div>
            </div>
            <div className="withdraw-container">
              <p className="withdraw-heading">Withdraw</p>
              <p className="description">CHOOSE SUM (IN RUPEES)</p>
            </div>
            <ul className="list-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  buttonElement={eachItem}
                  key={eachItem.id}
                  withdrawMoney={this.onWithdrawMoney}
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
