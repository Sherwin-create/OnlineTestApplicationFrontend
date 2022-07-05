import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from './../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  constructor(private _quiz:QuizService, private _snack: MatSnackBar) { }
quizzes=[];
  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);

      },
      (error) => {
        console.log(error);
        
      }
    )
  }

    deleteQuiz(qId) {
      this._quiz.deleteQuiz(qId)
      .subscribe((data) => {
        this.quizzes = this.quizzes.filter((quiz)=> quiz.qId != qId);
        this._snack.open("Quiz deleted",'ok', {
          duration: 3000
        });
      },
      (error)=> {
        this._snack.open("error in deleting quiz");
        console.log(error);
      }
      );
    }
}
