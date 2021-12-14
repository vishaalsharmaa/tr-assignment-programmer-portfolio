import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.scss']
})
export class ResumeBuilderComponent implements OnInit {

  portFolioBuilderForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}


  ngOnInit(): void {

    this.portFolioBuilderForm = this.formBuilder.group({
      firstName   : ['', [Validators.required]],
      lastName    : ['', [Validators.required]],
      email       : ['', [Validators.required, Validators.email]],
      phone       : ['', [Validators.required]],
      linkedInURL : [''],
      isFresher   : [false],
      experienceBlocks: this.formBuilder.array([this.buildExperienceBlock()]),
      educationBlocks: this.formBuilder.array([this.buildEducationBlock()])
    });

  }

  buildExperienceBlock(): FormGroup {
    return this.formBuilder.group({
      title       : [''],
      company     : [''],
      location    : [''],
      startDate   : [''],
      endDate     : [''],
      description : ['']
    });
  }

  buildEducationBlock(): FormGroup {
    return this.formBuilder.group({
      degree              : ['', [Validators.required]],
      institutionName     : ['', [Validators.required]],
      passingYear         : ['', [Validators.required]],
      percentage          : ['', [Validators.required]],
    });
  }

  save() {
    console.log('Saved: ' + JSON.stringify(this.portFolioBuilderForm.value));
    localStorage.setItem('userPortfolioData' , JSON.stringify(this.portFolioBuilderForm.value));
    setTimeout(()=>{
      window.location.reload();
    }, 200);
  }

  get experienceBlocks(): FormArray {
    return this.portFolioBuilderForm.get('experienceBlocks') as FormArray;
  }

  get educationBlocks(): FormArray {
    return this.portFolioBuilderForm.get('educationBlocks') as FormArray;
  }

  addExperience() {
    this.experienceBlocks.insert(0, this.buildExperienceBlock());
  }

  addEducation() {
    this.educationBlocks.insert(0, this.buildEducationBlock());
  }

}
