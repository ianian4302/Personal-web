<script setup>
import ContactInfoBox from "./components/ContactInfoBox.vue";
import SkillList from "./components/SkillList.vue";
</script>

<template>
    <body>
        <main>
            <header></header>
            <div class="content">
                <div class="photo">
                    <img src="@/assets/your-photo.jpg" alt="Your Photo" />
                </div>
                <ContactInfoBox />
                <div class="skill"><SkillList /></div>
            </div>
        </main>
    </body>
</template>

<style scoped>
body{
    
}
main {
    min-height: 100vh;
    background: url("./assets/background_1.png") no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.photo {
    margin-bottom: 20px;
    filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));
}

.photo img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
}

.skill {
    margin-top: 5%;
}
</style>
