export const changeColor = function() {
    var list = this.refs.changeColor;
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function() {
            for (let i = 0; i < list.length; i++) {
                list[i].classList.remove("changecolor");
            }
            list[i].classList.add("changecolor");
        })
    }
}