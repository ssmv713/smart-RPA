import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { MemberPage } from "../pages/member";
import { ReportPage } from "../pages/member/report";
import { JobPage } from "../pages/member/job";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // 메인 화면
        path: "",
        element: <MemberPage />,
      },
      {
        // 멤버 목록 화면
        path: "job",
        element: <JobPage />,
      },
      {
        // 멤버 상세 화면
        path: "report",
        element: <ReportPage />,
      },
    ],
  },
]);

export default router;
