<template>
    
    <div class="modal-reg" @click="hide">
        <div class="modal-content">
            <my-title> Зарегистрироваться </my-title>
            <form action="send">
                <input type="email" name="" id="mailreg" placeholder="Email..." v-model="email">
                <input type="password" name="" id="passwordreg" placeholder="Пароль..." v-model="password">
                <input type="password" name="" id="" placeholder="Подтвердите пароль..." v-model="checkpass">
                
                <my-button type="submit" @click.prevent="reg()">Зарегистрироваться</my-button>
            </form>
            <my-link href="#" class="register" @click.prevent="btn()"> Уже есть аккаунт? Войти </my-link>
            <my-link @click.prevent="signWithGoogle()" class="google">Войти через Google</my-link>
        </div>
    </div>
</template>

<script>
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    import {ref} from "vue"
    
    export default {
        
        name: 'my-register-modal',
        data(){
            return {
                
            }
        },
        setup(){
            const email = ref("");
            const password = ref("");
            const checkpass = ref("");
            const errMsg = ref("");
            const reg =() => {

                if(checkpass.value === password.value){
                    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
                    .then((data) => {
                        document.querySelector('.modal-reg').style.cssText = `display: none;`;
                        //
                    })
                    .catch((error) => {
                        password.value = "";
                        checkpass.value = "";
                        email.value = "";
                        //errMsg.value = "Ошибка данных: неверный email или короткий пароль!";
                    })
                } 

                
            };

            const signWithGoogle = () => {

            };

            return {
                email,
                password,
                checkpass,
                reg,
                signWithGoogle
            }
        },
        methods: {
            
            
            btn(){
                const reg = document.querySelector('.modal-reg');
                const log = document.querySelector('.modal');

                reg.style.cssText = `display: none;`;
                log.style.cssText = `display: block;`;
            },
            hide(event){
                const reg = document.querySelector('.modal-reg');
                if(event.target == reg)
                    reg.style.cssText = `display: none;`;
            }

        }

    }
</script>


<style scoped>
.modal-reg{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        background: rgba(143, 129, 129, 0.589);
        width: 100vw;
        height: 100vh;
        display: none;
    }
    .modal-content{
        position: relative;
        top: 15%;
        left: 35%;
        width: 30%;
        height: 55%;
        border-radius: 50px;
        background-color: #302975;
        padding: 50px;
        text-align: center;
    }
    form{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        position: relative;
        background-color: transparent;
        border: 2px solid #ffffff6c;
        padding: 10px 15px;
        border-radius: 25px;
        width: 70%;
        color: #fff;
        font-size: 16px;
        margin-bottom: 30px;
        transition: all .2s ease;
    }
    input:focus {
      border-color: #ffffff;
      outline: 0;
    }
    a{
        margin: 0;
        position: absolute;
    }

    .register{
        right: 40px;
        bottom: 40px;
    }
    .google{
        left: 40px;
        bottom: 40px;
    }
</style>