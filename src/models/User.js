class User {
    constructor(id, name, about, lastPostDate, img, email, aboutShort, postsCount, commentsCount) {
        this.id = id;
        this.name = name;
        this.about = about;
        this.lastPostDate = lastPostDate;
        this.img = img;
        this.email = email;
        this.aboutShort = aboutShort;
        this.postsCount = postsCount;
        this.commentsCount = commentsCount;
    }
}
export default User;
