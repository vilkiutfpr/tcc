import { Injectable } from '@nestjs/common';
import { PhotonService } from '../../photon/photon.service';
import {
  AppointmentCreateInput,
  AppointmentWhereUniqueInput,
  AppointmentUpdateInput,
  AppointmentWhereInput,
  AppointmentSummary,
} from './entities';

import {
  AppointmentCreateInput as AppointmentCreateInputPhoton,
  AppointmentUpdateInput as AppointmentUpdateInputPhoton,
} from '@generated/photon';

import { addHours, differenceInHours } from 'date-fns';

@Injectable()
export class AppointmentService {
  constructor(private photonService: PhotonService) {}

  public async create(appointment: AppointmentCreateInput) {
    try {
      const newAppointment: AppointmentCreateInputPhoton = {
        ...appointment,
        user: {
          connect: appointment.user,
        },
      };

      return await this.photonService.photon.appointments.create({
        data: newAppointment,
      });
    } catch (e) {
      throw e;
    }
  }

  public async update(
    appointment: AppointmentUpdateInput,
    where: AppointmentWhereUniqueInput,
  ) {
    const updateAppointment: AppointmentUpdateInputPhoton = {
      ...appointment,
      user: {
        connect: appointment.user,
      },
    };

    try {
      return await this.photonService.photon.appointments.update({
        data: updateAppointment,
        where,
      });
    } catch (e) {
      throw e;
    }
  }

  public async delete(where: AppointmentWhereUniqueInput) {
    try {
      return await this.photonService.photon.appointments.delete({
        where: where,
      });
    } catch (e) {
      throw e;
    }
  }

  public async appointment(where: AppointmentWhereUniqueInput) {
    try {
      return await this.photonService.photon.appointments.findOne({ where });
    } catch (e) {
      throw e;
    }
  }

  public async appointments(where: AppointmentWhereInput) {
    try {
      const appointments = await this.photonService.photon.appointments.findMany(
        {
          where: { ...this.configureWhere(where) },
        },
      );
      return appointments;
    } catch (e) {
      throw e;
    }
  }

  public async billAppointment(
    billed: boolean,
    where: AppointmentWhereUniqueInput,
  ) {
    try {
      return await this.photonService.photon.appointments.update({
        data: { billed },
        where,
      });
    } catch {}
  }

  public async appointmentsPerDate(date: Date) {
    try {
      const appointments = await this.photonService.photon.appointments.findMany(
        {
          where: {
            OR: [
              {
                end: {
                  lt: addHours(new Date(date), 24),
                  gt: new Date(date),
                },
              },
              {
                start: {
                  lt: addHours(new Date(date), 24),
                  gt: new Date(date),
                },
              },
            ],
          },
        },
      );
      return appointments;
    } catch (e) {
      throw e;
    }
  }

  public async summary(userId): Promise<AppointmentSummary> {
    const totalList =
      (await this.photonService.photon.appointments({
        where: { user: { id: userId } },
      })) || [];

    const billedList =
      (await this.photonService.photon.appointments({
        where: {
          user: { id: userId },
          billed: true,
        },
      })) || [];

    const total = totalList.reduce(
      (total, item) =>
        (total += differenceInHours(new Date(item.end), new Date(item.start))),
      0,
    );

    const billed = billedList.reduce(
      (total, item) =>
        (total += differenceInHours(new Date(item.end), new Date(item.start))),
      0,
    );

    return { total, billed };
  }

  private configureWhere(where: AppointmentWhereInput) {
    if (where.start && where.end) {
      return {
        user: where.user,
        ...(where.start &&
          where.end && {
            OR: [
              {
                end: {
                  lt: new Date(where.end),
                  gt: new Date(where.start),
                },
              },
              {
                start: {
                  gt: new Date(where.start),
                  lt: new Date(where.end),
                },
              },
            ],
          }),
      };
    }

    return {
      user: where.user,
      ...(where.start && {
        OR: [
          {
            end: {
              lt: addHours(new Date(where.start), 24),
              gt: new Date(where.start),
            },
          },
          {
            start: {
              lt: addHours(new Date(where.start), 24),
              gt: new Date(where.start),
            },
          },
        ],
      }),
    };
  }
}
