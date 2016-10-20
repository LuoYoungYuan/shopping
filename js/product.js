// JavaScript Document
var titles;
var product_main_Bookimg;
window.onload = function() { 
	product_main_Bookimg = document.getElementById('product_main_Bookimg');
	product_main_Bookimg.getElementsByTagName('a')[0].onmouseover = function(e) { 
		var evt = e ? e : event;
		//为titles赋值
		titles = this.title;
		this.title = '';
		//先创建一个div product_main_Bookimg2
		var product_main_Bookimg2 = document.createElement('div');
		product_main_Bookimg2.id = 'product_main_Bookimg2';
		//创建一个图片
		var Bookimg2 = document.createElement('img');
		Bookimg2.src = this.href;
		//创建文字
		var img_p = document.createElement('p');
		img_p.innerHTML = titles;
		//将img 和 p div添加
		product_main_Bookimg2.appendChild(Bookimg2);
		product_main_Bookimg2.appendChild(img_p);
		document.body.appendChild(product_main_Bookimg2);
		
		product_main_Bookimg2.style.left = evt.pageX + 10 + 'px';
		product_main_Bookimg2.style.top = evt.pageY + 10 + 'px';
	}
	product_main_Bookimg.getElementsByTagName('a')[0].onmousemove = function(e) {
		var evt = e ? e : event; 
		var product_main_Bookimg2 = document.getElementById('product_main_Bookimg2');
		product_main_Bookimg2.getElementsByTagName('img')[0].style.height = 180 + 'px';
		product_main_Bookimg2.style.left = evt.pageX + 10 + 'px';
		product_main_Bookimg2.style.top = evt.pageY + 10 + 'px';
	}
	product_main_Bookimg.getElementsByTagName('a')[0].onmouseout = function() {
		var product_main_Bookimg2 = document.getElementById('product_main_Bookimg2');
		this.title = titles;
		product_main_Bookimg2.style.display = 'none';
		document.body.removeChild(product_main_Bookimg2);
	}
}