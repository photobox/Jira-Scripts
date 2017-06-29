jira_Url = 'http://jira.photobox.com/rest/api/latest/issue/' + jira_Id ;

$('#Issue_Link').html('<a href=http://jira.photobox.com/browse/' + jira_Id + '>' + jira_Id + '</a>')

$.getJSON(jira_Url, function(data) 
{ 
	
	$('#Summary'                 ).html(data.fields.summary          ); 
	$('#Description'      	     ).html(data.fields.description      ); 
	$('#Gdpr-Implications'	     ).html(data.fields.customfield_12694); 
	$('#Risk-Implications'	     ).html(data.fields.customfield_12695); 
	$('#Assumptions-Dependencies').html(data.fields.customfield_12696); 
	$('#Decision-Text'           ).html(data.fields.customfield_12697); 
        _data = data 
} )
