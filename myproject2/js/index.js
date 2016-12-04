/**
 * Created by Administrator on 2016/11/21.
 */
//listing轮播图启动
$(document).ready(function() {
    $("#list-owl").owlCarousel({
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });
});

//标签页切换启动
$(function(){
    $('#Container').mixItUp();
});

//点击导航栏，实现页面滚动
$('#menu a').click(function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 51}, 1000);
    return false;
});
//接收客户留言
$('.cont-btn').click(function(){
    var n = Yname.value;
    var p = Yphone.value;
    var d = Ydate.value;
    if(n === '' | p === '' | d === ''){
        alert('提交失败,填写完整后继续提交！')
    }else{
        $.post('data/msg.php',{Yname:n,Yphone:p,Ydate:d},function(){
        })
        alert('提交成功');
    };
})
