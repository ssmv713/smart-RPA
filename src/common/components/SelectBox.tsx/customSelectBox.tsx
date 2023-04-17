import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Color } from "../../theme/color";

export const CustomSelectBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("수행률순");
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const optionsModels = ["1차", "2차", "3차"];

  return (
    <StyledSelectBox className={isOpen ? "opened" : ""}>
      <div onClick={toggleDropdown}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {selectedValue ? selectedValue : "선택하세요"}
          <div>
            {isOpen ? (
              <ArrowUp src="/assets/arrow_down.png" alt="arrowup" />
            ) : (
              <img src="/assets/arrow_down.png" alt="arrow" />
            )}
          </div>
        </Stack>
      </div>
      {isOpen && (
        <Options>
          {optionsModels.map((value, index) => (
            <li key={index} onClick={() => handleSelect(value)}>
              {value}
            </li>
          ))}
        </Options>
      )}
    </StyledSelectBox>
  );
};

const StyledSelectBox = styled.div`
  position: relative;
  color: #c0c0c0;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 8px;
  background: ${Color.HeaderBgColor};
  font-size: 14px;
  width: 130px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  &.opened {
    border-radius: 20px 20px 0 0;
  }
`;

const Options = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  background: ${Color.HeaderBgColor};
  border-radius: 0 0 20px 20px;
  & li {
    color: #c0c0c0;
    width: 130px;
    height: 40px;
    padding-left: 14px;
    padding-top: 8px;
    border-top: solid 1px #354257;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background: #354257;
      color: #fff;
    }
  }
`;
const ArrowUp = styled.img`
  transform: scaleY(-1);
`;
