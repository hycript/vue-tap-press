# vue-tap-press
vue2.x directive about tap doubletap press event
## Usage


.js (register directive)

```js
import Vue from 'vue';
import vue_tap_press from 'xxx';

Vue.use(vue_tap_press);
```


.vue

```vue
<template>
    <div 
        v-tap.prevent.stop.capture.doubletap="300" 
        @tap="tapHandle" 
        @doubletap="doubletapHandle"
        v-press.prevent.stop.captrue.tick="1000"
        @press="pressHandle" >
    </div>
</template>
<script>
export default {
    methods: {
        tapHandle(e){
            //do tap handle
        },
        doubletapHandle(e){
            //do doubletap handle
        },
        pressHandle(e){
            //do press handle
        }
    }
}
</script>
```
when v-tap directive has doubletap modifiers , DOM can bubble doubletap event. without doubletap modifiers, DOM will not bubble doubletap event.

when v-press directive has tick modifiers , When the time of arrival , DOM can automatically trigger the press event.

The modifiers are optional.


## Event-Modifiers
It is a very common need to call event.preventDefault() or event.stopPropagation() inside event handlers. Although we can do this easily inside methods, it would be better if the methods can be purely about data logic rather than having to deal with DOM event details.(from [vue.js](https://vuejs.org/v2/guide/events.html#Event-Modifiers) document)

### v-tap && v-press
modifiers | describe
---|---
.stop | event's propagation will be stopped
.prevent | event will be preventDefault
.capture | use capture mode when adding the event listener

### v-tap only

modifiers | describe
---|---
.delay | tap event will be delay dispatch by the directive value , default 300ms; 
.doubletap | DOM will dispatch doubletap event,if it has reach condition to dispatch doubletap event , it will not dispatch tap event ;

### v-press only

modifiers | describe
---|---
.tick | if press time reach condition (the directive value , default 750ms), DOM can automatically trigger the press event.




# LICENCE
MIT
