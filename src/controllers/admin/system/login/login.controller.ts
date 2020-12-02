import { Controller, Post, Body, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import adminConfig from '@src/config/admin.config';
import { LoginService } from '@src/services/admin/login/login.service';
import { LoginDto } from './dto/login.dto';
import {Request} from 'express'
const ipaddr = require('ipaddr.js');
import { IpAddress } from '@src/decorators/ip.address';

@ApiTags('用户登录')
@Controller(`${adminConfig.adminPath}/login`)
export class LoginController {
  constructor (
    private loginService: LoginService,
  ) { }

  @ApiOperation({
    summary: '用户登录',
    description: '用户名可以是手机号码、邮箱、用户名',
  })
  @ApiCreatedResponse({
    type: LoginDto,
    description: '用户登录DTO'
  })
  @Post()
  async adminLogin(
    @Req() req: Request,
    @Body() loginDto: LoginDto,
  ): Promise<any> {
    const data = await this.loginService.adminLogin(loginDto)
    data.IP = ipaddr
      .process(req.clientIp)
      .octets.join('.')
    return data
  }
}
