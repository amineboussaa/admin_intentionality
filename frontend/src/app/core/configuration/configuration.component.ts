import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ConfigurationService } from './configuration.service';
import {Configuration} from "./configuration";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  public configuration : Configuration;
  constructor(
    private configurationService : ConfigurationService,
    private router : Router
  ) {
    }
  private loadConfiguration(){
        this.configurationService.getConfiguration().subscribe( (configuration) => {
        this.configuration = new Configuration(configuration[0]);
    })
  }
  ngOnInit() {
    this.loadConfiguration();
  }

  onSave(){
    this.configurationService.updateConfiguration(this.configuration);
  }
  onCancel(){}
}
