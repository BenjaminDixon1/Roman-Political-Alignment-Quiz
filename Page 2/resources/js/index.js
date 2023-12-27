let questionIndex = 0;

let questions = [
    '', 
    'The number of slaves per plantation should be limited to increase the amount of work available',
    'The grain dole should be increased',
    'Land should be redistributed via a lottery overseen by a commission',
    'Cicero should be condemned for executing the leaders of the Catiline conspiracy',
    'Pompey should have been appointed sole consul to restore order in Rome',
    'Candidates should be able to stand in Absentia',
    
];

let comments = [
    "You're a real populist, just don't get killed fighting Caesar's wars for him",
    "A true Catonian, the unchanging constitution of the republic matters more to you than anything else",
    "A moderate eh? Just be careful that you don't get caught between two extremes in a civil war"
]



let populism = questions.length;
let maximumPopulismValue = questions.length * 2;


function nextQuestion() {
    questionIndex++;
    if (questionIndex >= questions.length) {
        revealResults();
    }
    changeQuestion();
}

function changeQuestion() {
    let questionElement = document.getElementById('question');
    questionElement.textContent = questions[questionIndex];
}



function revealResults() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('answer-options').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
    document.getElementById('resultsTitle').style.display = 'block';
    document.getElementById('progress-bar').style.display = 'block';
    document.getElementById('progress-bar-fill').style.display = 'block';
    document.getElementById('comment').style.display = 'block';


    

    let percentage = ((populism / maximumPopulismValue) * 100);
    document.getElementById('progress-bar-fill').style.width = percentage + '%';
    console.log(percentage);

    function updateComment() {
        let commentElement = document.getElementById('comment');
        if (percentage < 40) {
            commentElement.textContent = comments[1];
    
        }
            else if (percentage < 60) {
                commentElement.textContent = comments[2];
    
            }
    
            else {
                commentElement.textContent = comments[0];
    
            };
    
    }

    updateComment();
}

function handleSubmit() {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please Select an Option');
    }

    let populismChange = 0;
    switch (Number(selectedOption.value)) {
        case 1:
            populismChange -= 1;
            break;
        case 2:
            populismChange -= 0.5;
            break;
        case 3:
            populismChange += 0;
            break;
        case 4:
            populismChange += 0.5;
            break;
        case 5:
            populismChange += 1;
            break;

        default:
            console.log('Unexpected option value');
            return;
    }

    populism += populismChange;

    // Clear selected radio button
    selectedOption.checked = false;

    if (populism < 0) {
        populism = 0;
    }
}




document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault(); 
        handleSubmit();
        nextQuestion();
    });
});





