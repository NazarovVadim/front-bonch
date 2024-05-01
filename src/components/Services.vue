<template>
    <div class="services">
        <my-container>
            <div class="service">
                <my-subtitle>Услуги</my-subtitle>
                <my-title>Изготовка решений</my-title>
                <div class="cards">
                    <div class="card">
                        
                    </div>
                </div>
            </div>
        </my-container>
    </div>
</template>

<script>
    export default {
        name: 'my-services'
    }
</script>

<style scoped>
    .service{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
    h1{
        font-weight: bold;
    }
    .card{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>