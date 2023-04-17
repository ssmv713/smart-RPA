import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

type CustomSearchBarType = {
  customWidth: string;
  bgColor: string;
  placeholder:string;
};

export const CustomSearchBar = ({
  customWidth,
  bgColor,
  placeholder,
}: CustomSearchBarType) => {
  return (
    <SearchBar customWidth={customWidth} bgColor={bgColor}>
      <InputBase
        className="input"
        placeholder={placeholder}
        sx={{
          input: {
            width: "100%",
            fontSize: "13px",
            color: "#e1e1e1",

            "&::placeholder": {
              color: "#e1e1e1",
              opacity: 1,
            },
          },
        }}
      ></InputBase>
      <img src="/assets/search.png" alt="search" />
    </SearchBar>
  );
};

interface SearchBarProps {
  customWidth: string;
  bgColor: string;
}

const SearchBar = styled.div<SearchBarProps>`
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: ${(props) => props.bgColor};
  border-radius: 20px;
  padding: 4px 20px;
  width: ${(props) => props.customWidth};

  & .input {
    width: 300px;
  }
  & img {
    cursor: pointer;
  }
`;
