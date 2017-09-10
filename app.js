var app = new Vue({
  el: '#app',
  data: {
    screenA: true,
    screenB: false,
    textA: '',
    textB: '',
    messages: []
  },
  mounted: function() {
    $('#text-' + (this.screenA ? 'a' : 'b')).focus();
  },
  methods: {
    switchScreen: function() {
      this.screenA = !this.screenA;
      this.screenB = !this.screenB;
      var vm = this;
      Vue.nextTick(function() {
        $('#text-' + (vm.screenA ? 'a' : 'b')).focus();
      });
    },
    sendA: function() {
      if (this.textA.trim().length > 0) {
        this.messages.push({
          a: true,
          b: false,
          text: this.textA
        });
        Vue.nextTick(function() {
          $(document).scrollTop($(document).height());
        });
      }
      this.textA = '';
    },
    sendB: function() {
      if (this.textB.trim().length > 0) {
        this.messages.push({
          a: false,
          b: true,
          text: this.textB
        });
        Vue.nextTick(function() {
          $(document).scrollTop($(document).height());
        });
      }
      this.textB = '';
    }
  }
});
