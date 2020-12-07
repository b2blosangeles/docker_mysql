<template>
    <div class="adupterBody border border-info br-3 m-1 p-3 rounded-lg alert-info">  
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
.adupterBody { color: #333 }
</style>
