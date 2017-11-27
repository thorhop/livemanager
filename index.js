var Ableton = require('ableton');
var prompt = require('prompt');

prompt.start();

console.log('\nEnter the path to the ALS file:');
console.log('Test options are:\n');
console.log(' 1) test/als/MajorChords.als');
console.log(' 2) test/als/muertos.als (Note: requires certain VSTs - will be replaced)\n');

// A prompt that doesn't really work
prompt.get('path', function (err, result) {
  //var ableton = new Ableton(result.path);
  var ableton = new Ableton(result.path);

  ableton.read(function(error, $) {
    if (error) {
      console.error(error);
    }
    else {
      // `$` is the Cheerio root object.
      console.log('\nScale information\n');
      console.log('Root: ' + $('ScaleInformation RootNote').attr('value'));
      console.log('Name: ' + $('ScaleInformation Name').attr('value') + '\n');
      // MidiClip
      $('MidiClip').each(function(i){
        console.log('Clip name: ' + $(this).find('Name').attr("value") + '\n');
        $(this).find('KeyTrack').each(function(i){
          console.log('  Key: ' + $(this).find('MidiKey').attr("value"));
          var MidiNoteEvents = [];
          $(this).find('MidiNoteEvent').each(function(i, elem){
            MidiNoteEvents[i] = $(this).attr('time');
          });
          console.log('  Notes: ' + MidiNoteEvents.join(', ') + '\n');
        });
      })
    }
  });
});
