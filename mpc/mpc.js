/*指在m与pc端通用的*/
/**
 * 发送
 * @returns {boolean}
 */
var send = function () {
    var host = $("#host").val();
    var port = $("#port").val();

    var cmd = $("#cmd").val().trim();

    //显示请求
    var resp = $("<div class='resp'></div>");
    var respHeader = $("<div class='resp-header'></div>");
    var time = $("<kbd>"+(new Date().format("hh:mm:ss"))+"</kbd>");
    var cmdShow = $("<span class='cmd-show nocode'>"+cmd+"</span>");
    respHeader.append(time);
    respHeader.append(cmdShow);
    resp.append(respHeader);
    $("#content").append(resp);

    //发送
    new Client($, false, host, port).send(Store.get("token"), cmd).then(function (data) {
        //转json
        if (typeof data == "string") data = JSON.parse(data);
        //保存
        Store.set("token", data.token);
        //框变绿
        resp.addClass("req-success");
        //设置信息
        setMsg(resp, data.lines);
    }, function (jqXHR, textStatus, errorThrown) {
        //框变红
        resp.addClass("req-error");
        //设置信息
        setMsg(resp, ["请求失败: "+textStatus]);
    }).always(function (data, textStatus, errorThrown) {

    });
    return false;
};

var setMsg = function (resp, lines) {
    $(lines).each(function (i, e) {
        var line = window.m?$("<div class='weui-cell weui-cell_access'>"+e+"</div>"):$("<div class='line'>"+e+"</div>");
        resp.append(line);
    });
    //滚动到最后
    var content = $("#content")[0];
    content.scrollTop = content.scrollHeight;
}