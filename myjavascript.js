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
	title = prompt("Enter the books title");
	author = prompt("author?");
	pages = prompt("pages");
	read = prompt("read? yes or no");
	
	let x = new book(title,author, pages,read ) ; //cant think of a variable name lol!

	myLibrary.push(x);
}
// addBookToLibrary();
// console.log(myLibary[0].info());  so till here it is working as expected an
// and it is a goddamn function.

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

let displayed = 0;  //to not let the books reapeat in the for loop when displayed.
function displayBooks() {
	const container = document.querySelector(".container");
	for(displayed; displayed<myLibrary.length; displayed++)
	{

		let card = document.createElement('div');
		card.classList.add('card');
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

		container.appendChild(card);

	}
}

displayBooks();


	


// //to make the user add the book by calling the addBookToLibrary func.
const add = document.querySelector("#add");
add.addEventListener('click', () => {
	addBookToLibrary();
	displayBooks();
}
)