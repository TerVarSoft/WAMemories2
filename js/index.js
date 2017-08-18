var messagesIntervalTimer = 2000;

var form = document.querySelector('.conversation-compose');
var conversation = document.querySelector('.conversation-container');

form.addEventListener('submit', newMessage);

var lastAnswer = "";
var messageIndex = 0;
var messagesTimer = setInterval(addMessage, messagesIntervalTimer);

myAudio = new Audio('./sounds/reik.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();