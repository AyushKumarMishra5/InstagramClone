function ayush() {
    var username = document.getElementById('Name').value;
    var password = document.getElementById('Password').value;
    if (username == '_ayushmishra2280' && password == '12345') {
      alert('Welcome to your account');
      window.open(
        'Home Page.html'
      );
      document.getElementById("Name").value=" ";
      document.getElementById("Password").value=" ";
      return false;
      }
      else {
      alert('Login failed best luck next time');
    }
  }