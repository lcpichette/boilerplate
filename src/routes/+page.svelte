<script>
    import { goto } from '$app/navigation';
    import Footer from '$lib/components/footer.svelte';
    import Button from '$lib/components/button.svelte';
    import CTA from '$lib/components/cta.svelte';
    
    const address = 'https://www.google.com/maps/place/Fox+Counseling/@45.4984334,-122.4318699,17z/data=!3m1!4b1!4m6!3m5!1s0x549598f47a4d9d9d:0xa745d2d65a54947c!8m2!3d45.4984334!4d-122.4292896!16s%2Fg%2F11c1tk7kg9';
    const email = 'foxcounselingservices.com';
    const phone = '(503) 867-7451';
    
    // we index carousel cards from 1, not 0
    const CAROUSEL_WIDTH = '220';
    const CAROUSEL_WIDTH_UNITS = 'vw';
    const CAROUSEL_CARDS = 3;
    const CARD_GAP = '10';
    const CAROUSEL_CARD_WIDTH = (CAROUSEL_WIDTH - (CARD_GAP * (CAROUSEL_CARDS - 1))) / CAROUSEL_CARDS;
    let carousel;
    let carouselProgress = 1;
    
    function moveCarouselLeft() {
        if (carouselProgress === 1) {
            carouselProgress = CAROUSEL_CARDS;
        } else {
            carouselProgress--;
        }
        
    }
    function moveCarouselRight() {
        if (carouselProgress === CAROUSEL_CARDS) {
            carouselProgress = 1;
        } else {
            carouselProgress++;
        }
    }
    
    //map
    let container;
    let map;
    let zoom = 17;
    let center = {lat: 45.49844, lng: -122.42928};

    import { onMount } from 'svelte';

    onMount(async () => {
        map = new google.maps.Map(container, {
            zoom,
            center,
        });
        const icon = {
            url: "location-dot-solid.png", // url
            scaledSize: new google.maps.Size(34, 50),
        }
        new google.maps.Marker({
            position: center,
            map,
            icon,
        });
    });
</script>

<svelte:head>
    <script defer async
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7u_FljMJJVTMOhk7JPF4aEh9xojw37nQ">
    </script>
</svelte:head>

<section id="hero" class="h-screen w-full md:bg-no-repeat md:bg-cover md:bg-hero-pattern-laptop">
    <div class="grid grid-cols-12 w-full h-[80vh]">
        <div class="col-span-12 sm:col-span-10 md:col-span-9 lg:col-span-8 xl:col-span-6 bg-white flex flex-col justify-center site-margins box-border sm:pr-20 md:pr-48">
            <h3 class="text-accent font-bold">Counseling</h3>
            <h2 class="font-bold text-5xl laptop:text-6xl mt-1 mb-4">Your<br><span class="text-accent">mental health</span><br> matters</h2>
            <p class="text-sm">We all get stuck in a rut sometimes. It takes strength to ask for help out.</p>
            <div class="mt-7">
                <CTA />
            </div>
        </div>
    </div>
    <section id="banner" class="drop-shadow-lg text-white font-semibold relative bg-accent bg-banner-mobile md:bg-banner-laptop bg-cover bg-no-repeat h-[160px] w-full relative select-none">
        <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div class="site-margins  text-center md:text-start absolute top-0 left-0 w-full h-full bg-accent/50 flex flex-col justify-center items-center">
            <span class="text-xl">"Life is not the breaths you take,
but the moments that take your breath away."</span>
            <span class="text-base text-white/90">~Shin Xion~</span>
        </div>
    </section>
</section>

<section id="about" class="py-20 w-full h-50 site-margins">
    <div class="w-full grid grid-cols-12">
        <div class="flex flex-col col-span-12 md:col-span-7 gap-4">
            <h3 class="uppercase text-accent">about us</h3>
            <div>
                <h2 class="text-xl text-accent-hovered">Melissa Fox, MA, MFT, LPC, LMHC</h2>
                <p class="mt-1">
                    I’m remarried with three children and enjoying the successes, and struggles, that comes with blending families. I enjoy reading, gardening, and playing Xbox with my children. As a family, we like to take time out of our busy schedules and go fishing for crappie in Eastern Oregon.
                </p>
            </div>
            
            <div>
                <h4 class="text-lg text-accent-hovered">Certificates & Licenses</h4>
                <ul class="list-disc pl-4 mt-1">
                    <li>Licensed Professional Counselor - Oregon</li>
                    <li>Licensed Mental Health Counselor - Washington</li>
                </ul>
            </div>
            
            <div class="mt-8 flex gap-6">
                <Button href={"https://foxcounseling.clientsecure.me/"}>Request Appointment</Button>
                <Button href="/contact" style={'secondary'}>Contact Us</Button>
            </div>
        </div>
        <div class="md:col-span-1"></div>
        <div class="bg-headshot h-auto md:col-span-4 w-full bg-contain bg-center bg-no-repeat"></div>
    </div>
</section>

<section id="methodologies" class="py-20 bg-secondary-accent text-white site-margins">
    <h3 class="uppercase">methodologies</h3>
    <div class="carousel-wrapper mt-3 relative h-[450px] md:h-[300px] lg:h-[240px] 2xl:h-[205px] overflow-x-hidden">
        <div bind:this={carousel} style={`gap:${CARD_GAP}${CAROUSEL_WIDTH_UNITS};width:${CAROUSEL_WIDTH}${CAROUSEL_WIDTH_UNITS};left:-${(((carouselProgress - 1) * ((CAROUSEL_WIDTH - ((CAROUSEL_CARDS - 1) * CARD_GAP))) / CAROUSEL_CARDS)) + ((carouselProgress - 1) * CARD_GAP)}${CAROUSEL_WIDTH_UNITS}`} class="h-full flex absolute left-0 top-0">
            <div style={`width:${CAROUSEL_CARD_WIDTH}${CAROUSEL_WIDTH_UNITS}`} class="h-full pb-6 flex flex-col justify-between">
                <div class="w-full">
                    <h4 class="font-title text-xl">Emotionally Focused Therapy</h4>
                    <p class="mt-2 mb-6">
                        Emotionally Focused Therapy (EFT) is a well-known humanistic approach to psychotherapy formulated in the 1980’s and developed in tandem with the science of adult attachment, a profound developmental theory of personality and intimate relationships
                    </p>
                </div>
                
                <div>
                    <a href="https://iceeft.com/what-is-eft/" class="hover-underline-white">Learn More</a>
                </div>
            </div>

            <div style={`width:${CAROUSEL_CARD_WIDTH}${CAROUSEL_WIDTH_UNITS}`} class="h-full pb-6 flex flex-col justify-between">
                <div class="w-full">
                    <h4 class="font-title text-xl">Gottman Method</h4>
                    <p class="mt-2 mb-6">
                        The goals of Gottman Method Couples Therapy are to disarm conflicting verbal communication; increase intimacy, respect, and affection; remove barriers that create a feeling of stagnancy; and create a heightened sense of empathy and understanding within the context of the relationship.
                    </p>
                </div>
                
                <div>
                    <a href="https://www.gottman.com/about/research/faq/" class="hover-underline-white">Learn More</a>
                </div>
            </div>

            <div style={`width:${CAROUSEL_CARD_WIDTH}${CAROUSEL_WIDTH_UNITS}`} class="h-full pb-6 flex flex-col justify-between">
                <div class="w-full">
                    <h4 class="font-title text-xl">Interpersonal Neurobiology</h4>
                    <p class="mt-2 mb-6">
                        Interpersonal neurobiology seeks the similar patterns that arise from separate approaches to knowledge. This interdisciplinary approach invites all branches of science and other ways of knowing to come together and find the common principles from within their often disparate approaches to understanding human experience
                    </p>
                </div>
                
                <div>
                    <a href="https://www.youtube.com/watch?v=JeGBhVm13mc&ab_channel=Dr.DanSiegel" class="hover-underline-white">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-center gap-4">
        <button on:click={() => moveCarouselLeft()} class="w-12 h-12 bg-accent-light hover:bg-accent-light-hovered text-accent text-lg flex justify-center items-center transition-all duration-[400ms]">
            <i class="fa-light fa-arrow-left"></i>
        </button>
        
        <div class="w-40 h-1 bg-accent-light/30 relative">
            {#if carousel}
            <div style={`width:${100 * (carouselProgress / CAROUSEL_CARDS)}%`} class="absolute top-0 left-0 h-1 bg-accent-light"></div>
            {/if}
        </div>
        <button on:click={() => moveCarouselRight()} class="w-12 h-12 bg-accent-light hover:bg-accent-light-hovered text-accent text-lg flex justify-center items-center transition-all duration-[400ms]">
            <i class="fa-light fa-arrow-right"></i>
        </button>
    </div>
</section>

<section id="locations" class="bg-white site-margins pt-10 pb-12 md:pb-24">
    <h3 class="uppercase text-accent text-center md:text-start">visit us at</h3>
    <h2 class="text-accent-hovered text-3xl text-center md:text-start">Our Locations</h2>
    <div class="flex flex-col md:grid md:grid-cols-4 md:items-center gap-6 md:gap-2 mt-8">
        <div class="h-full col-span-1 flex flex-col items-center md:items-start gap-8">
            <span class="text-xl tracking-wide">Gresham, OR</span>
            <div class="w-fit">
                <Button href={"https://foxcounseling.clientsecure.me/"}>Request Appointment</Button>
            </div>
        </div>
        <div class="h-full flex flex-col md:flex-row md:col-span-3 w-full px-10 xl:px-20 flex justify-between">
            <a href={address} class="p-4 h-full flex flex-col gap-4 items-center justify-between h-full text-center">
                <div class="p-4 rounded-[100%] border-2 border-accent-light-hovered bg-accent flex justify-center items-center">
                    <i class="fa-solid fa-location-dot text-white"></i>
                </div>
                <span class="h-12 flex flex-col underline">
                    123 E Powell Blvd #209,<br>
                    Gresham, OR 97030
                </span>
            </a>
            <a href={`mailto:${email}`} class="p-4 h-full flex flex-col gap-4 items-center justify-between h-full text-center">
                <div class="p-4 rounded-[100%] border-2 border-accent-light-hovered bg-accent flex justify-center items-center">
                    <i class="fa-solid fa-paper-plane text-white"></i>
                </div>
                <span class="h-12 flex flex-col break-words w-full underline">
                    melissa@<br>
                    {email}
                </span>
            </a>
            <a href={`tel:${phone}`} class="p-4 h-full flex flex-col gap-4 items-center justify-between h-full text-center">
                <div class="p-4 rounded-[100%] border-2 border-accent-light-hovered bg-accent flex justify-center items-center">
                    <i class="fa-solid fa-mobile-button text-white"></i>
                </div>
                <span class="h-12 flex flex-col break-words underline">
                    {phone}
                </span>
            </a>
        </div>
    </div>
</section>

<section class="bg-white w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
    <div bind:this={container} class="col-span-1 xl:col-span-2 w-full h-[350px] md:h-[500px]">
        
    </div>
    <div class="block xl:hidden col-span-1">
        <div style="background-image:url('./building-image-lg.png')" class="bg-no-repeat bg-center bg-cover w-full h-full">

        </div>
    </div>
    <div class="hidden xl:block col-span-1">
        <div style="background-image:url('./building-image-lg.png')" class="bg-no-repeat bg-center bg-cover w-full h-full">

        </div>
    </div>
    
</section>

<Footer />

<style lang="scss">
  ol {
    @apply w-full;
    
    li {
      @apply block;
    }
  }
    
</style>