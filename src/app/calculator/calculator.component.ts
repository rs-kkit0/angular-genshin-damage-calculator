import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  atk = 1055;
  critRate = 53.8;
  critDmg = 50;
  physicalDmgBonus = 43.5;
  elementalDmgBonus = 30;
  elementalSkillDmg = 100;

  calcDmg;
  calcCritDmg;
  calcAvgDmg;


  constructor() { }

  ngOnInit() {
  }

  calc() {
    const tmpCritRate = this.critRate / 100;
    const tmpCritDmg = this.critDmg / 100;
    const tmpPhysicalDmgBonus = this.physicalDmgBonus / 100;
    const tmpElementalDmgBonus = this.elementalDmgBonus / 100;
    const tmpElementalSkillDmg = this.elementalSkillDmg / 100;

    this.calcDmg = this.atk * (1 + tmpElementalDmgBonus + tmpPhysicalDmgBonus) * tmpElementalSkillDmg;
    this.calcCritDmg = this.calcDmg * (1 + tmpCritDmg);
    this.calcAvgDmg = this.calcCritDmg * tmpCritRate + this.calcDmg * (1 - tmpCritRate);
  }

}
