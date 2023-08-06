export function sluglify(text: string) {
	return text.replace(/\s+/g, '-')
}

export function unsluglify(text: string) {
	return text.replace(/-/g, ' ')
}
