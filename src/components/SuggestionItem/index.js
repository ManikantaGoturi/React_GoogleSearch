import './index.css'

const SuggestionItem = props => {
  const {updatedSearchInput, Suggestions} = props

  const {suggestion} = Suggestions

  const moveTosearchBox = () => {
    updatedSearchInput(suggestion)
  }

  return (
    <li className="SuggestionItemContainer">
      <p className="Suggestions">{suggestion}</p>
      <button className="Arrowbutton" onClick={moveTosearchBox}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="search_image"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
