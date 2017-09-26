import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

const Index = {
  name: 'Index',
  mounted () {
    this.setTitle('index')
  },
  methods: {
    ...mapActions([ 'setTitle' ]),
  },
  render: function render(h) {
    return (
      <div class="index-view container">
        <h1>index-page</h1>
        <h1>Testing Lang: {this.$t('hello')}</h1>
      </div>
    )
  }
}

export default Index
