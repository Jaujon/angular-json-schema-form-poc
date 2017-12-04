import { QuestionBase } from './question-base';

export class QuestionGroup<T> extends QuestionBase<T> {
  controlType = 'fieldset';
  collection: Array<QuestionBase<any>>;

  constructor(options: {} = {}, collection: Array<QuestionBase<any>>) {
    super(options);
    this.collection = collection;
  }
}
