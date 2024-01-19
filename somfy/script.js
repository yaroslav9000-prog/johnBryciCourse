// each curtain has an ip address, port, channel, name(curtain1, curtain2,)
let config = {
    name: "floor 1",
    ip: "192.168.1.206",
    port: 1001,
    channel1: true,
    channel2: true,
    channel3: false,
    channel4: false,
    channel5: false,
    channel6: false,
    channel8: false,
    channel9: false,
    channel10: true,
    channel11: false,
    channel12: false,
    channel13: false,
    channel14: false,
    channel15: false,
    channel16: false,
    reverse: false,

}
// create 16 objects => array => name, ip, port, channel, reverse
var comfyArray = [];
if(config.channel1){
    var Object = {
        name: "curtain1",
        ip: "192.168.1.206",
        port: 1001,
        reverse: config.reverse,
    }
}