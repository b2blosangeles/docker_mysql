<template>
    <div class="adupterBody">  
      adupter body - {{item.serverType}}
    </div>
</template>
 
<script>
module.exports = {
    props : ['item'],
    data: function() {
        return {
        }
    },
    mounted () {},
    methods :{
    },
    components: VUEApp.loadComponents({
        LOAD    : {
        }, 
        TPL :{
        }
    })
}
</script>
 
<style>
.adupterBody { border: 6px solid #666; padding : 0.5rem }
</style>
