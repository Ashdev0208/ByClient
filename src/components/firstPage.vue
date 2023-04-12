<template>
    <div>
        <header>
            <div class="container">
                <Nav></Nav>
                <div class="banner row ai-c">
                    <div class="col-6">
                        <div class="title">
                            <h1>The <span class="orange">Smart</span><br>
                                Choice For <span class="orange">Future</span></h1>
                        </div>
                        <div class="text">
                            <p>Elearn is a global training provider based across the UK that specialises in accredited and
                                bespoke training courses. We crush the...</p>
                        </div>
                        <div class="findLocation">
                            <input type="text" placeholder="search for a location">
                            <button class="btn">Continue</button>
                            <img src="../assets/findIcon.svg" alt="">
                        </div>
                    </div>

                    <div class="col-6">
                        <img class="contain" src="../assets/banner-picture.svg" alt="">
                    </div>
                </div>
            </div>
        </header>
        <div class="course-info row ai-c js-b">
            <div class="card row ai-c js-b">
                <div class="img-info"><img src="../assets/infoIcon1.svg" alt=""></div>
                <div class="text-field">
                    <div class="title">
                        <h6>Learn The Latest Skills</h6>
                    </div>
                    <div class="text">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making
                            it over 2000 years old.</p>
                    </div>

                </div>
            </div>
            <div class="card row ai-c js-b">
                <div class="img-info"><img src="../assets/infoIcon2.svg" alt=""></div>
                <div class="text-field">
                    <div class="title">
                        <h6>Get Ready For a Career</h6>
                    </div>
                    <div class="text">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making
                            it over 2000 years old.</p>
                    </div>

                </div>
            </div>
            <div class="card row ai-c js-b">
                <div class="img-info"><img src="../assets/infoIcon3.svg" alt=""></div>
                <div class="text-field">
                    <div class="title">
                        <h6>Earn a Certificate</h6>
                    </div>
                    <div class="text">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making
                            it over 2000 years old.</p>
                    </div>

                </div>
            </div>
        </div>
        <section class="tracks">
            <div class="tracks-title section-title rel">
                <div class="img left"><img src="../assets/lamp.svg" alt=""></div>
                <div class="title">
                    <h2>Our Tracks</h2>
                </div>
                <div class="text">
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
                <div class="img right"><img src="../assets/curveShape.svg" alt=""></div>
            </div>
            <br><br><br>
            <div class="cards container row ai-c js-b">
                <div class="card" v-for="data in cardDatas" :key="data.id">
                    <div class="img"><img class="contain" :src="data.source" alt=""></div>
                    <br>
                    <div class="row js-b ai-c">
                        <div class="text" style="display: inline-block;">
                            {{ data.subtitle }}
                        </div>
                        <div class="stars row">
                            <div class="star" v-for="star in data.activeStar"><img src="../assets/activeStar.svg" alt="">
                            </div>
                            <div v-for="noneStar in 5 - data.activeStar" class="star"><img src="../assets/star.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="title">
                        <h6> {{ data.title }}</h6>
                    </div>
                    <div class="price">
                        <h2 class="orange">{{ data.price }}</h2>
                    </div>
                    <div class="row js-b lessonAbout">
                        <div class="row">
                            <div class="img"><img src="../assets/clock.svg" alt=""></div>
                            <div class="text">{{ data.watch }}</div>
                        </div>

                        <div class="row">
                            <div class="img"><img src="../assets/video.svg" alt=""></div>
                            <div class="text">{{ data.course }}</div>
                        </div>

                        <div class="row">
                            <div class="img"><img src="../assets/download.svg" alt=""></div>
                            <div class="text">{{ data.download }}</div>
                        </div>
                    </div>
                    <div class="button"><router-link :to="data.link"><button class="btn">join course</button></router-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="learn-about">
            <div class="bg"></div>
            <div class="container  row ai-c">
                <div class="col-6">
                    <div class="img container" style="padding-top: 80px;">
                        <img class="contain" src="../assets/picture.svg" alt="">
                    </div>
                </div>
                <div class="col-6">
                    <div class="title">
                        <h1>Premium <span class="orange">Learning</span> <br>
                            Experience</h1>
                    </div>
                    <div class="row ai-c" style="gap: 10px;margin-top: 46px">
                        <div class="img"><img src="../assets/heart.svg" alt=""></div>
                        <div class="text-field">
                            <div class="title">
                                <h5>Easily Accessible</h5>
                            </div>
                            <div class="text">
                                <p>Learning Will fell Very Comfortable With Courslab.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row ai-c" style="gap: 10px;margin-top: 34px">
                        <div class="img"><img src="../assets/puzzle.svg" alt=""></div>
                        <div class="text-field">
                            <div class="title">
                                <h5>Fun learning expe</h5>
                            </div>
                            <div class="text">
                                <p>Learning Will fell Very Comfortable With Courslab.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="description container">
            <div class=" section-title rel">
                <div class="title">
                    <h2>what's student</h2>
                </div>
                <div class="text">
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
            </div>
            <Carousel class="carousel" :items-to-show="3" :autoplay="2000" :wrap-around="true">
                <Slide v-for="(data, i) in boxData" :key="i">
                    <div class="box">
                        <div class="desc">{{ data.desc }}</div>
                        <div class="row ai-c js-b">
                            <div class="avatar"><img :src="data.source" alt=""></div>
                            <div class="text-field">
                                <div class="title" style="font-size: 17px;font-weight: 500;">
                                    {{ data.title }}
                                </div>
                                <div class="text" style="font-weight: 400;font-size: 13px;color: #8E8E8E;">
                                    {{ data.job }}
                                </div>

                            </div>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
        </section>
        <section class="teacher-info container">
            <div class="section-title rel">
                <div class="left">
                    <img src="../assets/curveShape2.svg" alt="">
                    <img class="effect" src="../assets/leftCircleShape.svg" alt="">
                </div>
                <div class="title">
                    <h2>what's student</h2>
                </div>
                <div class="text">
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
                <div class="right">
                    <img src="../assets/earth.svg" alt="">
                    <img class="effect" src="../assets/rightCircleShape.svg" alt="">
                </div>
            </div>
            <div class="teacher-box"></div>
        </section>
    </div>
</template>

<script setup>
import Nav from "./header.vue";
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const cardDatas = ref([{
    id: 0,
    source: new URL('../assets/tracks.png', import.meta.url),
    title: 'UI/UX Design for Beginners',
    subtitle: 'UI/UX Design',
    price: "98$",
    watch: "22hr",
    course: "34 Course",
    download: "50 sales",
    activeStar: 3,
    link: "/"
},
{
    id: 1,
    source: new URL('../assets/tracks 2.png', import.meta.url),
    title: 'UI/UX Design for Beginners',
    subtitle: 'UI/UX Design',
    price: "98$",
    watch: "22hr",
    course: "34 Course",
    download: "50 sales",
    activeStar: 5,
    link: "/"
}, {
    id: 2,
    source: new URL('../assets/tracks 3.png', import.meta.url),
    title: 'UI/UX Design for Beginners',
    subtitle: 'UI/UX Design',
    price: "98$",
    watch: "22hr",
    course: "34 Course",
    download: "50 sales",
    activeStar: 1,
    link: "/"
},]);

const boxData = ref([
    {
        desc: `“Teachings of the great explore of truth, 
            the master-builder of human happiness. 
            no one rejects,dislikes, or avoids pleasure 
            itself, pleasure itself”`,
        title: "Finlay Kirk",
        job: "Web Developer",
        source: new URL('../assets/teacher1.png', import.meta.url)
    },
    {
        desc: `“Complete account of the system and
                expound the actual Contrary to popular
                belief, Lorem Ipsum is not simply 
                random text. It has roots”`,
        title: "Dannette P. Cervantes",
        job: "Web Design",
        source: new URL('../assets/teacher2.png', import.meta.url)
    },
    {
        desc: `“Teachings of the great explore of truth, 
            the master-builder of human happiness. 
            no one rejects,dislikes, or avoids pleasure 
            itself, pleasure itself”`,
        title: "ashdev Kirk",
        job: "Web Developer",
        source: new URL('../assets/teacher1.png', import.meta.url)
    },
    {
        desc: `“There are many variations of passages
                of Lorem Ipsum available, but the majority
                have suffered alteration in some form,
                by injected humour”`,
        title: "Clara R. Altman",
        job: "UI&UX Design",
        source: new URL('../assets/teacher3.png', import.meta.url)
    },
    {
        desc: `“Teachings of the great explore of truth, 
            the master-builder of human happiness. 
            no one rejects,dislikes, or avoids pleasure 
            itself, pleasure itself”`,
        title: "0208 Kirk",
        job: "Web Developer",
        source: new URL('../assets/teacher1.png', import.meta.url)
    },
    {
        desc: `“Teachings of the great explore of truth, 
            the master-builder of human happiness. 
            no one rejects,dislikes, or avoids pleasure 
            itself, pleasure itself”`,
        title: "uzdev Kirk",
        job: "Web Developer",
        source: new URL('../assets/teacher1.png', import.meta.url)
    },
])

</script>

<style></style>