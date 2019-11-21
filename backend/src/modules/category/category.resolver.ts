import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';

import { CategoryService } from './category.service';
import { Roles } from '../../guards';
import {
  CategoryCreateInput,
  Category,
  CategoryUpdateInput,
  CategoryWhereUniqueInput,
  CategoryWhereInput,
} from './entities';
import { PhotonService } from '../../photon/photon.service';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    private categoryService: CategoryService,
    private photonService: PhotonService,
  ) {}

  @Mutation(() => Category)
  @Roles('ADM')
  async createCategory(@Args('data') data: CategoryCreateInput): Promise<any> {
    return await this.categoryService.create(data);
  }

  @Mutation(() => Category)
  @Roles('ADM')
  async updateCategory(
    @Args('data') data: CategoryUpdateInput,
    @Args('where') where: CategoryWhereUniqueInput,
  ) {
    return await this.categoryService.update(data, where);
  }

  @Mutation(() => Category)
  @Roles('ADM')
  async deleteCategory(@Args('where') where: CategoryWhereUniqueInput) {
    return await this.categoryService.delete(where);
  }

  @Query(() => [Category])
  @Roles('ADM')
  async categories(@Args('where') where: CategoryWhereInput) {
    return await this.categoryService.categories(where);
  }

  @Query(() => Category, { nullable: true })
  async category(@Args('where') where: CategoryWhereUniqueInput) {
    return await this.categoryService.category(where);
  }

  //   Resolver properties
  @ResolveProperty('tasks')
  async tasks(@Parent() category) {
    const { id } = category;
    const categories = await this.photonService.photon.tasks.findMany({
      where: { categories: { some: { id } } },
    });

    return categories;
  }

  // TODO: Add Notices
}
