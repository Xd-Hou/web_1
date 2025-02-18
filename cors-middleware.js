module.exports = function(req, res, next) {
    // 允许所有来源访问
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    // 允许的请求方法
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); 
    // 允许的请求头
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization'); 
    next();
};