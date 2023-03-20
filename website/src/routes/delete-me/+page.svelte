<script>
    import { onMount } from 'svelte';

    let todoSubjectsReady = false;
    let todoSubjects = [
    {
            title_html: 'Make sure contracts are signed and uploaded to goldfoxdev-contracts',
            hints: [],
            todoItems: [
                { title: "Services Contract" },
            ]
        },
        {
            title_html: 'Modify anything with: <code class="text-red-900 font-medium bg-gray-200 px-[5px] py-[2px]">\\[</code> prefix',
            hints: [
                "Ctrl+Shift+F"
            ],
            todoItems: [
                { title: "Copyright" },
                { title: "Privacy Policy" },
                { title: "Terms and Conditions" },
                { title: "app.html" },
            ]
        },
    ];
    let completedTodos = [];

    onMount(async () => {
        for (const [sid, subject] of todoSubjects.entries()) {
            for (const [tid, todo] of subject.todoItems.entries()) {
                todo['id'] = `${sid}:${tid}`;
                todo['subjectOrder'] = sid;
                todo['taskOrder'] = tid;
                todo['name'] = `${todo.id}-${todo.title.replaceAll(' ', '-')}`;
                todo['element'] = undefined;
                todo['checked'] = false;
            }
        }
        // I tested it, this does ONLY run after the preceeding loops have fully completed.
        todoSubjectsReady = true;
	});

    function confetti(element) {
        const random = (v) => Math.random() * (v - 0) + 0;

        var c = document.createDocumentFragment();
        for (var i=0; i<100; i++) {
            var styles = 'transform: translate3d(' + (random(500) - 250) + 'px, ' + (random(200) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
                        background: hsla('+random(360)+',100%,50%,1);\
                        animation: bang 700ms ease-out forwards;\
                        opacity: 0';
            
            var e = document.createElement("i");
            e.classList.add('confetti');
            e.style.cssText = styles.toString();
            c.appendChild(e);
        }
        // document.body.appendChild(c);
        element.append(c);
    }
    
    function todoToggled(todo) {
        if (!todo.checked) {
            confetti(todo.element);
        }
    }
</script>

<section class="w-10/12 lg:w-8/12 mx-auto mt-8 lg:mt-16 bg-white text-slate-700 px-5 py-3 lg:px-12 lg:py-6">
    <h1 class="text-slate-900 font-medium text-2xl">Stuff Ya Need to Do!</h1>
    {#each todoSubjects as subject}
        <h2 class="font-medium text-lg mt-4">{@html subject.title_html}</h2>
        {#each subject.hints as hint}
            <p class="hint">{hint}</p>
        {/each}
        {#if todoSubjectsReady}
        <fieldset>
            <legend class="sr-only">To-Do Item List</legend>
            <ol class="mt-3">
                {#each subject.todoItems as todo}
                <li class="flex flex-col opacity-100 select-none">
                    <div class="flex gap-3">
                        <div on:click={todoToggled(todo)} bind:this={todo.element} class="flex h-6 items-center relative text-center">
                            <input id={todo.id} bind:checked={todo.checked} aria-describedby={todo.name} name={todo.id} type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-300 focus:ring-blue-300  transition-all ease-out">
                        </div>
                        <label for={todo.id} id={todo.name} class:line-through="{todo.checked}" class:text-slate-400="{todo.checked}" class="transition-all ease-out">{todo.title}</label>
                    </div>
                    {#if todo.hint}
                    <div class="flex">
                        <div class="w-16"></div>
                        <p class="hint">{todo.hint}</p>
                    </div>
                    {/if}
                </li>
                {/each}
            </ol>
        </fieldset>
        {:else}
        <span>Loading...</span>
        {/if}
    {/each}
</section>

<style lang="postcss">
    .fadeOut {
        animation: fadeOut 2s linear forwards;
    }
    @keyframes fadeOut {
        from {
            opacity: 1;
        } to {
            opacity: 0;
        }
    }
</style>
