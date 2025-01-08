import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcul',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calcul.component.html',
  styleUrl: './calcul.component.css',
})
export class CalculComponent {
  x = signal<number>(5);
  y = signal<number>(7);
  z = computed(() => +this.x() + +this.y());
  z2 = computed(() => this.z() * this.z())
}
