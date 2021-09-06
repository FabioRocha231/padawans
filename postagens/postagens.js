function exibeLista(){
    const listaPosts = document.querySelector('.postagens');

    console.log(listaPosts)
    let posts;
    fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .then((json) =>{
            posts = json;
        })
        .then(() => {
            exibePosts();
        })
    console.log(posts)
    function exibePosts (){
        setTimeout(()=>{
            let saida = "";
            posts.forEach((post) => {
                
            saida +=`
            <div class="publicacao">
                    <h1 class="titulo">${post.title}</h1>
                    <div class="conteudo"><p>${post.body}</p></div>
                </div>
            `
            });
        listaPosts.innerHTML = saida;
        }, 1000)
    }
}

exibeLista(); 