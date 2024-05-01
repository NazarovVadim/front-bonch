<template>
    <my-container>
        <div class="portfolio">
            <my-subtitle>Портфолио</my-subtitle>
            <my-title>Некоторые из моих проектов</my-title>
            <div class="filter">
                <my-link class="active">Все</my-link>
                <my-link>Мобильные</my-link>
                <my-link>Вебсайты</my-link>
                <my-link>Другое</my-link>
            </div>
            <div class="content">
                
                <div class="card-portfolio" v-for="card in cards" :key="card.id" :style="card.style" @click="openLink(card.url)" style="position: relative; transition: all .2s ease;" >
                    <h2>{{ card.title }}</h2>
                    <span>{{ card.subtitle }}</span>
                    <img  :src="getUrl(card.pic)" style=" position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: -1; border-radius: 8px;" />
                </div>

                
            </div>
        </div>
        <div class=""></div>   
    </my-container>
    
</template>

<script>
    
    export default {
        name: 'my-portfolio',
        methods: {
            getUrl(pic) {
                return require('../imgs/' + pic);
            },
            openLink(url){
                window.open(url, '_blank');
            }
        },
        data() {
            return {
                cards: [
                {
                    id: 1,
                    style: {
                        gridArea: 'A',
                        background: 'linear-gradient(rgba(23, 45, 41, 0.2), rgba(23, 45, 41, 0.8))'
                    },
                    pic: 'relax.png',
                    url: 'https://github.com/NazarovVadim/Relax-Live',
                    title: 'Relax Live',
                    subtitle: 'Сайт строительной компании'
                },
                {
                    id: 2,
                    style: {
                        gridArea: 'B',
                        background: 'linear-gradient(rgba(23, 45, 41, 0.2), rgba(23, 45, 41, 0.8))'
                    },
                    pic: '3dglo.png',
                    url: 'https://github.com/NazarovVadim/3dgloBuild',
                    title: '3D Glo Build',
                    subtitle: 'Сайт компании 3D моделирования'
                },
                {
                    id: 3,
                    style: {
                        gridArea: 'C',
                        background: 'linear-gradient(rgba(23, 45, 41, 0.2), rgba(23, 45, 41, 0.8))'
                    },
                    pic: 'marvel.png',
                    url: 'https://github.com/NazarovVadim/marvel-s_characters',
                    title: "Marvel's Characters",
                    subtitle: 'Сайт по персонажам КВМ'
                },
                {
                    id: 4,
                    style: {
                        gridArea: 'D',
                        background: 'linear-gradient(rgba(23, 45, 41, 0.2), rgba(23, 45, 41, 0.8))'
                    },
                    pic: 'delivery.png',
                    url: 'https://github.com/NazarovVadim/delivery_food',
                    title: 'Delivery Food',
                    subtitle: 'Сайт доставки еды'
                },
                {
                    id: 5,
                    style: {
                        gridArea: 'E',
                        background: 'linear-gradient(rgba(23, 45, 41, 0.2), rgba(23, 45, 41, 0.8))'
                    },
                    pic: 'starwars.png',
                    url: 'https://github.com/NazarovVadim/star_wars',
                    title: 'Star Wars',
                    subtitle: 'Сайт анонс'
                },
                {
                    id: 6,
                    style: {
                        gridArea: 'F',
                        background: 'linear-gradient(rgba(23, 45, 41, 0.2), rgba(23, 45, 41, 0.8))',

                    },
                    pic: 'wheather.png',
                    url: 'https://github.com/NazarovVadim/WeatherSpb',
                    title: 'Wheather SPB',
                    subtitle: 'Сайт погоды СПб'
                },
                 
                ]
            }
        }
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
    .active{
        color: #FE461C;
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
        background-image: linear-gradient(rgba(23, 45, 41, 0.2), rgba(23, 45, 41, 0.8));
        border-radius: 8px;
        padding: 30px;
        display: flex;
        align-items:flex-start;
        justify-content: end;
        flex-direction: column;
        cursor: pointer;
        transition: all .3s ease;
    }
    .card-porfolio span{
        opacity: .2;
        transition: all .2s ease;

    }
    .card-porfolio h2{
        opacity: .2;
        transition: all .2s ease;
    }

    .content div:hover{
        background-image: linear-gradient(rgba(23, 45, 41, 0), rgba(23, 45, 41, 0.8));
        transform: translateY(-5px);

    }
    .card-porfolio:hover span{
        opacity: 1;
    }
    .card-porfolio:hover h2{
        opacity: 1;
    }
    
</style>