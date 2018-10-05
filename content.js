var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText1 = text.replace(/fumer du cannabis/gi, 'boire du vin');
            var replacedText = text.replace(/cannabis/gi, 'vin');
            
            if (replacedText1 !== text) {
                element.replaceChild(document.createTextNode(replacedText1), node);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
