import config from "../config"

class WS {
    static init(token, onClose, onOpen) {
        console.log(token)
        this.ws = new WebSocket(`${config['SOCKET_URL']}?access_token=${token}`);
        this.ws.onclose = function () {
            console.log('CLOSED');
            this.ws = null;
            onClose()
        };
        this.ws.onopen = function () {
            console.log('OPENED')
            onOpen()
        }
    }
    static onMessage(handler) {
        if(!!this.ws)
        this.ws.addEventListener('message', handler);
    }
    static close() {
        if(!!this.ws){
            // this.ws.removeEventListener("message", ()=>{});
            this.ws.close();
            this.ws = null
        }
    }
    static offMessage(handler) {
        if(!!this.ws){
            this.ws.removeEventListener("message", handler);
            this.ws.close();
        }
    }
    static sendMessage(type = "message", data = {}) {
        console.log(data)
        if(!!this.ws)
        this.ws.send(JSON.stringify({
            type,
            data
        }))
    }
}
export default WS
