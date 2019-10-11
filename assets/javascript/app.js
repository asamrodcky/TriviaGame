var questions= [
   {
    q: "A clerk of a butcher shop stands five feet ten inches tall and wears size 13 sneakers. What does he weigh?",
    a: {
        a: "120 lbs",
        b: "Meat",
        c: "three hundred pounds",
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

for(i = 0; i < questions.length; i++){
    $("#quiz").append("<p>"+ (i+1) + ". " + questions[i].q + "</p> <br>")
    Object.keys(questions[i].a).forEach((key, index)=>{
        $("#quiz").append(key,". ",questions[i].a[key], "<br>")
    })
    $("#quiz").append("<br>")
}

var quizOver = false;

