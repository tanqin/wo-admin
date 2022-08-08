<template>
  <!-- vue3 已经将 v-on="$listners" 和 v-bin="$attrs" 合并到了 v-bin="$attrs" 中  -->
  <el-dialog v-bind="$attrs" width="30%" draggable>
    <span>个人中心</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button>取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped></style>
