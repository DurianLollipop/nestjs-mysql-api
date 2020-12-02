import { Controller, Post, Body, MessageEvent, Sse, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Request} from 'express'
import Axios from 'axios';

@ApiTags('EventSource')
@Controller()
export class EventSourceController {
  @Sse('sse')
  sse(@Req() req: Request): Observable<MessageEvent> {
    let data = {}
    Axios.get('https://ncovdata.market.alicloudapi.com/ncov/cityDiseaseInfoWithTrend', {
      headers: {
        'Authorization': 'APPCODE cee3da0e4dc544a884ab113983c518a8'
      }
    }).then(res => data = res.data)
    console.log(data, '身');
    return interval(5000).pipe(map((_) => ({ data: data })));
  }
}

