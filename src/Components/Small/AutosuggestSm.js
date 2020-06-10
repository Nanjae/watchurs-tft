import React from "react";
import styled from "styled-components";
import Autosuggest from "react-autosuggest";
import icon_search from "../../Assets/Icons/icon_search.png";
import { getBroadList } from "../Common/BroadList";

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 2px solid lightgoldenrodyellow;
`;

const InputText = styled.input`
  width: 90%;
  border: 0px;
  color: white;
  text-align: center;
  @media only screen and (max-width: 575.98px) {
    height: 30px;
    padding: 5px;
    font-size: 18px;
  }
  @media only screen and (min-width: 576px) {
    height: 30px;
    padding: 5px;
    font-size: 18px;
  }
  @media only screen and (min-width: 768px) {
    height: 40px;
    padding: 5px;
    font-size: 20px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SearchIcon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  @media only screen and (max-width: 575.98px) {
    width: 20px;
    height: 20px;
    margin: 4px 4px;
  }
  @media only screen and (min-width: 576px) {
    width: 20px;
    height: 20px;
    margin: 4px 4px;
  }
  @media only screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin: 5px 5px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SuggestionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  margin-top: 3px;
  border-radius: 6px;
  opacity: 0.8;
  @media only screen and (max-width: 575.98px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SuggestionBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: black;
  @media only screen and (max-width: 575.98px) {
    padding: 4px 8px;
  }
  @media only screen and (min-width: 576px) {
    padding: 4px 8px;
  }
  @media only screen and (min-width: 768px) {
    padding: 5px 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const SuggestionAvatar = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  @media only screen and (max-width: 575.98px) {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
  @media only screen and (min-width: 576px) {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
  @media only screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
    margin-right: 6px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
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
      className={"autoInput"}
      {...inputProps}
      type={"search"}
      onKeyUp={(event) => {
        if (event.key === "Enter") {
          event.target.blur();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
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
              window.scrollTo({ top: 0, behavior: "smooth" });
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
            window.scrollTo({ top: 0, behavior: "smooth" });
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
          ? "등록된 데이터 로딩 중..."
          : "브로드캐스터 닉네임 또는 ID 입력",
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
