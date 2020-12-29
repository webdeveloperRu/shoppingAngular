<template>
  <div>
    <mat-toolbar color="primary">
      <span>House holdy.io</span>
      <div>
        <a mat-button="" [routerlink]="'/shopping-list'"> Shopping List </a>
        <a mat-button="" [routerlink]="'/manage-recipe'"> Manage Recipe </a>
      </div>
    </mat-toolbar>
    <router-outlet></router-outlet>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
