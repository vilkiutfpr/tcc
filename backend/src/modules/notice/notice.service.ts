import { Injectable } from '@nestjs/common';
import { PhotonService } from '../../photon/photon.service';
import { NoticeCreateInput } from './entity/inputs/create.input';

import {
  NoticeCreateInput as NoticeCreateInputPhoton,
  NoticeUpdateInput as NoticeUpdateInputPhoton,
} from '@generated/photon';

import {
  NoticeUpdateInput,
  NoticeWhereUniqueInput,
  NoticeWhereInput,
} from './entity';

@Injectable()
export class NoticeService {
  constructor(private photonService: PhotonService) {}

  public async create(notice: NoticeCreateInput) {
    try {
      const newNotice: NoticeCreateInputPhoton = this.changePayloadToPhoton(
        notice,
      );

      return await this.photonService.photon.notices.create({
        data: newNotice,
      });
    } catch (e) {
      console.log('Error: ');
      console.log(e);
    }
  }

  public async update(
    notice: NoticeUpdateInput,
    where: NoticeWhereUniqueInput,
  ) {
    try {
      const updateNotice: NoticeUpdateInputPhoton = this.changePayloadToPhoton(
        notice,
      );

      console.log(updateNotice);

      return await this.photonService.photon.notices.update({
        data: updateNotice,
        where,
      });
    } catch (e) {
      console.log(e);
    }
  }

  public async delete(where: NoticeWhereUniqueInput) {
    return await this.photonService.photon.notices.delete({ where });
  }

  public async notice(where: NoticeWhereUniqueInput) {
    return await this.photonService.photon.notices.findOne({ where });
  }

  public async notices(where: NoticeWhereInput) {
    return await this.photonService.photon.notices.findMany({ where });
  }

  public async userNotices(where: NoticeWhereInput, userId: string) {
    return await this.photonService.photon.notices.findMany({
      where: { ...where, assignedTo: { some: { id: userId } } },
    });
  }

  private changePayloadToPhoton(
    data: NoticeCreateInput,
  ): NoticeCreateInputPhoton {
    return {
      ...data,
      ...(data.categories && {
        categories: {
          connect: data.categories.map(item => ({ id: item.id })),
        },
      }),
      ...(data.createdBy && {
        createdBy: {
          connect: { id: data.createdBy.id },
        },
      }),
      ...(data.assignedTo && {
        assignedTo: {
          connect: data.assignedTo.map(item => ({ id: item.id })),
        },
      }),
      ...(data.seenBy && {
        seenBy: {
          connect: data.seenBy.map(item => ({ id: item.id })),
        },
      }),
    };
  }
}
