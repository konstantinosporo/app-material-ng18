import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private readonly snackBar: MatSnackBar) { }

  handleError(error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      this.snackBar.open(`${error.message}. We are already working on it!`, 'Close', { duration: 2000 });
    } else {
      this.snackBar.open('Oops something went wrong. We are already fixing the issue!', 'Close', { duration: 2000 });  
    }
  }
}
