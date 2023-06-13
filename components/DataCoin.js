const DataCoin=()=>{
  const dataChart = [
  {
    name: "Farmacia",
    population: 0,
    color: "rgba(252, 134, 0)",
    legendFontColor: "white",
    legendFontSize: 15
  },
  {
    name: "Transporte",
    population: 0,
    color: "rgb(186, 196, 186)",
    legendFontColor: "white",
    legendFontSize: 15
  },
  {
    name: "Salida",
    population: 0,
    color: "rgb(239, 104, 233)",
    legendFontColor: "white",
    legendFontSize: 15
  },
  {
    name: "Panaderia",
    population: 0,
    color: "rgb(153, 108, 7)",
    legendFontColor: "white",
    legendFontSize: 15
  },
  {
    name: "Verduleria",
    population: 0,
    color: "rgb(0, 0, 255)",
    legendFontColor: "white",
    legendFontSize: 15
  },
  {
    name: "Supermercado",
    population: 0,
    color: "rgb(93, 234, 248)",
    legendFontColor: "white",
    legendFontSize: 15
  },
  {
    name: "Otros",
    population: 0,
    color: "rgb(65, 65, 65)",
    legendFontColor: "white",
    legendFontSize: 15
  },
  {
    name: "Efectivo",
    population: 0,
    color: "rgb(227, 232, 58)",
    legendFontColor: "white",
    legendFontSize: 15,
  },
  {
    name: "Saldo",
    population: 0,
    color: "#35dd49",
    legendFontColor: "white",
    legendFontSize: 15,
  },

  ];
  const detail_expenses=[{
                name:'Farmacia',
                spending:0
              },
              {
                name:'Transporte',
                spending:0
              },
              {
                name:'Salida',
                spending:0
              },
              {
                name:'Panaderia',
                spending:0
              },
              {
                name:'Verduleria',
                spending:0
              },
              {
                name:'Supermercado',
                spending:0
              },
              {
                name:'Otros',
                spending:0
              },
              {
                name:'Efectivo',
                spending:0
              },
            ];
  const duesDetails=[1, 2, 3, 6, 12, 18, 24]
  const dataCoin={
  'dataChart':dataChart,
  'capitalInitial':0,
  'saldo':0,
  'category':[],
  'dues': duesDetails,
  'expenses':detail_expenses,
  }
  return(
    dataCoin
  );
};
export default DataCoin;
