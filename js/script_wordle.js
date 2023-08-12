async function flipLetters(rowId, letters) {
    await new Promise(resolve => setTimeout(resolve, 200));
    const rowDiv = document.querySelector(`.row#${rowId}`);
    const divs = rowDiv.querySelectorAll('div');
    const word = ['A', 'N', 'N', 'I', 'E']
    // Apply flip animation class with delay
    divs.forEach((div, index) => {
      setTimeout(() => {
        if (letters[index] == word[index]) {
          div.classList.add('green');
        }
        else if (letters[index] != word[index] && word.includes(letters[index])) {
          div.classList.add('yellow');
        }
        div.classList.add('flip');
      }, 400 * index);
    });
  }

  function populateRow(rowId, letters) {
    return new Promise(resolve => {
      const rowDiv = document.querySelector(`.row#${rowId}`);
      const emptyDivs = rowDiv.querySelectorAll('div:empty');
      let index = 0;

      async function addLetterWithDelay() {
        if (index < emptyDivs.length) {
          await new Promise(resolve => setTimeout(resolve, 200)); // 200 milliseconds delay
          emptyDivs[index].textContent = letters[index];
          index++;
          await addLetterWithDelay();
        } else {
          resolve(); // Resolve the promise when animation is complete
        }
      }

      addLetterWithDelay().then(() => {
        flipLetters(rowId, letters); // Add flip animation after letters are populated
        resolve(); // Resolve the outer promise
      });
    });
  }

  // Call the populateRow function and flip animation sequentially using Promises
  async function animateRowsSequentially() {
    await populateRow('row1', ['C', 'R', 'A', 'N', 'E']);
    await new Promise(resolve => setTimeout(resolve, 2500)); // Wait for animation to complete
    await populateRow('row2', ['M', 'A', 'N', 'G', 'O']);
    await new Promise(resolve => setTimeout(resolve, 2500)); // Wait for animation to complete
    await populateRow('row3', ['A', 'N', 'N', 'I', 'E']);

    let arrow = document.getElementById("arrow")
    arrow.classList.add("arrow_bounce")

  }

  animateRowsSequentially(); // Start the animation
