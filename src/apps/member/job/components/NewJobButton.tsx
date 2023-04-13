import { Button, Typography } from "@mui/material";
import { Color } from "../../../../common/theme/color";
import styled from "@emotion/styled";

export const NewJobButton = () => {
  return (
    <StyledNewButton>
      <img src="assets/job_new.png" alt="plus" />
      <Typography fontSize="14px" fontWeight="500" color={Color.HeaderBgColor}>
        새로운 Job
      </Typography>
    </StyledNewButton>
  );
};

const StyledNewButton = styled(Button)`
  background-color: ${Color.BrandMain};
`;
