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
            root :  this.$parent.root,
            list : []
        }
    },
    mounted () {
        let me = this;
        // '/_dockerAdupter/api/database/db1/main.js'
        let url = '/_dockerAdupter/api/' + me.item.serverType + '/' + me.item.name + '/main.js'
        me.getAllDatabase(url);
    },
    methods :{
        getAllDatabase(url) {
            let me = this;
            me.root.triggerSpinner = true;
            $.ajax({
                type: 'GET',
                url:url,
                data: {},
                success: function(result) {
                   me.root.triggerSpinner = false;
                   me.list = result;
                },
                error: function (jqXHR, textStatus, errorThrown) { 
                   me.root.triggerSpinner = false;;
                },
                dataType: 'JSON'
            });
        }
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
