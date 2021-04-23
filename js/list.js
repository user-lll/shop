var frol = document.querySelector('.float-right')
var content = document.querySelector('.content')
var li = document.querySelector('.float-right').lastElementChild;
document.body.onscroll = function () {
    if (document.documentElement.scrollTop >= getPos(content).top) {
        frol.className = 'float-right fiexd-4'
    } else {
        frol.className = 'float-right float-right2'
    }
}

li.onclick = function () {
    document.documentElement.scrollTop = 0;
}

var recent = document.querySelectorAll('.recent')
var pd = document.querySelectorAll('.pd')
var away = document.querySelectorAll('.away')
var choice2 = document.querySelectorAll('.choice2')
var dobe = document.querySelectorAll('.dobe')
var select = document.querySelectorAll('.select')
var flag = true;
for (var r = 0; r < recent.length; r++) {
    recent[r].onclick = (function (r) {
        return function () {
            if (flag) {
                away[r].style.height = '100%'
                choice2[r].style.overflow = 'auto';
                recent[r].innerText = '收起'
                this.nextElementSibling.style.backgroundPosition = '-20px 0'
                flag = false;
            } else {
                away[r].style.height = '50px'
                choice2[r].style.overflow = 'hidden';
                recent[r].innerText = '展开'
                this.nextElementSibling.style.backgroundPosition = ''
                flag = true;
            }
        }
    })(r)
}


//多选
for (var d = 0; d < dobe.length; d++) {
    dobe[d].onclick = function () {
        this.parentElement.parentElement.className = 'none';
        this.parentElement.parentElement.nextElementSibling.className = 'pd pd2 bgwhite fl clearfix gray'
        this.parentElement.parentElement.parentElement.style.height = '100%'
    }
}

var determine = document.querySelectorAll('.determine')//确定
var as = document.querySelectorAll('.as a')
for (var f = 0; f < as.length; f++) {
    as[f].onclick = function (e) {
        e.preventDefault();
        var del = document.createElement('span')
        del.innerText = 'x'
        del.className = 'delete bgRed ft20 white tc pointer'
        this.parentNode.appendChild(del)
        this.parentNode.style.borderColor = 'red';
        var dels = document.querySelectorAll('.delete')
        for (var v = 0; v < dels.length; v++) {
            dels[v].onclick = function () {
                this.parentNode.style.borderColor = '';
                this.parentNode.removeChild(this);
            }
        }
    }
}



// 取消
var cancel = document.querySelectorAll('.cancel');
for (var e = 0; e < cancel.length; e++) {
    cancel[e].onclick = function () {
        this.parentElement.parentElement.className = 'none';
        this.parentElement.parentElement.previousElementSibling.className = 'pd pd2 bgwhite fl clearfix gray'
        this.parentElement.parentElement.parentElement.style.height = '50px'
    }
}




var lfl = document.querySelectorAll('.main-left li')//左侧每一个分类
var rb = document.querySelectorAll('.right-box');//右侧的内容
var main = document.querySelector('.main-right')//右侧盒子
var navt = document.querySelector('.nav-title')//所有分类
var mainl = document.querySelector('.main-left')//左侧栏
navt.onmouseover = function () {
    mainl.style.transition = '0.5s'
    mainl.style.transform = 'translateY(497px)'
    mainl.style.opacity = 1;
    mainl.onmouseover = function () {
        for (var f = 0; f < lfl.length; f++) {
            lfl[f].setAttribute('index', f)
            lfl[f].onmouseover = function () {
                this.children[0].style.display = 'none';
                this.children[1].className = '';
                this.style.backgroundColor = 'white';
                this.style.color = '#e9424d';
                main.style.display = 'block'
                mainl.style.transform = 'translateY(497px)'
                mainl.style.opacity = 1;
                for (var b = 0; b < rb.length; b++) {
                    rb[b].className = 'none'
                    rb[this.getAttribute('index')].className = '';
                    main.onmouseover = function () {
                        main.style.display = 'block'
                        mainl.style.transform = 'translateY(497px)'
                        mainl.style.opacity = 1;
                    }
                    main.onmouseout = function () {
                        main.style.display = 'none'
                        mainl.style.transform = 'translateY(-497px)'
                        mainl.style.opacity = 0;
                    }
                }
            }
            lfl[f].onmouseout = function () {
                this.children[0].style.display = '';
                this.children[1].className = 'none';
                this.style.backgroundColor = '';
                this.style.color = '';
                main.style.display = 'none';
                mainl.style.transform = 'translateY(-497px)'
                mainl.style.opacity = 0;
            }
        }
    }
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

