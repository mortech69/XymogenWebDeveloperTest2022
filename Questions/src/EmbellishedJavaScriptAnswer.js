$(function()
{
	processor.init()
});

"use strict"

var processor = {	
				 init: function()
				 {
				 	processor.setup();
				 	processor.click();	
				 },
				 setup: function()
				 {
				 	$( "dd" ).each( function()
				 	{
				 		$(this).html(0);
				 	});
				 },
				 click: function()
				 {
				 	$('#submit').click(function(event)
				 	{
				 		const values = processor.incoming()
				 		const initialValues = processor.preserve(values);
				 			processor.assignFields(values, processor.fields($('#incoming')));
				 		const out = processor.process(values);
				 			processor.assignFields(out, processor.fields($('#processed')));
				 		const del = processor.delivered(out);
				 			processor.assignFields(del, processor.fields($('#delivered')));
				 		const rem = processor.remaining(initialValues, out);
				 			processor.assignFields(rem, processor.fields($('#remaining')));
				 	});
				 },
				 incoming: function()
				 {
				 	const values = [];
				 	$(".fields").each(function(){
				 	values.push($(this).val())})
				 	return values;
				 }, 
				 process: function (values)
				 {  
				 	const out =[0,0,0];
				 	var processed = 0;		 
				 	while(values[1] > 0 && values[0] >= 5)
				 	{
				 		out[1]++
				 		values[0] = (values[0]  - 5);
				 		values[1]--;
				 		processed = (processed + 5);
				 	}		 
				 	while(values[2] > 0 && values[0] > 0)
				 	{
				 		out[2]++;
				 		values[0]--; 
				 		values[2]--;
				 		processed++;	
				 	}		 
				 	out[0] = processed;
				 	return out;
				 },
				 delivered: function(out)
				 {
				 	const d = [0, 0];
				 	d[0] = (out[1] + out[2]);
				 	d[1] = out[0];
				 	return d;
				 },
				 remaining: function(values, out)
				 {
				 	const rem = [0,0,0]
				 	rem[0] = (values[1] - out[1]);
				 	rem[1] = (values[2] - out[2]);
				 	rem[2] = (values[0] - out[0]);
				 	return rem;
				 },
				 preserve: function (values)
				 {
				 	const initial = [];
				 	for (let i = 0; i < values.length; i++) {
				 		 initial[i] = values[i];
				 	}
				 	return initial;
				 },
				 assignFields: function(values, fields)
				 {	
				 	var i = 0;
				 	for (const innerHTML in fields)
				 	{
				 		$(fields[i]).html(values[i]); 
						i++;
				 	}
				 },
				 fields: function(id)
				 { 
				 	return $(id).children('dd')
				}};
			 
			 
			 
			 