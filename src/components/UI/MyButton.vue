<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style>
    .btn{
        cursor: pointer;
        user-select: none;
        border: none;
        background-color: #FE461C;
        border-radius: 4px;
        color: white;
        padding: 17px 30px;
        font-weight: 700;
        font-size: 16px;
        transition: all .2s ease;
    }
    .btn:hover{
        transform: translate(0,-2px);
    }
</style>



