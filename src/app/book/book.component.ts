import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books")
    this.books = savedBooks ? JSON.parse(savedBooks) : []
  }

  NewBookTitle: string ="";
  NewBookAuthor: string ="";
  books: Book[] = []

  addBook(){
    if(this.NewBookTitle.trim().length && this.NewBookAuthor){
      let newBook: Book = {
        id: 1,
        title: this.NewBookTitle,
        author: this.NewBookAuthor
      }

      this.books.push(newBook)

      this.NewBookTitle = "";
      this.NewBookAuthor = "";

      localStorage.setItem("books", JSON.stringify(this.books))
    }
  }

  deleteBook(index: number){
    this.books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(this.books))
  }
}