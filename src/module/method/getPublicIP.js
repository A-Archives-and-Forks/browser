import globalThis from '../runtime/globalThis.js';

const reg = {
    'IPv4':/\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,
    'IPv6':/\b(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}\b/i
};
const PeerConnection = globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection;

export default async function(){
    const ipSet = new Set();
    const onicecandidate = (ice) => {
        const candidate = ice?.candidate?.candidate;
        if (candidate) {
            for (const regex of [reg['IPv4'], reg['IPv6']]) {
                const match = candidate.match(regex);
                if (match) {
                    ipSet.add(match[0]);
                }
            }
        }
    };
    return new Promise(function(resolve, reject){
        if(PeerConnection){
            const conn = new PeerConnection({
                iceServers: [{
                    urls: 'stun:stun.l.google.com:19302',
                },{
                    urls: 'stun:stun.services.mozilla.com'
                }]
            });
            conn.addEventListener('icecandidate', onicecandidate);
            conn.createDataChannel('');
            conn.createOffer().then((offer) => conn.setLocalDescription(offer), reject);
            let count = 20;
            let hander = null;
            let closeConnect = function(){
                try {
                    conn.removeEventListener('icecandidate', onicecandidate);
                    conn.close();
                }catch{
                }
                hander&&clearInterval(hander);
            };
            hander = setInterval(function(){
                let ips = [...ipSet];
                if(ips.length){
                    closeConnect();
                    resolve(ips[0]);
                }else if(count){
                    count--;
                }else{
                    closeConnect();
                    resolve('');
                }
            }, 100);
        }else{
            resolve('');
        }
    });
};