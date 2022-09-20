function InitContent_INT_SAND()
{
	window.strInputTitle = 'ROC Sand-Pit System';
	window.strInputSubTitle = 'For Internal Use Only';
	
	window.strInputBody = "";
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '{INSERT NAME} will be using the ROC Sand Pit (RSP) System on {DAY OF WEEK}, {DAY} {MONTH} between {XX:XX} and {XX:XX} for a demonstration. Please do not use the system during this time. If you have any issues reagrding this please contact {INSERT NAME}.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'E-mail: {INSERT AND LINK E-MAIL ADDRESS HERE}.<br />');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Telephone: {INSERT TELEPHONE NUMBER HERE}.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Thank you.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
}