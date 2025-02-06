const { url, root } = hexo.config;

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.thumbnail) {
        // 如果 thumbnail 不是以 http 或 https 开头，自动拼接 url 和 root
        if (!/^https?:\/\//.test(data.thumbnail)) {
            data.thumbnail = url + root + data.thumbnail;
        }
    }
    return data;
});