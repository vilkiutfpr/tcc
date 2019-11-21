import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PhotonModule } from './photon/photon.module';
import { ModulesModule } from './modules/modules.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    PhotonModule,
    ModulesModule,
    AuthModule,
    CommonModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.graphql',
      playground: {
        settings: {
          'editor.reuseHeaders': true,
        },
      },
      context: ({ req }) => {
        return { req };
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
