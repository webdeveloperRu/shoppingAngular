import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewModalComponent } from './recipe-view-modal.component';

describe('RecipeViewModalComponent', () => {
  let component: RecipeViewModalComponent;
  let fixture: ComponentFixture<RecipeViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeViewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
