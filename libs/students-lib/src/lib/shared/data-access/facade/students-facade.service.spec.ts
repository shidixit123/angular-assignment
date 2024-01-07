import { TestBed } from '@angular/core/testing';

import { StudentsFacadeService } from './students-facade.service';

describe('StudentsFacadeService', () => {
  let service: StudentsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
