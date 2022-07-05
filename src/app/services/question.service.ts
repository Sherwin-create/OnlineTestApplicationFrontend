import { QuizService } from './quiz.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private _http: HttpClient) {}

  public getQuestionsOfQuiz(qId) {
    return this._http.get(`${baseUrl}/question/quiz/all/${qId}`);
  }

  public getQuestionsOfQuizFotTest(qId) {
    return this._http.get(`${baseUrl}/question/quiz/${qId}`);
  }

  public addQuestion(question) {
    return this._http.post(`${baseUrl}/question/`, question);
  }

  public deleteQuesion(quesitonId) {
    return this._http.delete(`${baseUrl}/question/${quesitonId}`);
  }
}
