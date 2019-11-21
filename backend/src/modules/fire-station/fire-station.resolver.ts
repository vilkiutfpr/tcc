import { Resolver, ResolveProperty, Parent } from '@nestjs/graphql';
import { PhotonService } from '../../photon/photon.service';
import { FireStation } from './entities';

@Resolver(of => FireStation)
export class FireStationResolver {
  constructor(private photonService: PhotonService) {}

  @ResolveProperty('users')
  async users(@Parent() user) {
    const { id } = user;
    const users = await this.photonService.photon.users.findMany({
      where: {
        fireStation: { id },
      },
    });

    return users;
  }
}
