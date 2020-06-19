replaceCorona(document.body);

function replaceCorona(element){
if(element.hasChildNodes()){
    element.childNodes.forEach(replaceCorona)
}
else if(element.nodeType === Text.TEXT_NODE){
    if(element.textContent.match(/coronavirus/gi))
    {
    //     const replacedText = document.createElement('span')
    //     replacedText.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span style="background-color: black;color: black;">$1</span>')
    //     element.replaceWith(replacedText)
    // }
    // element.textContent = element.textContent.replace(/coronavirus/gi, 'Stay Home')
    element.parentElement.remove()
    }
}
}