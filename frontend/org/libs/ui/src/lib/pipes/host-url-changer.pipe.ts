import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from './../../../../app-config/index';
import { Inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hostUrlChanger',
})
export class HostUrlChangerPipe implements PipeTransform {
  API_URL = "";
  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private http: HttpClient
  ) {
    this.API_URL = appConfig.baseUrl;
  }
  transform(value: string | undefined, newBaseString?: string): string {
    if (value) {
      if (newBaseString == null) newBaseString = this.API_URL;
      try {
        new URL(value);
      } catch (e) {
        return value;
      }
      // extract the path and query from the url
      const path = value.split('/').slice(3).join('/');
      // prepend the new base address to the path
      return newBaseString + '/' + path;
    }else{
      return "https://cdn3d.iconscout.com/3d/premium/thumb/404-error-page-6973465-5701571.png"
    }

  }
}
