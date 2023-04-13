import { Button, Typography } from "@mui/material";
import { Color } from "../../../../common/theme/color";
import styled from "@emotion/styled";

export const StopButton = () => {
  return (
    <StyledStopButton>
      <img src="assets/job_stop.png" alt="stop" />
      <Typography fontSize="14px" color={Color.WhiteText} ml="8px">
        Job 중지
      </Typography>
    </StyledStopButton>
  );
};

const StyledStopButton = styled(Button)`
  background-color: ${Color.btnColor};
  margin-right: 20px;
`;
