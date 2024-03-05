<template>
    <p class="p">
        <slot></slot>
    </p>

</template>

<script>
    export default {
        name: 'my-paragraph'
    }
</script>

<style>
    .p{
        font-family: "Public Sans", sans-serif;
        font-weight: 500;
        font-size: 16px;
        margin-top: 15px;
        width: 90%;
    }

</style>
