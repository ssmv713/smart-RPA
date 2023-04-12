import styled from "@emotion/styled";
import { Color } from "../../../../common/theme/color";

type BatteryType = {
  customWidth: string;
};

export const Battery = ({ customWidth }: BatteryType) => {
  return (
    <Border>
      <Percentage customWidth={customWidth}></Percentage>
    </Border>
  );
};

const Border = styled.div`
  width: 35px;
  height: 15px;
  border: solid 2px #fff;
  border-radius: 4px;
  background: ${Color.cardBgColor};
  padding: 3px;
`;
interface PercentageProps {
  customWidth: string;
}

const Percentage = styled.div<PercentageProps>`
  height: 100%;
  width: ${(props) => props.customWidth};
  background: ${Color.BrandMain};
`;
