<script setup>
import Sidebar from "./components/SideBar.vue";
import ContactMe from "./components/ContactMe.vue";
</script>

<template>
    <main>
        <header></header>
        <body>
            <ContactMe />
        </body>
        <Sidebar />
    </main>
</template>

<style scoped>

main {
    min-height: 100vh;
    background: url("./assets/background_1.png") no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
