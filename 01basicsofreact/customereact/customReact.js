function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHtml = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

// Define a React element
const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'Visit Google'
}

// Select the container element
const mainContainer = document.querySelecter('#react');

// Render the React element into the container
customRender(reactElement, mainContainer);