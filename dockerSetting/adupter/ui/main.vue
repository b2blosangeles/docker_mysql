<template>
    <div class="adupterBody border border-info br-3 m-1 p-3 rounded-lg alert-info">  
      adupter body <button class="btn btn-warning" v-if="!isAppUserReady()">Add User</button>
      <hr/> 
      {{item}}
      <hr/>
      {{appUserList}}
    </div>
</template>
 
<script>
module.exports = {
    props : ['item'],
    data: function() {
        return {
            root :  this.$parent.root,
            appUserList : []
        }
    },
    mounted () {
        let me = this;
        // '/_dockerAdupter/api/database/db1/main.js'
        let url = '/_dockerAdupter/api/' + me.item.serverType + '/' + me.item.name + '/main.js'
        me.getAllDatabase(url);
    },
    methods :{
        _get(url, param, calback) {
            $.ajax({
                type: 'GET',
                url:url,
                data: param,
                success: function(result) {
                   // me.root.triggerSpinner = false;
                    calback(result);
                },
                error: function (jqXHR, textStatus, errorThrown) { 
                   // me.root.triggerSpinner = false;
                   calback(null)
                },
                dataType: 'JSON'
            });
        },
        _post() {
        },
        isAppUserReady () {
           // return false;
           return (this.appUserList.length) ?  true : false;
        },
        getAllDatabase(url) {
            let me = this;
            me._get(url, {}, function(data) {
                console.log(data);
                me.appUserList = data;
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
