<template lang="">
    <header class="header">
        <my-link href="">Обо мне</my-link>
            <my-link href="">Портфолио</my-link>
            <my-link href="">Услуги</my-link>
            <my-link href="">Навыки</my-link>
            <my-link href="">Отзывы</my-link>
            <my-link href="">Контакты</my-link>
            <my-button>Войти</my-button>
    </header>
</template>
    
<script>
    export default {
        name: 'my-header'
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
</style>
    
    