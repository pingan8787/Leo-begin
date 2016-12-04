/**
 * Created by Administrator on 2016/10/26.
 */
    //用户登录
var loginName = null;
$('#user_login').click(function(){
    var data = $('#login-form').serialize();
    $.post('js/../data/login.php', data, function(obj){
        if(obj.code===1000){
            alert("登入成功！");
            loginName = $('[name="uname"]').val();
            $('.ari').remove();
            $('.bri').remove();
            var ht = `<p class="dlxx"></p>`;
            $('.menunav0').after(ht);
            $('.dlxx').html('欢迎回来：'+loginName);
        }else{
            alert("账号密码错误,请重新输入！");
        }
    });
});
//用户注册
$('#user_rigest').click(function(){
    var zn = myRigestName.value;
    var zp = myRigestPwd.value;
    $.post('data/regist.php',{zname:zn,zpwd:zp},function(list){
        alert(list.cont);
    })
});
//点击导航栏，实现页面滚动
$('.menunav>a').click(function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
    return false;
});

//接收客户留言
$('#send').click(function(){
    var n = Yname.value;
    var e = Yemail.value;
    var m = Mess.value;
    if(n === '' | e === '' | m === ''){
        alert('提交失败,填写完整后继续提交！')
    }else{
        $.post('data/user_msg.php',{Yname:n,Yemail:e,Mess:m},function(){
        })
        alert('提交成功');
    };
})
