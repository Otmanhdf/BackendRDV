import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RenduVousModule } from './rendu-vous/rendu-vous.module';
import { CentreModule } from './centre/centre.module';
import { RegionModule } from './region/region.module';
import { VilleModule } from './ville/ville.module';
import { CreneauModule } from './creneau/creneau.module';
import { SECRET_VALUE } from './Variable/info';


const jwtConfig:JwtModuleOptions={
  global: true,
  secretOrPrivateKey:SECRET_VALUE,
  signOptions: { expiresIn: '1d' },
}

@Module({
  imports: [
    UsersModule,
    JwtModule.register(jwtConfig),
    PassportModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'renduVous',
      entities: [],
      synchronize: false,
      autoLoadEntities: true,
    }),
    RenduVousModule,
    CentreModule,
    RegionModule,
    VilleModule,
    CreneauModule,],
  controllers: [],
  providers: [],
  exports:[JwtModule]
})
export class AppModule {}
