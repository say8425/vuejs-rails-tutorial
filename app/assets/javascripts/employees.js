var employees = new Vue({
  el: '#employees',
  data: {
    employees: [],
    employee: {
      name: '',
      email: '',
      manager: false
    },
    errors: {}
  },
  mounted: function () {
    var that;
    that = this;
    $.ajax({
      url: '/employees.json',
      success: function(res) {
        that.employees = res;
      }
    })
  },
  methods: {
    hireEmployee: function () {
      var that = this;
      $.ajax({
        method: 'POST',
        data: {
          employee: that.employee
        },
        url: '/employees.json',
        success: function(res) {
          that.errors = {};
          that.employees.push(res);
        },
        error: function(res) {
          that.errors = res.responseJSON.error;
        }
      })
    }
  }
});

Vue.component('employee-row', {
  template: '#employee-row',
  props: {
    employee: Object
  }
});
