import styled from "@emotion/styled";
import { Stack, Typography, Switch } from "@mui/material";
import { CustomButton } from "../../../common/components/buttons/CustomButton";
import { CustomSearchBar } from "../../../common/components/searchBar/SearchBar";
import { SelectBox } from "../../../common/components/SelectBox.tsx/SelectBox";
import { Color } from "../../../common/theme/color";
import { CardModels } from "./model/CardModels";
import { JobCard, NewJobButton, StopButton } from "./components";

export const JobView = () => {
  return (
    <Root>
      <Content>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" gap="6px">
            <CustomButton disableRipple>{"전체 5"}</CustomButton>
            <CustomButton disableRipple>{"가동중 1"}</CustomButton>
            <CustomButton disableRipple>{"비가동중 0"}</CustomButton>
          </Stack>
          <Stack direction="row" gap="8px">
            <SelectBox />
            <CustomSearchBar
              customWidth="362px"
              bgColor={Color.HeaderBgColor}
            />
          </Stack>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          mt="26px"
        >
          <GreyPlus src="/assets/job_new_grey.png" alt="plus" />

          <Trash src="/assets/trash_grey.png" alt="plus" />
          <Typography color={Color.BrandMain} fontSize="14px">
            {"1 - 1 / 1"}
          </Typography>
        </Stack>
        <CardsWrap>
          <EmptyCard></EmptyCard>
          {CardModels.map((it, index) => (
            <JobCard key={index} date={it.date} />
          ))}
        </CardsWrap>
      </Content>
      <JobQue
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row">
          <img src="/assets/job_queue.png" alt="rocket" />
          <Typography fontSize="14px" color={Color.WhiteText} mx="10px">
            Job queue
          </Typography>
          <Typography fontSize="14px" color={Color.BrandMain}>
            0
          </Typography>
        </Stack>
        <Stack direction="row">
          <StopButton></StopButton>
          <NewJobButton></NewJobButton>
        </Stack>
      </JobQue>
    </Root>
  );
};

const Root = styled.div`
  width: 1920px;
  height: 1012px;
`;

const Content = styled(Stack)`
  background: ${Color.BgColor};
  padding: 26px 20px;
`;

const GreyPlus = styled.img`
  width: 14px;
  height: 14px;
`;

const Trash = styled.img`
  width: 14px;
  height: 16px;
  margin-left: 12px;
  margin-right: 16px;
`;
const CardsWrap = styled.div`
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 12px;
  justify-items: center;
  margin-top: 4px;
`;

const Card = styled.div`
  width: 360px;
  height: 214px;
  border-radius: 12px;
  background: ${Color.cardBgColor};
`;

const EmptyCard = styled(Card)`
  display: flex;
`;

const JobQue = styled(Stack)`
  background: ${Color.HeaderBgColor};
  height: 60px;
  padding: 0 20px;
`;
