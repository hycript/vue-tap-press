# vue-tap-press
vue2.x directive about tap doubletap press event
## Usage

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
when v-tap directive has doubletap modifiers , the el can capture doubletap event.

when v-press directive has tick modifiers , When the time of arrival , DOM can automatically trigger the press event.
