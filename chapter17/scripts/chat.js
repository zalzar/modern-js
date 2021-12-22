// addine new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    async addChat(message) {
        // format a chat objects
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save the chat document 
        const response = await this.chats.add(chat);
        return response;
    }
    getChats(callback) {
        this.chats
            .where('room','==',this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(docChange => {
                    if (docChange.type === 'added') {
                        //update the UI
                        callback(docChange.doc.data());
                    }
                })
            });
    }
}

const chatroom = new Chatroom('general', 'Shuan');

chatroom.getChats((data) => {
    console.log(data);
});
// chatroom.addChat('hello everyone')
//     .then(() => console.log('chat added'))
//     .catch(err => console.log(err));