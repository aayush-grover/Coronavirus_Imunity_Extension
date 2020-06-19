replaceCorona(document.body);

function replaceCorona(element){
if(element.hasChildNodes()){
    element.childNodes.forEach(replaceCorona)
}
else if(element.nodeType === Text.TEXT_NODE){
    if(element.textContent.match(/coronavirus/gi))
    {
        element.parentElement.style.color = 'black'
        element.parentElement.style.backgroundColor = 'black'
    }
    // element.textContent = element.textContent.replace(/coronavirus/gi, 'Stay Home')
}
}