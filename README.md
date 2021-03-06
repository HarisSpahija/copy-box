[![devDependency Status](https://david-dm.org/bentatum/copy-box/dev-status.svg)](https://david-dm.org/bentatum/copy-box#info=devDependencies)

# copy-box

A React component that copies whats in the box.

### Installation
`npm i copy-box`

### Usage
```javascript
import { Input } from 'copy-box'
const Demo = () => <Input value="Copy this text just by clicking it"/>
```

You can customize the Input component by passing a custom component to the `is` prop.

```javascript
import { Input as CopyBoxInput } from 'copy-box'
import { Input as RebassInput } from 'rebass'

const Page = () =>
    <CopyBoxInput
        is={RebassInput}
        value="Copy this text just by clicking it"
    />
```

You have access to the copyToClipboard method so if you need to copy to clipboard as a result of another action other than onFocus, or maybe you need to program something for the onFocus event of your input, you can still copy the input's value to clipboard with the `copyToClipboard` method.

```javascript
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

### Input
| Prop          | Type                      | Description                                                             |
| :------------ | :------------------------ | :---------------------------------------------------------------------- |
| is ('input')  | oneOfType([string, func]) | Replaces the generic html input with a input component of your choosing |
