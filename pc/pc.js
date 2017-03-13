//===== 删除按钮 =====
//把del-holder加到input的父元素class内即可自动添加按钮
$(document).ready(function () {
    $(".del-holder").each(function (i, e) {
        var input = $("input", e);
        var del = $('<i class="fa fa-times-circle fa-fw l-icon-del hide" aria-hidden="true"></i>');
        //输入框有内容就隐藏删除按钮
        input.keyup(function () {
            if (input.val()) del.removeClass("hide");
        });
        //注册删除按钮点击事件
        del.click(function () {
            del.addClass("hide");
            //值清空
            input.val("");
            //触发值改变事件
            input.trigger($.Event("change"));
        });
        //添加
        $(e).append(del);
        //初始检测
        if (input.val()) del.removeClass("hide");
    });
});