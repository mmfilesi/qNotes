'use strict';
/**
 * @ngdoc function
 * @name qNotes.services:factory
 */
angular.module('qNotes')

	.factory('factory', function () {
		
		var module = {};

		var mockNotes = [
    		{ 	"title": "Lore Ipsum",
    		  	"text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    			"color": "notes-c-yw",
    			"stick": true
    		},
    		{ 	"title": "Haga Basin",
    		  	"text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    			"color": "notes-c-rd",
    			"stick": true
    		},
    		{ 	"title": "Foo awesome",
    		  	"text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    			"color": "notes-c-pk",
    			"stick": false
    		},    		
    		{ 	"title": "Foo awesome",
    		  	"text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    			"color": "notes-c-gr",
    			"stick": false
    		},
    		{ 	"title": "Foo awesome",
    		  	"text": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    			"color": "notes-c-bl",
    			"stick": false
    		},
    	];

		module.getNotes = function() {
			return JSON.parse(localStorage.getItem("qNotes")) || [];
	   	};

	   	module.getIndexNoteById = function(note) {
	   		var qNotes = this.getNotes(),
	   			i = 0,
	   			len = qNotes.length || 0;

	   		for (; i<len; i++) {
	   			if ( qNotes[i].id == note.id ) {
	   				return i;
	   			}
	   		}
	   		return -1;
	   	};

		module.addNote = function(note) {
			var qNotes = this.getNotes();			
			qNotes.push(note);
			localStorage.setItem("qNotes", JSON.stringify(qNotes));
			return qNotes;	   	
	   	};

		module.editNote = function(note) {
			var qNotes 	= this.getNotes(),
				index 	= this.getIndexNoteById(note);
			if ( index != -1 ) {
				qNotes[index] = note;
			}		
			localStorage.setItem("qNotes", JSON.stringify(qNotes));
			return qNotes;
	   	};	   	
	    
	    return module;
  });