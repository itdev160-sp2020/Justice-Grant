var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

var data = [
    {
        type: messageType.out,
        user: 'Tony',
        message: 'Wanna play MW?'
    },
    {
        type: messageType.in,
        user: 'Justice',
        message: 'Yo! Do you want to hop on now?'
    },
    {
        type: messageType.out,
        user: 'Tony',
        message: 'Yeah! Let me brush my teeth first and grab some water:)'

    }
];

function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

function createMessageElement(message) {
    var messageText = document.createTextNode{
        message.user + ': ' + message.message
    };

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEl = document.getElementById('message-input');

    switch (event.target.id) {
        case 'send-button':
            user = 'Tony'
            type = messageType.out;
            break;
        case 'send-button':
            user = 'Justice'
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

if (messageInput.value != '') {
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    var el = createMessageElement(message);

    messageContainerEl.appendChild(el);

    messageInput.value = '';
}
}

var init = function() {
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();

};

init();