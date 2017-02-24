import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonDataService {

  private url: string = "jsonData/jsonData.json";

  constructor(private http: Http) {}

  // public languages = [
  //   { name: 'English' },
  //   { name: 'Hindi' },
  //   { name: 'English' },
  //   { name: 'Hindi' },
  //   { name: 'English' },
  //   { name: 'Hindi' },
  //   { name: 'English' },
  //   { name: 'Hindi' },
  //   { name: 'English' },
  //   { name: 'Hindi' }
  // ];

  public profession = [
    { name: 'BPO', value: 'bpo' },
    { name: 'Full Stack Developer', value: 'fullStackDev' },
    { name: 'Civil Aviation', value: 'civilAviation' },
    { name: 'Retail', value: 'retail' },
    { name: 'Logistic Coordinator', value: 'logistic' }
  ];

  public locations = [
    { name: 'Electronic City', value: 'electronicCity' },
    { name: 'Koramangla', value: 'koramangla' },
    { name: 'Whitefield', value: 'whitefield' },
    { name: 'Pune', value: 'pune' },
  ];
  public placementCenter = [
    { name: 'Banglore', value: 'bangalore' },
    { name: 'Pune', value: 'pune' },
    { name: 'NIIT', value: 'niit' }
  ];



  getLanguages() {
    return this.http.get(this.url).map((response: Response) => response.json());
  };
  // getLanguages(){
  //   return this.languages;
  // }

  getProfession() {
    return this.profession;
  };

  getLocations() {
    return this.locations;
  };

  getplacementCenter() {
    return this.placementCenter;
  }



}

