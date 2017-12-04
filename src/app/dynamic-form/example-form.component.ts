import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-example-form',
  template: `<app-dynamic-form *ngIf="questions" [questions]="questions"></app-dynamic-form>`,
  providers: [QuestionService]
})
export class ExampleFormComponent {
  questions: any[];
  http: HttpClient;
  constructor(service: QuestionService, http: HttpClient) {
    http.get<{type: string, properties: any}>('/assets/mock-data/editorschema.json')
      .subscribe(data => (this.questions = service.fromSchema(data)));
  }
}
