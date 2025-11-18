/**
 * 로그인 과정에서는 통상적인 router -> controller -> service -> controller 대신 router -> middleware(service) -> controller로 진행
 * 구글과 통신하는 복잡한 로직을 라이브러리 모듈로 단순화
*/
const googleCallback = (req, res) => {
  const user = req.user;
  // 정상 로그인 시 구글 로그인 페이지에서 다음 페이지로 리디렉션
  if (user.roomId) {
    // 방이 있을 경우 바로 메인 페이지로 이동
    res.redirect('메인 페이지 url 수정해서 사용하세요');
  } else {
    // 방이 없을 경우 프로필 설정부터 하도록 이동
    res.redirect('프로필 수정 페이지 url 수정해서 사용하세요');
  }
};

module.exports = {
  googleCallback,
};