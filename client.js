/**
 * @param $ jQuery
 * @param ssl 是否ssl连接
 * @param host 主机
 * @param port 端口
 */
function Client($, ssl, host, port) {
    this.url = (ssl?"https":"http")+"://"+host+":"+port;

    /**
     * 发送数据
     * @param token {string|int} 登录token,可为null
     * @param cmd 命令
     * @return jqXHR
     */
    Client.prototype.send = function (token, cmd) {
        return $.ajax({
            url: this.url,
            data: JSON.stringify({
                token: (token?token:0)+"",
                cmd: cmd
            }),
            method: "post"
        });
    };
}