import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CandidateSearchComponent } from './components/candidate-search/candidate-search.component';
import { CandidateRegisterComponent } from './components/candidate-register/candidate-register.component';
import { EmployersComponent } from './components/employers/employers.component';
import { EventPostComponent } from './components/event-post/event-post.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { LogoutComponent } from './components/logout/logout.component';


// routes
const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'candidateRegister', component: CandidateRegisterComponent },
  { path: 'candidateSearch', component: CandidateSearchComponent },
  { path: 'eventPost', component: EventPostComponent },
  { path: 'jobPost', component: JobPostComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { };

export const routingComponents = [
  AboutUsComponent,
  DashboardComponent,
  CandidateRegisterComponent,
  CandidateSearchComponent,
  EventPostComponent,
  JobPostComponent,
  LogoutComponent
];
