import { QuizService } from './../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css'],
})
export class LoadQuizComponent implements OnInit {
  catId;
  quizzes;
  constructor(private _router: ActivatedRoute, private _quiz: QuizService) {}

  ngOnInit(): void {
    this._router.params.subscribe((params) => {
      this.catId = params.catId;
      console.log(params);
      if (this.catId == 0) {
        console.log('Load all the quiz');

        this._quiz.getActiveQuizzes().subscribe(
          (data: any) => {
            this.quizzes = data;
            console.log(this.quizzes);
          },
          (error) => {
            console.log(error);
            alert('error in loading all quizzes');
          }
        );
      } else {
        console.log('load specific quiz');
        this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
          (data: any) => {
            this.quizzes = data;
          },
          (error) => {
            alert('error in loading quiz data');
          }
        );
      }
    });
    // console.log(this.catId);
  }
}
