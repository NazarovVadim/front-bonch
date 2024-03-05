<template>
    <div class="app">
        <my-header>
            <my-link href="">Обо мне</my-link>
            <my-link href="">Портфолио</my-link>
            <my-link href="">Услуги</my-link>
            <my-link href="">Навыки</my-link>
            <my-link href="">Отзывы</my-link>
            <my-link href="">Контакты</my-link>
            <my-button>Войти</my-button>    
        </my-header>
        <div class="main">
            <div class="socials">
                <div class="icon"><img src="./components/imgs/inst.svg" alt="" srcset=""></div>
                <div class="icon"><img src="./components/imgs/tg.svg" alt="" srcset=""></div>
                <div class="icon"><img src="./components/imgs/vk.svg" alt="" srcset=""></div>
            </div>
            <div class="content">
                <h2 class="h2">Welcome My Portfolio</h2>
                <my-title>
                    Hello, I‘m Johan Deo <strong style="color: #FE461C;">Professional</strong> Designer.
                </my-title>
                <p>
                    Conveniently customize proactive web services for leveraged without 
                    continualliery aggregate fricctionle ou wellies richard.
                </p>
                <div class="btns">
                    <my-button>
                        Hire Me
                    </my-button>
                    <my-button>
                        Download CV
                    </my-button>
                </div>
            </div>
            <div class="design"></div>
        </div>
    </div>
</template>

<script>


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
    .main{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90vh;
        width: 100%;
    }
    .socials{
        display: flex;
        flex-direction: column;
        align-items: start; 
        padding: 0 50px;
        justify-content: space-between;
        width: 15%;
        height: 200px;
        user-select: none;
    }
    .icon{
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #24263B;
        border-radius: 4px;
        cursor: pointer;
        transition: all .2s ease;
        color: white;
    }
    .icon:hover{
        background-color: #3e4053;
        transform: translate(0, -2px);
    }
    .icon img{
        width: 20px;
    }
    .content{
        width: 35%;
    }
    .h2{
        font-family: "Public Sans", sans-serif;
        font-weight: 900;
        font-size: 16px;
    }
    p{
        font-family: "Public Sans", sans-serif;
        font-weight: 500;
        font-size: 16px;
        margin-top: 15px;
        width: 90%;
    }
    .btns{
        padding: 40px 0;
        width: 47%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .btn:nth-child(2){
        background-color: transparent;
        border: 1px solid white;
    }
    .design{
        width: 50%;
    }
</style>


