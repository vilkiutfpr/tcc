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
  Appointment,
  AppointmentCreateInput,
  AppointmentUpdateInput,
  AppointmentWhereUniqueInput,
  AppointmentWhereInput,
  AppointmentSummary,
} from './entities';
import { AppointmentService } from './appointment.service';
import { PhotonService } from '../../photon/photon.service';
import User from '../user/decorator/user.decorator';

// TODO: UseGuard
@Resolver(() => Appointment)
@UseGuards(GqlAuthGuard, RolesGuard)
export class AppointmentResolver {
  constructor(
    private appointmentService: AppointmentService,
    private photonService: PhotonService,
  ) {}

  @Mutation(() => Appointment)
  async createAppointment(@Args('data') data: AppointmentCreateInput) {
    return await this.appointmentService.create(data);
  }

  @Mutation(() => Appointment)
  async updateAppointment(
    @Args('data') data: AppointmentUpdateInput,
    @Args('where') where: AppointmentWhereUniqueInput,
  ) {
    return await this.appointmentService.update(data, where);
  }

  @Mutation(() => Appointment)
  async deleteAppointment(@Args('where') where: AppointmentWhereUniqueInput) {
    return await this.appointmentService.delete(where);
  }

  @Query(() => [Appointment])
  async appointments(@Args('where') where: AppointmentWhereInput) {
    return await this.appointmentService.appointments(where);
  }

  @Query(() => [Appointment])
  async appointmentsPerDate(@Args('date') date: Date) {
    return await this.appointmentService.appointmentsPerDate(date);
  }

  @Mutation(() => Appointment)
  async billAppointment(
    @Args('where') where: AppointmentWhereUniqueInput,
    @Args('billed') billed: boolean,
  ) {
    return await this.appointmentService.billAppointment(billed, where);
  }

  @Query(() => Appointment, { nullable: true })
  async appointment(@Args('where') where: AppointmentWhereUniqueInput) {
    return await this.appointmentService.appointment(where);
  }

  @Query(() => AppointmentSummary)
  async getAppointmentSummary(@User() user) {
    return await this.appointmentService.summary(user.id);
  }

  @ResolveProperty('user')
  async user(@Parent() appointment) {
    const { id } = appointment;
    const user = await this.photonService.photon.users.findMany({
      where: { appointments: { some: { id } } },
    });

    return user[0];
  }
}
