import { Component } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPriceComponent } from "./card-price/card-price.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [CardLabelComponent, CardPriceComponent]
})
export class CardComponent {

}
