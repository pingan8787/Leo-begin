/**
 * Created by Administrator on 2016/10/7.
 */
//登录框
$('.login').on('click',function(e){
    e.preventDefault();
    $('.denglu').fadeToggle();
});
$('.close-gb').on('click',function(){
    $('.denglu').fadeOut();
});
var loginName = null;
$('#submit').click(function(){
    var data = $('#login-form').serialize();
    $.post('js/../data/msg.php', data, function(obj){
        if(obj.code===1000){
            $('.denglu').fadeOut();
            loginName = $('[name="uname"]').val();
            $('.login').html('');
            $('.login-ms').html('欢迎回来：'+loginName);
            $('.login-mm').html('  退出');
        }else{
            alert("账号密码错误,请重新输入！");
            $('.text-name').val('');
            $('.text-pwd').val('');
            $('.denglu').fadeOut(1000);
        }
    });
});

//注册页
$('.regist').click(function(){
    $('.denglu').fadeOut();
    $('.zhuce').fadeIn();
})
$('.close-gb').on('click',function(){
    $('.zhuce').fadeOut();
    $('.text-name').val('');
    $('.text-pwd').val('');
    $('.regist-n').html('');
    $('.regist-p').html('');
});
//用户注册
$('.regist0').click(function(){
    var zn = zname.value;
    var zp = zpwd.value;
    $.post('data/regist.php',{zname:zn,zpwd:zp},function(list){
        $('.regist-n').html(list.msg);
        $('.regist-p').html(list.cont);
    })
})


//从服务器导入首页轮播图的图片数据
function homeImg(){
     var html = '';
        $.each(img_home,function(i){
            html += `
            "<li class='img-li'><img src='${img_home[i].iurl}'></li>"
        `;
        })
        $('.home-i-ul').html(html);
}
homeImg();
//从服务器导入介绍的12张图片数据
function introImg(){
        var html = '';
        $.each(img_port,function(i){
            html += `
            <li class='img-ani'><img src="images/portfolio/${img_port[i].purl}"></li>
        `;
        })
        $('#p-b-1').html(html);
}
introImg();

//从服务器导入 TEAM个人资料卡
function teamCard(){
        var html = '';
        $.each(team_card,function(i){
            html += `
                <li class="team-li">
                    <div>
                        <img src="images/our-team/${team_card[i].turl}" alt=""/>
                    </div>
                    <h2>${team_card[i].tname}</h2>
                    <h3>${team_card[i].tdev}</h3>
                    <p>${team_card[i].tintro}</p>
                    <a href="#">CALL</a>
                </li>
        `;
        })
        $('#team-c').html(html);
}
teamCard();

//从服务器导入 BLOG个人资料卡
function blogCard(){
        var html = '';
        $.each(blog_card,function(i,p){
            html += `
                <li>
                    <div class="blog-card">
                        <img src="images/blog/${blog_card[i].burl}"/>
                        <h3>${blog_card[i].btitle}</h3>
                        <ul>
                            <li>${blog_card[i].bname}</li>
                            <li>${blog_card[i].bdata}</li>
                        </ul>
                        <p>${blog_card[i].bintro}</p>
                        <div class="readmore">
                            <a href="#">READ MORE!</a>
                        </div>
                    </div>
                </li>
            `;
        })
        $('#blog-c').html(html);
}
blogCard();

//接收客户留言
$('#send').click(function(){
    var n = Yname.value;
    var e = Yemail.value;
    var m = Mess.value;
    if(n === '' | e === '' | m === ''){
        alert('提交失败,填写完整后继续提交！')
    }else{
        $.post('data/user-msg.php',{Yname:n,Yemail:e,Mess:m},function(){
        })
        alert('提交成功');
    };
})