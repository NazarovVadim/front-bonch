<template>
    <div>
        <div class="socials">
            <div class="icon"><img src="../imgs/inst.svg" alt="" srcset=""></div>
            <div class="icon"><img src="../imgs/tg.svg" alt="" srcset=""></div>
            <div class="icon"><img src="../imgs/vk.svg" alt="" srcset=""></div>
        </div>
        <div class="content">
            <h2 class="h2">Добро пожаловать в мое портфолио</h2>
            <my-title style="font-size: 64px;">
                Вадим Назаров,<strong style="color: #FE461C;"> VueJS</strong> разработчик
            </my-title>
            <my-paragraph>
                Разработка сайтов, SPA, мобильных приложений и веб-сервисов
            </my-paragraph>
            <div class="btns"> 
                <my-button>
                    Контакты
                </my-button>
                <my-button @click="openLink">
                    Скачать резюме
                </my-button>
            </div>
        </div>
        <div class="design">
            <div class="cols">
                <div class="icon"><img src="../imgs/vue.svg" alt="" srcset=""></div>
                <div class="icon"><img src="../imgs/figma.svg" alt="" srcset=""></div>
                
            </div>
            <div class="cols">
                <div class="icon"><img src="../imgs/js.svg" alt="" srcset=""></div>
                <div class="icon"><img src="../imgs/flutter.svg" alt="" srcset=""></div>
                
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-main',
        methods: {
            openLink() {
                window.open('https://drive.google.com/file/d/1JffOMV1TpfGgkHMtJM-lFgX23Hul-jeh/view?usp=sharing', '_blank');
            }
        }

    }
</script>

<style scoped>
    .main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90vh;
        width: 100%;
    }
.socials{
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
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
    position: relative;
    z-index: 2;
}
.content::before{
    content: "";
    position: absolute;
    width: 204px;
    height: 204px;
    background-color: rgba(187, 197, 211, 0.08);
    left: -15%;
    top: -25%;
    border-radius: 50%;
    z-index: 1;
}
.h2{
    font-family: "Public Sans", sans-serif;
    font-weight: 900;
    font-size: 16px;
    
}

.btns{
    padding: 40px 0;
    width: 53%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn:nth-child(2){
    background-color: transparent;
    border: 1px solid white;
}
.btn:nth-child(2):hover{
    background-color: rgba(255, 255, 255, 0.041);;
    border: 1px solid white;
}

.design{
    width: 60vh;
    height: 67%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #171929;
    background-image: linear-gradient(rgba(23, 45, 41, 0.2), rgba(23, 45, 41, 0.8)),url("../imgs/main-photo.jpg");
    background-size:contain;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin: auto;
}
.design .cols{
    display: flex;
    justify-content: space-between;
}
.design .cols:nth-child(1){
    padding: 0 0 0 -40px;
}
.design .icon{
    width: 80px;
    height: 80px;
    background-color: #17171b;
    border-radius: 8px;
    cursor:auto;
    transition: none;
}
.design .icon:hover{
    transform: none;
}
.design img{
    width: 50px;
}

</style>