import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-nwo-way',
    templateUrl: './nwo-way.component.html',
    styleUrls: ['./nwo-way.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class NwoWayComponent {
  two = 'init value';
}
