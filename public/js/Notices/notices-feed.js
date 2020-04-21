const noticeContainer = document.querySelector(".notices-feed");


db.collection('notices')
    .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            if (change.type === "added") {
                getData(change.doc.data(), change.doc.id);
                viewNotice();
            }
        })
    })

const notices = []

getData = (data, id) => {
    let obj = {
        data,
        id
    }
    notices.push(obj);
}

viewNotice = () => {
    if (notices.length === 0) {
        noticeContainer.innerHTML = '<h3 class="text-secondary" style = "margin-top : 75px; margin-right : 10px;">NO NEW NOTICES</h3>';
    } else {
        var i = 0;
        addNotice(i);
        i += 1;
        setInterval(function () {
            addNotice(i);
            i++;
            if (i >= notices.length) {
                i = 0;
            }
        }, 10000)
    }
}

addNotice = (i) => {
    const html = `
    <div data-id = "${notices[i].id}" class = "data container">
    <h3 id = "title">${notices[i].data.title}</h3>
    <div class = "notice-data">
        <p id= "content">${notices[i].data.content}</p>
        <p id = "author" class = "text-secondary">- ${notices[i].data.author}</p>
    </div>
    </div>
    `;

    noticeContainer.innerHTML = html;
}