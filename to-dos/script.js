function exibeTodos(){    
    const btn = document.getElementById("btn").addEventListener('click', getTodo);
    const div = document.querySelector('#listTo-do')
    console.log(btn)


    let con;
    function getTodo(){
        
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((json) => {
                con = json;
            })
            .then(() => exibeTodo())
            .catch((error)=> console.log(error))
        console.log(con)
    }


    function exibeTodo (){
        setTimeout(()=>{
            let saida = "";
            con.forEach((post) => {
                if(post.completed === true){
                    saida += `
                    <div class=" listaTodoCompleted">
                        <p>atividade:${post.id}  ${post.title}</p>
                    </div>`
                } else {
                    saida += `
                    <div class="listaTodoIncomplet">
                        <p>atividade:${post.id}  ${post.title}</p>
                    </div>`
                }
            
            });
        div.innerHTML = saida;
        }, 1000)
    }
}
exibeTodos()
