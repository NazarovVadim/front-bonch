<template>
    <my-container>
        <div class="portfolio">
            <my-subtitle>Портфолио</my-subtitle>
            <my-title>Некоторые из моих проектов</my-title>
            <div class="filter">
                <my-link>Все</my-link>
                <my-link>Мобильные</my-link>
                <my-link>Вебсайты</my-link>
                <my-link>Другое</my-link>
            </div>
            <div class="content">
                <div class="">
                    <h2>Mobile Mockup Design</h2>
                    <span>existing solutions offer to solve ...</span>
                </div>
                <div class="">
                    <h2>Mobile Mockup Design</h2>
                    <span>existing solutions offer to solve ...</span>
                </div>
                <div class="">
                    <h2>Mobile Mockup Design</h2>
                    <span>existing solutions offer to solve ...</span>
                </div>
                <div class="">
                    <h2>Mobile Mockup Design</h2>
                    <span>existing solutions offer to solve ...</span>
                </div>
                <div class="">
                    <h2>Mobile Mockup Design</h2>
                    <span>existing solutions offer to solve ...</span>
                </div>
                <div class="">
                    <h2>Mobile Mockup Design</h2>
                    <span>existing solutions offer to solve ...</span>
                </div>
            </div>
        </div>
    </my-container>
    
</template>

<script>
    export default {
        name: 'my-portfolio'
    }
</script>

<style scoped>
    .portfolio{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
    
    h1{
        font-weight: bold;
    }
    .filter{
        margin-top: 50px;
    }
    a{
        font-weight: 600;
        font-size: 16px;
    }

    .content{
        display: grid;
        width: 100%;
        height: 800px;
        margin-top: 36px;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        grid-template-areas:
            "A A A A   C C C C   E E E E"
            "A A A A   D D D D   E E E E"
            "B B B B   D D D D   F F F F";
        }
    .content div{
        background-image: linear-gradient(rgba(23, 45, 41, 0.2), rgba(23, 45, 41, 0.8)),url("../imgs/main-photo.jpg");
        border-radius: 8px;
        padding: 30px;
        display: flex;
        align-items:flex-start;
        justify-content: end;
        flex-direction: column;
        cursor: pointer;
        transition: all .2s ease;
    }
    .content div:hover{
        background-color: rgba(0,0,0,0.2);
    }
    .content div:nth-child(1){
        grid-area: A;
    }
    .content div:nth-child(2){
        grid-area: B;
    }
    .content div:nth-child(3){
        grid-area: C;
    }
    .content div:nth-child(4){
        grid-area: D;
    }
    .content div:nth-child(5){
        grid-area: E;
    }
    .content div:nth-child(6){
        grid-area: F;
    }
</style>