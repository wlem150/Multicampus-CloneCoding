// 넷바
$(".navbar").hover(
  function () {
    $(".navbar").css("background-color", "#fff");
    $(".navbar").css("transition", "0.2s");
    $(".navbar_menu a").css("color", "#000");
    $(".navbar_pointer_menu a").css("color", "#000");
    $(".navbar_pointer_menu img").css("filter", "invert(100%)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
    $(".navbar_links a:eq(0)").css("color", "#000");
  },
  function () {
    $(".navbar").css("background-color", "transparent");
    $(".navbar").css("transition", "0.2s");
    $(".navbar_menu a").css("color", "#fff");
    $(".navbar_pointer_menu a").css("color", "#fff");
    $(".navbar_pointer_menu img").css("filter", "invert(0)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
    $(".navbar_links a:eq(0)").css("color", "#fff");
  }
);

// service 서브 넷바
$(".navbar_menu>li:eq(0), .service").hover(
  function () {
    $(".navbar").css("background-color", "#fff");
    $(".navbar_menu a").css("color", "#000");
    $(".navbar_pointer_menu a").css("color", "#000");
    $(".navbar_pointer_menu img").css("filter", "invert(100%)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
    $(".navbar_links a:eq(0)").css("color", "#000");

    $(".sub_navbar").css("display", "block");
    $(".sub_navbar").css("position", "static");
    $(".service").css("position", "static");
    $(".service").css("display", "inline-block");
    $(".navbar_pointer_menu img").css("filter", "invert(100%)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
  },
  function () {
    $(".navbar").css("background-color", "transparent");
    $(".navbar_menu a").css("color", "#fff");
    $(".navbar_pointer_menu a").css("color", "#fff");
    $(".navbar_pointer_menu img").css("filter", "invert(0)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
    $(".navbar_links a:eq(0)").css("color", "#fff");

    $(".sub_navbar").css("display", "none");
    $(".sub_navbar").css("position", "absolute");
    $(".service").css("position", "static");
    $(".service").css("display", "none");
    $(".navbar_pointer_menu img").css("filter", "invert(0)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
  }
);

// contents 서브 넷바
$(".navbar_menu>li:eq(1), .contents").hover(
  function () {
    $(".navbar").css("background-color", "#fff");
    $(".navbar_menu a").css("color", "#000");
    $(".navbar_pointer_menu a").css("color", "#000");
    $(".navbar_pointer_menu img").css("filter", "invert(100%)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
    $(".navbar_links a:eq(0)").css("color", "#000");

    $(".sub_navbar").css("display", "block");
    $(".sub_navbar").css("position", "static");
    $(".contents").css("position", "static");
    $(".contents").css("display", "inline-block");
    $(".navbar_pointer_menu img").css("filter", "invert(100%)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
  },
  function () {
    $(".navbar").css("background-color", "transparent");
    $(".navbar_menu a").css("color", "#fff");
    $(".navbar_pointer_menu a").css("color", "#fff");
    $(".navbar_pointer_menu img").css("filter", "invert(0)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
    $(".navbar_links a:eq(0)").css("color", "#fff");

    $(".sub_navbar").css("display", "none");
    $(".sub_navbar").css("position", "absolute");
    $(".contents").css("position", "static");
    $(".contents").css("display", "none");
    $(".navbar_pointer_menu img").css("filter", "invert(0)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
  }
);

// solution 서브 넷바

$(".navbar_menu>li:eq(2), .solution").hover(
  function () {
    $(".navbar").css("background-color", "#fff");
    $(".navbar_menu a").css("color", "#000");
    $(".navbar_pointer_menu a").css("color", "#000");
    $(".navbar_pointer_menu img").css("filter", "invert(100%)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
    $(".navbar_links a:eq(0)").css("color", "#000");

    $(".sub_navbar").css("display", "block");
    $(".sub_navbar").css("position", "static");
    $(".solution").css("position", "static");
    $(".solution").css("display", "inline-block");
    $(".navbar_pointer_menu img").css("filter", "invert(100%)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
  },
  function () {
    $(".navbar").css("background-color", "transparent");
    $(".navbar_menu a").css("color", "#fff");
    $(".navbar_pointer_menu a").css("color", "#fff");
    $(".navbar_pointer_menu img").css("filter", "invert(0)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
    $(".navbar_links a:eq(0)").css("color", "#fff");

    $(".sub_navbar").css("display", "none");
    $(".sub_navbar").css("position", "absolute");
    $(".solution").css("position", "static");
    $(".solution").css("display", "none");
    $(".navbar_pointer_menu img").css("filter", "invert(0)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
  }
);

// 회사소개
$(".navbar_links>li:eq(0), .company_intro").hover(
  function () {
    $(".navbar").css("background-color", "#fff");
    $(".navbar_menu a").css("color", "#000");
    $(".navbar_pointer_menu a").css("color", "#000");
    $(".navbar_pointer_menu img").css("filter", "invert(100%)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
    $(".navbar_links a:eq(0)").css("color", "#000");

    $(".sub_navbar").css("display", "block");
    $(".sub_navbar").css("position", "static");
    $(".company_intro").css("position", "static");
    $(".company_intro").css("display", "inline-block");
    $(".navbar_pointer_menu img").css("filter", "invert(100%)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
  },
  function () {
    $(".navbar").css("background-color", "transparent");
    $(".navbar_menu a").css("color", "#fff");
    $(".navbar_pointer_menu a").css("color", "#fff");
    $(".navbar_pointer_menu img").css("filter", "invert(0)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
    $(".navbar_links a:eq(0)").css("color", "#fff");

    $(".sub_navbar").css("display", "none");
    $(".sub_navbar").css("position", "absolute");
    $(".company_intro").css("position", "static");
    $(".company_intro").css("display", "none");
    $(".navbar_pointer_menu img").css("filter", "invert(0)");
    $(".navbar_pointer_menu img").css("transition", "0.2s");
  }
);

$(document).ready(function () {
  $("#it").click(function () {
    $("#target1").css("display", "block");
    $("#target2").css("display", "none");
    $("#target3").css("display", "none");
    $("#target4").css("display", "none");
    $("#target5").css("display", "none");
  });
  $("#language").click(function () {
    $("#target1").css("display", "none");
    $("#target2").css("display", "block");
    $("#target3").css("display", "none");
    $("#target4").css("display", "none");
    $("#target5").css("display", "none");
  });
  $("#mba").click(function () {
    $("#target1").css("display", "none");
    $("#target2").css("display", "none");
    $("#target3").css("display", "block");
    $("#target4").css("display", "none");
    $("#target5").css("display", "none");
  });
  $("#metabus").click(function () {
    $("#target1").css("display", "none");
    $("#target2").css("display", "none");
    $("#target3").css("display", "none");
    $("#target4").css("display", "block");
    $("#target5").css("display", "none");
  });
  $("#lib").click(function () {
    $("#target1").css("display", "none");
    $("#target2").css("display", "none");
    $("#target3").css("display", "none");
    $("#target4").css("display", "none");
    $("#target5").css("display", "block");
  });
});
