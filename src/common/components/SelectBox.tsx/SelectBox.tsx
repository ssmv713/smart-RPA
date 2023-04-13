import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled from "@emotion/styled";
import { Color } from "../../theme/color";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const SelectBox = () => {
  const [list, setList] = useState("option1");
  const handleChange = (event: SelectChangeEvent) => {
    setList(event.target.value);
  };

  return (
    <div>
      <StyledSelectBox>
        {/* <InputLabel>수행률순</InputLabel> */}

        <Select
          value={list}
          onChange={handleChange}
          label="수행률순"
          IconComponent={customArrowDown}
          sx={{ padding: "0 14px", borderRadius: "20px", height: "40px" }}
          className="select"
        >
          <MenuItem selected={true} value="option1">
            수행률순
          </MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </StyledSelectBox>
    </div>
  );
};

const StyledSelectBox = styled(FormControl)`
  width: 130px;
  background: ${Color.HeaderBgColor};
  border-radius: 20px;
  cursor: pointer;
  & .select {
    color: ${Color.btnWhiteText};
    font-size: 14px;
    outline: none !important;
    cursor: pointer;
    width: 100%;
    position: relative;
    z-index: 5;
    /* border: solid 2px #576273; */
    &:focus {
      outline: none !important;
    }
  }
  .Mui-focused {
    /* border: solid 2px #576273; */
  }
  & .MuiInputBase-root {
    outline: none !important;
    border: none;
    &:focus {
      outline: none !important;
      box-shadow: none;
      border: none;
    }
  }
  & .MuiSelect-select {
    padding: 0;
  }
`;

const customArrowDown = () => {
  return <Arrow src="/assets/arrow_down.png" alt="arrow" />;
};

const Arrow = styled.img`
  cursor: pointer;
  position: relative;
  z-index: 0;
`;
