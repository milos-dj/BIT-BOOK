class Post {
    constructor(content, id, dateCreated, userId, username, type, commentsNum) {
        this.content = content;
        this.id = id;
        this.dateCreated = dateCreated;
        this.userId = userId;
        this.username = username;
        this.type = type;
        this.commentsNum = commentsNum;
    }
}
export default Post;
