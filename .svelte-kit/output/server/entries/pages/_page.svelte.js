import { J as attr, K as stringify, F as escape_html, L as bind_props, B as pop, z as push, M as ensure_array_like, G as store_get, I as unsubscribe_stores } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
const todos = writable([]);
function TodoItem($$payload, $$props) {
  push();
  let todo = $$props["todo"];
  $$payload.out += `<div class="todo-item svelte-1fh0l9s"><input type="checkbox"${attr("checked", todo.completed, true)}> <span${attr("class", `svelte-1fh0l9s ${stringify([todo.completed ? "completed" : ""].filter(Boolean).join(" "))}`)}>${escape_html(todo.text)}</span> <button class="svelte-1fh0l9s">Delete</button></div>`;
  bind_props($$props, { todo });
  pop();
}
function TodoList($$payload) {
  var $$store_subs;
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$todos", todos));
  $$payload.out += `<div class="todo-list svelte-1uacvoc"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let todo = each_array[$$index];
    TodoItem($$payload, { todo });
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function AddTodo($$payload, $$props) {
  push();
  let todoText = "";
  $$payload.out += `<form class="add-todo svelte-1ve73lf"><input type="text"${attr("value", todoText)} placeholder="Add a new todo..." class="svelte-1ve73lf"> <button type="submit" class="svelte-1ve73lf">Add</button></form>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="container svelte-x2qs35"><h1 class="svelte-x2qs35">Todo App</h1> `;
  AddTodo($$payload);
  $$payload.out += `<!----> `;
  TodoList($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
