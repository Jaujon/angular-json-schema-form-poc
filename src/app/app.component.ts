import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [QuestionService],
})
export class AppComponent {
  questions: any[];
  http: Http;

  constructor(service: QuestionService, http: Http) {
    http.get('/assets/mock-data/editorschema.json').subscribe(res => (this.questions = service.fromSchema(res.json())));
  }
}
