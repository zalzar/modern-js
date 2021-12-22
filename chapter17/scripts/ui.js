// render chat templates to the DOM
// clear the list of chats (when the room changes)

class ChatUI {
    constructor(list) {
        this.list = list;
    }
    render(data) {
        const html = `
        <li className="list-group-item">
            <span className="username">${data.username}</span>
            <span className="message">${data.message}</span>
            <div className="time">${data.created_at.toDate()}</div>
        </li>
        `;
        this.list.innerHTML += html;
    }

}