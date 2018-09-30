import { TestBed, inject } from '@angular/core/testing';

import { ProjetoServiceService } from './projeto-service.service';

describe('ProjetoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetoServiceService]
    });
  });

  it('should be created', inject([ProjetoServiceService], (service: ProjetoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
