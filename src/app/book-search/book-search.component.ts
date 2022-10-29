import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/book';
import { BookSearchService } from '../shared/services/book-search.service';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  books: Promise<Book[]>;

  form = new FormGroup({
    title: new FormControl(''),
    author: new FormControl('')
  });

  onSearchBook(){
    let value = this.form.value;

    this.books = this.searchService.findBook({
      title: value.title,
      author: value.author
    })
  }


  constructor(private searchService: BookSearchService) { }

  ngOnInit(): void {
    this.onSearchBook();
  }

}
