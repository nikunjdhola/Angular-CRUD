import { TestBed } from '@angular/core/testing';

import { StudentDataListService } from './student-data-list.service';

describe('StudentDataListService', () => {
  let service: StudentDataListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDataListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
