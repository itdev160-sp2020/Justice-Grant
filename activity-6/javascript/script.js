var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

var data = [
    {
        type: messageType.out,
        user: 'Mike',
        message: 'Wanna play MW?'
    },
    {
        type: messageType.in,
        user: 'Joe',
        message: 'Yo! Do you want to hop on now?'
    },
    {
        type: messageType.out,
        user: 'Tony',
        message: 'Yeah! Let me brush my teeth first and grab some water:)'

    }


]