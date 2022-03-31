import { Component } from '@angular/core';
import push from 'push.js';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
export class AppComponent {
  value = 'Welcome to Suzuki site';

  ngOnInit() {
    push.create('I am Suzuki Yeah!');
  }
}
