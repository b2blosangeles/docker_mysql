<template>
    <div class="adupterBody border border-info br-3 m-1 p-3 rounded-lg alert-info">  
      adupter body 
      <hr/> 
      {{item}}
      <hr/>
      {{list}}
    </div>
</template>
 
<script>
module.exports = {
    props : ['item'],
    data: function() {
        return {
            list : []
        }
    },
    mounted () {
        let me = this;
        $.ajax({
            type: 'GET',
            url:'/_dockerAdupter/api/database/db1/main.js',
            data: {
                /*
                cmd :'stopVServer',
                serverName : me.name,
                serverType : me.serverType*/
            },
            success: function(result) {
               // me.$parent.triggerSpinner = false;
                me.list = result;
            },
            error: function (jqXHR, textStatus, errorThrown) { 
           //     me.$parent.triggerSpinner = false;
            },
            dataType: 'JSON'
        });
    },
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
