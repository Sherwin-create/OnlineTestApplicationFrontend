import { QuestionService } from './../../../services/question.service';
import { ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  qid;
  questions;

  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;

  isSubmit = false;

  constructor(
    private locationSt: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService
  ) {}

  ngOnInit(): void {
    this.preventBackButton();
    this.qid = this._route.snapshot.params.qid;
    console.log(this.qid);
    this.loadQuestions();
  }
  loadQuestions() {
    this._question.getQuestionsOfQuizFotTest(this.qid).subscribe(
      (data: any) => {
        this.questions = data;
        this.questions.forEach((q) => {
          q['givenAnswer'] = '';
        });
        console.log(this.questions);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  preventBackButton() {
    history.pushState(null, null, location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, null, location.href);
    });
  }

  submitQuiz() {
    this.isSubmit = true;
    // console.log(this.questions);
    this.questions.forEach((q) => {
      if (q.givenAnswer == q.answer) {
        this.correctAnswers++;
        let marksSingle =
          this.questions[0].quiz.maxMarks / this.questions.length;
        this.marksGot += marksSingle;
      }
      if (q.givenAnswer.trim() != '') {
        this.attempted++;
      }
    });
    console.log('correct Answers :' + this.correctAnswers);
    console.log('marks Got' + this.marksGot);
    console.log('attempted' + this.attempted);
  }
}
