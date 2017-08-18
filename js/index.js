var messagesIntervalTimer = 2000;

var form = document.querySelector('.conversation-compose');
var conversation = document.querySelector('.conversation-container');

form.addEventListener('submit', newMessage);

var lastAnswer = "";
var messageIndex = 0;
var messagesTimer = setInterval(addMessage, messagesIntervalTimer);
