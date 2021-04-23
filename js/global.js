var lis = document.querySelectorAll('.li');
var is = document.querySelectorAll('.li i');
var selects = document.querySelectorAll('.nav-right-sclect')
var as = document.querySelectorAll('.li>a')
for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = (function (i) {
        return function () {
            lis[i].style.backgroundColor = 'white';
            is[i].className = 'i'
            selects[i].style.display = 'block'

        }
    })(i)
    lis[i].onmouseout = (function (i) {
        return function () {
            lis[i].style.backgroundColor = ''
            is[i].className = ''
            selects[i].style.display = 'none'
        }
    })(i)
}
for (var k = 0; k < as.length; k++) {
    as[k].onmouseover = (function (k) {
        return function () {
            is[k].style.borderColor = '#e9424d  transparent  transparent'
        }
    })(k)
    as[k].onmouseout = (function (k) {
        return function () {
            is[k].style.borderColor = ''
        }
    })(k)
}




var ipt = document.querySelectorAll('.input-box input');
for (t = 0; t < ipt.length; t++) {
    ipt[t].onfocus = function () {
        this.value = ''
    }
    ipt[t].onblur = function () {
        this.value = '阿迪达斯'
    }
}


var hover = document.querySelectorAll('.hover'), imgs = document.querySelectorAll('.footer-img');
for (var h = 0; h < hover.length; h++) {
    hover[h].onmouseover = (function (h) {
        return function () {
            imgs[h].style.display = 'block';
        }
    })(h)
    hover[h].onmouseout = (function (h) {
        return function () {
            imgs[h].style.display = 'none';
        }
    })(h)
}



