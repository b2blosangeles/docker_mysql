<template>
    <div class="adupterBody border border-info br-3 m-1 p-3 rounded-lg alert-info"> 
      <user-form v-if="!isUserAdded()"></user-form>
      <span v-if="isUserAdded()">User ready!</span>
    </div>
    {{appUserList}}
</template>
 
<script>
module.exports = {
    props : ['item', 'plugin_path'],
    data: function() {
        return {
            root :  this.$parent.root,
            hasDoneSetup : false,
            appUserList : [],
            serverConfig : {
                users : {}
            }
        }
    },
    mounted () {
        let me = this;
        let url = me.plugin_path + '/api/main.js';
        console.log(me.item);
       me.getAllUsers();
       VUEApp.dynamicLoadComponent({userForm : me.plugin_path + '/ui/userForm.vue'}, me);
       me.$forceUpdate();
    },
    methods :{
        isUserAdded() {
            let me = this;
            return (me.appUserList.length) ? true : false;
        },
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
        _post(url, data, calback) {
            $.ajax({
                type: 'POST',
                url:url,
                data: data,
                success: function(result) {
                    calback(result);
                },
                error: function (jqXHR, textStatus, errorThrown) { 
                   calback(null)
                },
                dataType: 'JSON'
            });
        },
        isAppUserReady () {
           return (!this.appUserList || !this.appUserList.length) ?  false : true;
        },
        getAllUsers() {
            let me = this;
            let url = me.plugin_path + '/api/main.js';
            me._post(url, {cmd : 'getAppUser'}, function(data) {
              //  me.appUserList = data;
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
