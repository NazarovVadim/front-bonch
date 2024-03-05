<template>
    <a href="#" v-on:click="link">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: 'my-link',
        methods: {
            link(e) {
                e.preventDefault()
                console.log(e.currentTarget.href)
                // http://localhost:8080/login
            }
        },
    }
</script>

<style>
    a{
        margin-right: 30px;
        color: white;
        text-decoration: none;
        transition: all .2s ease;
    }
    a:hover{
        color: #FE461C;

    }
</style>


