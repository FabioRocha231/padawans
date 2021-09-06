function exibeAlbuns(){    
    const btn = document.getElementById("btn").addEventListener('click', getPost);
    const div = document.querySelector('#cardDiv')


    let con;
    function getPost(){
        
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => res.json())
            .then((json) => {
                con = json;
            })
            .then(() => exibeFotos())
            .catch((error)=> console.log(error))
    }


    function exibeFotos (){
        setTimeout(()=>{
            let saida = "";
            con.forEach((post) => {
            saida += `
            <div class="card col-3 m-1 mx-auto fotos">
                <img class="card-img-top" src="${post.thumbnailUrl}">
                <div class="card-body>
                    <h5 class="card-title">${post.id}</h5>
                    <p class="card-text">${post.title}</p>
                </div>
            
            </div>`
            });
        div.innerHTML = saida;
        }, 1000)
    }
}
exibeAlbuns()
