const form = document.getElementById('appform')

const filterFields = (elements) => {
	return Object.entries(elements)
		.map((m) => m[1])
		.filter((f) => {
			return (
				(f.type == 'radio' && f.checked) ||
				(f.type !== 'radio' && f.type !== 'submit')
			)
		})
}

form.addEventListener('submit', (event) => {
	event.preventDefault()

	event.submitter.disabled = true

	let fields = filterFields(event.target)

	for (let [index, inputElement] of [...fields].entries()) {
		let data =
			inputElement.type == 'radio' ? inputElement.name : inputElement.id

		let outputElement = document.querySelector(`[data-input="${data}"]`)

		outputElement.classList.add('svgOutputColumn')

		setTimeout(() => {
			outputElement.classList.remove('svgOutputColumn')
			outputElement.innerText = inputElement.value
		}, (index + 1) * 1000)
	}
})
