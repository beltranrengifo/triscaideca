<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    imageUrl(): object {
      return (image: object) => {
        try {
          return require(`@/assets/images/projects/${image}`)
        } catch (e) {
          return ''
        }
      }
    },

    getTagsAsArray(): object {
      return (tags): string => {
        return tags.split(',').map((tag: string) => tag.trim())
      }
    },
  },
})
</script>
