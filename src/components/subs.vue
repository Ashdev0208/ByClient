
<script setup>

</script>

<template>
    <section class="container">
        <div class="subscribe-banner rel container">
            <div class="left top">
                <img src="../assets/doubleCircleSHape.svg" alt="">
            </div>
            <div class="right top">
                <img src="../assets/doubleCircleSHape.svg" alt="">
            </div>

            <div class="left bottom">
                <img src="../assets/curvearrow.svg" alt="">
            </div>
            <div class="right bottom">
                <img src="../assets/lamp.svg" alt="">
            </div>
            <div class="center rel">
                <div class="title white">Subscribe to our newsletter</div>
                <div class="text white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eaque.</div>

            </div>
        </div>
    </section>
</template>


<style scoped>
.subscribe-banner {
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 480px;
    background: var(--primary);
    overflow: hidden;
}

.center {
    width: 50%;
}

.top {
    top: -20%;
}

.left {
    left: -10%;
}

.right {
    right: -10%;
}

.right img,
.left img {
    user-select: none;
    pointer-events: none;
}

.left.bottom {
    top: 60%;
    left: 5%;
}

.right.bottom {
    top: 60%;
    right: 5%;
}

.bottom img {
    width: 110px;
}

@media only screen and (max-width: 567px) {
    .right.top img,
    .left.top img {
        width: 190px !important;
    }
}
</style>