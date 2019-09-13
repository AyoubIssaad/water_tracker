var utc = new Date().toJSON().slice(0, 10);
window.onload = function () {
        //popup was opened, do what you want
        chrome.storage.local.get({ goal: 3.5, consumption: [] }, data => {
            let last = data.consumption[data.consumption.length - 1];
            let amount2 = 0;
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
            } else {
                document.getElementById('today').innerHTML = data.consumption[data.consumption.length - 1].amount;
                document.getElementById('goal').innerHTML = data.goal;
                amount2 = data.consumption[data.consumption.length - 1].amount;
            }
            let percentage = -Math.round((amount2/3.5*100)-100);
            percentage +="%";
            console.log(percentage);
            document.getElementById('rect2Y').setAttribute("y", percentage);
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
            let newAmount = parseFloat(Math.round((oldAmount + amount) * 100) / 100).toFixed(2); // round it to two decimal digits
            let newDaily = {
                date: utc,
                amount: newAmount,
            }
            let newData = data.consumption;
            newData.push(newDaily);
            chrome.storage.local.set({ consumption: newData });
            document.getElementById('today').innerHTML = newAmount;
            document.getElementById('rect2Y').setAttribute("y", "10%");
            let percentage = -Math.round((newAmount / 3.5 * 100) - 100);
            percentage += "%";
            console.log(percentage);
            document.getElementById('rect2Y').setAttribute("y", percentage);
        })
    })
}