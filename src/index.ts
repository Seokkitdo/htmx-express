import { Router, Request, Response } from "express";

// 라우터 인스턴스 생성
const router: Router = Router();

// 루트 경로('/')에 대한 GET 요청 처리
router.get("/dashboard/user", function (req, res, next) {
  res.render("layout", { title: "User Page", body: "dashboard/user" });
});

// 다른 라우트들도 이곳에 추가할 수 있습니다.

export default router;
