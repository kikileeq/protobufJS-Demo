let net=require('net');
let str_pb=require('./protocol/str_pb');

const port=6666;
const host='127.0.0.1';
//创建一个TCP服务器
let server=net.createServer(function(sock){
    console.log('客户端连接成功'+sock.remoteAddress+':'+sock.remotePort);
    //处理接收到的数据
    sock.on('data',function (data) {
        //console.log(data);
        let bytes=str_pb.String.deserializeBinary(data);
        console.log('收到客户端数据：',bytes.array[0]);
        //给客户端回一条消息
        let msg=new str_pb.String();
        msg.setVal("Hi，客户端");
        let response=msg.serializeBinary();
        sock.write(response)
    });
});

server.listen(port,host,function () {
   console.log('开始接收客户端请求...')
});