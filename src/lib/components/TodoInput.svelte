<script lang="ts">
  import { todos } from '../stores/todos';
  
  let newTodoText = $state('');

  function handleSubmit() {
    if (!newTodoText.trim()) return;
    todos.add(newTodoText);
    newTodoText = '';
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="add-form">
  <input
    type="text"
    bind:value={newTodoText}
    placeholder="Add a new todo..."
    class="add-input"
  />
  <button type="submit" class="add-button">Add</button>
</form>

<style>
  .add-form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .add-input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  .add-button {
    padding: 0.5rem 1rem;
    background: #646cff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>