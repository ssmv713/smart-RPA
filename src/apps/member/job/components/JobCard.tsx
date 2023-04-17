import styled from "@emotion/styled";
import { Stack, Switch, Typography } from "@mui/material";
import { Color } from "../../../../common/theme/color";
import { Battery } from "./battery";
import { useState } from "react";
import { Link } from "react-router-dom";

type JobCardType = {
  date: string;
};

export const JobCard = ({ date }: JobCardType) => {
  const [isOn, setIsOn] = useState(false);
  const handleSwitch = (checked: boolean) => {
    setIsOn(checked);
  };

  const bgColor = isOn ? Color.BrandMain : Color.cardBgColor;
  const textColor = isOn ? Color.BgColor : "#fff";

  const StyleCard = styled(Stack)`
    width: 360px;
    height: 214px;
    border-radius: 12px;
    background: ${bgColor};
    padding: 16px;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.8);
  `;
  const SmallFont = styled(Typography)`
    color: ${textColor};
    font-size: 14px;
  `;

  return (
    <StyleCard justifyContent="space-between">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <CPU
            src={isOn ? "/assets/cpu_black.png" : "/assets/cpu.png"}
            alt="cpu"
          />
          <SmallFont mx="4px">CPU</SmallFont>
          <Battery customWidth="10%"></Battery>
          <SmallFont ml="4px" mr="6px">
            6%
          </SmallFont>
          <Memory
            src={isOn ? "/assets/memory_black.png" : "/assets/memory.png"}
            alt="memory"
          />
          <SmallFont mx="4px">Memory</SmallFont>
          <Battery customWidth="40%"></Battery>
          <SmallFont ml="4px">32%</SmallFont>
        </Stack>
        <Link to="#!">
          <InfoImage
            src={isOn ? "/assets/info_black.png" : "/assets/info.png"}
            alt="info"
          />
        </Link>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize="32px" color={isOn ? Color.BgColor : "#fff"}>
          {"BOT-D5JSQ"}
        </Typography>
        <StyledSwtich
          checked={isOn}
          onChange={(e) => handleSwitch(e.target.checked)}
          className={isOn ? "switched" : ""}
        />
      </Stack>
      <Stack>
        <Truncate
          color={isOn ? Color.BgColor : Color.WhiteText}
          text="DESKTOP-JOMBBCI/192.168.2190"
          maxLength={27}
        />
        <Typography
          color={isOn ? Color.BgColor : Color.GrayText}
          fontSize="18px"
        >
          {date}
        </Typography>
      </Stack>
    </StyleCard>
  );
};

const CPU = styled.img`
  width: 16px;
  height: 16px; ;
`;
const Memory = styled.img`
  width: 30px;
  height: 13px;
`;

const StyledSwtich = styled(Switch)`
  transform: translateX(20px);
  & .MuiSwitch-thumb {
    width: 12px;
    height: 12px;
  }
  & .MuiSwitch-track {
    width: 26px;
    background: #576273;
  }
  &.switched .MuiSwitch-track {
    background: #354257 !important;
    opacity: 1 !important;
  }
  & .MuiButtonBase-root {
    padding: 13px;
  }
  &.switched .MuiButtonBase-root {
    color: #fff;
    transform: translateX(14px);
  }
`;
const InfoImage = styled.img`
  display: block;
`;

type TruncateType = {
  text: string;
  maxLength: number;
  color: string;
};

const Truncate = ({ text, maxLength, color }: TruncateType) => {
  if (text.length > maxLength) {
    return (
      <Typography color={color} fontSize="18px">
        {text.slice(0, maxLength)}···
      </Typography>
    );
  }
  return (
    <Typography color={Color.WhiteText} fontSize="18px">
      {text}
    </Typography>
  );
};
