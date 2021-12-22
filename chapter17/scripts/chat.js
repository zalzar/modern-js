// addine new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
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
        this.unsub = this.chats
            .where('room', '==', this.room)
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
    updateName(username) {
        this.username = username;
    }
    updateRoom(room) {
        this.room = room;
        console.log('room updated');
        if (this.unsub) {
            this.unsub();
        }
    }
}

const chatroom = new Chatroom('general', 'Shuan');

chatroom.getChats((data) => {
    console.log(data);
});

setTimeout(() => {
    chatroom.updateRoom('gaming');
    chatroom.updateName('Ali');
    chatroom.getChats((data) => {
        console.log(data);
    });
    chatroom.addChat('hello');
}, 3000)
