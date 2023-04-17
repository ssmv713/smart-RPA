import styled from "@emotion/styled";
import { useState } from "react";
import { Color } from "../../theme/color";

export const NewSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState("option");

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <StyledBox>
      <StyledSelect
        value={selectedValue}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="option">수행률순</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </StyledSelect>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  position: relative;
  width: 130px;
  background-color: ${Color.HeaderBgColor};
  height: 40px;
  padding: 0 8px;
  border-radius: 20px;
`;

const StyledSelect = styled.select`
  position: absolute;
  top: 5px;
  left: 0;
  width: 120px;
  outline: none;
  background-color: ${Color.HeaderBgColor};
  border: none;
  color: ${Color.AshWhiteText};
  padding: 8px 0 8px 12px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none; /* Safari and Chrome */
  -moz-appearance: none; /* Firefox */
  background-image: url("assets/arrow_down.png");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 11px 6px;
  border-radius: 20px;
  & option {
    background: ${Color.HeaderBgColor};
    &:focus {
      background: ${Color.btnNavyText};
    }
  }
`;
