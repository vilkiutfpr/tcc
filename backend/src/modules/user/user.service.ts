import { Injectable, BadRequestException } from '@nestjs/common';
import { hash } from 'bcrypt';

import { PhotonService } from '../../photon/photon.service';
import {
  User,
  UserUpdateInput as UserUpdateInputPhoton,
  UserCreateInput as UserCreateInputPhoton,
} from '@generated/photon';
import {
  UserWhereInput,
  UserWhereUniqueInput,
  UserUpdateInput,
  UserCreateInput,
} from './entities';
import { Args } from '@nestjs/graphql';

@Injectable()
export class UserService {
  constructor(private photonService: PhotonService) {}

  public async create(user: UserCreateInput): Promise<User> {
    try {
      const { email, password } = user;

      const registeredUser: User = await this.user({
        email,
      });

      if (registeredUser) {
        throw new BadRequestException(
          'Already has records with informed e-mail.',
        );
      }

      const newPassword = await hash(password, 10);

      const newUser: UserCreateInputPhoton = {
        ...user,
        password: newPassword,
        fireStation: {
          connect: user.fireStation,
        },
        createdTasks: {
          connect: user.createdTasks,
        },
        responsibleTasks: {
          connect: user.responsibleTasks,
        },
      };

      return await this.photonService.photon.users.create({ data: newUser });
    } catch (e) {
      throw e;
    }
  }

  public async update(
    user: UserUpdateInput,
    where: UserWhereUniqueInput,
  ): Promise<User> {
    try {
      const userToUpdate: UserUpdateInputPhoton = {
        ...user,
        ...(user.password && {
          password: await hash(user.password, 10),
        }),
        ...(user.fireStation && {
          fireStation: {
            connect: user.fireStation,
          },
        }),
      };

      const configuredWhere = where ? where : { id: user.id };

      return await this.photonService.photon.users.update({
        data: userToUpdate,
        where: configuredWhere,
      });
    } catch (e) {
      throw e;
    }
  }

  public async delete(where: UserWhereUniqueInput): Promise<User> {
    try {
      return await this.photonService.photon.users.delete({ where });
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  public async users(@Args() where: UserWhereInput): Promise<User[]> {
    try {
      return await this.photonService.photon.users.findMany({ where });
    } catch (e) {
      throw e;
    }
  }

  public async user(where: UserWhereUniqueInput): Promise<User> | null {
    try {
      return await this.photonService.photon.users
        .findOne({ where })
        .catch(() => null);
    } catch (e) {
      throw e;
    }
  }
}
