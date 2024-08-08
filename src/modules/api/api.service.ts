// import { HttpService } from '@nestjs/axios';
// import { Injectable } from '@nestjs/common';
// import { AxiosResponse, AxiosRequestConfig } from 'axios';
// import { map, Observable } from 'rxjs';

// @Injectable()
// export class ApiService {
//   constructor(private readonly httpService: HttpService) {}
//   findAll(): Observable<AxiosResponse<any>> {
//     const url = `https://api.mercedes-benz.com/configurator/v2/`;
//     const config = AxiosRequestConfig = {
//       headers = {
//         accept: 'application/json',
//         'x-api-key': 'e2340b19-4c4d-4e29-b237-dd15ddbf84ec',
//       }
//     }
//     return this.httpService.get(url, config).pipe(map((res) => res.data));
//   }
// }

import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

import { catchError, map, Observable, tap } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  findAllMercedes(params) {
    const url = `https://api.mercedes-benz.com/configurator/v2/${params}`;
    const config: AxiosRequestConfig = {
      headers: {
        accept: 'application/json',
        'x-api-key': 'e2340b19-4c4d-4e29-b237-dd15ddbf84ec',
      },
    };
    return this.httpService.get(url, config).pipe(
      tap((res) => console.log(res.data)),
      map((res) => res.data),
    );
  }
  // findAll(): Observable<any> {
  //   const url = `https://api.mercedes-benz.com/configurator/v2/`;
  //   const config: AxiosRequestConfig = {
  //     headers: {
  //       accept: 'application/json',
  //       'x-api-key': 'e2340b19-4c4d-4e29-b237-dd15ddbf84ec', // Thay bằng API key hợp lệ của bạn
  //     },
  //   };
  //   const result = this.httpService.get(url, config).pipe(
  //     map((res) => res.data), // Trả về dữ liệu từ response
  //     catchError((error) => {
  //       console.error('Error:', error);
  //       throw new HttpException(
  //         'Internal Server Error',
  //         HttpStatus.INTERNAL_SERVER_ERROR,
  //       );
  //     }),
  //   );

  //   return result;
  // }

  findAll() {
    const url = `https://www.monstercat.com/api/catalog/browse`;
    return this.httpService.get(url).pipe(map((res) => res.data));
  }
}
