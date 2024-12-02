const ctx = document.getElementById('barChart');

new Chart(
    ctx, {
        type: 'bar',
        data:{
            labels:["red","blue","yellow"],
            datasets:[
                {
                    label:"Votes",
                    data:[12,19,3],
                    backgroundColor: ['red','blue','yellow']
                }
            ]
        }
    }
)