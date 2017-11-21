import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';
import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion } from './question-textbox';
import { QuestionGroup } from './question-group';

@Injectable()
export class QuestionService {
  fromSchema(schema: { type: string; properties: any }): QuestionBase<any>[] {
    return this.iterateOverProperties(schema.properties);
  }
  iterateOverProperties(properties: any): QuestionBase<any>[] {
    const questions: QuestionBase<any>[] = [];
    Object.keys(properties).forEach((key: string) => {
      const def = properties[key];
      switch (true) {
        case 'object' === def.type:
          questions.push(new QuestionGroup({ key: key, label: def.title }, this.iterateOverProperties(def.properties)));
          break;
        case 'string' === def.type && def.hasOwnProperty('oneOf'):
          questions.push(
            new DropdownQuestion({
              key: key,
              label: def.description,
              options: def.oneOf.map((val: any) => ({ key: val.enum[0], value: val.description })),
            })
          );
          break;
        case 'string' === def.type && !def.hasOwnProperty('oneOf'):
          questions.push(
            new TextboxQuestion({ key: key, label: def.description, type: 'text', required: !!def.required })
          );
          break;
        case 'integer' === def.type:
          questions.push(new TextboxQuestion({ key: key, label: def.description, type: 'number' }));
          break;
      }
    });
    return questions;
  }
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
