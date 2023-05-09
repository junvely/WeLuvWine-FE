const checkingLogin = () => {
  const token = sessionStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const notLoginRouting = (navigate) => {
  if (!checkingLogin) {
    console.log(checkingLogin);
    alert("로그인 시 이용 가능한 페이지 입니다.");
    navigate("/account/login");
  } else {
    return;
  }
};

const logout = () => {
  if (checkingLogin) {
    sessionStorage.removeItem("token");
    alert("로그아웃 되었습니다");
  }
};

export { checkingLogin, notLoginRouting, logout };