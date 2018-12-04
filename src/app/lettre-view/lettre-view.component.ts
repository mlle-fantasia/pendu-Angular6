import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-lettre-view',
  templateUrl: './lettre-view.component.html',
  styleUrls: ['./lettre-view.component.css']
})
export class LettreViewComponent implements OnInit {

  @Input() alphabet: any[];
  @Input() partieFini: boolean;

  constructor() { }

  ngOnInit() {
  }

}
