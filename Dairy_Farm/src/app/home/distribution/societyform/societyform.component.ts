import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

export class Society {
 
  societyName: string | undefined;
  societyId: Number | undefined;
  totalActiveCustomers: Number | undefined;
 
}
@Component({
  selector: 'app-societyform',
  templateUrl: './societyform.component.html',
  styleUrls: ['./societyform.component.css']
})

export class SocietyformComponent implements OnInit {
 
  constructor(private fb: FormBuilder,private signupService:SignupService,  private router : Router) {

    this.societyForm = this.fb.group({
      // id: ['', Validators.required],
      societyId: ['', Validators.required],
      societyName: ['', Validators.required],
      totalActiveCustomers: ['', Validators.required]
    });
  }

  // formData: any = {}; // Initialize formData object

  // submitForm() {
  //   // Handle form submission logic here
  //   console.log(this.formData); 
  // }

  ngOnInit(): void {
  
    throw new Error('Method not implemented.');
  }
  society:Society=new Society();
  showData:any;
  addSociety(){

   this.signupService.addSociety(this.society).subscribe(response=>{
    this.showData=response;
    console.log("**********************")
   })
  }
  societyForm: FormGroup;

 


  onSubmit() {
    this.addSociety();
    if (this.societyForm.valid) {
      // You can submit the form data here
      console.log('Form submitted:', this.societyForm.value);
      
    this.router.navigate(['/society']);
    } else {
      // Handle validation errors
      console.log('Form is invalid. Please check the fields.');
    }
  }


}
