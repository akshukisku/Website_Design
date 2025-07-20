var box = document.querySelector(".box")
var button = document.querySelector("button")
var h5 = document.querySelector("h5")
// button.addEventListener("click",function(){
//     var r = Math.floor(Math.random()*256)
//     var g = Math.floor(Math.random()*256)
//     var b = Math.floor(Math.random()*256)

//     box.style.backgroundColor=`rgb(${r},${g},${b})`;
// })

button.addEventListener("click",function(){
    var teammates=[{
        team:'KKR',
        primary:'purple'
    },
    {
        team:'CSK',
        primary:'yellow',
    },
    {
        team:'RR',
        primary:'pink'
    },
    {
        team:'SRH',
        primary:'orange'
    },
    {
        team:'RCB',
        primary:'red'
    },
    {
        team:'MI',
        primary:'blue'
    }]
    var count = Math.floor(Math.random()*teammates.length);
    let winner = teammates[count].team;
    let color = teammates[count].primary;
    h5.innerHTML = winner
    h5.style.backgroundColor=color
    // let winner = arr[count];
    // h5.innerHTML=winner;
})