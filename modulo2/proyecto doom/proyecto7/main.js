const textarea = document.getElementById("test-target");
const consoleLog = document.getElementById("console-log");
const btnReset = document.getElementById("btn-reset");

function logMessage(message) {
  consoleLog.innerText += `${message}\n`;
}

textarea.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    logMessage(`Key "${e.key}" pressed [event: keydown]`);
  } else {
    logMessage(`Key "${e.key}" repeating [event: keydown]`);
  }
});

textarea.addEventListener("beforeinput", (e) => {
  logMessage(`Key "${e.data}" about to be input [event: beforeinput]`);
});

textarea.addEventListener("input", (e) => {
  logMessage(`Key "${e.data}" input [event: input]`);
});

textarea.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
});

btnReset.addEventListener("click", (e) => {
  let child = consoleLog.firstChild;
  while (child) {
    consoleLog.removeChild(child);
    child = consoleLog.firstChild;
  }
  textarea.value = "";
});