let net = require("net");
let str_pb=require('./protocol/str_pb');
// net.Socket,
let sock = net.connect({
    port: 6666,
    host: "127.0.0.1",
});
// 连接成功调用的事件
sock.on("connect",function() {
    console.log("成功连接到服务端...");
    //使用protobuf设置数据内容，并编码数据
    let msg=new str_pb.String();
    msg.setVal(" Hi，服务端");
    let bytes=msg.serializeBinary();
    // 将编码好的数据发送给服务端
    sock.write(bytes);
});
sock.on("data",function(data){
    let bytes=str_pb.String.deserializeBinary(data);
    console.log('收到服务端响应：',bytes.array[0]);
});
// 有错误发生调用的事件
sock.on("error", function(e) {
    console.log("error", e);
});
// socket关闭的事件
sock.on("close", function() {
    console.log("close");
});
// 对方发送了关闭数据包过来的事件
sock.on("end", function() {
    console.log("end event");
});
