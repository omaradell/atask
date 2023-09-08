import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  imageUrl: string =
    'https://st.depositphotos.com/1597387/1984/i/950/depositphotos_19841901-stock-photo-asian-young-business-man-close.jpg';
  // Initialize the image URL to an empty string

  // Function to handle when a file is selected
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Read the selected file and set it as the image URL
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
