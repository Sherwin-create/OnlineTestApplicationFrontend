import { QuizService } from './../../../services/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
categories =[];

quizData = {
  title: '',
  description: '',
  maxMarks: '',
  numberOfQuestions: '',
  active: true,
  category: {
    cid: '',
  },
}
  constructor(private _cat:CategoryService,private _snack:MatSnackBar, private _quiz:QuizService) { }

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data:any) => {
        this.categories= data;
        console.log(this.categories);
      },
      (error)=> {
        console.log(error);
        this._snack.open("Error!!, Something went wrong",'ok',{duration: 10000});
      }
    )
  }

  addQuiz() {
    if(this.quizData.title.trim() =='' || this.quizData.title == null) {
      this._snack.open("Title requires","",{
        duration: 3000,
      });
      return;
    }
   
    this._quiz.addQuiz(this.quizData).subscribe(
      (data)=> {
        this._snack.open("success, Quiz is added");
        this.quizData = {
          title: '',
          description: '',
          maxMarks: '',
          numberOfQuestions: '',
          active: true,
          category: {
            cid: '',
          },
        };
      },

      (error) => {
        this._snack.open("error");
        console.log(error);
      }
    );
  }

  

}

