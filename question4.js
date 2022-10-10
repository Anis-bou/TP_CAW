var isStart = false;
window.onload = function () {
    var wall = document.getElementsByClassName("boundary");
    /*start */
    document.getElementById("start").addEventListener("click", function () {
        isStart = true;
        for (var i = 0; i < wall.length; i++) { wall[i].style.backgroundColor = "#EEEEEE"; }

    })

    /*wall */
    for (var i = 0; i < wall.length; i++)
        wall[i].addEventListener("mouseover", function (event) {
            if (isStart) {
                for (var i = 0; i < wall.length; i++) { wall[i].style.backgroundColor = "#ff8888"; }
                isStart = false;
                
            }
        });
    /*end */
    document.getElementById("end").addEventListener("mouseover", function () {
        if (isStart) {
        
            alert("Congratulation!\nYou win the game!");
        }
        
        isStart = false;
    });
}