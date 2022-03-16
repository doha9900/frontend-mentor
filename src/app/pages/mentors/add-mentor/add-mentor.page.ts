import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hv } from 'src/app/core/models/hv.models';
import { Mentor } from 'src/app/core/models/mentor.model';
import { MentorService } from 'src/app/core/services/mentor.service';

@Component({
  selector: 'app-add-mentor',
  templateUrl: './add-mentor.page.html',
  styleUrls: ['./add-mentor.page.scss'],
})
export class AddMentorPage implements OnInit {
  name: string;
  last_name: string;
  dni: Number;
  email: string;
  tier: Number;
  profile: string;
  mentorized:string[];
  mentor: Mentor;

  constructor(private mentorService: MentorService, private router: Router) {}

  ngOnInit() {
    
  }

  addMentor() {
    this.mentor = {
      name: this.name,
      last_name: this.last_name,
      dni: this.dni,
      email: this.email,
      tier:this.tier,
      mentorized:this.mentorized
    };

    this.mentorService.addMentor(this.mentor).subscribe((response) => {
      
      console.log(this.mentor)
      this.tier = undefined;
      this.mentorized = [];
      this.name = '';
      this.last_name = '';
      this.dni = undefined;
      this.email = '';
      console.log(this.mentor)
      this.router.navigate(['mentors/list-mentor']).then(() => {
        window.location.reload();
      });
      (error) => {
        console.log(error);
      };
    });
  }
}
