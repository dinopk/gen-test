
import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  let initialState: any;

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [
      MaterialModule,
      RouterTestingModule
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

  it(`should have as title 'gen-test'`, () => {
    expect(spectator.component.title).toEqual('gen-test');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('gen-test app is running!');
  // });
});
