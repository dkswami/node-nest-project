import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { ItemData } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
	constructor(private readonly itemsFirstService: ItemsService) {}

	@Get()
	findAll(): Promise<ItemData[]> {
		return this.itemsFirstService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string ): Promise<ItemData> {
		return this.itemsFirstService.findOne(id);
	}

	@Post()
	create(@Body() createNewItem: CreateItemDto): Promise<ItemData> {
		return this.itemsFirstService.create(createNewItem);
	}

	@Delete(':id')
	delete(@Param('id') id: string): Promise<ItemData> {
		return this.itemsFirstService.delete(id);
	}

	@Put(':id')
	update(@Body() updateItem: CreateItemDto, @Param('id') id: string): Promise<ItemData> {
		return this.itemsFirstService.update(id, updateItem);
	}

	// @Post()
	// create(@Body() newItem: CreateItemDto): String {
	// 	return this.itemsFirstService.create(newItem);
	// }

	/* @Get()
	findAll(): string {
		return 'Gall items';
	}

	@Get(":dataId")
	findOne(@Param('dataId') dataId): string {
		return `item ${dataId}`;
	}

	@Post()
	create(@Body() createNewItemDto: CreateItemDto): string {
		return `Name: ${createNewItemDto.name} Description: ${createNewItemDto.description}`;
	}

	@Delete(":id")
	delete(@Param('id') id): string {
		return `Delete ${id}`;
	}

	@Put(":itemId")
	update(@Body() updateItemDto: CreateItemDto, @Param('itemId') itemId): string {
		return ` Update ${itemId} - Name: ${updateItemDto.name} Description: ${updateItemDto.description}`;
	} */
}
