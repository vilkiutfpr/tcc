import { PhotonService } from '../../photon/photon.service';
import { User } from '@generated/photon';
import { UserWhereInput, UserWhereUniqueInput, UserUpdateInput, UserCreateInput } from './entities';
export declare class UserService {
    private photonService;
    constructor(photonService: PhotonService);
    create(user: UserCreateInput): Promise<User>;
    update(user: UserUpdateInput, where: UserWhereUniqueInput): Promise<User>;
    delete(where: UserWhereUniqueInput): Promise<User>;
    users(where: UserWhereInput): Promise<User[]>;
    user(where: UserWhereUniqueInput): Promise<User> | null;
}
