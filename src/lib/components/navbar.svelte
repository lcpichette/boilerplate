<script>
    import Button from '$lib/components/button.svelte';
    import CTA from '$lib/components/cta.svelte';
    const email = 'melissa@foxcounselingservices.com';
    const phone = '(503) 867-7451';
    const logoUrl = 'https://s3.amazonaws.com/artifacts.foxcounselingservices.com/company-icon-removebg-preview.png';
</script>

<!-- Contact Banner -->
<div class="h-7 z-40 w-full left-0 top-0 fixed bg-white/60"></div>
<div class="h-7 z-50 flex justify-center fixed left-0 top-0 w-full flex bg-accent/20 backdrop-blur-lg">
    <!-- Content Margins -->
    <div class="site-margins w-full flex items-center justify-between text-[12px] sm:text-xs">
        <a class="py-2 hover-target flex gap-2 items-center" href={`mailto:${email}`}>
            <!-- Icon -->
            <div>
                <i class="fa-light fa-paper-plane text-accent-hovered"></i>
            </div>
            <span>{email}</span>
        </a>
        <a class="py-2 hover-target flex gap-2 items-center" href={`tel:${phone.replaceAll(/[\(\) -]/g, '')}`}>
            <!-- Icon -->
            <div>
                <i class="fa-light fa-mobile-button"></i>
            </div>
            <span>{phone}</span>
        </a>
    </div>
</div>
<div class='top-7 z-50 left-0 fixed flex w-full justify-center bottom-shadow bg-white/90 backdrop-blur-lg'>
    <!-- Content Margins -->
    <div class="site-margins w-full flex items-center justify-between">
        <!-- Traditional Bar -->
        <div class="flex h-cta gap-2 md:gap-8 items-center text-sm">
            <a href="/" class="py-1 box-border h-cta">
                <div class="w-[124px] h-full bg-contain bg-no-repeat bg-center " style={`background-image:url(${logoUrl})`}></div>
            </a>
            <Button href="/#about" style={'tertiary'}>About Us</Button>
            <Button href="/#locations" style={'tertiary'}>Find Us</Button>
        </div>
        <div class="hidden sm:inline">
            <CTA />
        </div>
    </div>
</div>

<!-- spacer -->
<div class="w-full h-0 mt-7"></div>

