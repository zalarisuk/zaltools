function InitContent_GEN_KD()
{
	window.strInputTitle = 'Generic Title';
	window.strInputSubTitle = 'Generic Sub Title';
	
	window.strInputBody = "";
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'This is where the body text goes.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'More body text can go here.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Yours faithfully,');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	
	//Set signature for Kara Daugharty
	InitContent_SIG_KD();
	
	//Set web links for ROC
	InitContent_LINKS_ROC();
}