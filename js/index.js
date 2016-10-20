// JavaScript Document

//选项卡js内容
var tabLi;
var tabDl;
var tabLi2;
var tabDl2;
var time = null;
var time2 = null;
//滚动的文字内容
var book_list_ul;
//轮播图的内容
var index = 0;//默认从第一张开始隐藏
var imgLis = 0;//获取所有的img中的li
var numLis = 0;//获取所有的num中的li
window.onload = function() {
	tabLi = document.getElementById('book_titleMid').getElementsByTagName('li');
	tabDl = document.getElementById('book_content').getElementsByClassName('book_categroy');
	tabLi[0].className = 'liover';
	
	tabLi2 = document.getElementById('book_rankTab').getElementsByTagName('li');
	tabDl2 = document.getElementById('book_rankContent').getElementsByTagName('dl');
	
	tabLi2[0].className = 'liover2';
	
	//文字滚动
	//获得名字为book_list的盒子
	var book_list = document.getElementById('book_list');
	book_list_ul = book_list.getElementsByTagName('ul')[0];
	
	var lis = book_list_ul.getElementsByTagName('li');//获取总的li
	
	if(null == time) { 
		time = window.setInterval('changeFont()', 50);
	}
	//给每个li添加事件
	for(var i =0; i < lis.length; i++) { 
		lis[i].onmouseover = function() { 
			if(time != null) { 
				window.clearInterval(time);
				time = null;
			}
		}
		lis[i].onmouseout = function() { 
			if(null == time) { 
				time = window.setInterval('changeFont()', 50);//记得用time接收定时器
			}
		}
	}
	
	//轮播图
	numLis = liNums.getElementsByTagName('li');
	imgLis = liImgs.getElementsByTagName('li'); 
	if(null == time2) { 
		time2 = window.setInterval('changeImg()', 2000);
	}
	for(var z = 0; z < numLis.length; z++) { 
		numLis[z].onclick = function(event) {
			if(time2 != null) { 
				window.clearInterval(time2);
				time2 = null;
			}
			for(var j = 0; j < numLis.length; j++) { 
					if(numLis[j] == this) { 
						imgLis[index].style.display = 'none';
						numLis[index].className = '';
						index = j;
						imgLis[index].style.display = 'block';
						numLis[index].className = 'numsOver';
						if(time2 == null) { 
							time2 = window.setInterval('changeImg()', 2000);
					}
				}
			} 
			
		}
	}
	
}
	
function tab(index) { 

	for(var j = 0; j < tabDl.length; j++) { 
		if(j == index) { 
			tabDl[index].style.display = 'block';
			tabLi[index].className = 'liover';
		}else{ 
			tabDl[j].style.display = 'none';
			tabLi[j].className = '';
		}
	}
}

function tab2(index){	
	for(var i = 0; i < tabDl2.length; i++) { 
		if(i == index) { 
			tabDl2[index].style.display = 'block';
			tabLi2[index].className = 'liover2';
		}else{ 
			tabDl2[i].style.display = 'none';
			tabLi2[i].className = '';
		}
	}
}
//鼠标移动出现下拉框
function menusDisplay(){ 
	var menus = document.getElementById('menus');
	menus.style.display = 'block';
}

function menusNone(){ 
	var menus = document.getElementById('menus');
	menus.style.display = 'none';
}
//文字的滚动
function changeFont() { 
	//获取ul的top值
	var ulTop = parseInt(book_list_ul.style.top) ? parseInt(book_list_ul.style.top) : 0;
	//获得第一个li
	var li = book_list_ul.getElementsByTagName('li')[0];
	var liHeight = li.offsetHeight;
	if(parseInt(ulTop) > -liHeight) { 
		book_list_ul.style.top = parseInt(ulTop) - 1 + 'px';
	}else{
		book_list_ul.removeChild(li);
		book_list_ul.appendChild(li);
		book_list_ul.style.top = 0;	
	}
}
function changeImg(){ 
	//获取包裹轮播图的盒子middletopAdverLi
	liImgs = document.getElementById('liImgs');
	liNums = document.getElementById('liNums');
	//获取所有的li
	imgLis = liImgs.getElementsByTagName('li');
	numLis = liNums.getElementsByTagName('li');
	imgLis[index].style.display = 'none';//将第一次的样式置为空
	numLis[index].className = '';
	index++;
	if(index >= imgLis.length) { 
		index = 0;
	}
	imgLis[index].style.display = 'block';
	numLis[index].className = 'numsOver';
}

