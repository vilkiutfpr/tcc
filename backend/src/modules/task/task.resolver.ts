import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { Roles, GqlAuthGuard, RolesGuard } from '../../guards';
import {
  Task,
  TaskCreateInput,
  TaskUpdateInput,
  TaskWhereUniqueInput,
  TaskWhereInput,
} from './entities';
import { TaskService } from './task.service';
import { PhotonService } from '../../photon/photon.service';
import { TaskPayload } from './entities/task-payload';
import User from '../user/decorator/user.decorator';

@Resolver(() => Task)
@UseGuards(GqlAuthGuard, RolesGuard)
export class TaskResolver {
  constructor(
    private taskService: TaskService,
    private photonService: PhotonService,
  ) {}

  @Mutation(() => Task)
  @Roles('ADM')
  async createTask(@Args('data') data: TaskCreateInput): Promise<any> {
    return await this.taskService.create(data);
  }

  @Mutation(() => Task)
  async updateTask(
    @Args('data') data: TaskUpdateInput,
    @Args('where') where: TaskWhereUniqueInput,
  ) {
    return await this.taskService.update(data, where);
  }

  @Mutation(() => Task)
  @Roles('ADM')
  async deleteTask(@Args('where') where: TaskWhereUniqueInput) {
    return await this.taskService.delete(where);
  }

  @Query(() => TaskPayload)
  async tasks(@Args('where') where: TaskWhereInput) {
    return await this.taskService.tasks(where);
  }

  @Query(() => TaskPayload)
  async userTasks(@Args('where') where: TaskWhereInput, @User() user) {
    return await this.taskService.tasks(where, user);
  }

  @Query(() => Task, { nullable: true })
  async task(@Args('where') where: TaskWhereUniqueInput) {
    return await this.taskService.task(where);
  }

  @ResolveProperty('categories')
  async categories(@Parent() task) {
    const { id } = task;
    const categories = await this.photonService.photon.categories.findMany({
      where: { tasks: { some: { id } } },
    });

    return categories;
  }

  @ResolveProperty('assignedTo')
  async assignedTo(@Parent() task) {
    const { id } = task;
    const user = await this.photonService.photon.users.findMany({
      where: { responsibleTasks: { some: { id } } },
    });

    return user[0];
  }

  @ResolveProperty('assignedBy')
  async assignedBy(@Parent() task) {
    const { id } = task;
    const user = await this.photonService.photon.users.findMany({
      where: { createdTasks: { some: { id } } },
    });

    return user[0];
  }
}
