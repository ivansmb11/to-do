<script setup lang="ts">

import { ref } from 'vue';
import { ToDo } from '../../../models/toDo';

const emit = defineEmits([ 'onNewToDo' ]);

const initialValue: ToDo = {
  title: '',
  date: new Date().toISOString().split('T')[0],
  description: ''
};

const newToDo = ref({
  ...initialValue
} as ToDo );

const clearNewToDo = () => {
  newToDo.value = {
    ...initialValue
  } as ToDo;
}

const onSubmit = () => {
  if( newToDo.value.title && newToDo.value.date ) {
    emit( 'onNewToDo', newToDo.value );
    clearNewToDo();
  }
}

</script>

<template>
<div class="modal fade" id="newToDo" tabindex="-1" aria-labelledby="newToDoLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg text-white border-0">
        <h5 class="modal-title" id="newToDoLabel">new to-do: _</h5>
        <button
          @click="clearNewToDo"
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="modal"
          aria-label="Close">
        </button>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="modal-body bg text-white">
          <div class="mb-3">
            <label for="title" class="col-form-label">title</label>
            <input
              v-model="newToDo.title"
              type="text"
              class="form-control bg text-white text-white border-secondary"
              id="title"
              required
            >
          </div>
          <div class="mb-3">
            <label for="date" class="col-form-label">date</label>
            <input
              v-model="newToDo.date"
              type="date"
              class="form-control bg text-white border-secondary"
              id="date"
              required
            >
          </div>
          <div class="mb-3">
            <label for="description" class="col-form-label">description</label>
            <textarea
              v-model="newToDo.description"
              class="form-control bg text-white border-secondary"
              id="description">
            </textarea>
          </div>
        </div>
        <div class="modal-footer bg border-0">
          <button
            @click="clearNewToDo"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal">
              close
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            :data-bs-dismiss="newToDo.title && newToDo.date ? 'modal' : ''">
            save
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<style scoped>
.bg {
	background: #2c2c2c;
}
</style>
