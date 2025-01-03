function Answer(){
    const answers = {
        'q1': 'True',
        'q2': 'False',
        'q3': 'False',
        'q4': 'True',
        'q5': 'False',
        'q6': 'Paris',
        'q7': ['Red', 'Blue', 'White'],
        'q8': [
            'Great Pyramid of Giza',
            'Hanging Gardens of Babylon',
            'Statue of Zeus at Olympia',
            'Temple of Artemis at Ephesus',
            'Mausoleum at Halicarnassus',
            'Colossus of Rhodes',
            'Lighthouse of Alexandria'
        ]
    };

    return answers;
}

function getUserAnswers() {
    // Get user inputs
    let inputs = document.querySelectorAll("input:checked");

    // Group user answers by question
    let userAnswers = Array.from(inputs).reduce((acc, input) => {
        if (!acc[input.name]) {
            acc[input.name] = [];
        }
        acc[input.name].push(input.value);
        return acc;
    }, {});

    return userAnswers;   
}

function checkAnswers() {
    // Get the correct answers
    let answers = Answer();

    // Get user answers
    let userAnswers = getUserAnswers();

    // User score
    let score = 0;

    // Iterate over each question in the correct answers
    for (let question in answers) {
        if (Array.isArray(answers[question])) {
            // Multiple-choice question
            let correctAnswers = answers[question];
            let userSelected = userAnswers[question] || [];

            // Check if the user selected all correct answers and no incorrect ones
            let isFullyCorrect = userSelected.every(answer => correctAnswers.includes(answer)) && correctAnswers.every(answer => userSelected.includes(answer));

            if (isFullyCorrect) {
                score += 1; // Full point for fully correct multiple-choice
            }
        } else {
            // Single-choice question
            if (userAnswers[question] && userAnswers[question][0] === answers[question]) {
                score += 1; // Full point for correct single-choice
            }
        }
    }

    // Display the score
    alert(`Your score is: ${score} out of ${Object.keys(answers).length}`);
}