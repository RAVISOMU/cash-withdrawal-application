import './index.css'

const DenominationItem = props => {
  const {buttonElement, withdrawMoney} = props
  const {value} = buttonElement

  const onDebit = () => {
    withdrawMoney(value)
  }

  return (
    <li>
      <button onClick={onDebit} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
