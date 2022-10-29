import { Inject, Injectable } from '@angular/core';
import { BookFilter } from '../models/book-filter';
import { SearchOptions, SearchOptionsToken } from '../models/search-options';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {


  findBook(filter: BookFilter){
    return this.bookService.getBooks().then(d => {
      let result = d;

      if(filter.title){
        result = result.filter(c => c.title.includes(<string>filter.title));
      }

      if(filter.author){
        result = result.filter(c => c.author.includes(<string>filter.author));
      }

      if(this.searchOptions.enableLimits){
        result = result.slice(0, this.searchOptions.maxItemCount);
      }

      return result;
    })
  }

  constructor(private bookService: BookService, @Inject(SearchOptionsToken) private searchOptions: SearchOptions) { }
}



