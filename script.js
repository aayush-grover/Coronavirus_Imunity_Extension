replaceCorona(document.body);

function replaceCorona(element){
if(element.hasChildNodes()){
    element.childNodes.forEach(replaceCorona)
}
else if(element.nodeType === Text.TEXT_NODE){
    element.textContent = element.textContent.replace(/coronavirus/gi, 'Stay Home')
}
}