/**
 * Created by Anastasia on 01.05.2017.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Insert your name:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Welcome {{name}}!</h1>`
})
export class AppComponent {
    name= '';
}