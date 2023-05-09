<script>
    const address = 'https://www.google.com/maps/place/Fox+Counseling/@45.4984334,-122.4318699,17z/data=!3m1!4b1!4m6!3m5!1s0x549598f47a4d9d9d:0xa745d2d65a54947c!8m2!3d45.4984334!4d-122.4292896!16s%2Fg%2F11c1tk7kg9';
    const email = 'foxcounselingservices.com';
    const phone = '(503) 867-7451';
</script>

<section class="site-margins py-8 border-0 border-t-8 border-accent bg-secondary-accent text-white w-full h-auto">
    <div class="flex flex-col md:flex-row justify-between gap-8 w-full">
        <div class="flex flex-col gap-2 w-full md:w-2/3">
            <span class="font-semibold text-xl w-full">We Can Help With</span>
            <div class="flex flex-col md:flex-row md:gap-16 w-full mt-2">
                <div class="col-span-1">
                    <ol class="w-full">
                        <li>Addiction</li>
                        <li>Anger Management</li>
                        <li>Anxiety</li>
                        <li>Behavioral Issues</li>
                        <li>Chronic Illness</li>
                        <li>Coping Skills</li>
                    </ol>
                </div>

                <div class="col-span-1">
                    <ol class="w-full">
                        <li>Depression</li>
                        <li>Family Conflict</li>
                        <li> </li>
                        <li>Infidelity</li>
                        <li>OCD</li>
                        <li>Parenting</li>
                    </ol>
                </div>
                <div class="col-span-1">
                    <ol class="w-full">
                        <li>Personal Growth</li>
                        <li>Relationship Issues</li>
                        <li>Self Esteem</li>
                        <li>Trauma</li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/3">
            <span class="font-semibold text-xl w-full block">Contact Info</span>
            <div class="flex flex-col gap-2 mt-2">
                <a href={address} class="flex w-full flex-col">
                    <span>Fox Counseling</span>
                    <span>123 E. Powell Blvd., Ste. 209</span>
                    <span>Gresham, OR 97030</span>
                </a>
                <a href={`tel:${phone}`} class="hover-underline-white" style="display:inline-block;width:fit-content">
                    {phone}
                </a>
                <a href={`mailto:${email}`} class="hover-underline-white" style="display:inline-block;width:fit-content">
                    {email}
                </a>
            </div>

        </div>
    </div>
</section>
<section class="py-6 lg:py-4 flex flex-wrap justify-center gap-x-12 gap-y-2 items-center text-sm text-white/70 bg-secondary-accent-hovered">
    <a href="/copyright" class="order-1">© 2023 Fox Counseling Services. All Rights Reserved.</a>
    <span class="order-6 lg:order-2">Created by <a href="https://www.goldfoxdev.com" class="text-yellow-500">Gold Fox Dev</a></span>
    <a href="/terms-and-conditions" class="order-3">Terms & Conditions</a>
    <a href="/privacy-policy" class="order-4">Privacy Policy</a>
</section>