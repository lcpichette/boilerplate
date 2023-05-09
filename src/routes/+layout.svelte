<script>
    import Navbar from '$lib/components/navbar.svelte';
    import "../app.scss";
</script>

<main class="h-screen w-screen flex justify-center relative">
    <!-- Section Wrapper -->
    <div class="flex flex-col w-full relative">
        <Navbar />
        <slot />
    </div>
</main>