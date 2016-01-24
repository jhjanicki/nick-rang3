//********************************************
// START OF NEW DATA
//
//********************************************


//PROBLEM, starts at todays date instead of the beginning...

var static_dataset=[];

var static_filtered_data=[];

var static_today;

var static_first_day = moment([2015, 0, 01]);

var static_last_day;

var static_numMonth = "three";  //one, three, six, twelve

var static_tick_months=4;  //number of ticks to show on x-axis, the number of months plus one (prediction)


var product="product1";

var product1_market=[42.1,41.9,41.8,41.8,41.8,41.8,41.7,41.8,41.9,41.8,41.8,41.7,41.7,41.6,41.9,42.0,41.9,42.2,42.2,42.1,42.2,41.9,41.7,41.7];
var product2_market=[1441.6,1445,1439.6,1442.2,1450.1,1455.4,1457,1457.4,1454.2,1454.6,1456.6,1445,1455.6,1458.2,1459.1,1462.4,1457,1457.4,1454.2,1454.6,1462.4,1463,1463.4,1464.2];
var product3_market=[288.1,288.6,289.7,290.2,289.3,290.2,289.3,287.9,288.7,288.8,288.4,287.6,289.3,287.9,288.7,288.8,288.4,289.1,289.5,289.6,288.9,289.8,290.1,287.6];


//console.log("length");
//console.log(product1.length+" "+product2.length+" "+product3.length);



var product1_prediction= [42.4,41.8,41.9,41.5,41.5,41.6,41.7,42,42.1,42.2,41.8,41.6,41.5,41.5,41.6,41.8,41.9,41.9,42.0,42.1,42.1,41.9,41.8,41.8];
var product2_prediction= [1442.6,1444,1440.6,1440.2,1447.1,1458.4,1460,1461.4,1454.2,1455.6,1456,1450,1459.6,1461.2,1462.1,1464.4,1460,1454.4,1456.2,1458.6,1466.4,1460,1463.4,1468.2];
var product3_prediction=[288.3,288.4,289.1,290,289.1,290.5,289.1,286.9,288.1,288.8,288.9,288,287.3,289.9,288.9,289.8,288.3,289.2,289.7,289.3,288.7,289.3,290.2,286.6];

var product_names = ['AWHMAN','CES4348400001','CES5051500001'];


generateTestData();


 $("#product-select").change(function () {
        product=$('#product-select').find(":selected").text();
        removeGraph();
        drawGraph();
    });



function generateTestData(){
	var startdate = moment([2015, 0, 01]);
	var new_date = moment([2015, 0, 01]).add(24, 'months');

	static_today= moment([2015, 0, 01]).add(3,'months');
	
	
	var day = new_date.format('DD');
	var month = new_date.format('MM');
	var year = new_date.format('YYYY');



	var range = moment.range(startdate,new_date); 
	
	console.log(range);
	
	var dates=[];
	range.by('months', function(moment) {
	  dates.push(moment._d);
	});
	
	console.log(dates);
	
	for (var i=0; i<dates.length-1;i++){
		//var entry = moment(dates[i]).format('YYYY-MM-DD'); //dunno if i need this step yet
		//console.log(entry);
		var newElement = {};
 			newElement['date'] = dates[i]; //entry;
 			newElement['product1market']= product1_market[i];
 			newElement['product2market']= product2_market[i];
 			newElement['product3market']= product3_market[i];
 			newElement['product1prediction']= product1_prediction[i];
 			newElement['product2prediction']= product2_prediction[i];
 			newElement['product3prediction']= product3_prediction[i];
 		 static_dataset.push(newElement); 		 
 		 //console.log(newElement);
	
	}
	


}

console.log("static_dataset");
console.log(static_dataset);

getLastDay("twelve");

function getLastDay(months){ //set last day date... basically today + 1, 3, 6, or 12 months
//default is 3

	console.log('getLastDay');

	
	switch(months){
		case "one": //index = 3 (0,1,2,3)  1+3 elements = 4 elements = index 3
			static_last_day= static_dataset[3].date;
		
		for(var i=0;i<5;i++){
			var newElement = {};
			newElement['date'] = static_dataset[i]['date'];
 			newElement['product1market']= static_dataset[i]['product1market'];
 			newElement['product2market']= static_dataset[i]['product2market'];
 			newElement['product3market']= static_dataset[i]['product3market'];
 			newElement['product1prediction']= static_dataset[i]['product1prediction'];
 			newElement['product2prediction']= static_dataset[i]['product2prediction'];
 			newElement['product3prediction']= static_dataset[i]['product3prediction'];
 			static_filtered_data.push(newElement);
		}
			
		break;
		case"six": //9 elements, index 8
			static_last_day= static_dataset[8].date;
			for(var i=0;i<10;i++){
			var newElement = {};
			newElement['date'] = static_dataset[i]['date'];
 			newElement['product1market']= static_dataset[i]['product1market'];
 			newElement['product2market']= static_dataset[i]['product2market'];
 			newElement['product3market']= static_dataset[i]['product3market'];
 			newElement['product1prediction']= static_dataset[i]['product1prediction'];
 			newElement['product2prediction']= static_dataset[i]['product2prediction'];
 			newElement['product3prediction']= static_dataset[i]['product3prediction'];
 			static_filtered_data.push(newElement);
		}
		break;
		case"twelve":  // 15 elements, index 14
			static_last_day= static_dataset[14].date;
			for(var i=0;i<16;i++){
			var newElement = {};
			newElement['date'] = static_dataset[i]['date'];
 			newElement['product1market']= static_dataset[i]['product1market'];
 			newElement['product2market']= static_dataset[i]['product2market'];
 			newElement['product3market']= static_dataset[i]['product3market'];
 			newElement['product1prediction']= static_dataset[i]['product1prediction'];
 			newElement['product2prediction']= static_dataset[i]['product2prediction'];
 			newElement['product3prediction']= static_dataset[i]['product3prediction'];
 			static_filtered_data.push(newElement);
		}
		break; // 6 elements, index 5
		default: static_last_day= static_dataset[5].date;
		for(var i=0;i<7;i++){
			var newElement = {};
			newElement['date'] = static_dataset[i]['date'];
 			newElement['product1market']= static_dataset[i]['product1market'];
 			newElement['product2market']= static_dataset[i]['product2market'];
 			newElement['product3market']= static_dataset[i]['product3market'];
 			newElement['product1prediction']= static_dataset[i]['product1prediction'];
 			newElement['product2prediction']= static_dataset[i]['product2prediction'];
 			newElement['product3prediction']= static_dataset[i]['product3prediction'];
 			static_filtered_data.push(newElement);
		}
	};


// beforeTodayMarket();

}


function beforeTodayMarket(){
	for(var i=0; i<3;i++){
		static_filtered_data[i]['product1prediction']="";
		static_filtered_data[i]['product2prediction']="";
		static_filtered_data[i]['product3prediction']="";
	}

}

console.log("hello");
console.log(static_last_day);
console.log(static_filtered_data);



$("#button30").click( function()  //1 month
           {
            	static_numMonth= $("#button30").data('months'); //or .data()
            	static_tick_months=4;
            	static_filtered_data=[];
            	getLastDay(static_numMonth);  // to set last day
            	removeGraph();
				drawGraph();
           }
        );
        
$("#button90").click( function()  //3 months
           {
            	static_numMonth= $("#button90").data('months'); //or .data()
            	static_tick_months=6;
            	static_filtered_data=[];
            	getLastDay(static_numMonth);  // to set last day
            	removeGraph();
				drawGraph();
           }
        );
        
$("#button180").click( function()  //6 months
           {
            	static_numMonth= $("#button180").data('months'); //or .data()
            	static_tick_months=9;
            	static_filtered_data=[];
            	getLastDay(static_numMonth);  // to set last day
            	removeGraph();
				drawGraph();
           }
        );
        
$("#button360").click( function() //12 months
           {
            	static_numMonth= $("#button360").data('months'); //or .data()
            	static_tick_months=15;
            	static_filtered_data=[];
            	getLastDay(static_numMonth);  // to set last day
            	removeGraph();
				drawGraph();
           }
        );


drawGraph();

function drawGraph(){


    console.log("drawGraph");
	//console.log(allData);
	
	
	 var max;
   	 var min;
	
	switch(product){
		case "product2":
			var valueline = d3.svg.line()
			// .interpolate("basis")
			.x(function(d) { return x(d.date); 
						})
			.y(function(d) { return y(d.product2prediction);
						});
						
			var valueline_market = d3.svg.line()
			// .interpolate("basis")
			.x(function(d) { return x(d.date); 
						})
			.y(function(d) { return y(d.product2market);
						});
						
			//valueline.defined(function(d) { return d.y!=null; })
			
			max = d3.max(static_filtered_data, function(d) { return +d.product2market;} )+10;
   	 		min = d3.min(static_filtered_data, function(d) { return +d.product2market;} )-5;
		break;
		case"product3":
			var valueline = d3.svg.line()
			// .interpolate("basis")
			.x(function(d) { return x(d.date); 
						})
			.y(function(d) { return y(d.product3prediction);
						});
						
			var valueline_market = d3.svg.line()
			// .interpolate("basis")
			.x(function(d) { return x(d.date); 
						})
			.y(function(d) { return y(d.product3market);
						});
						
			//valueline.defined(function(d) { return d.y!=null; })

						
			max = d3.max(static_filtered_data, function(d) { return +d.product3market;} )+1;
   	 		min = d3.min(static_filtered_data, function(d) { return +d.product3market;} )-1.5;
		
		break;
		default:
			var valueline = d3.svg.line()
				.x(function(d) { return x(d.date); 
							})
				.y(function(d) { return y(d.product1prediction);
							});
						
				var valueline_market = d3.svg.line()
				
				.x(function(d) { return x(d.date); 
							})
				.y(function(d) { return y(d.product1market);
							});
							
				//valueline.defined(function(d) { return !isNaN(d[1]); });			
				//valueline.defined(function(d) { return d.y!=null; })
							
				max = d3.max(static_filtered_data, function(d) { return +d.product1market;} )+0.5;
   	 			min = d3.min(static_filtered_data, function(d) { return +d.product1market;} )-0.5;
	};
	
	
		 
	//original, load from generateData only , ignore for now
	
	var margin = {top: 50, right: 20, bottom: 100, left: 50},
    width = getWidth($(window).width()) - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

	// Parse the date / time
	var parseDate = d3.time.format("%Y-%m-%d").parse;
	var format = d3.time.format("%Y-%m-%d");
	
	
	// Set the ranges
	var x = d3.time.scale().range([0, width]);
	var y = d3.scale.linear().range([height, 0]);

	// Define the axes
	var xAxis = d3.svg.axis().scale(x)
		.orient("bottom").ticks(static_tick_months)
		.tickFormat(d3.time.format("%Y-%b-%d"));; //this is where the date is formatted for the axis

	var yAxis = d3.svg.axis().scale(y)
		.orient("left").ticks(10);
	
	
	// Adds the svg canvas
		var svg = d3.select("#graph")
			.append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
			.append("g")
				.attr("transform", 
					  "translate(" + margin.left + "," + margin.top + ")");

	
	
	console.log("static_filtered_data");
	console.log(static_filtered_data);
   		 
 
   		

		
		//console.log("allData");
		//console.log(allData);
		//console.log(max);
		//console.log(min);

			// Scale the range of the data
			x.domain(d3.extent(static_filtered_data, function(d) { return d.date; }));
			y.domain([min,max]); 
			
			
		

			
			// Add the valueline path.
			//  svg.append("path")
//  				// .attr("class", "line")
//  				// .filter(function(d){
// //  					 return d.date.isBefore(static_today);
// //  				})
// //  				.attr("stroke","#2185C5")
// //  				.attr("stroke",function(d){
// //  					if(d.date.isBefore(static_today)){
// //  						return "none";
// //  					}else{
// //  						return "#2185C5";
// //  					}
// //  				
// //  				})
//  				.attr("stroke","#2185C5")
//  				.attr("fill","none")
//  				.transition()
//  				.attr("d", valueline(static_filtered_data));
//  				
//  			
//  			svg.append("path")
//  				// .attr("class","line_market")
//  				.attr("stroke","#FFB779")
//  				.attr("fill","none")
//  				.attr("d",valueline_market(static_filtered_data));



			svg.append("clipPath")
			  .attr("id", "clip-before")
			.append("rect")
			  .attr("width", x(static_today))
			  .attr("height", height);

		  svg.append("clipPath")
			  .attr("id", "clip-after")
			.append("rect")
			  .attr("x", x(static_today))
			  .attr("width", width-x(static_today))
			  .attr("height", height);

		
		
			 svg.selectAll(".line")
				  .data(["before", "after"])
				.	enter().append("path")
				  .attr("class", function(d) { return "line " + d; })
				  .attr("clip-path", function(d) { return "url(#clip-" + d + ")"; })
				  // .datum(data)
				  .attr("d", valueline(static_filtered_data));

			//  svg.append("path")
//  				.attr("class", "line")
//  				.transition()
//  				.attr("d", valueline(static_filtered_data));
 				
 			
 			svg.append("path")
 				.attr("class","line_market")
 				.attr("d",valueline_market(static_filtered_data));


 			var div = d3.select("body").append("div")	
				.attr("class", "tooltip")				
				.style("opacity", 0);
				
				//if want dots then uncomment this
 				
//  			svg.selectAll("dot")	
// 				.data(allData)			
// 				.enter().append("circle")								
// 				.attr("r", 3)		
// 				.attr("cx", function(d) { return x(d.date); })		 
// 				.attr("cy", function(d) { return y(d.sold); })		
// 				.on("mouseover", function(d) {		
// 					div.transition()		
// 						.duration(200)		
// 						.style("opacity", .9);		
// 					div.html(formatDate(d.date) + "<br/>"  + d.sold)	
// 						.style("left", (d3.event.pageX) + "px")		
// 						.style("top", (d3.event.pageY - 28) + "px");	
// 						
// 					})					
// 				.on("mouseout", function(d) {		
// 					div.transition()		
// 						.duration(500)		
// 						.style("opacity", 0);	
// 				})
// 				.on("mouseover.border",function(){
// 				d3.select(this)
// 				.transition()
// 				.duration(1000)
// 				.style({
// 					'stroke-width':10,
// 					'stroke-opacity':0.3,
// 					'fill-opacity':1,
// 					'stroke':'#A7C9AE',
// 					'cursor':'pointer'
// 					});
// 			})
// 			.on("mouseout.border",function(){
// 				d3.select(this)
// 				.transition()
// 				.duration(2000)
// 				.style({
// 					'stroke-width':0.3,
// 					'stroke-opacity':1,
// 					'fill-opacity':1,
// 					'stroke':'#31454C'
// 					});
// 			})
// 			.on("click",drawInfopanel)
// 			.each(function(){
// 				return this.parentNode.appendChild(this);
// 			});
			
			
			
			
				
 				
 			// Add the X Axis
			svg.append("g")
				.attr("class", "x axis")
 				.attr("transform", "translate(0," + height + ")")
				.call(xAxis);
		
		
			  svg.selectAll(".axis text")  // select all the text elements for the xaxis
				  .attr("transform", function(d) {
					 return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)";
				 });

			// Add the Y Axis
			svg.append("g")
 				.attr("class", "y axis")
				.call(yAxis);

			
			
			// vertical line at today's date
			svg.append("line")
				.attr("x1", x(static_today))  //<<== change your code here
				.attr("y1", 0)
				.attr("x2", x(static_today))  //<<== and here
				.attr("y2", height)
				.style("stroke-width", 2)
				.style("stroke", "#FF7F66")
				.style("stroke-dasharray", ("3, 3")) 
				.style("fill", "none");

}


function removeGraph(){
	d3.selectAll("#graph svg").remove();
}

function getWidth(width){
	
	if (width > 1500 || width < 990) {
		return 800;
	}else if ( width > 1300 && width > 990){
		return 700;
	}else
	{
		return 650;
	}
}
