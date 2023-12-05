import { Component } from '@angular/core';

@Component({
  selector: 'app-update-society-popup',
  templateUrl: './update-society-popup.component.html',
  styleUrls: ['./update-society-popup.component.css']
})
export class UpdateSocietyPopupComponent {


  formData = {
    id: '',
    name: '',
    contact: '',
    address: '',
    history: ''
  };

  onSubmit() {
    // Handle form submission here, e.g., send data to a backend API
    console.log('Form data submitted:', this.formData);
  }



}
