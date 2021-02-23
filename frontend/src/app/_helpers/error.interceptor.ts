// import { AuthService } from './../_services/auth.service';
// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(
//     request: HttpRequest<unknown>,
//     next: HttpHandler
//   ): Observable<HttpEvent<unknown>> {
//     return next.handle(request).pipe(
//       catchError((exception) => {
//         if (exception.status === 401) {
//           this.authService.logout();
//           // location.reload(true);
//         }
//         const error = exception.error.message || exception.statusText;
//         return throwError(error);
//       })
//     );
//   }
// }
