import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Color } from "../../theme/color";

export const CustomButton = styled(Button)`
  color: ${Color.AshWhiteText};
  background: ${Color.btnColor};
  width: 90px;
  height: 40px;
  border-radius: 20px;
  font-size: 14px !important;
  font-weight: 500;
  &:focus {
    background: ${Color.BrandMain};
    color: ${Color.activeText};
  }
`;
