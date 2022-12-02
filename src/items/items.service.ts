import { Injectable } from '@nestjs/common';
import { ItemData } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
	private readonly allItems: ItemData[] = [
		{
			id: "2345454",
			name: "Item One",
			qty: 23,
			description: "This is item one"
		},
		{
			id: "459454",
			name: "Item tewo",
			qty: 3,
			description: "This is item wne"
		},
		{
			id: "3945459",
			name: "Item Three",
			qty: 50,
			description: "This is item oewrwene"
		}
	]

	findWhole(): ItemData[] {
		return this.allItems;
	}

	findOne(id: string): ItemData {
		return this.allItems.find(item => item.id === id);
	}

	// create(newItem: ItemData): promise<ItemData> {
	// 	return this.allItems.push(newItem);
	// }

}
