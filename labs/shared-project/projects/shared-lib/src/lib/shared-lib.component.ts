import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-lib',
  template: `
    <p>
      shared-lib works really well!
    </p>
  `,
  styles: []
})
export class SharedLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
