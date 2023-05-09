<script>
    import Footer from '$lib/components/footer.svelte';
</script>

<div style="position: absolute; left: -5000px;">
    <input type="checkbox" name="incredible_ruby_matte_safe" value="1" tabindex="-1" autocomplete="no">
</div>

<div class="relative max-w-screen px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute z-0 top-1/2 right-20 w-[240px] h-[240px] bg-secondary-accent blur-3xl opacity-5"></div>
    <div class="absolute z-0 top-0 right-0 w-[240px] h-[240px] bg-secondary-accent blur-3xl opacity-5"></div>
    <div class="absolute z-0 top-[140px] left-[180px] w-[180px] h-[180px] bg-secondary-accent blur-3xl opacity-10"></div>
    <div class="absolute z-0 bottom-0 left-1/4 w-[200px] h-[200px] lg:w-[440px] lg:h-[440px] bg-accent-light-hovered blur-3xl opacity-20"></div>
    
    <div class="mx-auto max-w-2xl text-center">
        <div class="absolute z-0 top-0 left-[30px] sm:left-[34vw] w-[280px] h-[280px] lg:w-[500px] lg:h-[280px] bg-accent blur-3xl opacity-20"></div>
        
        <h2 class="text-3xl font-bold tracking-tight text-accent sm:text-4xl">Contact Us</h2>
        <p class="mt-2 text-lg leading-8 text-[#121212]/60">We are here to help, and appreciate your time</p>
    </div>
    <form action="https://app.99inbound.com/api/e/y9_xnyj_" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class=" z-10">
                <label for="first-name" class="block text-sm font-semibold leading-6 text-[#121212]/80">First name</label>
                <div class="mt-2.5">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-accent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent/60 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class=" z-10">
                <label for="last-name" class="block text-sm font-semibold leading-6 text-[#121212]/80">Last name</label>
                <div class="mt-2.5">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-accent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent/60 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-2 z-10">
                <label for="email" class="block text-sm font-semibold leading-6 text-[#121212]/80">Email</label>
                <div class="mt-2.5">
                    <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-accent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent/60 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-2 z-10">
                <label for="phone-number" class="block text-sm font-semibold leading-6 text-[#121212]/80">Phone number</label>
                <div class="relative mt-2.5">
                    <div class="absolute inset-y-0 left-0 flex items-center">
                        <label for="country" class="sr-only">Country</label>
                        <select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-accent/60 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm">
                            <option>US</option>
                            <option>CA</option>
                            <option>EU</option>
                        </select>
                        <svg class="pointer-events-none absolute right-3 top-0 h-full w-5 text-accent/60" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"></svg>
                    </div>
                    <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-accent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent/60 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6">
                </div>
            </div>
            <div class="sm:col-span-2 z-10">
                <label for="message" class="block text-sm font-semibold leading-6 text-[#121212]/80">Message</label>
                <div class="mt-2.5">
                    <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-accent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent/60 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"></textarea>
                </div>
            </div>
        </div>
        <div class="mt-10">
            <button type="submit" class="block w-full rounded-md bg-accent px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-accent-hovered focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Let's talk</button>
        </div>
    </form>
</div>

<Footer />

