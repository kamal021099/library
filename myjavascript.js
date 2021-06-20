let myLibrary = [];

//constructor
function book(title, author, pages, read)
{
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function(){
		return (this.title + " by " + 
		this.author + ", " + this.pages + " pages" + ", " + 
		this.read) ;	
	}
		
}
// book.prototype.info = function()
// {
// 	return (this.title + " by " + this.author + ", " + this.pages + " pages" + ", " + this.read) ;

// }


function addBookToLibrary() {

	let form = document.querySelector("form");

	let title = form.querySelector("#title").value;
	let author = form.querySelector("#author").value;
	let pages = form.querySelector("#pages").value;
	let read;
	let reads = form.querySelectorAll(`input[type="radio"]`);
	reads.forEach(radio => {
		if(radio.checked){
			read = radio.value;
		}
	});

	let x = new book(title,author, pages,read ) ; //cant think of a variable name lol!
	myLibrary.push(x);
}
// addBookToLibrary();
// console.log(myLibary[0].info());  so till here it is working as expected an
// and it is a goddamn function.


//dummy data
let y = new book();
y.author = "dfsa";
y.title = "dfsa";
y.pages = "dfsa";
y.read = "dfsa";
myLibrary.push(y);

let z = new book();
z.author = "3";
z.title = "3";
z.pages = "3";
z.read = "3";
myLibrary.push(z);
//dummy data

let displayed = 0;  //to not let the books reapeat in the for loop when displayed.
function displayBooks() {
	 let container = document.querySelector(".container");
	for(displayed; displayed<myLibrary.length; displayed++)
	{

		let card = document.createElement('div');
		card.classList.add('card');
		// card.setAttribute("data-key", displayed); unnecessary
		card.setAttribute("id",myLibrary[displayed].title);
		
		let title = document.createElement("p");
		title.textContent = "title: " + myLibrary[displayed].title;
		card.appendChild(title);
		
		let author = document.createElement("p");
		author.textContent = "author: " + myLibrary[displayed].author;
		card.appendChild(author);
		
		let pages = document.createElement("p");
		pages.textContent = "pages: " + myLibrary[displayed].pages;
		card.appendChild(pages);
		
		let read = document.createElement("p");
		read.textContent = "read: " + myLibrary[displayed].read;
		card.appendChild(read);
		
		let del = document.createElement("button");
		del.textContent = "del";
		del.classList.add("delete");
		del.setAttribute("data-key", displayed);
		card.appendChild(del);

		container.appendChild(card);

		delEvent();

	}
}

displayBooks(); //executing here to display the dummy data.


	


// //to make the user add the book by calling the addBookToLibrary func.
const add = document.querySelector("#add");
add.addEventListener('click', () => {
	let form = document.querySelector("form");
	form.style.display = "block";
	form.style.zIndex = "1";
	form.style.width = "100%";
	form.style.height = "100%";
}
)

const submit = document.querySelector("#submit");
submit.addEventListener('click', (e) => {
	e.preventDefault();
	addBookToLibrary();
	displayBooks();
	document.querySelector('form').reset();
	document.querySelector('form').style.display = "none";
})


function delEvent(){
	
	const dels = document.querySelectorAll(".delete");
	dels.forEach(del => {
		del.addEventListener('click', delCard);
	})

}

function delCard(e){
	let key = e.target.getAttribute("data-key");
	console.log(key);
	console.log(myLibrary);
	
	myLibrary.splice(key,1);
	console.log(myLibrary);

	// //always delete the prev container before rerunning such fn.
	document.querySelector(".container").innerHTML = '';
	displayed = 0;
	displayBooks();

}