import { Component , OnInit } from '@angular/core';
import { Ordonnance} from 'src/app/_models/ordonnance';
import { OrdonnanceService } from '../../../_services/ordonnance.service';
import { Medic} from 'src/app/_models/medic';
import{MedicService} from 'src/app/_services/medic.service';
@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent implements OnInit  {
  Ord!: Ordonnance;
  drug!:Medic[];
  selectedDrug!:any;
  searchTerm: string = '';
  msg: string ='';
  constructor(private OrdonnanceService: OrdonnanceService ,private Drug:MedicService, ) { }

  onSelect(drug:Medic ): void {
    this.selectedDrug = drug.drugName;
  }
  onAjout(Ord:Ordonnance ): void {
    // Call the addDrugOrd() method from the OrdonnanceService to add the selected drug to the prescription
    this.OrdonnanceService.addOrd(Ord).subscribe(
      (data) => {
        console.log('Drug added to prescription successfully');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit() {}
  readOrd(searchTerm: string = '') {
    this.Drug.getDrug(searchTerm).subscribe((data) => {
      if (Object.keys(data).length === 0) {
        this.msg = 'No search result found';


      } else {
        this.drug= data;
      }
    });
  }
}
