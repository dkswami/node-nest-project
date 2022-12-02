import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { MyItemSchema } from './schemas/item.schema';


@Module({
  imports: [ MongooseModule.forFeature([{ name: 'MyItem', schema: MyItemSchema }])],
  controllers: [ ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
