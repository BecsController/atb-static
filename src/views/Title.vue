<script>
export default {
  name: 'vue-title',
  props: ['title'],
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = 'Kowari Design' + this.title;
      }
    }
  },
  render() {
    return '';
  }
};
</script>
