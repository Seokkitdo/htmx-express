import express from "express";
import { Request, Response } from "express";

const app = express();
const port = 3000;

// 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("view cache", false);

// 정적 파일 제공을 위한 설정
app.use(express.static("public"));

// '/dashboard/user' 경로에 대한 GET 요청 처리
app.get("/", function (req: Request, res: Response) {
  console.log("test");
  res.render("layout");
});

app.get("/dashboard/user", function (req: Request, res: Response) {
  console.log("test");
  const users = [
    {
      name: "홍길동",
      age: 20,
      role: "admin",
    },
  ];
  res.render("dashboard/user", { users: users });
});

app.get("/dashboard/notification", function (req: Request, res: Response) {
  console.log("test");
  res.render("dashboard/notification");
});

app.get("/dashboard/device", function (req: Request, res: Response) {
  console.log("test");
  res.render("dashboard/device");
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
