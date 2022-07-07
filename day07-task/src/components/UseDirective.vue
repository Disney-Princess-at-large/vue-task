<template>
  <div>
    
    <input type="text" v-model="val" v-number="val" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
    }
  },
  directives: {
    number: {
      inserted(el, binding, vnode) {
        console.log('el', el)
        console.log('binding', binding)
        console.log('vnode', vnode)
      },
      update(el, binding, vnode) {

        vnode.context[binding.expression] = el.value.replace(/\D+/g,'')
      },
    },
  },
}
</script>

<style></style>
