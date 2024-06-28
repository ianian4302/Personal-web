<script setup>
import ContactInfoBox from "./ContactInfoBox.vue";
</script>
<template>
    <div id="app">
        <div class="content">
            <ContactInfoBox />
        </div>
        <div class="photo">
            <img src="@/assets/your-photo.jpg" alt="Your Photo" />
        </div>
        <SkillList />
    </div>
</template>

<script></script>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    padding: 20px;
}

.content {
    text-align: center;
    z-index: 1;
}

.photo {
    position: absolute;
    top: 10%;
    right: 50% - 100px;
    z-index: 0;
    filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));
}

.photo img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    filter: blur(0);
    transition: filter 0.5s ease;
}

.photo img:hover {
    filter: blur(5px);
}
</style>
