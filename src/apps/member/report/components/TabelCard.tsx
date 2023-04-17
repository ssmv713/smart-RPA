import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { Color } from "../../../../common/theme/color";

const listModels = [
  { title: "시작일시", width: "10%" },
  { title: "종료일시", width: "15%" },
  { title: "상태", width: "10%" },
  { title: "상태", width: "10%" },
  { title: "프로젝트", width: "20%" },
  { title: "프로세스", width: "20%" },
  { title: "봇(그룹)", width: "15%", img: "/assets/bot_group.png" },
];

export const TabelCard = () => {
  return (
    <Card>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography color={Color.WhiteText} fontSize="15px">
          총 0
        </Typography>
        <ExcelBtn disableRipple>
          <img src="assets/download.png" alt="download" />
          <Typography
            letterSpacing="-1"
            fontSize="14px"
            ml="8px"
            color={Color.btnWhiteText}
          >
            {"엑셀 다운로드"}
          </Typography>
        </ExcelBtn>
      </Stack>
      <Lists>
        {listModels.map((it, index) => (
          <List key={index} width={it.width}>
            {it.img && (
              <div>
                <img src={it.img} alt="icons" />
              </div>
            )}
            <Typography fontSize="14px" color="#c0c0c0" letterSpacing="-1">
              {it.title}
            </Typography>
          </List>
        ))}
      </Lists>
      <DataBox>{"조회된 데이터 결과가 존재하지 않습니다."}</DataBox>
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

const ExcelBtn = styled(Button)`
  border-radius: 5px;
  height: 42px;
  padding: 0 10px;
  background: ${Color.btnColor};
  &:hover {
    background: ${Color.btnColor};
  }
`;

const Lists = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 10px;
  background: #3f4c60;
  border-top: solid 1px #5c6371;
  border-bottom: solid 1px #5c6371;
  padding: 0 40px;
`;
type ListType = {
  width: string;
};
const List = styled.li<ListType>`
  width: ${(props) => props.width};
  display: flex;
  gap: 4px;
`;
const DataBox = styled(Stack)`
  height: 100%;
  border-bottom: solid 1px #5c6371;
  color: ${Color.GrayText};
  align-items: center;
  justify-content: center;
`;
