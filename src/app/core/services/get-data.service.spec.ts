import { GetDataService } from './get-data.service';

import {
  createServiceFactory,
  SpectatorService,
} from '@ngneat/spectator';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetDataService', () => {
  let spectator: SpectatorService<GetDataService>;

  const createService = createServiceFactory({
    service: GetDataService,
    imports: [
      HttpClientTestingModule
    ]
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

});
