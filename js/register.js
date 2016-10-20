// JavaScript Document
//获取email框的焦点
function emailFocus(){ 
	var email = document.getElementById('email');
	email.className = 'register_input_focus';
	var email_prompt = document.getElementById('email_prompt');
	email_prompt.innerHTML = '此邮箱可以用于当当网的登录和接受验证信息';
	email_prompt.className = 'register_prompt';
}
//鼠标失去email焦点
function emailBlur() { 
	var email = document.getElementById('email');
	email.className = 'register_input_blur';
	var email_prompt = document.getElementById('email_prompt');
	
	if(email.value == '') {
		email_prompt.innerHTML = '电子邮件是必填项，请输入您的Email地址';
		email_prompt.className = 'register_prompt_error';
		return false;
	}
		
	var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//验证邮箱
	if(!reg.test(email.value)) { 
		email_prompt.innerHTML = '电子邮箱格式不正确，请正确输入';
		email_prompt.className = 'register_prompt_error';
		return false;
	}else{ 
		email_prompt.className = 'register_prompt_ok';
		email_prompt.innerHTML = '';
		return true;
	}
}

function usernameFocus() {
	var username = document.getElementById('username');
	var username_prompt = document.getElementById('username_prompt');
	username.className = 'register_input_focus';
	username_prompt.innerHTML = '昵称可由大小写英文字母,数字组成，长度为4-20个字符';
	username_prompt.className = 'register_prompt';
}

function usernameBlur() { 
	var username = document.getElementById('username');
	var username_prompt = document.getElementById('username_prompt');
	username.className = 'register_input_blur';
	if(username.value == '') {
		username_prompt.innerHTML = '昵称为必填项,请输入您的昵称'
		username_prompt.className = 'register_prompt_error';
		return false;
	}
	var reg = /^[a-zA-z]\w{3,15}$/;
	if(!reg.test(username.value)) {
		username_prompt.innerHTML = '昵称格式错误，字母、数字、下划线组成，字母开头，4-16个字符';	
		username_prompt.className = 'register_prompt_error';
		return false;
	}else{
		username_prompt.className = 'register_prompt_ok';
		username_prompt.innerHTML = '';
		return true;
	}
}

function passwordFocus() {
	var password = document.getElementById('password');
	var password_prompt = document.getElementById('password_prompt');
	password.className = 'register_input_focus';
	password_prompt.innerHTML = '密码以字母开头，长度在6-18之间，只能包含字符、数字和下划线符';
	password_prompt.className = 'register_prompt';
}

function passwordBlur() { 
	var password = document.getElementById('password');
	var password_prompt = document.getElementById('password_prompt');
	password.className = 'register_input_blur';
	if(password.value == '') {
		password_prompt.innerHTML = '密码为必填项,请输入您的密码'
		password_prompt.className = 'register_prompt_error';
		return false;
	}
	var reg = /^[0-9]\w{3,15}$/;
	if(!reg.test(password.value)) {
		password_prompt.innerHTML = '密码格式错误，长度在6-18之间，只能包含字符、数字和下划线符';	
		password_prompt.className = 'register_prompt_error';
		return false;
	}else{
		password_prompt.className = 'register_prompt_ok';
		password_prompt.innerHTML = '';
		return true;
	}
}

function repasswordFocus() { 
	var repassword = document.getElementById('repassword');
	var repassword_prompt = document.getElementById('repassword_prompt'); 
	repassword.className = 'register_input_focus';
	repassword_prompt.className = 'register_prompt_error';
	repassword_prompt.innerHTML = '请再次输入您的密码';
}

function repasswordBlur() { 
	var repassword = document.getElementById('repassword');
	var password = document.getElementById('password');
	var repassword_prompt = document.getElementById('repassword_prompt');
	repassword.className = 'register_input_blur';
	if(repassword.value == '') {
		repassword_prompt.innerHTML = '请再次输入您的密码';
		repassword_prompt.className = 'register_prompt_error';
		return false;
		
	}
	if(repassword.value != password.value) { 
		repassword_prompt.innerHTML = '两次输入的密码不相同，请重新输入';
		repassword_prompt.className = 'register_prompt_error';
		return false;
	}else{
		repassword_prompt.className = 'register_prompt_ok';
		repassword_prompt.innerHTML = '';
		return true;
	}	
}


function registerSubmit() { 
	var forms = document.forms;
	var email = emailBlur();
	var username = usernameBlur();
	var	password = passwordBlur();
	var repassword = repasswordBlur();
	
	if(email==true && username==true && password==true && repassword==true) {
		//return true;
		forms[0].submit();
	}else{
		//forms[0].submit();
	}
	//return false;
}

var array = new Array();
	array['江西省'] = ['九江市', '南昌市', '抚州市', '鹰潭市'];
	array['广东省'] = ['广州市','深圳市','珠海市','惠州市'];
	array['湖南省'] = ['长沙市','株洲市','湘潭市'];
	array['四川省'] = ['成都市'];
	
window.onload = function(){ 	
	var provine = document.getElementById('provine');
	provine.add(new Option('请选择省','',null));
	for(var i in array) { 
		provine.add(new Option(i,i,null));
	}
	provine.selectedIndex = 1;
	City();
}

function City() { 
	var city = document.getElementById('city');
	city.options.length = 0;
	city.add(new Option('请选择市','',null));
	for(var i in array) {
			
			if(i == document.getElementById('provine').value) {
				for(var j in array[i]) { 
					city.add(new Option(array[i][j], array[i][j], null));
				}	
			}
	}
	

}



