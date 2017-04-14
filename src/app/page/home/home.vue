<script src="./home.js"></script>
<style module src="./home.css"></style>

<template>
  <div :class="$style.page">
    <div :class='$style.wrap'>
      <h1 :class="$style.title">Todo List</h1>
    </div>
    <div :class='$style.wrap'>
      <div :class='$style.col12'>
        <button :class='$style.buttonClear'>Clear all completed <span>(1)</span></button>
      </div>
      <div :class='$style.col12'>
        <button :class='$style.buttonClear' @click="removeTask(payload)">Clear all <span>(6)</span></button>
      </div>
    </div>
    <div :class='$style.wrap'>
      <div :class='$style.col23'>
        <input :class="$style.input" type="text" v-model="text" @keyup.enter="addTask" ref="input">
      </div>
      <div :class='$style.col13'>
        <button :class="$style.buttonAdd" type="button" name="button" @click="addTask">Add</button>
      </div>
    </div>

    <div :class='$style.wrap'>
      <ul :class="$style.list">
        <li :class="$style.listItem" v-for="todo in renderTodos">
          <label :class="$style.listItemCopy">
            <input type="checkbox" :class="$style.listItemCheck" @click="complete(payload)">
            {{todo.body}}
          </label>
          <button :class="$style.listItemRemove" @click="removeTask(payload)" type="button" name="button">×</button>
        </li>
      </ul>
    </div>
    <!-- <div :class='$style.wrap'>
      <ul :class="$style.list">
        <li :class="$style.listItem" v-for="(item, index) in list">
          <label :class="$style.listItemCopy">
            <input type="checkbox" :class="$style.listItemCheck">
            {{item.text}}
          </label>
          <button :class="$style.listItemRemove" @click="removeTask(index)" type="button" name="button">×</button>
        </li>
      </ul>
    </div> -->
  </div>
</template>
