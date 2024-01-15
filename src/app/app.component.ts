import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { MetaService } from '@shared/services/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  constructor(
    private metaService: MetaService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    this.metaService.addMetaTag({
      title: 'BC Advogados',
      description: 'BC Advogados é uma associação de advogados, que exerce a actividade profissional de Advocacia e Consultoria Jurídica.',
      image: window.location.href + 'assets/images/home/hero/hero-desktop.png',
      url: window.location.href
    });
  }

}
