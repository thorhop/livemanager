// The point of this JS file is to contain the functions
// that will parse ALS files, rounding up chords played
// and concluding which keys and scales are being used

// Here we will implement 'music-helper' to convert
// numeric MIDI code in to keys, which will be combined
// with note time to assert what chords are being played.

var ableton = new Ableton(result.path);
var Music = require('music-helper');

function parseProject(project) {
  ableton.read(function(error, $) {
    if (error) {
      console.error(error);
    }
    else {
      var project = {
        path = '',
        pushScale = '',
        rootNote = '',
        tempo = [],
        signature = [],
        note = [],
        notePlays = [],
        guessedScales = []
      };
      project.rootNote = $('ScaleInformation RootNote').attr('value');
      project.pushScale = $('ScaleInformation Name').attr('value');
      // MidiClip
      $('MidiClip').each(function(i){
        $(this).find('KeyTrack').each(function(i){
          project.note[i] = $(this).find('MidiKey').attr("value");
          $(this).find('MidiNoteEvent').each(function(i, elem){
            MidiNoteEvents[i] = $(this).attr('time');
          });
          project.notePlays[i] = MidiNoteEvents.join(', ');
        });
      })
      console.log(project);
    }
  });
}
