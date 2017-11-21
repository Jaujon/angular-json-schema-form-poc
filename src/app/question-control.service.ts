import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionGroup } from './question-group';

@Injectable()
export class QuestionControlService {
  constructor() {}

  toFormGroup(questions: QuestionBase<any>[]): FormGroup {
    const group: any = {};

    questions.forEach(question => {
      if (question instanceof QuestionGroup) {
        group[question.key] = this.toFormGroup(question.collection);
      } else if (question instanceof QuestionBase) {
        group[question.key] = this.getFormControl(question);
      }
    });
    return new FormGroup(group);
  }
  getFormControl(question: QuestionBase<any>): FormControl {
    const validators = [];
    if (true === question.required) {
      validators.push(Validators.required);
    }
    return new FormControl(question.default || '', validators);
  }
}
