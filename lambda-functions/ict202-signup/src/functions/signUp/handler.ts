import { UserController } from '@functions/application/controllers/UserController';
import { BaseRequest } from '@functions/core/entities/BaseRequest';
import { BaseResponse } from '@functions/core/entities/BaseResponse';
import { containers } from '@functions/framework/utils/DependencyInjection';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const signUp: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  
  let controller: UserController = containers.resolve("UserController");
  let request: BaseRequest = {
    body: event.body
  };

  let result: BaseResponse = await controller.create(request);

  return formatJSONResponse({
    message: result.message,
    success: result.data.success    
  });
};

export const main = middyfy(signUp);
