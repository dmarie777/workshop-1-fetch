
const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');
//function to format prices using the internacionalization API
const formatPrice = (price) => {
    const newPrice = new Intl.NumberFormat(
        'en-EN',
        {
            style: 'currency',
            currency:'USD'
        }
    ).format(price)
    return newPrice;
}

// web api
fetch(`${baseUrl}/api/avo`)
.then(res => res.json())
.then(data => {
    const allElements = [];
    data.data.forEach(element => {
        //create elements
        const image = document.createElement('img');
        image.src = `${baseUrl}${element.image}`;
        const title = document.createElement('h2');
        title.textContent = element.name;
        const price = document.createElement('div');
        price.textContent = formatPrice(element.price);
        //create container
        const container = document.createElement('div');
        //append elements
        container.append(image, title, price);
        //pushear container to all elements
        allElements.push(container);
    });
    //append elements from allElements
    appNode.append(...allElements);
});
