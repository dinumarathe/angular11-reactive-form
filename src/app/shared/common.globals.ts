import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class Globals {
    public subjectData = new Subject<any>();

    public username = new Subject<string>();

}