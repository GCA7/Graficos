$(document).ready(function(){
  debugger;
  var datos = {
    type: "pie",
    data : {
      datasets :[{
        data : [
          100,
        ],
        backgroundColor: [
          "#021859",
        ],
      }],
      labels : [
        "Sí ",
      ]
    },
    options : {
      responsive : true,
    }
  };
  var datos2 = {
    type: "pie",
    data : {
      datasets :[{
        data : [
          100,
        ],
        backgroundColor: [
          "#021859",
        ],
      }],
      labels : [
        "Sí ",
      ]
    },
    options : {
      responsive : true,
    }
  };

  var datos3 = {
    type: "pie",
    data : {
      datasets :[{
        data : [
          96.8,
          3.2,
        ],
        backgroundColor: [
          "#021859",
          "#027213",
        ],
      }],
      labels : [
        "Sí ",
        "No ",
      ]
    },
    options : {
      responsive : true,
    }
  };
  var datos4 = {
    type: "pie",
    data : {
      datasets :[{
        data : [
          77.4,
          71,
          9.7,
          16.1,
          3.2,
        ],
        backgroundColor: [
          "#021859",
          "#0583F2",
          "#05F228",
          "#03A60E",
          "#F7464A",
        ],
      }],
      labels : [
        "Guardería ",
        "Peluquería",
        "Spa",
        "Todas las anteriores",
        "Otro",
      ]
    },
    options : {
      responsive : true,
    }
  };

  var datos5 = {
    type: "pie",
    data : {
      datasets :[{
        data : [
          71,
          25.8,
          0,
          3.2,
        ],
        backgroundColor: [
          "#021859",
          "#0583F2",
          "#05F228",
          "#F7464A",
        ],
      }],
      labels : [
        "entre 5000 y 10000 colones",
        "entre 10000 y 20000 colones",
        "entre 20000 y 30000 colones",
        "Otro",
      ]
    },
    options : {
      responsive : true,
    }
  };

    var datos6 = {
      type: "pie",
      data : {
        datasets :[{
          data : [
            67.7,
            12.9,
            3.2,
            9.7,
            6.5,
            0,
          ],
          backgroundColor: [
            "#021859",
            "#0583F2",
            "#05F228",
            "#03A60E",
            "F23D3D",
            "257230",
          ],
        }],
        labels : [
          "Viaje",
          "Trabajo",
          "Conveniencia",
          "Falta de tiempo",
          "Calidad del servcicio",
          "Otro",
        ]
      },
      options : {
        responsive : true,
      }
    };
        var datos7 = {
          type: "pie",
          data : {
            datasets :[{
              data : [
              25.8,
                32.3,
                6.5,
                9.7,
                6.5,
                19.4,
              ],
              backgroundColor: [
                "#021859",
                "#0583F2",
                "#05F228",
                "#03A60E",
                "#257230",
                "#F7464A",
                ],
            }],
            labels : [
              "Entre semana",
              "Fines de semana",
              "Un día a la semana",
              "Feriados",
              "Fin de Año",
              "Otro",
                     ]
          },
          options : {
            responsive : true,
          }
        };
                  var datos8 = {
                  type: "pie",
                  data : {
                    datasets :[{
                      data : [
                      80.6,
                      0,
                        12.9,
                        6.5,
                      ],
                      backgroundColor: [
                        "#021859",
                        "#0583F2",
                        "#05F228",
                        "#F7464A",
                        ],
                    }],
                    labels : [
                              "Un familiar",
                              "Una Veterinaria",
                              "Nadie",
                              "Otro",
                             ]
                  },
                  options : {
                    responsive : true,
                  }
                };
                var datos9 = {
                type: "pie",
                data : {
                  datasets :[{
                    data : [
                    12.9,
                    25.8,
                    9.7,
                    41.9,
                    9.7,
                    ],
                    backgroundColor: [
                      "#021859",
                      "#0583F2",
                      "#05F228",
                      "#03A60E",
                      "#F7464A",
                      ],
                  }],
                  labels : [
                          "Menos de 5 horas",
                          "Entre 6 y 12 horas",
                          "Más de 12 horas",
                          "Más de un día",
                            "Otro",
                           ]
                },
                options : {
                  responsive : true,
                }
              };
              var datos10 = {
              type: "pie",
              data : {
                datasets :[{
                  data : [
                  35.5,
                  16.1,
                  0,
                  48.4,
                  ],
                  backgroundColor: [
                    "#021859",
                    "#0583F2",
                    "#05F228",
                    "#03A60E",
                    ],
                }],
                labels : [
                        "Correo",
                        "Teléfono",
                        "Radio",
                        "Redes Sociales",
                       ]
              },
              options : {
                responsive : true,
              }
            };
  var canvas = document.getElementById('chart1').getContext('2d');
  window.pie = new Chart(canvas, datos);

  var canvas2 = document.getElementById('chart2').getContext('2d');
  window.pie = new Chart(canvas2, datos2);

  var canvas3 = document.getElementById('chart3').getContext('2d');
  window.pie = new Chart(canvas3, datos3);

  var canvas4 = document.getElementById('chart4').getContext('2d');
  window.pie = new Chart(canvas4, datos4);

  var canvas5 = document.getElementById('chart5').getContext('2d');
  window.pie = new Chart(canvas5, datos5);

  var canvas6 = document.getElementById('chart6').getContext('2d');
  window.pie = new Chart(canvas6, datos6);

  var canvas7 = document.getElementById('chart7').getContext('2d');
  window.pie = new Chart(canvas7, datos7);

  var canvas8 = document.getElementById('chart8').getContext('2d');
  window.pie = new Chart(canvas8, datos8);

  var canvas9 = document.getElementById('chart9').getContext('2d');
  window.pie = new Chart(canvas9, datos9);

  var canvas10 = document.getElementById('chart10').getContext('2d');
  window.pie = new Chart(canvas10, datos10);

});
