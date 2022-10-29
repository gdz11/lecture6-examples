import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/book';
import { BookService } from '../shared/services/book.service';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl(''),
    author: new FormControl('')
  });

  books: Book[] = [];

  books2: Promise<Book[]>;

  onAddBook(){
    let value = this.form.value;
    this.booksService.addBook({
      id: '',
      title: value.title,
      author: value.author
    });

    this.refresh();

  }

  refresh(){
    this.booksService.getBooks().then(d => {
      this.books = d;
    });
  }

  
  constructor(private booksService: BookService) { }

  ngOnInit(): void {
    this.booksService.getBooks().then( d=> {
      this.books = d;
    });

    this.books2 = this.booksService.getBooks();
  }

}
