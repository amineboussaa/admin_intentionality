let connection = require('../config/db');
class Configuration {

    /**
     *
     * @param callback
     */
    static getConfiguration(callback) {
        connection.query("SELECT * FROM configapp LIMIT 1", [], callback);
    }

    /**
     *
     * @param content
     * @param callback
     */
    static updateConfiguration(content, callback) {
        connection.query(`UPDATE  configapp set  maxInactivityPeriod = ?, 
                            automaticSavingPeriod=?, maxDataStorage=?, maxNameLenght=?, 
                            extractionstartperiod=?, minTotalPost=?,minAvgModelThreshold=?, 
                            maxAvgModelThreshold=?, maxNbWordInCloud=?, maxNbWordInThemeCloud=?, SearchResultNbPost=?, MaxSearchResultNbPost=?  
                            LIMIT 1`,
            content, callback);
    }
}
module.exports = Configuration;