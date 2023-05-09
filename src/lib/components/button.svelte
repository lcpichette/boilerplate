<script>
    export let callback = undefined;
    export let style = 'primary';
    export let href = '';

    const RIPPLE_DURATION_MS = 600;

    function handleClick(event) {
        createRipple(event);
        if (undefined) {
            setTimeout(() => {
                callback && callback();
            }, RIPPLE_DURATION_MS / 3);
        }
    }

    function createRipple(event) {
        const button = event.target;

        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `0px`;
        circle.style.animationDuration = `${RIPPLE_DURATION_MS}ms`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }
</script>

{#if callback}
    <button on:click={handleClick} class={style}><slot></slot></button>
{:else}
    <a {href} class={style}><slot></slot></a>
{/if}

<style lang="scss">
    .primary {
        @apply bg-accent text-white font-semibold;
    }
    .secondary {
        @apply bg-accent-light text-accent font-semibold;
    }
    .tertiary {
        @apply bg-black/0 text-black;
    }
    
    button, a, div {
        position: relative;
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex: none;
        order: 1;
        flex-grow: 0;
        
        @apply h-cta;
        box-sizing: border-box;
        
        overflow: hidden;
        transition: background 400ms;
        cursor: pointer;
        
        padding: 0 1rem;
        margin: 0;
        gap: 10px;
      
        line-height: 30px;
        font-size: 0.8rem;
        font-family: "Source Sans Pro", sans-serif;
    }
    .primary:hover {
        @apply bg-accent-hovered;
    }
    .secondary:hover {
        @apply bg-accent-light-hovered;
    }
    .tertiary:hover {
        @apply bg-black/[0.04];
    }

    :global(span.ripple) {
        position: absolute; /* The absolute position we mentioned earlier */
        border-radius: 50%;
        animation-name: ripple;
        animation-timing-function: linear;
        transform: scale(0);
    }
    :global(
        .primary span.ripple,
        .secondary span.ripple
    ) {
        background-color: rgba(255, 255, 255, 0.7);
    }
    :global(.tertiary span.ripple) {
        background-color: rgba(0, 0, 0, 0.2);
    }
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
</style>