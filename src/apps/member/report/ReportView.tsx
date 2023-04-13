import { Stack, styled } from "@mui/material";

import { Color } from "../../../common/theme/color";
import { GraphCard, Sidebar, TabelCard } from "./components";

export const ReportView = () => {
  return (
    <Stack direction="row" sx={{ height: "1012px", width: "1920px" }}>
      <Sidebar></Sidebar>
      <Content justifyContent="space-between">
        <GraphCard></GraphCard>
        <TabelCard></TabelCard>
      </Content>
    </Stack>
  );
};

const Content = styled(Stack)`
  background: ${Color.BgColor};
  height: 100%;
  padding: 30px;
  width: 100%;
`;
