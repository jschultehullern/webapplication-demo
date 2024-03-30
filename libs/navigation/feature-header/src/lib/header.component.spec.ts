import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    })
      .overrideComponent(HeaderComponent, {
        set: { changeDetection: ChangeDetectionStrategy.OnPush },
      })
      .compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.componentRef.setInput('links', [
      { translationId: 'test', route: 'test' },
    ]);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(fixture).toBeTruthy();
    expect(fixture.componentInstance.links()).toStrictEqual([
      { translationId: 'test', route: 'test' },
    ]);
    expect(fixture.componentInstance.activeLink()).toStrictEqual({
      translationId: 'test',
      route: 'test',
    });
    expect(fixture.componentInstance.setLinks).toBeTruthy();
  });
});
