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
  res.render("layout");
});

let users = [
  {
    id: 1,
    name: "홍길동",
    age: 20,
    role: "admin",
  },
  {
    id: 2,
    name: "홍길동",
    age: 20,
    role: "admin",
  },
  {
    id: 3,
    name: "홍길동",
    age: 20,
    role: "admin",
  },
  {
    id: 4,
    name: "홍길동",
    age: 20,
    role: "admin",
  },
  {
    id: 5,
    name: "홍길동",
    age: 20,
    role: "admin",
  },
];

app.get("/dashboard/user", function (req: Request, res: Response) {
  res.render("dashboard/user", { users: users });
});

app.delete("/dashboard/user/:userId", function (req, res) {
  const userId = req.params.userId;

  const filteredUsers = users.filter((user) => user.id !== Number(userId));

  res.status(200).send();
  // res.render("dashboard/user", { users: filteredUsers });
});

app.get("/dashboard/user/edit/:userId", function (req, res) {
  const userId = req.params.userId;

  // const { name, age } = req.body; // express.urlencoded() 미들웨어 설정 필요

  // users = users.map((user) => {
  //   if (user.id === Number(userId)) {
  //     return { ...user, name, age };
  //   }
  //   return user;
  // });

  const user = users.find((u) => u.id === Number(userId));

  res.render("partials/userEditRow", { user });
});

app.put(
  "/dashboard/user/update/:userId",
  function (req: Request, res: Response) {
    const userId = req.params.userId; // URL에서 사용자 ID를 가져옵니다.

    console.log("body", req.body);
    // const { name, age, role } = req.body; // form 데이터에서 이름, 나이, 역할을 가져옵니다.

    // console.log(userId, name, age, role);
    // users = users.map((user) => {
    //   if (user.id === Number(userId)) {
    //     return { ...user, name, age, role }; // 역할(role)도 업데이트합니다.
    //   }
    //   return user;
    // });

    // 업데이트된 사용자를 찾습니다.
    const updatedUser = users.find((user) => user.id === Number(userId));

    // 업데이트된 사용자의 행만 렌더링하여 응답합니다.
    res.render("partials/userRow", { user: updatedUser });
  }
);

app.get("/dashboard/notification", function (req: Request, res: Response) {
  res.render("dashboard/notification");
});

app.get("/dashboard/device", function (req: Request, res: Response) {
  res.render("dashboard/device");
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
