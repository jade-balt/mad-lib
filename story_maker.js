function makeStory() {
    // get form values (2 points)
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var noun5 = document.getElementById('noun5').value;
    var noun6 = document.getElementById('noun6').value;
    var adjective1=document.getElementById('adjective1').value;
    var adjective2=document.getElementById('adjective2').value;
    var adjective3=document.getElementById('adjective3').value;
    var adverb1=document.getElementById('adverb1').value;
    var pluralnoun1=document.getElementById('plural_noun1').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "Driving test";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "Driving a car can be fun if you follow this" + adjective1 +
                     " advice: When approaching a " + noun1 + " on the right, always blow your "+ noun2 + "." +
                     "Before making a" + adjective2+ " turn, always stick your" + noun3 + "out of the window ." +
                     "Every 2000 miles, have your" + noun4 + "inspected and your" + noun5 + "checked."+
                    "When approaching a " + noun6 + ", watch out for" + adjective3 + "people."+
                    "Above all, drive" + adverb1 +  ". The" + pluralnoun1 +  "you save may be your own!";


    // Display story by putting title & paragraphs into appropriate divs. (3 points)

  document.getElementById('title').innerHTML = title;
  document.getElementById('one').innerHTML = paragraph1;


}
