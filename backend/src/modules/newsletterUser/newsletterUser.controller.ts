import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserOutputDto } from './dto/create-user.output.dto';
import { CreateUserInputDto } from './dto/create-user.input.dto';
import { NewsletterUserService } from './newsletterUser.service';

@ApiTags('NewsletterUserController')
@Controller('newsletter-user')
export class NewsletterUserController {
  constructor(private readonly service: NewsletterUserService) {}

  @Post('/create')
  @ApiOperation({
    summary: 'Create user for newsletter email',
  })
  @ApiResponse({
    status: 200,
    type: CreateUserOutputDto,
    description: 'Created newsletter user',
  })
  @ApiParam({
    name: 'email',
    required: true,
    type: String,
    description: 'email',
  })
  async create(
    @Body() input: CreateUserInputDto,
  ): Promise<CreateUserOutputDto> {
    return this.service.create(input);
  }
}
