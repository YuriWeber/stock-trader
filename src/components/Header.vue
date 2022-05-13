<template>
    <header>
        <div class="left">
            <span class="logo"><strong>STOCK</strong>TRADER</span>
            <NavBar />
        </div>
        <div class="right">
            <Controller />
        </div>
    </header>
</template>

<script>
import NavBar from './NavBar.vue'
import Controller from './Controller.vue'

export default {
    components: {
        NavBar,
        Controller
    }
}
</script>

<style scoped>
header {
    bottom: 0;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 1px 5px black;
}

span {
    font-size: 1.5rem;
    font-weight: 300;
}
strong {
    font-weight: 500;
}

.left {
    display: flex;
    align-items: center;
    margin-left: 10px;
}

</style>