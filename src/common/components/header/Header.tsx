import { Button, Stack, Typography } from "@mui/material";
import { Color } from "../../theme/color";
import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomSearchBar } from "../searchBar/SearchBar";

export const Header = () => {
  const navModel = [
    { list: "DASHBOARD", link: "job" },
    { list: "SCENARIO", link: "job" },
    { list: "BOT", link: "job" },
    { list: "JOB", link: "job" },
    { list: "REPORT", link: "job" },
  ];
  const [selectedButton, setSelectedButton] = useState(0);
  const handleClick = (index: number) => {
    setSelectedButton(index);
  };
  return (
    <HeaderWrap direction="row" alignItems="center">
      <img src="/assets/logo.png" alt="logo" />
      <Nav>
        {navModel.map((it, index) => (
          <li key={index}>
            <Link to={it.link}>
              <StyledButton
                disableRipple
                onClick={() => handleClick(index)}
                className={index === selectedButton ? "selected" : ""}
              >
                <Typography
                  fontSize="16px"
                  color={Color.GrayText}
                  className={index === selectedButton ? "selectedList" : ""}
                >
                  {it.list}
                </Typography>
              </StyledButton>
            </Link>
          </li>
        ))}
      </Nav>
      <Stack direction="row" alignItems="center">
        {/* 서치바 */}
        <CustomSearchBar customWidth="280px" bgColor="#000" />
        <Round>
          <Noti src="/assets/noti.png" alt="noti" />
          <RedNumber>{"2"}</RedNumber>
        </Round>
        <Round>
          <Profile src="/assets/profile.png" alt="profile" />
        </Round>
      </Stack>
    </HeaderWrap>
  );
};

const HeaderWrap = styled(Stack)`
  background-color: ${Color.HeaderBgColor};
  padding: 0 20px;
  justify-content: space-between;
  height: 68px;
  width: 1920px;
`;
const Nav = styled.ul`
  display: flex;
  /* max-width: 1392px; */

  & li {
    width: 140px;

    text-align: center;
  }
`;
const StyledButton = styled(Button)`
  height: 68px;
  border-radius: 0;
  width: 100%;
  &.selected {
    border-bottom: solid 3px #fff;
  }
  & .selectedList {
    color: #fff;
    font-weight: 600;
  }
`;

const Round = styled.div`
  width: 38px;
  height: 38px;
  background-color: #202b3d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 12px;
`;
const Noti = styled.img`
  width: 19px;
  height: 24px;
`;
const Profile = styled.img`
  width: 21px;
  height: 22px;
`;
const RedNumber = styled.div`
  width: 16px;
  height: 16px;
  background: red;
  position: absolute;
  right: -4px;
  top: -3px;
  color: #fff;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  line-height: 16px;
  z-index: 10;
`;
