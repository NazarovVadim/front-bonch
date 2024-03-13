<template>
    <div class="subtitle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'my-subtitle'
    }
</script>

<style scoped>
.subtitle{
    background-color: #24263B;
    border-radius: 4px;
    padding: 12px 14px;
    box-shadow: 0 0 24px rgba(15,16,24,.42);
    display: inline-block;
    user-select: none;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 20px;
}
</style>