function InitContent_INT_VPN()
{
	window.strInputTitle = 'ROC VPN Maintenance';
	window.strInputSubTitle = 'For Internal Use Only';
	
	window.strInputBody = "";
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Please note that the VPN will be down between {XX:XX} and {XX:XX} UK time on {DAY OF WEEK}, {DAY} {MONTH} for maintenance.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'This will disconnect all users from the ROC network, from TOPdesk, and from customer sites accessed via ROC. It will not affect email or Replicon.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Sorry for the inconvenience caused.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
}