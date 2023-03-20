<section class="h-screen w-screen flex flex-col gap-4 justify-center items-center">
    <h1 class="text-5xl text-center text-yellow-100 font-bold">
        Fresh Start!
    </h1>
    <a href="delete-me" class="button px-5 py-2 rounded font-medium bg-yellow-100 text-blue-300 text-xl">Start Here</a>
</section>


<style lang="postcss">
    :global(a.button) {
        position: relative;
        appearance: none;
        display: inline-block;
        width: auto;
        user-select: none;

        -webkit-transition: all .2s ease-out;
        -moz-transition: all .2s ease-out;
        -ms-transition: all .2s ease-out;
        -o-transition: all .2s ease-out;
        transition: all .2s ease-out;
    }
    :global(a.button::after) {
        position: absolute;
        left: 9px;
        bottom: -5px;
        content: "";
        border: 2px solid rgb(254 249 195);
        display: inline-block;
        border-left: 0;
        border-top: 0;
        border-bottom-right-radius: .25rem;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        -webkit-transition: all .2s ease-out;
        -moz-transition: all .2s ease-out;
        -ms-transition: all .2s ease-out;
        -o-transition: all .2s ease-out;
        transition: all .2s ease-out;
    }
    :global(a.button:not([disabled]):hover) {
        -webkit-transform: translate(6px, 6px);
        transform: translate(6px, 6px);
        background-color: rgb(59 130 246);
        color: rgb(219 234 254);
    }
    :global(a.button:not([disabled]):hover::after) {
        border: 0px solid rgb(59 130 246);
    }
</style>