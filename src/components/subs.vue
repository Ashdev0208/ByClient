
<script setup>

</script>

<template>
    <div>
        <section class="container">
            <div class="container">
                <div class="subscribe-banner">
                    <div class="center">
                        <div class="title">Subscribe to our newsletter</div>
                        <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eaque.</div>
                        <div class="inputDesign">
                            <input placeholder="email addres" type="text">
                            <button class="btn bg-orange">
                                send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<style scoped>
.subscribe-banner {
    background: url(../assets/subscribe.svg) center;
    background-size: 100% 100%;
    border-radius: 14px;
    height: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.center{
    width: 50%;
}

.inputDesign {
    width: 100%;
}

.inputDesign .btn {
    top: 2.5px;
}

</style>