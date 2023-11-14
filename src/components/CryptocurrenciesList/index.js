// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  renderCryptoHeader = () => {
    ;<div>
      <p>Coin Type</p>
      <div>
        <p>USD</p>
        <p>EURO</p>
      </div>
    </div>
  }

  renderCryptoView = () => {
    const {cryptoData} = this.props

    return (
      <div>
        {this.renderCryptoHeader()}
        <ul>
          {cryptoData.map(eachCrypto => (
            <CryptocurrencyItem
              key={eachCrypto.id}
              cryptocurrencyDetails={eachCrypto}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
        />
        {this.renderCryptoView}
      </div>
    )
  }
}

export default CryptocurrenciesList
