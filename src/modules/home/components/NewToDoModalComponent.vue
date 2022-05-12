<script setup lang="ts">

import { ref } from 'vue';
import { ToDo } from '../../../models/toDo';

const emit = defineEmits(['onNewToDo']);

const newToDo = ref({} as ToDo);

const onSave = () => {
  emit( 'onNewToDo', newToDo.value );
}

</script>

<template>
<div class="modal fade" id="newToDo" tabindex="-1" aria-labelledby="newToDoLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-dark text-white border-0">
        <h5 class="modal-title" id="newToDoLabel">new to-do: _</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-dark text-white">
        <form>
          <div class="mb-3">
            <label for="title" class="col-form-label">title</label>
            <input v-model="newToDo.title" type="text" class="form-control bg-dark text-white bg-dark text-white" id="title">
          </div>
          <div class="mb-3">
            <label for="date" class="col-form-label">date</label>
            <input v-model="newToDo.date" type="date" class="form-control bg-dark text-white" id="date">
          </div>
          <div class="mb-3">
            <label for="description" class="col-form-label">description</label>
            <textarea v-model="newToDo.description" class="form-control bg-dark text-white" id="description"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer bg-dark border-0">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
        <button @click="onSave" type="button" class="btn btn-primary" data-bs-dismiss="modal">save</button>
      </div>
    </div>
  </div>
</div>
</template>
