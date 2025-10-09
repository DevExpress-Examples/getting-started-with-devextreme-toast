<script setup lang="ts">
import { ref } from 'vue';

import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxButton from 'devextreme-vue/button';
import DxToast, { DxPosition } from 'devextreme-vue/toast';
import notify from 'devextreme/ui/notify';

const types = ['error', 'info', 'success', 'warning'];
const isVisible = ref<boolean>(false);

function showMessage(): void {
  notify(
    {
      message: 'You have a new message',
      width: 230,
      position: {
        at: 'bottom',
        my: 'bottom',
        of: '#container',
      },
    },
    types[Math.floor(Math.random() * 4)],
    500,
  );
}

function showCustomMessage(): void {
  isVisible.value = true;
}
</script>
<template>
  <div id="container">
    <div id="buttons">
      <DxButton
        text="Show message"
        @click="showMessage"
      />
      <DxButton
        text="Show custom message"
        @click="showCustomMessage"
      />
    </div>
    <DxToast
      v-model:visible="isVisible"
      content-template="custom-template"
      :width="230"
      :height="50"
      type="custom"
    >
      <DxPosition
        my="bottom"
        at="bottom"
        of="#container"
      />
      <template #custom-template>
        <span>You have a new message &nbsp;</span>
        <i class="dx-icon-email icon-style"/>
      </template>
    </DxToast>
  </div>
</template>

<style scoped>
#container {
  width: 300px;
  height: 120px;
  margin: 5px;
}

#buttons {
  display: flex;
}

.dx-toast-custom {
  background-color: #f05b41;
  color: white;
  border-radius: 5px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-style {
  margin-top: 3px;
}
</style>
