import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PricesService } from './prices.service';
import { TokenPriceListDto } from './dto/token-price.dto';

@ApiTags('Prices')
@Controller('prices')
export class PricesController {
  constructor(private readonly service: PricesService) {}

  @Get('/:chainId/:address')
  @ApiOperation({
    summary: 'Get token prices',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns token list',
    type: TokenPriceListDto,
  })
  async getPrices(
    @Param('chainId') chainId: string,
    @Param('address') address: string,
    @Query('from') from: number,
    @Query('to') to: number,
    @Query('resolution') resolution: string,
    @Query('countBack') countBack: number,
  ): Promise<TokenPriceListDto[]> {
    return this.service.getPrices(
      chainId,
      address,
      from,
      to,
      resolution,
      countBack,
    );
  }
}
