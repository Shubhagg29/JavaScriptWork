console.log("This is my index js file");

// Initialize the news api parameters
let lang = 'en';
let token = '7c44c0483334f66d105fb7c891df993b'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=${token}&lang=${lang}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach((element,index) => {  
            console.log(element,index) 
            let news = ` <div class="card">
                          <div class="card-header" id="heading${index}">
                         <h5 class="mb-0">
                         <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}"
                           aria-expanded="true" aria-controls="collapse${index}">
                           <span class="badge badge-pill badge-info">Breaking News</span> ${element.title}
                             </button>
                             </h5>
                            </div>
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                          <div class="card-body">${element.description}.<a href="${element.url}"target="_blank"> Read more here...</a></div>
                          </div>
                      </div>`
            newsHtml+=news;          
        });
        newsAccordion.innerHTML=newsHtml;



    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


