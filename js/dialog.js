

$(function(){
    $("#tm-btn1").on('click',function(event){
        event.stopPropagation();
        $("#dialog").css('display','block');  
    });

    $(document).on('click',function(e){
        e = e || window.event;
        var target =  e.srcElement|| e.target;
        while(target){
            if(target.id&&target.id=='dialog'){
                return;
            }else if(target.id=='close') {
                $("#dialog").css('display','none');
            }
            target=target.parentNode;
        }
        $("#dialog").css('display','none');
    });
})
$(function(){
    $("#tm-btn2").on('click',function(event){
        event.stopPropagation();
        $("#dialog1").css('display','block');  
    });

    $(document).on('click',function(e){
        e = e || window.event;
        var target =  e.srcElement|| e.target;
        while(target){
            if(target.id&&target.id=='dialog1'){
                return;
            }else if(target.id=='close1') {
                $("#dialog1").css('display','none');
                $(".job-detail").hide();
            }
            target=target.parentNode;
        }
        $("#dialog1").css('display','none');
        $(".job-detail").hide();
    });
    $('.job p[class=job-item]').each(function(index){
        $(this).on('click',function(){
            $('.job-detail').eq(index).toggle().siblings('.job-detail').hide();
           
        }); 
    })
   
})
$(function(){
    $("#tm-btn3").on('click',function(event){
        event.stopPropagation();
        $("#dialog2").css('display','block'); 
        var map = new BMap.Map("dialog2");          // 创建地图实例  
        var point = new BMap.Point(113.348,22.942986);  // 创建点坐标  
        map.addControl(new BMap.MapTypeControl({
            mapTypes:[
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
            ]}));
        map.centerAndZoom(point, 18);                 // 初始化地图，设置中心点坐标和地图级别
        map.setCurrentCity("广州");          // 设置地图显示的城市
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        var pt = new BMap.Point(113.348789,22.941986);
        var myIcon = new BMap.Icon("img/location.gif", new BMap.Size(300,300));
        var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
        map.addOverlay(marker2);
    });

    $(document).on('click',function(e){
        e = e || window.event;
        var target =  e.srcElement|| e.target;
        while(target){
            if(target.id&&target.id=='dialog2'){
                return;
            }
            target=target.parentNode;
        }
        $("#dialog2").css('display','none');
    });
})



