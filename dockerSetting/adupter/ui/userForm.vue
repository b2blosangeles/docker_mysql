<template>
    <div>
      <form>
        <div class="form-group">
          <label>username</label>
          <input type="text" class="form-control" maxlength="64" v-model="form.username" placeholder="User Name">
        </div>
        <div class="form-group">
          <label>password</label>
          <input type="password" class="form-control" maxlength="64" v-model="form.password" placeholder="Password">
        </div>
      </form>
    </div>
</template>
 
<script>
module.exports = {
    data: function() {
        var me = this;
        return {
            form : {
                username  : '',
                password  : ''
            }
        }
    }
}
</script>
<style>
</style>
