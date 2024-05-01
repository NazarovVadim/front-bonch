<template>
    <div class="about">
        <my-container>
            <div class="photo">
                <img src="../imgs/photo.svg" alt="" style="width: 500px;">
            </div>
            <div class="info">
                <my-subtitle>Обо мне</my-subtitle>
                <my-title>Вадим Назаров</my-title>
                <my-paragraph>
                    Меня зовут Вадим, frontend-разработчик. Я самоучка
                    и постоянно учусь чему-то новому. Сейчас изучаю Front-End (VueJS),
                    чтобы стать востребованным Веб-разработчиком. Ищу работу
                    разработчиком в компании, чтобы совершенствовать навыки и набираться
                    опыта работы в команде. Люблю писать сайты и приложения, решать
                    задачи с помощью JavaScript и других инструментов и получать результат.
                    Со временем хочу перейти в разработку, разрабатывать сайты и
                    клиентские веб-приложения
                </my-paragraph>
                <div class="data">
                    <div class="cols">
                        <my-paragraph>
                            Дата рождения: 05.04.2003
                        </my-paragraph>
                        <my-paragraph>
                            Сайт: www.nazarovvuejs.com
                        </my-paragraph>
                        <my-paragraph>
                            Образование: СПбГУТ
                        </my-paragraph>
                    </div>
                    <div class="cols">
                        <my-paragraph>
                            Почта: vadim-nazarov-web@yandex.ru
                        </my-paragraph>
                        <my-paragraph>
                            Фриланс: Возможен
                        </my-paragraph>
                        <my-paragraph>
                            GitHub: github.com/NazarovVadim
                        </my-paragraph>
                    </div>
                </div>
                <my-button @click="openLink">Скачать резюме</my-button>
            </div>
        </my-container>
    </div>
</template>

<script>
    export default {
        name: 'my-about',
        methods: {
            openLink() {
                window.open('https://drive.google.com/file/d/1JffOMV1TpfGgkHMtJM-lFgX23Hul-jeh/view?usp=sharing', '_blank');
            }
        }
    }
</script>

<style  scoped>
.about{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #24263B;
}
.photo{
    width: 45%;
}
.info{
    width: 55%;
}
.data{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}
.cols{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
}
</style>