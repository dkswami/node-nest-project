import { Injectable } from '@nestjs/common';
import { ItemData } from './interfaces/item.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
	constructor(@InjectModel('MyItem') private readonly itemModel: Model<ItemData>) {}

	async findAll(): Promise<ItemData[]> {
		return await this.itemModel.find();
	}

	async findOne(id: string): Promise<ItemData> {
		return await this.itemModel.findOne({ _id: id});
	}

	async create(item: ItemData): Promise<ItemData> {
		const newItem = new this.itemModel(item);
		return await newItem.save();
	}

	async delete(id: string): Promise<ItemData> {
		return await this.itemModel.findByIdAndRemove(id);
	}

	async update(id: string, item: ItemData): Promise<ItemData> {
		return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
	}

/* 	private readonly allItems: ItemData[] = [
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

	create(newItem: ItemData): void {
		this.allItems.push(newItem);
	}
 */
}
