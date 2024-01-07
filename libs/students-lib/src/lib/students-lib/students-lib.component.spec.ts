import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentsLibComponent } from './students-lib.component';

describe('StudentsLibComponent', () => {
  let component: StudentsLibComponent;
  let fixture: ComponentFixture<StudentsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
