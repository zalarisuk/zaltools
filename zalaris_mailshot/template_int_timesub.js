Date.prototype.addDays = function(p_intDays)
{
  let dtNew = this;
  dtNew.setDate(dtNew.getDate() + p_intDays);
  return dtNew;
}

function lastBusinessDayOfCurrentMonth()
{
	// Get the last day of the month
	const now = new Date();
	let dtLast = new Date(now.getFullYear(), now.getMonth() + 1, 0);

	// If the last day of month is a weekend, move to the preceding Friday
	if(dtLast.getDay() > 5) dtLast = dtLast.addDays(-1 * (dtLast.getDay() - 5));

	// Format and return the output
	return dtLast.toLocaleDateString("en-GB", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
}

function firstBusinessDayOfNextMonth()
{
	// Get the last day of the month
	const now = new Date();
	let dtFirst = new Date(now.getFullYear(), now.getMonth() + 1, 1);

	// If the first day of month is a Saturday or Sunday, move to the following Monday
	if(dtFirst.getDay() > 5) dtFirst = dtFirst.addDays(-1 * (8 - dtFirst.getDay()));

	// Format and return the output
	return dtFirst.toLocaleDateString("en-GB", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
}

function InitContent_INT_TIMESUB()
{
	// Get the relevant time-related data to insert into the body of the message
	let strLBDCM = lastBusinessDayOfCurrentMonth();
	let strFBDNM = firstBusinessDayOfNextMonth();
	const astrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let strCurrentMonth = astrMonths[new Date().getMonth()]

	window.strInputTitle = 'Timesheet Submission Deadline';
	window.strInputSubTitle = 'For Internal Use Only';
	window.strInputBody = `
	<p><strong>Timesheet Submission Deadline is ${strLBDCM}</strong></p>
	<p>To ensure month end is complete within deadlines, please can we remind you:</p>
	<ul>
		<li>All employees to submit completed timesheets for ${strCurrentMonth} by close of business ${strLBDCM}.</li>
		<li>All approvers must have all their direct reports ${strCurrentMonth} timesheets approved by close of business ${strFBDNM}.</li>
	</ul>
	<p>Many Thanks</p>`;
}