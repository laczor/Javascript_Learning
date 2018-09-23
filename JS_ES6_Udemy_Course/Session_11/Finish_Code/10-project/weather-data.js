// So we are creatin a weather data class, which will store the weather information
// We also use a handler, which will inferfere when we would like to modify it's properties using Proxy.
// WIth Reflect Api we modify the created object properties

export class WeatherData {
    constructor(cityName, description) {
        this.cityName = cityName;
        this.description = description;
        this.temperature = '';
    }
}

//This is the handler which will get passed to the proxy.
export const WEATHER_PROXY_HANDLER = {
    get: function(target, property) {
        return Reflect.get(target, property);
    },
    set: function(target, property, value) {
        const newValue = (value * 1.8 + 32).toFixed(2) + 'F.';
        return Reflect.set(target, property, newValue);
    }
};