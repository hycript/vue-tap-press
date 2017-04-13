import tap from './tap';
import press from './press';

export default {
    install(Vue){
        Vue.directive('tap', tap);
        Vue.directive('press', press);
    }
}
