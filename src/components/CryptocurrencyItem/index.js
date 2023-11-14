// Write your JS code here
const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = cryptocurrencyDetails

  return (
    <li>
      <div>
        <img src={currencyLogoUrl} alt={currencyName} />
        <p>{currencyName}</p>
        <div>
          <p>{usdValue}</p>

          <p>{euroValue}</p>
        </div>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
