import { Injectable, NgZone  } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private config: MatSnackBarConfig;
  constructor(public matSnackBarService: MatSnackBar, private zone: NgZone) {
    this.config = new MatSnackBarConfig();
    this.config.panelClass = ["snackbar-container"];
    this.config.verticalPosition = "top";
    this.config.horizontalPosition = "right";
    this.config.duration = 4000;
  }

  /**
   * @description Open a snackbar with the desired message and style
   * @param message message to display
   */

  showSuccessMessage(msg: string): void {
    this.showSnackbar(msg, 'success-snackbar');
  }

  /**
   * @description Open a snackbar with the desired message and style
   * @param message message to display
   */

  showFailureMessage(msg: string): void {
    this.showSnackbar(msg, 'failure-snackbar');
  }

  private showSnackbar(message: string, panelClass: string): void {
    this.matSnackBarService.open(message, 'Close', {
      duration: 500,  // Adjust the duration as needed
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [panelClass]
    });
  }
}
