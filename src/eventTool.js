function judgeEvent(ev, _ev, threshold){
    if(!ev || !_ev) return false;
    let isStatic = Math.abs(ev.pageX - _ev.pageX) <= threshold && Math.abs(ev.pageY - _ev.pageY) <= threshold;
    if(ev.target === _ev.target && isStatic){
        return true;
    }
    return false;
}

function createEvent(name, bubbles, mixins = {}){
    const tapEvent = document.createEvent('HTMLEvents');
    tapEvent.initEvent(name, bubbles, true);
    return Object.assign(tapEvent, mixins);
}

export {
    judgeEvent,
    createEvent,
}
