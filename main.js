const myQuiz = [
    { question: 'What is the capital city of Minnesota?', answer: 'St. Paul'},
    { question: 'What is the capital city of Wisconsin?', answer: 'Madison'},
    { question: 'What is the capital city of North Dakota?', answer: 'Bismarck'},
    { question: 'What is the capital city of South Dakota?', answer: 'Pierre'},
    { question: 'What is the capital city of Iowa?', answer: 'Des Moines'},
    { question: 'What is the capital city of Michigan?', answer: 'Lansing'},
    { question: 'What is the capital city of Illinois?', answer: 'Springfield'},
    { question: 'What is the capital city of Indiana?', answer: 'Indianapolis'},
    { question: 'What is the capital city of Kentucky?', answer: 'Frankfort'},
    { question: 'What is the capital city of Ohio?', answer: 'Columbus'},
];
const myRandomIndex = Math.floor(Math.random() * 10);
console.log(myRandomIndex);
let userResponse = prompt(myQuiz[myRandomIndex].question);
console.log(userResponse);
alert('You answered ' + userResponse + '. The correct answer is ' + myQuiz[myRandomIndex].answer + '. (Close this alert and refresh your browser window to play again.)');
