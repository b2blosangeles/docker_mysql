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
.adupterBody { border: 1px solid #333333; padding : 0.5rem }
</style>
