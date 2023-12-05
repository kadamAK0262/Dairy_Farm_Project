import { Component } from '@angular/core';

@Component({
  selector: 'app-updatecustomer-popup',
  templateUrl: './updatecustomer-popup.component.html',
  styleUrls: ['./updatecustomer-popup.component.css']
})
export class UpdatecustomerPopupComponent {

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
