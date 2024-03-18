<template>
    <div class="test">
        <div class="contact_field">
            <div class="conf_field">
                <div class="conf_inf">陳文彥 WEN-YEN CHEN</div>
                <div class="conf_inf">phone : 0966284266</div>
                <div class="conf_inf">email : ianian4302@gmail.com</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.test {
    padding-top: 15%;
}

.parent {
    display: flex;
    justify-content: center; /* 水平置中 */
    align-items: center; /* 垂直置中 */
    background: gray;
    width: 100%;
    height: 300px;
}
.child {
    background: blue;
    width: 100px;
    height: 100px;
}

.contact_field {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    
    color: black;
    white-space: nowrap;
    margin: 0 20% 0;
    border-radius: 10px;
    height: 10%;
    backdrop-filter: blur(2px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    padding: 60px 250px;
    width: auto;
}
.conf_inf {
    color: black;
}
</style>
