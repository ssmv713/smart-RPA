import { Stack, Typography } from "@mui/material";
import { Color } from "../../../../common/theme/color";
import styled from "@emotion/styled";

export const GraphCard = () => {
  return (
    <Card justifyContent="space-between">
      <Typography color={Color.WhiteText} fontSize="24px">
        {"프로세스별 수행시간"}
      </Typography>
      <Stack direction="row" alignItems="center">
        <Typography mr="8px" fontSize="20px" color={Color.WhiteText}>
          {"기간"}
        </Typography>
        <div>
          <img src="assets/calendar.png" alt="calendar" />
        </div>
        <Typography ml="8px" fontSize="20px" color={Color.GrayText}>
          2022-12-16 ~ 2022-12-22
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-end">
        <Dot bgColor="#7C8490"></Dot>
        <Typography color={Color.WhiteText} ml="8px" mr="12px">
          요청
        </Typography>
        <Dot bgColor="#1C8F9E"></Dot>
        <Typography color={Color.WhiteText} ml="8px">
          성공
        </Typography>
      </Stack>
      <div>
        <Graph src="assets/line_chart.png" alt="graph" />
      </div>
    </Card>
  );
};

const Card = styled(Stack)`
  width: 100%;
  height: 460px;
  background: ${Color.cardBgColor};
  border-radius: 8px;
  padding: 30px 20px;
`;

type DotType = {
  bgColor: string;
};

const Dot = styled.div<DotType>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${(props) => props.bgColor};
`;

const Graph = styled.img`
  width: 100%;
`;
