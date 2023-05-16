function InitContent_INT_NEW()
{
	window.strInputTitle = 'Welcome to {INSERT NAME HERE}';
	window.strInputSubTitle = 'For Internal Use Only';
	
	const MSG_STYLE = "color:#6EADFF;";

	window.strInputBody = "";

	// Standard lead in
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p>We would like to take this opportunity to introduce ${placeholder("NEW STARTER NAME")} to Zalaris. ${placeholder("NEW STARTER FIRST NAME")} joins #teamZalaris as a ${placeholder("NEW STARTER ROLE")} in the ${placeholder("NEW STARTER'S TEAM")} Team reporting to ${placeholder("LINE MANAGER FIRST NAME")}.
	Please join us in welcoming ${placeholder("CHOOSE: him/her/them")} and we hope that you each take time to engage with and welcome ${placeholder("NEW STARTER FIRST NAME")} into our organisation over the coming months.
	</p>`);

	// New starter intro
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><strong>A personal introduction from ${placeholder("NEW STARTER FIRST NAME")}:</strong></p>`);
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><span style="${MSG_STYLE}">${placeholder("PLACEHOLDER FOR PARAGRAPH")}</span></p>`);
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><span style="${MSG_STYLE}">${placeholder("PLACEHOLDER FOR PARAGRAPH")}</span></p>`);
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><span style="${MSG_STYLE}">${placeholder("PLACEHOLDER FOR PARAGRAPH")}</span></p>`);

	// Message from line manager
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><strong>A message from ${placeholder("LINE MANAGER NAME")}, ${placeholder("LINE MANAGER ROLE")}:</strong></p>`);
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><span style="${MSG_STYLE}">${placeholder("PLACEHOLDER FOR PARAGRAPH")}</span></p>`);

	// Message from a service line head or director
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><strong>A message from ${placeholder("SERVICE MANAGER/DIRECTOR NAME")}, ${placeholder("SERVICE MANAGER/DIRECTOR ROLE")}:</strong></p>`);
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><span style="${MSG_STYLE}">${placeholder("PLACEHOLDER FOR PARAGRAPH")}</span></p>`);

	// Cheesy hash tags
	window.strInputBody = appendToTemplateField(window.strInputBody, `<p><strong>#teamZalaris #Go${placeholder("NEW STARTER FIRST NAME, NO SPACE BEFORE IT")}!</strong></p>`);
}
