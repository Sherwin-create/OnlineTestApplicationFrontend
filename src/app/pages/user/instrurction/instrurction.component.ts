import { QuizService } from './../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instrurction',
  templateUrl: './instrurction.component.html',
  styleUrls: ['./instrurction.component.css']
})
export class InstrurctionComponent implements OnInit {
  qid;
  quiz;
  constructor(private _route:ActivatedRoute, private _quiz:QuizService) { }

  ngOnInit(): void {
    this.qid = this._route.snapshot.params.qid;
    // console.log(this.qid);
    this._quiz.getQuiz(this.qid).subscribe(
      (data:any)=> {
        console.log(data);
        this.quiz = data;
      },
      (error)=> {
        console.log(error);

      }
    )
  }

} 
