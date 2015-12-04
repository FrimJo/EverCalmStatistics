
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

'use strict';

function drawChart(values) {
    
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn('date', 'Date');
	dataTable.addColumn('number', 'Value');

    // Create a empty array
    var data = [];
    
    // Add the headlines of the chart
    //dataTable.addRow([new Date(0), 123]);

    if(values.length > 0){

      // For each value in values, add it to the data array
      values.forEach(function(element){
        dataTable.addRow([new Date(element.timestamp*1000), element.gsr]);
      });
    }



    var options = {
      title: 'Stress data over time',
      
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(dataTable, options);
}