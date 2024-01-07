import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPriceComponent } from "./card-price/card-price.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [CardLabelComponent, CardPriceComponent]
})
export class CardComponent implements OnInit {

	@Input()
	gameCover: string = "";
	@Input()
	gameLabel: string = "";
	@Input()
	gameType: string = "";
	@Input()
	gamePrice: string = "";


	ngOnInit(): void {
	}

}
