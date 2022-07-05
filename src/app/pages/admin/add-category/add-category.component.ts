import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category={title:'',
  description:''}

  constructor(private _category:CategoryService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if(this.category.title.trim() =='' || this.category.title==null) {
      this._snack.open("title required !!",'',{duration: 3000})
      return;
    }
    
    this._category.addCategory(this.category).subscribe(
      (data:any)=> {
        this.category.title=''
        this.category.description=''
        this._snack.open("Category added successful !!",'ok',{duration: 3000})
      },
      (error)=> {
        console.log(error);
        this._snack.open("Error!!, Something went wrong",'ok',{duration: 10000})
      }
    )
  }
}
