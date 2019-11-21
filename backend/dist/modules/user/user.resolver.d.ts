import { UserService } from './user.service';
import { UserWhereUniqueInput, UserWhereInput, UserUpdateInput, UserCreateInput } from './entities';
import { PhotonService } from '../../photon/photon.service';
export declare class UserResolver {
    private userService;
    private photonService;
    constructor(userService: UserService, photonService: PhotonService);
    createUser(data: UserCreateInput): Promise<any>;
    updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): Promise<import("@generated/photon").User>;
    deleteUser(where: UserWhereUniqueInput): Promise<import("@generated/photon").User>;
    users(where: UserWhereInput): Promise<import("@generated/photon").User[]>;
    user(where: UserWhereUniqueInput): Promise<import("@generated/photon").User>;
    fireStation(user: any): Promise<import("@generated/photon").FireStation>;
    responsibleTasks(user: any): Promise<import("@generated/photon").Task[]>;
    createdTasks(user: any): Promise<import("@generated/photon").Task[]>;
    appointments(user: any): Promise<import("@generated/photon").Appointment[]>;
}
