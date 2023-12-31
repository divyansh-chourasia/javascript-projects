const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event){
        if( event.key == "Enter"){
            // addToDo(this.value);
            // this.value = ""
            let cleanlist = this.value.trim();
            if (cleanlist.length > 0) {
                addToDo(cleanlist)
                this.value = "";
            } else {
                return;
            }

        }    
    }
)
const addToDo  = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
    <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )

    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )
    toDoBox.appendChild(listItem)

}


