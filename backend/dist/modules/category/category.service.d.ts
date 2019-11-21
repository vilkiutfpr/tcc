import { PhotonService } from '../../photon/photon.service';
import { CategoryCreateInput, CategoryWhereUniqueInput, CategoryUpdateInput, CategoryWhereInput } from './entities';
export declare class CategoryService {
    private photonService;
    constructor(photonService: PhotonService);
    create(category: CategoryCreateInput): Promise<import("@generated/photon").Category>;
    update(data: CategoryUpdateInput, where: CategoryWhereUniqueInput): Promise<import("@generated/photon").Category>;
    delete(where: CategoryWhereUniqueInput): Promise<import("@generated/photon").Category>;
    category(where: CategoryWhereUniqueInput): Promise<import("@generated/photon").Category>;
    categories(where: CategoryWhereInput): Promise<import("@generated/photon").Category[]>;
}
