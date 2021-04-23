window.onload = function() {
	var sp = document.querySelector('.img-span')
	var limg = document.querySelector('.img-left')
	var rimg = document.querySelector('.img-right')
	var img2 = document.querySelector('.img-right img')
	var simg = document.querySelectorAll('.simg img')
	var img1 = document.querySelector('.img-left img')
	var l0 = limg.clientWidth - sp.offsetWidth,
		t0 = limg.clientHeight - sp.offsetHeight;
	var l2 = img2.clientWidth - rimg.offsetWidth,
		t2 = img2.clientHeight - rimg.offsetHeight;
	limg.onmousemove = function(e) {
		sp.style.visibility = "visible";
		rimg.style.visibility = "visible";
		var l = e.pageX - getPos(limg).left - (sp.offsetWidth) / 2,
			t = e.pageY - getPos(limg).top - (sp.offsetHeight) / 2;
		var bl = l2 / l0,
			bt = t2 / t0;
		if (l <= 0) {
			l = 0
		}
		if (l >= l0) {
			l = l0
		}
		if (t <= 0) {
			t = 0
		}
		if (t >= t0) {
			t = t0;
		}
		sp.style.left = l + 'px';
		sp.style.top = t + 'px';
		img2.style.left = -l * bl + 'px';
		img2.style.top = -t * bt + 'px'
	}
	limg.onmouseout = function() {
		sp.style.visibility = "hidden";
		rimg.style.visibility = "hidden";
	}
	for (var sm = 0; sm < simg.length; sm++) {
		simg[sm].onmousemove = (function(sm) {
			return function() {
				for (var m2 = 0; m2 < simg.length; m2++) {
					simg[m2].style.borderColor = ''
					simg[sm].style.borderColor = 'red';
				}
				img1.src = simg[sm].getAttribute('src2')
				img2.src = simg[sm].getAttribute('src2')
			}
		})(sm)
	}
}

// 增加/递减
var numa = document.querySelectorAll('.numb a')
var ipt = document.querySelector('.numb input')
var a1 = ipt.value;
numa[0].onclick = function() {
	if (a1 < 0) {
		a1 = 0;
		this.style.backgroundColor = 'lightgray'
		return false;
	}
	ipt.value = a1--;
}
numa[1].onclick = function() {
	console.log(a1)
	ipt.value = a1++;
	if (a1 > 0) {
		numa[0].style.backgroundColor = ''
	}
}

var tselect = document.querySelectorAll('.tselect-a')
var tselist = document.querySelectorAll('.tselect-list')
for (var s = 0; s < tselect.length; s++) {
	tselect[s].onmouseover = function() {
		this.style.backgroundColor = 'white'
		this.firstElementChild.style.backgroundPosition = '-20px 0'
		this.children[1].style.display = 'block';
	}
	tselect[s].onmouseout = function() {
		this.style.backgroundColor = ''
		this.firstElementChild.style.backgroundPosition = ''
		this.children[1].style.display = 'none';
	}
}

// 选地址
var conscl = document.querySelector('.content-sclect')
var csp = conscl.querySelectorAll('span')
var delet = document.querySelector('.adress-tltle a')
var adress = document.querySelector('.adress')
var adrsp = document.querySelectorAll('.adress-tltle span')
var adra = document.querySelectorAll('.adress-a')
// var str = ''
var adr = true
conscl.onclick = function() {
	if (adr) {
		adress.style.display = 'block'
		this.style.backgroundColor = 'white'
		adr = false;
		for (var sp = 0; sp < adrsp.length; sp++) {
			adrsp[sp].onmouseover = (function(sp) {
				return function() {
					for (var aa = 0; aa < adra.length; aa++) {
						adra[aa].style.display = 'none'
						adra[sp].style.display = 'block'
						var ada = adra[sp].children;
						for (var a = 0; a < ada.length; a++) {
							ada[a].onclick = (function(a) {
								return function() {
									for (var w = 0; w < csp.length; w++) {
										csp[sp].innerHTML = ada[a].innerHTML;
									}
								}
							})(a)
						}
					}
				}
			})(sp)
		}
	} else {
		adress.style.display = 'none';
		this.style.backgroundColor = ''
		adr = true;
	}
}
delet.onclick = function() {
	adress.style.display = 'none';
	conscl.style.backgroundColor = ''
	adr = true;
}

// 图片
var detaimg = document.querySelector('.deta-list'),
	left = 0;
var debox = document.querySelector('.deta-box')

function fun2() {
	left += 1;
	if (left >= detaimg.offsetWidth / 2) {
		left = 0;
	}
	detaimg.style.left = -left + 'px'
}
var times = setInterval(fun2, 50)
debox.onmouseover = function() {
	clearInterval(times)
}
debox.onmouseout = function() {
	times = setInterval(fun2, 50)
}


//图片二
var dea= document.querySelector('.deta-box2 a')
var deta = document.querySelector('.deta-imgs')
var deimgs = document.querySelectorAll('.deta-imgs img') //图片列表
var detdiv = document.querySelectorAll('.deta-write') //内容
 
dea.onmouseover = function() {
	for (var d = 0; d < detdiv.length; d++) {
		detdiv[d].style.display='none'
	}
	 deta.style.display = 'block';
	 
}

for (var im = 0; im < deimgs.length; im++) {
	deimgs[im].setAttribute('index', im)
	deimgs[im].onclick = function() {
		deta.style.display = 'none';
		for (var d = 0; d < detdiv.length; d++) {
			detdiv[d].style.display = 'none';
			detdiv[this.getAttribute('index')].style.display = 'block'
		}
	}
}


var div = document.querySelector('.div')
var shade = document.querySelector('.buy-img-shade')
div.onmouseover = function() {
	shade.className = 'buy-img-shade shade'
}
div.onmouseout = function() {
	shade.className = 'buy-img-shade'
}


function getPos(ele) {
	// 保存绝对距离的计数器
	var l = 0; //21+21=42+8
	var t = 0; //21+21=42+8
	// 可以通过while循环来迭代分阶段求
	// 假设该元素的定位父级还在，则循环成立，直到null
	while (ele.offsetParent) {
		// 该元素到定位父级的距离+定位父级的边框
		l += ele.offsetLeft + ele.offsetParent.clientLeft;
		t += ele.offsetTop + ele.offsetParent.clientTop;
		// 将元素迭代变成元素的定位父级，再求下一段
		ele = ele.offsetParent;
	}
	// 将求得的结果返回出去
	return {
		left: l,
		top: t
	}
}
