import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { EquipmentInfoPage } from './pages/equipment-info/equipment-info.page';
import { MonitoringPageModule } from './pages/monitoring/monitoring.module';



@NgModule({
  declarations: [AppComponent,EquipmentInfoPage],
  entryComponents: [EquipmentInfoPage],
  imports: [
      BrowserModule,
      IonicModule.forRoot({
        backButtonText: "",
        mode:"ios"
      }),
      AppRoutingModule,
      MonitoringPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileOpener,
    File,
    FileTransfer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
