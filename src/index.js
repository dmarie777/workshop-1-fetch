
const baseUrl = "https://platzi-avo.vercel.app";
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
        title.textContent = element.price;
        const price = document.createElement('div');
        price.textContent = element.name;
        //create container
        const container = document.createElement('div');
        //append elements
        container.append(image, title, price);
        //pushear container to all elements
        allElements.push(container);
    });
    //append elements from allElements
    document.body.append(...allElements);
});
