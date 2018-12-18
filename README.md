# jest-html-differ

## Getting started

In your Jest _setup.js_ file, include:
```
import 'jest-html-differ'
```

### Usage
```javascript
describe('jest-html-differ', () => {

  it('should compare two snippets of html', () => {
    expect('<div></div>').sameHtmlAs('<div>b</div><span></span>');
  }); // this will fail!

  it('should compare a snippet of html with a snapshot', () => {
    expect('<div></div>').sameHtmlAsSnapshot(/*takes the same arguments as Jest's `toMatchSnapshot(...)`*/);
  });

});
```

## License

[MIT](LICENSE).
