export default function copyToClipboard () {
  const input = document.getElementsByClassName('copy-box-input')[0]
  input.setSelectionRange(0, input.value.length)
  document.execCommand('copy')
}
