/*--index--*/
$(document).ready(function(){
$("#xykm_title p").mouseover(function(){
	var V=$(this).index();
	$("#xykm_title p").removeClass("xyksl_p");
	$("#xykm_box ul").removeClass("show").addClass("hide");
    $("#xykm_title p").eq(V).addClass("xyksl_p");
	$("#xykm_box ul").eq(V).removeClass("hide").addClass("show");
  });
 
})

$(document).ready(function(){
$(".bk_title a").mouseover(function(){
	var fa=$(this).index();
	$(this).siblings().removeClass("on_a");
	$(this).parent().children("a").eq(fa).addClass("on_a");
	$(this).parent().siblings("ul").removeClass("show").addClass("hide");
	$(this).parents(".bk_left").children("ul").eq(fa).removeClass("hide").addClass("show");

  });
 
})





/*--zxtz--*/
$(document).ready(function(){
$("#tzzx_title li").mouseover(function(){
	var V=$(this).index();
	$("#tzzx_title li").removeClass("tzzx_slli");
	$("#tz_zx .tzzx_box").removeClass("show").addClass("hide");
    $("#tzzx_title li").eq(V).addClass("tzzx_slli");
	$("#tz_zx .tzzx_box").eq(V).removeClass("hide").addClass("show");
  });
 
})


/*--hysl--*/
$(document).ready(function(){
$("#yhhd_title span").mouseover(function(){
	var S=$(this).index();
	$("#yhhd_title span").removeClass("sl_span");
	$("#yhhd_box ul").removeClass("show").addClass("hide");
    $("#yhhd_title span").eq(S).addClass("sl_span");
	$("#yhhd_box ul").eq(S).removeClass("hide").addClass("show");
  });
 
})

/*--hysl--*/
$(document).ready(function(){
$("#yhhd_title span").mouseover(function(){
	var S=$(this).index();
	$("#yhhd_title span").removeClass("sl_span");
	$("#yhhd_box ul").removeClass("show").addClass("hide");
    $("#yhhd_title span").eq(S).addClass("sl_span");
	$("#yhhd_box ul").eq(S).removeClass("hide").addClass("show");
  });
})

$(document).ready(function(){
	var a=parseFloat($("#djcs").val());
$("#moreyh_btn").click(function(){
	if (a%2==0)
	{
		$("#moreyh_btn").html("收起∧");
		$("#moreyh_btn").addClass("more_span");
		$("#yh_hide").removeClass("hide").addClass("show");
	}
	else{
		$("#moreyh_btn").html("更多银行∨");
		$("#moreyh_btn").removeClass("more_span");
		$("#yh_hide").removeClass("show").addClass("hide");
	}
	a+=1;
  });
})


/*--hkfs--*/
$(document).ready(function(){
$("#hk_title p").mouseover(function(){
	var V=$(this).index();
	$("#hk_title p").removeClass("hksl_p");
	$("#hk_box ul").removeClass("show").addClass("hide");
    $("#hk_title p").eq(V).addClass("hksl_p");
	$("#hk_box ul").eq(V).removeClass("hide").addClass("show");
  });
 
})

/*--xykcont-
$(document).ready(function(){
$("#xykmc_title p").mouseover(function(){
	var V=$(this).index();
	$("#xykmc_title p").removeClass("fq_p");
	$("#xykmc_box ul").removeClass("show").addClass("hide");
    $("#xykmc_title p").eq(V).addClass("fq_p");
	$("#xykmc_box ul").eq(V).removeClass("hide").addClass("show");
  });
 
})-*/


/*----*/
$(document).ready(function(){
$(function(){
	$(window).scroll(function(){
		var _top = $(window).scrollTop();
		if(_top>133){
			$('#xykm_top').addClass("floatbox");
		}else{
			$('#xykm_top').removeClass("floatbox");
		}
	});

});
})



/**/
$(document).ready(function(){
$("#wd_sf li").click(function(){
	var V=$(this).index();
	$("#wd_sf li").removeClass("xssl_li");
	$("#wd_cs ul").removeClass("show").addClass("hide");
    $("#wd_sf li").eq(V).addClass("xssl_li");
	$("#wd_cs ul").eq(V).removeClass("hide").addClass("show");
})
  });