import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '../material-module';

import { DisplayDataComponent } from './display-data.component';

describe('DisplayDataComponent', () => {

  let spectator: Spectator<DisplayDataComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: DisplayDataComponent,
    imports: [
      BrowserAnimationsModule,
      NoopAnimationsModule,
      MaterialModule
    ],
    providers: [
      provideMockStore({
        initialState,
      })
    ],
    declarations: [DisplayDataComponent],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
