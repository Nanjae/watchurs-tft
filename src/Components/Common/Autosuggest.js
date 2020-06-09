import React from "react";
import styled from "styled-components";
import Autosuggest from "react-autosuggest";
import icon_search from "../../Assets/Icons/icon_search.png";
import { getBroadList } from "./BroadList";

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
  color: white;
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
  opacity: 0.8;
`;

const SuggestionBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 580px;
  color: black;
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

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : getBroadList().filter(
        (broad) =>
          broad.name.toLowerCase().includes(inputValue) ||
          broad.broadId.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = (suggestion) => suggestion.name;

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
          if (inputProps.countMax !== 0) {
            if (event.key === "Enter") {
              const searchResult = inputProps.data.seeSortTFTSummoners.findIndex(
                (x) =>
                  x.tftSummoner.broadcaster.name === inputProps.value ||
                  x.tftSummoner.broadcaster.broadId === inputProps.value
              );
              inputProps.setClickCard(0);
              inputProps.setDragNext(setDragNextNum(searchResult));
              inputProps.setSearchIndex(searchResult + 1);
            }
          }
        }
      }}
    />
    <SearchIcon
      onClick={() => {
        if (!inputProps.loading) {
          if (inputProps.countMax !== 0) {
            const searchResult = inputProps.data.seeSortTFTSummoners.findIndex(
              (x) =>
                x.tftSummoner.broadcaster.name === inputProps.value ||
                x.tftSummoner.broadcaster.broadId === inputProps.value
            );
            inputProps.setClickCard(0);
            inputProps.setDragNext(setDragNextNum(searchResult));
            inputProps.setSearchIndex(searchResult + 1);
          }
        }
      }}
      url={icon_search}
    />
  </InputDiv>
);

export default class CustomAutosuggest extends React.Component {
  constructor() {
    super();
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

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

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

    const inputProps = {
      placeholder:
        this.props.countMax === 0
          ? "와쳐스 브로드캐스터 데이터 로딩 중..."
          : "브로드캐스터 닉네임 또는 ID를 입력해주세요.",
      value,
      onChange: this.props.countMax === 0 ? () => {} : this.onChange,
      data: this.props.data,
      loading: this.props.loading,
      setDragNext: this.props.setDragNext,
      setSearchIndex: this.props.setSearchIndex,
      setClickCard: this.props.setClickCard,
      countMax: this.props.countMax,
    };

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
