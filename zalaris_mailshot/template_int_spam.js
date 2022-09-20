function InitContent_INT_SPAM()
{
	window.strInputTitle = 'Suspicious/unexpected ROC E-mails';
	window.strInputSubTitle = 'For Internal Use Only';
	
	window.strInputBody = "";
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Please be aware that there has been a spate of spam emails recently that are made to look like they come from <a href="mailto:support@roc-group.com">support@roc-group.com</a>.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Please delete any unexpected or suspicious-looking emails claiming to be from that address. In fact, that address is not generally used to send any email, it is used for receiving support emails.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Unfortunately, even with anti-spoofing mechanisms such as SPF we cannot prevent spammers using any "From" address that they like, so you should never assume that an email really does come from the purported sender.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Regards,');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, '<p>');
	window.strInputBody = appendToTemplateField(window.strInputBody, 'Paul Hammond.');
	window.strInputBody = appendToTemplateField(window.strInputBody, '</p>');
}
