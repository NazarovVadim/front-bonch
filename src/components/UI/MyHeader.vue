<template lang="">
    <header class="header">
            <my-link href="">Обо мне</my-link>
            <my-link href="">Портфолио</my-link>
            <my-link href="">Услуги</my-link>
            <my-link href="">Навыки</my-link>
            <my-link href="">Отзывы</my-link>
            <my-link href="">Контакты</my-link>
            <div v-if="!emailData">
                <my-button style="margin-right: 20px;" @click="loginOpen()">Войти</my-button>
                <my-button @click="registerOpen()">Зарегистрироваться</my-button>
            </div>
            <div v-else>
                <span> {{ emailData }} </span>
                <my-button @click="reset()">Выйти</my-button>
            </div>
    </header>
</template>
    
<script>
    import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
    import {ref, onMounted} from "vue"
    export default {
        name: 'my-header',
        props: ['emailData'],
        emits: ['update-email-data'],
        data(){
            return {
                
            }
        },
        setup(props, {emit}){

            const reset = () => {
                const auth = getAuth();

                signOut(auth)
                .then(()=>{
                    let emailNew = ref(props.emailData);
                    emailNew = "";
                    emit('update-email-data', emailNew.value);
                })
                .catch((error)=>{
                    console.log(error);
                })
                
                
            }

            return {
                reset
            }
        },
        methods: {
            loginOpen(){
                document.querySelector('.modal').style.cssText = `display: block;`
            },
            registerOpen(){
                document.querySelector('.modal-reg').style.cssText = `display: block;`
            },
            
        }
    }
</script>
    
<style scoped>
    .header{
        user-select: none;
        display: flex;
        justify-content: right;
        align-items: center;
        font-weight: 700;
        font-size: 16px;
        padding: 22px 15% 22px 22px;

    }
    span{
        margin-right: 15px;
    }
</style>
    
    