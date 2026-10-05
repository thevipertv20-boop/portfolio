import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { AboutMe } from '../about-me/about-me';
import { Skills } from '../skills/skills';
import { FeaturedProjects } from '../featured-projects/featured-projects';
import { References } from '../references/references';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, Skills, FeaturedProjects, References, Contact],
  templateUrl: './home.html',
})
export class Home {}
