
const url = "https://platzi-avo.vercel.app/api/avo";
// web api
fetch(url)
.then(res => res.json())
.then(data => {
    const allElements = [];
    data.data.forEach(element => {
        //create elements
        const image = document.createElement('img');
        const title = document.createElement('h2');
        const price = document.createElement('div');
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
