document.addEventListener('DOMContentLoaded', function() {
  const outputText = document.querySelector("#output");
  const genBtn = document.querySelector("#generate-btn");
  genBtn.onclick = outputNote;

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

  const timeBtn = document.querySelector('#generate-btn-timed');
  timeBtn.onclick = disWithTime;
  
  const timeInSecs = document.querySelector('#time-in');
  // document.addEventListener('input', updateTime })
  // TODO: listener for change in input

  let intervalId;
  let currPrinting = false;
  function disWithTime() {
    if (currPrinting) {
      clearInterval(intervalId);
      timeBtn.innerText = 'Generate Every: ';
    } else {
      intervalId = setInterval(outputNote, (timeInSecs.value * 1000));
      outputNote();
      timeBtn.innerText = 'Stop';
    }
    currPrinting = !currPrinting;
  }
})