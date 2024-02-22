import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

const getMongoOptions = () => {
  return {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
}

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
   return {
     uri: configService.get('MONGODB_URL'),
   }
}