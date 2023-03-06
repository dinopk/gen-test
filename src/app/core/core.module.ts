import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { coreEffectsAtBootstrap } from './store/core.effects';
import { GetDataService } from '@gen-services/get-data.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    EffectsModule.forFeature(coreEffectsAtBootstrap),
  ],
  providers: [
    GetDataService
  ]
})
export class CoreModule {}
