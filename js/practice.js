// let books = [];
//         let editIndex = -1;

//         const renderItemsList = (items) => {
//             const bookListDiv = document.getElementById("book-list");
//             bookListDiv.innerHTML = ''; // Clear current list
//             items.forEach((item, index) => {
//                 const itemDiv = document.createElement('div');
//                 itemDiv.className = 'book-item';
//                 itemDiv.innerHTML = `
//                     <span>${item.title}</span>
//                     <span>${item.author}</span>
//                     <span>${item.pages}</span>
//                     <span>${item.price} грн</span>
//                     <button onclick="startEdit(${index})">Редагувати</button>
//                     <button onclick="deleteBook(${index})">Видалити</button>
//                 `;
//                 bookListDiv.appendChild(itemDiv);
//             });
//         };

//         const getInputValues = () => {
//             return {
//                 title: document.getElementById("title").value,
//                 author: document.getElementById("author").value,
//                 pages: document.getElementById("pages").value,
//                 price: document.getElementById("price").value,
//             };
//         };

//         const clearInputs = () => {
//             document.getElementById("title").value = '';
//             document.getElementById("author").value = '';
//             document.getElementById("pages").value = '';
//             document.getElementById("price").value = '';
//             editIndex = -1; // Reset edit index
//             document.getElementById("edit_button").style.display = 'none'; // Hide edit button
//         };

//         const addBook = () => {
//             const { title, author, pages, price } = getInputValues();
//             if (editIndex === -1) {
//                 books.push({ title, author, pages, price });
//             } else {
//                 books[editIndex] = { title, author, pages, price };
//             }
//             clearInputs();
//             renderItemsList(books);
//         };

//         const deleteBook = (index) => {
//             books.splice(index, 1);
//             renderItemsList(books);
//         };

//         const startEdit = (index) => {
//             editIndex = index;
//             const book = books[index];
//             document.getElementById("title").value = book.title;
//             document.getElementById("author").value = book.author;
//             document.getElementById("pages").value = book.pages;
//             document.getElementById("price").value = book.price;
//             document.getElementById("edit_button").style.display = 'block'; // Show edit button
//         };

//         const searchBook = () => {
//             const searchTerm = document.getElementById("find_input").value.toLowerCase();
//             const foundBooks = books.filter(book =>
//                 book.title.toLowerCase().includes(searchTerm) ||
//                 book.author.toLowerCase().includes(searchTerm)
//             );
//             renderItemsList(foundBooks);
//         };

//         document.getElementById("submit_button").addEventListener("click", (event) => {
//             event.preventDefault();
//             addBook();
//         });

//         document.getElementById("find_button").addEventListener("click", searchBook);

//         document.getElementById("cancel_find_button").addEventListener("click", () => {
//             document.getElementById("find_input").value = '';
//             renderItemsList(books);
//         });

//         document.getElementById("edit_button").addEventListener("click", (event) => {
//             event.preventDefault();
//             addBook(); // Reuse the addBook function for editing
//         });

//         // Initial rendering of the book list
//         renderItemsList(books);


// let books = [];

// function addBook(title, author, pages,price ) {
//     let book = {
//         title: title,
//         author: author,
//         pages: pages,
//         price: price
//     };
//     books.push(book);
// }

// addBook("Книга 1", "Автор 1", 250, 300);
// addBook("Книга 4", "Автор 4", 4100, 7500);
// addBook("Книга 2", "Автор 2", 400, 500);
// addBook("Книга 3", "Автор 3", 4500, 4500);

// //console.log(books);

// function deleteBook(index) {
//     books.splice(index, 1);
// }

// // deleteBook(0);

// function searchBook(query) {
//     return books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
// }

// let findBook = searchBook('книга 1  ');

// // console.log(findBook);

// for (let i = 0; i < books.length; i++ ) {
//     for (let j = i; j < books.length; j++) {
//         if (books[i] > books[j]) {
//             let temp = books[i];
//             books[i] = books[j];
//             books[j] = temp;
//         }
//         console.log(books)
//     }
// }

// console.log(this);