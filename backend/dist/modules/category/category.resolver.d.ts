import { CategoryService } from './category.service';
import { CategoryCreateInput, CategoryUpdateInput, CategoryWhereUniqueInput, CategoryWhereInput } from './entities';
import { PhotonService } from '../../photon/photon.service';
export declare class CategoryResolver {
    private categoryService;
    private photonService;
    constructor(categoryService: CategoryService, photonService: PhotonService);
    createCategory(data: CategoryCreateInput): Promise<any>;
    updateCategory(data: CategoryUpdateInput, where: CategoryWhereUniqueInput): Promise<import("@generated/photon").Category>;
    deleteCategory(where: CategoryWhereUniqueInput): Promise<import("@generated/photon").Category>;
    categories(where: CategoryWhereInput): Promise<import("@generated/photon").Category[]>;
    category(where: CategoryWhereUniqueInput): Promise<import("@generated/photon").Category>;
    tasks(category: any): Promise<import("@generated/photon").Task[]>;
}
