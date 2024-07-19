function myMove() {
    let id = null;
    const el = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 540) {
            clearInterval(id);
        } else {
            pos++;
            el.style.top = pos + "px";
            el.style.left = pos + "px";
        }
    }
}

$(document).ready(function() {
    $("#move").on("click", function(){
        myMove();
    });
});