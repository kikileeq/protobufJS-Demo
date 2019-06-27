# protobufJS-Demo

演示如何使用protobufJs进行前后端数据传输

## 安装编译步骤：
1. 安装protobuf库：
npm install google-protobuf   
2.从release中下载一个protocol编译器(现在不支持npm安装)，用于把proto文件编译成js文件（需要将下载的编译器bin目录配到环境变量中）  
 下载地址：https://github.com/protocolbuffers/protobuf/releases
3.  .proto-->.js文件命令：
`<hello world>`  protoc --js_out=import_style=commonjs,binary:../compiled account.proto integer.proto string.proto user.proto(此处可以跟多个需要编译的proto文件) `<hello word>`
## 使用方法：
### import编译好的js文件     
var messages = require('./messages_pb');
### 实例化对象
var msg = new MyMessage(); 
### 设置msg内容
msg.setName("John Doe");
msg.setAge(25);
msg.setPhoneNumbers(["800-555-1212", "800-555-1100"]);
### 序列化（编码）
var bytes = msg.serializeBinary();
### 反序列化
Var msg2 = MyMessage.deserializeBinary(bytes);
> nihao 
>hello
[链接名称]www.baidu.com
