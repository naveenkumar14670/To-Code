let query = window.location.href;
let url = new URL(query);

let problemStatement = url.searchParams.get('problemStatement');
problemStatement = problemStatement.replace(/\n/g, '<br>');
problemStatement = problemStatement.replace(/ /g, '&nbsp;');

let constraints =
	url.searchParams.get('constraints') == ''
		? 'Not Specified'
		: url.searchParams.get('constraints');
constraints = constraints.replace(/\n/g, '<br>');
constraints = constraints.replace(/ /g, '&nbsp;');

let inputFormat =
	url.searchParams.get('inputFormat') == ''
		? 'Not Specified'
		: url.searchParams.get('inputFormat');
inputFormat = inputFormat.replace(/\n/g, '<br>');
inputFormat = inputFormat.replace(/ /g, '&nbsp;');

let outputFormat =
	url.searchParams.get('outputFormat') == ''
		? 'Not Specified'
		: url.searchParams.get('outputFormat');
outputFormat = outputFormat.replace(/\n/g, '<br>');
outputFormat = outputFormat.replace(/ /g, '&nbsp;');

let sampleInput =
	url.searchParams.get('sampleInput') == ''
		? 'Not Specified'
		: url.searchParams.get('sampleInput');
sampleInput = sampleInput.replace(/\n/g, '<br>');
sampleInput = sampleInput.replace(/ /g, '&nbsp;');

let sampleOutput =
	url.searchParams.get('sampleOutput') == ''
		? 'Not Specified'
		: url.searchParams.get('sampleOutput');
sampleOutput = sampleOutput.replace(/\n/g, '<br>');
sampleOutput = sampleOutput.replace(/ /g, '&nbsp;');

let codeLanguage = url.searchParams.get('codeLanguage');

let code = url.searchParams.get('code');
code = code.replace(/</g, '&lt;');
code = code.replace(/>/g, '&gt;');

let elements = [
	{
		label: 'Problem Statement',
		value: problemStatement,
	},
	{
		label: 'Constraints',
		value: constraints,
	},
	{
		label: 'Input Format',
		value: inputFormat,
	},
	{
		label: 'Output Format',
		value: outputFormat,
	},
	{
		label: 'Sample Input',
		value: sampleInput,
	},
	{
		label: 'Sample Output',
		value: sampleOutput,
	},
	{
		label: 'Code Language',
		value: codeLanguage,
	},
];

let html = '';
elements.forEach((element) => {
	html += `<h4 class = "textLabel2">${element.label}</h4> <p class = "content">${element.value}</p>`;
});

let codePart = `
<h4 class = "textLabel2">Code</h4>
<pre>
<code class="language-${codeLanguage}">
${code}
</code>
</pre>
`;
html += codePart;

let data = document.getElementById('data');
data.innerHTML = html;

function generatePDF() {
	const element = document.getElementById('main');
	var opt = {
		image: { type: 'jpeg', quality: 1 },
		html2canvas: { scale: 5 },
		jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' },
	};
	html2pdf().set(opt).from(element).save();
}
