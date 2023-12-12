import { Component } from '@angular/core';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  constructor(public dialog: MatDialog) {}

  tiles = [
    { title: "Balloons", imagePath: "/assets/images/svg/luftballons.svg" },
    { title: "Backdrop", imagePath: "/assets/images/svg/backdrop.svg" },
    { title: "Tent", imagePath: "/assets/images/svg/tent.svg" },
    { title: "Decoration", imagePath: "/assets/images/svg/decor.svg" },
    { title: "Flower arrangement", imagePath: "/assets/images/svg/flowers.svg" },
    { title: "Marquee Numbers", imagePath: "/assets/images/svg/marquee num.svg" },
    { title: "Table and Chairs", imagePath: "/assets/images/svg/Table-and-Chairs.svg" }
  ];
  

  openDialog(title:String): void {
    console.log("you clicked me");
    const dialogRef = this.dialog.open(DialogComponent, {
      // width: '250px',
      panelClass: 'my-custom-dialog-class',
      // You can pass data to dialog here if needed
      data: { product : title }
    });
    // dialogRef.close()
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   console.log('The dialog was closed');
    //   // Handle any actions after close if needed
    // });
  }


}
