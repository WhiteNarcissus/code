const http = require("http")
const urlModule = require("url")

const server = http.createServer()
server.on("request",function(request,response) {

    const obj = urlModule.parse(request.url,true)
    console.log(obj.pathname)
    if(obj.pathname == "/getScript"){
        var quer =obj.query ;

        console.log(quer)
       
        if(quer.params=="aaa"){
            response.end("show1()")
        }else{
            response.end("show2()")
        }

       
        
        
    }

    console.log(obj)
})

server.listen(3000,function(){

console.log("3000 端口被监听 啦啦啦 第一个 ")

})