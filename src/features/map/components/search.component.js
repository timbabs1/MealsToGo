import React, { useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  const onChangeSearch = (query) => {
    setSearchKeyword(query);
  };

  return (
    <SearchContainer>
      <Searchbar
        icon={"map"}
        placeholder="Search for a location"
        onChangeText={onChangeSearch}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};
