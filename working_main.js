// console.log("Regex_Locator working!");
// var regex = /(\d+)/,
//     replacement = '<span style="background-color:red;color:white;">$1</span>';

// function replaceText(el) {
//     if (el.nodeType === 3) {
//         if (regex.test(el.data)) {
//             var temp_div = document.createElement('div');
//             temp_div.innerHTML = el.data.replace(regex, replacement);
//             var nodes = temp_div.childNodes;
//             while (nodes[0]) {
//                 el.parentNode.insertBefore(nodes[0], el);
//             }
//             el.parentNode.removeChild(el);
//         }
//     } else if (el.nodeType === 1) {
//         for (var i = 0; i < el.childNodes.length; i++) {
//             replaceText(el.childNodes[i]);
//         }
//     }
// }

// replaceText(document.body);

// /**
//  * console.log("Regex_Locator working!");
// var regex = /(\d+)/,
//     replacement = '<span style="background-color:red;color:white;">$1</span>';

// function replaceText(el, regex) {
//     console.log(regex);
//     if (el.nodeType === 3) {
//         if (regex.test(el.data)) {
//             var temp_div = document.createElement('div');
//             temp_div.innerHTML = el.data.replace(regex, replacement);
//             var nodes = temp_div.childNodes;
//             while (nodes[0]) {
//                 el.parentNode.insertBefore(nodes[0], el);
//             }
//             el.parentNode.removeChild(el);
//         }
//     } else if (el.nodeType === 1) {
//         for (var i = 0; i < el.childNodes.length; i++) {
//             replaceText(el.childNodes[i], regex);
//         }
//     }
// }

// replaceText(document.body, regex);
//  *
//  */

var i;
for(i=0; i<10; i++){

}
let x = i;
console.log("TCL: x", x)