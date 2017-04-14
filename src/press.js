/**
 * v-press.tick.prevent.stop.capture = "1000" || v-press || v-press.tick.prevent.stop.capture
 * @press = "action"
 */

import { judgeEvent, createEvent } from './eventTool';

export default (function(){
    'use strict';

    const threshold = 10;
    const name = 'tap';
    const dbname = 'doubletap';
    const duration = 750;

    const istouch = 'ontouchstart' in window ? true : false;
    const EV = {
        start: istouch ? 'touchstart' : 'mousedown',
        end: istouch ? 'touchend' : 'mouseup',
        move: istouch ? 'touchmove' : 'mousemove',
    };

    return {
        name,
        bind(el, {value = duration, modifiers}){
            let ev,
                originalEvent,
                time,
                timer;

            el.addEventListener(EV.start, e => {
                originalEvent = e;
                ev = e.touches ? e.touches.length === 1 ? e.touches[0] : null : e;
                if(!!ev){
                    time = +new Date();
                    el.addEventListener(EV.move, touchMove);
                    el.addEventListener(EV.end, touchEnd);

                    if(modifiers.tick){
                        timer = setTimeout(() => {
                            timer = null;
                            let tapEvent = createEvent(EV.end, !modifiers.capture, { originalEvent });
                            el.dispatchEvent(tapEvent);
                        }, parseInt(value) || duration);
                    }
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

                let trigger = modifiers.tick || false;

                if(timer){
                    trigger = false;
                    clearTimeout(timer);
                    timer = null;
                }

                let _ev = originalEvent.touches ? originalEvent.touches[0] : originalEvent;

                if(!judgeEvent(ev, _ev, threshold)) return;

                if(modifiers.prevent){
                    e.preventDefault();
                }

                if(modifiers.stop){
                    e.stopPropagation();
                }

                let dur = +new Date() - time;
                if(trigger || dur >= value){
                    let tapEvent = createEvent(name, !modifiers.capture, { e });
                    el.dispatchEvent(tapEvent);
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
