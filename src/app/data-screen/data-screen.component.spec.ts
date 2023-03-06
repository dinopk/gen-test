import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '../material-module';

import { DataScreenComponent } from './data-screen.component';

describe('DataScreenComponent', () => {

  let spectator: Spectator<DataScreenComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: DataScreenComponent,
    imports: [
      RouterTestingModule,
      MaterialModule,
      ReactiveFormsModule
    ],
    providers: [
      provideMockStore({
        initialState,
      })
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
