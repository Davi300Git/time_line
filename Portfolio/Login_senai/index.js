var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
btnLogin.onclick = function(){
  idLogin.innerHTML = '<p>Estamos felizes em vê-lo novamente </p><h1>' +username.value+ '</h1>';
}
