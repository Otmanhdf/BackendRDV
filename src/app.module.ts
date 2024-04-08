import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RenduVousModule } from './rendu-vous/rendu-vous.module';
import { CentreModule } from './centre/centre.module';
import { RegionModule } from './region/region.module';
import { VilleModule } from './ville/ville.module';

@Module({
  imports: [UsersModule,PassportModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'renduVous',
      entities: [User],
      synchronize: false,
      autoLoadEntities: true,
    }),
    JwtModule.register({
      global: true,
      secret: "12",
      signOptions: { expiresIn: '60s' },
    }),
    RenduVousModule,
    CentreModule,
    RegionModule,
    VilleModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}