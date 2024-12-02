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
                    borderWidth: 2,
                    backgroundColor: ['pink','blue','yellow'],
                    borderColor: [
                        'rgba(245,0,9)',
                        'rgba(5,0,249',
                        'rgba(250,250,5)'
                    ]
                }
            ]
        }
    }
)