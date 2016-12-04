/**
 * Created by Administrator on 2016/10/17.
 */
/*首页轮播图图片*/
var img_home = [
    {"iurl":"images/slider/slide1.jpg"},
    {"iurl":"images/slider/slide2.jpg"},
    {"iurl":"images/slider/slide3.jpg"}

];
/*portfolio的12张图片*/
var img_port = [
    {"purl":"1.jpg"},
    {"purl":"2.jpg"},
    {"purl":"3.jpg"},
    {"purl":"4.jpg"},
    {"purl":"5.jpg"},
    {"purl":"6.jpg"},
    {"purl":"7.jpg"},
    {"purl":"8.jpg"},
    {"purl":"9.jpg"},
    {"purl":"10.jpg"},
    {"purl":"11.jpg"},
    {"purl":"12.jpg"}
]
/*TEAM个人资料卡*/
var team_card = [
    {"turl":"member1.jpg","tname":"William Hur","tdev":"Sr. Web Developer","tintro":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"},
    {"turl":"member2.jpg","tname":"Alekjandra Jony","tdev":"Creative Designer","tintro":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"},
    {"turl":"member3.jpg","tname":"Paul Johnson","tdev":"Skilled Programmer","tintro":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"},
    {"turl":"member4.jpg","tname":"John Richerds","tdev":"Marketing Officer","tintro":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"},
]
/*BLOG个人资料卡*/
var blog_card = [
    {"burl":"1.jpg","btitle":"'Lorem ipsum dolor sit amet","bname":"Posted By: John","bdata":"Posted On: Apr 15 2014","bintro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur consectetur eligendi molestias saepe tempora totam ullam veniam!"},
    {"burl":"2.jpg","btitle":"'Lorem ipsum dolor sit amet","bname":"Posted By: John","bdata":"Posted On: Apr 15 2014","bintro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur consectetur eligendi molestias saepe tempora totam ullam veniam!"},
    {"burl":"3.jpg","btitle":"'Lorem ipsum dolor sit amet","bname":"Posted By: John","bdata":"Posted On: Apr 15 2014","bintro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur consectetur eligendi molestias saepe tempora totam ullam veniam!"},
    {"burl":"3.jpg","btitle":"'Lorem ipsum dolor sit amet","bname":"Posted By: John","bdata":"Posted On: Apr 15 2014","bintro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur consectetur eligendi molestias saepe tempora totam ullam veniam!"},
    {"burl":"2.jpg","btitle":"'Lorem ipsum dolor sit amet","bname":"Posted By: John","bdata":"Posted On: Apr 15 2014","bintro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur consectetur eligendi molestias saepe tempora totam ullam veniam!"},
    {"burl":"1.jpg","btitle":"'Lorem ipsum dolor sit amet","bname":"Posted By: John","bdata":"Posted On: Apr 15 2014","bintro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur consectetur eligendi molestias saepe tempora totam ullam veniam!"},
]

//关于我们 标签页
$('.about-tab #tab-ul li').on('click',function(){
    var index = $(this).index();
    $(this).addClass('tab-active').siblings().removeClass('tab-active');
    $('.tab-d').eq(index).addClass('show').siblings().removeClass('show');
});
//首页轮播图
//function task(){
//    for(var i=0;i<3;i++){
//        var liT = 1200*i;
//        $(".img-li").animate({right:liT + 'px'},3000,function(){
//            $(".doro").addClass('hover').siblings().removeClass('hover');
//        });
//    }
//}

function task(){
    for(var i=0;i<6;i++){
        if(i<3){
            var liT = 1200*i;
            $(".img-li").animate({right:liT + 'px'},3000,function(){
                $(".doro").addClass('hover').siblings().removeClass('hover');
            });
        }
    }
}
setInterval(task,-2000);
//点击导航栏，实现页面滚动
$('.header-nav ul li a').click(function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
    return false;
});
//12张图片 标签页点击
$('.port-middle ul li').on('click',function(){
    var index = $(this).index();
    $(this).addClass('b-img-active').siblings().removeClass('b-img-active');
    $('.port-b-img').eq(index).addClass('show').siblings().removeClass('show');
});
//12张图片,四个标签内容
function insertImg0() {
    for(var h=2; h<6 ; h++){
        var imgArr = [];
        var imgId = '#p-b-'+h;
        var f =  parseInt(Math.random()*(10))+1;
        for(var i=0 ; i<f ; i++){
            var r = parseInt(Math.random()*(11))+1;
            imgArr[i]= " <li class='img-ani'>"+"<img src='images/portfolio/" + r +".jpg'/></li>";
        }
        $(imgId).append(imgArr);
    }
};
insertImg0();
