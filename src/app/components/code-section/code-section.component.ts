import { Component, inject, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { codeToHtml } from 'shiki';
import { CodeSection } from '../../services/interfaces/article/codesection.interface';

@Component({
  selector: 'app-code-section',
  standalone: true,
  imports: [],
  templateUrl: './code-section.component.html',
  styleUrl: './code-section.component.scss',
})
export class CodeSectionComponent implements OnInit {
  @Input({ required: true }) codeSection!: CodeSection | null;
  public safeHtml: SafeHtml = '';
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);

  async ngOnInit(): Promise<void> {
    if (!this.codeSection) return;
    const rawHtml = await codeToHtml(this.codeSection?.code, {
      lang: this.codeSection?.language,
      theme: 'catppuccin-macchiato'
    });
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(rawHtml);
  }
}
