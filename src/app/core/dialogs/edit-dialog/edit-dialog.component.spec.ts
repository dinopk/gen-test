import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '@gent-material';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';

import { EditDialogComponent } from './edit-dialog.component';

describe('EditDialogComponent', () => {

  let spectator: Spectator<EditDialogComponent>;
  let initialState: any;
  const createComponent = createComponentFactory({
    component: EditDialogComponent,
    imports: [
      MaterialModule
    ],
    providers: [
      provideMockStore({
        initialState,
      }),
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }
  ]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

});
