import Vue from 'vue';

const Hello = Vue.component('hello-component', {
  methods: {
    writeAnimal () {
      return 'HÄST'
    }
  },

  render: function render(h) {
    return (
      <div>
        <span>HUND</span>
        <span>{this.writeAnimal()}</span>
      </div>
    )
  }
})

export default Hello
