import { Component, Input, OnInit } from '@angular/core';
import { CodeSection } from '../../services/interfaces/article/codesection.interface';
import { Highlight } from 'ngx-highlightjs';

@Component({
    selector: 'app-code-section',
    imports: [Highlight],
    templateUrl: './code-section.component.html',
    styleUrl: './code-section.component.scss'
})
export class CodeSectionComponent implements OnInit {
  @Input({ required: true }) codeSection!: CodeSection | null;
  ngOnInit(): void {
    console.log(this.codeSection?.code);
  }
}
