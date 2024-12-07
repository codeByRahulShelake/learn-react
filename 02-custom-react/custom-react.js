const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me'
}

function customRender(reactElement, mainDiv){
    let newTag = document.createElement(reactElement.type)

    newTag.innerHTML = reactElement.children
    newTag.setAttribute('href',reactElement.props.href)
    newTag.setAttribute('target',reactElement.props.target)

    mainDiv.appendChild(newTag)
}

let mainDiv = document.querySelector('#root')

customRender(reactElement, mainDiv)