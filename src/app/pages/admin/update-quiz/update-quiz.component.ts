import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from './../../../services/category.service';
import { QuizService } from './../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  
  constructor(private _route:ActivatedRoute, private _quiz:QuizService, private _cat:CategoryService, private _snack: MatSnackBar) { }
  qId=0;
  quiz;
  categories;
  ngOnInit(): void {
    this.qId = this._route.snapshot.params.qid;
    // alert(this.qId);
    this._quiz.getQuiz(this.qId).subscribe(
      (data:any) => {
        this.quiz = data;
        console.log(this.quiz);
      },
      (error) => {
        console.log(error);
      }
    );
    this._cat.categories().subscribe((data: any)=> {
      this.categories = data;
    },
    (error) => {
      alert(`error in loading categories`);
    })
  }
  
  public updateData() {
    // alert('works');
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data)=> {
        this._snack.open("Quiz updated",'ok', {
          duration: 3000
        });
      },
      (error) => {
        this._snack.open("error in deleting quiz");
        console.log(error);
      }
    );
  }
}
