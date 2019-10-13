$(document).ready(function () {
// array filled w keys/objects of the questions and their respective
// answer choices
var questions= [
   {
    q: "A clerk of a butcher shop stands five feet ten inches tall and wears size 13 sneakers. What does he weigh?",
    a: {
        a: "120 lbs",
        b: "Meat",
        c: "Three hundred pounds",
        d: "130 lbs",
    },
    correctAnswer: "b"
   },

   {
    q: "Johnny's mother had four children. The first child was named April. The second child was named May. The third child's name was June. What as the fourth child's name?",
    a: {
        a: "July",
        b: "August",
        c: "Johnny",
        d: "January",
    },
    correctAnswer: "c"
    },

    {
    q: "Mt. Everest is the highest mountain in the world. Before Mt. Everest was discovered, what was the highest mountain in the world?",
    a: {
        a: "The Alps",
        b: "Mt. Everest",
        c: "The Mountains in Ancient China",
        d: "Mt. Trashmore",
    },
    correctAnswer: "b"
    },

    {
    q: "If you were running a race and you passed the person in 2nd place, what place would you be in now?",
    a: {
        a: "1st place",
        b: "3rd place",
        c: "Last place",
        d: "2nd place",
    },
    correctAnswer: "d"
   },

   {
    q: "How much dirt is there in a hole that measures two feet by three feet by four feet?",
    a: {
        a: "None",
        b: "2 cubic feet",
        c: "24 cubic feet",
        d: "4 cubic feet",
    },
    correctAnswer: "a"
   },

   {
    q: "A farmer has five haystacks in one field and four haystacks in another. How many haystacks would he have if he combined them all in one field?",
    a: {
        a: "Nine",
        b: "Five",
        c: "One",
        d: "Four",
    },
    correctAnswer: "c"
   },

   {
    q: "Which is correct to say, 'The yolk of the egg is white' or 'The yolk of the egg are white?'",
    a: {
        a: "Is",
        b: "Are",
        c: "Either 'is' or 'are'",
        d: "Neither, the egg yolks are yellow",
    },
    correctAnswer: "d"
   },

   {
    q: "You are in a cabin and it is pitch black. You have one match on you. Which do you light first, the newspaper, the lamp, or the candle?",
    a: {
        a: "Newspaper",
        b: "Lamp",
        c: "Candle",
        d: "Match",
    },
    correctAnswer: "d"
   },

   {
    q: "Spelling words correctly is an important skill in life to have. You wouldn't want a word to be spelled the wrong way, especially when you turn in a homework assignment. Rearrange the following letters so it forms one word spelled correctly: NEW DOOR",
    a: {
        a: "NEWDOOR",
        b: "ROW DONE",
        c: "ONE WORD",
        d: "WORDONE",
    },
    correctAnswer: "c"
   },

   {
    q: "A plane crashes on the border of U.S. and Canada. Where do they bury the survivors?",
    a: {
        a: "Nowhere",
        b: "U.S.",
        c: "Canada",
        d: "Either U.S. or Canada",
    },
    correctAnswer: "a"
   },
];

// printing out the questions and their answer choices on the webpage
for(i = 0; i < questions.length; i++){
    $("#quiz").append("<p>"+ (i+1) + ". " + questions[i].q + "</p> <br>")
    Object.keys(questions[i].a).forEach((key, index)=>{
        $("#quiz").append(
            "<input type='radio' name='"+i+"' value="+[key] +"></input>" + 
            key,". ",questions[i].a[key], "<br>")
    })
    $("#quiz").append("<br>")
}

var quizOver = false;
var intervalId;
var time = 120;
var clockRunning = false;

var converted = timeConverter(time)

$("#time").text(converted)

if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }


function stop() {
    clearInterval(intervalId);
    clockRunning = false;
    quizOver = true;
};

function count() {
    time--;
  
    //  TODO: increment time by 1, remember we cant use "this" here.
  
    converted = timeConverter(time);
    // console.log(converted);

    $("#time").text(converted);

    if (converted == "00:00"){
        stop();
        alert("You are out of time!");
    }
  
    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.
  
    $("#time").text(converted);

}

// Time converter function to change into min:sec
function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
  
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }


function checkAnswers(){

}

// When the submit button is clicked, the quiz is over and 
// the page alert appears
$("#submit").click(function(){
    stop();
    alert("Your quiz has been successfully submitted");

    $('input:checked').map(function(){
        var answers = $(this).val()
        //check to see what chosen choice value is
        console.log($(this).val());

        for(i = 0; i < questions.length; i++){
            if(answers === questions[i].correctAnswer){
                $("#quiz").append(i + "CORRECT!")
                console.log(i + "CORRECT!")
            }
            else{
                $("#quiz").append(i + "CORRECT!")
                console.log(i + "WRONG!")
            }
        }
    
    });
});


})
