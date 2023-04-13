import styled from "@emotion/styled";
import { Stack, Switch, Typography } from "@mui/material";
import { Color } from "../../../../common/theme/color";
import { Battery } from "./battery";
import { useState } from "react";

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
  `;
  const SmallFont = styled(Typography)`
    color: ${textColor};
    font-size: 14px;
  `;

  return (
    <StyleCard justifyContent="space-between">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <CPU src="/assets/cpu.png" alt="cpu" />
          <SmallFont mx="4px">CPU</SmallFont>
          <Battery customWidth="10%"></Battery>
          <SmallFont ml="4px" mr="6px">
            6%
          </SmallFont>
          <Memory src="/assets/memory.png" alt="memory" />
          <SmallFont mx="4px">Memory</SmallFont>
          <Battery customWidth="40%"></Battery>
          <SmallFont ml="4px">32%</SmallFont>
        </Stack>
        <img src="/assets/info.png" alt="info" />
      </Stack>
      <Stack direction="row" alignItems="center">
        <Typography fontSize="32px" color={isOn ? Color.BgColor : "#fff"}>
          {"BOT-D5JSQ"}
        </Typography>
        <Switch onChange={(e) => handleSwitch(e.target.checked)} />
        <Switch></Switch>
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
