const dateFormat = (datePost) => {
    let today = new Date().getDate();
    let date = new Date(datePost);

    if (datePost === null) {
        return 'No posts yet'
    }
    if (date.getDate() === today) {
        let hour = date.getHours();
        let min = date.getMinutes();
        if (min.toString().length === 1) {
            min = `0${min}`
        }
        return `Last post at ${hour}:${min}`
    } else {
        let dateOfPost = date.toLocaleDateString('en-GB');
        let hour = date.getHours();
        let min = date.getMinutes();
        if (min.toString().length === 1) {
            min = `0${min}`
        }
        return `Last post at ${dateOfPost} - ${hour}:${min}`
    }
}
export default dateFormat