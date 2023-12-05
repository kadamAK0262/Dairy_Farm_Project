import { Component } from '@angular/core';
import * as pbi from 'powerbi-client';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-power-bi-report',
  templateUrl: './power-bi-report.component.html',
  styleUrls: ['./power-bi-report.component.css']
})
export class PowerBiReportComponent {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.embedReport();
  }

  embedReport(): void {
    this.authService.login()
      .then((accessToken: string) => {
        const config: pbi.IEmbedConfiguration = {
          type: 'report',
          embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=314ebd54-d5d9-4ce3-8290-ad004176816f&autoAuth=true&ctid=2821b6a7-e528-4079-9079-2feea853cf13',
          tokenType: pbi.models.TokenType.Aad,
          accessToken: accessToken,
          settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: true
          }
        };
        console.log(accessToken);
        

        const reportContainer = document.getElementById('reportContainer') as HTMLElement;

        const report = (window as any).powerbi.embed(reportContainer, config);

        report.on('loaded', () => {
          console.log('Report is loaded');
        });

        report.on('error', (error: any) => {
          console.error(error);
        });
      })
      .catch((error) => {
        console.error('Authentication failed', error);
      });
  }
}
