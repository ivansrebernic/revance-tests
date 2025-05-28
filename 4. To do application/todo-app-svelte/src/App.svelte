<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Completed from "./assets/happy.svg";
  import Uncompleted from "./assets/sad.svg";
  import "./app.css";

  const today = new Date();
  const month = $derived(today.toLocaleString("default", { month: "long" }));
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const fullDate = $derived(today.toLocaleDateString("en-US", options));
  let input = $state("");
  let todos = $state([{ id: 0, title: "Hi" }]);
  let lastId = $state(0);
  function addTodo() {
    if (input == "") return;
    lastId++;
    const todo = {
      id: lastId,
      title: input,
      completed: false,
    };

    input = "";
    todos = [...todos, todo];
  }
  function setCompleted(id, completed) {
    const todo = todos[id];
    let updatedTodo = { ...todo, completed: completed };
    todos[id] = updatedTodo;
  }
</script>

<main class="">
  <div class="bg-white shadow-lg">
    <div
      class="flex flex-col justify-center items-center space-y-[10px] pt-[2em] pb-[2em] pr-[4em] pl-[4em]"
    >
      <h1 class="text-[#5a626f] text-[42px] font-bold">{month}</h1>
      <h4 class="text-[#acb3dd] font-bold">{fullDate}</h4>
    </div>

    <div
      class="bg-red-200 border-4 border-[#f5f5fc] height-[6px] w-[100%]"
    ></div>
    <div class="grid gap-[8px] p-[1em]">
      {#each todos as item (item.id)}
        <div
          class=" {item.completed
            ? 'line-through text-gray-400'
            : ''} w-full flex space-between items-center font-light transition-all"
        >
          <span
            class=" {item.completed ? 'dashed' : ''} space-between flex w-full"
          >
            {item.title}
          </span>

          <button
            onclick={(e) => {
              setCompleted(item.id, !item.completed);
            }}
            class="cursor-pointer"
          >
            {#if item.completed}
              <img src={Completed} alt="finished todo" />
            {:else}
              <img src={Uncompleted} alt="finished todo" />
            {/if}
          </button>
        </div>
      {/each}

      <form onsubmit={(e) => e.preventDefault()} action="">
        <div
          class="flex p-[12px] w-full h-[48px] text-black mt-[2em] border-[#acb3dd7c] border-solid border-1"
        >
          <input
            class="placeholder:text-[#acb3dd] outline-0"
            type="text"
            placeholder="Add Task"
            bind:value={input}
          />
        </div>
        <button
          type="submit"
          onclick={(e) => {
            addTodo();
          }}
          class="bg-green-500 px-[3rem] cursor-pointer hover:text-green-500 py-[0.5rem] rounded-full font-bold hover:bg-white text-white shadow-sm translate-y-[90%] border-0 transition"
          >Add</button
        >
      </form>
    </div>
  </div>
</main>

<style>
</style>
