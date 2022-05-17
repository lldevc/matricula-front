import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
import { MatDialog } from '@angular/material/dialog';
import { DialogPagarComponent } from '../dialog-pagar/dialog-pagar.component';
import { DialogConsultarComponent } from '../dialog-consultar/dialog-consultar.component';
import { DialogEstudianteComponent } from '../dialog-estudiante/dialog-estudiante.component';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  items: MenuItem[];

  constructor(
    public dialog: MatDialog) { }

  ngOnInit() {
  }



  openDialogPagar(): void {
    const dialogRef = this.dialog.open(DialogPagarComponent);

    dialogRef.afterClosed().subscribe();
  }

  openDialogConsultar(): void {
    const dialogRef = this.dialog.open(DialogConsultarComponent);

    dialogRef.afterClosed().subscribe();
  }

  openDialogEstudiante(): void {
    const dialogRef = this.dialog.open(DialogEstudianteComponent);

    dialogRef.afterClosed().subscribe();
  }

}
