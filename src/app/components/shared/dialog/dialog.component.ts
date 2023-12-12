import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {


  tileDescriptions: { [key: string]: string } = {
    "Balloons": "Balloon design is a specialty of ours. We can shape balloons to fit any occasion.",
    "Backdrop": "Our backdrops add a touch of elegance to any event, tailored to your theme and style.",
    "Tent": "Our high-quality tents are perfect for outdoor events, providing shelter in style.",
    "Decoration": "From subtle accents to grand displays, our decoration services transform spaces.",
    "Flower arrangement": "Our exquisite flower arrangements are crafted to bring life and color to your event.",
    "Marquee Numbers": "Having a special day? Don't forget your Marquee Numbers to mark the occasion.",
    "Table and Chairs": "We provide a range of table and chair setups to suit the style and size of your event."
  };

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


    closeDialog(): void {
      this.dialogRef.close();
    }
    
}
