// JavaScript Document
//获取鼠标焦点失去鼠标焦点
function userFocus() { 
	var username = document.getElementById('username');
	username.className = 'login_input_focus';
}
function userBlur() { 
	var username = document.getElementById('username');
	username.className = 'login_input';
}

function passwordFocus() { 
	var password = document.getElementById('password');
	password.className = 'login_input_focus';
}
function passwordBlur() { 
	var password = document.getElementById('password');
	password.className = 'login_input';
}
//表单验证
function loginSubmit() { 
	var username = document.getElementById('username'); 
	var password = document.getElementById('password');
	var usernameDefault = 'luoyuan';
	var passwordDefault = '123123';
	var forms = document.forms;
	var check = true;
	if(username.value == ''){ 
		alert('请输入用户名或邮箱');
		check = false;
	}
	if(password.value == ''){
		alert('请输入密码'); 
		check = false;
	}
	if(username.value != usernameDefault || password.value != passwordDefault) { 
		alert("密码不正确或用户名有误，请重新输入");
		check = false;
	}
	if(check == true){ 
		forms[0].submit();
	}
}