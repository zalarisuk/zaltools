function InitContent_SFSF()
{
	window.strInputTitle = 'SuccessFactors Title';
	window.strInputSubTitle = 'SuccessFactors Sub Title';
	
	window.strInputBody = "";
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'This is where your really interesting information about SuccessFactors goes.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Be sure to check out the <a href="http://www.roc-group.com/sfsf">SuccessFactors section of our web site</a> for even more information on ROC and SuccessFactors can help you with your HCM in the cloud.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Yours faithfully,');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<b>{Insert Name Here}.</b><br />');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<b>{Insert Job Title Here}, ROC.</b></br>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	
	//Set web links for ROC
	InitContent_LINKS_ROC();
}