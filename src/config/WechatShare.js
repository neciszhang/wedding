import axios from 'axios'

axios({
    method: 'post',
    url: '/api/wx/getsignature',
    data: {
        url: location.href.split('#')[0]
    }
}).then((res) => {
    console.log(res);
    if (res.status == 200) {
        wx.config({
            debug: false,
            appId: res.data.appId,
            timestamp: res.data.timestamp,
            nonceStr: res.data.nonceStr,
            signature: res.data.signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
                'chooseImage'
            ]
        });

        // 调用微信API
        wx.ready(function() {
            var sdata = {
                title: '测试title',
                desc: '测试desc',
                link: 'https://shell.farvis.cn/test/',
                imgUrl: 'https://shell.farvis.cn/qiaopai/share.jpg',
                success: function() {
                    // alert('用户确认分享后执行的回调函数');
                },
                cancel: function() {
                    // alert('用户取消分享后执行的回调函数');
                }
            };
            wx.onMenuShareTimeline(sdata);
            wx.onMenuShareAppMessage(sdata);
        });
    }

}).catch((error) => {
    console.log(error);
});