<template>
    <div>
        <form action="">
            <p>选择所在地区(实名认证主题所在地)</p>
            <input type="radio" name="checkbox" id="">中国大陆
            <input type="radio" name="checkbox" id="">中国香港
            <p>手机号码</p>
            <input type="text" name="" id="phone" class="num">
            <input type="text" name="" id="code"><button>发送验证码</button>
            <p>登录密码</p>
            <input type="password" name="" class="num">
            <input type="password" name="" class="num" placeholder="再次输入登录密码">
            <p>邀请码</p>
            <input type="text" name=""  class="num" placeholder="输入邀请码">
        </form>
    </div>
    
</template>

<script>
    export default {
        data(){
            return{
                
            }
        }
    }
</script>

<style scoped>
    .num{
        width: 300px;
        height: 30px;
        margin-bottom: 10px;
    }
    #code{
         width: 150px;
        height: 30px;
    }
    button{
        width: 100px;
        height: 35px;
        background-color: dodgerblue;
        border: 1px solid ;
        border-radius: 5px;
        margin-left: 10px;
    }
</style>