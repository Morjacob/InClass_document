const ctx = document.getElementById('barChart');

new Chart(
    ctx, {
        type: 'bar',
        data:{
            labels:["pink","blue","yellow"],
            datasets:[
                {
                    label:"Votes",
                    data:[12,19,3],
                    backgroundColor: ['pink','blue','yellow']
                }
            ]
        }
    }
)