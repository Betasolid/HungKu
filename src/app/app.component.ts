import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.translate.addLangs(environment.currentLanguages);  // add all languages
      this.translate.setDefaultLang(environment.defaultLanguage);
      this.translate.use(environment.defaultLanguage);
      if (this.translate.getBrowserLang) {  // if browsers's language is avalaible is set up as default
        if (environment.currentLanguages.includes(this.translate.getBrowserLang())) {
           this.translate.use(this.translate.getBrowserLang());
        }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      }
    });
  }

  changeLang(e) {
    // console.log(e.detail.checked);
    if (e.detail.checked) {
      this.translate.use('en');
      } else {
      this.translate.use('es');
       }
  }
}
