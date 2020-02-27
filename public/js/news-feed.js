class NewsFeed{
    constructor(){
        this.key = '2010923677e5403da7ca027a0eb66e29';
        this.newsURL = 'https://newsapi.org/v2/top-headlines?country=in';
    }

    //gets data from the api
    async getNews(){
        const query = `&apiKey=${this.key}`;
        const response = await fetch(this.newsURL + query);
        const data = await response.json();
        
        return data;
    }
}
