function addMessage() {
    if(!messages[messageIndex]) {
        window.clearInterval(messagesTimer);
        return;
    }

    var messageContent = messages[messageIndex].content;
    
    if(messages[messageIndex].useLastAnswer) {
        messageContent = "\"" + lastAnswer + "\"..." + messageContent;
    }

    if(messages[messageIndex].hasEmoji) {
        for (i = 0; i < emojis.length; i++) {
            var emoji = emojis[i];
            var emojiImage = '<span class="' +  'emoji-' + messages[messageIndex].type + ' ' + emoji.class + '"></span>'        
                
            messageContent = replaceAll(messageContent, emoji.code, emojiImage);
            
        } 
    }
    
    if(messages[messageIndex].image) {
        var image = '<img src="' + messages[messageIndex].image + '" style="max-width:240px;" />'
        messageContent = image;
    }

    var  messageTime = messages[messageIndex].time;

    switch (messages[messageIndex].type)
    {
        case 'info':
            newInfoMessage(messageContent, messageTime);
            break;
        case 'sent':
            newSentMessage(messageContent, messageTime);
            break;
        case 'received':
            newReceivedMessage(messageContent, messageTime);
            break;
        default :
            console.log("No message type registered");
    }
    
    if(messages[messageIndex].needAnswer) {
        window.clearInterval(messagesTimer);
    }

    messageIndex++;
}

function newMessage(e) {
	var input = e.target.input;

	if (input.value) {
		var message = buildMessage(input.value);
		conversation.appendChild(message);
		animateMessage(message);
	}

    lastAnswer = input.value;
	input.value = '';
	conversation.scrollTop = conversation.scrollHeight;

    e.preventDefault();
    
    messagesTimer = setInterval(addMessage, messagesIntervalTimer);
}

function newReceivedMessage(text, time) {	

	if (text) {
		var message = buildReceivedMessage(text, time);
		conversation.appendChild(message);
	}

	conversation.scrollTop = conversation.scrollHeight;
}

function newSentMessage(text, time) {	

	if (text) {
		var message = buildMessage(text, time);
		conversation.appendChild(message);
		animateMessage(message);
	}

	conversation.scrollTop = conversation.scrollHeight;
}

function newInfoMessage(text) {	

	if (text) {
		var message = buildInfoMessage(text);
		conversation.appendChild(message);
	}
	conversation.scrollTop = conversation.scrollHeight;
}

function buildMessage(text, time) {
	var element = document.createElement('div');

	element.classList.add('message', 'sent');

	element.innerHTML = text +
		'<span class="metadata">' +
			'<span class="time">' + moment(time, 'h:mm').format('h:mm A') + '</span>' +
			'<span class="tick tick-animation">' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
			'</span>' +
		'</span>';

	return element;
}

function buildReceivedMessage(text, time) {
	var element = document.createElement('div');
    element.classList.add('message', 'received');

    element.innerHTML = text +
		'<span class="metadata">' +
			'<span class="time">' + moment(time, 'h:mm').format('h:mm A') + '</span>' +			
		'</span>';
    
	return element;
}

function buildInfoMessage(text) {
    var centerElement = document.createElement('center');
    var element = document.createElement('div');

    element.classList.add('message-info');
    element.innerHTML = text;

    centerElement.appendChild(element);

	return centerElement;
}

function animateMessage(message) {
	setTimeout(function() {
		var tick = message.querySelector('.tick');
		tick.classList.remove('tick-animation');
	}, 500);
}