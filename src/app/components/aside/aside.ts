import { Component, signal, computed } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipDirective } from '../../shared/directives/tooltip';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, FormsModule, TooltipDirective],
  templateUrl: './aside.html',
  styleUrl: './aside.scss',
})
export class Aside {
  isFilterVisible = signal(false); 

  toggleMainFilter() {
    this.isFilterVisible.update(v => !v);
  }

  isOpenDestiny = signal(false);
  isOpenAdventure = signal(true);
  isOpenAccommodation = signal(false);
  isOpenPrice = signal(true);
  showAllAdventure = signal(false);

  destiny = signal([
    { id: 1, name: 'Country I', checked: false },
    { id: 2, name: 'Country II', checked: false },
    { id: 3, name: 'Country III', checked: false }
  ]);

  adventure = signal([
    { id: 1, name: 'Quads', checked: false },
    { id: 2, name: 'Parapente', checked: true },
    { id: 3, name: 'Rafting', checked: false },
    { id: 4, name: 'Explora', checked: false },
    { id: 5, name: 'Buceo', checked: false },
    { id: 6, name: 'Paracaídas', checked: false },
    { id: 7, name: 'Snoward', checked: false },
    { id: 8, name: 'Surf', checked: true },
    { id: 9, name: 'Quads extra', checked: false },
    { id: 10, name: 'Parapente extra', checked: true },
    { id: 11, name: 'Rafting extra', checked: false },
    { id: 12, name: 'Explora extra', checked: false },
    { id: 13, name: 'Buceo extra', checked: false },
    { id: 14, name: 'Paracaídas extra', checked: false },
    { id: 15, name: 'Snoward extra', checked: false },
    { id: 16, name: 'Surf extra', checked: true },
    { id: 17, name: 'Parapente extra', checked: true },
    { id: 18, name: 'Rafting extra', checked: false },
    { id: 19, name: 'Explora extra', checked: false },
    { id: 20, name: 'Buceo extra', checked: false },
    { id: 21, name: 'Paracaídas extra', checked: false },
    { id: 22, name: 'Snoward extra', checked: false },
    { id: 23, name: 'Surf extra', checked: true },
    { id: 24, name: 'Rafting extra', checked: false },
    { id: 25, name: 'Explora extra', checked: false },
    { id: 26, name: 'Buceo extra', checked: false },
    { id: 27, name: 'Paracaídas extra', checked: false },
    { id: 28, name: 'Snoward extra', checked: false },
    { id: 29, name: 'Surf extra', checked: true }
  ]);

  accommodation = signal([
    { id: 1, name: 'Accommodation I', checked: false },
    { id: 2, name: 'Accommodation II', checked: false },
    { id: 3, name: 'Accommodation III', checked: false }
  ]);

  filteredAdventure = computed(() => {
    return this.showAllAdventure() ? this.adventure() : this.adventure().slice(0, 8);
  });

  toggleShowMore() { this.showAllAdventure.update(v => !v); }
  toggleDestiny() { this.isOpenDestiny.update(v => !v); }
  toggleAdventure() { this.isOpenAdventure.update(v => !v); }
  toggleAccommodation() { this.isOpenAccommodation.update(v => !v); }
  togglePrice() { this.isOpenPrice.update(v => !v); }
}
