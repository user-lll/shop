var one = document.querySelectorAll('.one>div')
var fm = document.querySelectorAll('.fm')
console.log(one, fm)
for (var f = 0; f < fm.length; f++) {
    fm[f].onclick = (function (f) {
        return function () {
            for (var n = 0; n < one.length; n++) {
                if (f == 2) {
                    fm[f].previousElementSibling.innerHTML = '免费注册';
                    fm[f].innerHTML = '手机号登录'
                }
                if (f == 1) {
                    fm[f].previousElementSibling.innerHTML = '免费注册';
                    fm[f].innerHTML = '手机号登录'
                }
                one[n].style.display = "none";
                one[f].style.display = 'block';
            }
        }
    })(f)
}

var ipt = document.querySelectorAll('input');
var arr = [false, false]//登录
var brr = [false, false]//注册
var yz = document.querySelector('.yz')
var str = ''
for (var p = 0; p < ipt.length; p++) {
    ipt[p].onfocus = function () {
        this.value = '';
    }
}
ipt[0].onblur = function () {
    if (!/^\D{3,}$/.test(this.value)) {
        alert("用户名输入错误")
    } else {
        arr.splice(0, 1, true);
    }
}
ipt[1].onblur = function () {
    if (!/^\w{6}$/.test(this.value)) {
        alert('密码输入有误')
    } else {
        arr.splice(1, 1, true);
    }
}
ipt[2].onfocus = function () {

    if (arr.indexOf(false) != -1) {
        alert('请正确填写信息')
        return false;
    } else {
        location.href = 'index.html'
    }
}
ipt[3].onblur = function () {
    if (!/^1[5,6,3,7]\d{9}$/.test(this.value)) {
        alert('请输入合法的手机号')
    } else {
        brr.splice(0, 1, true);
    }
}
yz.onclick = function () {
    for (var h = 0; h < 4; h++) {
        var numb = Math.floor(Math.random() * 10)
        str += numb;
    }
    this.innerHTML = str;
    ipt[4].addEventListener('blur', function () {
        if (this.value != yz.innerHTML || this.value == '') {
            alert('验证码有误')
            return false;
        } else {
            brr.splice(1, 1, true);
        }
    })
}
ipt[4].onblur = function () {
    if (this.value == '') {
        alert('验证码有误')
        return false;
    } else {
        brr.splice(1, 1, true);
    }
}
ipt[5].onclick = function () {
    this.innerHTML = '注册'
    this.style.color = 'white'
    console.log(brr)
    if (brr.indexOf(false) != -1) {
        alert('请确认输入的信息正确')
        return false
    } else {
        location.reload()//刷新
    }
}