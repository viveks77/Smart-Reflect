const notices = document.querySelector('.notices-feed');

const getData = (data) => {
    console.log(data.doc.data());
}

noticesfeed = new noticesFeed();
noticesfeed.getNotices(getData);

