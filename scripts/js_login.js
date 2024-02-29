/* Ten: Tran Hieu Nghia
    MSSV: B2003845 */
const username = document.getElementById('username');
const password = document.getElementById('password');
const btnLogin = document.querySelector('.submit_btn');
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    pass: password.value,
    premium: false,
    namePremium: '',
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (localStorage.getItem('user') === json) {
    window.location.href = "index.html";
  } else {
    alert("Bạn đă nhập sai tên đăng nhập hoặc mật khẩu !");
  }  
});
