alert(42)
$.getJSON('http://jira.photobox.com/rest/api/latest/issue/SEC-267', function(data) 
{ 
	$('#Gdpr-Implications').html(data.fields.customfield_12694); 
	$('#Risk-Implications').html(data.fields.customfield_12695); 
	$('#Assumptions-Dependencies').html(data.fields.customfield_12696); 
	$('#Decision-Text').html(data.fields.customfield_12697); 
   _data = data 
} )
