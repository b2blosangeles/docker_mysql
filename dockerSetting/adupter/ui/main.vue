<template>
    <div class="adupterBody border border-info br-3 m-1 p-3 rounded-lg alert-info">  
      adupter body <button class="btn btn-warning" v-if="!isAppUserReady()">Add User</button>
      -->{{plugin_path}}<--
      <hr/>
      <niu-bi></niu-bi>
      <hr/>
      ==>{{item}}<==
      <hr/>
      {{appUserList}}
    </div>
</template>
 
<script>
module.exports = {
    props : ['item', 'plugin_path'],
    data: function() {
        return {
            root :  this.$parent.root,
            appUserList : []
        }
    },
    mounted () {
        let me = this;
        // '/_dockerAdupter/api/database/db1/main.js'
        let url = me.pluginPath + '/main.js';
         console.log('---url---->');
         console.log(url);
        me.getAllDatabase(url);
        console.log(me.plugin_path + '/niuBi.vue');
       // VUEApp.dynamicLoadComponent({niuBi : me.pluginPath + '/niuBi.vue'}, me);
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
           return (!this.appUserList || !this.appUserList.length) ?  false : true;
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
           'niuBi'   : plugin_path + '/niuBi.vue'
        }, 
        TPL :{
        }
    })
}
</script>
 
<style>
.adupterBody { color: #333 }
</style>
