<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Completed from "./assets/happy.svg";
  import Uncompleted from "./assets/sad.svg";

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
    if(input == "") return
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

<main class="container">
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">{month}</h1>
      <h4 class="card-subtitle">{fullDate}</h4>
    </div>

    <hr class="card-divider" style="width: 100%;" />
    <div class="card-body">

      {#each todos as item (item.id)}
        <div class=" {item.completed ? 'completed-todo' : ''} todo-item">
          <span>
            {item.title}
          </span>

          <button
            onclick={(e) => {
              setCompleted(item.id, !item.completed);
            }}
            class="toggle-button"
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
        <div class="task-input">
          <input type="text" placeholder="Add Task" bind:value={input} />
        </div>
        <button
          type="submit"
          onclick={(e) => {
            addTodo();
          }}
          class="add-button">Add</button
        >
      </form>
    </div>
  </div>
</main>

<style>
  .container {
  }

  .card {
    background-color: white;
    box-shadow: 3px 3px 5px 1px lightgray;
  }

  .completed-todo {
    transition: all 0.25s;
  }
  .completed-todo span {
    text-decoration: line-through;
    color: lightgray;
  }
  .completed-todo img {
    filter: invert(54%) sepia(87%) saturate(942%) hue-rotate(106deg)
      brightness(94%) contrast(101%) !important;
  }
  .toggle-button {
    background-color: transparent;
    padding: 0;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  .add-button {
    background-color: #00ce6a;
    color: white;
    border-radius: 32px;
    box-shadow: 1px 1px 1px lightgray;
    font-weight: 800;
    min-width: 120px;
    transform: translate(0, 90%);
    outline: none;
    border: none;
    transition: all 0.25s;
  }
  .add-button:hover {
    background-color: white;
    color: #00ce6a;
  }
  .todo-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 300;
    transition: all 0.25s;
  }
  .todo-item img {
    filter: invert(96%) sepia(3%) saturate(1739%) hue-rotate(177deg)
      brightness(83%) contrast(86%);
  }
  .card-body {
    display: grid;
    gap: 8px;
    padding: 1em;
        
  }
  .card-title {
    color: #5a626f;
  }
  .card-subtitle {
    color: #acb3dd;
  }
  .card-divider {
    background-color: #f5f6fa;
    border: none;
    height: 6px;
    width: 100%;
  }

  .card-header {
    display: flex-column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding-top: 1em;
    padding-bottom: 0.25em;
    padding-left: 4em;
    padding-right: 4em;
  }

  .task-input {
    box-sizing: border-box;
    display: flex;
    padding: 12px;
    width: 100%;
    height: 48px;
    color: #acb3dd;
    margin-top: 2em;
    margin-bottom: 0em;
    border-color: #acb3dd7c;
    border-style: solid;
    border-width: 1px;
  }
  .task-input input,
  input::placeholder {
    border-radius: 0px;
    border: none;
    font-size: 16px;
    outline: none;
    font-weight: 400;
    width: 100%;
  }
  .task-input input::placeholder {
    color: #acb3ddbd;
  }
</style>
