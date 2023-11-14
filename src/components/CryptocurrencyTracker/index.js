// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    this.setState({
      cryptoData: data.map(eachCrypto => ({
        id: eachCrypto.id,
        currencyLogoUrl: eachCrypto.currency_logo,
        currencyName: eachCrypto.currency_name,
        usdValue: eachCrypto.usd_value,
        euroValue: eachCrypto.euro_value,
      })),
      isLoading: false,
    })
  }

  renderCryptoDataList = () => {
    const {cryptoData} = this.state
    return <CryptocurrenciesList cryptoData={cryptoData} />
  }

  renderLoader = () => (
    <div>
      <Loader type="Rings" color="#ffffff" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div>{isLoading ? this.renderLoader() : this.renderCryptoDataList()}</div>
    )
  }
}

export default CryptocurrencyTracker
