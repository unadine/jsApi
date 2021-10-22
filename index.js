let data = [];
const d = new Date();


window.onload= function retrieveData(){
    axios.get("https://the-dune-api.herokuapp.com/books/30")
    .then(response=>{
        data= response.data;
        updateBook(data);
    })
}

function updateBook(bookUpdate =data){
   mainDiv.innerHTML = '';

    bookUpdate.forEach(item =>{
        const newDiv = document.createElement('div');
        newDiv.classList.add("card", "shadow-lg","bg-white");

        const img = document.createElement('img');
        img.classList.add("w-full","h-32","sm:h-48","object-cover");
        img.src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80';

        const paragraph = document.createElement('p');
        paragraph.classList.add("m-4","block","text-gray-700","text-sm");
        paragraph.innerHTML = `<strong>Id:</strong> ${item.id}
                                <br /> <strong>Title:</strong> ${item.title} <br /> 
                                <strong>Author:</strong> ${item.author} <br /> 
                                <strong>Price:</strong> $${Math.floor(Math.random()*100)}  <br />  
                                <strong>Year:</strong>${item.year}`;

        const button = document.createElement('button');
        button.classList.add("w-full","bg-green-300","p-3","mb-2");
        button.innerHTML= "Buy Now";

        newDiv.appendChild(img);
        newDiv.appendChild(paragraph);
        newDiv.appendChild(button);       
        mainDiv.appendChild(newDiv);
    })

}


function filterYear(){
    data= data.filter(book => book.year >= 2010 && book.year<=d.getFullYear());
    updateBook();
}

function filterAuthor(){
    data = data.filter(book => Array.isArray(book.author) );
    updateBook();
}

function sortId(){
    data.sort((a, b) => a.id - b.id);
    updateBook();

}





