const newsContainer = document.querySelector('.news-feed');

class News{
    constructor(){
        this.newsFeed = new NewsFeed();
    }

    //gets the news data from API
    getData(){
        this.newsFeed.getNews()
        .then(data => {
            this.getNews(data.articles);
        })
        .catch(err => {
            console.log(err);
        });
    }

    //updates the ui
    updateNewsUI(articles,counter){
    
        //source queries
        const source = articles[counter].source.name;
        const title = articles[counter].title;
        const when = dateFns.distanceInWordsToNow(
            articles[counter].publishedAt,
            {addSuffix : true}
        );
        
        //code to be injected
        const html =`
            <div class = 'text-center news'>
                <span class = "text-secondary">${source}, ${when}</span>
                <br><span>${title}</span>
            </div>`;
        
            newsContainer.innerHTML = html;
        
    }
    
    //getting updates by minutes
    getNews(articles){
        this.setIntervalImmediately(articles);
    }

    setIntervalImmediately(articles){
        let counter = 0;
        this.updateNewsUI(articles,counter);
        counter = 1;
        setInterval(() => {
            this.updateNewsUI(articles,counter);
            counter++;
            if(counter >= articles.length){
                counter = 0;
            }   
        },10000);
    }
}

