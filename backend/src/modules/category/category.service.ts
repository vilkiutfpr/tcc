import { Injectable } from '@nestjs/common';
import { PhotonService } from '../../photon/photon.service';
import {
  CategoryCreateInput,
  CategoryWhereUniqueInput,
  CategoryUpdateInput,
  CategoryWhereInput,
} from './entities';

@Injectable()
export class CategoryService {
  constructor(private photonService: PhotonService) {}

  public async create(category: CategoryCreateInput) {
    try {
      return await this.photonService.photon.categories.create({
        data: category,
      });
    } catch (e) {
      throw e;
    }
  }

  public async update(
    data: CategoryUpdateInput,
    where: CategoryWhereUniqueInput,
  ) {
    try {
      return await this.photonService.photon.categories.update({ data, where });
    } catch (e) {
      throw e;
    }
  }

  public async delete(where: CategoryWhereUniqueInput) {
    try {
      return await this.photonService.photon.categories.delete({
        where: where,
      });
    } catch (e) {
      throw e;
    }
  }

  public async category(where: CategoryWhereUniqueInput) {
    try {
      return await this.photonService.photon.categories.findOne({ where });
    } catch (e) {
      throw e;
    }
  }

  public async categories(where: CategoryWhereInput) {
    try {
      return await this.photonService.photon.categories.findMany({ where });
    } catch (e) {
      throw e;
    }
  }
}
