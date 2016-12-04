/**
 * Created by Administrator on 2016/10/12.
 */
/***  1 异步加载页头和页尾 ****/
//$('#nav-header').load('tpl/header.php');
//$('#nav-footer').load('tpl/footer.php');

/***  2  不同页面标题显示 ***/
//*touchstart*//
/***  3  跳转页面 ***/
//$('#foot-ul li').on('click',function(){
//    var index = $(this).index();
//    console.log(index)
//    $('#foot-ul li p').addClass('foot-bar-active').siblings().removeClass('foot-bar-active');
//});

	/***  PC点击事件 ***/
//点击消息 进入 联系页面
$(document.body).on('click','#relation',function(){
    location.href="relation.html";
});
//点击通讯 进入 项目展示页面
$(document.body).on('click','#project',function(){
    location.href="project.html";
});
//点击发现 进入 个人风采页面
$(document.body).on('click','#mein',function(){
    location.href="mein.html";
});
//点击我 进入 我页面
$(document.body).on('click','#center',function(){
    location.href="index.html";
});
//跳转进入 个人介绍
$(document.body).on('click','#me-detail',function(e){
    e.preventDefault();
    location.href="tpl/p1.html";
});
//点击返回 我
$(document.body).on('click','#btn-return-1',function(){
    location.href="../index.html";
});
//点击个人介绍页二维码 进入 二维码页面
$(document.body).on('click','.ewm',function(){
    location.href="p1-img.html";
});
//点击返回 个人介绍
$(document.body).on('click','#btn-return-2',function(){
    location.href="p1.html";
});
//我  点击 校园经历 进入校园经历
$(document.body).on('click','#b-xyjl',function(){
    location.href="tpl/c-xyjl.html";
});
//我  点击 工作经历 进入校园经历
$(document.body).on('click','#b-gzjl',function(){
    location.href="tpl/c-gzjl.html";
});
//我  点击 获奖情况 进入获奖情况
$(document.body).on('click','#b-hjqk',function(){
    location.href="tpl/c-hjqk.html";
});
//我  点击 技能情况 进入技能情况
$(document.body).on('click','#b-jnqk',function(){
    location.href="tpl/c-jnqk.html";
});
//点击联系我 进入 二维码页面
$(document.body).on('click','#b-lxw',function(){
    location.href="tpl/p1-img.html";
});

  /**  手机点击事件  **/

//点击消息 进入 联系页面
$(document.body).on('touchend','#relation',function(){
    location.href="relation.html";
});
//点击通讯 进入 项目展示页面
$(document.body).on('touchend','#project',function(){
    location.href="project.html";
});
//点击发现 进入 个人风采页面
$(document.body).on('touchend','#mein',function(){
    location.href="mein.html";
});
//点击我 进入 我页面
$(document.body).on('touchend','#center',function(){
    location.href="index.html";
});
//跳转进入 个人介绍
$(document.body).on('touchend','#me-detail',function(e){
    e.preventDefault();
    location.href="tpl/p1.html";
});
//点击返回 我
$(document.body).on('touchend','#btn-return-1',function(){
    location.href="../index.html";
});
//点击个人介绍页二维码 进入 二维码页面
$(document.body).on('touchend','.ewm',function(){
    location.href="p1-img.html";
});
//点击返回 个人介绍
$(document.body).on('touchend','#btn-return-2',function(){
    location.href="p1.html";
});
//我  点击 校园经历 进入校园经历
$(document.body).on('touchend','#b-xyjl',function(){
    location.href="tpl/c-xyjl.html";
});
//我  点击 工作经历 进入校园经历
$(document.body).on('touchend','#b-gzjl',function(){
    location.href="tpl/c-gzjl.html";
});
//我  点击 获奖情况 进入获奖情况
$(document.body).on('touchend','#b-hjqk',function(){
    location.href="tpl/c-hjqk.html";
});
//我  点击 技能情况 进入技能情况
$(document.body).on('touchend','#b-jnqk',function(){
    location.href="tpl/c-jnqk.html";
});
//点击联系我 进入 二维码页面
$(document.body).on('touchend','#b-lxw',function(){
    location.href="tpl/p1-img.html";
});


/** mein 轮播图 **/
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    autoplay:2000
});

//留言
$('#msubmit').click(function(){
    var mn = mname.value;
    var mr = mrela.value;
    var mm = mmsg.value;
    if(mn === '' | mr === '' | mm === ''){
        alert('提交失败,填写完整后继续提交！')
    }else{
        $.post('data/index.php',{mname:mn,mrela:mr,mmsg:mm},function(){
        })
        alert('提交成功');
    };
})

var time=function(T){
    return new Date(parseInt(T)).toLocaleString();
}
    $.getJSON('data/rela.php',function(list) {
        var html = '';
        $.each(list, function (i, q) {
            html += `
                <div class="mein-div weui_cell weui-row">
                    <div class="mein-img weui_cell_hd weui-col-30">
                        <img src="images/icon/a3u.png" alt=""/>
                    </div>
                    <div class="mein-main weui_cell_bd weui_cell_primary weui-col-70">
                        <h4><a href="#"><b>${list[i].mname}</b></a></h4>
                        <h5>${list[i].mrela}</h5>
                        <h6>${list[i].mmsg}</h6>
                        <div>
                            <h6>${time(list[i].mtime)}</h6>
                        </div>
                    </div>
                </div>
            `;
        });
        $('.messageAll').html(html);
    });
$("#msubmit").on("click",function(){
    $.getJSON('data/rela.php',function(list) {
        var html = '';
        $.each(list, function (i, q) {
            html += `
                <div class="mein-div weui_cell weui-row">
                    <div class="mein-img weui_cell_hd weui-col-30">
                        <img src="images/icon/a3u.png" alt=""/>
                  </div>
                    <div class="mein-main weui_cell_bd weui_cell_primary weui-col-70">
                        <h4><a href="#"><b>${list[i].mname}</b></a></h4>
                      <h5>${list[i].mrela}</h5>
                      <h6>${list[i].mmsg}</h6>
                      <div>
                          <h6>${time(list[i].mtime)}</h6>
                      </div>
                  </div>
              </div>
            `;
      });
      $('.messageAll').html(html);
    });
});