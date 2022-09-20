function InitContent_INT_LEAVER()
{
	window.strInputTitle = 'Farewell to {INSERT NAME HERE}';
	window.strInputSubTitle = 'For Internal Use Only';
	
	const MSG_STYLE = "color:#6EADFF;";

	window.strInputBody = "";
	
	// Lead in
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p>${placeholder("HISTORY PARAGRAPH PLACEHOLDER")}</p>`);
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p>${placeholder("WISH THEM WELL PLACEHOLDER")}</p>`);
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p>${placeholder("SAY GOODBYE IN PERSON DETAILS PLACEHOLDER")}</p>`);

	// Message from their line manager
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><strong>A message from ${placeholder("NAME OF LINE MANAGER")}, ${placeholder("LINE MANAGER ROLE")} (${placeholder("TEAM")}):</strong></p>`);
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><span style="${MSG_STYLE}">${placeholder("PLACEHOLDER FOR PARAGRAPH")}</span></p>`);

	// Message from their line manager's line manager
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><strong>A message from ${placeholder("NAME OF SECOND LEVEL LINE MANAGER")}, ${placeholder("SECOND LEVEL LINE MANAGER ROLE")}:</strong></p>`);
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><span style="${MSG_STYLE}">${placeholder("PLACEHOLDER FOR PARAGRAPH")}</span></p>`);

	// Message from the managing director
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><strong>A message from Will Jackson, Managing Director:</strong></p>`);
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><span style="${MSG_STYLE}">${placeholder("PLACEHOLDER FOR PARAGRAPH")}</span></p>`);

	// Message from the leaver
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><strong>Of course, the final word goes to ${placeholder("FIRST NAME OF LEAVER")}:</strong></p>`);
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><span style="${MSG_STYLE}">${placeholder("PLACEHOLDER FOR PARAGRAPH")}</span></p>`);
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><span style="${MSG_STYLE}">${placeholder("PLACEHOLDER FOR PARAGRAPH")}</span></p>`);
}