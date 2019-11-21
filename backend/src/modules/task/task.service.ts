import { Injectable } from '@nestjs/common';
import { PhotonService } from '../../photon/photon.service';
import {
  TaskCreateInput,
  TaskWhereUniqueInput,
  TaskUpdateInput,
  TaskWhereInput,
  Task,
} from './entities';

import {
  TaskCreateInput as TaskCreateInputPhoton,
  TaskUpdateInput as TaskUpdateInputPhoton,
} from '@generated/photon';
import { UploadService } from '../upload/upload.service';
import { TaskPayload } from './entities/task-payload';

@Injectable()
export class TaskService {
  constructor(
    private photonService: PhotonService,
    private uploadService: UploadService,
  ) {}

  public async create(task: TaskCreateInput) {
    try {
      let uploadedData = null;

      if (task.document) {
        uploadedData = await this.uploadService.single({
          filename: `tasks/${task.title}`,
          base64: task.document.base64,
        });
      }
      const newTask: TaskCreateInputPhoton = {
        ...task,
        ...(uploadedData &&
          uploadedData.url && {
            document: `${uploadedData.url}`,
          }),
        assignedBy: {
          connect: task.assignedBy,
        },
        assignedTo: {
          connect: task.assignedTo,
        },
        ...(task.categories && {
          categories: {
            connect: [...task.categories],
          },
        }),
      };

      return await this.photonService.photon.tasks.create({ data: newTask });
    } catch (e) {
      throw e;
    }
  }

  public async update(task: TaskUpdateInput, where: TaskWhereUniqueInput) {
    let uploadedData = null;

    if (task.document) {
      uploadedData = await this.uploadService.single({
        filename: `tasks/${task.title}`,
        base64: task.document.base64,
      });
    }

    const updateTask: TaskUpdateInputPhoton = {
      ...task,
      ...(uploadedData &&
        uploadedData.url && { document: `${uploadedData.url}` }),
      assignedBy: {
        connect: task.assignedBy,
      },
      assignedTo: {
        connect: task.assignedTo,
      },
      ...(task.categories && {
        categories: {
          connect: [...task.categories],
        },
      }),
    };

    try {
      return await this.photonService.photon.tasks.update({
        data: updateTask,
        where,
      });
    } catch (e) {
      throw e;
    }
  }

  public async delete(where: TaskWhereUniqueInput) {
    try {
      return await this.photonService.photon.tasks.delete({ where: where });
    } catch (e) {
      throw e;
    }
  }

  public async task(where: TaskWhereUniqueInput) {
    try {
      return await this.photonService.photon.tasks.findOne({ where });
    } catch (e) {
      throw e;
    }
  }

  public async tasks(where: TaskWhereInput, user?) {
    try {
      const tasks = await this.photonService.photon.tasks.findMany({
        where: { ...where, ...(user && { assignedTo: { id: user.id } }) },
      });

      // TODO: Search to best way
      const high = await this.photonService.photon.tasks.findMany({
        where: {
          priority: 'HIGH',
          AND: { done: false },
          ...(user && { AND: { assignedTo: { id: user.id } } }),
        },
      });

      const medium = await this.photonService.photon.tasks.findMany({
        where: {
          priority: 'MEDIUM',
          AND: { done: false },
          ...(user && { AND: { assignedTo: { id: user.id } } }),
        },
      });

      const low = await this.photonService.photon.tasks.findMany({
        where: {
          priority: 'LOW',
          AND: { done: false },
          ...(user && { AND: { assignedTo: { id: user.id } } }),
        },
      });

      return {
        items: tasks,
        counters: {
          high: high.length,
          medium: medium.length,
          low: low.length,
        },
      };
    } catch (e) {
      throw e;
    }
  }
}
