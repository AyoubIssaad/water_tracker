//const toggleBtn = document.getElementById('myOnOffSwitch');
//const addNewBtn = document.getElementById('addNewbtn');
var utc = new Date().toJSON().slice(0, 10);
window.onload = function () {
        //popup was opened, do what you want
        chrome.storage.local.get({ goal: 3.5, consumption: [] }, data => {
            let last = data.consumption[data.consumption.length - 1];
            if (last == undefined || last.date != utc){
                let todayConsumption = {
                    date: utc,
                    amount:0,
                }
                let db = data.consumption;
                db.push(todayConsumption);
                chrome.storage.local.set({ consumption: db});
                document.getElementById('today').innerHTML = '0';
                document.getElementById('goal').innerHTML = data.goal;
            }else{
                document.getElementById('today').innerHTML = data.consumption[data.consumption.length - 1].amount;
                document.getElementById('goal').innerHTML = data.goal;
            }
    })

    chrome.storage.local.get({ goal: 3.5, consumption: [] }, data => {

    })

    var addForm = document.getElementById('addForm');
    addForm.addEventListener('submit', (event) => {
        event.preventDefault;
        let amount = parseFloat(document.getElementById('amount').value); //should consider manually coercing values
        chrome.storage.local.get('consumption', data => {
            let lastElement = data.consumption.pop();
            let oldAmount = parseFloat(lastElement.amount);
            let newAmount = parseFloat(Math.round((oldAmount + amount) * 100) / 100).toFixed(2); // round it to two dicimal digits
            //console.log("TCL: newAmount", newAmount);
            //let newAmount = parseInt(.amount) + parseInt(amount);
            //console.log(newAmount);
            let newDaily = {
                date: utc,
                amount: newAmount,
            }
            let newData = data.consumption;
            newData.push(newDaily);
            //console.log("TCL: newData", newData)
            chrome.storage.local.set({ consumption: newData });
            document.getElementById('today').innerHTML = newAmount;
        })
    })
}
// const enableDisable = (currentState) => chrome.storage.local.set({ 'isEnabled': !currentState });

// toggleBtn.addEventListener('click', () => {
//     chrome.storage.local.get('isEnabled', data => enableDisable(data.isEnabled));
// });
// addNewBtn.addEventListener('click', event => {
//     event.preventDefault;
//     let newReg = document.querySelector("#newReg").value;
//     if ((newReg == "" || newReg == null) || !validateRegex(newReg)) {
//         hideAlert();
//         alertMsg('You must enter a valid regular expression!', 'error');
//         return false;
//     }
//     chrome.storage.local.get({ regExpressions: [] }, data => {
//         for (reg of data.regExpressions) {
//             if (newReg == reg) {
//                 hideAlert();
//                 alertMsg('Already Exists, Find a new one ;)', 'error');
//                 return false;
//             }
//         }
//         let regExpressions = data.regExpressions;
//         regExpressions.push(newReg);
//         chrome.storage.local.set({ regExpressions: regExpressions });
//         document.querySelector("#newReg").value = '';
//         hideAlert();
//         alertMsg('Added successfully', 'success');
//     })
// })
// function validateRegex(pattern) {
//     var parts = pattern.split('/'),
//         regex = pattern,
//         options = "";
//     if (parts.length > 1) {
//         regex = parts[1];
//         options = parts[2];
//     }
//     try {
//         new RegExp(regex, options);
//         return true;
//     }
//     catch (e) {
//         return false;
//     }
// }
// function alertMsg(msg, type) {
//     document.querySelector('.' + type).innerHTML = msg;
//     document.querySelector('.' + type).style.display = 'block';
// }
// function hideAlert() {
//     document.querySelector('.alert').style.display = 'none';
// }