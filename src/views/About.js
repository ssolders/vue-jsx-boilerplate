import Vue from 'vue';
import Hello from '~/components/Hello'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

const About = Vue.component('hello-component', {
  name: 'about',
  data () {
    return {
      user: "Simon"
    }
  },
  mounted () {
    this.setTitle('about')
  },
  methods: {
    ...mapActions([ 'setTitle' ])
  },
  computed: mapGetters({
    pageTitle: 'pageTitle'
  }),

  render: function render(h) {
    return (
      <div>
        <h1>about</h1>
        <Hello />
        <h1>{this.user}</h1>
        <h1>{this.pageTitle}</h1>

      </div>
    )
  }
})

export default About
