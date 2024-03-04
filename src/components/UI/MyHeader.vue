<template lang="">
    <header class="header">
        <slot></slot>
    </header>
</template>
    
<script>
    export default {
        name: 'my-header'
    }
</script>
    
<style scoped>
    .header{
        background-color: #24263B;
        display: flex;
        justify-content: right;
        align-items: center;
        font-weight: 700;
        font-size: 16px;
        padding: 22px 15% 22px 22px;

    }
</style>
    
    