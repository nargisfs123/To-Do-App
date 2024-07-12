const item = document.querySelector("#item")
const todobox = document.querySelector("#to-do-box")


item.addEventListener(
    "keyup",
    function(event){
            // console.log(event.key) to get whatever user types//
        if(event.key == "Enter") {
            addToDo(this.value)
            this.value=""  //empty after enter//

        }

    }
)

const addToDo = (item) => {
    const listitem = document.createElement("li");
    listitem.innerHTML = `${item}
    <i class= "fas fa-times" ></i>
    `;
     
    listitem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )
    listitem.querySelector("i").addEventListener(
        "click",
        function(){
            listitem.remove()
        }
    )
    todobox.appendChild(listitem)
}