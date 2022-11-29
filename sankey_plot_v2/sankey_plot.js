      google.charts.load('current', {'packages':['sankey']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addRows([
          [ 'xAcc025Hz', 'on', 1.78 ],
          [ 'snd0100Hz', 'on', 0.14 ],
          [ 'zAcc050Hz', 'on', 0.05 ],
          [ 'yAcc050Hz', 'on', 0 ],
          [ 'snd0150Hz', 'on', 0.99 ],
          [ 'snd0350Hz', 'on', 0 ],
          [ 'xAcc045Hz', 'on', 0 ],
          [ 'snd0775Hz', 'on', 0 ],
          [ 'xAcc020Hz', 'on', 0.55 ],
          [ 'snd0900Hz', 'on', 0 ],
          
          [ 'xAcc025Hz', 'cap', 0.40 ],
          [ 'snd0100Hz', 'cap', 2.29 ],
          [ 'zAcc050Hz', 'cap', 0.0007 ],
          [ 'yAcc050Hz', 'cap', 0 ],
          [ 'snd0150Hz', 'cap', 0.60 ],
          [ 'snd0350Hz', 'cap', 0 ],
          [ 'xAcc045Hz', 'cap', 0.43 ],
          [ 'snd0775Hz', 'cap', 0 ],
          [ 'xAcc020Hz', 'cap', 0.01 ],
          [ 'snd0900Hz', 'cap', 0 ],
          
          [ 'xAcc025Hz', 'out', 0.70 ],
          [ 'snd0100Hz', 'out', 2.35 ],
          [ 'zAcc050Hz', 'out', 0.066 ],
          [ 'yAcc050Hz', 'out', 0.03 ],
          [ 'snd0150Hz', 'out', 0 ],
          [ 'snd0350Hz', 'out', 0.15 ],
          [ 'xAcc045Hz', 'out', 0 ],
          [ 'snd0775Hz', 'out', 0.67 ],
          [ 'xAcc020Hz', 'out', 0 ],
          [ 'snd0900Hz', 'out', 0 ],
          
          
          [ 'xAcc025Hz', 'unb', 1.90 ],
          [ 'snd0100Hz', 'unb', 0 ],
          [ 'zAcc050Hz', 'unb', 0.26 ],
          [ 'yAcc050Hz', 'unb', 1.60 ],
          [ 'snd0150Hz', 'unb', 0.005 ],
          [ 'snd0350Hz', 'unb', 0.37 ],
          [ 'xAcc045Hz', 'unb', 0.05 ],
          [ 'snd0775Hz', 'unb', 0 ],
          [ 'xAcc020Hz', 'unb', 0.003 ],
          [ 'snd0900Hz', 'unb', 0.002 ],
          
          [ 'xAcc025Hz', 'c25', 1.78 ],
          [ 'snd0100Hz', 'c25', 0.08 ],
          [ 'zAcc050Hz', 'c25', 0.22 ],
          [ 'yAcc050Hz', 'c25', 0.27 ],
          [ 'snd0150Hz', 'c25', 0.001 ],
          [ 'snd0350Hz', 'c25', 0.005 ],
          [ 'xAcc045Hz', 'c25', 0.004 ],
          [ 'snd0775Hz', 'c25', 0.006 ],
          [ 'xAcc020Hz', 'c25', 0.008 ],
          [ 'snd0900Hz', 'c25', 0.199 ],
          
          [ 'xAcc025Hz', 'c75', 1.58 ],
          [ 'snd0100Hz', 'c75', 0.001 ],
          [ 'zAcc050Hz', 'c75', 0.0007 ],
          [ 'yAcc050Hz', 'c75', 0.29 ],
          [ 'snd0150Hz', 'c75', 0.02 ],
          [ 'snd0350Hz', 'c75', 0.58 ],
          [ 'xAcc045Hz', 'c75', 0.2 ],
          [ 'snd0775Hz', 'c75', 0.01 ],
          [ 'xAcc020Hz', 'c75', 0 ],
          [ 'snd0900Hz', 'c75', 0.18 ],
          
          [ 'xAcc025Hz', 'vnt', 0 ],
          [ 'snd0100Hz', 'vnt', 0 ],
          [ 'zAcc050Hz', 'vnt', 3.711 ],
          [ 'yAcc050Hz', 'vnt', 0 ],
          [ 'snd0150Hz', 'unb', 0],
          [ 'snd0350Hz', 'unb', 0 ],
          [ 'xAcc045Hz', 'unb', 0 ],
          [ 'snd0775Hz', 'unb', 0 ],
          [ 'xAcc020Hz', 'unb', 0 ],
          [ 'snd0900Hz', 'unb', 0 ],
          

        ]);

        // Sets chart options.
        var options = {
          height:500,
          width: 300,
          sankey: {
          iterations: 0,
            node: {
              colors: colors
            },
            link: {
              colorMode: 'gradient',
              colors: colors
            }
          }
        };
        
        var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                      '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];



        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
        chart.draw(data, options);
        img_svg.attr("src", '/Users/tim/Desktop/');
				Plotly.toImage(gd,{format:'svg',height:800,width:800});
      }
      
      
