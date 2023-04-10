<template>
  <div>
    <PageHeader />
    <div style="display: flex">
      <PageAside />
      <router-view style="flex: 1" />
    </div>
  </div>
</template>
<style></style>
<script>
import PageHeader from "@/components/PageHeader";
import PageAside from "@/components/PageAside";
export default {
  name: "Layout",
  components: {
    PageHeader,
    PageAside,
  },
};
</script>
