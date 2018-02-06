$(function(){

    var model = {
      class Cat {
        constructor(name) {
          this.name = name;
          this.clicks = 0;
          this.image = "";
        }
      }

      laura = new Cat('laura');
      frank = new Cat('frank');
      andre = new Cat('andre');
      anett = new Cat('anett');
      espen = new Cat('espen');

      var catNames = [laura, frank, andre, anett, espen];
    };


    var octopus = {
        addNewNote: function(noteStr) {
            model.add({
                content: noteStr
            });
            view.render();
        },

        getNotes: function() {
            return model.getAllNotes();
        },

        init: function() {
            model.init();
            view.init();
        }
    };


    var view = {
        init: function() {
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e){
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });
            view.render();
        },
        render: function(){
            var htmlStr = '';
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content +
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    };

    octopus.init();
});
