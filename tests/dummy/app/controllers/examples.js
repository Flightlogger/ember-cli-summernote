import Ember from "ember";

var ExamplesController = Ember.Controller.extend({

  postContent: 'Hello, world!',

  options: {
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
      ['fontname', ['fontname']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']],
      ['table', ['table']],
      ['insert', ['link']],
      ['view', ['fullscreen', 'codeview']],
      ['help', ['help']]
    ]
  },

  editingDisabled: false,

  actions: {

  }

});

export default ExamplesController;
