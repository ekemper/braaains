<template>

  <div>

    <input
      class="snerch"
      type="text"
      name="snerch"
      placeholder="WHAT?!"
      @keyup.enter="submit"
      ref="snerch"
    >

    <div
      class="card"
      v-for="quest in questions"
    >
      <div class="card-header">
        {{quest.title}}
      </div>
      <div class="card-body">
        <p class="card-text">
          {{quest.body}}
        </p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>

  </div>



</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'List',
  computed: {
    ...mapGetters([
        'questions'
      ])
  },
  data () {
    return {

    }
  },
  methods: {
    submit
  }

}

function submit(searchText) {
  alert(this.$refs.snerch.value);
}


</script>

<style scoped>

.card {
  margin-top: 15px;
}

.card-header {
  font-size: 20px;
}

.snerch {
  height: 40px;
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
}


</style>
