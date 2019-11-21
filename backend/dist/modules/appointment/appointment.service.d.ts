import { PhotonService } from '../../photon/photon.service';
import { AppointmentCreateInput, AppointmentWhereUniqueInput, AppointmentUpdateInput, AppointmentWhereInput, AppointmentSummary } from './entities';
export declare class AppointmentService {
    private photonService;
    constructor(photonService: PhotonService);
    create(appointment: AppointmentCreateInput): Promise<import("@generated/photon").Appointment>;
    update(appointment: AppointmentUpdateInput, where: AppointmentWhereUniqueInput): Promise<import("@generated/photon").Appointment>;
    delete(where: AppointmentWhereUniqueInput): Promise<import("@generated/photon").Appointment>;
    appointment(where: AppointmentWhereUniqueInput): Promise<import("@generated/photon").Appointment>;
    appointments(where: AppointmentWhereInput): Promise<import("@generated/photon").Appointment[]>;
    billAppointment(billed: boolean, where: AppointmentWhereUniqueInput): Promise<import("@generated/photon").Appointment>;
    appointmentsPerDate(date: Date): Promise<import("@generated/photon").Appointment[]>;
    summary(userId: any): Promise<AppointmentSummary>;
    private configureWhere;
}
