import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-crow',
  templateUrl: './crow.component.html',
  styleUrls: ['./crow.component.css']
})
export class CrowComponent {
@Input() position: number;
@Input() set nbCases(value: number){
  this.cases = [];
  for (let i = 0; i<value; i++){
    this.cases.push(i);
  }
}
couleurCase(i) {
  let nbCases = this.cases.length;
  let rouge = Math.floor(((nbCases - 1 -i)*255) / (nbCases - 1));
  let vert = Math.floor(i*255/(nbCases-1))
  return 'rgb($(rouge),$(vert), 0)';
}
cases = [];

}
