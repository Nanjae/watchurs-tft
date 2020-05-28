import React from "react";
import styled from "styled-components";
import Autosuggest from "react-autosuggest";
import icon_search from "../../Assets/Icons/icon_search.png";
import { setBroadList, getBroadList } from "./BroadList";

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid lightgoldenrodyellow;
`;

const InputText = styled.input`
  width: 500px;
  height: 30px;
  padding: 10px;
  border: 0px;
  font-size: 24px;
  color: lightgoldenrodyellow;
  text-align: center;
`;

const SearchIcon = styled.div`
  width: 30px;
  height: 30px;
  margin: 5px;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const SuggestionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  margin-top: 3px;
  border-radius: 6px;
  /* border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px; */
  opacity: 0.8;
`;

const SuggestionBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 580px;
  color: black;
  /* color: #e8293b; */
  font-size: 22px;
  font-weight: 700;
`;

const SuggestionAvatar = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 50%;
`;

const setDragNextNum = (index) => {
  if (index >= 0) {
    return Math.ceil((index + 1) / 10);
  } else {
    return 0;
  }
};

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : getBroadList().filter(
        (broad) =>
          broad.name.toLowerCase().slice(0, inputLength) === inputValue ||
          broad.broadId.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => (
  <SuggestionDiv>
    <SuggestionBox>
      <SuggestionAvatar url={suggestion.avatar} />
      {suggestion.name}({suggestion.broadId})
    </SuggestionBox>
  </SuggestionDiv>
);

const renderInputComponent = (inputProps) => (
  <InputDiv>
    <InputText
      {...inputProps}
      onKeyPress={(event) => {
        if (!inputProps.loading) {
          if (event.key === "Enter") {
            inputProps.setDragNext(
              setDragNextNum(
                inputProps.data.seeSortSummoners.findIndex(
                  (x) =>
                    x.summoner.broadcaster.name === inputProps.value ||
                    x.summoner.broadcaster.broadId === inputProps.value
                )
              )
            );
          }
        }
      }}
    />
    <SearchIcon
      onClick={() => {
        if (!inputProps.loading) {
          inputProps.setDragNext(
            setDragNextNum(
              inputProps.data.seeSortSummoners.findIndex(
                (x) =>
                  x.summoner.broadcaster.name === inputProps.value ||
                  x.summoner.broadcaster.broadId === inputProps.value
              )
            )
          );
        }
      }}
      url={icon_search}
    />
  </InputDiv>
);

export default class CustomAutosuggest extends React.Component {
  constructor() {
    super();
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  static getDerivedStateFromProps = (props) => {
    if (!props.loading && props.data) {
      return {
        data: props.data,
        loading: props.loading,
      };
    }
    return null;
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "브로드캐스터 닉네임 또는 ID를 입력해주세요.",
      value,
      onChange: this.onChange,
      data: this.props.data,
      loading: this.props.loading,
      setDragNext: this.props.setDragNext,
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderInputComponent={renderInputComponent}
        inputProps={inputProps}
      />
    );
  }
}
