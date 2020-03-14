class noticesFeed{
    constructor(){
        this.data = db.collection('notices');
    }

   getNotices(callback){
        this.data.onSnapshot( snapshot => {
            console.log(snapshot.docChanges());
            callback(snapshot.docChanges());
        })
    }

}

//noticesfeed = new noticesFeed();
//noticesfeed.getNotices();