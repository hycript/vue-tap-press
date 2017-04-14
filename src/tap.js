/**
 * v-tap.delay.prevent.stop.capture.doubletap = "300" || v-tap || v-tap.delay.prevent.stop.capture.doubletap
 * @tap = "action1" @doubletap = "action2"
 */

import { judgeEvent, createEvent } from './eventTool';

export default (function(){
    'use strict';

    const threshold = 10;
    const name = 'tap';
    const dbname = 'doubletap';
    const delay = 300;

    const istouch = 'ontouchstart' in window ? true : false;
    const EV = {
        start: istouch ? 'touchstart' : 'mousedown',
        end: istouch ? 'touchend' : 'mouseup',
        move: istouch ? 'touchmove' : 'mousemove',
    };

    return {
        name,
        bind(el, {value = delay, modifiers}){
            let ev,
                originalEvent,
                time,
                timer,
                dbtime;

            let ticker = 0;

            el.addEventListener(EV.start, e => {
                originalEvent = e;
                ev = e.touches ? e.touches.length === 1 ? e.touches[0] : null : e;
                if(!!ev){
                    time = +new Date();
                    el.addEventListener(EV.move, touchMove);
                    el.addEventListener(EV.end, touchEnd);
                }
            });

            function touchMove(e){
                let _ev = originalEvent.touches ? originalEvent.touches[0] : originalEvent;
                if(ev){
                    originalEvent = e;
                    if(!judgeEvent(ev, _ev, threshold)){
                        ev = null;
                    }
                }
            }

            function touchEnd(e){
                removeEventListener();

                let _ev = originalEvent.touches ? originalEvent.touches[0] : originalEvent;

                if(!judgeEvent(ev, _ev, threshold)) return;

                if(modifiers.prevent){
                    e.preventDefault();
                }

                if(modifiers.stop){
                    e.stopPropagation();
                }

                let dur = +new Date() - time;
                if(dur <= delay){
                    let tapEvent = createEvent(name, !modifiers.capture, { e });
                    if((modifiers.delay || modifiers.doubletap) && !timer){
                        timer = setTimeout(() => {
                            timer = null;
                            ticker = 0;
                            el.dispatchEvent(tapEvent);
                        }, value - (modifiers.doubletap ? dur : 0));
                    }else if(!timer){
                        el.dispatchEvent(tapEvent);
                    }

                    if(modifiers.doubletap){
                        if(ticker === 0){
                            ticker ++;
                            dbtime = +new Date();
                        }else{
                            ticker = 0;
                            let dbdur = +new Date() - dbtime;
                            if(dbdur < value && !timer){
                                clearTimeout(timer);
                                timer = null;
                                let tapEvent = createEvent(dbname, !modifiers.capture, { e });
                                el.dispatchEvent(tapEvent);
                            }
                        }
                    }
                }

                ev = null;
                originalEvent = null;
                time = null;
            }

            function removeEventListener(){
                el.removeEventListener(EV.move, touchMove);
                el.removeEventListener(EV.end, touchEnd);
            }
        }
    }
})();
