import userAgent from '../runtime/userAgent.js';
import _Chrome from './Chrome.js';

export default {
    name:'Edge',
    parse(ua = userAgent){
        return {
            is: ua.includes('Edge')
                ||ua.includes('Edg/')
                ||ua.includes('EdgA')
                ||ua.includes('EdgiOS'),
            version:ua.match(/Edge\/([\d.]+)/)?.[1]
                ||ua.match(/Edg\/([\d.]+)/)?.[1]
                ||ua.match(/EdgA\/([\d.]+)/)?.[1]
                ||ua.match(/EdgiOS\/([\d.]+)/)?.[1]
                ||''
        };
    },
    async version() {
        return await _Chrome.version.bind(this)();
    }
}