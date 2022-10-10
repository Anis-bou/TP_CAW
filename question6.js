var isStart = false;
window.onload = function () {
    var wall = document.getElementsByClassName("boundary");
    /*start */
    document.getElementById("start").addEventListener("click", function () {
        document.getElementById("status").textContent = "You are playing now don't hit the wall and don't leave the maze and try to rach the End (E)";
        isStart = true;
        for (var i = 0; i < wall.length; i++) { wall[i].style.backgroundColor = "#EEEEEE"; }

    })

    
    /*wall */
    for (var i = 0; i < wall.length; i++)
        wall[i].addEventListener("mouseover", function (event) {
            if (isStart) {
                for (var i = 0; i < wall.length; i++) { wall[i].style.backgroundColor = "#ff8888"; }
                document.getElementById("status").textContent = "You hit the wall, You lost the game! Press S to strat again";
                isStart = false;
                
            }
        });
    
    document.getElementById("end").addEventListener("mouseover", function () {
        if (isStart) {
            document.getElementById("status").textContent = "Congratulation! You won the game!\n Click S to start again";
        }
        
        isStart = false;
    });
}