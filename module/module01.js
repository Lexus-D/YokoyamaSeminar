//way1:export whole object--> exports.obj{...}
var obj={
    //way3:export each method
        //exports.get(){...}
    get:function(){
        console.log('get data from server');
    },
    post:function(){
        console.log('post data to server')
    }

}
//way2:export whole object
module.exports=obj;


