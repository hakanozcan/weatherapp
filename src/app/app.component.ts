import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 

  constructor(private weatherService: WeatherService) { }
 
  weatherData?: WeatherData;
  cityName: string='Denizli';
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
   }
  
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  private getWeatherData(cityName: string) {

    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData=response;
        console.log(response);
  
  } 

  });
  

}



}
