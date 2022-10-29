import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchOptionsToken } from './shared/models/search-options';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: SearchOptionsToken,
    useValue: {
      enableLimits: false,
      maxItemCount: 2
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
