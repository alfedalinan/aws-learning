import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { UserController } from 'src/application/controllers/UserController';
import { BaseRequest } from 'src/core/entities/BaseRequest';
import { BaseResponse } from 'src/core/entities/BaseResponse';
import { containers } from 'src/framework/utils/DependencyInjection';

import schema from './schema';

const authenticate: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  let request: BaseRequest = {
    body: event.body
  };
  
  let controller: UserController = containers.resolve("UserController");
  let response: BaseResponse = await controller.authenticate(request);

  return formatJSONResponse(<any>response);
};

export const main = middyfy(authenticate);
