document.addEventListener('DOMContentLoaded', function() {
  const outputText = document.querySelector("#output");
  const genBtn = document.querySelector("#generate-btn");
  genBtn.onclick = checkAndDisplay;

  let currIndex;
  const musicNotes = [
    "C",
    "C#/Db",
    "D",
    "D#/Eb",
    "E",
    "F",
    "F#/Gb",
    "G",
    "G#/Ab",
    "A",
    "A#/Bb",
    "B"
  ];

  function outputNote() {
    let newIndex;
    
    do {
      newIndex = randomIndex();
    } while (currIndex === newIndex)

    outputText.innerText = musicNotes[newIndex];
    currIndex = newIndex;
  }

  function randomIndex() {
    return Math.floor(Math.random() * musicNotes.length);
  }

  function checkAndDisplay() {
    if (!currPrinting) outputNote();
  }

  const timeBtn = document.querySelector('#generate-btn-timed');
  timeBtn.onclick = disWithTime;
  
  const timeInSecs = document.querySelector('#time-in');
  document.addEventListener('input', updatePrintTime);

  let intervalId;
  let currPrinting = false;
  let delayInSeconds;

  function disWithTime() {
    if (currPrinting) {
      clearInterval(intervalId);
      timeBtn.innerText = 'Generate Every: ';
    } else if (timeInSecs.value !== '') {
      startInterval();
      outputNote();
      timeBtn.innerText = 'Stop';
    }
    currPrinting = !currPrinting;
  }

  function updatePrintTime() {
    if (currPrinting && timeInSecs.value !== '') {
      clearInterval(intervalId);
      startInterval();
    }
  }

  function startInterval() {
    delayInSeconds = timeInSecs.value;
    intervalId = setInterval(outputNote, (delayInSeconds * 1000));
  }
})