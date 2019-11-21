import { AppointmentCreateInput, AppointmentUpdateInput, AppointmentWhereUniqueInput, AppointmentWhereInput, AppointmentSummary } from './entities';
import { AppointmentService } from './appointment.service';
import { PhotonService } from '../../photon/photon.service';
export declare class AppointmentResolver {
    private appointmentService;
    private photonService;
    constructor(appointmentService: AppointmentService, photonService: PhotonService);
    createAppointment(data: AppointmentCreateInput): Promise<import("@generated/photon").Appointment>;
    updateAppointment(data: AppointmentUpdateInput, where: AppointmentWhereUniqueInput): Promise<import("@generated/photon").Appointment>;
    deleteAppointment(where: AppointmentWhereUniqueInput): Promise<import("@generated/photon").Appointment>;
    appointments(where: AppointmentWhereInput): Promise<import("@generated/photon").Appointment[]>;
    appointmentsPerDate(date: Date): Promise<import("@generated/photon").Appointment[]>;
    billAppointment(where: AppointmentWhereUniqueInput, billed: boolean): Promise<import("@generated/photon").Appointment>;
    appointment(where: AppointmentWhereUniqueInput): Promise<import("@generated/photon").Appointment>;
    getAppointmentSummary(user: any): Promise<AppointmentSummary>;
    user(appointment: any): Promise<import("@generated/photon").User>;
}
