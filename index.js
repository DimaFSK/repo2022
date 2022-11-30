function showRegistrationForm() {
	login_wrapper.hidden = true;
	registration_wrapper.hidden = false;
}

function showLoginPage(){
	login_wrapper.hidden = false;
	registration_wrapper.hidden = true;
}

log_in.addEventListener("click", logIn);
log_in_on_registration_page.addEventListener("click", showLoginPage)
registration.addEventListener("click", register);
registration_on_log_in_page.addEventListener("click", showRegistrationForm);

function logIn() {
	var emailFromLoginForm = document.getElementById("email").value.toString();
	var passwordFromLoginForm = document.getElementById("password").value.toString();

	var serialUsers = localStorage.getItem('serialUsers');
	var users = JSON.parse(serialUsers);
	var user = {};

	for (var i=0; i<users.length; i++){
		if (users[i].email === emailFromLoginForm){
			user = users[i];
			break
		}
	}
	if (user.email !== emailFromLoginForm){
		alert("No such user registered");
	} else if (user.password !== passwordFromLoginForm){
		alert("Invalid password")
	} else {
		login_wrapper.hidden = true;
		container.hidden = false;
	}
}

function register() {
	var email = document.getElementById("email_registration").value.toString();
	var realName = document.getElementById("realname_registration").value.toString();
	var userName = document.getElementById("username_registration").value.toString();
	var password = document.getElementById("password_registration").value.toString();

	var newUser = {
		email: email,
		name: realName,
		userName: userName,
		password: password,
	};

	if (localStorage.getItem('serialUsers') == null) {
		var serialUsers = new Array();
		var users = new Array();
	} else{
		var serialUsers = localStorage.getItem("serialUsers");
		var users = JSON.parse(serialUsers);
	}

	users.push(newUser);
	serialUsers = JSON.stringify(users);

	localStorage.setItem("serialUsers", serialUsers);
}