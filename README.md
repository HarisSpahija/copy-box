# copy-box

## Installation
`npm i copy-box`

## Usage
```
import { Input } from 'copy-box'
const Demo = () => <Input value="Copy this text just by clicking it"/>
```

You can customize the Input component by passing a custom component to the `is` prop.

```
import { Input as CopyBoxInput } from 'copy-box'
import { Input as RebassInput } from 'rebass'

const Page = () =>
    <CopyBoxInput
        is={RebassInput}
        value="Copy this text just by clicking it"
    />
```

You have access to the copyToClipboard method so if you need to copy to clipboard as a result of another action other than onFocus, or maybe you need to program something for the onFocus event of your input, you can still copy the input's value to clipboard with the `copyToClipboard` method.

```
import { Input, copyToClipboard } from 'copy-box'

const Page = () =>
    <div>
        <Input
            value="Copy this text just by clicking it"
            onFocus={() => {
                doSomethingSpecial()
                copyToClipboard()
            }}
        />
        <Button onClick={copyToClipboard}>
            Click to copy the text inside the text input
        </Button>
    </div>
```
