<template>
    <div>
        <header>
            <div class="container">
                <Nav></Nav>
                <div class="banner row ai-c">
                    <div class="col-6">
                        <div class="title">
                            <h2><span class="orange">Kelajagingiz</span> uchun <span class="orange">iT</span> kasblarini
                                o'rganish uchun toʻgʻri tanlov.</h2>
                        </div>
                        <br>
                        <div class="text">
                            <p>Elearn is a global training provider based across the UK that specialises in accredited and
                                bespoke training courses. We crush the...</p>
                        </div>
                    </div>

                    <div class="col-6">
                        <img class="contain" src="../assets/banner-picture.svg" alt="">
                    </div>
                </div>
            </div>
        </header>
        <div class="course-info row ai-c js-b">
            <div class="card row ai-c js-b" v-for="(data, i) in info" :key="i">
                <div class="img-info"><img :src="data.picture" alt=""></div>
                <div class="text-field">
                    <div class="title white">
                        <h6>{{ data.title }}</h6>
                    </div>
                    <div class="text">
                        <p>{{ data.text }}</p>
                    </div>

                </div>
            </div>
        </div>
        <section class="tracks">
            <div class="tracks-title section-title rel">
                <div class="img left"><img src="../assets/lamp.svg" alt=""></div>
                <div class="title">
                    <h2>Bizning kurslarimiz</h2>
                </div>
                <div class="text">
                    <p>Barcha kurslar online holatda olib boriladi.</p>
                </div>
                <div class="img right"><img src="../assets/curveShape.svg" alt=""></div>
            </div>
            <br><br><br>
            <div class="cards container row ai-c js-b">
                <div class="card" v-for="(data, i) in cardDatas" :key="i">
                    <div class="img"><img class="contain" style="border-radius: 10px" :src="data.source" alt=""></div>
                    <br>
                    <div class="row js-b ai-c">
                        <div class="text" style="display: inline-block;">
                            {{ data.subtitle }}
                        </div>
                        <div class="stars row">
                            <div class="star" v-for="(star, i) in data.activeStar" :key="i"><img
                                    src="../assets/activeStar.svg" alt="">
                            </div>
                            <div v-for="(noneStar, i) in 5 - data.activeStar" class="star" :key="i"><img
                                    src="../assets/star.svg" alt="">
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
                    <hr style="border-style: dashed;border-color: #acacac;border-width: 1px">
                    <div class="row lessonAbout">
                        <div class="row">
                            <div class="img"><img src="../assets/clock.svg" alt=""></div>
                            <div class="text">{{ data.course }}</div>
                        </div>
                        <div class="row">
                            <div class="img"><img src="../assets/video.svg" alt=""></div>
                            <div class="text">{{ data.watch }}</div>
                        </div>
                        <div class="row">
                            <div class="img"><img src="../assets/download.svg" alt=""></div>
                            <div class="text">{{ data.download }}</div>
                        </div>
                    </div>
                    <div class="button"><button @click="redirects(i)" class="btn bg-orange">join course</button>
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
            <Carousel class="carousel" v-bind="CarouselSetting.settings" :breakpoints="CarouselSetting.breakpoints"
                :autoplay="3000" :wrap-around="true">
                <Slide v-for="(data, i) in boxData" :key="i">
                    <div class="box">
                        <div class="desc">{{ data.desc }}</div>
                        <div class="row ai-c js-b">
                            <div class="avatar"><img :src="data.source" alt=""></div>
                            <div>
                                <div class="title">
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
            <br><br>
            <br><br>
            <div class="cards row ai-c js-b">
                <div class="card" v-for="(data, i) in teacherDatas" :key="i">
                    <div class="img"><img class="contain" style="border-radius: 10px" :src="data.source" alt=""></div>
                    <br>
                    <div class="subtitle">
                        {{ data.name }}
                    </div>
                    <div class="text">
                        <p style="font-weight: 500;">{{ data.mail }}</p>
                    </div>
                    <div class="text" style="display: inline-block;margin: 20px 0;">
                        {{ data.desc }}
                    </div>
 
                    <div class="bottom row ai-c js-b">
                        <div class="text">
                            <h4 class="orange">{{ data.job }}</h4>
                        </div>
                        <div class="linksIcon row">
                            <div class="linkIcon">
                                <a :href="data.linkedInLink"><img src="../assets/instagram.svg" alt=""></a>
                            </div>
                            <div class="linkIcon">
                                <a :href="data.instagramLink"><img src="../assets/linkedin.svg" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container">
            <Subs />
        </section>

        <Footer></Footer>
    </div>
</template>

<script setup>
import Nav from "./header.vue";
import Subs from "./subs.vue";
import Footer from "./footer.vue";
import { ref, reactive } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import { useRouter } from 'vue-router'

let router = useRouter();

const cardDatas = ref([{
    id: 0,
    source: new URL('../assets/tracks.png', import.meta.url),
    title: 'UI/UX Design for Beginners',
    subtitle: 'UI/UX Design',
    price: "98$",
    watch: "72 + darslar",
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

const teacherDatas = ref([{
    desc: `“Teachings of the great explore of truth, 
            the master-builder of human happiness. 
            no one rejects,dislikes, or avoids pleasure 
            itself, pleasure itself”`,
    name: "Finlay Kirk",
    job: "Web Developer",
    source: new URL('../assets/teacher1.png', import.meta.url),
    linkedInLink: '/',
    instagramLink: '/',
    mail: 'easyExample@mail.blabla'
},
{
    desc: `“Teachings of the great explore of truth, 
            the master-builder of human happiness. 
            no one rejects,dislikes, or avoids pleasure 
            itself, pleasure itself”`,
    name: "Finlay Kirk",
    job: "Web Developer",
    source: new URL('../assets/teacher2.png', import.meta.url),
    linkedInLink: 'www.facebook.com',
    instagramLink: 'www.instagram.com',
    mail: 'easyExample@mail.blabla'
},
{
    desc: `“Teachings of the great explore of truth, 
            the master-builder of human happiness. 
            no one rejects,dislikes, or avoids pleasure 
            itself, pleasure itself”`,
    name: "Finlay Kirk",
    job: "Web Developer",
    source: new URL('../assets/teacher3.png', import.meta.url),
    linkedInLink: '/',
    instagramLink: '/',
    mail: 'easyExample@mail.blabla'
}]);

const info = ref([{
    picture: new URL('../assets/infoIcon1.svg', import.meta.url),
    title: "Learn The Latest Skills",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old`
},
{
    picture: new URL('../assets/infoIcon2.svg', import.meta.url),
    title: "Get Ready For a Career",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.`
}, {
    picture: new URL('../assets/infoIcon3.svg', import.meta.url),
    title: "Earn a Certificate",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.`
}]);

const images = ref([{
    img: new URL('../assets/clock.svg', import.meta.url)
},
{
    img: new URL('../assets/video.svg', import.meta.url)
},
{
    img: new URL('../assets/download.svg', import.meta.url)
},])

const routerName = ref(["hi", "hello", "double hello"])

let redirects = (num) => {
    router.push({ name: routerName.value[num] })
}

let CarouselSetting = reactive({
    settings: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
        991: {
            itemsToShow: 3,
            snapAlign: 'center',
        },
    },
})

</script>


<style></style>