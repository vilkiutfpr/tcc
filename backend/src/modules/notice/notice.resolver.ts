import {
  Resolver,
  Args,
  Mutation,
  Query,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { NoticeService } from './notice.service';
import { NoticeCreateInput } from './entity/inputs/create.input';
import { Notice, NoticeWhereInput } from './entity';
import { NoticeUpdateInput } from './entity/inputs/update.input';
import { NoticeWhereUniqueInput } from './entity/inputs/where-unique.input';
import { PhotonService } from '../../photon/photon.service';
import User from '../user/decorator/user.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../guards';

@Resolver(() => Notice)
@UseGuards(GqlAuthGuard)
export class NoticeResolver {
  constructor(
    private noticeService: NoticeService,
    private photonService: PhotonService,
  ) {}

  @Mutation(() => Notice)
  public async createNotice(@Args('data') data: NoticeCreateInput) {
    return this.noticeService.create(data);
  }

  @Mutation(() => Notice)
  public async updateNotice(
    @Args('data') data: NoticeUpdateInput,
    @Args('where') where: NoticeWhereUniqueInput,
  ) {
    return this.noticeService.update(data, where);
  }

  @Mutation(() => Notice)
  public async deleteNotice(@Args('where') where: NoticeWhereUniqueInput) {
    return this.noticeService.delete(where);
  }

  @Query(() => Notice)
  public async notice(@Args('where') where: NoticeWhereUniqueInput) {
    return this.noticeService.notice(where);
  }

  @Query(() => [Notice])
  public async notices(
    @Args({ name: 'where', type: () => NoticeWhereInput, nullable: true })
    where: NoticeWhereInput,
  ) {
    return this.noticeService.notices(where);
  }

  @Query(() => [Notice])
  public async userNotices(
    @Args({ name: 'where', type: () => NoticeWhereInput, nullable: true })
    where: NoticeWhereInput,
    @User() user,
  ) {
    return this.noticeService.userNotices(where, user.id);
  }

  //   Resolver properties
  @ResolveProperty('categories')
  async categories(@Parent() notice) {
    const { id } = notice;
    const categories = await this.photonService.photon.categories.findMany({
      where: { notices: { some: { id } } },
    });

    return categories;
  }

  @ResolveProperty('createdBy')
  async createdBy(@Parent() notice) {
    const { id } = notice;
    const users = await this.photonService.photon.users.findMany({
      where: { createdNotices: { some: { id } } },
    });

    return users[0];
  }

  @ResolveProperty('assignedTo')
  async assignedTo(@Parent() notice) {
    const { id } = notice;
    const users = await this.photonService.photon.users.findMany({
      where: { assignedNotices: { some: { id } } },
    });

    return users;
  }

  @ResolveProperty('seenBy')
  async seenBy(@Parent() notice) {
    const { id } = notice;
    const users = await this.photonService.photon.users.findMany({
      where: { seenNotices: { some: { id } } },
    });

    return users;
  }
}
