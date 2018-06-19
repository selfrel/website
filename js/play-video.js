
$(function(){

    var $div='<video id="isVideo" controls="controls" autoplay="autoplay" muted="true">'
        $div+='<source src="video/padaut-bee.mp4">';
        $div+='</video>';
        $div+='<div class="au-text">'
        $div+='<h1>蔚来电动超跑互动短片</h1>';
        $div+='<label>发布时间：2016-10-14　　/　　服务客户：蔚来汽车</label>';
        $div+='<p style="margin:0;">2016年10月14日，蔚来汽车以一款刷新了德国纽博格林北环赛道最快圈速记录的电动超跑棗EP9惊叹了世界，成为了全球最快的超级电动跑车。</p>';
        $div+='<p style="margin:0;">BITONE很荣幸地成为该款传奇跑车在新车发布会互动短片的指定内容制作供应商。</p>';
        $div+='<p style="margin:0;">整体风格方面，短片通过全部模拟棚拍效果，充分展现出EP9的速度魅力。互动内容中，用户可通过用鼠标拖动的方式逐一了解EP9的产品魅力、核心技术及动力性能。</p>';
        $div+='<p style="margin:0;">在EP9新车发布会官网上线时，BITONE获得蔚来汽车客户的高度赞赏，原计划仅在官网上使用的短片，最终在发布会现场也被客户力荐做了演示。</p>';
        $div+='<p class="img-box"><img src="img/v1.jpg" title="" alt="2.jpg"><img src="img/v2.jpg" title="" alt="3.jpg"><img src="img/v3.jpg" title="" alt="4.jpg"><img src="img/v4.jpg" title="" alt="5.jpg"><img src="img/v5.jpg" title="" alt="6.jpg"><img src="img/v6.jpg" title="" alt="7.jpg"></p>';
        $div+='</div>'
    $("#movie").on('click',function(){
        $(".autoVideo").append($div)
        .css('display','block')
        .on('click',function(e){
            e = e || window.event;
            var target =  e.srcElement|| e.target;
            while(target){
                if(target.id&&target.id=='isVideo'){
                    return;
                }
                target=target.parentNode;
            }
            $(".autoVideo").children().remove();
            $(".autoVideo").scrollTop(0); 
            $(".autoVideo").css({
                'display':'none'
            });
           
        })
    })

    $("#movie1").on('click',function(){
        $(".autoVideo").append($div)
        .css('display','block')
        .on('click',function(e){
            e = e || window.event;
            var target =  e.srcElement|| e.target;
            while(target){
                if(target.id&&target.id=='isVideo'){
                    return;
                }
                target=target.parentNode;
            }
            $(".autoVideo").children().remove();
            $(".autoVideo").scrollTop(0); 
            $(".autoVideo").css('display','none'); 
        })
    })
})
