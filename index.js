var Ableton = require('ableton');
var prompt = require('prompt');

prompt.start();

console.log('Enter the path to the ALS file:');

prompt.get('path', function (err, result) {
  //var ableton = new Ableton(result.path);
  var ableton = new Ableton('test/als/muertos.als');

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
          console.log('\n');
        });
      })
    }
  });
});
