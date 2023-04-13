import { Button, Drawer, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import { Color } from "../../../../common/theme/color";
import { SidebarModels } from "../model/SidebarModels";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledDrawer width={isOpen ? "240px" : "60px"}>
      <Typography color={Color.WhiteText} my="20px">
        {isOpen ? "Report" : "R"}
      </Typography>
      {SidebarModels.map((it, index) => (
        <SidebarList direction="row" key={index}>
          <div>
            <img src={it.img} alt="clock" />
          </div>
          <SidebarText
            display={isOpen ? "block" : "none"}
            fontSize="14px"
            color={Color.GrayText}
            ml="8px"
          >
            {it.title}
          </SidebarText>
        </SidebarList>
      ))}

      <Arrow onClick={handleClick}>
        <img
          src={isOpen ? "/assets/arrow_left.png" : "/assets/arrow_right.png"}
          alt="arrowRight"
        />
      </Arrow>
    </StyledDrawer>
  );
};

interface StyledDrawerProprs {
  width: string;
}

const StyledDrawer = styled(Stack)<StyledDrawerProprs>`
  background: ${Color.sidebarColor};
  width: ${(props) => props.width};
  padding-left: 20px;
  position: relative;
  transition: all 0.4s;
  height: 100%;
  /* overflow: hidden; */
`;
const SidebarList = styled(Stack)`
  height: 45px;
  /* overflow: hidden; */
`;
interface SidebarTextProps {
  // opacity: number;
  display: string;
}

const SidebarText = styled(Typography)<SidebarTextProps>`
  display: ${(props) => props.display};
  transition: all 4s;
`;

const Arrow = styled(Button)`
  position: absolute;
  right: -20px;
  top: 20px;
  padding: 10px;
  background: ${Color.sidebarColor};
  min-width: 20px;
  &:hover {
    background: ${Color.sidebarColor};
  }
`;
