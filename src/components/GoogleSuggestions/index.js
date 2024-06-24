import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="backgroundContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="googleLogo"
          alt="google logo"
        />
        <div className="searchContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            className="searchIcon"
            alt="search icon"
          />
          <input
            type="search"
            placeholder="Search Google"
            className="searchBox"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <ul className="Suggestion_List_container">
            {searchResult.map(eachSuggestion => (
              <SuggestionItem
                Suggestions={eachSuggestion}
                key={eachSuggestion.id}
                updatedSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
