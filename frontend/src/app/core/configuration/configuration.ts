export class Configuration {

  maxInactivityPeriod: number;
  automaticSavingPeriod: number;
  maxDataStorage: number;
  maxNameLenght: number;
  extractionstartperiod: number;
  minTotalPost: number;
  minAvgModelThreshold: number;
  maxAvgModelThreshold: number;
  maxNbWordInCloud: number;
  maxNbWordInThemeCloud: number;
  SearchResultNbPost : number ;
  MaxSearchResultNbPost : number ;

  constructor(configuration) {
    this.maxInactivityPeriod = configuration.maxInactivityPeriod ;
    this.automaticSavingPeriod = configuration.automaticSavingPeriod;
    this.maxDataStorage = configuration.maxDataStorage ;
    this.maxNameLenght = configuration.maxNameLenght ;
    this.extractionstartperiod = configuration.extractionstartperiod ;
    this.minTotalPost = configuration.minTotalPost ;
    this.minAvgModelThreshold = configuration.minAvgModelThreshold ;
    this.maxAvgModelThreshold = configuration.maxAvgModelThreshold ;
    this.maxNbWordInCloud = configuration.maxNbWordInCloud ;
    this.maxNbWordInThemeCloud = configuration.maxNbWordInThemeCloud ;
    this.SearchResultNbPost = configuration.SearchResultNbPost ;
    this.MaxSearchResultNbPost = configuration.MaxSearchResultNbPost ;
  }
}
