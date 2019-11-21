import {
  Resolver,
  Query,
  Args,
  Mutation,
  Parent,
  ResolveProperty,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import {
  UserWhereUniqueInput,
  User,
  UserWhereInput,
  UserUpdateInput,
  UserCreateInput,
} from './entities';
import { GqlAuthGuard, RolesGuard, Roles } from '../../guards';
import { PhotonService } from '../../photon/photon.service';
import { FireStation } from '../fire-station/entities';
import { Task } from '../task/entities';
import { Appointment } from '../appointment/entities';

// @UseGuards(GqlAuthGuard, RolesGuard)
@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private photonService: PhotonService,
  ) {}

  @Mutation(() => User)
  @Roles('ADM')
  async createUser(@Args('data') data: UserCreateInput): Promise<any> {
    return await this.userService.create(data);
  }

  @Mutation(() => User)
  @Roles('ADM')
  async updateUser(
    @Args('data') data: UserUpdateInput,
    @Args({ name: 'where', type: () => UserWhereUniqueInput, nullable: true })
    where: UserWhereUniqueInput,
  ) {
    return await this.userService.update(data, where);
  }

  @Mutation(() => User)
  @Roles('ADM')
  async deleteUser(@Args('where') where: UserWhereUniqueInput) {
    return await this.userService.delete(where);
  }

  @Query(() => [User])
  @Roles('ADM')
  async users(
    @Args({ name: 'where', type: () => UserWhereInput, nullable: true })
    where: UserWhereInput,
  ) {
    return await this.userService.users(where);
  }

  @Query(() => User, { nullable: true })
  async user(@Args('where') where: UserWhereUniqueInput) {
    return await this.userService.user(where);
  }

  @ResolveProperty('fireStation', () => FireStation)
  async fireStation(@Parent() user) {
    const { id } = user;
    const fireStation = await this.photonService.photon.fireStations.findMany({
      where: { users: { some: { id } } },
    });

    return fireStation[0];
  }

  @ResolveProperty('responsibleTasks', () => [Task!]!)
  async responsibleTasks(@Parent() user) {
    const { id } = user;
    const tasks = await this.photonService.photon.tasks.findMany({
      where: { assignedTo: { id } },
    });

    return tasks;
  }

  @ResolveProperty('createdTasks', () => [Task!]!)
  async createdTasks(@Parent() user) {
    const { id } = user;
    const tasks = await this.photonService.photon.tasks.findMany({
      where: { assignedBy: { id } },
    });

    return tasks;
  }

  @ResolveProperty('appointments', () => [Appointment!]!)
  async appointments(@Parent() user) {
    const { id } = user;
    const appointments = await this.photonService.photon.appointments.findMany({
      where: { user: { id } },
    });

    return appointments;
  }
}
