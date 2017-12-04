import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class SchemaService {
  http: HttpClient;
  constructor(http: HttpClient) {}
}
