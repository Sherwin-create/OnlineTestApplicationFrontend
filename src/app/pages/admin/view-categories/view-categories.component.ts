import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories = [];

  constructor(private snack: MatSnackBar,private _category:CategoryService) { }

  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=> {
      this.categories= data;
      console.log(this.categories);
    },
    (error) => {
      console.log(error);
      this.snack.open("Something went wrong","",{duration:3000})
  });
  }

}
