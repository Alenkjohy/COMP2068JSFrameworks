import prompt from 'prompt';

// Start the prompt
prompt.start();

// the schema for user input
const schema = {
  properties: {
    userSelection: {
      description: 'Choose ROCK, PAPER, or SCISSORS',
      pattern: /^(ROCK|PAPER|SCISSORS)$/i,
      message: 'Please enter ROCK, PAPER, or SCISSORS',
      required: true
    }
  }
};

// user input and play the game
prompt.get(schema, (err: any, result: any) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  // user input to uppercase for consistency
  const userSelection = (result.userSelection as string).toUpperCase();

  // computer selection using Math.random()
  const randomNum = Math.random();
  let computerSelection: string;

  if (randomNum < 0.35) {
    computerSelection = 'PAPER';
  } else if (randomNum < 0.68) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  // Display selections
  console.log(`\nUser Selection: ${userSelection}`);
  console.log(`Computer Selection: ${computerSelection}`);

  // Determineing the winner using switch statement
  let outcome: string;

  if (userSelection === computerSelection) {
    outcome = "It's a tie";
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    outcome = 'User Wins';
  } else {
    outcome = 'Computer Wins';
  }

  // Display the outcome
  console.log(`\nOutcome: ${outcome}\n`);
});
