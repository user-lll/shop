var arrow = document.querySelectorAll('.arrow')
var round = document.querySelector('.round')
var ul = document.querySelectorAll('.round li')
var ss = document.querySelectorAll('.round span a')
var g = 0;
arrow[1].onclick = function () {
    g++;
    for (var m = 0; m < ul.length; m++) {
        ul[m].style.transition = '1s';
        ul[m].style.opacity = 0;
		}
        if (g > ul.length - 1) {
            g = 0;
        }
        ul[g].style.opacity = 1;
	     for (var p = 0; p < ss.length; p++) {
            ss[p].style.backgroundColor = '';
            ss[g].style.backgroundColor = '#e9424d';
        }
    
}
arrow[0].onclick = function () {
    g--;
    for (var m = 0; m < ul.length; m++) {
        ul[m].style.opacity = 0;
		}
        if (g < 0) {
            g = ul.length - 1;
        }
        ul[g].style.opacity = 1; 
		
        for (var p = 0; p < ss.length; p++) {
            ss[p].style.backgroundColor = '';
            ss[g].style.backgroundColor = '#e9424d';
        }
   
}
for (var p = 0; p < ss.length; p++) {
    ss[p].setAttribute('index', p)
    ss[p].onmouseover = function () {
        for (var p = 0; p < ss.length; p++) {
            ss[p].style.backgroundColor = '';
            this.style.backgroundColor = '#e9424d';
            for (var m = 0; m < ul.length; m++) {
                ul[m].style.opacity = 0;
                ul[this.getAttribute('index')].style.opacity = 1;
            }
        }
    }
}
var fun = function () {
    arrow[1].onclick();
}
var timer = setInterval(fun, 3000);
round.onmouseover = function () {
    for (var a = 0; a < arrow.length; a++) {
        arrow[a].style.opacity = 1;
    }
    clearInterval(timer)
}
round.onmouseout = function () {
    for (var a = 0; a < arrow.length; a++) {
        arrow[a].style.opacity = 0;
    }
    timer = setInterval(fun, 3000)
}


var lfl = document.querySelectorAll('.main-left li')
var rb = document.querySelectorAll('.right-box');
var main = document.querySelector('.main-right')
for (var f = 0; f < lfl.length; f++) {
    lfl[f].setAttribute('index', f)
    lfl[f].onmouseover = function () {
        this.children[0].style.display = 'none';
        this.children[1].className = '';
        this.style.backgroundColor = 'white';
        this.style.color = '#e9424d';
        main.style.display = 'block'
        for (var b = 0; b < rb.length; b++) {
            rb[b].className = 'none'
            rb[this.getAttribute('index')].className = '';
            main.onmouseover = function () {
                main.style.display = 'block'
            }
            main.onmouseout = function () {
                main.style.display = 'none'
            }
        }
    }
    lfl[f].onmouseout = function () {
        this.children[0].style.display = '';
        this.children[1].className = 'none';
        this.style.backgroundColor = '';
        this.style.color = '';
        main.style.display = 'none';
    }
}

// 小轮播图
var rols = document.querySelectorAll('.round-list ul')
var ta = document.querySelectorAll('.title a')
var zero = 0;
for (var o = 0; o < ta.length; o++) {
    ta[o].setAttribute('index', o)
    ta[o].onmouseover = function () {
        for (var o = 0; o < ta.length; o++) {
            ta[o].style.backgroundColor = ''
            this.style.backgroundColor = '#333333'
        }
        for (var d = 0; d < rols.length; d++) {
            rols[d].className = 'none';
            rols[this.getAttribute('index')].className = '';
        }
    }
}
setInterval(function () {
    zero++;
    if (zero > rols.length - 1) {
        zero = 0;
    }
    for (var i = 0; i < rols.length; i++) {
        rols[i].className = 'none';
        rols[zero].className = '';
       
    } 
	for (var o = 0; o < ta.length; o++) {
            ta[o].style.backgroundColor = ''
            ta[zero].style.backgroundColor = '#333333'
        }
}, 3000)


var pit = document.querySelectorAll('.pictur a')
var f1 = document.querySelectorAll('.pictur i')
var x = true;
for (var u = 0; u < pit.length; u++) {
    pit[u].onmouseover = function () {
        this.firstElementChild.style.opacity = 1;
        for (var r = 0; r < f1.length; r++) {
            f1[r].onclick = function (e) {
                e.preventDefault();
                if (x) {
                    this.style.backgroundPosition = '-60px -325px';
                    x = false
                } else {
                    this.style.backgroundPosition = '';
                    x = true;
                }
            }
        }
    }
    pit[u].onmouseout = function () {
        this.firstElementChild.style.opacity = 0;
    }
}


var lb1 = document.querySelectorAll('.lb1 li')
var lb2 = document.querySelector('.lb2')
var mlb = document.querySelector('.main-lb')
var jt = document.querySelectorAll('.jt')
var r = 0;
jt[1].onclick = function () {
    r++;
    if (r > lb1.length - 1) {
        r = 0;
    }
    for (var q = 0; q < lb1.length; q++) {
        lb1[q].style.transition = '1s'
        lb1[q].style.opacity = 0;
        lb1[r].style.opacity = 1;
    }
    lb2.style.width = (r + 1) * 60 + 'px';
}
jt[0].onclick = function () {
    r--;
    if (r < 0) {
        r = lb1.length - 1;
    }
    for (var q = 0; q < lb1.length; q++) {
        lb1[q].style.opacity = 0;
        lb1[r].style.opacity = 1;
    }
    lb2.style.width = (r + 1) * 60 + 'px';
}
function fun3() {
    jt[1].onclick();
}
var timer3 = setInterval(fun3, 3000)
mlb.onmouseover = function () {
    clearInterval(timer3)
}
mlb.onmouseout = function () {
    timer3 = setInterval(fun3, 3000)
}



var nav2 = document.querySelector('.nav2')
var nav1 = document.querySelector('.nav1')
var flol = document.querySelector('.float-left')
var frol = document.querySelector('.float-right')
var content = document.querySelector('.content')
var contbox = document.querySelectorAll('.content .base-box')
var fla = document.querySelectorAll('.float-left a')
var sppe = 0;
document.body.onscroll = function () {
    for (var i = 0; i < contbox.length; i++) {
        if (getPos(contbox[i]).top <= document.documentElement.scrollTop) {
                for (var c = 0; c < fla.length; c++) {
                    fla[c].style.backgroundColor = '';
                    fla[c].style.color = '';
                    fla[i].style.backgroundColor = '#f6f6f6';
                    fla[i].style.color = 'red';
                }
        }
    }
    if (document.documentElement.scrollTop >= getPos(nav1).top) {
        nav2.style.display = "block"
        nav2.className = 'nav2 fiexd'
    } else {
        nav2.style.display = "none"
    }
    if (document.documentElement.scrollTop >= getPos(content).top) {
        frol.className = 'float-right fiexd-3'
        flol.className = 'float-left fiexd-2'
    } else {
        flol.className = 'float-left float-left1'
        frol.className = 'float-right float-right1'
    }
    for (var y = 0; y < fla.length; y++) {
        fla[y].setAttribute('index', y)
        fla[y].onclick = function (e) {
            e.preventDefault();
            var stop = document.documentElement.scrollTop || document.body.scrollTop
            var cont = this.getAttribute('index');
            var timer4 = setInterval(function () {
                if (stop < getPos(contbox[cont]).top) {
                    if (document.documentElement.scrollTop >= getPos(contbox[cont]).top) {
                        clearInterval(timer4)
                    }
                    sppe += 60;
                } else {
                    if (document.documentElement.scrollTop <= getPos(contbox[cont]).top) {

                        clearInterval(timer4);
                    }
                    sppe -= 60;
                }
                document.documentElement.scrollTop = sppe;
            }, 20)
        }
    }
}

var top2 = document.querySelector('.float-right').lastElementChild;
top2.onclick = function () {
    document.documentElement.scrollTop = 0
}


function getPos(ele) {
    // 保存绝对距离的计数器
    var l = 0;//21+21=42+8
    var t = 0;//21+21=42+8
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