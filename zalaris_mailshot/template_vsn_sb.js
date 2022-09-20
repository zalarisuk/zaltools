function InitContent_VSN_SB()
{
	window.strInputTitle = 'VSN Title';
	window.strInputSubTitle = 'VSN Sub Title';
	
	window.strInputBody = "";
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'This is where the body text goes.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '	More body text can go here.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Yours faithfully,');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	
	//Set signature for Stephen Burr
	InitContent_SIG_SB();
	
	//Set links for Visualization Solutions by Nakisa
	InitContent_LINKS_VSN();
}