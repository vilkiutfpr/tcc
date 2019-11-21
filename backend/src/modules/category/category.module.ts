import { Module } from '@nestjs/common';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
import { PhotonModule } from '../../photon/photon.module';

@Module({
  imports: [PhotonModule],
  providers: [CategoryResolver, CategoryService],
})
export class CategoryModule {}
