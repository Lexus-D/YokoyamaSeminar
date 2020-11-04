exports.getExtname=function(name){
    switch(name){
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        case '.php':
            return 'text/php';
        default:
            return 'text/html';
    }
}