<template>
    <div class="app">
        <my-header :email-data="emailData" @update-email-data="emailData = $event"></my-header>
        <my-main class="main"></my-main>
        <my-about></my-about>
        <my-portfolio></my-portfolio>
        <my-services></my-services>
        <my-register-modal></my-register-modal>
        <my-login-modal @update-email-data="emailData = $event"></my-login-modal>
    </div>
</template>

<script>

    export default {

        data(){
            return {
                emailData: '',
            }
        },
        

    }
</script>


<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        color: white;
        font-family: "Outfit", sans-serif;
        background-color: #1F2235;
    }


    
</style>







