

 covid19ImpactEstimator = (data) => data;

export default covid19ImpactEstimator;



data.region.avgDailyIncomeInUSD;
data.region.avgDailyIncomePopulation;

data.periodType;
data.timeToElapse;
data.reportedCases;
data.population;
data.totalHospitalBeds;

 data1={
 region: {
 name: "Africa",
 avgAge: 19.7,
 avgDailyIncomeInUSD: 5,
 avgDailyIncomePopulation: 0.71
 },
 periodType: "days",
 timeToElapse: 3,
 reportedCases: 674,
 population: 66622705,
 totalHospitalBeds: 1380614
}

var impact={
  currentlyInfected:function(){
    return data1.reportedCases*10;
  }(),
   infectionsByRequestedTime:function(){
    factor=Math.trunc(data1.timeToElapse/3);
    return impact.currentlyInfected*(Math.pow(2,factor));
  }(),
   severeCasesByRequestedTime:function(){
    return Math.trunc(0.15*impact.infectionsByRequestedTime);
  }(),
   hospitalBedsByRequestedTime:function(){
    return Math.trunc((0.65*0.90*data1.totalHospitalBeds)-impact.severeCasesByRequestedTime);
  }(),
  casesForICUByRequestedTime:function(){
    return Math.trunc(impact.infectionsByRequestedTime*0.05);
  }(),
  casesForVentilatorsByRequestedTime:function(){
    return Math.trunc(impact.infectionsByRequestedTime*0.02);
  }(),
  dollarsInFlight:function(){
    return Math.trunc(impact.infectionsByRequestedTime*data1.avgDailyIncomePopulation*data1.avgDailyIncomeInUSD/30);
  }()
}
severeImpact={
   currentlyInfected:function(){
    return data1.reportedCases*50;
  }(),
   infectionsByRequestedTime:function(){
    factor=Math.trunc(data1.timeToElapse/3);
    return severeImpact.currentlyInfected*(Math.pow(2,factor));
  }(),
   severeCasesByRequestedTime:function(){
    return Math.trunc(0.15*severeImpact.infectionsByRequestedTime);
  }(),
   hospitalBedsByRequestedTime:function(){
    return Math.trunc((0.65*0.90*data1.totalHospitalBeds)-severeImpact.severeCasesByRequestedTime);
  }(),
  casesForICUByRequestedTime:function(){
    return Math.trunc(severeImpact.infectionsByRequestedTime*0.05);
  }(),
  casesForVentilatorsByRequestedTime:function(){
    return Math.trunc(severeImpact.infectionsByRequestedTime*0.02);
  }(),
   dollarsInFlight:function(){
     return Math.trunc(severeImpact.infectionsByRequestedTime*data1.avgDailyIncomePopulation*data1.avgDailyIncomeInUSD/30);
   }()

}

console.log(data1);
console.log(impact);
console.log(severeImpact);
