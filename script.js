const displayCategory = async () => {
    const response = await fetch(' https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json();
    const listContainer = document.getElementById('list-container');
    data.data.news_category.forEach((category) => {
        const a = document.createElement('a');
        a.innerHTML = `<li onclick="displayNews('${category.category_id}')">${category.category_name}</li>
    `;
        listContainer.appendChild(a);
    });
};
const displayNews = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    data.data.forEach((news) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card">
        <img class="news-img" src=${news.image_url} />
        <h3>Name : ${news.author.name}</h3>
        <p>Rating : ${news.rating.number}</p>
        <p>Badge : ${news.rating.badge}</p>
        <p>Title : ${news.title}</p>
        <p>Total view : ${news.total_view}</p>
        </div>
        `;
        cardContainer.appendChild(div)
    })
    console.log(data.data);
}
displayCategory();
displayNews('01')