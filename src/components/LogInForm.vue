<template>
    <div class="modal" @click="hide">
        <div class="modal-content">
            <my-title> Войти </my-title>
            <form action="send">
                <input type="email" name="" id="mail" placeholder="Email..." v-model="email">
                <input type="password" name="" id="password" placeholder="Пароль..." v-model="password">
                <p v-if="errMsg" style="color: red; margin-bottom: 10px;">{{ errMsg }}</p>
                <my-button type="submit" @click.prevent="regBtn()">Войти</my-button>
                
            </form>
            <my-link href="#" class="register" @click.prevent="changeModal()"> Нет аккаунта? Зарегистрироваться </my-link>
            <my-link class="google" @click.prevent="signWithGoogle()">Войти через Google</my-link>

        </div>
    </div>
</template>
<script>
    import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
    import {ref} from "vue"

    export default {
        name: 'my-login-modal',
        data(){
            return{
            }
        },
        emits: ['update-email-data'],
        setup(props, {emit}){
            const email = ref("");
            const password = ref("");
            const errMsg = ref("");
            const regBtn = () => {
                const auth = getAuth();
                signInWithEmailAndPassword(auth, email.value, password.value)
                .then(data => {
                        let emailNew = auth.currentUser.email;
                        emit('update-email-data', emailNew);
                        document.querySelector('.modal').style.cssText = `display: none;`;
                    })
                    .catch((error) => {
                        switch (error.code) {
                            case "auth/invalid-email":
                                errMsg.value = "Неверный email!"
                                break;
                            case "auth/user-not-found":
                                errMsg.value = "Пользователя с такими данными не существует!"
                                break;
                            case "auth/wrong-password":
                                errMsg.value = "Неверный пароль!"
                                break;
                            default:
                                errMsg.value = "Неверный email или пароль!"
                                break;
                        }
                    })
            }

            const signWithGoogle = () => {
                const provider = new GoogleAuthProvider();
                signInWithPopup(getAuth(), provider)
                .then((result) => {
                    let emailNew = result.user.email;
                    emit('update-email-data', emailNew);
                    document.querySelector('.modal').style.cssText = `display: none;`;
                }).catch((err) => {
                    console.log(err);
                })
            };

            return {
                email,
                password,
                errMsg,
                signWithGoogle,
                regBtn
            }
        },
        methods: {

            hide(event){
                const log = document.querySelector('.modal');
                if(event.target == log)
                    log.style.cssText = `display: none;`;
            },
            changeModal(){
                document.querySelector('.modal').style.cssText = `display:none;`;
                document.querySelector('.modal-reg').style.cssText = `display:block;`;
            }
        }
        
        
    }
</script>

<style scoped>
    .modal{
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
        top: 25%;
        left: 35%;
        width: 30%;
        height: 45%;
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